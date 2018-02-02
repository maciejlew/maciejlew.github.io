---
layout: post
title: 'Powtórka z rozrywki'
date: '2017-03-01 20:00:00'
description: 'Konkurs Daj się poznać 2017'
keywords: daj się poznać 2017, konkurs programistyczny, aplikacja konkursowa, drug dose framework, aplikacja mobilna, pas pediatryczny, dawkowanie leków'
tags:
- DSP2017
- C++
- DDS
img_hosting: "http://interpc.pl/~mlewinterpc/lion.net.pl/2017/03/01/powtorka-z-rozrywki/"
---

Równo rok temu informowałem Was o moim udziale w konkursie "Daj się 
poznać".
Dziś startuje kolejna edycja tego programistycznego wydarzenia. Z czym tym 
razem
będzie dane mi się zmierzyć?

### Drug Dose Server

Pamiętacie poprzednią [moją aplikację konkursową DDF][1]? Udało mi się 
rok temu w ciągu trzech miesięcy poznać wytwarzanie hybrydowych aplikacji 
mobilnych na tyle by być w stanie przedstawić Wam **działającą aplikację 
do obliczania dawek leków**. Aplikacja działała zgodnie z założeniami, 
czyli że dane wejściowe dla kalkulatora dawek pobierane są z lokalnie 
przechowywanych plików.

Podczas tej edycji ["Daj się poznać"][2] mam zamian rozwinąć ten pomysł i 
napisać serwer dostarczający informacji o lekach dla aplikacji takich jak 
DDF. **Nazwa projektu to Drug Dose Server**, będę dalej w odniesieniu do 
niego używał akronimu DDS (fajnie jest móc tworzyć swoje własne akronimy, 
co nie?).

#### Bebechy

Aplikację DDS zamierzam napisać w C++. Rozważałem co prawda node.js lub 
inną zdobywającą obecnie popularność technologię, ale tak się mi 
przytrafiło że aktualnie i tak muszę sobie odświeżyć wiedzę z zakresu 
C++ - upiekę dwie pieczenie na jednym ogniu.

Protokołem komunikacyjnym DDS będzie REST. Nie wiem jeszcze czy wszystko 
napiszę od zera czy skorzystam z gotowych bibliotek. Tego dowiecie się wraz 
ze mną podczas konkursu.

#### Piaskownica

Projekt możecie śledzić przeglądając tego bloga, a zwłaszcza [kategorię 
DSP2017][3]. Źródła aplikacji będą dostępne na [GitHubie][4]. Trzymajcie 
kciuki.



[1]: /2016/05/30/raport-3-z-prac-nad-ddf.html
[2]: http://uczestnicy.dajsiepoznac.pl/profil/maciej-lew
[3]: blog/tags/#DSP2017
[4]: https://github.com/maciejlew/drug-dose-server
