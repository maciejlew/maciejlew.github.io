---
layout: post
title: "Routing w LMS"
date: 2015-07-28 00:00:00
description: "Routing w LMS"
keywords: LMS, Lan Management System, problemy w LMS, rozwój LMS, LMS GIT, routing, systemy pluginów, moduły w LMS
tags:
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
    type: BlogPostingg
---

W tym wpisie postaram się przedstawić **jak działa routing w LMS**, czyli jak to się 
dzieje, że po wpisaniu w adresie URL np.: ?m=customerlist widzimy ekran z listą
klientów a nie coś innego.

#### Podstawowy routing w LMS

Zapytania jakie wysyłamy do LMS przechodzą przez umieszczony w głównym katalogu 
skrypt index.php. Można powiedzieć że jest to centralny punkt aplikacji, front 
controller. W tym skrypcie, zanim wygenerowana zostanie odpowiedź, dzieje się 
wiele różnych rzeczy, m.in.:

 1. Ładowanie podstawowej konfiguracji z pliku lms.ini
 2. Podłączenie do bazy danych
 3. Ładowanie konfiguracji z bazy danych
 4. Uruchomienie mechanizmów sesji i autoryzacji
 5. Uruchomienie menadżera pluginów
 6. Uruchomienie silnika szablonów
 7. Sprawdzanie statusu użytkownika: czy zalogowany czy też nie
 8. Przekazanie sterowania do odpowiedniego modułu
 9. Zamknięcie sesji i połączenia z bazą danych

Przebieg ten pokazano na rysunku poniżej:

<div class="gallery">

    <div class="galleryItem">
        <div class="stack twisted">
            <a href="/assets/img/lms_routing/lms_routing.png">
                <img
                    src="/assets/img/lms_routing/lms_routing.png"
                    alt="Podstawowy routing w LMS"
                    title="Podstawowy routing w LMS"
                />
            </a>
        </div>
    </div>

</div>

W zmiennej "m" żądania GET przesłanego do LMS umieszczona jest nazwa modułu. 
Odpowiada ona, w najprostszym przypadku, nazwie pliku znajdującego się w katalogu 
"modules" którego kod ma zostać wykonany. Po dotarciu do przedostatniego punktu 
z listy sterowanie zostaje przekazane właśnie do kodu PHP z tego pliku.

#### Routing z pluginami w LMS

W podstawowym wariancie routingu dzieje się całkiem sporo, ale to jeszcze nie 
wszystko. **Od momentu wprowadzenia mechanizmu  pluginów na ścieżce wykonywanego 
kodu pojawiają się zaczepy (hooki)**. Można je rozpoznać po takiej składni: 

```
$plugin_manager->executeHook('nazwa_hooka', $jakas_zmienna);
```

Łańcuch znaków "nazwa_hooka" to identyfikator zaczepu, natomiast $jakas_zmienna
przechowuje dane jakie chcemy przekazać w danym momencie do pluginu w celu ich dalszej
obróbki przez plugin. Informacja o tym że wykonywany kod dotarł do zaczepu jest 
przekazywana do menadżera pluginów który następnie informuje o tym znane sobie 
pluginy. Przebieg pokazano na rysunku poniżej:

<div class="gallery">

    <div class="galleryItem">
        <div class="stack twisted">
            <a href="/assets/img/lms_routing/lms_routing_with_plugins.png">
                <img
                    src="/assets/img/lms_routing/lms_routing_with_plugins.png"
                    alt="Routing w LMS z uwzględnieniem pluginów"
                    title="Routing w LMS z uwzględnieniem pluginów"
                />
            </a>
        </div>
    </div>

</div>

Na schemacie widzimy że po dotarciu do zaczepu "hook1" informacja o tym oraz dane
powiązane z tym zaczepem są przekazywane dalej do pluginów. W tym przykładzie mamy
dwa pluginy, ale w ogólności może być ich mniej lub więcej, plugin może obsługiwać
dany zaczep lub go ignorować. Plugin obsługuje zaczep, może wykonywać swoje zadania,
modyfikować przekazane dane. Po zakończeniu pracy z danym zaczepem plugin powinien
oddać menadżerowi dane, po czym są one przekazywane ewentualnym kolejnym pluginom.

**Pluginy mogą zmienić routing w LMS**. Zostało to tak zaimplementowane aby można było
całkowicie odseparować się od akcji wykonywanych w modułach LMS np przesłaniając je.
Można tego dokonać rozszerzając tablice ścieżek w których LMS szuka modułów.
Najbardziej nadaje się do tego zaczep o nazwie "modules_dir_initialized", a można 
to zrobić w następujący sposób:

```
class AnotherPluginExample extends LMSPlugin
{
    public function registerHandlers()
    {
        $this->handlers = array(
            'modules_dir_initialized' => array(
                'class' => 'AnotherPluginHooksHandler',
                'method' => 'modulesDirInit'
            ),
        );
    }
}

class AnotherPluginHooksHandler
{

    public function modulesDirInit(array $hook_data = array())
    {
        $plugin_modules = PLUGINS_DIR . '/AnotherPluginExample/modules';
        array_unshift($hook_data, $plugin_modules);
        return $hook_data;
    }

}
```

Ten krótki przykład pokazuje w jaki sposób obsługiwane są zaczepy. Menadżer pluginów
informuje plugin o tym że wykonywany kod dotarł do zaczepu "modules_dir_initialized".
Plugin sprawdza że w swojej tablicy obsługi zaczepów posiada wpis dla danego zaczepu.
Wywoływana jest wskazana metoda ze wskazanej klasy. Metoda ta otrzymuje dane przekazane
do zaczepu po czym zwraca je po modyfikacji. W tym przypadku do podstawowej tablicy
ze ścieżkami w których LMS szuka modułów dodana została, na początku tej tablicy,
ścieżka w której plugin przetrzymuje dostarczane w paczce z nim moduły.

#### Routing w LMS całościowo

Podsumowując, routing w LMS przebiega następująco:

 1. LMS ładuje potrzebne zasoby, tworzy odpowiednie obiekty do ich obsługi, zaczyna się wykonywanie kodu z głównej ścieżki
 2. LMS dochodzi do takiej instrukcji uruchamiającej zaczep, mówi managerowi pluginów: "hej, dotarłem do zaczepu 'nazwa_zaczepu', jak masz jakieś włączone pluginy to powiedz im że jesteśmy w tym miejscu i przekaż im $jakas_zmienna"
 3. manager pluginów sprawdza czy ma załadowane jakieś pluginy, mówi im: "jesteśmy w punkcie 'nazwa_hooka', jeśli chcecie tu coś zrobić to mam dla Was $jakas_zmienna, róbcie z nią co chcecie, ale później fajnie by było jakbyście mi ją oddali to będę mógł przekazać kolejnym pluginom"
 4. plugin, jeśli jest zainteresowany, wykonuje swoją funkcję dla danego zaczepu i zwraca $jakas_zmienna managerowi
 5. manager pluginów gdy już nie ma więcej pluginów zwraca $jakas_zmienna do LMS
 6. LMS kontynuuje wykonywanie kodu z głównej ścieżki

