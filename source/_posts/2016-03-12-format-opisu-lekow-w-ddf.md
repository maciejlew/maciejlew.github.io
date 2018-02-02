---
layout: post
title: "Format opisu leków w DDF"
date: 2016-03-12 08:00:00
description: 'Konkurs "Daj się poznać 2016"'
keywords: daj się poznać 2016, konkurs programistyczny, aplikacja konkursowa, drug dose framework, aplikacja mobilna, pas pediatryczny, dawkowanie leków, yeoman, ionic framework, generator aplikacji, jasmine, bdd, testowanie aplikacji
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

Na potrzeby [aplikacji DDF]({{site.url}}/2016/03/01/dam-sie-poznac.html) 
(fajnie jest wprowadzać swoje własne 3-znakowe akronimy - informatycy to uwielbiają) 
wymyśliłem format w jakim opisywane będą leki i ich dawkowanie.

Wszystkie dane przechowywane będą w plikach JSON, dzięki czemu nie będzie problemów
z ich tworzeniem, pobieraniem i przetwarzaniem w aplikacji DDF. Format ten jest 
także bardzo "ludzki" więc myślę że nawet osoby nietechniczne będą w stanie 
przygotować swoje zestawy leków.

## Zestawy leków

Zestawy leków opisywane będą w plikach o następującej strukturze:

(Przykład)[https://gist.github.com/maciejlew/aaef76a1781717f15743]

## Dane o leku, dawkowanie

Każdy lek powinien posiadać identyfikator, nazwę, opis oraz parametry funkcji
dawkowania. Wyróżniłem dwa podstawowe typy opisu dawkowania: przy pomocy funkcji
liniowej (*simple*) oraz przy pomocy wartości dyskretnych (*complex*). Typ będzie
potrzebny aby algorytm wiedział z czym ma do czynienia przed rozpoczęciem parsowania
danych. Zazwyczaj wzór potrzebny do wyliczenia podawany jest w postaci prostej 
zależności liniowej: 

**y(x) = a * x** 

ogólnie:

**y(x) = a * x + b** 

(Przykład)[https://gist.github.com/maciejlew/df0aef76b78203fc2034]

jednak być może ktoś chciałby stworzyć bardziej wyrafinowane zależności, jak: 

**y_min(x) = a_min * x + b; y_max(x) = a_max * x + b**

(Przykład)[https://gist.github.com/maciejlew/bbb28441759d7262922d]

lub nawet:

**y_1 = a_1; y_2 = a_2; ...; y_n = a_n**

(Przykład)[https://gist.github.com/maciejlew/35eaf86339e6fad33e14]

Te wszystkie typy opisów zamierzam obsługiwać w DDF.

