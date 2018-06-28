---
layout: post
title: "Quality Excites 2016"
date: "2018-06-23 13:10:00"
description: Relacja z siódmej edycji konferencji dla zainteresowanych tworzeniem oprogramowania wysokiej jakości
keywords: quality excites, testowanie, zawód testera, automatyzacja testów, digitalizacja
tags:
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

Zachęcam do zapoznania się moją relacją z siódmej już edycji konferencji Quality Excites.

## How to thrive as a Software Tester

Wykład otwierający konferencję poprowadził Rob Lambert. W 10 punktach pokazał co robić aby cały czas rozwijać się jako
tester. Robert mówił o tym że nasz czas jest tu i teraz, że to sami musimy wywołać w sobie proces "rozkwitania", że z 
głową należy sprzedawać swoją wolność i ostrożnie wybierać pracę, aby nie stracić zdrowego kompromisu życie-praca.

Poruszona została także kwestia prawdziwego celu pracy testera. To dzięki testerom klient powinien móc otrzymać zamówiony
produkt. Jeśli zespół nic nie dostarcza to klient traci.

Było też coś dla zwolenników testów manualnych nad wszechobecną automatyzacją - należy skupić się na tym w czym członkowie
zespołu testerskiego są dobrzy - jeśli nie lubią bądź nie potrafią programować, to nie powinny tego robić a zamiast tego 
skupić się na innych swoich cechach które powodują że są dobrymi testerami. Należy w takich ludziach wzmacniać motywację
poprzez przypisywanie ich do właściwych dla nich zadań.

Napotykane podczas testowania błędy to tak na prawdę szanse na dalszy rozwój dla każdego testera. Nie powinny one wzbudzać
w nich frustracji a raczej spoglądać na nie jak na nowe możliwości. Przy okazji można oczywiście rozwijać swoje pasje i 
uczyć się rzeczy które interesują testera, nie zawsze na pierwszy rzut oka związanych z jakością oprogramowania.

Każdy tester powinien także ciągle uczyć się jak zadawać właściwe pytania i robić to. Buduje on w ten sposób swoje relacje
z zespołem i staje się partnerem, zarówno dla biznesu jak i dla deweloperów.

Można by powiedzieć że to oklepane frazesy, banialuki i lanie wody. Może i tak, ale Rob potrafił wytłuścić te
tematy jak nikt inny i swoim występem rozkręcił całą konferencję. Oby każdy z nasz w swojej pracy rozkwitał, a nie 
kwitnął :)

Swoją drogą, czy to nie dziwne że w naszym języku zwrot "rozkwitać" kojarzy się pozytywnie, a "kwitnąć" już niekoniecznie?

## Współczesne strategie testowania dla rozwijających się ekosystemów

Prelekcja Juliana Warszawskiego była przeglądem znanych i usystematyzowanych typów testów. Przypomnieliśmy sobie więc
czym jest piramida testów, V-model, czym są oraz jakie są zalety i wady testów jednostkowych, integracyjnych. Ciekawostkami
były opisane testy mutacyjne oraz "property based testing". Padło kilka słów o statycznej analizie kodu oraz architekturze heksagonalnej (service stubs, in memory services), które wspierają tworzenie testowalnego kodu.

Niestety, gdy już akcja zaczęła się rozwijać, czas prezentacji minął i trzeba było zwijać manatki. Julian zdążył jedynie wspomnieć o testach funkcjonalnych, eksploracyjnych, smoke oraz a/b testach. A szkoda. Moim zdaniem można było poświęcić mniej czasu na oczywiste oczywistości, jak testy jednostkowe i integracyjne, o których mówi się wszędzie od lat, a skupić się na zagadnieniach rzadko omawianych na konferencjach programistycznych.

## Riders On The Storm: API Gateways not only for developers

