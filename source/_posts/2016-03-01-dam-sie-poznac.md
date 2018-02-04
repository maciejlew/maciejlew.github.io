---
layout: post
title: "Dam się poznać"
date: 2016-03-01 16:00:00
description: 'Konkurs Daj się poznać 2016'
keywords: daj się poznać 2016, konkurs programistyczny, aplikacja konkursowa, drug dose framework, aplikacja mobilna, pas pediatryczny, dawkowanie leków
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

Ten wpis to nie anons matrymonialny. Tu chodzi o coś więcej. Jest konkurs do 
wygrania i ja w tym konkursie startuję. A ten konkurs to organizowany przez 
Macieja Aniserowicza ["Daj Się Poznać 2016"](http://www.maciejaniserowicz.com/daj-sie-poznac/).

<img src="/assets/img/DSP2016/DSP2016-logo-RGB-color-1.png" alt="Daj Się Poznać 2016" title="Daj Się Poznać 2016"/>

## Leo, why?

O konkursie dowiedziałem się z magazynu "Programista". Od razu zacząłem myśleć
o tych wszystkich niezrealizowanych projektach, planach i marzeniach. Po pierwszym
zachłyśnięciu się dopadły mnie jednak wątpliwości - czy uda mi się wygospodarować
tyle czasu by wziąć udział w konkursie, czy moje projekty są odpowiednio dobrze 
przemyślane, ambitne i interesujące dla innych? Miałem zrezygnować...

I wtedy dostałem wsparcie od najbliższej mi osoby. Przekonała mnie że warto 
spróbować. Że zawsze warto próbować. Że to zmotywuje mnie do dalszego rozwoju. 
Że to może tylko pozytywnie wpłynąć na dalsze losy mojej kariery. No i że chcę, 
do cholery, wygrać to krzesło ;)

## Z czym do ludzi?

Wiedziałem już że startuję. Nadeszła pora na wybranie tematu. Miałem kilka w głowie,
głównie związanych z projektami open source w których już i tak się udzielam.
Jednak to nie byłoby to. Projekty te są albo zbyt specjalistyczne by zainteresować
kogoś z zewnątrz, albo praca nad nimi to głównie refaktoryzacja przestarzałych
rozwiązań. Pozostał mi jeden, ciekawy moim zdaniem, projekt nad którym myślałem
od dłuższego czasu.

### Drug Dose Framework

Mój projekt to :

> Aplikacja na urządzenia mobilne wspomagająca obliczanie dawek leków. 
Uniwersalny szkielet pozwalający na import własnych, zewnętrznych zestawów leków.

A w każdym razie coś takiego zgłosiłem do konkursu ;)

Na pomysł wpadłem już jakiś czas temu, gdy mój kuzyn, z zawodu ratownik medyczny,
pokazał mi tzw. taśmę pediatryczną. Taka taśma to specyficzny rodzaj linijki,
rozwijany przy poszkodowanym dziecku, któremu należy zaaplikować jakiś występujący
na wyposażeniu karetki lek. Na skali tej taśmy znajdują się odpowiadające wzrostowi
dziecka przedziały wagowe, a w nich odpowiednie dla danej wagi dawki leków.
Proste i skuteczne, może pomóc w ustaleniu dawki gdy zapomnimy wzoru odpowiedzialnego
za przeliczanie tejże. Chciałem wtedy zrobić coś takiego na urządzenia mobilne,
tak aby możliwe było szybkie przeliczenie porcji leku nawet gdy nie mamy przy sobie
takiej taśmy (a telefon ma już przy sobie niemal każdy).

Krótki research pokazuje, że na rynku jest już kilka takich aplikacji, nie znalazłem
jednak takiej o otwartych źródłach. W mojej aplikacji chciałbym także, aby lista 
leków nie była zdefiniowana z góry, a żeby możliwe było jej dostosowanie według
potrzeb. Tak też w nazwie znalazł się człon "framework".

### Technikalia

Chcę się także przy okazji nauczyć czegoś nowego. Na co dzień robię w "back-endzie".
Tu z oczywistych względów będzie sporo "front-endu" - w końcu z aplikacji mają
korzystać ludzie, prawdopodobnie "nietechniczni". Do tej pory z programowaniem
aplikacji mobilnych nie miałem styczności, więc ogrom nowych technologii do nauki
spośród których można wybierać przeraża. 

Ponieważ chciałbym aby aplikacja była jak najbardziej uniwersalna, a co za tym 
idzie, możliwa do uruchomienia na jak największej gamie urządzeń mobilnych szukałem
frameworka to umożliwiającego. Wybór padł na **Apache Cordova**. Chciałem także
uniknąć uczenia się Javy, bo te 10 tygodni, które przewiduje regulamin konkursu, 
mogłoby się okazać zbyt krótkim czasem na napisanie czegoś działającego. Ucieszyło
mnie to, że istnieje możliwość zaprzęgnięcia do pracy JavaScriptu i osiągnięcie
w pełni funkcjonalnej mobilnej aplikacji, a w każdym spełniającej moje założenia
projektowe. JavaScript znam na tyle że, mam nadzieję, pozwoli mi to na sprawne
rozpoczęcie pracy. Wybrałem za to framework JS z którym wcześniej nie miałem 
styczności - **AngularJS**. Do tego, aby nie wymyślać koła od nowa, także nowy 
dla mnie framework **Ionic**. Zapowiada się więc dobra zabawa.

## Co dalej?

[Repozytorium projektu znajduje się na GitHubie](https://github.com/maciejlew/drug-dose-framework).
Na tym blogu będę publikować raporty z postępu prac, przemyślenia oraz inne notatki
związane z konkursem. Mam nadzieję że mój projekt Cię zainteresował i będziesz go 
śledzić. Wszelkie uwagi i dobre rady są zawsze mile widziane. A teraz - do roboty! ;)

