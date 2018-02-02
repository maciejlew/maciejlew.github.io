---
layout: post
title: "Yeoman! Idziemy na front!"
date: 2016-03-03 19:00:00
description: 'Yeoman - generator struktury projektów dla każdego!'
keywords: daj się poznać 2016, konkurs programistyczny, aplikacja konkursowa, drug dose framework, aplikacja mobilna, pas pediatryczny, dawkowanie leków, yeoman, ionic framework, generator aplikacji
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

Idziemy na front! Trzeba się przygotować. Misja będzie trudna. Na szczęście mamy
wsparcie.

## Generatory aplikacji JS

Ostatnimi czasu dużo się działo. Zwłaszcza w światku JS. Powstało sporo frameworków
i narzędzi. Aż głowa może rozboleć gdy nagle trzeba się tego wszystkiego nauczyć. 
Nie inaczej było ze mną. Chcę utworzyć pierwszą aplikację w **AngularJS**, **Ionic** i
**Apache Cordova**. I co? Od czego zacząć? Ściągać paczki? Tworzyć strukturę katalogów?
No ale zaraz, gdzie ja to powinienem wszystko zainstalować? Zaraz, zaraz...

Każde ww. narzędzi ma swój generator, czyli specjalne interaktywne narzędzie
zrobione tylko po to, aby łatwiej można było rozpocząć pracę. A wiec AngularJS ma
generator który stworzy nam szkielet aplikacji AngularJS. Cordova ma generator
który stworzy nam szkielet aplikacji Cordova. Ionic ma generator który stworzy 
nam szkielet aplikacji Ionic z Angularem i Cordova. No fajnie. Wygląda na to że
najlepiej wykorzystać generator Ionic, który powinien nam wszystko ładnie utworzyć
tak aby nie trzeba się było już niczym przejmować i od razu zacząć kodować. Nic 
bardziej mylnego :)

Polecenie *ionic start* rzeczywiście wygeneruje nam szkielet. Przeglądając go, 
mając pewne nawyki z innych frameworków wyposażonych w generatory, można odnieść
wrażenie że trochę tego za dużo się wygenerowało. Na dodatek nie mamy jeszcze pliku
.gitignore, wiec nie wiadomo co powinno zostać przesłane do repozytorium, a co 
powinno zostać tylko w kopii roboczej. Słabo. Na szczęście inni także mieli takie
dylematy. Tak też prawdopodobnie powstał ionic-generator dla Yeoman.

## Yeoman

[Yeoman](http://yeoman.io/) to kolejne narzędzie które przyszło mi poznać w 
ostatnim czasie. Z tego powodu nie mogę jeszcze czuć się jego ekspertem, ale 
napiszę tu te kilka zdań - może także właśnie dla Ciebie Yeoman stanie się 
odkryciem dnia. Narzędzie to służy do definiowania szkieletów aplikacji. I chodzi 
tu nie tylko o aplikacje JS, choć te przodują w statystykach upublicznionych 
szablonów Yeomana. Jednym prostym poleceniem generujemy projekt według zadanego 
szablonu. W tej chwili baza zarejestrowanych szablonów Yeomana posiada ponad 3000 
wpisów. Jest z czego wybierać.

### generator-ionic

Mój wybór padł na szablon [generator-ionic](https://github.com/diegonetto/generator-ionic)
reklamujący się jako szybkie i rozsądne narzędzie do tworzenia
projektów pisanych w Ionic, AngularJS i Cordova, podążające za dobrymi praktykami
formowania struktury projektów.

Ten generator dodaje ponad to kilka usprawnień których brakuje generatorowi
zawartemu w Ionic. Zostaniemy wypytani o to z jakich chcemy skorzystać pluginów 
Cordova oraz jaki chcemy pobrać szablon Ionic. Dostaniemy gotowy plik .gitignore
dzięki czemu nie będziemy zaśmiecać repozytorium. Otrzymamy także zestaw poleceń
grunta które budują aplikację. Całkiem fajnie.

## Idziemy na front!

Pora wyruszać. Jedynie kilka kroków dzieli nas przed pierwszym zetknięciem z 
frontem:

    npm install -g yo grunt-cli bower generator-ionic ionic cordova
    mkdir drug-dose-framework-ionic
    cd drug-dose-framework
    yo ionic drug-dose-framework

