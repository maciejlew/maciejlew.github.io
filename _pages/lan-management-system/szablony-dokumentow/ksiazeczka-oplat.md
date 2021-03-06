---
layout: page
title: "Książeczka opłat dla LMS"
description: "Szablon książeczki opłat dla Lan Management System"
keywords: LMS, Lan Management System, sieci LAN, programowanie webowe, platformy VoIP, dodatki, komponenty, LMS GIT, LMS INET, wezwanie do zapłaty, przedsądowe wezwanie do zapłaty, ostateczne przedsądowe wezwanie do zapłaty, druki wpłat
type: ItemPage
date: "2015-08-02 15:39:00"
breadcrumbs:
  - url: /
    title: "LionNet"
    type: AboutPage
  - url: /lan-management-system/
    title: "Lan Management System"
    type: CollectionPage
  - url: /lan-management-system/szablony-dokumentow/
    title: "Szablony dokumentów"
    type: CollectionPage
  - url: page.url
    title: page.title
    type: ItemPage
permalink: /lan-management-system/szablony-dokumentow/ksiazeczka-oplat.html
redirect_from: /lan-management-system/szablony-dokumentow/ksiazeczka-oplat/
---

 * wydruk danych klienta i firmy na podkładzie wpłaty gotówkowej
 * numer konta bankowego brany z karty klienta (obsługa IBAN)
 * możliwość konfiguracji pola "nazwa odbiorcy" oraz szablonu pola "tytułem" z poziomu LMS
 * możliwość konfiguracji ilości stron oraz ilości druków na stronę (1 lub 2)
 * opcja drukowania na wszystkich drukach sumy zobowiązań klienta wynikającej z
przypisanych mu taryf
 * opcja generowania druków przelewu tylko dla wybranego zakresu miesięcy
 * kompatybilność z LMS w wersjach GIT i INET oraz prawdopodbnie także ze starszymi wersjami LMS

### Instalacja:

Zawartość paczki z szablonem należy umieścić w katalogu *lms/documents/templates/*.
Podkład druku wpłaty należy umieścić w katalogu *lms/img/*.

Jeśli instalacja jest wykonywana w starszej wersji LMS należy w plikach *engine.php*
i *plugin.php* odnaleźć zakomentowane sekcje *old config*, odkomentować je a zakomentować
sekcje *new config*.

Zawartość pliku *strings.php* należy dodać do obecnej zawartości pliku
*lms/lib/locale/pl/strings.php*.

### Konfiguracja:

W konfiguracji interfejsu użytkownika, w sekcji *finances*, należy dodać 
następujące zmienne:

 * *transfer_forms_receiver_line_1* - nazwa odbiorcy, linia 1
 * *transfer_forms_receiver_line_2* - nazwa odbiorcy, linia 2
 * *transfer_forms_pay_title* - tytuł przelewu
 * *transfer_forms_pages* - ilość stron
 * *transfer_forms_per_page* - ilość druków na stronę
 * *transfer_forms_to_words_short* - *true* jeśli ma być generowana krótka słowna wersja należności

* * *

Zobacz także:

 * [Wezwanie do zapłaty](/lan-management-system/szablony-dokumentow/wezwanie-do-zaplaty.html)
 * [Przedsądowe wezwanie do zapłaty](/lan-management-system/szablony-dokumentow/przedsadowe-wezwanie-do-zaplaty.html)
 * [Informacje do umowy zawartej poza lokalem](/lan-management-system/szablony-dokumentow/informacje-do-umowy-zawartej-poza-lokalem.html)
 * [Odstąpienie od umowy zawartej poza lokalem](/lan-management-system/szablony-dokumentow/odstapienie-od-umowy-zawartej-poza-lokalem.html)

{% include json-ld-page.md %}
