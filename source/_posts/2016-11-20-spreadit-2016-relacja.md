---
layout: post
title: "SpreadIT 2016 - relacja"
date: '2016-11-20 20:15:00'
description: "Relacja z SpreadIT 2016"
keywords: SpreadIT 2016, konferencja IT, relacja, inżynieria programowania, jakość kodu, programowanie gier, biznes i rozwój
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

Czwarta edycja SpreadIT przeszła już do historii. Zapraszam do zapoznania się
z krótką relacją z której dowiecie się co w światku IT piszczy.

## Tematyka konferencji

SpreadIT oferuje uczestnikom rozbudowane ścieżki tematyczne:

* Inżynieria **oprogramowania**;
* Tworzenie gier **komputerowych**;
* Biznes i **rozwój**.

Ja, jak zwykle, najbardziej zainteresowany byłem pierwszą z nich, z tego powodu
relacja ta będzie dotyczyła następujących wykładów:

* Are you familiar with Test Doubles Patterns?
* P&A + DDD + CQRS = OO
* Wprowadzenie do Actor Model
* Jak uniknąć buzz word driven development i jak rozpoznać koncepcje, które 
pozostaną z nami na lata?
* Jak wróżyć z fusów skoro najczęściej pijemy kawę z ekspresu?

## Are you familiar with Test Doubles Patterns?

Pierwszy z wykładów na ścieżce *"Inżynieria oprogramowania"*, przygotował dla nas
Sebastian Malaca. Dotyczył on tych wszystkich rodzajów obiektów wykorzystywanych
podczas tworzenia testów by symulować działanie ich rzeczywistych odpowiedników, 
by działać w separacji, które na co dzień przez wielu ludzi nazywane są po prostu 
mockami. Dowiedzieliśmy się więc jaka jest różnica pomiędzy obiektami **dummy, 
fake, spy, mock**. Jakie jest ich przeznaczenie, dlaczego i kiedy należy z nich 
korzystać, oraz dlaczego nadużywanie mocków może prowadzić od bałaganu w kodzie. 
Po tej prezentacji można było odkryć, że *double patterns* to nie proste zaślepki,
a rozbudowany zestaw narzędzi, które należy używać z głową.

## P&A + DDD + CQRS = OO

Kolejny wykład to przygotowane przez Łukasza Szydło wprowadzenie do CQRS. Autor 
przedstawił bardzo fajne porównanie obiektu do komórki żywego organizmu. Rozłożył
także na czynniki pierwsze strukturę klasy w kontekście CQRS. Dzięki temu łatwiej
można było poczuć różnicę pomiędzy metodami "command" a metodami "query" i zrozumieć
CQS. Posługując się prostym rysunkiem, pokazującym gdzie w większości systemów jakiego
typy żądania są przesyłane, autor pokazał nam gdzie jest granica pomiędzy
częścią systemu odpowiedzialną za odczyt, a gdzie "siedzi" cała skomplikowana 
logika biznesowa systemu. Wymienione zostały zalety wprowadzenia CQRS w projekcie, 
czyli uproszczenie kodu, możliwość cachowania, łatwiejsze podążanie za zasadą 
*["single responsibility principle"][1]*.

## Wprowadzenie do Actor Model

Wprowadzenie do actor model okazało się jednak czymś więcej niż wprowadzeniem.
Muszę przyznać że prezentacja była dobrze przygotowana, ale dla kogoś kto już ma
jakieś pojęcie czym jest *actor model* i do czego go można wykorzystać lub właśnie
się do tego przygotowuje. Dla osób które dopiero chcą sprawdzić czym to się je,
prezentacja mogła być niezrozumiała. Łukasz Szymik przedstawił jak wprowadzenie
AM w projekcie pomogło przyspieszyć działanie aplikacji bez martwienia się o
typowe bolączki oprogramowania działającego współbieżnie. Cała prezentacja była
prowadzona w kontekście programowania w języku Scala, ale pojawiła się ciekawa
wzmianka o implementacji actor model w JS, którą postaram się niebawem zgłębić i 
coś o tym napisać na blogu.

## Jak uniknąć buzz word driven development i jak rozpoznać koncepcje, które pozostaną z nami na lata?

Po tytule prezentacji można by się spodziewać że zostanie nam przedstawiony
przegląd metodologii/języków/technologii/frameworków. I tak właśnie rozpoczął się
ten wykład. Witold Adamus, posiłkując się wykresami z Google Trends, przedstawił
nam jak kształtowały się trendy w wyszukiwaniu haseł takich jak DDD, CQRS, OOP, 
Ruby, jQuery, pojęć związanych z programowaniem funkcyjnym i obiektowym. Poruszony 
został problem BWDD w projektach oraz CVDD. No i na tym skończyło się wyliczanie 
*buzz words*, a zaczęła się ewangelizacja na temat programowania funkcyjnego. Był 
to wstęp do programowania funkcyjnego, przegląd monad, przykłady w PHP, promocja 
biblioteki [php-slang][2]. Dodatkowo autor podjął wyzwanie rozwiązania każdego 
problemu przy pomocy programowania funkcyjnego, więc jeśli taki macie to możecie 
pisać do niego e-mail.

## Jak wróżyć z fusów skoro najczęściej pijemy kawę z ekspresu?

Ostatnia prelekcja dotyczyła szacowania czasu. Marek Gajda nie ukrywał jakie to
trudne i niewdzięczne zadanie. Podał nam także kilka wskazówek jak podejść do 
tematu w sposób profesjonalny. Dowiedzieliśmy się jak ważny może być wywiad ze
zleceniodawcą, aby dowiedzieć się czego on tak właściwie chce. Zaproponowana
została znana w IT zasada *"divide and conquer"*, czyli w tym przypadku podziału
zadania na mniejsze, być może znane już klocki i oszacowanie czasu wykonania
dla każdego z nich z osobna. Pokazano także jak należy szacować gdy do zlecenia
przydzielona ma zostać większa ilość osób, jak wliczać w rachunek czas na testy,
refaktoryzację oraz inne *"detale"* które czasami nam umykają.

A już za rok 5 edycja największej darmowej konferencji IT na Śląsku. Ma być 
jeszcze lepiej. Do zobaczenia na miejscu bo ja na pewno tego nie przegapię!

[1]: https://pl.wikipedia.org/wiki/Zasada_jednej_odpowiedzialno%C5%9Bci
[2]: https://github.com/php-slang/php-slang

* * *

Zobacz także:

* [SpreadIT 2017 - relacja]({{site.url}}/2017/11/19/spreadit-2017-relacja.html)
* [SpreadIT 2015 - relacja]({{site.url}}/2015/11/22/spreadit-2015-relacja.html)


