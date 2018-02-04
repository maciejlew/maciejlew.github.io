---
layout: post
title: "Wpływ wstępnej filtracji na segmentację wododziałową"
date: '2016-08-06 15:50:00'
description: 'Wyniki i wnioski dotyczące wpływu wstępnej filtracji obrazu na jego segmentację wododziałową'
keywords: grafika komputerowa, przekształcenia obrazu, przekształcenia morfologiczne, przekształcenia kontekstowe, przekształcenia rozmyte, logika rozmyta, translacja, erozja, dylacja, otwarcie, zamknięcie, black top hat, white top hat, gradient morfologiczny, filtr medianowy, segmentacja wododziałowa, opencv, filtracja obrazu
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

W trzecim, a zarazem ostatnim, wpisie z cyklu związanego z moimi badaniami wpływu
wstępnej filtracji obrazu na jego segmentację przedstawię wyniki jakie udało się
mi zaobserwować i płynące z nich wnioski.

### Badanie wpływu wstępnej filtracji obrazu na ilość segmentów po segmentacji

W części badawczej pracy postanowiono przeprowadzić analizę wpływu zastosowanych 
wstępnych filtrów na ilość segmentów na obrazie po segmentacji wododziałowej. 
Przebadano następujące filtry:

 * erozja, parametrem jest ilość iteracji
 * dylacja, parametrem jest ilość iteracji
 * otwarcie, parametrem jest ilość iteracji erozji i dylacji, oraz rozmiar elementu strukturalnego
 * zamknięcie, parametrem jest ilość iteracji erozji i dylacji, oraz rozmiar elementu strukturalnego
 * otwarcie i zamknięcie, parametrem jest ilość iteracji erozji i dylacji, oraz rozmiar elementu strukturalnego
 * filtr medianowy, parametrem jest rozmiar okna
 * filtr rozmyty, parametrem jest próg podobieństwa

Ponadto powtórzono badania dla obrazu po zastosowaniu wyrównania histogramu.

Badania przeprowadzono na [obrazie RTG przedstawiającym dysplazję w postaci 
torbieli okołowierzchołkowej][1].

Badania rozpoczęto od wykonania segmentacji na obrazie nie poddawanym wcześniej 
żadnym filtracjom, rysunek 1. W tym przypadku na obrazie 
zliczono **30919** segmentów. Sprawdzono także wpływ samego wyrównania histogramu 
na ilość segmentów, w wyniku otrzymano obraz z **30196** segmentami.

<figure>
    <img src="/assets/img/gkiro/badania/bez_filtracji.jpg" 
        alt="Wynik segmentacji obrazu bez wstępnej filtracji">
    <figcaption>
        Rysunek 1: Wynik segmentacji obrazu bez wstępnej filtracji
    </figcaption>
</figure>

#### Podstawowe przekształcenia morfologiczne - erozja i dylacja

Badania postanowiono rozpocząć od sprawdzenia wpływu podstawowych filtrów 
morfologicznych - erozji i dylacji - na ilość segmentów w obrazie po segmentacji 
wododziałowej. Przyjęto kształt elementu strukturalnego jako kwadrat o boku 
równym 3, z punktem odniesienia ustawionym pośrodku. Jako parametr postanowiono 
przyjąć ilość wywołań filtru na obrazie wejściowym. Wyniki przedstawiono w 
tabelach 1, 2, 3, 4. Graficzną interpretację wyników pokazano na rysunku 2. Na 
wykresie można zauważyć, że zarówno w przypadku zastosowania erozji jak i dylacji, 
uzyskano ponad dwukrotne zmniejszenie ilości segmentów już przy pierwszej iteracji. 
Ilość segmentów spada wraz z kolejnymi iteracjami w podobnym tempie dla erozji i 
dylacji. Wyrównanie histogramu przynosi zawsze jedynie niewielki spadek ilości 
segmentów. Oba filtry, wraz z kolejnymi iteracjami powodują coraz większe zmiany 
w kształcie wyodrębnianych segmentów. Jest to zwłaszcza widoczne na granicy 
pomiędzy obserwowaną zmianą chorobową, której kolor jest ciemny, a korzeniem 
zęba przy którym zmiana się ta znajduje, który jest jasny. W przypadku dylacji 
jasne segmenty w obrębie korzenia poszerzają się nachodząc na obszar pierwotnie 
rozpoznawany jako lezja. Jest to spowodowane tym, że dylacja działa jak filtr 
maksymalny. W przypadku erozji obserwowany efekt jest odwrotny, segmenty mające 
reprezentować korzeń zostają zmniejszone, a w ich miejsce narastają segmenty 
reprezentujące lezje. Dzieje się tak ponieważ erozja działa jak filtr minimalny. 
Uzyskane wyniki badań wskazują, że w przypadku dylacji liczba segmentów jest 
mniejsza niż przy tej samej ilości iteracji dla erozji. Dzieje się tak, ponieważ 
w przypadku dylacji dochodzi do złączenia regionów o podobnych poziomach szarości, 
pomiędzy którymi występowały niewielkie regiony o odcieniach szarości mniejszych. 

