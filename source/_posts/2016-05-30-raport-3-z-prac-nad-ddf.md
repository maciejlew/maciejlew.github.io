---
layout: post
title: "Raport #3 z prac nad DDF"
date: "2016-05-30 21:30:00"
description: 'Raport #3 z postępów w pracach nad projektem DDF - Drug Dose Framework'
keywords: daj się poznać 2016, konkurs programistyczny, aplikacja konkursowa, drug dose framework, aplikacja mobilna, pas pediatryczny, dawkowanie leków,  framework, ionic, angularjs, android, ios, analiza wymagań, raport
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

To już koniec. Ale coś jest. Jest skończona aplikacja na konkurs DSP2016! Zachęcam
do zapoznania się z trzecim i ostatnim raportem z prac nad DDF wykonanym podczas
trwania DSP2016 (mam zamiar dalej rozwijać aplikację, ale już poza konkursem).

### Postępy w DDF

![Ikona DDF][12]

Z powodów opisanych [przeze mnie ostatnio][1], postanowiłem przesunąć funkcjonalność
polegającą na możliwości wskazywania plików z lekami i ich dawkowaniem do [sekcji
"COULD" analizy wymagań][2]. Zostały za to spełnione inne wymagania, czyli 
[wdrożenie I18N][3], [dodanie ikony i splash screena][4] (widoczne obok).
Została wydana [wersja 0.3 aplikacji DDF, do pobrania z repozytorium][9].

#### Model

Model aplikacji nie zmienił się od czasu [poprzedniego raportu][5].

#### Kontroler

Jeśli chodzi o kontrolery to tutaj zaszły pewne zmiany. Dodałem obsługę [powiadomień 
z Ionic Framework][6]. Wprowadziłem [wsparcie dla I18N][3] - udało mi się to 
zrobić tak, że [zmiana języka odbywa się bez konieczności przeładowania aplikacji 
na telefonie][7].

#### Widoki

Został zmieniony sposób w jaki przechodzi się do szczegółów leku oraz do kalkulatora
dawki leku. Dodano zostało wysuwane boczne menu. Z tego menu można przejść do 
widoku ustawień językowych. Poniżej przedstawiam galerię prezentującą poszczególne
widoki:

<div class="gallery">

    <div class="galleryItem">
        <div class="stack twisted">
            <a href="{{site.url}}/assets/img/DSP2016/ddf-drug-list-polish.png">
                <img src="{{site.url}}/assets/img/DSP2016/ddf-drug-list-polish.png" alt="lista leków"/>
            </a>
        </div>
    </div>
    <div class="galleryItem">
        <div class="stack twisted">
            <a href="{{site.url}}/assets/img/DSP2016/ddf-drug-details.png">
                <img src="{{site.url}}/assets/img/DSP2016/ddf-drug-details.png" alt="szczegóły leku"/>
            </a>
        </div>
    </div>
    <div class="galleryItem">
        <div class="stack twisted">
            <a href="{{site.url}}/assets/img/DSP2016/ddf-dose-calculator.png">
                <img src="{{site.url}}/assets/img/DSP2016/ddf-dose-calculator.png" alt="kalkulator dawki leku"/>
            </a>
        </div>
    </div>
    <div class="galleryItem">
        <div class="stack twisted">
            <a href="{{site.url}}/assets/img/DSP2016/ddf-dose-result.png">
                <img src="{{site.url}}/assets/img/DSP2016/ddf-dose-result.png" alt="wynik obliczenia dawki leku"/>
            </a>
        </div>
    </div>
    <div class="galleryItem">
        <div class="stack twisted">
            <a href="{{site.url}}/assets/img/DSP2016/ddf-dose-exception.png">
                <img src="{{site.url}}/assets/img/DSP2016/ddf-dose-exception.png" alt="komunikat o błędzie podczas obliczania dawki leku"/>
            </a>
        </div>
    </div>
    <div class="galleryItem">
        <div class="stack twisted">
            <a href="{{site.url}}/assets/img/DSP2016/ddf-language-settings-1.png">
                <img src="{{site.url}}/assets/img/DSP2016/ddf-language-settings-1.png" alt="boczne menu prowadzące do widoku zmiany języka aplikacji"/>
            </a>
        </div>
    </div>
    <div class="galleryItem">
        <div class="stack twisted">
            <a href="{{site.url}}/assets/img/DSP2016/ddf-language-settings-2.png">
                <img src="{{site.url}}/assets/img/DSP2016/ddf-language-settings-2.png" alt="formularz zmiany języka aplikacji"/>
            </a>
        </div>
    </div>
    <div class="galleryItem">
        <div class="stack twisted">
            <a href="{{site.url}}/assets/img/DSP2016/ddf-drug-list-english.png">
                <img src="{{site.url}}/assets/img/DSP2016/ddf-drug-list-english.png" alt="lista leków po angielsku"/>
            </a>
        </div>
    </div>
</div>

#### Testy

Włączyłem w projekcie [raporty pokrycia kodu testami jednostkowymi uruchamianymi
przez Karma][8]. Pomimo rozwoju aplikacji udało się utrzymać pokrycie na wysokim
poziomie, oscylującym wokół 80%, model przetestowany jest w 100%!

![DDF Karma code coverage report #1][11]

#### Stan aplikacji

Ostatnie 3 miesiące były dla mnie bardzo pracowite. Poza codziennymi obowiązkami
zgłosiłem się do DSP2016. Warunki konkursu były bardzo dobrze wyważone - pozwalały
wystartować w nim osobom pracującym, które na rozbudowę aplikacji i blogowanie
mogły poświęcić ograniczoną ilość czasu. Myślę że udało mi się wykorzystać ten 
czas w optymalny sposób. Aplikacja konkursowa działa, może być już wykorzystywana
w zakresie dla którego została wymyślona, czyli do budowy aplikacji obliczających dawki
leków na urządzeniach mobilnych. Użytkownikowi został dostarczony działający
szkielet, do którego wystarczy że wgra [zestaw interesujących do leków zgodny ze
wspieranym formatem][10]. 

#### Co dalej z DDF?

Aplikacja będzie dalej rozwijana. W moim wolnym czasie
postaram się dodać kolejne funkcjonalności. Czekam także na opinie użytkowników
i pomysły na dalszy rozwój DDF!

[1]: /2016/05/28/szewc-ze-starym-smartfonem-chodzi.html
[2]: /2016/04/29/podroz-na-wschod-roadmap-z-moscow.html
[3]: /2016/04/26/i18n-z-angularjs-gettext.html
[4]: /2016/05/26/ikony-i-splash-screen-aplikacji-w-ionic-framework.html
[5]: /2016/04/14/raport-2-z-prac-nad-ddf.html
[6]: /2016/04/19/powiadomienia-w-ionic-framework.html
[7]: /2016/05/10/zmiana-jezyka-on-the-fly-w-ionic-i-angular-gettext.html
[8]: /2016/05/18/code-coverage-w-karma.html
[9]: https://github.com/maciejlew/drug-dose-framework/releases/tag/v0.3.0
[10]: /2016/03/12/format-opisu-lekow-w-ddf.html
[11]: img/DSP2016/ddf-code-coverage-1.png
[12]: img/DSP2016/icon.png

