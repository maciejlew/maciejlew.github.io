---
layout: post
title: "Małe - wielkie zmiany w NetBeans dla PHP"
date: '2016-07-20 21:10:00'
description: 'Dobra zmiana w nadchodzącym wydaniu NetBeans 8.2 dla PHP'
keywords: "php, netbeans, ide, codesniffer, jakość oprogramowania"
tags:
- PHP
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

Nadchodzące wydanie NetBeans będzie zawierało w sobie pewną małą, ale istotną,
nowość dla wszystkich piszących w PHP i dbających o jakość stylu wytwarzanego 
oprogramowania.

### CodeSniffer szyty na miarę

Jak można przeczytać na [blogu dotyczącym wsparcia dla PHP w NetBeans][1], już 
niebawem, w kolejnej wersji oznaczonej numerem 8.2, możliwe będzie podłączenie
własnego pliku konfiguracyjnego dla analizatora stylu i składni jakim jest 
CodeSniffer. Oznacza to że od tego momentu możliwe będzie bardziej wybiórcze 
skonfigurowanie co ma być sprawdzane i raportowane przez NetBeans. Pomoże to 
wszystkim projektom które zmuszone są (np. z powodu *"legacy code"*) pominąć
niektóre z [reguł proponowanych w PSR][2], a także tym projektom w których zdecydowano 
się stosować niestandardowe reguły sprawdzania składni.

### PHPUnit na *cito*

Kolejnym usprawnieniem dla PHP wprowadzanym w NB 8.2 ma być pokazywanie wyników
testów napisanych w PHPUnit na bieżąco podczas ich wykonywania, a nie jak to jest
teraz dopiero po ich zakończeniu. Jest to, moim zdaniem, raczej zmiana kosmetyczna,
ale dobre i to.

Czekamy więc na oficjalne wydanie NB 8.2. Niecierpliwi mogą już dziś testować te
i inne zmiany [pobierając wersję *"nightly"* ze strony producenta][3].

[1]: https://blogs.oracle.com/netbeansphp/entry/php_tools_minor_improvements
[2]: http://www.php-fig.org/psr/
[3]: http://bits.netbeans.org/dev/nightly/

