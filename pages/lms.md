---
layout: page
title: "Dodatki do Lan Management System"
description: "Gotowe komponenty dla systemu Lan Management System"
keywords: "LMS, Lan Management System, sieci LAN, programowanie webowe, 
platformy VoIP, dodatki, komponenty, LMS GIT, LMS INET, wezwanie do zapłaty,
przedsądowe wezwanie do zapłaty, ostateczne przedsądowe wezwanie do zapłaty,
druki wpłat"
permalink: /lan-management-system/
redirect-from: /lms/
---

{% include suspension.md %}

Poniżej przedstawiam moje gotowe komponenty dla systemu LMS, które nie są dostępne
w głównej gałęzi projektu:

## Szablony dokumentów

Szablony dokumentów w LMS pozwalają na automatyczne generowanie umów, regulaminów,
aneksów, protokołów zdawczo-odbiorczych, wezwań do zapłaty oraz innych. Wygenerowane
dokumentu są w LMS przypisane d konkretnego klienta co pozwala na łatwe ich 
odnalezienie, wydrukowanie, udostępnienie klientowi. Dzięki szablonom dokumentów
można zaoszczędzić sporo czasu podczas podłączania nowego klienta, zawierania 
dalszych umów, rozliczania klienta z zaległości, rozwiązywania umowy z klientem.

Moje gotowe szablony dokumentów:

 * [Wezwanie do zapłaty](./szablony-dokumentow/wezwanie-do-zaplaty)
 * [Przedsądowe wezwanie do zapłaty](./szablony-dokumentow/przedsadowe-wezwanie-do-zaplaty)
 * [Książeczka opłat](./szablony-dokumentow/ksiazeczka-oplat)

Poza gotowymi szablonami oferuję także usługi przenoszenia istniejących szablonów 
dokumentów klienta to wersji działającej z LMS. Dotychczas przenosiłem m. in.:

 * Umowy
 * Regulaminy
 * Protokoły zdawczo-odbiorcze
 * [Informacje do umowy zawartej poza lokalem](./szablony-dokumentow/informacje-do-umowy-zawartej-poza-lokalem)
 * [Odstąpienie od umowy zawartej poza lokalem](./szablony-dokumentow/odstapienie-od-umowy-zawartej-poza-lokalem)

Przygotowane przeze mnie szablony działają zarówno w LMS GIT jak i INET LMS.

## Pluginy

Od momentu wprowadzenia do LMS mechanizmu pluginów zacząłem przygotowywać część
dodatków w postaci pluginów. Dzięki pluginom można rozszerzyć możliwości LMS bez
ingerencji w kod projektu. Dzięki temu utrzymanie i aktualizacje LMS stają się 
łatwiejsze. Do tej pory jako plugin ukazały się:

 * [Lista kończących się umów](./pluginy/konczace-sie-umowy)
 * [Lista kończących się zobowiązań](./pluginy/konczace-sie-zobowiazania)
 * Logi programu Exim

Pluginy działają z wersją LMS GIT, chyba że w opisie zaznaczono inaczej. Na 
życzenie klienta istnieje możliwość przerobienia pluginu na moduł INET LMS.

{% include acronyms.md %}

