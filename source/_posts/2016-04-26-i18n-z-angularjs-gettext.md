---
layout: post
title: "I18N z angular-gettext"
date: "2016-04-26 22:10:00"
description: 'Jak łatwo i przyjemnie przetłumaczyć aplikację napisaną w AngularJS'
keywords: daj się poznać 2016, konkurs programistyczny, aplikacja konkursowa, drug dose framework, aplikacja mobilna, pas pediatryczny, dawkowanie leków, ionic framework, i18n, l10n, internacjonalizacja, angular-gettext, angularjs
tags:
- DSP2016
- JS
- DDF
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

I18N aplikacji może być niemałym problemem jeśli się o niej nie pomyśli zawczasu.
W tym wpisie dowiesz się jak można przeprowadzić łatwo i przyjemnie **proces 
internacjonalizacji w AngularJS**.

Internacjonalizacja to takie przygotowanie aplikacji, aby jej późniejsze 
przystosowanie dla odbiorców posługujących się innym językiem było jak najłatwiejsze
i jak najbardziej ustandaryzowane w ramach aplikacji. Dzięki I18N możemy otworzyć 
naszą aplikację na użytkowników którzy nie posługują się jej natywnym językiem.

### Biblioteka angular-gettext

[Biblioteka angular-gettext](https://angular-gettext.rocketeer.be/) 
pozwala w łatwy sposób przystosować treść szablonów,
dyrektyw, a nawet komunikatów generowanych w kontrolerach frameworka AngularJS do
pracy w wielojęzycznym środowisku.

#### Instalacja biblioteki

Instalacja biblioteki w projekcie polega na wydaniu kilku poleceń:

    bower install --save angular-gettext
    npm install grunt-angular-gettext --save-dev

Po ich wydaniu mamy bibliotekę dołączoną do zależności naszego projektu. Należy 
jeszcze ją odpowiednio skonfigurować.

#### Konfiguracja biblioteki i narzędzi pomocniczych

Aby dodać przygotowane przez autora biblioteki pomocnicze narzędzia do grunta 
należy, w pliku *Gruntfile.js*, wprowadzić następujące zmiany:

    grunt.loadNpmTasks('grunt-angular-gettext');

Powyższe polecenie zaimportuje nam zestaw wbudowanych w angular-gettext narzędzi,
które także należy skonfigurować:

    nggettext_extract: {
      pot: {
        options: {
          attributes: ['placeholder']
        },
        files: {
          'app/locale/en_UK/LC_MESSAGES/ddf.pot': ['app/partials/*.html']
        }
      },
    }

Narzędzie **nggettext_compile służy do wyszukiwania w kodzie aplikacji tekstów
do przetłumaczenia**. W powyższej konfiguracji dodajemy dodatkowy atrybut HTML,
którego wartość ma być również brana pod uwagę podczas analizowania kodu (o tym 
jak oznaczać teksty do tłumaczenia a także o własnych dyrektywach przeczytasz
poniżej). Wskazujemy także lokalizację pliku POT, czyli szablonu dla wszystkich 
tłumaczeń oraz lokalizację, która ma zostać przeszukana pod kątem tekstów oznaczonych
jako do przetłumaczenia.
    
    nggettext_compile: {
      all: {
        files: {
          'app/scripts/translations.js': ['app/locale/**/*.po']
        }
      },
    },

Narzędzie **nggettext_extract służy do kompilacji przygotowanych plików PO z 
tłumaczeniami do kodu JS**. Wskazujemy tu ścieżkę w której ma zostać utworzony 
skompilowany plik oraz ścieżkę w której znajdują się pliki z gotowymi tłumaczeniami.

Ponad to, należy w pliku index.html załadować bibliotekę oraz plik z tłumaczeniami,
najlepiej przed kodem samej aplikacji:

    <script src="bower_components/angular-gettext/dist/angular-gettext.js"></script>
    <script src="scripts/translations.js"></script>

Kolejnym krokiem jest wstrzyknięcie modułu do naszej aplikacji, np:

    var dependencies = ['gettext', 'ionic', 'ui.router', 'DrugDoseFrameworkControllers'];
    var app = angular.module('DrugDoseFrameworkApp', dependencies);

Możemy także uzależnić język aplikacji od ustawień przeglądarki klienta:

    app.run(function ($ionicPlatform, gettextCatalog) {
        switch (window.navigator.language.substr(0, 2)) {
            case 'pl':
                gettextCatalog.setCurrentLanguage('pl_PL');
                break;
            case 'de':
                gettextCatalog.setCurrentLanguage('de_DE');
                break;
        }
    };

lub podpiąć metodę *setCurrentLanguage* pod jakiś element interfejsu umożliwiając
tym samym zmianę języka samemu użytkownikowi, wedle jego upodobań.

#### Przygotowanie tekstów

Biblioteka angular-gettext definiuje kilka sposobów w jaki możemy przygotować
teksty do tłumaczeń tak, aby mogły zostać przez nie odnalezione. Pierwszym z nich 
jest **otoczenie tekstu znacznikiem \<translate\>**:

    <translate>sentence to translate</translate>

Jeśli nasz tekst znajduje się już w innym znaczniku nie musimy wprowadzać kolejnego,
**możemy użyć atrybutu translate**:

    <span translate>sentence to translate</span>

Innym pomysłem może być **użycie filtru translate**:

    {{ "{{ 'sentence to translate' | translate " }}}}

