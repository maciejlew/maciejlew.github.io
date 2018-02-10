---
layout: post
title: "EmguCVDemo - aplikacja testująca wpływ wybranych filtrów na wyniki segmentacji wododziałowej"
date: '2016-07-24 15:10:00'
description: 'Opis aplikacja do testowania segmentacji wododziałowej'
keywords: grafika komputerowa, przekształcenia obrazu, przekształcenia morfologiczne, przekształcenia kontekstowe, przekształcenia rozmyte, logika rozmyta, translacja, erozja, dylacja, otwarcie, zamknięcie, black top hat, white top hat, gradient morfologiczny, filtr medianowy, segmentacja wododziałowa, opencv
tags:
- GKIRO
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

To już drugi post z cyklu badania wpływu wstępnej filtracji na jakość wyników
uzyskanych podczas segmentacji wododziałowej. W poprzednim wpisie mogłeś przeczytać
o [teorii kryjącej się za filtrami kontekstowymi, morfologicznymi i rozmytymi][1], 
będącymi przedmiotem badań. W tym wpisie przedstawię narzędzie pomocnicze
napisane przeze mnie w celu przeprowadzenia badań.


### Analiza obrazów - biblioteka EmguCV

EmguCV jest nakładką na OpenCV Open Computer Vision, pozwalającą na wykorzystywanie
tej biblioteki w środowisku Microsoft .NET Framework. OpenCV (Open Source Computer 
Vision) jest biblioteką zawierającą w sobie wiele (ponad 2500) algorytmów 
wykorzystywanych w grafice komputerowej. Oprogramowanie to jest rozwijane od 
1993 roku przez firmę Intel i od tego czasu pełni ważną rolę w badaniach i 
tworzeniu oprogramowania z zakresu wizji komputerowej. Biblioteka posiada 
interfejsy pozwalające na wykorzystanie jej w językach programowania takich jak 
C, C++, Python i Java. OpenCV działa w systemach MS Windows, Linux, Mac oraz 
Android. Wśród zaimplementowanych w bibliotece algorytmów można odleźć 
przekształcenia punktowe, kontekstowe, morfologiczne, algorytmy segmentacji, 
rozpoznawania obrazów. Biblioteka ta wykorzystywana jest m. in. w analizie obrazów 
na potrzeby bezpieczeństwa, w procesach medycznych, do identyfikacji oraz do 
sterowania robotami. Biblioteka OpenCV udostępniana jest na licencji BSD Berkeley 
Software Distribution License, natomiast EmguCV na licencji GNU GPL General 
Public License v3[[3](#opencv)].

### EmguCVDemo - specyfikacja zewnętrzna

W tym rozdziale przedstawiona zostanie aplikacja pomocnicza EmguCVDemo. Aplikacja 
ta została napisana w celu przygotowania środowiska dla testów przeprowadzanych 
w części badawczej pracy. Środowisko to zapewnia dostęp do algorytmów filtracji 
obrazu dostępnych w bibliotece EmguCV oraz do własnych implementacji wybranych 
algorytmów. Aplikacja może być wykorzystywana do testowania wpływu wybranych 
filtrów na obraz i jego późniejszą segmentację.

#### EmguCVDemo

<figure>
    <img src="/assets/img/gkiro/emgucvdemo.png" alt="EmguCVDemo - okno programu testowego">
    <figcaption>Rysunek 1: EmguCVDemo - okno programu testowego</figcaption>
</figure>

Na rysunku 1 pokazano główne okno aplikacji EmguCVDemo. Interfejs programu składa 
się z panelu, na którym wyświetlane są zdjęcia, jedno oryginalne - przed obróbką, 
drugie po zastosowaniu dostępnych operacji. Operacje dostępne w programie są za 
pomocą znajdujących się na formatce przycisków lub z poziomu paska zadań programu. 
Do sterowania parametrami niektórych operacji wykorzystuje się kontrolki 
znajdujące się w oknie programu w panelu po lewej stronie. Wśród wykorzystanych 
operacji pochodzących z biblioteki EmguCV można wymienić:

 * Przekształcenia morfologiczne:
   * Erozja
   * Dylacja
   * Otwarcie
   * Zamknięcie
   * White Top Hat
   * Black Top Hat
   * Gradient morfologiczny
 * Przekształcenia kontekstowe:
   * Wyrównanie histogramu
   * Filtr medianowy
 * Inne narzędzia:
   * Negacja obrazu
   * Reset obrazu
   * Powiększenie
   * Pomniejszenie
   * Reset rozmiaru

Wymienione operacje uzupełniono interfejsem do własnych implementacji następujących 
algorytmów:

 * Przekształcenia logiki rozmytej:
   * Fuzzy Noise Smoothing
 * Operacje związane z segmentacją:
   * Lokalne minima
   * Segmentacja wododziałowa
   * Liczenie segmentów

Parametry filtrów dostępne w programie pozwalają na sterowanie rozmiarem elementu 
strukturalnego filtrów morfologicznych, a także położeniem punktu odniesienia w 
jego wnętrzu. Możliwe jest także manipulowanie ilością iteracji.

Dostępna jest opcja zmiany algorytmu zliczania segmentów z podstawowego 
(*SegmentMarkerBasic*) na (*SegmentMarkerFlooding*).

Możliwe jest także sterowanie rozmiarem okna filtru medianowego.

Po przeprowadzeniu segmentacji możliwe jest oznaczenie na obrazie wyjściowym 
dwóch segmentów - wewnętrznego i zewnętrznego, po czym następuje wyszukiwanie 
przez algorytm segmentów pośrednich. Pokazano to na rysunku 1, obraz wejściowy 
poddano wstępnej filtracji, segmentacji a następnie zaznaczony czerwony segment 
wewnętrzny i zielony zewnętrzny. Granice segmentów pośrednich oznaczone zostały 
kolorem niebieskim.

Opcja *Liczenie segmentów* pozwala na oznaczenie segmentów i zliczenie ich liczby 
na obrazie. Po zakończonej operacji użytkownik otrzymuje podsumowanie z liczbą 
segmentów oraz czasem zliczania. Wykonanie tej operacji jest niezbędne, aby móc 
oznaczać segmenty na obrazie.

### Literatura

1. <a name="wyklady-gkiro">
        <strong><em>OpenCV Wiki</em>.</strong> http://opencv.willowgarage.com/wiki, 2013
    </a>

* * *

Treść tego wpisu zawiera fragmenty mojej pracy dyplomowej **"Badanie wpływu 
wstępnej filtracji na proces segmentacji w analizie patologicznych zmian w 
obrębie zębów widocznych na zdjęciach RTG"**.

* * *

Zobacz także:

 * [Przekształcenia morfologiczne, kontekstowe i rozmyte][1]
 * [Wpływ wstępnej filtracji na segmentację wododziałową][2]


[1]: /2016/07/03/przeksztalcenia-morfologiczne-kontekstowe-i-rozmyte.html
[2]: /2016/08/06/wplyw-wstepnej-filtracji-na-segmentacje-wododzialowa.html