---
layout: post
title: 'Analiza wymagań dla serwera dawek leków'
date: '2017-03-20 20:00:00'
description: Lista wymagań stawianych aplikacji dostarczającej informacji o dawkowaniu leków. MoSCoW dla DDS.
keywords: daj się poznać 2017, konkurs programistyczny, aplikacja konkursowa, drug dose framework, aplikacja mobilna, pas pediatryczny, dawkowanie leków, analiza wymagań,metoda moscow, must should could wont
tags:
- DSP2017
- C++
- DDS
img_hosting: "http://interpc.pl/~mlewinterpc/lion.net.pl/2017/03/20/analiza-wymagan-dla-serwera-dawek-lekow/"
---

Po wyborze technologii w jakiej rozwijany będzie DDS przyszedł czas na zastanowienie
się jaki w ogóle będzie cel tego projektu (poza nauką C++), co da się zrobić w
czasie trwania konkursu (zostało jeszcze trochę ponad 2 miesiące). Czas na MoSCoW.

### No więc czym będzie ten DDS?

[O metodzie MoSCoW miałem okazję napisać rok temu][1], podczas rozwijania [DDF][2].
Wtedy spisanie wymagań dla aplikacji mobilnej obliczającej dawki leków pozwoliło mnie samemu określić kierunki rozwoju DDF, na których należy się skupić, aby móc uznać projekt za ukończony (przynajmniej w ramach konkursu). Po fazie poszukiwań rozwiązań technologicznych jakie zastosuję w DDS (C++, [pistache][3], rapidjson), przyszedł właściwy moment aby spisać krótką listę zadań dla DDS:

#### DDS musi mieć:

##### Lista leków

Jedna z metod webserwisu powinna zwrócić użytkownikowi pełną listę leków. Lista zostanie zwrócona w postaci dokumentu JSON (jak z resztą wszystkie odpowiedzi z DDS). [Format odpowiedzi będzie identyczny z tym znanym z DDS][4]. Źródło informacji o lekach powinno być modyfikowalne (pliki, baza danych, inne web serwisy).

##### Dawkowanie leku

Kolejny z webserwisów będzie umożliwiał pobranie szczegółowych informacji dotyczących dawkowania danego leku. Tu tak samo spodziewajcie się odpowiedzi w JSON w formacie z DDF.

#### DDS powinien posiadać:

##### Kalkulator dawek

Aplikacja powinna także umożliwiać obliczenie dawki leku po podaniu wagi pacjenta. Będzie to ukłon w kierunku użytkowników niekorzystających z aplikacji zbudowanych na podstawie DDF.

##### Kalkulator rozpuszczania leków

**Kalkulator ten będzie nowością**. Nie znajdziecie tego w tej chwili w DDS, choć być może kiedyś i tam to dorobię. Kalkulator ten będzie obliczał i zwracał odpowiedź na pytanie jak uzyskać lek o dowolnym stężeniu rozpuszczając lek o bazowym stężeniu w innej substancji. Format odpowiedzi zostanie ustalony w trakcie prac nad tą częścią systemu.

#### DDS mógłby posiadać:

##### System logowania

DDS mógłby opcjonalnie pozwalać włączyć autentykację i autoryzację użytkowników.

##### Szyfrowanie połączenia

System mógłby opcjonalnie pozwalać włączyć tryb SSL.

##### Wersja produktu

Aplikacja mogłaby zwracać jedną z metod informację o swojej wersji.

### I to wszystko za darmoszkę? Dostępne dla każdego?

Tak. Wszystko będzie [za darmo do pobrania, zmodyfikowania][5] i wykorzystania. Super, co nie?



[1]: /2016/04/29/podroz-na-wschod-roadmap-z-moscow.html
[2]: /2016/03/01/dam-sie-poznac.html
[3]: /2017/03/14/pistacja.html
[4]: /2016/03/12/format-opisu-lekow-w-ddf.html
[5]: https://github.com/maciejlew/drug-dose-server