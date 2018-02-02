---
layout: post
title: 'Silnik zarządzania konfiguracją aplikacji w C++'
date: '2017-04-15 21:30:00'
description: 'Przykład wysyłania wykorzystania silnika zarządzania konfiguracją w C++'
keywords: daj się poznać 2017, konkurs programistyczny, aplikacja konkursowa, drug dose framework, aplikacja mobilna, pas pediatryczny, dawkowanie leków,  settingsparser, dependency injection, wstrzykiwanie zależności
tags:
- DSP2017
- C++
- DDS
img_hosting: "http://interpc.pl/~mlewinterpc/lion.net.pl/2017/04/15/silnik-zarzadzania-konfiguracja-aplikacji-w-c++/"
---

Rozbudowane aplikacje potrzebują funkcji pozwalających je konfigurować. Jak zrobić
prosty silnik zarządzania aplikacją napisaną w C++?

### DRY (and others)

Zgodnie z zasadą DRY, nie powinniśmy powtarzać wielokrotnie tych samych żmudnych
czynności, lecz wypracować mechanizmy pozwalające wydzielić tę czynność do 
narzędzia wielokrotnego użytku, tym samym automatyzując sobie pracę i skracając 
jej czas i redukując potrzebne na jej wykonanie zasoby. Zasadę tę można śmiało
rozszerzyć - nie powinniśmy powtarzać także przygotowanych przez innych rozwiązań,
zwłaszcza gdy działają, są udostępnione za darmo i są odpowiadającej nam jakości
(no chyba że w celach nauki). Podsumowując, warto się rozejrzeć za gotowymi 
narzędziami do zarządzania konfiguracją aplikacji napisanych w C++.

### SettingsParser

SettingsParser jest prostą biblioteką napisaną w C++, nieposiadającą zewnętrznych 
zależności, udostępnioną za darmo na licencji [zlib][1], [udostępnioną na GitHubie][2]
przez programistę Foaly.

Biblioteka SettingsParser pozwala na odczyt i zapis konfiguracji w formacie
przypominającym stary i lubiany format ini (ale bez wsparcia dla sekcji). Mamy tu
więc proste, jednolinijkowe **konstrukcje *klucz = wartość***. To jednak wystarczy
nam już aby skonfigurować prostą aplikację.

```
SettingsParser settings;
if (!settings.loadFromFile("dds.ini")) {
    return -1;
}
```

Ponadto, dzięki wbudowanym metodom szablonowym, biblioteka ta zadba o konwersję
odczytanych z pliku wartości do typu zmiennej której wartość tę chcemy przypisać
(w przykładzie DrugsHandler dziedziczy po Handler):

```
Handler::Handler(SettingsParser settings) : settings(settings) {}

SettingsParser Handler::getSettings() {
    return settings;
}

void DrugsHandler::onRequest(const Net::Rest::Request& request, Net::Http::ResponseWriter response) {
    
    std::string files_path;
    
    getSettings().get("files_path", files_path);
    
    if (!files_path.empty()) {
        
        std::ostringstream s;
        s << files_path << "/drugs.json";
        
        Http::serveFile(response, s.str().c_str(), MIME(Application, Json));
            
    } else {
        response.send(Http::Code::Internal_Server_Error);
    }
    
}
```

Biblioteka SettingsParser może być łatwo zaadoptowana do każdego projektu, a dzięki
braku zależności łatwo wstrzyknieta do kodu i wkorzystana stosując techniki DI.

Pokazane w tym wpisie przykłady są zaczerpnięte z [aplikacji DDS][3].

[1]: https://en.wikipedia.org/wiki/Zlib_License
[2]: https://github.com/Foaly/SettingsParser
[3]: https://github.com/maciejlew/drug-dose-server

