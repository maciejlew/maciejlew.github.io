---
layout: page
title: "Lista kończących się zobowiązań w LMS"
description: kończące się zobowiązania, kończące się umowy, marketing w lms, pluginy dla lms
type: ItemPage
date: "2015-09-30 20:04:00"
breadcrumbs:
  - url: /
    title: "LionNet"
    type: AboutPage
  - url: /lan-management-system/
    title: "Lan Management System"
    type: CollectionPage
  - url: /lan-management-system/pluginy/
    title: "Pluginy"
    type: CollectionPage
  - url: page.url
    title: page.title
    type: ItemPage
generator: pagination
use:
  - posts
---

 * lista kończących się zobowiązań
 * możliwość oznaczania zobowiązań jako pomijanych podczas wyszukiwania

Funkcjonalność pluginu obejmuje listowanie kończących się zobowiązań w ciągu następnych 
30 dni. Dodatek ten bazuje na wygenerowanych w LMS zobowiązaniach. Zobowiązania te muszą mieć 
ustawione daty końca ich obowiązywania. Druga z funkcji to usunięcie Zobowiązania z tej 
listy - zobowiązanie takie pozostaje w systemie, ale nie będzie już brane pod uwagę 
podczas wyszukiwania kończących się zobowiązań.

### Zrzuty ekranu:

 * [Lista kończących się zobowiązań](/assets/img/pluginy/konczace_sie_zobowiazania.png)

### Instalacja:

Zawartość paczki z pluginem należy umieścić w katalogu *lms/plugins/*.

### Konfiguracja:

W menu konfiguracji, w module *Wtyczki*, należy uruchomić plugin 
*LMSTerminatingAssignmentsPlugin*.

* * *

Zobacz także:

 * [Lista kończących się umów](/lan-management-system/pluginy/konczace-sie-umowy)
