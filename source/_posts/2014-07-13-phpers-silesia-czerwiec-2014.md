---
layout: post
title: "PHPers Silesia czerwiec 2014"
date: 2014-07-13 12:52:00
description: "Relacja ze spotkania PHPers Silesia z czerwca 2014"
keywords: PHP, phpers silesia, wzorzec map reduce, testowanie oprogramowania, masowa wysyłka SMS, konferencje informatyczne
tags:
- QA
- OOP
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

W czerwcu tego roku miało miejsce kolejne ze spotkań śląskiej grupy programistów 
PHP. Jak wcześniej spotkaliśmy się w Mrowisku w Gliwicach. Agenda tego spotkania
wyglądała następująco:

 * "Wzorce projektowe Map-Reduce" Wojciech Sznapka
 * "Testy jednostkowe jako żywa specyfikacja kodu" Wojciech Zawistowski
 * "PHPSpec extension points" Norbert Orzechowicz
 * "SMS to tylko 160 znaków: WRONG!" Adrian Olczyk, Andrzej Ogonowski

#### Testy jednostkowe jako żywa specyfikacja kodu   

Spotkanie swoją prezentacją rozpoczął [Wojciech Zawistowski](https://github.com/velesin).
Przedstawił nam na przykładzie jak można przerobić co prawda działające, ale 
nieoptymalnie napisane testy, tak by służyły nam jako dokumentacja kodu. W kilku
krokach doszliśmy do kodu, który czyta się łatwo i który od razu mówi nam co testujemy
i po co. Prelegent przedstawił nam więc jak przeprowadzić refraktoryzację nazw 
metod testowych, zmiennych oraz że wartości zmiennych także można dobrać tak by 
opisywały testowany przypadek jak najlepiej. Z każdym krokiem kod stawał się coraz
lepszy, czyli bardziej czytelny. Ostateczny wynik tej refraktoryzacji nie zmieniał
zakresu testu (oraz jego wyniku ;)), a jednak dawał wrażenie, że teraz ktoś czytając 
ten test w przyszłości wejdzie w umysł osoby piszącej ten test bez większych problemów
i nie będzie się w duchu dopytywał WTF?! ;)

<div class="gallery">

    <div class="galleryItem">
        <div class="stack twisted">
            <a href="http://31.media.tumblr.com/tumblr_kpu8502s7I1qa3ti5o1_400.jpg">
                <img
                    src="http://31.media.tumblr.com/tumblr_kpu8502s7I1qa3ti5o1_400.jpg"
                    alt="The ony valid measurement of code quality: WTFs/minute © 2008 Focus Shift / OSNews"
                    title="The ony valid measurement of code quality: WTFs/minute © 2008 Focus Shift / OSNews"
                />
            </a>
        </div>
    </div>

</div>

#### "Wzorce projektowe Map-Reduce

Kolejna prezentacja związana była z nierelacyjnymi bazami danych i wzorcem map-reduce.
[Wojciech Sznapka](http://blog.sznapka.pl/o-mnie/) na przykładzie logów z systemu
czujników jak przestawić się z baz relacyjnych na nierelacyjne narzędzia. Prelegent
przekazywał wiedzę całkiem dobrze, wspierając się przykładami w języku Python, które 
były całkiem czytelne. Wniosek z tej prezentacji jest taki, że czasem nie trzeba 
myśleć o schemacie bazy danych, strukturze relacji pomiędzy tabelami i o zapytaniach
SQL aby ze zbiory danych wyłuskać przydatne informacje.

#### PHPSpec extension points

Po prezentacjach nadeszła pora na "Lightning talks" co można tłumaczyć jako szybkie
prezentacje bardzo konkretnych tematów. Pierwsze wystąpienie dotyczyło PHPSpec i 
pisaniu rozszerzeń do tego narzędzia. [Norbert Orzechowicz](https://github.com/norzechowicz)
starał się w ograniczonym czasie przekazać jak najwięcej informacji o wybranym 
temacie. Niestety nigdy wcześniej nie korzystałem z PHPSpec i temat trochę mnie
przerósł, i mam wrażenie że większość z zebranych na sali także. Niemniej w 
przyszłości przyjrzę się i temu narzędziu, a wtedy być może warto będzie wrócić
do omawianej prezentacji.

#### SMS to tylko 160 znaków: WRONG!

Drugi z lightning talks dotyczył masowego wysyłania wiadomości SMS. Była to de-facto
prezentacja produktu SMSAPI. Z tą platformą miałem już wcześniej doczynienia,
miałem w pamięci kilka napisanych przeze mnie skryptów integrujących LMS z SMSAPI.
Tym bardziej zaskoczyło mnie jak bardzo ich API się zmieniło w ostatnim czasie.
API zyskało na obiektowości, doszły nowe funkcje (na prezentacji pokazano odbieranie
SMS, callbacki, dodawanie do książki adresowej, wysyłanie SMS), zastosowano Composera,
udostępniono API w kilku językach (PHP, JAVA, C#) i podobno wszystko przetestowano
;). Prezentacja była bardzo ciekawa, przykłady także, głównie dzięki zaangażowaniu
w jej przebieg widowni.

#### Podsumowanie

Pod koniec spotkania wyłoniono najlepszego prelegenta. Metoda którą się w tym celu 
była, można powiedzieć, dość kontrowersyjna - niezawodne w tej kwestii ucho 
organizatora mierzyło natężenie i częstotliwość oklasków z widowni (przypomniał 
mi się wtedy emitowany niegdyś w TVP teleturniej "Od przedszkola do Opola" ;)).
Nagrodę - pluszowego słonia, symbol PHP - otrzymał, moim zdanie zasłużenie, 
Wojciech Zawistowski.

Po spotkaniu część zebranych udała się na after party, podczas którego można było 
dalej dyskutować na tematy mniej lub bardziej związane z tematyką spotkania.
Udało mi się chwilę pogadać z laureatem nagrody pluszowego słonia ;). W takiej 
atmosferze rozmowy prowadzi się bardzo dobrze, wiec od testowania, budowania suity 
testów poprzez Agile i zarządzanie grupa programistów, doszliśmy aż do GitHuba i 
prowadzenia na nim projektów Open Source. 

Polecam każdemu, kto tylko ma czas, aby wybrał się na takie spotkanie. Poza
wykładami na mniej lub bardziej interesujące nas tematy, istnieje tam możliwość
spotkania i porozmawiania z ludźmi o duże wiedzy, wieloletnim doświadczeniu i
umiejętności dzielenia się tymi dwojga.

Mam nadzieję że spotkamy się na kolejnym PHPers Silesia!

