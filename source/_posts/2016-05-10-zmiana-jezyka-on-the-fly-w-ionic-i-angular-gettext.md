---
layout: post
title: "Zmiana języka 'on the fly' w Ionic i angular-gettext"
date: "2016-05-10 20:20:00"
description: Jak zmienić dynamicznie język aplikacji napisanej w Ionic z wykorzystaniem biblioteki angular-gettext?
keywords: daj się poznać 2016, konkurs programistyczny, aplikacja konkursowa, drug dose framework, aplikacja mobilna, pas pediatryczny, dawkowanie leków, ionic, angular, gettext
tags:
- DSP2016
- DDF
- JS
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

Pisałem niedawno o [wdrażaniu I18N w aplikacji][1]. Tym razem pokaże jak zrobić 
działający "on the fly" kontroler do zmiany języka w aplikacji napisanej przy pomocy
frameworka Ionic.

### Wczytywanie ustawień językowych podczas uruchamiania

Podczas uruchamiania aplikacji dobrze by było pobrać język w jakim użytkownik 
życzy sobie jej używać. **Ustawienia językowe możemy zapisać np. w local storage**.
Przyjmijmy że nasza aplikacja obsługuje 3 języki: angielski, polski i niemiecki.
Przy takiej konfiguracji nasz moduł może wyglądać następująco:

    var app = angular.module('DrugDoseFrameworkApp', dependencies).run(function ($ionicPlatform, gettextCatalog) {

        var language = 'en_EN';
        if (window.localStorage.getItem('language')) {
            language = window.localStorage.getItem('language');
        } else {
            switch (window.navigator.language.substr(0, 2)) {
                case 'pl':
                    language = 'pl_PL';
                    break;
                case 'de':
                    language = 'de_DE';
                    break;
            }
            localStorage.setItem('language', language);
        }
        gettextCatalog.setCurrentLanguage(language);
    });

Widzimy tu, że domyślnie ładowany jest język angielski. Następnie próbujemy wykryć
czy użytkownik już zapisał cokolwiek w zmiennej przechowywanej lokalnie nt.
preferowanego języka. Jeśli i to się nie powiedzie, to próbujemy ustalić język
na podstawie ustawień przeglądarki.

### Kontroler zmiany języka

    drugDoseFrameworkControllers.controller('LanguageCtrl', function ($scope, $state, gettextCatalog) {

        $scope.language = window.localStorage.getItem('language');

        $scope.changeLanguage = function() {
            window.localStorage.setItem('language', $scope.language);
            gettextCatalog.setCurrentLanguage($scope.language);
            $state.go('drugs');
        };

    });

Kontroler ten posiada jedną zmienną, określająca wybrany język oraz jedną prostą
metodę pozwalającą na jego zmianę. Nowe ustawienia są zapisywane w localStorage.

### Widok zmiany języka

    <ion-view view-title="Language settings">
    <ion-content ng-controller="LanguageCtrl">
        <ion-list>
            <ion-radio ng-model="language" ng-value="'en_EN'" ng-change="changeLanguage()">
                english
            </ion-radio>
            <ion-radio ng-model="language" ng-value="'pl_PL'" ng-change="changeLanguage()">
                polish
            </ion-radio>
            <ion-radio ng-model="language" ng-value="'de_DE'" ng-change="changeLanguage()">
                german
            </ion-radio>
        </ion-list>
    </ion-content>
    </ion-view>

Widok zmiany języka jest bardzo prosty i składa się z dyrektyw Ionic za którymi
kryją się proste radio inputy. Bindujemy tu model *language* z tymi inputami oraz
podpinamy metodę *changelanguage* pod zdarzenie zmiany stanu tych kontrolek.

### Konfiguracja stateProvider'a

Jeśli nasza aplikacja Ionic składa się z wielu widoków *ion-view* bądź *ion-nav-view*
i chcemy aby język ustawił się od razu, a nie po kolejnym uruchomieniu aplikacji
(bądź odświeżeniu strony) to musimy wyłączyć cache dla tych widoków. Możemy to 
zrobić w module konfiguracji aplikacji w następujący sposób:

    app.config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider.state('drugs', {
            cache: false,
            url: '/drugs/',
            templateUrl: 'partials/drug-list.html',
            controller: 'DrugListCtrl'
        }).state('drug-details', {
            cache: false,
            url: '/drugs/:drugId',
            templateUrl: 'partials/drug-details.html',
            controller: 'DrugDetailsCtrl'
        }).state('language', {
            cache: false,
            url: '/drugs/language/',
            templateUrl: 'partials/language.html',
            controller: 'LanguageCtrl'
        }).state('drug-dose', {
            cache: false,
            url: '/drugs/dose/:drugId',
            templateUrl: 'partials/drug-dose.html',
            controller: 'DrugDoseCtrl'
        });
        $urlRouterProvider.otherwise("/drugs/");
    });

### Podsumowanie

Dodanie obsługi wielu języków w aplikacji Ionic jest bardzo proste jeśli skorzysta 
się z biblioteki angular-gettext. Ilość kodu do tego potrzebna jest bardzo mała,
a sama implementacja zrozumiała dla każdego, nawet początkującego programisty
JS. Jedyną trudnością może być znalezienie informacji o konieczności [wyłączenia
cache widoków Ionic][2].

Zachęcam do przejrzenia kodu mojej [aplikacji konkursowej DDF][3], w której 
zaimplementowałem w podany wyżej sposób I18N.




[1]: /2016/04/26/i18n-z-angularjs-gettext.html
[2]: http://ionicframework.com/docs/api/directive/ionNavView/
[3]: https://github.com/maciejlew/drug-dose-framework

