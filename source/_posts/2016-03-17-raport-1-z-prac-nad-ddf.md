---
layout: post
title: "Raport #1 z prac nad DDF"
date: "2016-03-17 21:10:00"
description: 'Raport #1 z postępów w pracach nad projektem DDF - Drug Dose Framework'
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

Mija już powoli trzeci tydzień trwania konkursu oraz mojej pracy nad projektem.
Nadszedł czas aby się wyspowiadać co też do tej pory udało mi się stworzyć w 
[projekcie DDF]({{site.url}}/2016/03/01/dam-sie-poznac.html).

## Model

Udało mi się do tej pory napisać aż 4 klasy modelu. Są to proste klasy typu Value
Object - kilka pól, prosta walidacja, gettery, settery. Postanowiłem także na
wprowadzenie do projektu dokumentacji w postaci diagramów UML. Jak to czasami bywa
zaczynam od tyłu - w pierwszej kolejności powstał diagram klas, ubogi ale zawsze coś.
Zamodelowane zostały klasy opakowujące 
[formaty leków obsługiwanych w DDF]({{site.url}}/2016/03/12/format-opisu-lekow-w-ddf.html).
Modelowanie będę przeprowadzał w bardzo fajnym programiku Dia. Plik z modelem
znajdziecie w 
[repozytorium](https://github.com/maciejlew/drug-dose-framework/blob/master/doc/ddf.dia), 
poniżej prezentuję wspomniany diagram klas:

[Diagram klas w projekcie DDF]({{site.url}}/assets/img/ddf001.png)

## Kontroler

Jeśli chodzi o kontrolery to skorzystałem z wbudowanego w AngularJS modułu routingu
- ngRoute. Powstały trzy proste kontrolery, obsługujące listę leków, szczegóły
leku oraz formatkę obliczania dawek leku (która jeszcze niczego sensownego nie
wylicza). Poznałem także framework Angular na tyle, że zrobiłem ładowanie plików 
serwisem $http.

## Widok

Powstały trzy partiale do wspomnianych wyżej kontrolerów. Wykorzystuję w nich
takie komponenty frameworka Ionic jak ion-list i ion-option-button - naprawdę
świetnie działają!

## Testy

Ostro testuję moją apkę. Do tej pory powstały 44 testy w frameworku Jasmine.
Na razie są to proste asercje i 
[testowanie rzucanych wyjątków]({{site.url}}//2016/03/15/testowanie-wyjatkow-w-jasmine.html). 
Pokrycie kodu to niemal 90%:

 * Statements : 89.38% ( 202/226 )
 * Branches : 79.61% ( 82/103 )
 * Functions : 80.95% ( 51/63 )
 * Lines : 89.38% ( 202/226 )

## Plany

To tyle na razie. W kolejnym tygodniu zamierzam wyspecyfikować przy pomocy 
diagramów UML działanie aplikacji oraz dokończyć model.


