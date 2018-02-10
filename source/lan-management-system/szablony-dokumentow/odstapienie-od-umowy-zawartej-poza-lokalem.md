---
layout: page
title: "Szablon odstąpienia od umowy zawartej poza lokalem dla LMS"
description: "Szablon odstąpienia od umowy zawartej poza lokalem dla Lan Management System"
keywords: LMS, Lan Management System, sieci LAN, LMS GIT, LMS INET, wezwanie do zapłaty, przedsądowe wezwanie do zapłaty, ostateczne przedsądowe wezwanie do zapłaty, druki wpłat, uokik, umowa w lokalu, umowa poza lokalem, odstąpienie od umowy, telekomunikacja, internet
type: ItemPage
date: "2015-10-18 12:25:00"
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
---

Przyjmuję zlecenia przenoszenia istniejących szablonów odstąpienia od umowy zawartej
poza lokalem do systemu LMS.

Szablon taki zawiera zazwyczaj oświadczenie klienta o odstąpieniu od umowy zawartej poza lokalem 
przedsiębiorstwa (na odległość).

Na szablonie, oprócz oświadczenia, znajdują się zwykle także:

 * dane klienta;
 * dane firmy;
 * miejsce wystawienia;
 * data wystawienia;
 * pouczenie do odstąpienia od umowy.

Formularz generowania szablonu pozwala na zdefiniowanie miejsca wystawienia oraz
zawartych w pouczeniu ilości dni na odstąpienie od umowy, na zwrot sprzętu przez
klienta oraz na zwrot nadpłaty przez ISP.

Dane o kliencie oraz dostawcy usługi są pobierane z bazy LMS pozostałe dane są
definiowane per dokument i podczas dodawania dokumentu są walidowane. Istnieje 
możliwość konfiguracji domyślnych ustawień szablonu.

Treść szablonu jest zawsze konsultowana i może zostać zmieniona zgodnie z przekazanymi
uwagami.

### Przykłady:

 * [Formatka dodawania dokumentu z szablonu odstąpienia od umowy zawartej poza lokalem](/assets/img/szablony_dokumentow/odstapienie_od_umowy_zawartej_poza_lokalem.png)

### Instalacja:

Zawartość paczki z szablonem należy umieścić w katalogu *lms/documents/templates/*.

### Konfiguracja:

W konfiguracji interfejsu użytkownika, w sekcji *phpui*, należy dodać 
następujące zmienne definiujące domyślne wartości pól formularza dodawania
dokumentu:

 * *remote_contract_cancellation_resignantion_days_deadline* - ilość dni na odstąpienie od umowy;
 * *remote_contract_cancellation_equipment_return_days_deadline* - ilość dni na zwrot sprzętu;
 * *remote_contract_cancellation_payments_return_days_deadline* - ilość dni na zwrot płatności;
 * *remote_contract_cancellation_location* - miejsce wystawienia dokumentu.


* * *

Zobacz także:

 * [Wezwanie do zapłaty](/lan-management-system/szablony-dokumentow/wezwanie-do-zaplaty)
 * [Przedsądowe wezwanie do zapłaty](/lan-management-system/szablony-dokumentow/przedsadowe-wezwanie-do-zaplaty)
 * [Książeczka opłat](/lan-management-system/szablony-dokumentow/ksiazeczka-oplat)
 * [Informacje do umowy zawartej poza lokalem](/lan-management-system/szablony-dokumentow/informacje-do-umowy-zawartej-poza-lokalem)