<table>
    <caption>
        Tabela 1: Erozja - ilość segmentów w zależności od ilości iteracji, bez 
        wyrównania histogramu
    </caption>
    <colgroup>
        <col style="width: 20%">
        <col style="width: 10%">
    </colgroup>
    <thead>
        <tr>
            <th colspan="2" rowspan="2"></th>
            <th colspan="3">Ilość iteracji</th>
        </tr>
        <tr>
            <th>1</th>
            <th>2</th>
            <th>3</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th rowspan="1">Rozmiar elementu strukturalnego</th>
            <th>3x3</th>
            <td>11313</td>
            <td>6294</td>
            <td>4070</td>
        </tr>
    </tbody>
</table>

<table>
    <caption>
        Tabela 2: Erozja - ilość segmentów w zależności od ilości iteracji, z 
        wyrównaniem histogramu
    </caption>
    <colgroup>
        <col style="width: 20%">
        <col style="width: 10%">
    </colgroup>
    <thead>
        <tr>
            <td colspan="2" rowspan="2"></td>
            <th colspan="3">Ilość iteracji</th>
        </tr>
        <tr>
            <th>1</th>
            <th>2</th>
            <th>3</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th rowspan="1">Rozmiar elementu strukturalnego</th>
            <th>3x3</th>
            <td>10957</td>
            <td>6042</td>
            <td>3911</td>
        </tr>
    </tbody>
</table>

<table>
    <caption>
        Tabela 3: Dylacja - ilość segmentów w zależności od ilości iteracji, bez 
        wyrównania histogramu
    </caption>
    <colgroup>
        <col style="width: 20%">
        <col style="width: 10%">
    </colgroup>
    <thead>
        <tr>
            <td colspan="2" rowspan="2"></td>
            <th colspan="3">Ilość iteracji</th>
        </tr>
        <tr>
            <th>1</th>
            <th>2</th>
            <th>3</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th rowspan="1">Rozmiar elementu strukturalnego</th>
            <th>3x3</th>
            <td>13238</td>
            <td>7900</td>
            <td>5150</td>
        </tr>
    </tbody>
</table>

<table>
    <caption>
        Tabela 4: Dylacja - ilość segmentów w zależności od ilości iteracji, z 
        wyrównaniem histogramu
    </caption>
    <colgroup>
        <col style="width: 20%">
        <col style="width: 10%">
    </colgroup>
    <thead>
        <tr>
            <td colspan="2" rowspan="2"></td>
            <th colspan="3">Ilość iteracji</th>
        </tr>
        <tr>
            <th>1</th>
            <th>2</th>
            <th>3</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th rowspan="1">Rozmiar elementu strukturalnego</th>
            <th>3x3</th>
            <td>12827</td>
            <td>7644</td>
            <td>4929</td>
        </tr>
    </tbody>
</table>

<figure>
    <img src="/assets/img/gkiro/badania/badania_podstawowe_filtry_morfologiczne.png" 
        alt="Podstawowe przekształcenia morfologiczne - erozja i dylacja - zależność ilości segmentów od ilości iteracji">
    <figcaption>
        Rysunek 2: Podstawowe przekształcenia morfologiczne - erozja i dylacja - 
        zależność ilości segmentów od ilości iteracji
    </figcaption>
</figure>

#### Złożone przekształcenia morfologiczne - otwarcie i zamknięcie

Kolejnym krokiem po przebadaniu podstawowych filtrów morfologicznych była analiza 
skutków połączenia tych filtrów w bardziej złożone algorytmy. Przeprowadzono 
badania dla otwarcia, zamknięcia oraz połączenia tych filtrów.

<table>
    <caption>
        Tabela 5: Otwarcie - ilość segmentów w zależności od ilości iteracji i 
        rozmiaru elementu strukturalnego, bez wyrównania histogramu
    </caption>
    <colgroup>
        <col style="width: 20%">
        <col style="width: 10%">
    </colgroup>
    <thead>
        <tr>
            <td colspan="2" rowspan="2"></td>
            <th colspan="3">Ilość iteracji</th>
        </tr>
        <tr>
            <th>1</th>
            <th>2</th>
            <th>3</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th rowspan="2">Rozmiar elementu strukturalnego</th>
            <th>3x3</th>
            <td>14569</td>
            <td>8616</td>
            <td>5693</td>
        </tr>
        <tr>
            <th>5x5</th>
            <td>8616</td>
            <td>4025</td>
            <td>2380</td>
        </tr>
    </tbody>
</table>

<table>
    <caption>
        Tabela 6: Otwarcie - ilość segmentów w zależności od ilości iteracji i 
        rozmiaru elementu strukturalnego, z wyrównaniem histogramu
    </caption>
    <colgroup>
        <col span="1" style="width: 20%">
    </colgroup>
    <thead>
        <tr>
            <td colspan="2" rowspan="2"></td>
            <th colspan="3">Ilość iteracji</th>
        </tr>
        <tr>
            <th>1</th>
            <th>2</th>
            <th>3</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th rowspan="2">Rozmiar elementu strukturalnego</th>
            <th>3x3</th>
            <td>14102</td>
            <td>8310</td>
            <td>5477</td>
        </tr>
        <tr>
            <th>5x5</th>
            <td>8300</td>
            <td>3843</td>
            <td>2222</td>
        </tr>
    </tbody>
