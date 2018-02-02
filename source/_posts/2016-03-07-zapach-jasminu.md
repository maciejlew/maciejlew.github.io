---
layout: post
title: "Zapach Jaśminu"
date: 2016-03-07 20:00:00
description: 'Jasmine - framework do testów BDD w JavScript'
keywords: daj się poznać 2016, konkurs programistyczny, aplikacja konkursowa, drug dose framework, aplikacja mobilna, pas pediatryczny, dawkowanie leków, yeoman, ionic framework, generator aplikacji, jasmine, bdd, testowanie aplikacji
tags:
- DSP2016
- JS
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

Postanowiłem, aby uniknąć w przyszłości nieprzyjemnych zapachów w mojej aplikacji
[Drug Dose Framework](http://lion.net.pl/2016/03/01/dam-sie-poznac.html), 
dodać do projektu wsparcie dla Jasmine - frameworka dla testów BDD w JS.

W tym celu musiałem trochę zaktualizować zależności w projekcie. Nie obyło się
bez chwili walki z NPM. Należało odinstalować kilka innych modułów konkurencyjnych
bibliotek do testowania aby możliwe było uruchomienie Jasmine.

    npm uninstall karma-chai
    npm uninstall karma-mocha
    npm install karma grunt-karma karma-phantomjs-launcher karma-coverage --save-dev
    npm install karma-jasmine karma-chrome-launcher --save-dev

Wygląda na to że stos narzędzi JS do zainstalowania i nauczenia się w ramach 
jednego małego projektu może rozrastać się z dnia na dzień. Przypomnę tylko że 
do tej pory to:

 * NodeJS
 * NPM
 * AngularJS
 * Ionic
 * [Yeoman](http://lion.net.pl/2016/03/03/yeoman-idziemy-na-front.html)
 * Bower
 * Grunt
 * Karma
 * Jasmine

Zobaczymy co przyniesie jutro.

