---
layout: post
title: 'Pistache i RapidJSON - przekazywanie zmiennych w URL'
date: '2017-04-08 22:30:00'
description: 'Przykład przekazywania zmiennych do aplikacji napisanej w Pistache'
keywords: daj się poznać 2017, konkurs programistyczny, aplikacja konkursowa, drug dose framework, aplikacja mobilna, pas pediatryczny, dawkowanie leków, pistache, rapidjson, json
tags:
- DSP2017
- C++
- DDS
img_hosting: "http://interpc.pl/~mlewinterpc/lion.net.pl/2017/03/30/pistache-i-rapidjson-przekazywanie-zmiennych-w-url/"
---

Po przykładzie, w którym pokazałem [jak odczytać plik i przesłać jego zawartość
jako odpowiedź webserwisu w Pistache][1], czas na przykład jak odebrać od
użytkownika zmienną i na jej podstawie przygotować odpowiedź.

### Zmienne w URL

Rejestrowanie endpointów zawierających zmienne jest banalnie proste. Wygląda to
identycznie jak rejestrowanie każdej innej metody webserwisu, z tym wyjątkiem że
w miejscach w których spodziewamy się od użytkownika użycia zmiennej definiujemy
zaślepkę:

```
Routes::Get(router, "/drugs/:id", Routes::bind(&DrugHandler::onRequest, &drug_handler));
```

W powyższym przykładzie spodziewam się że użytkownik w celu pobrania informacji
o konkretnym leku poda jego identyfikator w miejscu oznaczonym jako *:id*. Każda
zaślepka w Pistache wyróżniona musi zostać poprzez dodanie znaku dwukropka przed
jej nazwą.

Odbieranie nazwanej zmiennej w metodzie obsługi webserwisu także jest bardzo proste:

```
auto id = request.param(":id").as<std::string>();
```

Z obiektu *request* pobieramy parametr ":id" jako string. Od tego momentu możemy
w programie używać zmiennej *id* do której przypisana jest wartość podana przez
użytkownika webserwisu.

Istnieje także możliwość odbierania zmiennych bez podawania ich nazw, podając
kolejne pozycje w sekwencji zaślepek.

Pokazane w tym wpisie przykłady są zaczerpnięte z [aplikacji DDS][2].

[1]: /2017/03/30/pistache-i-rapidjson-czytanie-danych-z-pliku.html
[2]: https://github.com/maciejlew/drug-dose-server

