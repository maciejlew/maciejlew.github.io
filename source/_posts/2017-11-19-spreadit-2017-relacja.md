---
layout: post
title: "SpreadIT 2017 - relacja"
date: '2017-11-19 09:20:00'
description: "Relacja z SpreadIT 2017"
keywords: SpreadIT 2017, konferencja IT, relacja, inżynieria programowania, jakość kodu, programowanie gier, biznes i rozwój
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

Wczoraj miało miejsce jubileuszowe, piąte z kolei SpreadIT - konferencja mająca za cel szerzenie nowych trendów w IT zarówno wśród nowych adeptów technologii informacyjnych jak i wśród starych wyjadaczy. Jak co roku, przygotowałem krótką relację z tego wydarzenia.

## Tematyka konferencji

W tym roku ścieżki tematyczne zostały lekko przemianowane. Wszystko mamy więc tym razem pogrupowane bardziej w "inglish":

* Software Architecture
* GameDev
* Software Craftsmanship

Po porównaniu do [agendy poprzedniej edycji konferencji][1], widzimy że gałąź *Biznes i rozwój* została zastąpiona *Software craftsmanship* gdzie sprytnie wstrzyknięto tematy związane z rozwojem. Być może zostało to podyktowane tym, że w mojej ocenie, wykłady związane z biznesem i rozwojem cieszyły się rok temu umiarkowanym zainteresowaniem, a przy rekordowej w tym roku frekwencji uczestników (podobno ponad 500 osób) trzeba było jakoś równomiernie ich porozrzucać po aulach Wydziału Automatyki, Elektroniki i Informatyki.

Jak wspomniałem, w tym roku zainteresowanych udziałem w konferencji było tak dużo, że trudno "na oko powiedzieć" które wykłady cieszyły się największym powodzeniem. Na aulach czasami brakowało miejsc siedzących! Ja, podobnie jak rok temu i jak zwykle, najbardziej zainteresowany byłem wywodzącą się z inżynierii oprogramowania, ścieżką *Software Architecture*. Z tego powodu miałem okazję wysłuchać prelekcji nt:

* Event Processing in Action
* Pragmatic Monolith-First, easy to decompose, clean architecture
* Orchestrate your choreography!
* Historia jednego repozytorium - projektowanie git workflow oraz zarządzanie repozytorium
* DevOps as code w pędzącym startupie

## Event Processing in Action

Zdarzenia i architektura sterowana zdarzeniami to jeden z najpopularniejszych obecnie tematów konferencji związanych z IT. Sebastian Malaca pokazał nam jak prawidłowo podejść do zadania wykrywania zdarzeń w naszych projektach. Było więc kilka słów o [Event Stroming][2], o prawidłowym nazewnictwie, o dekompozycji nieprawidłowo rozpoznanych zdarzeń, o event procesorze. Była to bardzo dobra prelekcja, pozwalająca nowym w temacie zapoznać się z procesowaniem zdarzeń, a osobom z pewnym doświadczeniem usystematyzować wiedzę i wyłapać pewne "smaczki".

## Pragmatic Monolith-First, easy to decompose, clean architecture

Ta prezentacja miała być chyba odpowiedzią na hype związany z mikroserwisami/mikrousługami. Piotr Pelczar udowadniał, że monolityczna architektura systemu także może mieć swoje zalety, a dobrze zaprojektowana lub dobrze zrefaktoryzowana może w przyszłości doprowadzić do wydzielenia z niej mikroserwisów. Podkreślone zostało, że bezzasadne nastawienia się na architekturę mikroserwisów może prowadzić do porażki serwisu, że podczas projektowania architektury systemu należy pamiętać aby w analizie zwrócić uwagę na zasadę YAGNI. Była to bardzo ciekawa prezentacja, biorąc pod uwagę to że praktycznie cały czas biorę udział głównie w projektach zbudowanych w oparciu o monolit. Lata doświadczeń w pracy nad projektami monolitycznymi, obserwacje jak ewoluuje ich architektura, w porównaniu do tego co zaprezentował prelegent, pozwala mi powiedzieć sobie samemu że idą one w dobrym kierunku - co cieszy :)

