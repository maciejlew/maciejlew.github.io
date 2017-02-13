---
layout: post
title: 'Dokumenty w LAN Management System'
date: '2017-02-13 20:00:00'
description: 'Opis systemu zarządzania dokumentami w LMS'
keywords: 'lms, lan management system, dokumenty, umowy, aneksy, regulaminy,
książeczki opłat, wezwania do zapłaty, protokoły przekazywania sprzętu, 
protokoły zdawczo-odbiorcze'
tags: LMS
img_hosting: "http://interpc.pl/~mlewinterpc/lion.net.pl/2017/02/08/dokumenty-w-lan-management-system/"
---

System zarządzania przedsiębiorstwem, jakim jest LAN Management System, 
powinien być wyposażony w moduł zarządzania dokumentami. LMS posiada taki moduł i 
daje jego użytkownikom sporą swobodę w tworzeniu dokumentów wszelakiej treści.
Jeśli jeszcze nie wykorzystujesz w swojej firmie możliwości LMS w ww. zakresie, 
a chcesz poszerzyć krąg czerpanych z LMS korzyści, zapoznaj się z tym tematem 
czytając ten wpis!

### Dokumenty w LMS

Dokumenty w LMS są tworzonymi z szablonu plikami, w których możesz 
zamieścić skierowaną do konkretnego klienta spersonalizowaną treść. 
Możliwe jest przygotowanie dokumentu dowolnego typu. Dokument ten jest 
przechowywany w formacie HTML, jego treść jest statyczna, to znaczy że nie 
zmieni się gdy zmianie ulegną dane pobrane z baz danych celu jego 
wygenerowania. 

{% assign image = 'lms-domyslny-dokument.png' %}
{% assign alt = 'Dokument umowy na świadczenie dostępu do sieci Internet wygenerowany w Lan Management System' %}
{% assign caption = 'Przykładowa umowa wygenerowana w LMS' %}
{% include figure.md %}

### Jakie funkcje związane z obiegiem dokumentów w firmie posiada LMS?

W LMS zostało zaimplementowanych szereg funkcji znanych z systemów obiegu 
dokumentów.
Są to między innymi:

* lista wszystkich dokumentów;
* lista dokumentów danego klienta;
* wyszukiwanie dokumentów;
* konfigurator uprawnień użytkowników w module dokumentów;
* plany numeracyjne;
* generator dokumentów;
* dostęp do dokumentów w panelu abonenta/klienta;
* szablony dokumentów.

Wykorzystując potencjał modułu zarządzania dokumentami w LMS, **można 
znacząco zmniejszyć nakład czasu** jaki jest potrzebny w żmudnej, codziennej, 
papierkowej pracy biura obsługi klienta.

#### Lista wystawionych dokumentów

Moduł listy wystawionych dokumentów agreguje w jednym miejscu wystawione przy 
pomocy LMS dokumenty. Możesz w szybki sposób przejrzeć ostatnio wygenerowane 
pisma lub użyć wyszukiwarki aby zobaczyć pisma wybranego typu, wystawione w 
interesującym Cię okresie, sprawdzić które z nich nie zostały jeszcze
zatwierdzone.

{% assign image = 'lms-lista-dokumentow.png' %}
{% assign alt = 'Zrzut ekranu przedstawiający listę dokumentów w Lan Management System' %}
{% assign caption = 'Widok listy dokumentów w LMS' %}
{% include figure.md %}

Warto wspomnieć, że LMS posiada wbudowaną listę typów pism. Dzięki temu 
szybko, bez zagłębiania się w treść dokumentu, będziesz w stanie 
określić czego on dotyczy. Na liście wbudowanych typów dokumentów 
znajdziesz m. in.:

* umowy;
* aneksy;
* protokoły;
* zamówienia;
* karty klienta;
* wzory rozwiązania umowy;
* wezwania do zapłaty;
* cenniki;
* promocje;
* gwarancje;
* regulaminy.

{% assign image = 'lms-lista-typow-dokumentow.png' %}
{% assign alt = 'Zrzut ekranu przedstawiający listę dokumentów w Lan Management System' %}
{% assign caption = 'Widok listy dokumentów w LMS' %}
{% include figure.md %}

#### Lista dokumentów klienta

Lista dokumentów klienta widoczna jest w panelu informacji o kliencie i 
zawęża listę wszystkich dokumentów do tych przypisanych wybranemu klientowi 
(dokument musi mieć przypisanego klienta/abonenta i nie może ich mieć 
przypisanych więcej niż jednego). Na tej liście także znajdziemy takie 
informacje jak typ dokumentu, okres obowiązywania, dane użytkownika który go 
wystawił).

{% assign image = 'lms-lista-dokumentow-klienta.png' %}
{% assign alt = 'Zrzut ekranu przedstawiający listę dokumentów klienta w Lan Management System' %}
{% assign caption = 'Widok listy dokumentów wybranego klienta w LMS' %}
{% include figure.md %}

#### Konfigurator uprawnień

