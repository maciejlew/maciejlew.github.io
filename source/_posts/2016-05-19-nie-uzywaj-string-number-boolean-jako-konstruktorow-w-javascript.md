---
layout: post
title: "Nie używaj String|Numer|Boolean jako konstruktorów w JavaScript!"
date: "2016-05-19 19:00:00"
description: "Dlaczego nie powinno się używać String|Numer|Boolean jako konstruktorów w JavaScript?"
keywords: java script, programowanie obiektowe, prymitywy, obiekty wbudowane, obiekty podstawowe, typy proste, string, number, boolean, konstruktory, dobre  praktyki wytwarzania oprogramowania, refaktoryzacja
tags:
- QA
- JS
- DDF
- DSP2016
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

Śmieszne może się wydawać to że w języku obiektowym (czy też prototypowanym) jest 
możliwość utworzenia prostych obiektów opakowujących wartości proste, a 
jednocześnie wszyscy odradzają korzystania z nich. W tym wpisie dowiesz się dlaczego
tak właśnie dzieje się w JavaScript.

### Typy proste w JS

JS posiada kilka prymitywów, czyli typów reprezentujących najprostsze i najczęściej
wykorzystywane w aplikacjach byty. Są to *boolean, number, string, null, undefined*.
Pierwsze trzy możemy utworzyć wykorzystując konstruktory obiektów o tej samej nazwie:

    var b1 = true;
    var b2 = new Boolean(true);
    var n1 = 1;
    var n2 = new Number(1);
    var s1 = 'a';
    var s2 = new String('a');

Wszystko fajnie, dopóki nie musimy gdzieś w kodzie sprawdzić typu zmiennej by np.
[rzucić odpowiednim wyjątkiem][1]. Jeśli w naszej domenie zmienna powinna być 
stringiem to musimy to zrobić np. tak:

    if (!(s instanceof String) || typeof s !== 'string') {
        throw new TypeError('Wrong type!');
    }

Sprawdzenie samym *typeof* nic nam niestety nie pomoże bo:

    typeof new String('a') === 'object'

Kolejne problemy pojawią się gdy będziemy chcieli porównać wartość zmiennej:

    if (s === 'a') {
        console.log('wartość s to a');
    }

W przypadku gdy *s = s2* powyższe sprawdzenie nam nie zadziała. W przypadku gdy 
*s = s1*, zobaczymy w konsoli log. Możemy, co prawda, zrezygnować z operatora ===
i zastąpić go słabszym porównaniem ==, ale nie jest to zalecana praktyka która 
pociąga za sobą inne problemy.

Przedstawione powyżej problemy są dwoma głównymi przyczynami dla których **nie zaleca
się korzystać z wbudowanych w JS obiektów String, Number i Boolean**. [Narzędzie
do analizy statycznej kodu JSHint][2] po natrafieniu na wykorzystanie w kodzie 
konstruktora *new* powyższych typów zgłasza błąd, np: *"Do not use Number as a 
constructor"*. Na szczęście wykrycie tego typu pułapek w kodzie i zastąpienie
ich typami prostymi jest bardzo łatwe, a może zaoszczędzić wielu nieporozumień
w przyszłości. 

Muszę się przyznać, że sam nadużywałem tworzenia obiektów Number i String. Robiłem 
to aby choć trochę zapanować nad tym co się dzieje ze zmiennymi w moim [projekcie
DDF][3] i zrobić sobie substytut silnego typowania. Taki podejście niestety wiąże 
się z dużą ilością nadmiarowego kodu sprawdzającego typy zmiennych i konwertującego
prymitywy do obiektów je opakowujących. To się po prostu nie opłaca. Po 
refraktoryzacji do typów prostych kod wygląda bardziej czytelnie, jest go także
dużo mniej. Ilość przypadków testowych dla testów jednostkowych także spada.
Łatwiej jest zadbać o dobre [pokrycie kodu testami][4].

[1]: /2016/04/05/typy-wyjatkow-w-javascript.html
[2]: /2016/05/16/jshint-jakosc-kodu-js-pod-kontrola.html
[3]: https://github.com/maciejlew/drug-dose-framework
[4]: /2016/05/18/code-coverage-w-karma.html

