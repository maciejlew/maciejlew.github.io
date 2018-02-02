---
layout: post
title: "Jak robić dobry changelog?"
date: "2016-05-05 22:15:00"
description: 'Jak przygotować dobry dziennik zmian aplikacji, jak prowadzić changelog'
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

Jeśli zastanawiasz się jak przygotować dobry, ustandaryzowany i czytelny changelog
Twojej aplikacji to w tym wpisie najdziesz to czego szukasz.

## Changelog

Dziennik zmian jest dokumentem często robionym po macoszemu, z założeniem że i
tak nikt go nie przeczyta i nikomu się nie przyda. A to duży błąd. Dobrze 
przygotowany changelog pomaga. I to bardzo. Dzięki niemu szybko ustalisz co
nowego zostało dodane w danej wersji, co zostało naprawione, usunięte lub zastąpione.
Łatwiej również będzie Ci zaspokoić ciekawość kolegów z działu handlowego lub 
samych klientów podsyłając im gotowy i czytelny dla nich dokument. Zyskasz na 
czasie. Nie będziesz musiał wszystkie pamiętać lub sprawdzać bezpośrednio w 
kodzie bądź repozytorium.

### Jak robić dobry changelog?

Pisanie changeloga to proces ciągły. Dobrze by było gdyby każdy bez chwili 
zastanowienia wiedział jak opisać swoją zmianę. Na szczęście ktoś pomyślał za 
Nas i nie musimy wymyślać koła od nowa. [Projekt Keep a CHANGELOG][1] powstał, 
jak sama nazwa wskazuje, by ułatwić wszystkim utrzymywanie ustandaryzowanego, 
czytelnego dziennika zmian. Projekt ten definiuje kilka zasad które są łatwe do 
zapamiętania i wdrożenia:

 * najważniejsza jest czytelność
 * należy wykorzystywać Markdown
 * należy dzielić dokument na sekcje - sekcja = wersja projektu
 * porządek ma być odwrotnie chronologiczny
 * daty należy zapisywać w formacie *YYYY-MM-DD*
 * należy numerować zgodnie z [Semantic Versioning][2]
 * należy odpowiednio formować i formatować każdą z wersji (sekcji):
   * powinna mieć określoną datę wydania
   * powinna grupować zmiany według schematu:
     * *Added* nowe ficzery
     * *Changed* rzeczy zmienione
     * *Deprecated* funkcjonalności które mają w przyszłości zostać wycofane
     * *Removed* usunięte funkcje programu
     * *Fixed* naprawione bugi
     * *Security* ważne dla bezpieczeństwa fixy
 * dodatkowo należy zdefiniować sekcję *Unreleased* dla wersji niestabilnej

### Po co robić changelog?

Te kilka prostych zasad powoduje że changelog staje się czytelny dla wszystkich
jego użytkowników. Dodatkowo, dzięki zastosowaniu Markdown, może łatwo zostać 
skonwertowany do HTML bądź PDF co pozwoli na jego przedstawienie klientowi w 
bardziej biznesowej formie. Taki przygotowany w Markdown changelog ładnie będzie
także wyglądał na GitHubie. Dziennik zmian, podobnie jak np. [roadmap][3] i inne
około-projektowe dokumenty, może wzbogacić Twój projekt i warto poświęcić mu klika 
chwil. Zwróci Ci się to!

[1]: http://keepachangelog.com/
[2]: http://semver.org/
[3]: /2016/04/29/podroz-na-wschod-roadmap-z-moscow.html

