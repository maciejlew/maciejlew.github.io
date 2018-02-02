---
layout: post
title: "Code Coverage w Karma"
date: "2016-05-18 15:30:00"
description: "Jak włączyć raport pokrycia kodu testami w Karma i jak go interpretować?"
keywords: java script, karma, jasmine, jakość oprogramowania, testy jednostkowe, pokrycie kodu testami, code coverage, yeoman, grunt, tdd, test driven development
tags:
- QA
- JS
- DDF
- DSP2016
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

Raporty pokrycia kodu testami jednostkowymi pozwalają szybko i przyjemnie przeanalizować
stan projektu. Wskazują miejsca gdzie kod nie jest dostatecznie przetestowany.
W tym wpisie dowiesz się jak wygenerować i jak interpretować *code coverage* w 
narzędziu Karma dla JS.

### Konfiguracja Karma dla code coverage

Aby skorzystać z raportów pokrycia kodu testami jednostkowymi musimy doinstalować
bibliotekę *karma-coverage*:

    npm install karma-coverage

Następnie w konfiguracji, w pliku karma.conf.js bądź Gruntfile.js, należy dodać
następujące wpisy:

    plugins: ['karma-coverage'],
    reporters: ['coverage'],
    preprocessors: { '*.js': ['coverage'] }

Przykładowy wpis w Gruntfile.js, częściowo [wygenerowany przez Yeoman][1], może 
wyglądać po wprowadzeniu powyższych zmian tak:

    karma: {
      options: {
        basePath: '',
        frameworks: ['jasmine'],
        files: [
          '<%= yeoman.app %>/<%= yeoman.scripts %>/**/*.js',
          '<%= yeoman.test %>/mock/**/*.js',
          '<%= yeoman.test %>/spec/**/*.js'
        ],
        autoWatch: true,
        plugins: [
            'karma-jasmine',
            'karma-coverage',
            'karma-phantomjs-launcher'
        ],
        reporters: ['dots', 'coverage'],
        port: 8080,
        singleRun: false,
        preprocessors: {
          '<%= yeoman.app %>/<%= yeoman.scripts %>/**/*.js': ['coverage']
        },
        coverageReporter: {
          reporters: [
            { type: 'html', dir: 'coverage/' },
            { type: 'text-summary' }
          ]
        }
      },
      unit: {
        browsers: ['PhantomJS'],
        background: false
      },
      continuous: {
        browsers: ['PhantomJS'],
        singleRun: true
      }
    },

Od tej chwili po wykonaniu testów Karma w folderze coverage przygotuje raporty dla
każdej przeglądarki dla której testy zostały przeprowadzone. W katalogach tych 
znajdziemy pliki *index.php*, które po uruchomieniu w przeglądarce przedstawią
nam raport. Poniżej kilka przykładowych zrzutów ekranu z raportem:

![Karma code coverage report #1][2]

![Karma code coverage report #2][3]

![Karma code coverage report #3][4]

Na zrzutach widzimy, że raport HTML pozwala nam szybko przejrzeć strukturę projektu,
odnaleźć pliki dla których brakuje bądź jest za mało testów. **Mamy wyszczególnione
pokrycie testami linii, funkcji oraz gałęzi**, czyli ścieżek którymi może nasz kod 
przejść od startu do końca podczas jego wykonywania.

Dodatkowo, po przejściu do konkretnego pliku, Karma a właściwie wykorzystywane 
przez nią w tle narzędzie o nazwie Istanbul, wskaże nam podejrzane rozgałęzienia 
kodu, oznaczając je symbolami *I (if path not taken)* lub *E (else path not taken)*.


[1]: /2016/03/03/yeoman-idziemy-na-front.html
[2]: img/DSP2016/karma-code-coverage-1.png
[3]: img/DSP2016/karma-code-coverage-2.png
[4]: img/DSP2016/karma-code-coverage-3.png