Ciekawy wykład przygotował Tomasz Skowroński. Oprawa prezentacji nawiązywała do przygód Geralta z Rivii, chcącego zapanować nad API.
Nawiązano do takich pojęć jak wzorce fasady, anti-corruption layer, filter-map-reduce, zagadnień przekrojowych, forward proxy, reverse proxy w kontekście API gateway.

Przedstawione zostały narzędzia związane z budową API gateway, czyli Kony, Tyk i KrakenD. Mowa była także o traffic controll, load balancerach, circuit breakerach, service discovery, blue-green deploymencie, canary releases, backend for frontend (BFF) i testach a/b - w tych wszystkich zagadnieniach może nam pomóc API gateway.

## Testing batch and streaming Spark applications

Czwarta z kolei prezentacja dotyczyła testowania Apache Sparka. Dobrze się stało że Łukasz Gawron zrobił na wstępie szybką ankietę
- "kto zna i używa Apache Spark?" - bo wyszło z niej że nie jestem na sali jedynym który nic nie wie na ten temat i że 90% osób przyszło na ten wykład z ciekawości. Wstęp do wykładu był dobry, dowiedzieliśmy że Apache Spark służy do obliczeń na spartycjonowanych na różnych maszynach zbiorach danych, czym różni się High Velicity Data od Big Data (reakcje w czasie rzeczywistym).

Niestety, jeśli chodzi o testowanie to prezentacja nie przemówiła do mnie. Przykłady w Scali, opisywały abstrakcyjne dla laików takich jak 90% słuchaczy, problemy. Spodziewałem się bardziej przykładów problemów "z życia wziętych" i ich rozwiązań, a pokazano problemy
z testowalnością kodu, refaktoryzacją i tworzeniem dubli dla testów - czyli coś co dotyka każdego kodu, nie tylko tego związanego z
Apache Spark.

## Testy, które tworzą się same (prawie)

Celem tego wykłady było przedstawienie idei modelowania testów i generowania ich kodu z modelu (model based testing). 
Arnika Horeszko przedstawiła nam tę ideę oraz działanie programu Mista. Zbudowany przy jego pomocy model eksportowany był do kodu Selenium. Idea zacna, o ile ktoś jeszcze testuje aplikacje webowe przy pomocy Selenium lub innego niszowego ale wspieranego przez Mistę narzędzia.

## Universal Design – wprowadzenie do tematu dostępności w oparciu o WCAG

Bardzo ciekawy wykład przeprowadziła Joanna Falkowska. Były to co prawda podstawy wiedzy o WCAG, ale myślę że nawet osoby śledzące ten temat mogły dowiedzieć się czegoś nowego. Było więc kilka słów o universal design, przedstawiono statystyki niepełnosprawności, pokazano relację pomiędzy starzejącym się społeczeństwem a rynkiem. Wśród przykładów dominowały kwestie formularzy, tekstów alternatywnych, transkrypcji, podsumowań i ogólnie UX. Prelegentka wspomniała także o narzędziach które tester może wykorzystać sprawdzając dostępność strony: accessibility developer tools, koa11y, a11y, tota11y oraz o normie ISO-40500.

## Zacznij gdziekolwiek

Pełen energii wykład motywujący poprowadził Przemysław Barański z jaktestować.pl. Mówił on o samorealizacji, samokształceniu i
samodoskonaleniu w pracy testera. Było kilka słów i anegdotek o prowadzeniu bloga, zmianie pracy, IKIGAI i KAIZEN. Po tym wykładzie
wyszedłem umotywowany żeby dalej próbować walczyć o bycie jeszcze lepszym specjalistą ;)

## Nawet język programowania służy do komunikowania się, nie do kodzenia

Myślę że wykład Damiana Legutko miał wskazać jak ważną rolę pełni tester w projekcie. Wpisywał się on w zauważony przeze mnie 
trend tej konferencji, czyli "automatyzacja to nie wszystko". Jedno dobrze postawione przez testera pytanie może mieć kluczowy
wpływ na sukces projektu. Damian przedstawił nam wypracowany przez siebie model zadawania pytań, który można spróbować zastosować
w codziennej pracy.

