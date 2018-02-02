---
layout: post
title: "Debugowanie testów. Jasmine i Karma"
date: "2016-04-07 22:35:00"
description: 'Debugowanie testów jednostkowych napisanych przy pomocy Jasmine w środowisku Karma'
keywords: debugowanie testów, framework jasmine, uruchamianie testów, jakość oprogramowania
tags:
- DSP2016
- DDF
- JS
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

W tym wpisie przedstawię jak uruchomić przy pomocy środowiska Karma testy napisane
w frameworku Jasmine z opcją debugowania w przeglądarce.

Jeśli śledzisz od dłuższego czasu rozwój DDF to zauważyłeś pewnie że sporo czasu
i miejsca na tym blogu poświęcam testom:

 * [Zapach Jaśminu]({{site.url}}/2016/03/07/zapach-jasminu.html)
 * [Testowanie wyjątków w Jasmine]({{site.url}}/2016/03/15/testowanie-wyjatkow-w-jasmine.html)

Dziś, z powodu pewnego głupiutkiego błędu 
zmuszony byłem dowiedzieć się w jaki sposób uruchomić test w środowisku przeglądarki
by móc przy pomocy FireBuga i wbudowanego w niego debuggera prześledzić co się 
dzieje w kodzie. Możesz powiedzieć że przecież jest funkcja *dump()* dzięki której
można w kodzie Jasmine wyrzucić sobie na ekran zawartość zmienne. Niestety, to nie
zadziała gdy test wpadnie w nieskończoną pętlę, a tak właśnie działo się w moim 
przypadku. 

Okazało się że rozwiązanie jest proste, trzeba tylko dobrze poszukać. Wykorzystałem
do tego [wpis na blogu "It's my code blog"](http://www.itsmycodeblog.com/debugging-phantomjs-tests-in-a-browser/).
Zawarte tam wskazówki dostosowałem do sekcji opisującej zadanie odpalające Karma
w moim pliku Gruntfile.js. Co należało zrobić?

1. doinstalować przy pomocy NPM i dodać informację o pluginach w sekcji options:

    plugins: [
        'karma-jasmine',
        'karma-coverage',
        'karma-phantomjs-launcher'
    ],

2. zmienić wartość autoWatch z false na true w sekcji options
3. zmienić wartość singleRun z true na false w sekcji options
4. zmienić wartość background z true na false w sekcji unit

Od tego momentu wywołanie polecenia *grunt karma* powoduje wykonanie wszystkich 
testów ale po wszystkim nie kończy działania środowiska testowego Karma. Dzięki 
temu można w przeglądarce pod adresem *http://localhost:8080/debug.html* zobaczyć
przy pomocy FireBuga co się dzieje w kodzie. Ponowne wykonanie testów polega na
odświeżeniu strony w przeglądarce. Dzięki temu kod testów można zatrzymać na
ustawionych w FireBugu punktach wstrzymania i podejrzeć co też kryje się w zmiennych.

