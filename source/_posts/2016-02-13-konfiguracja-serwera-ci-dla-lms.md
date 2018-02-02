---
layout: post
title: "Serwer CI dla LMS"
date: 2016-02-13 08:00:00
description: "Opis konfiguracji serwera Continous Integration dla Lan Management System"
keywords: Jenkins, PHP, continous integration, quality assurance, Lan Management System, static analyse, unit testing, jakość oprogramowania, serwer ciągłej integracji, testy jednostkowe
tags:
- QA
- LMS
breadcrumbs:
  - url: /
    title: "LionNet"
    type: AboutPage
  - url: /blog/
    title: "Blog"
    type: CollectionPage
  - url: page.url
    title: page.title
    type: BlogPosting
---

Napisałem ten krótki opis konfiguracji serwera CI dla LMS w celu ułatwienia 
osobom zainteresowanym rozwojem LMS automatyzacji procesu sprawdzania 
poprawności i jakości kodu w repozytorium LMS. **Za serwer CI posłuży 
[Jenkins](https://jenkins-ci.org/) ze względu na jego popularność oraz gotowe 
komponenty integrujące go z narzędziami służącymi do analizy kodu napisanego w 
języku PHP**. Instalacja będzie działała "out-of-box" gdy 
[pull request #621](https://github.com/lmsgit/lms/pull/621)
zostanie przyjęty. Do tego czasu należy za źródło LMSa brać 
[mój fork](https://github.com/maciejlew/lms).

Przed instalacją warto zapoznać się z możliwościami Jenkinsa - materiałów
na jego temat w Internecie jest mnóstwo.

Jenkins zostanie skonfigurowany z obsługą narzędzi takich jak:

 * [PHPCS](https://github.com/squizlabs/PHP_CodeSniffer)
 * [PHPMD](http://phpmd.org/)
 * [PHPCPD](https://github.com/sebastianbergmann/phpcpd)
 * [PDEPEND](http://pdepend.org/)
 * [PHPUnit](https://phpunit.de/).

Informacje o nich także znajdziecie w sieci.

**Opis instalacji i konfiguracji powstał częściowo w oparciu o 
[szablon PHP dla Jenkinsa](http://jenkins-php.org/) oraz częściowo o moje
własne doświadczenia**. Będzie to opis dla pojedynczego noda.
Instalacja przeprowadzę krok po kroku. W sieci możecie znaleźć gotowe rozwiązania 
pozwalające uprościć proces budowy, tworzenie architektury dla testów, 
jak np. kontenery Dockera, ale nie będę tego omawiał w tym wpisie. 
Instalację możecie przeprowadzić na stacji roboczej lub na wirtualnej maszynie - 
nie ma to znaczenia z punktu widzenia opisanej poniżej procedury.

## Instalacja

Instalacja opisałem jest dla dystrybucji Debian i pochodnych. Zakładam że
w systemie jest zainstalowane to co dotychczas developer musiał i tak mieć
zainstalowane, czyli PHP5, Composer i git.

Jako root wykonuję polecenia:

    wget -q -O - http://pkg.jenkins-ci.org/debian/jenkins-ci.org.key | apt-key add -
    echo 'deb http://pkg.jenkins-ci.org/debian binary/' >> /etc/apt/sources.list
    aptitude update
    aptitude install jenkins php5-xdebug curl

Jako zwykły użytkownik wykonuję polecenia:

    wget http://localhost:8080/jnlpJars/jenkins-cli.jar
    java -jar jenkins-cli.jar -s http://localhost:8080 install-plugin checkstyle cloverphp crap4j dry htmlpublisher jdepend plot pmd violations warnings xunit git
    curl -L https://raw.githubusercontent.com/sebastianbergmann/php-jenkins-template/master/config.xml | java -jar jenkins-cli.jar -s http://localhost:8080 create-job php-template

Po pomyślnej instalacji Jenkins powinien działać już w tle jako daemon i być 
dostępny w przeglądarce pod adresem localhosta na porcie 8080.

## Konfiguracja

Konfigurację przeprowadzę przy pomocy interfejsu webowego Jenkinsa.
W opisie konfiguracji będę używał angielskich nazw elementów interfejsu
z powodu tego że część z nich nie jest przetłumaczona na język polski.
Po otwarciu strony głównej tej aplikacji powinniśmy widzieć
panel zarządzania Jenkinsem. (Domyślnie nie są skonfigurowane żadne
ACL więc każdy może dowolnie modyfikować konfigurację i uruchamiać
zadania - nie jest to najlepsze rozwiązanie na dłuższą metę i może 
prowadzić do rzeczy strasznych ;). Skonfigurowanie ACL wykracza
poza zakres tego wpisu - informacje jak to zrobić można znaleźć w
sieci).

Ostatnie z poleceń wykonanych podczas instalacji dodało do Jenkinsa
szablon dla projektów pisanych w PHP. Na podstawie tego szablonu
zbuduję konfigurację dla LMS (tzw. joba).

Wybieram **"New Item"**. Wypełniam nazwę, np: **"LMS"**. Wybieram 
ostatnią dostępną opcję: **"Copy existing Item"** i w pole **"Copy
from"** wpisuję **"php-template"**. Klikam **"OK"**.

W tym momencie na liście jobów widzę nowy projekt o nazwie LMS.
Klikając w jego nazwę przechodzę do podglądu. W menu wybieram "Configure".

Konfigurację joba zaczynam od usunięcia zbędnych elementów. Elementy wykonują
się z góry na dół listy. Każdy z takich bloczków mogę przesuwać przy 
pomocy myszy lub usuwać klikając w znajdujące się w jego obrębie przyciski
**"Delete"**. Usuwam bloki nazywające się **"Plot build data"** związane z narzędziem
PHPLOC oraz bloki **"Publish HTML reports"** związane z PHPDOX. Pierwsze z narzędzi pozwala na
analizę złożoności projektu - moim zdaniem raczej nie przydaje się w codziennej 
pracy, poza tym jego instalacja przy pomocy Composera kończy się konfliktami
z innymi bardziej przydatnymi narzędziami. Drugie z narzędzi pozwala na 
wygenerowanie dokumentacji technicznej na podstawie adnotacji w kodzie,
także moim zdaniem jest to zbędne.

Po poprzednim kroku moja konfiguracja jest już prawie gotowa, poza tym
że nie wiadomo gdzie jest kod projektu który chcę testować ;).
Mógłbym wszystko skonfigurować tak aby celowało w moją kopię roboczą,
jeśli akurat znajdowałaby się ona na tym samym systemie, ale nie jest to dobry 
pomysł. Skonfiguruję Jenkinsa tak, aby zrobił sobie "clone" z mojego
lokalnego repozytorium LMS a następnym razem gdy uruchomię build robił "pull". 
Mam już doinstalowany plugin obsługujący git w Jenkinsie więc jedyne co pozostaje
mi zrobić to wybrać opcję **"Git"** w sekcji **"Source Code Management"**.
Podaję URL do repo. Znajduje się ono na tym samym hoście więc wpisuję
ścieżkę do niego: **"/home/maciek/lms"**. Jeśli byłoby ono gdzieś w 
sieci to podałbym URL, np: **"https://github.com/lmsgit/lms"**. Można także wskazać
branch inny niż master. Jest to dobre rozwiązanie jeśli chcemy przetestować
swoje własne zmiany przez wysłaniem ich do głównego brancha i dalej do
LMS na GitHubie. Wpisuję w pole **"Branches to build"** wartość **"*/dev"**.

Zajmę się teraz do instalacją wspomnianych wcześniej narzędzi, dzięki którym
przetestujemy LMS. Są one wskazane w pliku composer.json więc należałoby
wykonać polecenie "composer update". Nie będę tego jednak robić ręcznie -
zajmie się tym Jenkins. Dodaję kolejny krok wybierając **"Add build step"** >
**"Execute shell"**. Ustawiam ten bloczek na samym początku sekcji **"Build"**.
W jego treści wpisuję:

    cd $WORKSPACE
    composer update

Kolejnym krokiem na liście zdarzeń naszego joba jest "Invoke Ant". Spowoduje
on wykonanie targetu "full-build", który jest opisany w pliku build.xml 
dostarczanym wraz z LMS. Target ten, a właściwie inkludowane przez niego
targety, automatyzują cały proces testowania. Niektóre z nich korzystają
z plików konfiguracyjnych także dostarczanych wraz z LMS w katalogu build.
Myślę że nazwy targetów oraz to co się w nich dzieje jest zrozumiałe więc
nie będę się za bardzo o nich rozpisywał, opis można znaleźć na stronie
[szablonu PHP dla Jenkinsa](http://jenkins-php.org/), jedyna różnica polega
na tym że ścieżki dostosowałem do struktury LMS.

## Uruchomienie

Skonfigurowany job mogę uruchomić klikając w przyciski **"Build now"** znajdujące
się w kilku miejscach interfejsu. Spowoduje to uruchomienie wszystkich 
skonfigurowanych wcześniej kroków w projekcie. Podgląd na żywo mogę uzyskać 
klikając w **"Console Output"**. Tam też znajdę wszystkie informacje w przypadku
niepowodzenia. 

Domyślnie "workspace" Jenkinsa znajduje się w **"/var/lib/jenkins/jobs"**. Tam 
też powinien utworzyć się folder o nazwie naszego projektu, a w nim sam
klon repozytorium oraz konfiguracja, logi i raporty z buildów. W przypadku problemów
z konfiguracją Jenkinsa, jeśli podejrzewamy że są one związane z którymś
z targetów opisanych w pliku build.xml, opłaca się uruchamiać tylko 
wybrany podejrzany target. Mogę to zrobić z poziomu katalogu projektu w workspace
wydając komendę, jako użytkownik jenkins:

    cd /var/lib/jenkins/jobs/LMS/workspace/
    ant <nazwa_targetu>

Opublikowałem także [mój referencyjny konfig joba dla LMS](https://gist.github.com/maciejlew/9b207f32be4af5bf8cbe). 
W razie problemów możecie go porównać z konfigiem znajdującym się w 
**/var/lib/jenkins/jobs/LMS/config.xml**.

Po skończonym buildzie kolor ikonki stanu przy projekcie wskazuje, czy w 
projekcie są poważne błędy, czy może wszystkie testy się udały. Klikając
w numer builda mogę przejść do informacji o nim, a stamtąd do podglądu
raportów wygenerowanych przez uruchomione pomocnicze narzędzia.


