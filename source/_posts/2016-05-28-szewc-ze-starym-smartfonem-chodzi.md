---
layout: post
title: "Szewc ze starym smartfonem chodzi"
date: "2016-05-28 19:30:00"
description: 'Czy aby programować na smartfony trzeba je posiadać?'
keywords: daj się poznać 2016, konkurs programistyczny, aplikacja konkursowa, drug dose framework, aplikacja mobilna, pas pediatryczny, dawkowanie leków, ionic framework, angularjs, smartfony, android, programowanie na urządzenia mobilne, apache cordova, testowanie aplikacji mobilnych
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

Zawsze uważałem, że telefon powinien służyć do tego do czego został stworzony, 
czyli do dzwonienia, a przynajmniej odbierania połączeń. No może jeszcze do 
wysyłania SMS... Chociaż przeglądanie e-maila też się przydaje... No i może 
jeszcze budzik... I rozbudowana lista kontaktów... I apka do sprawdzania 
autobusów... No dobra wystarczy! W każdym razie, po wejściu na rynek smartfonów
długo się im opierałem, w końcu kupiłem sobie jeden z podanych wyżej powodów. 

Czas mijał, większość ludzi, zwłaszcza tych na abonamencie, rzuciła się w wir 
corocznego zmieniania modeli swoich telefonów (w liczbie mnogiej bo czasami 
jeden to za mało...). Mnie to nie ruszało, zgodnie z zasadą *"działa - nie 
ruszaj!"*. Nadszedł jednak taki czas że ten brak pogoni za postępem odbił się 
na moich planach...

### Programowanie na urządzenia mobilne

Programowanie na urządzenia mobilne jest stosunkowo młodą gałęzią całego biznesu
kręcącego się wokół dostarczania ludzkości nowych rozwiązań informatycznych.
Cały czas się to rozwija - **nowy sprzęt, nowe technologie, nowe frameworki** - 
trudno za tym wszystkim nadążyć. 

#### Programowanie hybrydowe

Na szczęście, **ze zmianami w sprzęcie i jego różnorodnością
można sobie już dziś poradzić przy pomocy frameworków do tworzenia aplikacji 
hybrydowych**, np. Ionic Framework. Pisanie kodu który działa podobnie, a w każdym 
razie w miarę przewidywalnie, na dużej gamie sprzętu powoduje że takie rozwiązanie
jak Ionic zyskuje ostatnio na popularności. Nie potrzebujemy już znać kilku języków 
programowania, instalować kilku emulatorów lub kupować kilku urządzeń różnych
producentów, by zbudować aplikację z powodzeniem uruchamianą przez szerokie
spektrum użytkowników. Możliwe jest nawet uruchomienie takich aplikacji na 
urządzeniach już dawno zapomnianych nawet przez ich producentów, którzy przestali
im już dostarczać aktualizacje OS. Na przykład [Apache Cordova udało mi się
zmusić do współpracy z archaicznym dziś Androidem 2.3][1], choć dokumentacja mówi 
że do działania potrzebna jest dużo nowsza wersja Androida!

##### Programowanie hybrydowe bez sprzętu

Podczas programowania aplikacji we frameworku takim jak Ionic wcale nie potrzebujemy
instalować emulatora ani posiadać smartfona. Podstawową funkcjonalność można
bardzo łatwo przetestować w przeglądarce. Oczywiście Ionic wspiera uruchamianie
aplikacji na emulatorze a także wysyłanie jej do podłączonego urządzenia. 
Jednak testowanie w przeglądarce to najszybsze i najwygodniejsze rozwiązanie.
We wbudowanej w przeglądarce konsoli można szybko debugować podstawowe problemy.

##### Przeglądarka to nie wszystko

Niektóre funkcjonalności nie zadziałają nam w przeglądarce. Trudno na przykład
skorzystać z systemu plików, wibracji, powiadomień, listy kontaktów itp. To jednak
trzeba przetestować na emulatorze lub na urządzeniu. I tu zaczynają się schody.

#### Problemy z debugowaniem na starym sprzęcie

Nie wszystko wszystko wygląda tak kolorowo z testowaniem na starych Androidach, 
zwłaszcza jeśli nie działa i nie wiesz dlaczego, a logów nie ma... Nawet [dobre
pokrycie kodu testami jednostkowymi][3] nie zawsze wszystko wyłapie, zwłaszcza 
gdy dopiero uczysz się danej biblioteki. Plugin dedykowany do współpracy z 
*console.log* nie działa. Chrome Remote Debugging działa od Androida
4.4... Generalnie, nawet jeśli to co chcesz zrobić powinno działać, a problemem 
jest Twój błąd w kodzie to nie dowiesz się o tym bo logów ni ma...

### No i co dalej?

W [planach rozwoju mojej aplikacji do obliczania dawek leków][2] miałem dodanie 
pobierania danych z systemu plików urządzenia na którym aplikacja jest uruchamiana. 
Użytkownik miał mieć możliwość definiowania swoich własnych zestawów leków i dawek.
To niestety na razie nie będzie działało. Zestawy te muszą zostać zdefiniowane
przed zbudowaniem paczki i wraz z nią wgrane na urządzenie. Może to i lepiej,
zapobiegnie to różnym niebezpieczeństwom jakie musiałyby być brane pod uwagę gdyby
w ustawienia dawkowania mógł ingerować każdy kto ma dostęp do urządzenia. Do 
tego problemu wrócę gdy sam siebie przekonam do zmiany telefonu i będę miał
na czym testować.

Podsumowując, **nie potrzebujesz mieć wypasionego smartfona** by móc zacząć pisać
aplikacje na urządzenia mobilne. Mimo wszystko, **warto jednak mieć w miarę aktualny
OS**, aby móc w pełni wykorzystać możliwości jakie dają nam biblioteki i narzędzia
przygotowane do debugowania aplikacji.

[1]: /2016/04/16/apache-cordova-ionic-framework-i-starsze-wersje-androida.html
[2]: /2016/05/04/moscow-dla-drug-dose-framework.html
[3]: /2016/05/18/code-coverage-w-karma.html

