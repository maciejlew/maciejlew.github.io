---
layout: post
title: 'Front Controller w Pistache'
date: '2017-03-25 21:05:00'
description: 'Przykład wykorzystania wzorca front controller w aplikacji REST'
keywords: daj się poznać 2017, konkurs programistyczny, aplikacja konkursowa, drug dose framework, aplikacja mobilna, pas pediatryczny, dawkowanie leków, front controller, pistache
tags:
- DSP2017
- C++
- DDS
img_hosting: "http://interpc.pl/~mlewinterpc/lion.net.pl/2017/03/20/analiza-wymagan-dla-serwera-dawek-lekow/"
---

Front controller to jeden z najczęściej wykorzystywanych wzorców projektowych.
W tym wpisie pokażę jak wykorzystać go w Pistache do stworzenia klasy zarządzającej
routingiem.

### Routing w Pistache

#### Http::Handler

Temat trasowania w Pistache można rozwiązać na kilka sposobów. Najłatwiejszym,
pierwszym na jaki natkniesz się czytając dokumentację frameworka, jest zarejestrowanie
klasy implementującej interfejsy *Http::Handler* metodą *onRequest*.

Metoda ta może wyglądać następująco:

```
void VersionHandler::onRequest(const Http::Request& request, Http::ResponseWriter response) {
    response.send(Http::Code::Ok, "DDS " DDS_VERSION);
}
```

A kod ją rejestrujący tak:

```
int main() {
    Http::listenAndServe<VersionHandler>("*:9080");
}
```

#### Routes::Get

Jednak, gdy chcemy udostępnić więcej niż jedną metodę, warto poszukać czegoś 
bardziej zaawansowanego. Tym krokiem na przód będzie stworzenie klasy 
kontrolującej routing. Klasa ta będzie wykorzystywała wbudowany w Pistache 
mechanizm routingu. Poszczególne żądania będą obsługiwane przez wyspecjalizowane 
klasy - handlery. Może to wyglądać na przykład tak:

```
#include "pistache/endpoint.h"
#include "handlers/VersionHandler.h"

class Endpoint
{
    
public:
    
    Endpoint(Net::Address addr)
        : httpEndpoint(std::make_shared<Net::Http::Endpoint>(addr))
    {
    }
    
    void init(size_t thr = 2) {
        auto opts = Net::Http::Endpoint::options()
            .threads(thr)
            .flags(Net::Tcp::Options::InstallSignalHandler);
        httpEndpoint->init(opts);
        setupRoutes();
    }

    void start() {
        httpEndpoint->setHandler(router.handler());
        httpEndpoint->serve();
    }
        
    void shutdown() {
        httpEndpoint->shutdown();
    }
        
    private:
        
        Rest::Router router;
        std::shared_ptr<Net::Http::Endpoint> httpEndpoint;
        VersionHandler version_handler;
        
        void setupRoutes() {
            using namespace Net::Rest;
            Routes::Get(router, "/version", Routes::bind(&VersionHandler::onRequest, &version_handler));

        }
};
```

Po tej zmianie kod rejestrujący może wyglądać w ten sposób:

```
int main() {
    
    Net::Port port(9080);

    int thr = 2;

    Net::Address addr(Net::Ipv4::any(), port);

    Endpoint stats(addr);

    stats.init(thr);
    stats.start();

    stats.shutdown();
}
```

Wykorzystując *Routes::Get** należy zwrócić uwagę aby zmienić interfejs metody *onRequest*:

```
void VersionHandler::onRequest(const Rest::Request& request, Net::Http::ResponseWriter response) {
    response.send(Http::Code::Ok, "DDS " DDS_VERSION);
}
```

I to wszystko. Po tej małej zmianie mamy do dyspozycji front controller, w którym
możemy rejestrować w prosty sposób kolejne wyspecjalizowane handlery obsługujące 
żądania użytkowników naszej aplikacji.

Pokazane w tym wpisie przykłady są zaczerpnięte z [aplikacji DDS][1].

[1]: https://github.com/maciejlew/drug-dose-server

