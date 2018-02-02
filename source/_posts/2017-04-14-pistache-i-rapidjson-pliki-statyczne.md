---
layout: post
title: 'Pistache i RapidJSON - pliki statyczne'
date: '2017-04-14 22:30:00'
description: 'Przykład wysyłania pliku statycznego w Pistache'
keywords: daj się poznać 2017, konkurs programistyczny, aplikacja konkursowa, drug dose framework, aplikacja mobilna, pas pediatryczny, dawkowanie leków,  pistache, rapidjson, json
tags:
- DSP2017
- C++
- DDS
img_hosting: "http://interpc.pl/~mlewinterpc/lion.net.pl/2017/04/14/pistache-i-rapidjson-pliki-statyczne/"
---

Zastanawiasz się jak serwować pliki statyczne w Pistache? To banalnie proste!

### Czytanie danych z pliku - metoda Http::serveFile

To [jak odczytać plik JSON i odesłać go w całości do użytkownika][1] było jednym z 
pierwszych zadań jakie postawiłem sobie podczas nauk Pistache i RapidJSON. Opisany
wtedy sposób działa i ma swoje zalety (o których za chwilkę). Ma też swoje wady
- wymaga otwarcia pliku, parsowania przez RapidJSON i własnoręcznego tworzenia 
strumienia odpowiedzi. Można to zrobić w Pistache inaczej.

Framework Pistache posiada wbudowaną metodę odsyłania do przeglądarki plików
statycznych, oto jak możesz to zrobić:

```
void DrugsHandler::onRequest(const Net::Rest::Request& request, Net::Http::ResponseWriter response) {
    
    Document config;
    char _config_buffer[65536];
    
    FILE* config_pointer = fopen("config.json", "r");
    FileReadStream config_stream(config_pointer, _config_buffer, sizeof(_config_buffer));
    config.ParseStream(config_stream);
    fclose(config_pointer);
    
    if (config.HasMember("files_path")) {
        
        std::ostringstream s;
        s << config["files_path"].GetString() << "/drugs.json";
        
        Http::serveFile(response, s.str().c_str(), MIME(Application, Json));
            
    } else {
        response.send(Http::Code::Internal_Server_Error);
    }
    
}
```

Jeśli porównasz ten kod z [poprzednio prezentowaną wersją tej metody][1], to 
zauważysz że nie ma tu już zabawy w otwieranie pliku z listą leków, ustawiania
nagłówków odpowiedzi, strumieniowania pliku. Wszystko załatwia metoda 
*Http::serveFile*. Metoda ta jako argumentu przyjmuje, po kolei, obiekt odpowiedzi,
ścieżkę do pliku i opcjonalnie typ zwracanej odpowiedzi. Co się dzieje gdy pliku
nie ma w podanej ścieżce na dysku? Wysłana zostanie pusta odpowiedź z kodem 404.
Dodatkowo, metoda ta zwraca obiekt *promise*, a obsługując go możemy zrobić np. 
logowanie zdarzeń/błędów (obiekt ten przenosi informację o ilości wysłanych danych).

#### Wady i zalety

Do zalet można *Http::serveFile* można zaliczyć:

 * zwięzłość
 * szybkość
 * obsługę Content-Type
 * obsługę błędów

Do minusów tej metody można zaliczyć:

 * wysyłanie pliku bez parsowania (być może to nie JSON?)
 * wysyłanie pliku takim jak jest - nie są usuwane z niego zbędne białe znaki,
zachowywane jest formatowanie, odpowiedź może "ważyć" więcej niż po przeparsowaniu
przez RapidJSON
 * w przypadku braku pliku kodem odpowiedzi musi być 404

Pokazane w tym wpisie przykłady są zaczerpnięte z [aplikacji DDS][2].

[1]: /2017/03/30/pistache-i-rapidjson-czytanie-danych-z-pliku.html
[2]: https://github.com/maciejlew/drug-dose-server

