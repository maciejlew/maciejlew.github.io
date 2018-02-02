---
layout: post
title: LMSConfig - nowy system zarządzania konfiguracją LMS
date: 2014-07-16 18:27:00
description: Opis LMSConfig - nowego systemu zarządzania konfiguracją w LMS
keywords: LMS, pliki konfiguracyjne, uiconfig, pliki INI, wzorce projektowe,LMS GIT, refaktoryzacja, zmienne globalne, LMS GIT, rozwój LMS
tags:
- LMS
- OOP
breadcrumbs:
  - url: /
    title: LionNet
    type: AboutPage
  - url: /blog/
    title: Blog
    type: CollectionPage
  - url: page.url
    title: page.title
    type: BlogPosting
---

Z głównej gałęzi LMS na GitHubie można już pobierać LMS w wersji, w której stara
i dobrze znana **globalna tablica $CONFIG została zastąpiona poprzez nowy mechanizm
dostępu do zmiennych konfiguracyjnych LMSConfig**. W tym artykule opiszę co się
zmieniło i jak korzystać z tego nowego mechanizmu.

> Zmienne globalne to zło. 

W LMS zmienne globalne są dość powszechne, mogą powodować zamieszanie gdy ktoś 
nieuważnie je sobie nadpisze. Tablice globalne nie zapewniają poza tym
żadnego mechanizmu ochrony przetrzymywanych wartości przed zmianą. Kod oparty na 
zmiennych globalnych kiepsko się testuje. To pierwszy i fundamentalny powód dla 
którego zmobilizowano się aby tą sytuację zmienić. Kolejną sprawą była spora 
redundancja kodu odpowiedzialnego za wypełnienie tablicy $CONFIG. Redundancja ta 
pojawiała się w pliku wejściowym LMS, USERPANELu, wszystkich skryptach bin i kilku 
innych miejscach. Dodatkowo w tablicy $CONFIG przetrzymywano zmienne konfiguracyjne 
pochodzące z trzech źródeł i kod odpowiedzialny za ich tam załadowanie był 
porozrzucany po całym projekcie. Na cały $CONFIG składały się więc zmienne z:

 * plików ini (lms.ini)
 * tablicy uiconfig przetrzymywanej w bazie danych
 * pola rights tabeli users (zapisane binarnie prawa poszczególnych użytkowników)

Jako że OOP jest teraz w modzie ;) postanowiono rozwiązać ten problem wprowadzając
nową hierarchię klas odpowiedzialnych za ładowanie zmiennych z różnych źródeł z 
możliwością późniejszej rozbudowy o kolejnych dostawców danych konfiguracyjnych.
Całość oparto na rozbudowanym, dla potrzeb hierarchicznej budowy dotychczasowego 
$CONFIG, wzorcu [Property](http://phpedia.pl/wiki/Property). Model klas w UML 
przedstawia poniższy diagram:


Na diagramie widzimy, że centralną klasą jest **LMSConfig**. To obiekty tej klasy 
dostarczają nam dane konfiguracyjne. Dla końcowego użytkownik najistotniejsze 
powinny być metody publiczne tejże klasy, czyli **getUIConfig**, **getIniConfig**, 
**getUserRightsConfig** oraz **getConfig**. Pierwsze trzy z nich zwracają adekwatny do 
swojej nazwy zestaw danych konfiguracyjnych, natomiast ostatnia jest kombinacją 
trzech pierwszych. W tym miejscu należy zwrócić uwagę, że pobranie danych 
konfiguracyjnych z UI lub danych konfiguracyjnych użytkownika nie jest możliwe 
bez połączenia z bazą danych, które z kolei nie jest możliwe bez załadowania 
konfiguracji z plików ini gdzie znajdują się dane uwierzytelniające aplikację w 
bazie danych.

Samo ładowanie i parsowanie danych zostało napisane w taki sposób, aby możliwe
było w przyszłości rozszerzenie systemu o kolejne źródła danych konfiguracyjnych.
Klasy dostarczające dane oraz uczestniczące w ich prasowaniu powinny więc 
implementować interfejsy, odpowiednio, **ConfigProviderInterface** oraz 
**ConfigParserInterface**. Przewidziano także przekazywanie specyficznych opcji
poprzez wszechobecne, przekazywane wgłąb hierarchii wywołań tablice $options.

Sparsowane dane konfiguracyjne przechowywane są specjalnie przygotowanej 
strukturze danych składającej się z klas **ConfigContainer**, **ConfigSection**, 
**ConfigVariable**. Obiekty ConfigContainer są, jak nazwa wskazuje, kontenerami dla
sekcji czyli obiektów ConfigSection, które z kolei agregują obiekty ConfigVariable.
Każda z danych konfiguracyjnych posiada swoją nazwę, wartość oraz komentarz.

Do danych konfiguracyjnych możemy dostać się w następujący sposób:

```
$_DBTYPE = LMSConfig::getIniConfig()->getSection('database')->getVariable('type')->getValue();
$_DBHOST = LMSConfig::getIniConfig()->getSection('database')->getVariable('host')->getValue();
$_DBUSER = LMSConfig::getIniConfig()->getSection('database')->getVariable('user')->getValue();
$_DBPASS = LMSConfig::getIniConfig()->getSection('database')->getVariable('password')->getValue();
$_DBNAME = LMSConfig::getIniConfig()->getSection('database')->getVariable('database')->getValue();
$_DBDEBUG = false;
if (LMSConfig::getIniConfig()->getSection('database')->hasVariable('debug')) {
        $_DBDEBUG = chkconfig(LMSConfig::getIniConfig()->getSection('database')->getVariable('debug')->getValue());
}
```

Powyższy przykład pokazuje jak pobrać sekcję, zmienną i jej wartość, a także jak
sprawdzić czy zmienna istnieje w sekcji (można także sprawdzać, czy istnieje
sekcja).

Aby uprościć dostęp do wartości zmiennych konfiguracyjnych powstała klasa 
**ConfigHelper** zawierająca statyczne metody **getConfig**, **checkConfig** oraz
**checkValue**. Wszystkie z nich przyjmują jako argument string składający się
z połączonej kropką nazwy sekcji i nazwy zmiennej. Działanie metod jest następujące:

 * getConfig: zwraca wartość zmiennej, jeśli ta istnieje, lub wartość domyślną;
 * checkConfig: sprawdza czy zmienna istnieje;
 * checkValue: sprawdza wartość logiczną zmiennej;

Przykłady:

```
$_FORCE_SSL = ConfigHelper::checkConfig('phpui.force_ssl');
$SESSION = new Session($DB, ConfigHelper::getConfig('phpui.timeout'));
$idate = ConfigHelper::checkValue(ConfigHelper::getConfig('finances.cashimport_use_idate', false));
```

Nowy system LMSConfig został wprowadzony do głównej gałęzi LMS, stare metody 
zarządzania konfiguracją zostały zastąpione i niebawem zostaną całkowicie wycofane.
**Zaleca się opieranie własnych rozszerzeń do LMS na nowym systemie LMSConfig.**