</table>

<figure>
    <img src="/assets/img/gkiro/badania/badania_otwarcie.png" 
        alt="Złożone przekształcenia morfologiczne - otwarcie - zależność ilości segmentów od ilości iteracji">
    <figcaption>
        Rysunek 3: Złożone przekształcenia morfologiczne - otwarcie - zależność 
        ilości segmentów od ilości iteracji
    </figcaption>
</figure>

W tabelach 5 i 6 zawarto wartości ilości zliczonych segmentów po zastosowaniu 
operacji otwarcia morfologicznego. Na rysunku 3 pokazano te wyniki w postaci 
wykresu. Można zauważyć, że dla otwarcia z elementem strukturalnym o rozmiarze 
3x3, wyniki są porównywalne do wyników otrzymanych dla podstawowych filtrów 
morfologicznych, gdzie zastosowano element strukturalny o tym samym rozmiarze. 
Po zmianie rozmiaru elementu strukturalnego na 5x5, zauważono dwukrotny spadek 
ilości segmentów na obrazie wyjściowym. W przypadku otwarcia problem zmiany 
kształtu segmentów granicznych pomiędzy lezją a jej otoczeniem, nie jest tak 
duży jak w przypadku podstawowych filtrów morfologicznych, zwłaszcza dla elementu 
strukturalnego 3x3 i pierwszej iteracji elementem 5x5. Spowodowane jest to tym, 
że operacja otwarcie jest złożeniem operacji erozji i dylacji. Operacja otwarcia 
powoduje usunięcie niewielkich ciemniejszych obszarów z otoczenia większych 
jasnych obszarów. 

<table>
    <caption>
        Tabela 7: Zamknięcie - ilość segmentów w zależności od ilości iteracji i 
        rozmiaru elementu strukturalnego, bez wyrównania histogramu
    </caption>
    <colgroup>
        <col style="width: 20%">
        <col style="width: 10%">
    </colgroup>
    <thead>
        <tr>
            <td colspan="2" rowspan="2"></td>
            <th colspan="3">Ilość iteracji</th>
        </tr>
        <tr>
            <th>1</th>
            <th>2</th>
            <th>3</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th rowspan="2">Rozmiar elementu strukturalnego</th>
            <th>3x3</th>
            <td>10463</td>
            <td>5892</td>
            <td>3846</td>
        </tr>
        <tr>
            <th>5x5</th>
            <td>5892</td>
            <td>2698</td>
            <td>1654</td>
        </tr>
    </tbody>
</table>

<table>
    <caption>
        Tabela 8: Zamknięcie - ilość segmentów w zależności od ilości iteracji i 
        rozmiaru elementu strukturalnego, z wyrównaniem histogramu
    </caption>
    <colgroup>
        <col style="width: 20%">
        <col style="width: 10%">
    </colgroup>
    <thead>
        <tr>
            <td colspan="2" rowspan="2"></td>
            <th colspan="3">Ilość iteracji</th>
        </tr>
        <tr>
            <th>1</th>
            <th>2</th>
            <th>3</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th rowspan="2">Rozmiar elementu strukturalnego</th>
            <th>3x3</th>
            <td>10105</td>
            <td>5687</td>
            <td>3729</td>
        </tr>
        <tr>
            <th>5x5</th>
            <td>5715</td>
            <td>2590</td>
            <td>1578</td>
        </tr>
    </tbody>
</table>

<figure>
    <img src="/assets/img/gkiro/badania/badania_zamkniecie.png" 
        alt="Złożone przekształcenia morfologiczne - zamknięcie - zależność ilości segmentów od ilości iteracji">
    <figcaption>
        Rysunek 4: Złożone przekształcenia morfologiczne - zamknięcie - zależność 
        ilości segmentów od ilości iteracji
    </figcaption>
</figure>

W tabelach 7 i 8 zawarto wartości ilości zliczonych segmentów po zastosowaniu 
operacji zamknięcia morfologicznego. Na rysunku 4 pokazano te wyniki w postaci 
wykresu. Można zauważyć, że ilość segmentów jest mniejsza od ilości otrzymanej 
w wyniku zastosowania otwarcia. Również w tym przypadku problem zmiany kształtu 
segmentów granicznych został ograniczony. Spowodowane to jest także tym, że 
operacja zamknięcia jest złożeniem erozji i dylacji, jednak w odwrotnej 
kolejności wykonywania tych operacji składowych. Segmentów jest mniej ponieważ 
najpierw wykonywana jest dylacja, która sama daje już mniejszą ilość segmentów 
niż erozja, a następnie na obrazie pośrednim wykonywana jest erozja. 

<table>
    <caption>
        Tabela 9: Otwarcie + zamknięcie - ilość segmentów w zależności od ilości 
        iteracji i rozmiaru elementu strukturalnego, bez wyrównania histogramu
    </caption>
    <colgroup>
        <col style="width: 20%">
        <col style="width: 10%">
    </colgroup>
    <thead>
        <tr>
            <td colspan="2" rowspan="2"></td>
            <th colspan="3">Ilość iteracji</th>
        </tr>
        <tr>
            <th>1</th>
            <th>2</th>
            <th>3</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th rowspan="2">Rozmiar elementu strukturalnego</th>
            <th>3x3</th>
            <td>6542</td>
            <td>3179</td>
            <td>1879</td>
        </tr>
        <tr>
            <th>5x5</th>
            <td>3179</td>
            <td>1259</td>
            <td>709</td>
        </tr>
    </tbody>
