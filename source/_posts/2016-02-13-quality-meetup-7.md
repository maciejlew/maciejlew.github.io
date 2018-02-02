---
layout: post
title: "Quality Meetup #7"
date: 2016-02-13 08:00:00
description: Relacja z siódmego spotkania osób związanych i zainteresowanych tworzeniem oprogramowania wysokiej jakości
keywords: quality meetup, continous integration, selenium grid, śląska karta usług publicznych kontenery docker, ciągła integracja, testy akceptacyjne, testy integracyjne
tags:
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

Z powodu coraz większego nacisku na testy integracyjne w projektach w których biorę
udział i pojawiających się z tego powodu problemów do rozwiązania, wybrałem się na
**spotkanie grupy osób związanych i/lub zainteresowanych tworzeniem oprogramowania
wysokiej jakości - Quality Meetup #7**. O spotkaniu dowiedziałem się obserwując
wiadomości związane z Quality Excites, konferencją na której już kiedyś byłem i
której tematyka i poziom wykładów oraz warsztatów bardzo mi się spodobały. Poświęcenie
kilku godzin na Quality Meetup również okazało się być dobrym pomysłem, a dlaczego
napiszę za chwilę. [Meetup jest wydarzeniem cyklicznym](http://www.meetup.com/Quality-Meetup/),
odbywa się na ono na terenie Górnego Śląska, wszystkim którzy są w jego zasięgu 
polecam się wybrać. Na to spotkanie przyszło około 30 osób i mieliśmy okazję 
wysłuchać dwóch prezentacji.

## Jak powstał ŚKUP – historia projektu

Radek Smilgin opowiedział nam o swoich doświadczeniach z pracy jako konsultant
podczas specyfikowania wymagań dla ŚKUP, doradzania zleceniodawcy oraz zleceniobiorcy
podczas etapu tworzenia, wdrażania i odbioru projektu. Dowiedzieliśmy się jak
ważne może okazać się dokładne określenie wymagań, jak może wyglądać rzeczywistość
w dużych projektach (waterfall, brak wglądu w kod), co może pójść nie tak i ile 
to może kosztować.

## Testy przeglądarkowe w środowisku rozproszonym

Łukasz Rosłonek pokazał jak można w łatwy sposób przygotować sobie środowisko
pod testy przeglądarkowe. Środowisko oparte było o Selenium Grid i Dockera.
Docker służył do tworzenia na jednym OS wielu kontenerów jak LXC, z których jednak
każdy był odpowiedzialny za uruchomienie testów na tylko jednej z przeglądarek.
Wszystko zostało zaprezentowane "na żywo". Mogliśmy obserwować proces instalowania
i uruchamiania huba oraz nodów Selenium, a także 
[uruchamiania testów](https://github.com/lroslonek/qm7) na tak utworzonej 
architekturze. Jest to ciekawe podejście które zamierzam przetestować także w 
moich projektach. Więcej na ten temat można znaleźć na 
[blogu autora](http://testdetective.com/selenium-grid-with-docker/).