## Testy wydajnościowe w świecie mikroserwisów

Bardzo dobrze ze swoja prezentacją poradził sobie Tomasz Dubikowski. Po tej prezentacji, rzeczy wartych dalszego przemyślenia dodam sobie load testy, stress testy, peak testy, endurance testy. Słuchaliśmy także o tym jaki organizacja ma wpływ kod (prawo Conwaya). Tomasz przedstawił także w akcji oprogramowanie gatling.io.

## Web Application Security Test Automation

Wykład Marka Puchalskiego był wprowadzeniem w tematy poruszane przez OWASP oraz propozycją aby spróbować w swoim projekcie pokryć
testami problemy związane z bezpieczeństwem. Mowa była o miejscu testów bezpieczeństwa w projektach prowadzonych w metodologiach Agile oraz Waterfall. O pojawiającej się na horyzoncie nowej specjalizacji, czyli o DebSecOps. Prelegent pokazał proste testy sprawdzające czy strona WWW implementuje pewne mechanizmy zwiększające bezpieczeństwo (OWASP 11.8, 5.5, 10.16). Cały wykład oceniam dobrze, jedyną rzeczą jaka mi się nie podobała to sugestia by testować bezpieczeństwo produkcyjnych aplikacji przy pomocy narzędzi online - po co cały świat ma wiedzieć że coś u nas nie działa?!

## Automating Assurance: Tools, Collaboration and DevOps

Wykładem zamykającym tegoroczne Quality Excites był wykład Paula Gerrarda z gerrardconsulting.com. Była to kolejna tego dnia mowa
motywująca do dalszego rozwoju. Paul tłumaczył dlaczego jego zdaniem zawód testera nadal ma przed sobą przyszłość. Mówił o erze
postępującej cyfryzacji, w której coraz więcej i więcej usług wymaga rozbudowanych systemów. W ich testowaniu niezbędni są i będą
testerze. Nie da się ich zastąpić, nie wszystko da się zautomatyzować. Słowa digitalizacja padało podczas tej prezentacji nadzwyczaj
często i nie było to spowodowane tylko aktualną modą i marketingowym szumem. Paul wierzy w cyfrową rewolucję i szanse z nią związane.
Związane zapewne także coachingiem, w końcu Agile znamy od kilkunastu lat - ile można słuchać wykładów o tym samym ;)

Digitalizacja to obecnie jeden z najszybciej nabierających rozgłosu buzzword. Kolejnym ciekawymi akronimami przewijającym się przez
prezentację był SMAC - Social Media Analytics Cloud oraz CXO - Customer Expirience Optimalization. Oba są ściśle powiązane z
testerską profesją.

Mowa była także o tym że IT coraz częściej robione jest dla zwykłych ludzi. I żeby było ono przyjemne i użyteczne ktoś musi wiedzieć
czego oczekują użytkownicy - tu też pole do popisu mają testerzy.

Poruszony był także problem usystematyzowania procesu testowania, czyli znowu pooglądaliśmy sobie piramidki, kwadranty oraz autorski model Paula definiujący cały proces testowania i dzielący go na części poddające się automatyzacji i te gdzie człowiek gra główną rolę. Było także o roli narzędzi (i że nie zastąpią one myślenia), o modelowaniu testów.

Tak więc, według Paula, współczesny tester powinien być wizjonerem, adwokatem klienta, analitykiem ryzyka, managerem, racjonalizatorem, trenerem i mentorem. Przy okazji może też sobie od czasu do czasu coś potestować :)

## Podsumowanie

Tegoroczny, siódmy już Quality Excites, minął pod hasłami szukania nowej drogi dla testerów. Postępująca digitalizacja powinna
pozwolić nabrać im wiatru w skrzydła, nie powinni oni także obawiać się szerzącej się automatyzacji testów. Całą konferencję oceniam dobrze i mam nadzieję że w przyszłym roku także utrzyma ona swój poziom.

