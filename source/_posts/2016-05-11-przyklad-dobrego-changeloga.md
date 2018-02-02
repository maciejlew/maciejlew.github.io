---
layout: post
title: "Przykład dobrego changeloga"
date: "2016-05-11 23:25:00"
description: 'Przykładowy changelog aplikacji'
keywords: daj się poznać 2016, konkurs programistyczny, aplikacja konkursowa, drug dose framework, aplikacja mobilna, pas pediatryczny, dawkowanie leków, markdown, changelog, dziennik zmian, numeracja wersji
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

Po wstępie do [tematu tworzenia dobrych changelogów][1] przyszedł czas na praktyczny
przykład.

### Przykład dobrego dziennika zmian

Dla przypomnienia, dobry dziennik powinien być prowadzony w Markdown, mieć 
przejrzyście wydzielone sekcje, wspierać [Semantic Versioning][2] oraz daty w 
formacie *YYYY-MM-DD*:


    ## [Unreleased]

    ## [0.2.0] - 2016-05-11
    ### Added
    - MSCW requirements document
    - I18N: en, pl, de

    ### Changed
    - alerts to Ionic modals

    ## [0.1.0] - 2016-04-13
    ### Added
    - drug list view
    - drug details view
    - dose calculator view
    - drugs data sets loader
    - drug dose calculation algorithms
    - UML class diagram

Jest to także dobra okazja by pochwalić się że DDF doczekał się wersji 0.2.0 oraz 
że zostało wdrożone jedno (choć mało istotnie bo oznaczone jako COULD) [wymaganie 
opisane w dokumencie MoSCoW][3] czyli wsparcie dla I18N.

Zmiany w DDF można także śledzić w jego [repozytorium na GitHubie][4].

[1]: /2016/05/05/jak-robic-dobry-changelog.html
[2]: http://semver.org/
[3]: /2016/05/04/moscow-dla-drug-dose-framework.html
[4]: https://github.com/maciejlew/drug-dose-framework

