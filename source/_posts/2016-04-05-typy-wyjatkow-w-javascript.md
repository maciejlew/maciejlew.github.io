---
layout: post
title: "Typy wyjątków w JavaScript"
date: "2016-04-05 21:45:00"
description: 'Omówienie typów wyjątków dostępnych w JavaScript'
keywords: wyjątki w JavaScript, obsługa błędów w JavaScript, rzucanie wyjątków, dobre wzorce programowanie, jakość oprogramowania
tags:
- DSP2016
- JS
- OOP
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

W tym wpisie znajdziesz informacje wbudowanych w JS typach wyjątków. Przedstawię 
także moje spostrzeżenia kiedy i jakich wyjątków używać.

## Rzucanie wyjątkami

Nikt nie lubi gdy go aplikacja znienacka atakuje błędem. Jeszcze gorzej jest gdy
z opisu błędu nic nie wynika. Czujemy się wtedy niepewnie. Być może jest to pierwsze
nasze spotkanie z apką a tu od razu taka niespodzianka. Przeklinamy wtedy wszytko
i wszystkich - aplikację za to że jest taka do niczego, programistów za to że w 
ogóle zaczęli zajmować się w życiu programowaniem (no chyba że to nasza aplikacja 
i na dodatek jesteśmy pewni że to my to napisaliśmy ;)). Jedynym co w takiej chwili
mogłoby nas troszeczkę uspokoić to jasny i jednoznaczny komunikat błędu. Niestety
nie zawsze tak jest.

W moich aplikacjach staram się implementować jak najbardziej intuicyjną obsługę
błędów i wyjątków - czyli stanu aplikacji który jest nietypowy i nie powinien się
zdarzyć. W obecnych czasach aplikacje to już nie proste, monolityczne twory. 
Coraz częściej zdarza się że aplikacje mają budowę modułową, a moduły mogą zostać
ponownie wykorzystane w innych miejscach. Z tego powodu kontekst w jakim sytuacja 
staje się wyjątkowa zawęża się. Dobrym zwyczajem staje się jak największe 
ograniczenie odpowiedzialności modułu/klasy - tylko do intuicyjnie im przypisywanych 
zachowań. Z tego powodu coś co w ogólnym kontekście jest sytuacją jasną i obsługiwaną
przez program w kontekście modułu/klasy jest sytuacją wyjątkową. W takim przypadku
rzucany z moduły wyjątek jest obsługiwany przez wyższe warstwy aplikacji.

## Typy wyjątków

W chwili obecnej JS udostępnia 7 typów błędów. Są to Error i dziedziczące po nim
EvalError, RangeError, ReferenceError, SyntaxError, TypeError, URIError. Z tymi 
błędami możemy się spotkać podczas wykonywania skryptu, nie muszą być one przez 
nas specjalnie implementowane aby je zobaczyć. Poza wymienionymi typami możemy 
także przygotować swój własny obiekt który rzucimy w niestandardowej sytuacji 
poleceniem throw.

Wszystkie standardowe obiekty błędów w JS tworzy się w analogiczny sposób:

    throw new Error(message);
    throw new EvalError(message);
    throw new RangeError(message);
    throw new ReferenceError(message);
    throw new SyntaxError(message);
    throw new TypeError(message);
    throw new URIError(message);

### Error

Jest to podstawowy typ błędu, najczęściej wykorzystywany w znanych mi aplikacjach
(ale to raczej z braku wiedzy o innych bardziej opisowych typach).
Poza samą treścią nie niesie on z sobą żadnej informacji. We własnych programach
wykorzystuję go gdy nic innego nie pasuje do kontekstu danej sytuacji wyjątkowej.

### EvalError

Ten błąd mógł się pojawić w przypadku problemów podczas wykonywania funkcji eval.
Obecnie zastąpiony SyntaxError. Mam nadzieję że nie wykorzystujesz funkcji eval, 
lub robisz to z głową i jeśli nie ma innego wyjścia. Osobiście nie widzę
zastosowania dla tego typu błędów, choć nic nie broni go rzucić w dowolnym miejscu 
aplikacji niekoniecznie związanym z eval.

### RangeError

Błąd zakresu jest jednym z bardziej przydatnych typów błędu w JS. Może się on 
pojawić podczas zabaw z tablicami w JS lub typem Number. Można go wykorzystać
tworząc [walidację danych przekazywanych do funkcji i metod, w tym do setterów]({{site.url}}/2016/03/24/walidacja-w-akcesorach-javascript.html).
**Przydaje się on gdy sprawdzamy czy wartość numeryczna znajduje się w zbiorze wartości
z określonej dziedziny** - ja tak często robię.

### ReferenceError

Jeden z częściej spotykanych błędów rzucanych przez silnik przeglądarki. 
Powstaje gdy wykonywana jest próba przypisania nieistniejącego obiektu do zmiennej.
Podobnie jak dla EvalError, nie widzę zastosowania w innych przypadkach.

### SyntaxError

To typ błędu to to samo co EvalError, tyle że istnieje w obecnym oficjalnym 
standardzie JS.

### TypeError

Błąd typu. Jeden z częściej rzucanych przez JS. Występuje np. gdy pobierany jest 
jakiś obiekt drzewa DOM, a następnie bez sprawdzenia czy ta akcja przyniosła 
zamierzony efekt wykonywane są na nim inne operacje. Lub gdy na typie string 
próbujemy wykonać metody specyficzne dla typu numeric itp. Ogólnie gdy obiekt 
nie ma metody której chcemy użyć. Tak jak RangeError może być
wykorzystywany w walidacji argumentów funkcji i metod. **Możemy go rzucać gdy typ
przekazanego argumentu nie zgadza się z dziedziną. Jest to pewien substytut braku
silnego typowania w JS**. Tego typ także często (nad)używam w swoich aplikacjach.

### URIError

Błąd URI może pojawić się podczas próby sparsowania błędnego URI (czego pewnie
nie trudno się było domyślić, ale właśnie po to by się nie domyślać tworzymy typy
błędów). Funkcje które można podejrzewać o rzucanie wyjątkami URIError to:

 * decodeURI(), 
 * decodeURIComponent(), 
 * encodeURI(), 
 * encodeURIComponent(), 
 * escape(), 
 * unescape().

## Czym rzucać?

Jak widać mamy sporo fajnych typów błędów w JS, jednak **w moim subiektywnym rankingu
wygrywają TypeError i RangeError**. Pozostałe typy poza przypisanymi do siebie
sytuacjami raczej nie pasują opisu spotykanych w aplikacjach problemów, ale być 
może Tobie uda się im znaleźć jakieś dodatkowe zastosowanie. Oczywiście nic nie
broni nas przed tym aby **rozszerzać wachlarz dostępnych typów błędów o własne,
bardziej adekwatne do kontekstu typy wyjątków**.

