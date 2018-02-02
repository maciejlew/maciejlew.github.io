---
layout: post
title: "Wyszukiwanie binarne i interpolacja liniowa w JavaScript"
date: "2016-03-26 23:40:00"
description: 'Przykład implementacji wyszukiwania binarnego w języku JavaScript'
keywords: wyszukiwanie binarne, wyszukiwanie w zbiorze, algorytmy wyszukiwania, inżynieria oprogramowania, wyszukiwanie w javascript, interpolacja liniowa
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

Warto pamiętać o podstawowych algorytmach wpajanych już we wczesnych latach na 
lekcjach matematyki lub później na zajęciach z algorytmów na uczelniach. Nawet
jeśli nie pamięta się już ich implementacji, to sama znajomość pojęć może się przydać.
W obecnych czasach dostęp do wiedzy jest ogromny, trzba tylko wiedzieć co chce
się odnaleźć w tym gąszczu informacji. Taki wniosek nasunął mi się sam podczas 
tworzenia aplikacji konkursowej DDF.

W aplikacji mam założone że dawki leków mogą być opisane jako zbiory dyskretnych
wartości. Mam więc zbiór wag (iksy) oraz zbiór dawek (igreki). Gdy użytkownik 
aplikacji chce obliczyć dawkę dla leku opisanego właśnie w taki sposób **należy
odnaleźć w zbiorze iksów zadaną wagę i odczytać dla niej ze zbioru igreków dawkę**.
Można oczywiście wykorzystać wyszukiwanie liniowe i przeszukać cały zbiór iks po 
iksie, ale w najgorszym wypadku musimy sprawdzić wszystkie iksy. Jest wątpliwe
aby kiedyś ktoś dodał do aplikacji tak złożony model aby zrobiło to wrażenie 
na procesorze współczesnego telefonu komórkowego, ale nigdy nic nie wiadomo.
Poza tym skoro są już znane lepsze algorytmy to czemu by z nich nie skorzystać?
Dodatkowym utrudnieniem niech będzie to, że **jeśli zadana waga nie jest obecna 
w zbiorze należy dokonać interpolacji liniowej przy pomocy dwóch najbliższych wag
i odpowiadających im dawek**. Do dzieła.

### Wyszukiwanie binarne

Wyszukiwanie tego typu polega na zawężaniu obszaru poszukiwań poprzez jego podział
na połowy. **Zbiór musi być uporządkowany rosnąco**. W przypadku gdy nie trafimy 
w szukany element zbiory w zależności od tego czy szukana wartość jest mniejsza 
czy też większa od wartości środkowej wartość ta jest brana za początek bądź 
koniec nowego obszaru poszukiwań. Algorytm kończy się gdy krańce obszaru 
poszukiwań są sobie równe. Pod koniec algorytmu wiemy czy poszukiwana wartość 
znajduje się w zbiorze czy też jej tam nie ma. Poniżej przedstawiam implementację 
dla opisanego na wstępie problemu w DDF:

(Przykład)[https://gist.github.com/maciejlew/74db81244ff491dde85d]

Wstępne uporządkowanie zapewnia nam implementacja klasy DoseComplexParameters.
**Algorytm umieszczony jest w metodzie *calculateDose***. Zaczynamy od ustawienia
krańców przedziału x1 i x2. Zostają one ustawione na pierwszy i ostatni indeks
zbioru wag. Następnie w pętli obliczamy środek zbioru. Korzystamy tu z zaokrąglenia
w dół ponieważ ilość elementów w zbiorze może nie być parzysta. Następnie w 
zależności od tego czy szukana waga jest mniejsza czy też większa od znalezionej
modyfikujemy krańce przedziałów. Należy tu zwrócić uwagę na **+1**. Po wyjściu z
pętli jeśli pod indeksem wskazywanym przez ostatni badany element w zbiorze znajduje
się szukana waga to odpowiadająca jej wartość dawki wpisywana jest do obiektu dawki.
W przeciwnym wypadku dawka to zero.

### Interpolacja liniowa

Pokazany wcześniej algorytm działa, ale w przypadku gdy waga nie występuje na 
liście zwracane są zera. Nie jest to to czego oczekiwałby użytkownik aplikacji.
Dodamy więc wspomnianą we wstępie interpolację liniową. Jest to najprostszy 
rodzaj interpolacji wielomianowej. Wyznaczymy funkcję interpolacyjną, obliczając
parametry **a** i **b** z dwóch punktów najbliższych szukanej wadze.

(Przykład)[https://gist.github.com/maciejlew/076a91fe3bfa698f2aef]

Dodaliśmy zmienną przechowującą współrzędną iks najbliższego punktu po lewej.
Zmieniliśmy także blok alternatywy w przypadku gdy nie dało się odnaleźć wagi w
zbiorze. Tym razem nie zwracamy już zera a wartość interpolowaną przy pomocy 
funkcji liniowej.

Przedstawiony kod można zobaczyć także w repozytorium aplikacji konkursowej
[Drug Dose Framework](https://github.com/maciejlew/drug-dose-framework).