</table>

<table>
    <caption>
        Tabela 10: Otwarcie + zamknięcie - ilość segmentów w zależności od ilości 
        iteracji i rozmiaru elementu strukturalnego, z wyrównaniem histogramu
    </caption>
    <colgroup>
        <col style="width: 20%">
        <col style="width: 10%">
    </colgroup>
    <thead>
        <tr>
            <td colspan="2" rowspan="2"></td>
            <th colspan="3">Ilość iteracji</th>
        </tr>
        <tr>
            <th>1</th>
            <th>2</th>
            <th>3</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th rowspan="2">Rozmiar elementu strukturalnego</th>
            <th>3x3</th>
            <td>6350</td>
            <td>3070</td>
            <td>1813</td>
        </tr>
        <tr>
            <th>5x5</th>
            <td>3070</td>
            <td>1211</td>
            <td>676</td>
        </tr>
    </tbody>
</table>

<figure>
    <img src="/assets/img/gkiro/badania/badania_otwarcie_zamkniecie.png" 
        alt="Złożone przekształcenia morfologiczne - otwarcie i zamknięcie - zależność ilości segmentów od ilości iteracji">
    <figcaption>
        Rysunek 5: Złożone przekształcenia morfologiczne - otwarcie i zamknięcie 
        - zależność ilości segmentów od ilości iteracji
    </figcaption>
</figure>

Postanowiono także przetestować działanie złożenia operacji otwarcia i zamknięcia. 
Wyniki testów umieszczono w tabelach 9 i 10, a ich wizualizację pokazano na 
rysunku 5. Uzyskano jeszcze większe ograniczenie ilości segmentów. Zastosowanie 
elementu strukturalnego 5x5 powoduje powstanie dużych segmentów i utratę 
informacji o kształcie torbieli. Podobne wyniki uzyskuje się dla elementu 
strukturalnego 3x3 przy dużej ilości iteracji. Jedynie po jednokrotnym 
zastosowaniu tego filtru otrzymane wyniki zachowują rozpoznawany kształt torbieli 
i korzenia.

#### Filtr medianowy

Ze zbioru uśredniających filtrów kontekstowych wybrano filtr medianowy. W tabelach
11 i 12 pokazano wyniki, a ich reprezentację graficzną umieszczono na rysunku 6. 
Można zauważyć, że otrzymane wielkości są porównywalne do wartości otrzymanych 
poprzednio dla złożonych filtrów morfologicznych. Wraz z zwiększaniem ilości 
iteracji, zachowując ten sam rozmiar okna otrzymuje się coraz mniej segmentów. 
Różnice te są jednak coraz mniejsze. Zwiększanie wielkości okna powoduje 
zmniejszenie ilości segmentów przy tej samej ilości iteracji. W tym przypadku 
także zwiększanie okna powoduje coraz mniejsze różnice w wynikach. W przypadku 
filtru medianowego problem zmiany kształtu segmentów granicznych nie jest 
widoczny nawet na obrazach poddanych wielu iteracjom, także tym gdzie rozmiar 
okna był większy. Granica pomiędzy torbielą, a korzeniem jest dobrze zaznaczona, 
wyostrzyła się. Na rysunku 7 pokazano wynik segmentacji obrazu po wstępnej 
filtracji filtrem medianowym o oknie 3x3, pięcioma iteracjami.

<table>
    <caption>
        Tabela 11: Filtr medianowy - ilość segmentów w zależności od ilości 
        iteracji i rozmiaru okna, bez wyrównania histogramu
    </caption>
    <colgroup>
        <col style="width: 20%">
        <col style="width: 10%">
    </colgroup>
    <thead>
        <tr>
            <td colspan="2" rowspan="2"></td>
            <th colspan="5">Ilość iteracji</th>
        </tr>
        <tr>
            <th>1</th>
            <th>2</th>
            <th>3</th>
            <th>4</th>
            <th>5</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th rowspan="3">Rozmiar elementu strukturalnego</th>
            <th>3x3</th>
            <td>12215</td>
            <td>8484</td>
            <td>7515</td>
            <td>6947</td>
            <td>6664</td>
        </tr>
        <tr>
            <th>5x5</th>
            <td>7655</td>
            <td>4752</td>
            <td>4036</td>
            <td>3551</td>
            <td>3303</td>
        </tr>
        <tr>
            <th>7x7</th>
            <td>5740</td>
            <td>3440</td>
            <td>2830</td>
            <td>2510</td>
            <td>2283</td>
        </tr>
    </tbody>
</table>

