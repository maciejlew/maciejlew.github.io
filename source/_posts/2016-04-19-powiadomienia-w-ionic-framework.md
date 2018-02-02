---
layout: post
title: "Powiadomienia w Ionic Framework"
date: "2016-04-19 20:25:00"
description: 'Jak zrobić fajne wyskakujące okienka z powiadomieniami w Ionic Framework'
keywords: daj się poznać 2016, konkurs programistyczny, aplikacja konkursowa, drug dose framework, aplikacja mobilna, pas pediatryczny, dawkowanie leków, ionic framework, alerty, modale, wyskakujące okienka, powiadomienia
tags:
- DSP2016
- JS
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

Czasem trzeba przedstawić użytkownikowi aplikacji pewien komunikat w taki sposób
aby na pewno go zauważył. Po przeczytaniu tego wpisu dowiesz się jak można to 
zrobić fajnie w Ionic Framework.

### 3 sposoby na komunikat

Jeśli znasz JS nie od dziś to na pewno wiesz że istnieje w nim coś takiego jak
metoda **alert**. Może nawet wiesz i korzystasz w metody **confirm**? Te dwie wbudowane
w silnik JS przeglądarek od tysięcy lat metody mogą być pierwszym sposobem jaki
przyjdzie Ci na myśl gdy staniesz przed zadaniem zrobienia powiadomień w Ionic
Framework. Ale zaczekaj chwilę. Jak się domyślasz **są na pewno inne, lepsze, 
rozwiązania przygotowane przez twórców Ionic**. No i nie mylisz się, masz do wyboru
serwisy **$ionicPopup** i **$ionicModal**!

#### Metody alert i confirm

Metody alert i confirm spełniają swoje zadanie, także w Ionic i także podczas 
uruchamiania aplikacji na telefonie. **Jest z nimi tylko jeden problem - nie można 
ich ostylować**. Zostaną wyświetlone zgodnie ze stylami wbudowanymi w przeglądarki
i środowiska UI na telefonach. Tak więc np. na moim smartfonie z Androidem metoda
alert powoduje przyciemnienie całego ekranu i wyświetlenie komunikatu w małym,
niebieskim prostokącie. Nie jest on nawet taki zły i brzydki, jednak niefajną sprawą 
jest to, że poza zdefiniowanym w programie komunikatem otrzymamy także w nagłówku 
tego prostokąta napis "Alert", a nie zawsze to co chcemy wyświetlić będzie przecież
ostrzeżeniem.

#### Serwis $ionicPopup

Serwis $ionicPopup, po wstrzyknięciu do kontrolera, daje nam do wyboru trzy metody:

 * show
 * confirm
 * alert

Każda z tych metod przyjmuje jak argument obiekt konfiguracyjny. Metodą **show**
możemy sobie zbudować **najbardziej kompleksowy pop-up**. Przyjmuje ona masę parametrów,
opisujących komunikat i jego budowę (HTML i CSS). Pozwala ponad to zdefiniować 
listę przycisków z czego każdy może zostać ostylowany, dostać własny callback 
reagujący na kliknięcie. **Metody confirm i alert są dużo prostsze**, pozwalają na 
zdefiniowanie komunikatu jak metoda show, a przyciski dostajemy już gotowe.
Wszystkie 3 metody stosują się do wzorca promise, a więc możemy zdefiniować
także akcję w przypadku udanego scenariusza (a dla confirm i alert jest to nawet 
wymagane by zrobić za ich pomocą coś sensownego).

#### Serwis $ionicModal

Serwis $ionicModal przyda nam się gdy ww. metoda show serwisu $ionicPopup stanie
się niewystarczająca. **Dzięki temu serwisowi możemy przygotować szablon wyskakującego
okienka, tak jak każdy inny partial w Ionic**. Serwis ten oczekuje od nas albo
przekazania szablony jako ciągu znaków lub wskazania mu URL do szablonu
(osobiście uważam że wskazanie URL jest lepsze bo pozwala na lepszą organizację 
kodu w projekcie). Ponadto, analogicznie jak w przypadku $ionicPopop, 
przekazujemy obiekt z konfiguracją. W konfiguracji wskazujemy scope naszego 
kontrolera, rodzaj animacji wykonywanej podczas wyskakiwania powiadomienia, czy 
chcemy aby focus ustawał się na pierwszym polu input szablonu i czy chcemy 
obsługiwać inne sposoby na zamknięcie okienka. Przygotowanie powiadomienia w 
ten sposób pozwala na bardzo kompleksowe jego ostylowanie, pozwala także na 
skorzystanie wewnątrz modalu z przychodzących wraz z AngularJS funkcjonalności.

### Najlepszy sposób na komunikat

Każdy ze wspomnianych wyżej sposobów ma swoje wady i zalety. Każdy z nich jest w 
stanie spełnić swoje zadanie zarówno w środowisku przeglądarki jak i na telefonie.
Z powodu braku możliwości wpłynięcia na wygląd renderowanych alertów i confirmów
odradzałbym je jednak a w ich miejsce zastosował, w zależności od potrzeb serwis
$ionicPopup lub $ionicModal. **Dla prostych ostrzeżeń i potwierdzeń na pewno wybrałbym
metody alert i confirm z $ionicPopup. W przypadku bardziej złożonych formatek
warto zastanowić się nad $ionicModal.**

Bardzo dobre przykłady zastosowania $ionicPopup i $ionicModal znajdziesz w 
[dokumentacji frameworka](http://ionicframework.com/docs/api/). Możesz także 
zajrzeć do [repozytorium DDF](https://github.com/maciejlew/drug-dose-framework)
gdzie ostatnio udało mi się zaimplementować $ionicModal do powiadamiania użytkownika
o wyniku obliczeń lub o zaistniałym wyjątku.

