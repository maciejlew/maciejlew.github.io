---
layout: post
title: Jak instalować Debiana i przy okazji nie oszaleć
date: 2017-10-23 18:00:00
description: Opis błędów jakie można popełnić podczas instalacji Debiana
keywords: linuks, debian, instalacja systemu, bootowanie z usb, partycjonowanie, grub, lilo, programy rozruchowe
tags:
- Linux
- Debian
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

Instalacja Debiana. Niby nic takiego. Mamy graficzny interfejs, wszystko jest ładnie przetłumaczone na nasz rodzimy język. A jednak i tak można napotkać na problemy po których na głowie mamy jeszcze mniej włosów niż wcześniej, a melisa to za mało...

Sprawa komplikuje się gdy próbujemy użyć bardziej zaawansowanych opcji, a nasza konfiguracja to nie ścieżka wytyczona przez wbudowany w instalator przewodnik.

Opiszę kilka problemów na jakie natrafiłem ostatnio. Być może pozwoli to komuś zaoszczędzić minut, a może nawet godzin, spędzonych na kminieniu WTF?!

## USB stick

Instalacja uruchomiona została z bootowalnego pendrive / USB stick. Pierwszy problem wystąpił gdy już wydawało mi się nic nietypowego już nie może się zdarzyć - podczas instalacji podstawowych składników systemu (jak się później okaże to dopiero początek nietypowych scenariuszy podczas instalacji). Wszystko powinno od tego momentu *podziać się* automatycznie. A tu niespodzianka: debootstrap zgłasza niepoprawne pakiety. A przecież sprawdziłem sumę kontrolną pobranego ISO?! Co mogło pójść nie tak? Sprawdziłem MD5 problematycznego pakietu. Rzeczywiście niepoprawny. Rozpakowałem ISO na drugim komputerze i wszystko OK. Nagrałem ponownie ISO na USB. Zmniejszyłem przy tym parametr *bs* polecenia *dd*. I znowu to samo, tym razem inny pakiet uszkodzony. Kolejna próba, nagrałem wszystko ponownie i sprawdziłem lokalnie na drugim komputerze:

```
debootstrap --components=main --resolve-deps --no-check-gpg stretch ~/test/ file:///cdrom/
```

I znowu inny pakiet uszkodzony. Okazało się że problemem jest sam nośnik. ISO nagrywa się, ale losowe pakiety są uszkodzone. Nie przeszkadza to instalatorowi Debiana uruchomić się i dać użytkownikowi możliwość skonfigurowania sobie wszystkiego. Sprawdzanie pakietów następuje dopiero po etapie konfiguracji - trochę to głupie...

Po nagraniu na inny nośnik ten etap instalacji przeszedł dalej bez problemów. Prawdopodobnie gdybym nagrywał na CD nie byłoby możliwości wystąpienia takiego problemu - sprawdziłbym integralność danych po zapisie na CD wbudowaną w program do nagrywania funkcją.

## noexec na /var

Niedługo trwała moja radość po rozwiązaniu problemów z nośnikiem. Kolejny problem objawił się także na etapie instalacji podstawowych składników systemu. Okazało się że jeden z pakietów w swoim postint - skrypcie wykonywanym po udanej instalacji - wymaga uruchomienia czegoś co znalazło się na partycji /var, której akurat podczas konfiguracji ustawiłem w opcjach montowania noexec... To akurat było proste do prawienia i nie wymagało konfiguracji wszystkiego od początku. Po wyłączeniu noexec instalacja przebiegła pomyślnie.

## largefile na /boot

Kolejnym krokiem, po instalacji podstawowych składników systemu, jest instalacja GRUBa lub LILO. Zwyczajowo instaluje się je na partycji /boot i tak też chciałem zrobić tym razem. Na partycję /boot przeznaczyłem 100MB licząc na to że jeszcze zostanie tam trochę miejsca. Nieopacznie włączyłem tam także opcję montowania *largefile* co poskutkowało tym że GRUB nie był w stanie się tam wypakować. Otrzymywałem komunikat *"no space left on device"*... Niestety przyczyn takiej pomyłki nie dało się łatwo naprawić - wymagało to ode mnie ponownego partycjonowania dysków i instalacji całego systemu od nowa. Tym razem zwiększyłem także rozmiar samej partycji */boot* - tak na wszelki wypadek.

## Podsumowanie

Instalacja Debiana jest prosta. O ile instalujemy według utartych schematów. Jeśli zaczynamy kombinować szukając optymalizacji wydajności, poprawy bezpieczeństwa, instalujemy RAID oraz LVM, to proces instalacji znacznie się komplikuje i jej czas wydłuża. Opisywana tu instalacja zajęła mi kilka wieczorów i wymagała kilkunastu ponownych prób. Mimo wszystko Debian jako dystrybucja Linuksa jest, moim zdaniem, najlepszym wyborem zarówno na stacje robocze jak i serwery. Polecam ją każdemu kto lubi się uczyć, nie boi się popełniać błędów i ma ambicje poznać swój system od podszewki, choć czasem może on doprowadzić człowieka do szaleństwa.


