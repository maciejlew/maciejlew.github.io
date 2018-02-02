---
layout: post
title: "JSHint - jakość kodu JS pod kontrolą"
date: "2016-05-16 18:00:00"
description: Jak zapewnić wysoką jakość kodu JS rozwijanej aplikacji?
keywords: java script, jshint, jslint, jakość oprogramowanie, inżynieria oprogramowania, aplikacje webowe, jakość kodu, testowanie kodu, quality assurance
tags:
- QA
- JS
- DDF
- DSP2016
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

JavaScript pozwala na wiele. Pozwala także zrobić sobie śmietnik w aplikacji.
Z czasem każda zaniedbana aplikacja będzie zmierzać w kierunku nieczytelnej papki
kodu, coraz trudniej będzie się w tym wszystkim połapać, a zwłaszcza gdy pracuje 
nad nią sztab ludzi. Entropia projektu rośnie. Na szczęście są rozwiązania 
pozwalające na **ujednolicenie stylu kodowania w JS, wyłapanie błędogennych 
instrukcji, wskazanie skomplikowanych fragmentów kodu**. W tym wpisie przeczytasz 
jak ułatwić sobie codzienną pracę nad kodem JS wykorzystując do tego [narzędzie 
JSHint][1].

### A może JSLint?

JSHint i JSLint są bardzo zbliżonymi narzędziami. Jak można się dowiedzieć w 
Internetach, JSHint powstał w wyniku niezadowolenia brakiem możliwości konfiguracji
JSLint. Problem ten już został rozwiązany w JSLint, ale konkurencyjne narzędzie
pozostało. JSHint powstał na przełomie 2010/2011 roku. Był rozwijany przez te 
kilka ostatnich lat, a wiele projektów pisanych w JS zaczęło go używać do 
sprawdzania jakości wytworzonego kodu. Na chwilę obecną [JSHint obsługuje ponad 
80 opcji konfiguracyjnych][2], a autorzy zachęcają do dodawania kolejnych jeśli 
dla kogoś to jeszcze za mało. **Zainteresowanie JSHint ciągle rośnie**, co może 
potwierdzić poniższy wykres:

<noscript>
W tym miejscy znajduje się element wymagający do wyświetlenia włączonej obsługi 
JavaScript w przeglądarce.
</noscript>
<script type="text/javascript" src="//www.google.pl/trends/embed.js?hl=pl&q=jslint,+jshint&cid=TIMESERIES_GRAPH_0&export=5&w=600&h=330"></script>

### Jak używać JSHint?

Narzędzia tego możemy używać na kilka sposobów. Pierwszym i najwygodniejszym na
początek jest wejście na [jego stronę][1] i skorzystanie z analizy online kodu.
Gdy się już przekonasz do jego zalet, o wiele lepszym wyjściem jest lokalna 
instalacja tego dodatku. Można to zrobić przy pomocy NPM, globalnie lub per 
projekt.

Zainstalowane JSHint można wykorzystać albo uruchamiając je per wybrany plik lub
dla całego projektu. Uruchamianie dla projektu jest o wiele wygodniejsze gdy 
przygotuje się już swój własny zestaw reguł. **Reguły te zapisuje się w plikach
.jshintrc**. JSHint jest na tyle sprytny, że kaskadowo przeszukuje strukturę 
projektu szukając plików reguł znajdujących się najbliżej analizowanego kodu.
Jeśli nic nie zostanie znalezione zostanie użyty globalny *.jshintrc* znajdujący 
się w katalogu domowym użytkownika lub zaaplikowany zostanie domyślny zestaw reguł.

W moim projekcie [Yeoman wygenerował pliki .jshintrc automatycznie][4] uzupełniając 
je w popularnymi zestawami reguł. Przykładowo główny plik zestawu reguł wygląda 
tak:

    {
      "node": true,
      "browser": true,
      "esnext": true,
      "bitwise": true,
      "camelcase": true,
      "curly": true,
      "eqeqeq": true,
      "immed": true,
      "indent": 2,
      "latedef": true,
      "newcap": true,
      "noarg": true,
      "quotmark": "single",
      "regexp": true,
      "undef": true,
      "unused": true,
      "strict": true,
      "trailing": true,
      "smarttabs": true,
      "globals": {
        "angular": false,
        "cordova": false,
        "StatusBar": false
      }
    }

Odgadnięcie znaczenia większość tych opcji powinno być bardzo łatwe i intuicyjne,
szczegółowy ich opis można znaleźć w [wykazie dostępnych opcji JSHint][2]. Yeoman
wygenerował mi także zestaw reguł dla plików testów:

    {
      "node": true,
      "browser": true,
      "esnext": true,
      "bitwise": true,
      "camelcase": true,
      "curly": true,
      "eqeqeq": true,
      "immed": true,
      "indent": 2,
      "latedef": true,
      "newcap": true,
      "noarg": true,
      "quotmark": "single",
      "regexp": true,
      "undef": true,
      "unused": true,
      "strict": true,
      "trailing": true,
      "smarttabs": true,
      "globals": {
        "after": false,
        "afterEach": false,
        "angular": false,
        "before": false,
        "beforeEach": false,
        "browser": false,
        "describe": false,
        "expect": false,
        "inject": false,
        "it": false,
        "jasmine": false,
        "spyOn": false
      }
    }