<table>
    <caption>
        Tabela 12: Filtr medianowy - ilość segmentów w zależności od ilości 
        iteracji i rozmiaru okna, z wyrównaniem histogramu
    </caption>
    <colgroup>
        <col style="width: 20%">
        <col style="width: 10%">
    </colgroup>
    <thead>
        <tr>
            <td colspan="2" rowspan="2"></td>
            <th colspan="5">Ilość iteracji</th>
        </tr>
        <tr>
            <th>1</th>
            <th>2</th>
            <th>3</th>
            <th>4</th>
            <th>5</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th rowspan="3">Rozmiar elementu strukturalnego</th>
            <th>3x3</th>
            <td>11784</td>
            <td>8202</td>
            <td>7241</td>
            <td>6727</td>
            <td>6449</td>
        </tr>
        <tr>
            <th>5x5</th>
            <td>7420</td>
            <td>4665</td>
            <td>3922</td>
            <td>3462</td>
            <td>3213</td>
        </tr>
        <tr>
            <th>7x7</th>
            <td>5621</td>
            <td>3327</td>
            <td>2766</td>
            <td>2427</td>
            <td>2187</td>
        </tr>
    </tbody>
</table>

<figure>
    <img src="/assets/img/gkiro/badania/badania_mediana.png" 
        alt="Filtr medianowy - zależność ilości segmentów od ilości iteracji">
    <figcaption>
        Rysunek 6: Filtr medianowy - zależność ilości segmentów od ilości iteracji
    </figcaption>
</figure>

<figure>
    <img src="/assets/img/gkiro/badania/filtr_medianowy_w3x3_x5.jpg" 
        alt="Wynik segmentacji obrazu po wstępnej filtracji filtrem medianowym o oknie 3x3, pięcioma iteracjami">
    <figcaption>
        Rysunek 7: Wynik segmentacji obrazu po wstępnej filtracji filtrem 
        medianowym o oknie 3x3, pięcioma iteracjami
    </figcaption>
</figure>

#### Filtr rozmyty

Ostatnim testowanym filtrem był filtr rozmyty zaimplementowany według opisu 
umieszczonego we [wpisie wprowadzającym][2]. Otrzymane wyniki pokazano w tabelach
13 i 14 oraz na rysunku 8. Parametrem dla którego badano wpływ jego zmian na 
ilość segmentów był próg podobieństwa, czyli wartość różnicy pomiędzy wartościami 
dwóch sąsiadujących pikseli po przekroczeniu której para ta była uznawana za 
niepodobną. Ponieważ wynik działania filtru ma charakter losowy, dla każdej 
wartości progu podobieństwa przeprowadzono pięć prób, po czym obliczono średnie 
wartości oraz rozrzut wokół wartości średniej. Okazało się, że filtr 
charakteryzuje się dużą stabilnością otrzymywanych wyników. Z otrzymanego wykresu 
wynika, że najmniej segmentów otrzymuje się dla wartości progu podobieństwa 
mieszczących się pomiędzy 5 a 10. Dla wartości mniejszych ilość segmentów jest 
największa, a dla wartości większych rośnie i stabilizuje się. Otrzymane minimalne 
wartości są trzy razy mniejsze niż w przypadku braku filtracji. Podobnie jak w 
przypadku filtru medianowego, nie występuje problem zmiany kształtu granic 
oddzielających torbiel od otoczenia. Na rysunku 9 pokazano wynik segmentacji 
obrazu po wstępnej filtracji filtrem rozmytym z progiem podobieństwa 8px.

<table>
    <caption>
        Tabela 13: Filtr rozmyty - ilość segmentów w zależności od progu 
        podobieństwa i próby, bez wyrównania histogramu
    </caption>
    <colgroup>
        <col style="width: 20%">
        <col style="width: 10%">
    </colgroup>
    <thead>
        <tr>
            <td colspan="2" rowspan="2"></td>
            <th colspan="7">Próg podobieństwa</th>
        </tr>
        <tr>
            <th>2</th>
            <th>5</th>
            <th>8</th>
            <th>10</th>
            <th>20</th>
            <th>30</th>
            <th>40</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th rowspan="5">Próba</th>
            <th>1</th>
            <td>9894</td>
            <td>10089</td>
            <td>9747</td>
            <td>9865</td>
            <td>9974</td>
            <td>9944</td>
            <td>9967</td>
        </tr>
        <tr>
            <th>2</th>
            <td>9858</td>
            <td>10101</td>
            <td>9782</td>
            <td>9893</td>
            <td>9939</td>
            <td>9967</td>
            <td>9945</td>
        </tr>
        <tr>
            <th>3</th>
            <td>9881</td>
            <td>10137</td>
            <td>9784</td>
            <td>9886</td>
            <td>9956</td>
            <td>9976</td>
            <td>9955</td>
        </tr>
        <tr>
            <th>4</th>
            <td>9880</td>
            <td>10071</td>
            <td>9808</td>
            <td>9860</td>
            <td>10001</td>
            <td>9973</td>
            <td>9943</td>
        </tr>
        <tr>
            <th>5</th>
            <td>9983</td>
            <td>10051</td>
            <td>9772</td>
            <td>9830</td>
            <td>9951</td>
            <td>9986</td>
            <td>9959</td>
        </tr>
        <tr>
            <th colspan="2">Średnia</th>
            <td>9899,2</td>
            <td>10089,8</td>
            <td>9778,6</td>
            <td>9866,8</td>
            <td>9964,2</td>
            <td>9969,2</td>
            <td>9953,8</td>
        </tr>
        <tr>
            <th colspan="2">Odchylenie standardowe</th>
            <td>48,60</td>
            <td>32,45</td>
            <td>22,06</td>
            <td>24,79</td>
            <td>24,12</td>
            <td>15,67</td>
            <td>9,96</td>
        </tr>
    </tbody>
