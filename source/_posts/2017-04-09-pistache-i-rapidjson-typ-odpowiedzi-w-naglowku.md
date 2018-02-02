---
layout: post
title: 'Pistache i RapidJSON - typ odpowiedzi w nagłówku'
date: '2017-04-09 14:15:00'
description: 'Przykład definiowania nagłówka Content-Type w Pistache'
keywords: daj się poznać 2017, konkurs programistyczny, aplikacja konkursowa, drug dose framework, aplikacja mobilna, pas pediatryczny, dawkowanie leków, pistache, rapidjson, json
tags:
- DSP2017
- C++
- DDS
img_hosting: "http://interpc.pl/~mlewinterpc/lion.net.pl/2017/03/30/pistache-i-rapidjson-typ-odpowiedzi-w-naglowku/"
---

Po przeczytaniu poprzednich postów wiesz już jak zwrócić w Pistache odpowiedź w
formacie JSON. Po wprowadzeniu poprawek omówionych w tym wpisie będziesz w stanie
powiadomić aplikacje klienckie o tym odpowiedź z Twoich webserwisów że to właśnie
JSON.

### Nagłówki Content-Type w Pistache

Nagłówek Content-Type to jeden z najczęściej wykorzystywanych nagłówków HTTP.
Informuje on aplikacje klienckie o tym jak zinterpretować odpowiedź z serwera HTTP,
czy to jest tekst, czy obrazek, czy wideo, itp.

Domyślnie odpowiedź z Pistache wysłana jest bez tego nagłówka.

#### Jak sprawdzić czy odpowiedź zawiera nagłówek Content-Type?

Najprościej sprawdzić to poleceniem narzędziem curl:

````
curl -I -X GET http://localhost:9080/drugs/drug_one
````

W odpowiedzi możemy zobaczyć taki tekst, wskazujący że nagłówek jest przekazywany:

````
HTTP/1.1 200 OK
Content-Type: application/json
````

Możesz także posłużyć się dowolną przeglądarką i przejrzeć odpowiedź, np przy 
pomocy wbudowanych w nią narzędzi dla programistów.

#### Ustawianie Content-Type w Pistache

Dodanie nagłówka Content-Type w Pistache jest proste. Należy przed wysłaniem 
odpowiedzi (metodą send) wywołać na obiekcie odpowiedzi metodę pobierającą obiekt
nagłówków, a następnie na tym obiekcie metodą dodającą kolejny, jak w przykładzie:

```
response.headers().add<Net::Http::Header::ContentType>(MIME(Application, Json));
```

Wykorzystywane tu jest makro *MIME* pozwalające w skróconej formie określić typ 
zwracanej odpowiedzi. Istnieją także inne, bardziej rozbudowane, metody wskazywania
typów MIME, których opis można znaleźć w dokumentacji frameworka Pistache.

Pokazane w tym wpisie przykłady są zaczerpnięte z [aplikacji DDS][1].

[1]: https://github.com/maciejlew/drug-dose-server