## Orchestrate your choreography!

Tytuł tej prezentacji był zagadkowy. Do ostatniego momentu nie wiedziałem o czym tak na prawdę będzie ten wykład. Daniel Pokusa - organizator SpreadIT - porównał dla nas projektowanie metody do konceptów znanych z muzyki. Prelegent bardzo szybko nawiązał kontakt z publicznością. Poprzez eksperyment wytłumaczył zwięźle różnice pomiędzy orkiestracją a choreografią.  Dowiedzieliśmy się jak te dwie metody wyznaczania czasu przekładają się na budowę podstawowych struktur we współczesnym programowaniu jakimi są funkcje/metody.

## Historia jednego repozytorium - projektowanie git workflow oraz zarządzanie repozytorium

Podczas tej prezentacji Karol Lasończyk pokazał jak w projekcie w którym bierze udział rozwiązana jest kwestia prowadzenia repozytorium. Mieliśmy więc okazję posłuchać o [GitFlow][3], trochę o problemach z upublicznianiem repozytorium, trochę o celowym nadpisywaniu historii w git. Dowiedzieliśmy się jakie są wady i zalety mergowania i rebase. Było też kilka słów o komponowaniu opisu rewizji. Prawdę powiedziawszy czegoś innego spodziewałem się po tej prezentacji. Ogólnie było OK, ale chętnie posłuchałbym jak tak skomplikowane podejście do struktury repozytorium ma się do continous deployment i continous delivery.

## DevOps as code w pędzącym startupie

Ostatnia prezentacja w której miałem przyjemność uczestniczyć dotyczyła modnego ostatnio konceptu trzymania infrastruktury w kodzie. Jakub Bujny - kolejny programista który postanowił zostać DevOpsem (jakaś epidemia?) - tłumaczył nam czym tak naprawdę zajmuje się DevOps. Dowiedzieliśmy się jak dla rozwijającej się firmy ważne może być to by infrastruktura ich systemu IT została przygotowana w profesjonalny sposób, gotowy na skalowania i na reagowanie na katastrofy. Prelegent pokazał, na przykładzie chmury, jak szybko można skalować system gdy jego struktura opisana jest w kodzie, jak można przerzucić cały system z jednego krańca świata na drugi jednym poleceniem (oczywiście wypracowanie kodu który to jedno polecenie wykona nie jest już tak trywialne). Dowiedzieliśmy się więc czym jest IaC, jakie są popularne narzędzia do tworzenia IaC, jak można sobie ułatwić pracę z serwerem CI Jenkins przy pomocy pipeline. Była to ciekawa prelekcja, nie tylko dla osób zainteresowanych przeniesieniem swojej infrastruktury w chmury. Budowanie lokalnej infrastruktury w firmie czy też w domowym labie.

## Podsumowanie

Tegoroczna, 5-ta edycja SpreadIT, odbyła się z wielka pompą. 35 prelekcji, 3 ścieżki tematyczne, znani i doświadczeni prelegenci zrobili swoje. Organizatorzy stanęli na wysokości zadania. Konferencję uznaję za udaną także i dla mnie. Nie mogłem uczestniczyć we wszystkich prelekcjach, ale i tak wyniosłem z tego wydarzenie wiele nowych pomysłów, które zamierzam zrealizować we własnych projektach. Warto poświęcić te kilka godzin, zarówno gdy dopiero zaczynamy nasza przygodę z IT, jak i wtedy gdy siedzimy w tym biznesie od lat. Do zobaczenia za rok!

[1]: /2016/11/20/spreadit-2016-relacja.html
[2]: https://en.wikipedia.org/wiki/Event_storming
[3]: https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow

* * *

Zobacz także:

* [SpreadIT 2016 - relacja]({{site.url}}/2016/11/20/spreadit-2016-relacja.html)
* [SpreadIT 2015 - relacja]({{site.url}}/2015/11/22/spreadit-2015-relacja.html)



