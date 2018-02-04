---
layout: post
title: "Raport #2 z prac nad DDF"
date: "2016-04-14 22:50:00"
description: 'Raport #2 z postępów w pracach nad projektem DDF - Drug Dose Framework'
keywords: daj się poznać 2016, konkurs programistyczny, aplikacja konkursowa, drug dose framework, aplikacja mobilna, pas pediatryczny, dawkowanie leków, yeoman, ionic framework, generator aplikacji, jasmine, bdd, testowanie aplikacji, wyjątki
tags:
- DSP2016
- JS
- DDF
- OOP
- QA
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

Konkurs DSP2016 jest już na półmetku. Czas po raz kolejny pochwalić się postępami
w pracy nad DDF.

Prace dotarły do takiego etapu że uznałem za stosowne wydanie na świat wersji 0.1
mojej aplikacji <<brawa>>.

## Model

Model aplikacji rozrósł się do 10 klas. Spróbowałem w JS zaimplementować takie
znane wzorce jak fabryka i strategia - myślę że się to udało. Na chwilę obecną 
wydaje mi się że prace nad modelem zostały ukończone.

Rozbudowałem diagram UML o nowe klasy oraz zaznaczyłem interakcję  między nimi:

[Diagram klas w projekcie DDF]({{site.url}}/assets/img/ddf002.png)

## Kontroler

Dostosowałem kontrolery do nowego modelu. W miejscach w których dane ładowane 
były bezpośrednio z plików JSON zastosowałem ich parsowanie przy pomocy fabryk
i strategii. Podłączyłem także model obliczający dawki. Dodałem prostą obsługę 
błędów.

## Widok

Zmieniłem widok formularza obliczania dawki. W tej chwili wyniki i ewentualne
błędy prezentowane są w postaci wyskakujących alertów. Mam zamiar to zmienić 
na komponent modal, dostępny w Ionic, w najbliższej przyszłości.

## Testy

Udało mi się utrzymać wysoki poziom pokrycia kodu testami jednostkowymi. A nawet
go zwiększyć. Pokrycie kodu to niemal 95% <<oklaski rozległy się nawet z 
najdalszej części sali>>:

 * Statements : 94.71% ( 322/340 )
 * Branches : 85.82% ( 115/134 )
 * Functions: 92.59% ( 75/81 )
 * Lines: 94.71% ( 322/340 )

## Plany

W ciągu kilku następnych tygodni mam zamian ogarnąć wgrywanie aplikacji na 
urządzenia mobilne, zmienić trochę wygląd - zwłaszcza wyniki obliczeń, dodać 
interfejs pozwalający na wybór zestawu leków, popracować nad komunikacją apki z
systemem plików na telefonie.