</table>

<table>
    <caption>
        Tabela 14: Filtr rozmyty - ilość segmentów w zależności od progu 
        podobieństwa i próby, z wyrównaniem histogramu
    </caption>
    <colgroup>
        <col style="width: 20%">
        <col style="width: 10%">
    </colgroup>
    <thead>
        <tr>
            <td colspan="2" rowspan="2"></td>
            <th colspan="7">Próg podobieństwa</th>
        </tr>
        <tr>
            <th>2</th>
            <th>5</th>
            <th>8</th>
            <th>10</th>
            <th>20</th>
            <th>30</th>
            <th>40</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th rowspan="5">Próba</th>
            <th>1</th>
            <td>10457</td>
            <td>10072</td>
            <td>10060</td>
            <td>10067</td>
            <td>10294</td>
            <td>10199</td>
            <td>10238</td>
        </tr>
        <tr>
            <th>2</th>
            <td>10527</td>
            <td>10103</td>
            <td>10043</td>
            <td>10046</td>
            <td>10229</td>
            <td>10216</td>
            <td>10192</td>
        </tr>
        <tr>
            <th>3</th>
            <td>10595</td>
            <td>10107</td>
            <td>10016</td>
            <td>10000</td>
            <td>10165</td>
            <td>10212</td>
            <td>10187</td>
        </tr>
        <tr>
            <th>4</th>
            <td>10503</td>
            <td>10091</td>
            <td>10024</td>
            <td>10028</td>
            <td>10231</td>
            <td>10213</td>
            <td>10187</td>
        </tr>
        <tr>
            <th>5</th>
            <td>10518</td>
            <td>10120</td>
            <td>10013</td>
            <td>10002</td>
            <td>10246</td>
            <td>10218</td>
            <td>10197</td>
        </tr>
        <tr>
            <th colspan="2">Średnia</th>
            <td>10520,0</td>
            <td>10098,6</td>
            <td>10031,2</td>
            <td>10028,6</td>
            <td>10233,0</td>
            <td>10211,6</td>
            <td>10200,2</td>
        </tr>
        <tr>
            <th colspan="2">Odchylenie standardowe</th>
            <td>49,84</td>
            <td>18,12</td>
            <td>19,89</td>
            <td>28,74</td>
            <td>46,19</td>
            <td>7,44</td>
            <td>21,53</td>
        </tr>
    </tbody>
</table>

<figure>
    <img src="/assets/img/gkiro/badania/badania_fuzzy.png" 
        alt="Filtr rozmyty - zależność ilości segmentów od ilości iteracji">
    <figcaption>
        Rysunek 8: Filtr rozmyty - zależność ilości segmentów od ilości iteracji
    </figcaption>
</figure>

<figure>
    <img src="/assets/img/gkiro/badania/filtr_rozmyty_t8.jpg" 
        alt="Wynik segmentacji obrazu po filtracji filtrem rozmytym z progiem podobieństwa 8px">
    <figcaption>
        Rysunek 9: Wynik segmentacji obrazu po filtracji filtrem rozmytym z 
        progiem podobieństwa 8px
    </figcaption>
</figure>

### Badanie wpływu wstępnej filtracji obrazu na czas wykonania procesu segmentacji

Postanowiono zbadać czas wykonania procesu dla dwóch wybranych najlepszymi filtrów 
- filtru medianowego z oknem 3x3 i pięcioma iteracjami oraz dla filtru rozmytego 
z progiem podobieństwa ustawionym na 10 pikseli. Oba filtry zostały poprzedzone 
wyrównaniem histogramu. Postanowiono przeprowadzić po pięć prób dla każdego z 
filtrów. Badania przeprowadzono na tym samym [obrazie testowym który zastosowano 
w poprzednich badaniach][1]. Badania przeprowadzono na komputerze wyposażonym w 
procesor Athlon II X2 250 i 4GB pamięci RAM.

#### Filtr medianowy - czas wykonania procesu

W tabeli 15 umieszczono czasy wykonani poszczególnych operacji składających się 
na proces segmentacji, tj.: wstępnej filtracji, segmentacji oraz oznaczania 
segmentów. Operację oznaczania segmentów sprawdzono dla dwóch zaproponowanych 
algorytmów, *SegmentMarkerBasic* - powolnego algorytmu polegającego na złączaniu 
segmentów, *SegmentMarkerFlooding* - szybkiego algorytmu polegającego na 
sprawdzaniu pikseli sąsiadujących w pierwszej kolejności, algorytmy te zostaną 
opisane w kolejnych wpisach. W tabeli tej podano także całkowity czas wykonania 
procesu. W wyniku, dla obrazu testowego, otrzymano średni całkowity czas równy 
182,33 sekund w przypadku zastosowania algorytmu *SegmentMarkerBasic* oraz 1,32 
sekundy w przypadku zastosowania algorytmu *SegmentMarkerFlooding*. Operacja 
wykonania filtru medianowego na obrazie miała najmniejszy wpłyn na czas całkowity, 
podobnie operacja segmentacji wododziałowej. Operacja oznaczania segmentów, w 
przypadku wybrania wolniejszego algorytmu ma największy wpływ na całkowity czas 
procesu.

