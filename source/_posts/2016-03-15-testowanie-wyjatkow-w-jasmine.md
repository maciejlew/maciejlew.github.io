---
layout: post
title: "Testowanie wyjątków w Jasmine"
date: 2016-03-15 18:00:00
description: 'Testowanie wyjątków JS przy pomocy frameworka Jasmine'
keywords: daj się poznać 2016, konkurs programistyczny, aplikacja konkursowa, drug dose framework, aplikacja mobilna, pas pediatryczny, dawkowanie leków, yeoman, ionic framework, generator aplikacji, jasmine, bdd, testowanie aplikacji, wyjątki
tags:
- DSP2016
- JS
- DDF
- OOP
- QA
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

Czasami jest tak źle, że aż chce się rzucić mięsem... eee, tzn. wyjątkiem. Dobrze
by było przetestować także i takie scenariusze, aby nie rzucić nim przypadkiem 
w twarz całkiem niewinnemu użytkownikowi naszej aplikacji.

**Jasmine ma wbudowany matcher toThrow**. Gdy tylko go znajdujemy w API tego 
frameworka dla testów JS, a mamy doświadczenie z PHPUnit, pierwsze co przychodzi 
na myśl to wywołanie go w następujący sposób:

    expect().toThrow(TypeError);
    object.method();

co, jak się pewnie domyślasz, kończy się katastrofą:

> Error: Actual is not a Function

Asercja, w tym przypadku, oczekuje od nas że przekazana zostanie funkcja. **Najlepszym
rozwiązaniem jest opakowanie metody która ma wyrzucić wyjątek w funkcję anonimową.**
Spróbujmy ponownie:

    expect(function(){object.method();}).toThrow(TypeError);

> Expected function to throw Function, but it threw TypeError

Jest już lepiej, nasz test się wykonał. Niestety nie jest zielono. Dostajemy 
podpowiedź, mówiącą że oczekiwaliśmy funkcji, a w rzeczywistości dostaliśmy wyjątek
typu TypeError, bo załóżmy że ta metoda akurat taki wyjątek powinna nam rzucić.
Poprawmy w takim razie nasz kod tak, aby oczekiwać tego co w rzeczywistości jest
nam zwracane:

    expect(function(){object.method();}).toThrow(new TypeError());

> Expected function to throw TypeError, but it threw TypeError: Dose value must be numeric!

Ha! Okazuje się że **matcher toThow porównuje także komunikaty błędu!** Tak więc przed 
nami jeszcze jedna poprawka (Jasmine nie sprawdza pozostałych argumentów możliwych 
do podania podczas tworzenia obiektów wyjątków, tj.: fileName i lineNumber):

    expect(function(){object.method();}).toThrow(new TypeError('Dose value must be numeric!'));

**Teraz możemy podziwiać wynik naszego testu wypisany zielonymi zgłoskami.**

Więcej przykładów testowania wyjątków w Jasmine można zobaczyć przeglądając 
[repozytorium projektu DDF](https://github.com/maciejlew/drug-dose-framework), 
np. [test modelu dawki leku](https://github.com/maciejlew/drug-dose-framework/blob/master/test/spec/DoseSpec.js).

