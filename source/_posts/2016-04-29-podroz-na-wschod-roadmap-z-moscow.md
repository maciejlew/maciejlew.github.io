---
layout: post
title: "Podróż na wschód - roadmap z MoSCoW"
date: "2016-04-29 19:50:00"
description: 'Jak przygotować prosty roadmap aplikacji'
keywords: daj się poznać 2016, konkurs programistyczny, aplikacja konkursowa, drug dose framework, aplikacja mobilna, pas pediatryczny, dawkowanie leków,ionic framework, metoda MoSCoW, zbieranie wymagań, analiza wymagań, must have, should have, could have, wont have, minimum usable subset, markdown
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

Nawet w najprostszych projektach warto spisać raport z założonych wymagań, tzw. roadmap.
Czytając ten wpis dowiesz się jak zrobić to łatwo, tanio i przyjemnie wykorzystując
metodę MoSCoW.

Analiza wymagań jest jednym z najważniejszych etapów każdego projektu. I nie 
zależy to od jego wielkości czy przeznaczenia. Oczywiście w projektach korporacyjnych,
dla klientów zewnętrznych, o wielkich budżetach i wymaganiach, taka analiza ma swoje
dobrze opisane zasady. Ludzie ją przeprowadzający komunikują się z odbiorcą 
projektu w celu ustalenia celów i wypracowania możliwych do realizacji założeń.
Mogą przy tym korzystać z bardzo rozbudowanych, drogich programów tworzonych
przez równie duże korporacje. Z programów, o których można posłuchać na wykładach 
z inżynierii oprogramowania, a których nikt nigdy nie widział w swoim zakładzie 
pracy i raczenie już nie zobaczy. Po wszystkim powstaje jakiś dokument, o także z 
góry zdefiniowanej strukturze, dobrze znanej wszystkim stronom lub przynajmniej 
na tyle czytelnej aby nie było problemów z jego zrozumieniem gdy będzie trzeba 
rozliczyć projekt. 

Jednak nawet na niższym stopniu tej piramidy projektów dochodzi się w końcu do 
jakiejś formy analizy wymagań. **Nawet gdy piszesz program tylko dla siebie**, to w 
głowie zakładasz sobie jak on powinien wyglądać gdy już skończysz. Być może nie 
od razu wszystkie te założenia przyjdą Ci na myśl, a być może o niektórych z nich 
zapomnisz w międzyczasie. Mimo tego, a może właśnie dlatego, **dobrze jest spisać 
sobie wszystkie wymagania**, aby móc później do nich sprawnie zajrzeć w razie potrzeby. 
Spisane wymagania pozwalają także szybko przedstawić osobie trzeciej o co chodzi 
w całym projekcie i do czego mogłaby go było wykorzystać. I **nie potrzebujesz do 
tego żadnych wymyślnych programów i metodologii!**

### MoSCoW

[MoSCoW jest metodą opisu wymagań][1] z czytelnym dla wszystkich szablonem. Wystarczy 
na kartce papieru, a w obecnych czasach w dokumencie otwartym w ulubionym edytorze
tekstu, napisać w 4 liniach zwroty: MUST HAVE, SHOULD HAVE, COULD HAVE, WON'T HAVE,
a następnie wypełnić miejsce pod nimi kolejnymi wymaganiami dopasowanymi do właściwej
sekcji.

#### Sekcja MUST HAVE

W tej sekcji powinny znaleźć się **najważniejsze dla naszego projektu wymagania**,
bez których było by nam wstyd próbować komukolwiek wmówić że aplikacja jest gotowa.
Wyraz MUST można także rozszyfrować jak akronim **Minimum Usable SubseT**. Jeśli
jesteś perfekcjonistą, może Ci się wydawać że tu powinno znaleźć się praktycznie 
wszystko co podczas tworzenia aplikacji przyjdzie Ci do głowy, ale poczekaj, są
jeszcze inne sekcje do wypełnienia...

#### Sekcja SHOULD HAVE

W sekcji "powinno" powinny znaleźć się **wymagania które są wymagane aby móc uznać
projekt za skończony, ale na które masz jeszcze czas** i jesteś na obecnym etapie w
stanie w jakiś sposób obejść. 

#### Sekcja COULD HAVE

Ta sekcja może zostać wypełniona **wymaganiami które byłyby dobrze widziane przez
klienta lub końcowych użytkowników, podniosłyby wartość całego projektu**, ale bez
których także będzie się czym pochwalić. To tymi wymaganiami powinieneś się zająć
w pierwszej kolejności gdy już się uporasz z sekcją MUST i SHOULD a masz jeszcze
trochę czasu.

#### Sekcja WON'T HAVE

W ostatniej sekcji powinny znaleźć się **najmniej istotne wymagania** które mogły pojawić
się podczas burzy mózgów na spotkaniach z klientem (lub samym sobą). Są to takie
wymagania które odpadają w przedbiegach bo nie będziesz w stanie w sensownym czasie
ich dostarczyć bądź zleceniodawca nie będzie w stanie za nie zapłacić. Dobrze
jest umieścić je w tej sekcji aby już więcej do nich nie wracać w przyszłości lub 
po to by móc drugiej stronie wskazać że miejsce tych wymagań zostało już wyznaczone.

### MoSCoW Markdown

Markdown jest prostym językiem opisy struktury dokumentów tekstowych, zdobywającym
za przyczyną GitHuba coraz większą popularność. Jest bardzo przejrzysty nawet dla
osób widzących go pierwszy raz w życiu na oczy, może być łatwo konwertowany do
HTML, PDF i innych formatów. Jego składni można [nauczyć się w kilka minut][2].
Wbudowana w GitHuba obsługa Markdown pozwala na łatwe przygotowanie treści i jej 
wyświetlenie w ładnej formie w przeglądarce internetowej osób przeglądających 
źródła projektu na GitHubie. **Format ten może być wykorzystywany do tworzenia 
dokumentacji, dzienników zmian (changelogów) i innych około-projektowych dokumentów.** 
Dzięki swojej tekstowej formie może być także łatwo wersjonowany.

Nie udało mi się niestety znaleźć w sieci gotowego szablonu dla raportów MoSCoW, 
postanowiłem więc być prekursorem i stworzyć takowy. A co! Może zyska on taką 
popularność jak [format opisu changelogów][3]!

#### Szablon MoSCoW Markdown

    # Requirements for project 'project name'

    ## MUST have
    - already done requirement [0.0.1]
    - very important requirement

    ## SHOULD have
    - important requirement

    ## COULD have
    - interesting requirement

    ## WON'T have
    - unreachable requirement

Szablon taki składa się z nagłówka wskazującego nazwę projektu. Może zawierać
dodatkową informację o celu sporządzenia tego dokumentu - czyli dostarczeniu listy
wymagań. Następnie wypisane są ww. sekcje metody MoSCoW. Pod każdą z nich znajdują
się wpisy. Zrealizowane wymagania oznaczone są numerem wersji od której dane 
wymaganie uznano za spełnione.


[1]: https://pl.wikipedia.org/wiki/Metoda_MoSCoW
[2]: https://blog.ghost.org/markdown/
[3]: http://keepachangelog.com/

