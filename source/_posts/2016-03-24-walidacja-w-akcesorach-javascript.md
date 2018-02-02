---
layout: post
title: "Walidacja w akcesorach JavaScript"
date: "2016-03-24 19:20:00"
description: 'Przykład implementacji walidacji w akcesorach (setterach) w języku JavaScript'
keywords: daj się poznać 2016, konkurs programistyczny, aplikacja konkursowa, drug dose framework, aplikacja mobilna, pas pediatryczny, dawkowanie leków, yeoman, ionic framework, generator aplikacji, jasmine, bdd, testowanie aplikacji, wyjątki, akcesory, settery, gettery, javascript
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

Chciałbym poruszyć, dość banalny jak mogłoby się wydawać, temat jakim jest walidacja
w akcesorach, a konkretniej w setterach, w języku JavaScript.

### OOP w JS

JavaScript ewoluował. Z prostego języka skryptowego, mającego zastąpić aplety Java
w przeglądarkach, powstał język o szerokim zastosowaniu, o coraz lepiej określonych
standardach, wymagający od użytkownika specyficznego podejścia do OOP. Można 
w nim co prawda nadal pisać proste skrypty, nie ocierając się nawet o paradygmaty
programowania obiektowego, ale coraz większa ilość nowoczesnych bibliotek, coraz 
większa ilość programistów profesjonalnie podchodzących do jakości dostarczanego
softu powoduje że prędzej czy później spotykamy się w naszej karierze z kodem
napisanym w OOP. Z czasem sami chcemy taki kod wytwarzać. Jak wspomniałem 
wcześniej, JS ma specyficzne podejście do OOP. Dla osób piszących wcześniej w innych
obiektowych językach programowania może być ono trudne i czasami irracjonalne.
Często stajemy przed problemami które w naszym bazowym języku programowania 
rozwiązujemy od ręki, ale przeniesienie tego na kod JS sprawia wiele trudności.
Tak także może być w przypadku implementacji walidacji parametrów przekazywanych
do setterów naszych obiektów.

### Typowanie i walidacja w JS

JavaScript jest językiem słabo typowanym. Oznacza to że typ zmiennej może ulegać
zmianie podczas działania programu oraz że sam język nie pilnuje za nas czy to co
chcemy przypisać do zmiennej ma jakikolwiek sens z punktu widzenia naszej domeny.
To samo tyczy się pól w obiektach. Musimy o to zadbać sami. Możemy co prawda 
pozwolić klientom naszych klas na wpisywanie do nich czego dusza zapragnie,
ale prędzej czy później ktoś z niewiedzy lub z wyrafinowaniem to wykorzysta nie 
w taki sposób w jaki byśmy chcieli.

(Przykład)[https://gist.github.com/maciejlew/a2eb3798ec6867adc675]

#### Enkapsulacja pól obiektów

Dobrym pomysłem jest próba enkapsulacji pól klas jako pól pseudo prywatnych i 
utworzenie dla nich setterów i getterów:

(Przykład)[https://gist.github.com/maciejlew/b9e745708bff98539826]

W tej chwili ustawiamy stan obiektu przy pomocy setterów. Co prawda nadal możliwe
jest przypisanie wartości o typach z poza dziedziny oraz bezpośredni dostęp do pól,
ale zyskaliśmy pewne punkty zaczepienia, czyli nasze settery, w których możemy 
dokonać walidacji.

#### Walidacja w setterach

(Przykład)[https://gist.github.com/maciejlew/ce9d59ad88ec7cbc9449]

W tym przykładzie settery zostały rozbudowane o dodatkową walidację. Przekazywane
do setterów wartości są przypisywane do pól obiektu tylko wtedy gdy przejdą przez
przygotowane sito. W przeciwnym wypadku rzucane są odpowiednie wyjątki, które klient
powinien przechwycić i odpowiednio na nie zareagować. W przypadku braku reakcji
klienta w konsoli przeglądarki pojawi się odpowiedni komunikat. Jest to także
rozwiązanie przydatne pod względem debugowania - jeśli komunikaty przypisane do
wyjątków są w miarę sensowne od razu wiemy co się stało.

### Zalety walidacji w setterach

Walidacja danych wejściowych w setterach ma wiele zalet niezależnie od języka
programowania w jakim przyszło nam tworzyć aplikację. Niektóre języki, zwłaszcza
silnie typowane, ułatwiają nam tworzenie takiej walidacji out-of-box walidując
typy zmiennych przekazywanych do setterów. Jednak także w przypadku języków słabo
typowanych nie jesteśmy z góry na przegranej pozycji. Odrobina pracy powoduje że
możemy się zabezpieczyć przynajmniej przed najczęstszymi błędami.

W pokazany w przykładzie sposób zabezpieczyliśmy w pewien sposób nasz obiekt przed 
przypadkowym przypisaniem do jego pól wartości z poza dziedziny. Podpowiedzieliśmy 
także osobie która będzie korzystać z naszej klasy (być może nam samym w przyszłości)
co oczekujemy zastać w polach obiektu gdy odpytamy go o jego stan. 

Wykorzystaliśmy tu prawo Demeter, delegując walidację do metod prywatnych. 
Wykorzystaliśmy możliwość rzucania wyjątków przez co nasz obiekt nie musi się 
martwić co zrobić w przypadku niepoprawności danych wejściowych. Można by powiedzieć,
że naruszyliśmy zasady KISS i YAGNI, ale zostało to zrobione w słusznym celu. 
Te kilka linijek nadmiarowego kodu może w przyszłości oszczędzić wielu minut 
podczas których moglibyśmy szukać odpowiedzi na pytanie jaka to też znowu magia 
podziała się w naszym ulubionym języku programowania.

Tworzenie setterów i getterów ułatwia także testowanie aplikacji. Także 
[testowanie wyjątków w JS]({{site.url}}//2016/03/15/testowanie-wyjatkow-w-jasmine.html) 
jest w miarę proste i przyjemne. Dobrze przygotowane settery oraz suita testów
na pewno pomoże w utrzymaniu kodu wysokiej jakości.

Więcej przykładów można znaleźć w kodzie źródłowym mojej aplikacji konkursowej
[Drug Dose Framework](https://github.com/maciejlew/drug-dose-framework).