Możemy także przygotować własną dyrektywę wspierającą tłumaczenia:

    app.directive('placeholder', ['gettextCatalog', function (gettextCatalog) {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                element.attr('placeholder', gettextCatalog.getString(attrs.placeholder));
            }
        };
    }]);

Jeśli chcemy przetłumaczyć coś w kontrolerze to należy do tego wykorzystać metodę
getString, jak pokazałem w powyższym przykładzie.

Biblioteka angular-gettext wspiera także takie zaawansowane opcje jak: komentarze 
do tłumaczeń, kontekst tłumaczeń (rzeczownik, czasownik, itp.), tłumaczenia w 
liczbie mnogiej, interpolację zmiennych w tłumaczone teksty, lazy-loading tłumaczeń.
O tym wszystkim możesz poczytać w 
[bardzo dobrej dokumentacji biblioteki](https://angular-gettext.rocketeer.be/dev-guide/).

#### Tłumaczenie tekstów

Gdy mamy już oznaczony tekst który chcemy przetłumaczyć, nadchodzi pora aby się 
za to zabrać. Na szczęście nie musimy go teraz szukać ponownie i przepisywać do
plików z tłumaczeniami. Należy wykonać komendę **grunt nggettext_extract**. W
lokalizacji wskazanej w konfiguracji tego narzędzia znajdziemy plik POT, a w nim 
wszystkie znalezione teksty, wraz z ich lokalizacją w projekcie. W kolejnym kroku 
należy skopiować szablon, zmieniając mu rozszerzenie na PO, do lokalizacji tłumaczeń
które chcemy obsługiwać (nazwa pliku może być dowolna), np:

 * app
   * locale
     * en_UK
       * LC_MESSAGES
         * ddf.pot
     * pl_PL
       * LC_MESSAGES
         * ddf.po
     * de_DE
       * LC_MESSAGES
         * ddf.po

Do pliku *ddf.po* z polskimi tłumaczeniami należy skopiować zawartość szablonu POT.
Oprócz samego tłumaczenia możemy także uzupełnić nagłówki tego pliku, zgodnie z
[dokumentacją formatu PO](https://www.gnu.org/software/gettext/manual/html_node/Header-Entry.html).
Nie jest to wymagane, ale może pomóc przyszłym tłumaczom naszej aplikacji.

Gdy mamy już wszystko przetłumaczone należy skompilować to do pliku JS. Pomoże nam
w tym polecenie **grunt nggettext_compile**. Po jego wykonaniu w pliku *translations.js*
powinno znaleźć się coś podobnego do :

    angular.module('gettext').run(['gettextCatalog', function (gettextCatalog) {
    /* jshint -W100 */
        gettextCatalog.setStrings('de_DE', {
            "Type drug name":"Schreiben Sie die Medikamentennamen",
            "calculate":"berechnen"
        });
        gettextCatalog.setStrings('pl_PL', {
            "Type drug name":"Wpisz nazwę leku",
            "calculate":"oblicz"
        });
    /* jshint +W100 */
    }]);

(linie zostały celowo zwinięte dla lepszej czytelności, normalnie wszystko jest 
zminimalizowane).

Od teraz tłumaczenia są dostępne dla aplikacji. Jeśli zmiana języka aplikacji 
oparta jest o **window.navigator.language** to możemy wszystko łatwo przetestować
zmieniając ustawienia języka w opcjach przeglądarki.

Opisana tu procedura została przeze mnie wdrożona w mojej konkursowej aplikacji 
DDF. Jak to zrobiłem możesz 
[zobaczyć na GitHubie](https://github.com/maciejlew/drug-dose-framework/commit/030e2680373f6f51471b34e085b1c687303a49f6). 
W razie problemów napisz komentarz - postaram się pomóc.