LMS pozwala na konfigurowanie uprawnień użytkowników w zakresie wystawiania 
dokumentów. Możliwe jest określenie szczegółowych uprawnień do podglądu, 
tworzenia, zatwierdzania, edycji oraz usuwania każdego z wbudowanych typów 
dokumentów. Dzięki temu możemy odzwierciedlić w systemie rzeczywiste 
uprawnienia jego użytkowników, wprowadzić większą kontrolę przepływu 
dokumentów i uniknąć pomyłek.

{% assign image = 'lms-edycja-typu-dokumentu.png' %}
{% assign alt = 'Zrzut ekranu przedstawiający edycję typu dokumentu w Lan Management System' %}
{% assign caption = 'Widok konfiguracji uprawnień dla dokumentu w LMS' %}
{% include figure.md %}

#### Plany numeracyjne

Plany numeracyjne pozwalają nadać konkretnym typom dokumentów 
wyróżniającego je schematu numeracji. Przemyślany schemat numeracji ułatwi 
Ci pracę w module zarządzania dokumentami, kontakt z klientem w razie 
konieczności powoływana się na zapisy w dokumentach, itd.

{% assign image = 'lms-lista-planow-numeracyjnych.png' %}
{% assign alt = 'Zrzut ekranu przedstawiający listę planów numeracyjnych w Lan Management System' %}
{% assign caption = 'Widok listy planów numeracyjnych w LMS' %}
{% include figure.md %}

Moduł dodawania dokumentów pozwala na określenie planu numeracyjnego z 
którego zostanie pobrany kolejny numer do aktualnie tworzonego pisma lub dla 
którego wskazany zostanie przez wystawcę konkretny numer.

{% assign image = 'lms-nowy-plan-numeracyjny.png' %}
{% assign alt = 'Zrzut ekranu przedstawiający formularz dodawania planu numeracyjnego w Lan Management System' %}
{% assign caption = 'Widok formularza dodawania nowego planu numeracyjnego w LMS' %}
{% include figure.md %}

#### Generator dokumentów

Generator pozwala na szybkie wystawienia dokumentów tego samego typu, z tego 
samego szablonu, wszystkim klientom lub określonej ich grupie. Możesz w ten 
sposób wygenerować nową wersję regulaminu dla wszystkich podłączonych 
klientów, wystawić wszystkim dłużnikom wezwanie do zapłaty, itp.

{% assign image = 'lms-generator-dokumentow.png' %}
{% assign alt = 'Zrzut ekranu przedstawiający generator dokumentów w Lan Management System' %}
{% assign caption = 'Widok formatki generatora dokumentów w LMS' %}
{% include figure.md %}

#### Podgląd w panelu abonenta

Informacja o każdym wystawionym dla abonenta/klienta dokumencie będzie dla 
niego dostępna po zalogowaniu się do panelu abonenta. Gdy zatwierdzisz dany 
dokument Twój klient będzie go mógł pobrać i wydrukować.

{% assign image = 'lms-userpanel-lista-dokumentow-klienta-niezatwierdzony.png' %}
{% assign alt = 'Zrzut ekranu przedstawiający listę dokumentów klienta w panelu abonenta w Lan Management System z niezatwierdzoną umową' %}
{% assign caption = 'Widok listy dokumentów klienta w panelu abonenckim LMS z niezatwierdzoną umową' %}
{% include figure.md %}

{% assign image = 'lms-userpanel-lista-dokumentow-klienta-zatwierdzony.png' %}
{% assign alt = 'Zrzut ekranu przedstawiający listę dokumentów klienta w panelu abonenta w Lan Management System z zatwierdzoną umową' %}
{% assign caption = 'Widok listy dokumentów klienta w panelu abonenckim LMS z zatwierdzoną umową' %}
{% include figure.md %}

#### Szablony dokumentów

Wraz z pobraną instancją LMS otrzymuje się przykładowy domyślny szablon. 
Na jego podstawie możesz przygotować inny potrzebny Tobie szablon umowy, 
cennika, regulaminu lub czegokolwiek innego co będzie przydatne w codziennej 
pracy Twojego przedsiębiorstwa. Szablony przygotowuje się w formacie HTML, a 
miejsca na dynamicznie wstawiane elementy tworzy się przy pomocy systemu 
szablonów dla PHP jakim jest Smarty. Silnik szablonu napisany jest w PHP, 
może być dostosowany do potrzeb konkretnego typu dokumentu. **Pozwala on na 
łatwe pobranie z bazy danych niezbędnych do automatycznego wypełnienia 
szablonu danych o kliencie, jego zobowiązaniach, komputerach, saldzie oraz 
innych danych.** Możliwe jest także rozbudowanie formatki dodawania nowego 
dokumentu o dodatkowe pola przy pomocy skojarzonego z szablonami dokumentów 
systemu pluginów. W ten sposób podczas tworzenia nowego dokumentu możesz 
podać dodatkowe dane które nie znajdują się w bazie danych lub stworzyć 
kilka ścieżek tworzenia dokumentu.

{% assign image = 'lms-nowy-dokument.png' %}
{% assign alt = 'Zrzut ekranu przedstawiający formularz dodawania dokumentu w Lan Management System' %}
{% assign caption = 'Widok formularza dodawania nowego dokumentu w LMS' %}
{% include figure.md %}

{% include acronyms.md %}