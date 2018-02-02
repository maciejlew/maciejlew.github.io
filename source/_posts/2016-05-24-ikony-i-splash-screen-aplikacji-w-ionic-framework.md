---
layout: post
title: "Ikony i splash screen aplikacji w Ionic Framework"
date: "2016-05-26 19:40:00"
description: "Jak przygotować ikonę i splash screen aplikacji w Ionic Framework?"
keywords: "java script, ionic framework, android, ikona aplikacji, splash screen"
tags:
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

Przygotowanie ikony aplikacji i jej "splash screena" w Ionic Framework jest bardzo 
proste. W tym wpisie dowiesz się jak zrobić to w mgnieniu oka i to na wszystkie
najbardziej popularne urządzenia za jednym zamachem!

### Tworzenie ikony

Utworzenie ikony dla aplikacji rozwijanej w Ionic polega na dwóch prostych krokach.
Po pierwsze należy przygotować wyjściowy obrazek. Powinien on mieć rozmiary 512x512
pikseli. Należy go umieścić w katalogu projektu w podkatalogu *resources*. Nazwą
obrazka ikony powinno być *icon*, obsługiwane rozszerzenia to *.psd*, *.png* i 
*.ai*. Kolejnym krokiem jest wydanie polecenia:

    ionic resources --icon

Ionic Framework wygeneruje w tym momencie zestaw ikon dla wszystkich skonfigurowanych
środowisk uruchomieniowych (android, ios, itd.) i dla wszystkich najpopularniejszych
rozmiarów urządzeń.

### Tworzenie splash screen

Tworzenie obrazu powitalnego aplikacji nie odbiega bardzo od tworzenia ikony.
Należy jednak dobrze przygotować wyjściowy obrazek. Powinien on mieć 2208x2208
pikseli, z czego najważniejsze jego elementy powinny się zmieścić w kwadracie
o rozmiarze 1200x1200 pikseli. Pozostałe części obrazka mogą zostać przycięte 
podczas generowania splash screena na poszczególne rozdzielczości urządzeń.
Niestety jest to dość nieprzewidywalne i jedynym wyjściem jest próbowanie do skutku
aż uzyskamy zadowalający rezultat dla większości rozdzielczości. Poleceniem
które uruchamia generowanie splash screenów jest:

    ionic resources --splash

### Optymalizacja

Zarówno wynikowe ikony jak i obrazy powitalne aplikacji nie są zoptymalizowane.
Przepuszczając je przez narzędzie optipng można zyskać kilkanaście procent na wadze
obrazków, co może się przełożyć nawet na kilkadziesiąt kilobajtów mniej w 
rozmiarze całej aplikacji.

### Testowanie ikony i splash screena

Aby przetestować działanie ikon i splash screena należy wgrać aplikację na urządzenie
poleceniem:

    ionic run

Jeśli aplikacja była już wcześniej testowana na urządzeniu pomocne może okazać
się wyczyszczenie cache aplikacji na urządzeniu.

