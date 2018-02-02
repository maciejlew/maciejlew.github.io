---
layout: post
title: "SpreadIT 2015 - relacja"
date: 2015-11-22 10:50:00
description: "Relacja z SpreadIT 2015"
keywords: "SpreadIT 2015, konferencja IT, relacja"
tags:
- OOP, QA, SpreadIT, MEETING
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

Miałem przyjemność wziąć udział na konferencji SpreadIT jako jeden z jej 600 
uczestników. Postanowiłem napisać krótką relację - notkę z tego wydarzenia podsumowującą
tegoroczną edycję tej popularnej konferencji na którą tłumnie przybywają osoby
związane z IT z całego Śląska.

SpreadIT 2015 było trzecią odsłoną tego wydarzenia i jak się okazało cieszy się
ono z roku na rok coraz większym zainteresowaniem. Podczas przemowy otwieracjącej
konferencję dowiedzieliśmy się że jest nas około 600 zapisanych uczestników oraz
że tradycyjnie nie dla wszystkich starczy koszulek - mnie w tym roku akurat się
udało jedną dostać ;). Ogłoszone zostało także, że ustandaryzowano wymowę
nazwy konferencji: spread[aj][ti] ;).

Konferencja podzielona została na trzy bloki tematyczne: inżynieria
oprogramowania, tematyki miękkie oraz tworzenie gier komputerowych. Można było 
wysłuchać do pięciu wykładów lub wziąć udział w warsztatach. Spośród tej bogatej 
oferty wybrałem cztery wykłady o które postaram się Wam zrecenzować.

### Migracja z architektury „spaghetti” do SOA. Case study

Prezentacja ta przeprowadzona została przez Grzegorza Mazura. Przedstawił on nam
założenia, proces realizacji i końcowy produkt prowadzonej przez jego zespół
migracji dość skomplikowanego systemu dostarczania muzyki i innej treści 
multimedialnej na żądania do systemu również nico skomplikowanego ale o 
ustandaryzowanym interfejsie opartym o szynę danych. Dla osób niezwiązanych z
programowaniem na szynie prezentacja ta była na pewno pomocna bo pozwalała 
zrozumieć po co w ogóle się to robi, jakie są tego zalety oraz że w przypadku
rozbudowanych, drogich w utrzymaniu systemów wprowadzenia SOA może się zwrócić.
Na pewno interesującym było przedstawienie SOA w oparciu o gotowy projekt, łatwy
do zrozumienia dla każdego model biznesowy w którego realizacji SOA może być
wybawieniem.

### Jaka piękna katastrofa w doskonałym świecie, rzecz o architekturze skazanej na klęskę

Moim zdaniem wykład wygłoszony przez Jarosława Pałkę był najlepszym ze wszystkich
w których miałem okazję uczestniczyć podczas SpreadIT 2015. Poprowadzony został
"z jajem", w sposób bardzo przejrzysty i trafiający do każdego developera. 
Dowidzieliśmy się, co w większości pewnie już wiedzieliśmy lub przeczuwaliśmy,
jak ważne są takie pojęcia i kryjące się pod nimi techniki jak "fail fast", 
"circuit braker", "supervisor". Powiedziane zostało, że to że systemy upadają nie jest czymś niesamowitym,
zdążającym się tylko najgorszym oraz że ważne jest za to dobre przygotowanie się do 
tego co i tak jest nieuchronne aby móc spokojnie pójść spać po wpuszczeniu systemu
na produkcję.

### Genealogia DDD

Trzeci z kolei wykład z inżynierii oprogramowania. Przygotowany przez Szymona Homę.
Dowiedzieliśmy się o rodowodzie DDD. Przedstawione zostały analogie pomiędzy DDD
a wcześniejszymi podejściami do tematyki modelowania systemów jak np. RDD. Podczas
tej prezentacji na przykładzie pulek w magazynie pokazane było jak modelować 
zależności w DDD, jak w kodzie używać języka domeny (Ubiquitous Language) oraz jak
refaktoryzować kod do DDD.

Podczas tej prezentacji zauważyłem odnośniki do kilku nieznanych mi wcześniej źródeł.
Ich pobieżne przejrzenie pozawala mi już w tej chwili polecić ich eksploracje
osobom zainteresowanym DDD oraz ogólnie inżynierii oprogramowania:

 * [Cunningham & Cunningham](http://c2.com/)
   * [Road Maps](http://c2.com/cgi/wiki?RoadMaps)
     * [Extreme Programming](http://c2.com/cgi/wiki?ExtremeProgrammingRoadmap)
     * [Design Patterns](http://c2.com/cgi/wiki?DesignPatternsRoadMap)
 * [Domain Language - strona o DDD](http://domainlanguage.com/ddd)
   * [Dokument opisujący DDD](http://domainlanguage.com/ddd/reference/)
   * [Dokument opisujący proces migracji do DDD](http://domainlanguage.com/ddd/legacy/)

### HTTP wykorzystany w stu procentach, czyli klucz do tworzenia wydajnych serwisów internetowych

Ostatni wykład na którym byłem także okazał się być trafnym wyborem. Tomasz Kajtoch
zaprezentował kilka rzadziej wykorzystywanych mechanizmów protokołu HTTP. W pierwszej
części przedstawione zostały rożne potencjalnie przydatne, ale nie wykorzystywane 
przez początkujących, typy żądań oraz odpowiedzi HTTP. W dzisiejszych czasach 
gdy wszyscy chcą mieć API stare, choć zapomniane, mechanizmy HTTP wracają do łask.
W drugiej części wykładu dowiedzieliśmy się więcej o mechanizmie cache w HTTP.
Bardzo ciekawe i dające do myślenia były teorie o wykorzystaniu ETag i microcache.
Na sam koniec przedstawione zostały założenia nadchodzącego HTTP/2.0. Myślę że
ta prezentacja najbardziej wpłynie na moją pracę w najbliższym czasie bo tak samo 
jak jej autor lubię optymalizować różne rzeczy gdzie się tylko da ;).

Całą konferencję oceniam jako bardzo udana i fajnie przygotowaną. Organizatorzy 
spisali się, jak zresztą co roku, na piątkę. Do zobaczenia już za rok na kolejnej
edycji SpreadIT!

* * *

Zobacz także:

* [SpreadIT 2017 - relacja]({{site.url}}/2017/11/19/spreadit-2017-relacja.html)
* [SpreadIT 2016 - relacja]({{site.url}}/2016/11/20/spreadit-2016-relacja.html)


