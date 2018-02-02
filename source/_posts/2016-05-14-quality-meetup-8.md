---
layout: post
title: "Quality Meetup #8"
date: "2016-05-14 13:10:00"
description: Relacja z ósmego spotkania osób związanych i zainteresowanych tworzeniem oprogramowania wysokiej jakości
keywords: quality meetup, context-driven testing, cdt, testy bezpieczeństwa, bash shellshock, xml external entities, quality excites
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

Minęło trochę czasu od [poprzedniego spotkania Quality Meetup][1] na Śląsku. 
Po trzech miesiącach zorganizowano kolejne, ósme, spotkanie ludzi zainteresowanych
jakością wytwarzanego oprogramowania. Poniżej możesz przeczytać moją krótką relację
z tego wydarzenia.

### Poznaj Context-Driven Testing

Idąc na to spotkanie QM nie wiedziałem za bardzo o co będzie chodziło z tym całym
CDT. Pierwszy raz spotkałem się z tym terminem. Jak pewnie wielu innych, kojarzyłem
go z takimi technikami jak TDD, BDD itp. Michał Stryjak przedstawił nam czym jest
to całe CDT. Jest to koncepcja mówiąca że należy testować w sposób najlepiej
pasujący do testowanego kontekstu. Według tej teorii nie ma takiego czegoś, co 
można by nazwać metodą testowania dobrą na wszystko. Każda  z nich ma swoje wady i
zalety, które należy poznać i dobrać tak, aby wnosiły wartość dodaną do całego
projektu. Michał przedstawił nam m.in. genealogię CDT oraz jej podstawowe zasady, 
tj:

 * wartość metody testowania zależy od kontekstu
 * istnieją dobre metody testowania w danym kontekście, ale nie oznacza to że
będą dobre w innym
 * ludzie zaangażowaniu w testowany produkt są najważniejszym elementem kontekstu
 * z czasem projektu rozwijają się w nieprzewidywalny na ich starcie sposób
 * produkt ma być rozwiązaniem problemu, jeśli problem nie został rozwiązany to
produkt nie działa
 * testowanie jest wymagającym złożonym procesem intelektualnym
 * właściwe przetestowanie produktu wymaga właściwego jego osądu oraz kompetencji
pozwalających na dobranie odpowiednich technik testowania na odpowiednim etapie 
rozwoju produktu

Te definicje wydają się tak oczywiste, że gdy się je przeczyta ma się wrażenie że
już dawno postępowało się zgodnie z CDT, tylko się o tym nie wiedziało.

Więcej informacji o CDT można znaleźć m.in. na [slajdach z prezentacji o CDT][2].

### Testy bezpieczeństwa - teoria a praktyka

Kolejna prezentacja była bardziej praktyczna i widowiskowa. Michał Sajdak przekazał
nam sporo cennych informacji nt. bezpieczeństwa systemów webowych. Część z 
informacji można było już wcześniej przeczytać na łamach czasopisma Programista
w artykułach przygotowanych przez Michała bądź w prowadzonym przez niego e-zinie
Sekurak. Ale nic tak nie uruchamia wyobraźni i chęci uczenia się jak przykłady
obejrzane na żywo. Prelegent pokazał nam kilka fajnych usług webowych pozwalających
szybko wykryć inne domeny hostowane na tym samym hoście co interesująca atakującego
aplikacja. Dowiedzieliśmy się także o jak wykonać bash shellshock oraz XXE na 
podatnej stronie internetowej. Było także trochę o znanych wpadkach producentów
oprogramowania i sprzętu sieciowego oraz o ich podejściu do wykrywanych przez
zewnętrznych niezależnych testerów bezpieczeństwa luk. Była to bardzo ciekawa 
prezentacja z której [slajdy także można zobaczyć w Internecie][3].

### Quality Excites 2016

Podczas spotkania zostało zapowiedziane znane chyba wszystkim śląskim testerom
najpopularniejsze darmowe cykliczne wydarzenie w okolicy, czyli [Quality Excites][4].
Tym razem będziemy mogli się spotkać i posłuchać prelekcji bądź wziąć udział w
warsztatach już 25 czerwca. Zapisy niebawem. Bądźcie czujni!

[1]: /2016/02/13/quality-meetup-7.html
[2]: http://www.slideshare.net/FutureProcessing/micha-stryjak-poznaj-contextdriven-testing
[3]: http://www.slideshare.net/FutureProcessing/micha-sajdak-testy-bezpieczestwa-teoria-a-praktyka
[4]: https://qualityexcites.pl/