Jak widać w większości się one powielają. Różnica występuje jedynie w obiekcie 
*globals*, w którym definiuje się nazwy zmiennych globalnych dostarczanych przez
środowisko przeglądarki, framework lub właśnie przez biblioteki do testowania
kodu JS. Widzimy tu więc znane z [frameworka Jasmine][5] zmienne takie jak:
*jasmine*, *after\**, *before\**, *describe*, *expect*, *it*, itd. Te zmienne nie 
zostaną potraktowane jako niezdefiniowane gdy JSHint napotka je podczas analizy 
plików testów.

Możliwe jest także definiowanie reguł JSHint bezpośrednio w pliku z analizowanym 
kodem. Robi się to przy pomocy odpowiednich komentarzy, Na przykład [biblioteka 
angular-gettext][3] podczas generowania tłumaczeń dodaje taki oto komentarz:

    angular.module('gettext').run(['gettextCatalog', function (gettextCatalog) {
    /* jshint -W100 */
        gettextCatalog.setStrings('pl_PL', {"Type drug name":"Wpisz nazwę leku"});
    /* jshint +W100 */
    }]);

Widzimy tu wyłączenie opcji *W100* dla wybranego fragmentu kodu, a następnie jej
ponowne włączenie. Nie polecałbym jednak tej metody bo takie komentarze w kodzie
także zaciemniają jego obraz.

### Ciekawe problemy

#### Automatycznie generowane pliki

Czasami w źródłach aplikacji znajdują się automatycznie generowane pliki, 
dostarczane przez zewnętrzne oprogramowanie, które nie stosują się do naszych 
reguł JSHint. Mamy wtedy 3 wyjścia z tej sytuacji:

1. ingerować w kod biblioteki i poprawić jej generator kodu wedle naszego uznania;
2. zmieniać za każdym razem generowane pliki dodając odpowiednie komentarze wyłączające
wybrane zestawy reguł;
3. nie sprawdzać wcale tych plików, zakładając że są dobre.

Rozwiązanie 3. wydaje się być najbardziej rozsądne. Na szczęście JSHint pozwala
na takie wyjątki, wystarczy że w katalogu projektu utworzymy plik *.jshintignore*,
w którym umieścimy ścieżki do ignorowanych plików - problem z głowy.

#### Mało intuicyjne opisy błędów i ostrzeżeń, brakujące opcje

Większość błędów i ostrzeżeń generowanych podczas analizy kodu narzędziem JSHint
posiada opisy które jednoznacznie pozwalają na wskazanie reguły której powiązane
z nimi wyrażenia nie spełniły. Czasami jednak zdarza się, że dostaniemy coś co do 
niczego nie pasuje, np: *"Do not use Number as a constructor"*. Powiedzmy że chcemy
wyłączyć tą regułę. Jak ją znaleźć? Dobrze jest włączyć bardziej gadatliwy tryb
działania JSHint. Robimy to dodając opcję *--verbose*. Otrzymamy wtedy kod 
błędu/ostrzeżenia, w tym przypadki *W053*. Teraz należy przeszukać całe [repozytorium
JSHint][6]. Pozwoli to namierzyć kawałek kodu który odpowiedzialny jest za 
przygotowanie komunikatu. Po krótkiej analizie okazuje się że nie ma opcji 
pozwalającej na wyłączenie tego ostrzeżenia.

#### Fałszywe ostrzeżenia o brakujących kasach

Czasami dla lepszej czytelności kodu wynosimy definicje klas do osobnych plików,
a wykorzystujemy je w zupełnie innych częściach aplikacji, w innych plikach.
Odpowiednio dołączone pliki lub ich scalenie przed wysłaniem do przeglądarki 
powodują że wszystko działa tak jak należy. Niestety JSHint o tym nie wie i z 
tego powodu ostrzega nas, np: *"'DoseComplexParameters' is not defined."*. Aby 
się pozbyć tych fałszywie pozytywnych ostrzeżeń należy dodać w opcji *globals*
swoje nazwy klas.

### Czy JSHint jest dla wszystkich?

Zdecydowanie tak. Pomimo kilku opisanych powyżej problemów jest to narzędzie 
bardzo pomocne oraz intuicyjne w użyciu. Możliwość automatyzacji analizy statycznej 
kodu bardzo pomaga w jego utrzymaniu i dalszym rozwoju. Mogę polecić JSHint każdemu
kto chce dbać o stan swojego projektu i myśli o jego przyszłości w dalszej
perspektywie niż tylko do momentu gdy klient zapłaci fakturę.

[1]: http://jshint.com
[2]: http://jshint.com/docs/options/
[3]: /2016/04/26/i18n-z-angularjs-gettext.html
[4]: /2016/03/03/yeoman-idziemy-na-front.html
[5]: /2016/03/07/zapach-jasminu.html
[6]: https://github.com/jshint/jshint

