---
layout: post
title: "MoSCoW dla Drug Dose Framework"
date: "2016-05-04 20:30:00"
description: 'Zadania do zrealizowania w projekcie apki do obliczania dawek leków'
keywords: daj się poznać 2016, konkurs programistyczny, aplikacja konkursowa, drug dose framework, aplikacja mobilna, pas pediatryczny, dawkowanie leków, ionic framework, metoda MoSCoW, zbieranie wymagań, analiza wymagań,  must have, should have, could have, wont have, minimum usable subset, markdown
tags:
- DSP2016
- DDF
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

Pisałem ostatnio o [zaletach metody MoSCoW][1] i o proponowanym przeze mnie szablonie
dokumentu dla tej metody. Pora zaprezentować jak taki dokument może wyglądać w 
rzeczywistości, na przykładzie mojej aplikacji DDF.

### Roadmap dla DDF

    # Requirements for project 'Drug Dose Framework'

    ## MUST have:
    - drugs set and drug details file format specyfication [0.1.0]
    - drug list view [0.1.0]
    - drug details view [0.1.0]
    - drug dose calculator view [0.1.0]
    - function to calculate valid doses for simple and complex dose schemas [0.1.0]

    ## SHOULD have:
    - function to let user choose drugs set from device file storage
    - option to validate user's sets and show mistkes
    - loading screen
    - program icon

    ## COULD have:
    - multi-language support
    - searching history
    - dose calculation history
    - function to let users change language at run time

    ## WON'T have:
    - built-in drug sets and drug details editor

Jak widać lista jest bardzo czytelna. Szybko można wyszukać na niej co już zostało
zrobione, a co jest do zrobienia w najbliższym czasie. Oznaczanie zrealizowanych
zadań numerami wersji w których zmiany te zostały wydane pomaga w szybkim przeglądzie
postępu prac nad projektem.

[1]: /2016/04/29/podroz-na-wschod-roadmap-z-moscow.html

