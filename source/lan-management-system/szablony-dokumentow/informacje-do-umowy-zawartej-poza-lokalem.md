---
layout: page
title: "Szablon informacji do umowy zawartej poza lokalem dla LMS"
description: "Szablon informacji do umowy zawartej poza lokalem dla Lan Management System"
keywords: LMS, Lan Management System, sieci LAN, LMS GIT, LMS INET, wezwanie do zapłaty, przedsądowe wezwanie do zapłaty, ostateczne przedsądowe wezwanie do zapłaty, druki wpłat, uokik, umowa w lokalu, umowa poza lokalem
type: ItemPage
date: "2015-10-17 12:30:00"
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

Podejmuję się przenoszenia istniejących szablonów informacji dodatkowych 
do umowy zawartej poza lokalem do szablonów systemu LMS.

Szablony takie zawierają zazwyczaj informacje dla klienta według 
[wytycznych UOKiK dla umów zawieranych poza lokalem](https://uokik.gov.pl/faq_umowy_zawierane_na_odleglosc.php#f1255):

 * główne cechy świadczenia, tj:
    * wybrane pakiety;
    * okres świadczenia umowy;
    * termin podłączenia;
 * dane firmy;
 * wykaz opłat ponoszonych przez abonenta w okresie umowy, tj:
   * wysokość miesięcznego świadczenia w wybranej taryfie;
   * miesięczną ulgę w wybranej taryfie;
   * łączną opłatę abonamentowa w całym okresie umowy;
   * wysokość opłaty instalacyjnej;
   * ulgę w opłacie instalacyjnej;
   * łączną wysokość wszystkich opłat w całym okresie umowy;
   * opłatę abonamentową po przekształceniu się umowy w umowę na czas nieokreślony.

Dane te są pobierane z bazy LMS bądź podawane są podczas generowania umowy. 
Szablon uwzględnia zobowiązania dodawane z szablonów promocji. Dane wprowadzane 
podczas dodawania dokumentu są walidowane. Istnieje możliwość konfiguracji 
domyślnych ustawień szablonu.

Szablon może być także wykorzystany pod budowę szablonu informacji do umowy zawartej
w lokalu.

Treść szablonu jest zawsze konsultowana i może zostać zmieniona zgodnie z przekazanymi
uwagami.

### Przykłady:

 * [Formatka dodawania dokumentu z szablonu informacji do umowy zawartej poza lokalem](/assets/img/szablony_dokumentow/informacje_do_umowy_zawartej_poza_lokalem.png)

### Instalacja:

Zawartość paczki z szablonem należy umieścić w katalogu *lms/documents/templates/*.

### Konfiguracja:

W konfiguracji interfejsu użytkownika, w sekcji *phpui*, należy dodać 
następujące zmienne definiujące domyślne wartości pól formularza dodawania
dokumentu:

 * *remote_contract_details_connection_days_deadline* - ilość dni w ciągu których nastąpi przyłączenie abonenta;
 * *remote_contract_details_start_days_deadline* - ilość dni w ciągu których nastąpi rozpoczęcie świadczenia usługi;
 * *remote_contract_details_periods* - lista oddzielonych przecinkami ilości miesięcy na jakie może zostać zawarta umowa na czas określony;
 * *remote_contract_details_period* - domyślny czas trwania umowy (ilość miesięcy, "undefined" gdy umowa na czas nieokreślony);
 * *remote_contract_details_complain_address* - adres do składania reklamacji;
 * *remote_contract_details_complain_telephone_1* - numer telefonu do składania reklamacji;
 * *remote_contract_details_complain_telephone_1* - alternatywny numer telefonu do składania reklamacji;
 * *remote_contract_details_complain_email* - adres e-mail do składania reklamacji;
 * *remote_contract_details_tariffs_available* - lista oddzielonych przecinkami dostępnych taryf.


* * *

Zobacz także:

 * [Wezwanie do zapłaty](/lan-management-system/szablony-dokumentow/wezwanie-do-zaplaty)
 * [Przedsądowe wezwanie do zapłaty](/lan-management-system/szablony-dokumentow/przedsadowe-wezwanie-do-zaplaty)
 * [Książeczka opłat](/lan-management-system/szablony-dokumentow/ksiazeczka-oplat)