<table>
    <caption>
        Tabela 15: Filtr medianowy - czas wykonania procesu segmentacji
    </caption>
    <colgroup>
        <col style="width: 20%">
        <col style="width: 10%">
    </colgroup>
    <thead>
        <tr>
            <td colspan="2" rowspan="2"></td>
            <th colspan="6">Czas [s]</th>
        </tr>
        <tr>
            <th>filtracja</th>
            <th>segmentacja</th>
            <th>oznaczanie segmentów (basic)</th>
            <th>oznaczanie segmentów (flooding)</th>
            <th>razem (basic)</th>
            <th>razem (flooding)</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th rowspan="5">Próba</th>
            <th>1</th>
            <td>0,00</td>
            <td>1,00</td>
            <td>172,88</td>
            <td>0,32</td>
            <td>173,88</td>
            <td>1,32</td>
        </tr>
        <tr>
            <th>2</th>
            <td>0,00</td>
            <td>1,00</td>
            <td>166,60</td>
            <td>0,39</td>
            <td>167,60</td>
            <td>1,39</td>
        </tr>
        <tr>
            <th>3</th>
            <td>0,00</td>
            <td>1,00</td>
            <td>198,29</td>
            <td>0,44</td>
            <td>199,29</td>
            <td>1,44</td>
        </tr>
        <tr>
            <th>4</th>
            <td>0,00</td>
            <td>2,00</td>
            <td>199,82</td>
            <td>0,42</td>
            <td>201,82</td>
            <td>2,42</td>
        </tr>
        <tr>
            <th>5</th>
            <td>0,00</td>
            <td>1,00</td>
            <td>168,05</td>
            <td>0,30</td>
            <td>169,05</td>
            <td>1,30</td>
        </tr>
        <tr>
            <th colspan="2">Średnia</th>
            <td>0,00</td>
            <td>1,20</td>
            <td>181,13</td>
            <td>0,37</td>
            <td>182,33</td>
            <td>1,57</td>
        </tr>
        <tr>
            <th colspan="2">Odchylenie standardowe</th>
            <td>0,00</td>
            <td>0,45</td>
            <td>16,54</td>
            <td>0,06</td>
            <td>16,82</td>
            <td>0,48</td>
        </tr>
    </tbody>
</table>

#### Filtr rozmyty - czas wykonania procesu

W tabeli 16 umieszczono zmierzone czasy poszczególnych składowych procesu w 
przypadku zastosowania filtru rozmytego. Składowe procesu są takie same jak w 
przypadku filtru medianowego. Wyniki wskazują na wzrost znaczenia czasy potrzebnego 
na filtrację obrazu w całym procesie. Średnio ten czas wynosi 24,40 sekund, co 
jest zauważalnym czasem, zwłaszcza przy zastosowaniu szybkiego algorytmu oznaczania 
segmentów. Jest to także duży wzrost w porównaniu do filtracji medianowej która 
wykonywana była niemal natychmiastowo. Średni czas całego procesu, w przypadku 
zastosowania algorytmu *SegmentMarkerBasic* wzrósł do 212,38 sekund, a w przypadku 
algorytmu *SegmentMarkerFlooding* czas ten wzrósł do 25,98 sekund.

<table>
    <caption>
        Tabela 16: Filtr rozmyty - czas wykonania procesu segmentacji
    </caption>
    <colgroup>
        <col style="width: 20%">
        <col style="width: 10%">
    </colgroup>
    <thead>
        <tr>
            <td colspan="2" rowspan="2"></td>
            <th colspan="6">Czas [s]</th>
        </tr>
        <tr>
            <th>filtracja</th>
            <th>segmentacja</th>
            <th>oznaczanie segmentów (basic)</th>
            <th>oznaczanie segmentów (flooding)</th>
            <th>razem (basic)</th>
            <th>razem (flooding)</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th rowspan="5">Próba</th>
            <th>1</th>
            <td>28,00</td>
            <td>1,00</td>
            <td>188,42</td>
            <td>0,47</td>
            <td>217,42</td>
            <td>29,47</td>
        </tr>
        <tr>
            <th>2</th>
            <td>22,00</td>
            <td>1,00</td>
            <td>180,15</td>
            <td>0,37</td>
            <td>203,15</td>
            <td>23,37</td>
        </tr>
        <tr>
            <th>3</th>
            <td>23,00</td>
            <td>1,00</td>
            <td>197,79</td>
            <td>0,37</td>
            <td>221,79</td>
            <td>24,37</td>
        </tr>
        <tr>
            <th>4</th>
            <td>23,00</td>
            <td>1,00</td>
            <td>168,58</td>
            <td>0,37</td>
            <td>192,58</td>
            <td>24,37</td>
        </tr>
        <tr>
            <th>5</th>
            <td>26,00</td>
            <td>2,00</td>
            <td>198,98</td>
            <td>0,34</td>
            <td>226,98</td>
            <td>28,34</td>
        </tr>
        <tr>
            <th colspan="2">Średnia</th>
            <td>24,40</td>
            <td>1,20</td>
            <td>186,78</td>
            <td>0,38</td>
            <td>212,38</td>
            <td>25,98</td>
        </tr>
        <tr>
            <th colspan="2">Odchylenie standardowe</th>
            <td>2,51</td>
            <td>0,45</td>
            <td>12,73</td>
            <td>0,05</td>
            <td>14,18</td>
            <td>2,73</td>
        </tr>
    </tbody>
