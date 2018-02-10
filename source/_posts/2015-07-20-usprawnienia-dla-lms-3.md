---
layout: post
title: "Usprawnienia dla LMS, część 3"
date: 2015-07-21 18:45:00
description: "Lista nowych usprawnień dla LMS, dostępnych w ofercie LionNet, część 3"
keywords: LMS, Lan Management System, pluginy, wzorce projektowe, rozbudowa LMS, uprawnienia w LMS, bugi w LMS, masowa wysyłka SMS, szablony faktur, terminarz w LMS
tags:
- LMS
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

W ciągu ostatniego miesiąca udało mi się zakończyć takie zlecenia dotyczące LMS:

 * **Wysyłanie wiadomości do klientów podłączonych pod wybrane urządzenie sieciowe**
 * **Wysyłanie SMS z informacją o nowej faktury, zaksięgowaniu nowej wpłaty, upłynięciu terminu płatności faktury**
 * Wyszukiwanie klientów zamiast rozwijanych list na formatach dodawania i edycji komputerów, faktur, not itp.
 * Dodatkowe uprawnienia/obostrzenia dla użytkowników, zabezpieczające LMS przed wyciekiem danych klientów
 * Modyfikacje domyślnego szablonu faktury (usunięcie PIN, PESEL, rozdzielenie wartości do zapłaty od wartości bieżącej FV)
 * [Poprawienie buga w mechanizmie podpowiedzi wyszukiwarki w LMS](https://github.com/lmsgit/lms/pull/379)
 * [Poprawienie buga umożliwiającego na nieautoryzowany dostęp do niektórych plików LMS](https://github.com/lmsgit/lms/pull/381)

Obecnie pracuję nad:

 * Pobieranie informacji z serwera pocztowego czy FV została wysłana do klienta i prezentacja tejże w LMS;
 * Lista kończących się umów, powiadamianie BOK o kończących się umowach;
 * Lista kończących się zobowiązań, powiadamianie BOK o kończących się zobowiązaniach;
 * Terminarz - rozbudowa systemu komentarzy;
 * Pobieranie informacji z SerwerSMS.
 * Jednorazowe rabaty