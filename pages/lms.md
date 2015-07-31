---
layout: page
title: "Dodatki do Lan Management System"
description: "Gotowe komponenty dla systemu Lan Management System"
keywords: "LMS, Lan Management System, sieci LAN, programowanie webowe, 
platformy VoIP, dodatki, komponenty, LMS GIT, LMS INET, wezwanie do zapłaty,
przedsądowe wezwanie do zapłaty, ostateczne przedsądowe wezwanie do zapłaty,
druki wpłat"
permalink: /lms/
---

Poniżej przedstawiam moje gotowe komponenty dla systemu LMS.

## Szablony dokumentów

### Wezwanie do zapłaty oraz przedsądowe wezwanie do zapłaty

 * lista nieopłaconych dokumentów (FV, noty obciążeniowe)
 * uwzględnienie częściowo zapłaconych FV i not obciążeniowych
 * uwzględnienie terminów płatności
 * uwzględnienie możliwości występowania FV z wieloma pozycjami
 * aktualna data jest datą wystawienia wezwania
 * nazwa wystawcy konfigurowalna z poziomu LMS (wykorzystuje nagłówek FV - globalny, bądź przypisany do firmy)
 * numer konta bankowego brany z karty klienta (obsługa IBAN)
 * aktualne saldo - kwota do zapłaty
 * na życzenie klienta dostosowanie treści wezwania

Przykłady:

 * [Przykładowe wezwanie do zapłaty](http://lion.net.pl/img/szablony_dokumentow/wezwanie_do_zaplaty_przyklad.pdf)
 * [Przykładowe przedsądowe wezwanie do zapłaty](http://lion.net.pl/img/szablony_dokumentow/przedsadowe_wezwanie_do_zaplaty_przyklad.pdf)

* * *

### Druki wpłat

 * wydruk danych klienta i firmy na podkładzie wpłaty gotówkowej
 * numer konta bankowego brany z karty klienta (obsługa IBAN)
 * możliwość konfiguracji pola "nazwa odbiorcy" oraz szablonu pola "tytułem" z poziomu LMS
 * możliwość konfiguracji ilości stron oraz ilości druków na stronę (1 lub 2)

Przkłady:

 * [Przykładowa książeczka opłat](http://lion.net.pl/img/szablony_dokumentow/ksiazeczka_oplat_przyklad.pdf)

* * *

{% include contact_link.md %}

{% include acronyms.md %}