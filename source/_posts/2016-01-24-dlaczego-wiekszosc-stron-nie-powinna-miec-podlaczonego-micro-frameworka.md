---
layout: post
title: "Dlaczego większość stron nie powinna mieć podłączonego (micro) frameworka?"
date: 2016-01-24 15:00:00
description: "Opinia o wykorzystywaniu frameworków do budowy stron WWW"
keywords: php, frameworki, strony internetowe, zaśmiecacze internetu, blogi, strony wizytówki
tags:
- OOP
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

Ten post jest polemiką z artykułem który ostatnio znalazłem na Planecie PHP - 
["Dlaczego każda strona powinna mieć podłączony (micro) framework?"](http://sf.jogger.pl/2015/12/30/dlaczego-kazda-strona-powinna-miec-podlaczony-micro-framewor/)
 - zachęcam do uprzedniego zapoznania się z jego tezami.

## Dlaczego frameworki są takie fajne?

Stanowisko że frameworki są fajne bo standaryzują pewne rozwiązania, zmniejszają
próg wejścia w projekt dla nowych programistów, ułatwiają pracę, są zgodne z regułą
DRY i KISS, wytworzony w oparciu o nie kod może zostać wykorzystany ponownie,
jest powszechne i trudne do obalenia - nie to pchnęło mnie do napisania tego wpisu.
Drażni mnie trochę kwantyfikator jakiego użyto w tytule - "każda strona powinna"...

## Dlaczego nie każda strona powinna mieć frameworka?

Otóż moim zdaniem większość stron nie powinna mieć podłączonego micro frameworka,
nie powinna mieć także frameworka, a idąc dalej tym tropem w ogóle nie powinna 
być oparta na skryptach napisanych w PHP czy jakimkolwiek innym języku programowania. 

Można zaobserwować że obecnie większość pisanej treści w Internecie to SEO SPAM, 
wygenerowany automatycznie, umieszczony na stronach - zaśmiecaczach internetu. 
Trudno było mi nawet znaleźć wyniki aktualnych badań an ten temat, ale to może 
właśnie z powodu tego że coraz trudniej znaleźć coś sensownego w Internecie. Tacy 
zaśmiecacze z pewnością potrzebują dynamicznie generowanych stron, ale pozwolę 
sobie pominąć ten przypadek w dalszych rozważaniach.

Większości sensownych stron na świecie wystarczyłyby statyczne treści napisane w 
HTML. Większość z nich to po prostu strony wizytówki firm i osób, które nie 
zmieniają się częściej niż raz na miesiąc lub rzadziej. Wdrażanie na takich 
stronach frameworków to trochę przerost formy nad treścią. Można co prawda 
powiedzieć, że nie wiadomo co będzie później, może będzie potrzebny blog?, może 
ankieta?, może newsletter? A może wystarczyłoby się po prostu zapytać właściciela 
strony, jaką ma wizję rozwoju i dać mu kilka dni na przemyślenie sprawy? Nawet 
jeśli wspomniane wyżej elementy okażą się niezbędne, nie oznacza to od razu że 
trzeba je implementować samemu czy też wykorzystując framework. Tego typu potrzeby 
zostały już dawno zauważone i w sieci istnieje mnóstwo, także darmowych, usług 
oferujących prowadzenia bloga, dodawanie systemów komentarzy, ankiet itp. Mają 
one swój plusy i minusy, ale dla takich "małych stronek" moim zdaniem lista 
plusów jest większa niż minusów.

## Jak poradzić sobie bez frameworka?

Załóżmy że mamy zlecenie na prostą stronę - wizytówkę. Z rozmowy wynika że 
zleceniodawca, co prawda, chciałby od czasu do czasu dodać jakiegoś newsa, ale nie 
będzie tego robił zbyt często. Co możemy zrobić aby zmniejszyć koszty i czas 
wdrożenia takiego zlecenia?

Możemy zaproponować stronę w oparciu o jakiś generator blogów, np Jekyll z hostingiem
na GitHub Pages, z usługą dodawania przez nas newsów zredagowanych przez właściciela. 
Plusy tego rozwiązania to:

 * w sieci znajdziemy szybko szablon takiego bloga;
 * zredagowany tekst szybko można skonwertować na Markdown który jest już standardem
w tego typu rozwiązaniach - przenośność;
 * tekst w Markdown jest czytelny dla osób "nietechnicznych";
 * mamy zintegrowany system kontroli wersji;
 * podłączenie systemu komentarzy to "pikuś" - jest np. Disqus;
 * nie potrzebujemy serwera na treści ani bazy danych - można oszczędzić;
 * klient mając swoje konto na GitHubie może zawsze przekazać obsługę strony 
komuś innemu (czasami to minus ;-));
 * klient wraca do nas od czasu do czasu (czasem to także jest minus ;-));
 * nie musimy się aż tak bardzo martwić o bezpieczeństwo naszej strony i danych 
użytkowników - wszystko mamy przechowywane w postaci statycznych plików lub 
wyniesione do zewnętrznych usług. Jedynie przechwycenie haseł do tych usług przez
napastnika lub problemy u zewnętrznych usługodawców mogłyby nam zaszkodzić;
 * treści z plików Markdown łatwo w przyszłości będzie przenieść do bardziej
zaawansowanego rozwiązania jeśli taka migracja okazałaby się konieczna.

Minusy to:

 * niektórych niestandardowych życzeń nie da się zrealizować;
 * zleceniodawca, jeśli nie chce nam zlecać dodawania treści lub nie chcemy się 
tym zajmować, musi się nauczyć obsługi GitHuba, czyli poświęcić na to jakieś 10 minut 
(ale panelu WordPress czy czegoś innego także musiałby się nauczyć, prawda?);
 * w GitHub Pages każdy może zobaczyć historię naszej strony;
 * zleceniodawca łatwo może przekazać obsługę strony komuś innemu.

## Kiedy warto użyć (micro) frameworka?

Frameworki warto użyć gdy strona ma potencjał stać się czymś więcej niż zwykłym 
blogiem czy też stroną wizytówką firmy/osoby. Konieczne wydaje się to także, jeśli
strona jest de-facto naszym produktem, gdy zarabiamy na tym że ktoś jej używa,
gdy nad stroną pracuje zespół programistów, gdy przewidujemy że będzie potrzebne API. 
Czy takich stron jest dużo w Internecie? Raczej wątpię, jak napisałem wcześniej 
większość stron to zaśmiecacze lub bardzo proste strony niewymagające do swojego 
działania "rocket science". Myślę, że do realizacji każdej strony należy podejść 
indywidualnie, przekazując klientowi listę plusów i minusów każdego z rozwiązań. 
Nie należy natomiast bezrefleksyjnie uznawać jednego, nawet popularnego i 
wygodnego, rozwiązania za uniwersalną odpowiedź na każdy problem.

