---
layout: post
title: 'Pistache i RapidJSON - prosty obiekt w odpowiedzi'
date: '2017-03-28 22:05:00'
description: 'Przykład odpowiedzi prostym obiektem JSON w Pistache'
keywords: daj się poznać 2017, konkurs programistyczny, aplikacja konkursowa, drug dose framework, aplikacja mobilna, pas pediatryczny, dawkowanie leków, pistache, rapidjson, json
tags:
- DSP2017
- C++
- DDS
img_hosting: "http://interpc.pl/~mlewinterpc/lion.net.pl/2017/03/20/analiza-wymagan-dla-serwera-dawek-lekow/"
---

Zdecydowałem się wykorzystać bibliotekę RapidJSON w mojej aplikacji DDS. Kilka 
kolejnych artykułów będzie jej poświęconych. W tym wpisie pokażę jak zbudować i 
zwrócić przy pomocy Pistache prosty obiekt JSON.

### Budowniczy obiektów JSON w RapidJSON

Jak zarejestrować metodę odpowiadającą na żądanie REST pisałem na blogu w wpisie
["Front controller w Pistache"][1]. Gdy już mamy to gotowe, najprostsza metoda
może wyglądać następująco:

```
void ProjectHandler::onRequest(const Rest::Request& request, Net::Http::ResponseWriter response) {
    StringBuffer s;
    Writer<StringBuffer> writer(s);
    writer.StartObject();
    writer.Key("name");
    writer.String(DDS_NAME);
    writer.Key("full_name");
    writer.String(DDS_FULL_NAME);
    writer.Key("version");
    writer.String(DDS_VERSION);
    writer.Key("license");
    writer.String(DDS_LICENSE);
    writer.EndObject();
    response.send(Http::Code::Ok, s.GetString());
}
```

To co tu widać, to najprostsza budowa obiektu JSON w RapidJSON. Nie ma
tu żadnej interakcji z użytkownikiem, otwierania strumieni, zaczytywania JSON z pliku 
itp. "Otwieramy" obiekt, dodajemy kolejne pola-klucze i ich wartości, "zamykamy"
obiekt. Tekstową reprezentację obiektu wysyłamy w odpowiedzi HTTP do użytkownika.
Prawda że proste? Można by oczywiście ten łańcuch znaków przygotować po prost sklejając
wszystko przy pomocy podstawowych operacji na łańcuchach, czy też wykorzystując sprint,
ale API oferowane przez RapidJSON wydaje się po prostu ładniejsze od własnoręcznego
rzeźbienia w JSON.

W kolejnych wpisach postaram się pokazać jak przesłać odpowiedź w formacie JSON
pobraną z pliku.

[1]: /2017/03/25/front-controller-w-pistache.html


