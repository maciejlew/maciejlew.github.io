---
layout: post
title: 'Pistache i RapidJSON - czytanie danych z pliku'
date: '2017-03-30 21:40:00'
description: 'Przykład odpowiedzi danymi w formacie JSON załadowanymi z pliku w Pistache'
keywords: daj się poznać 2017, konkurs programistyczny, aplikacja konkursowa, drug dose framework, aplikacja mobilna, pas pediatryczny, dawkowanie leków,  pistache, rapidjson, json
tags:
- DSP2017
- C++
- DDS
img_hosting: "http://interpc.pl/~mlewinterpc/lion.net.pl/2017/03/30/pistache-i-rapidjson-czytanie-danych-z-pliku/"
---

[Zapowiadałem][1], że pokażę jak wczytać przy pomocy RapidJSON dane z pliku i odesłać
je do użytkownika webserwisu stworzonego w Pistache. Oto jak to możesz zrobić.

### Strumień z pliku JSON

Po otwarciu pliku, wykorzystując standardowe fopen, możesz w RapidJSON nakazać 
aby dane z tego pliku były zaczytane przy pomocy obiektu strumienia *FileReadStream*.
Następnie należy przetworzyć te dane używając metody *parseStream* obiektu *Document*.
W ten nieskomplikowany sposób możesz w kilku linijkach kody w szybki i wydajny
sposób uzyskać dostęp do zapisanych w plikach JSON. Możesz sprawdzać ich wartości,
manipulować nimi, zapisywać ponownie do pliku (tu pomocny może okazać się obiekt
klasy *FileWriteStream*). Poniższy przykład pokazuje jak otwieram plik z konfiguracją
na podstawie której otwieram docelowy plik z danymi, po czym odsyłam całą jego 
zawartość do użytkownika webserwisu. Oczywiście dla takiej funkcjonalności parsowanie
pliku jest trochę przerostem formy nad treścią, ale jest to dobra baza pod to by
w przyszłości wprowadzić w tej metodzie paginację, wyszukiwanie i inne zaawansowane
funkcje.

```
void DrugsHandler::onRequest(const Net::Rest::Request& request, Net::Http::ResponseWriter response) {
    
    Document drugs, config;
    char _drugs_buffer[65536], _config_buffer[65536], _files_path_buffer[65536];
    StringBuffer drugs_buffer;
    
    FILE* config_pointer = fopen("config.json", "r");
    FileReadStream config_stream(config_pointer, _config_buffer, sizeof(_config_buffer));
    config.ParseStream(config_stream);
    fclose(config_pointer);
    
    if (config.HasMember("files_path")) {
        
        sprintf(_files_path_buffer, "%s/drugs.json", config["files_path"].GetString());
        FILE* drugs_pointer = fopen(_files_path_buffer, "r");
        
        if (drugs_pointer) {
            FileReadStream drugs_stream(drugs_pointer, _drugs_buffer, sizeof(_drugs_buffer));
            drugs.ParseStream(drugs_stream);
            fclose(drugs_pointer);

            Writer<StringBuffer> writer(drugs_buffer);
            drugs.Accept(writer);

            response.send(Http::Code::Ok, drugs_buffer.GetString());
            
        } else {
            response.send(Http::Code::Internal_Server_Error);
        }
    } else {
        response.send(Http::Code::Internal_Server_Error);
    }
    
}
```

Pokazane w tym wpisie przykłady są zaczerpnięte z [aplikacji DDS][2].

[1]: /2017/03/28/pistache-i-rapidjson-prosty-obiekt-json-w-odpowiedzi.html
[2]: https://github.com/maciejlew/drug-dose-server