</table>

### Wnioski

Przeprowadzono badania mające na celu wskazanie najlepszego, biorąc pod uwagę 
ilość i jakość otrzymanych segmentów, algorytmu przygotowującego zdjęcie do 
analizy. Wzięto pod uwagę podstawowe filtry morfologiczne, tj.: erozję i dylację, 
złożone filtry morfologiczne, tj.: otwarcie i zamknięcie oraz ich złożenie, 
filtr medianowy oraz filtr wykorzystujący logikę rozmytą. **W wyniku przeprowadzonych 
badań, okazało się że filtry morfologiczne z powodu zmiany kształtu otrzymywanych 
w następstwie ich użycia segmentów granicznych, czyli znajdujących się w miejscach 
o największych zmianach gradientu, nie powinny być wykorzystywane do wstępnej 
filtracji obrazu przed jego segmentacją. Otrzymano dobre wyniki dla filtru 
medianowego o oknie 3x3, dla każdej ze zbadanych ilości iteracji. Filtr ten nie 
powoduje także zmiany kształtu segmentów granicznych. Dobre wyniki przyniosło 
także zastosowanie zaimplementowanego algorytmu wykorzystującego logikę rozmytą**. 
Przeprowadzono badania polegające na znalezieniu optymalnej wartości progu 
podobieństwa, jednego z parametrów tego algorytmu, dla której ilość segmentów jest 
najmniejsza. Wyznaczono lokalne minimum dla tego parametru, wynoszące 10 pikseli. 
Oznacza to że dla mniejszej i większej wartości progu filtr ten działa gorzej 
nie odnajdując wszystkich zaszumionych pikseli co powoduje wzrost lokalnych 
minimów obrazu a co za tym idzie ilości segmentów.

Przeprowadzono także badania polegające na zmierzeniu czasu jaki potrzebny jest 
na przeprowadzenie całego procesu segmentacji dla dwóch filtrów: filtru rozmytego 
z progiem 10px oraz filtru medianowego z oknem 3x3 i pięcioma iteracjami. 
Otrzymane wyniki wskazują, że **filtr medianowy jest znacznie szybszy od 
zaimplementowanego filtru rozmytego**. Jest to spowodowane większą złożonością 
obliczeniową algorytmu rozmytego, a także tym że filtr medianowy pochodził z 
napisanej w C++ i zoptymalizowanej do tego celu biblioteki OpenCV.

Po przeprowadzeniu badań zdecydowano się zaimplementować w systemie obsługującym 
gabinet dentystyczny algorytm wykorzystujący filtr medianowy z oknem 3x3 i 
pięcioma iteracjami.

Podczas testów czasu wykonania procesu segmentacji pokazano że największe narzut 
generuje algorytm *SegmentMarkerBasic*. Z powodu mogącego się pojawić wyjątku 
generowanego przez alternatywny algorytm został on jednak wybrany i zaimplementowany 
w systemie obsługi gabinetu dentystycznego. 

Zamierzano napisać algorytm pozwalający na zautomatyzowanie procesu oznaczania na 
zdjęciach RTG patologicznych zmian okołowierzchołkowych zęba spowodowanych stanem 
zapalnym. **Napisano algorytm wykorzystujący oznaczone segmenty, ograniczający 
ingerencję użytkownika do wybrania segmentu znajdującego się wewnątrz takiej 
zmiany oraz drugiego poza nią. Algorytm ten wybiera kolejne segmenty biorąc pod 
uwagę średnie wartości pikseli we wskazanych segmentach.** Nie zawsze jednak wynik 
jego działania jest zgodny z oczekiwaniami. W związku z tym należałoby go 
rozbudować o algorytm działający w sposób adaptacyjny.

* * *

Treść tego wpisu zawiera fragmenty mojej pracy dyplomowej **"Badanie wpływu 
wstępnej filtracji na proces segmentacji w analizie patologicznych zmian w 
obrębie zębów widocznych na zdjęciach RTG"**.

* * *

Zobacz także:

 * [Przekształcenia morfologiczne, kontekstowe i rozmyte][2]
 * [EmguCVDemo - aplikacja testująca wpływ wybranych filtrów na wyniki segmentacji wododziałowej][3]

[1]: https://www.flickr.com/photos/bc_the_path/3234972460/
[2]: /2016/07/03/przeksztalcenia-morfologiczne-kontekstowe-i-rozmyte.html
[3]: /2016/07/24/emgucvdemo-aplikacja-testujaca-wplyw-wybranych-filtrow-na-wyniki-segmentacji-wododzialowej.html


