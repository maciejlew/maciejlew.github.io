---
layout: post
title: "Tłumaczenie atrybutów w angular-gettext"
date: "2016-05-27 17:00:00"
description: Jak poradzić sobie z tłumaczeniem tekstów przechowywanych w atrybutach HTML przy pomocy angular-gettext?
keywords: daj się poznać 2016, konkurs programistyczny, aplikacja konkursowa, drug dose framework, aplikacja mobilna, pas pediatryczny, dawkowanie leków, ionic framework, i18n, l10n, internacjonalizacja, angular-gettext, angularjs
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

W [mojej aplikacji][1] wykorzystuję [bibliotekę angular-gettext][2] w celu zapewnienia 
jej wsparcia dla I18N. Dzięki niej przygotowanie wielojęzykowej aplikacji w 
AngularJS jest w miarę proste. Biblioteka ta oferuje wiele możliwości oznaczania
tekstu jako *"do przetłumaczenia"*. Istnieją jednak pewne pułapki o których więcej
informacji znajdziesz właśnie w tym wpisie.

### Custom annotations w angular-gettext

Mechanizm [*custom annotations*][3] pozwala nam na zdefiniowanie własnych lub
wbudowanych atrybutów HTML które zostaną rozpoznane jako "do przetłumaczenia"
przez narzędzie *nggettext-extract*. [Jak używać mechanizmu *custom annotations* 
pisałem w poście opisującym angular-gettext][2]. Jest to metoda określana jako 
optymalna dla tłumaczenia tekstów zawartych w atrybutach. Ma jednak swoje 
ograniczenia. Załóżmy że mamy taki kod:

    <foo bar="abc">

w wyniku *nggettext_extract* otrzymamy:

    msgid "abc"

tak samo dla:

    <foo bar="abc"></foo>

ale dla:

    <foo bar="abc">xyz</foo>

otrzymamy:

    msgid "xyz"

Jak widać **mechanizm ten nie radzi sobie w niepustymi elementami HTML**. W 
przypadku gdy musimy przetłumaczyć atrybut takiego elementu **należy skorzystać z 
filtra *translate***:

    <foo bar="{{ "{{'abc'|translate " }}}}">xyz</foo>

Problem ten był już [zgłaszany][4] opiekunom biblioteki angular-gettext i czeka 
na rozwiązanie.
    
[1]: /2016/03/01/dam-sie-poznac.html
[2]: /2016/04/26/i18n-z-angularjs-gettext.html
[3]: https://angular-gettext.rocketeer.be/dev-guide/custom-annotations/
[4]: https://github.com/rubenv/angular-gettext/issues/226


