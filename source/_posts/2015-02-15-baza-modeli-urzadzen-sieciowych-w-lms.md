---
layout: post
title: "Baza modeli urządzeń sieciowych w LMS"
date: 2015-02-15 22:00:00
description: "Baza producentów i modeli urządzeń sieciowych w LMS"
keywords: LMS, Lan Management System, urządzenia sieciowe, MikroTik, Ubiquiti, rozwój LMS, lista modeli urządzeń sieciowych, routery, switche
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

Dodałem do głównej gałęzi LMS **możliwość przechowywania w bazie danych LMS nazw 
producentów i ich modeli urządzeń sieciowych**. Obecnie wgrane zostały modele 
wyprodukowane przez firmy Mikrotik i Ubiquiti. Ponadto udostępniłem mechanizm 
pobierania tych nazw na formatce dodawania i edycji nowego urządzenia sieciowego.
Identyfikator modelu urządzenia jest w tle przypisywany do urządzenia. Pozwoli
to w przyszłości na taka rozbudowę systemu LMS, aby możliwe było wykonywanie różnych
akcji w specjalizowany dla danego modelu urządzenia sposób.

Poniżej zamieszczam kilka zrzutów ekranu pokazujących nową funkcjonalność w akcji:

<div class="gallery">

    <div class="galleryItem">
        <div class="stack twisted">
            <a href="/assets/img/lms_netdevicemodel/lms_netdevicemodel_1.png">
                <img src="/assets/img/lms_netdevicemodel/lms_netdevicemodel_1.png" alt="Opcja pobierania modelu urządzenia sieciowego" title="Opcja pobierania modelu urządzenia sieciowego"/>
            </a>
        </div>
    </div>

    <div class="galleryItem">
        <div class="stack twisted">
            <a href="/assets/img/lms_netdevicemodel/lms_netdevicemodel_2.png">
                <img src="/assets/img/lms_netdevicemodel/lms_netdevicemodel_2.png" alt="Wybieranie modelu urządzenia sieciowego z listy" title="Wybieranie modelu urządzenia sieciowego z listy"/>
            </a>
        </div>
    </div>

</div>
