---
layout: post
title: "LMS - system zarządzania sieciami LAN i nie tylko"
date: 2014-07-27 14:53:00
description: "Opis systemu LMS, funkcjonalność i zalety stosowania przez ISP"
keywords: LMS, opis systemu LMS, sieci osiedlowe, dostawcy internetu, systemy CRM, zarządzanie siecią LAN, system zarządzania siecią, LMS GIT
tags:
- LMS
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

Wpis ten będzie dotyczył systemu LMS jako całości. Z jego lektury dowiesz
się czym jest LMS, jakie są jego podstawowe funkcjonalności, dlaczego **warto z 
niego skorzystać prowadząc własną sieć osiedlową**, a także dlaczego **może być 
przydatny dla innych przedsiębiorców**.

#### Opis systemu LMS

LMS ma już kilkanaście lat. W ciągu tego czasu powstało **pełnowartościowe 
środowisko do zarządzania sieciami osiedlowymi LAN**. Kod projektu udostępniany jest 
na licencji GNU GPL v2. [Stabilną wersję systemu można pobrać z oficjalnej strony 
projektu](http://lms.org.pl/download.php), natomiast wersja rozwojowa dostępna 
jest w [repozytorium GitHub LMS](http://github.com/lmsgit/lms). 

Można powiedzieć, że na cały system składają się rozbudowana baza danych, webowy 
frontend oraz oparty na skryptach backend. Frontend napisany został w PHP, 
wykorzystuje szablony Smarty oraz różne pomocnicze biblioteki: do obsługi Ajax, 
generowania plików pdf itp. Backend napisany pierwotnie w C i PERL powoli 
przepisywany jest także w PHP. O podstawowych funkcjonalnościach jakich dostarcza 
frontend i backend dowiesz się w dalszej części wpisu.

LMS dostarczany jest wraz z dokumentacją, z której możesz dowiedzieć się jak wygląda
procedura jego instalacji oraz konfiguracji.

Projekt przetłumaczony został na kilka języków. Obecnie wspierane są języki:
angielski, czeski, litewski, polski, rosyjski i słowacki.

#### Funkcje frontendu

Poniżej przedstawiono niektóre, moim zdaniem najważniejsze, funkcje frontendu.

#### Użytkownicy

**LMS pozwala na pracę grupową** poprzez tworzenie kont użytkowników. Utworzeni
użytkownicy mogą logować się do systemu i wykonywać swoją pracę nie mając
jednocześnie dostępu do informacji które nie są przeznaczone dla ich oczu 
dzięki rozbudowanemu systemowi uprawnień.

#### Klienci i komputery

**W systemie możemy dodawać i zarządzać dowolną pulą klientów. Każdemu z klientów
możemy przypisać wiele komputerów.** Zarówno klienci i ich komputery są opisani 
wieloma parametrami, których przechowywanie w bazie danych LMS znacznie ułatwia
pracę każdemu przedsiębiorcy.

#### Urządzenia sieciowe

Oprócz końcówek klienckich naszej sieci **możemy w LMS dodawać urządzenia sieciowe
tworzące infrastrukturę naszej sieci**. Pozwala to na łatwiejsze zorientowanie się
jak działa nasza sieć. LMS oferuje nam także generowanie map sieci w różnych 
formatach oraz **wspiera raportowanie do UKE**.

#### Operacje finansowe

**LMS przewiduje możliwość rozliczania w systemie klientów z ich zobowiązań**. Istnieje
możliwość definiowania taryf, importowania listy płatności, generowanie faktur, not
obciążeniowych, rejestrów kasowych i innych. W każdej chwili możemy w systemie podejrzeć
listę operacji finansowych danego klienta, wygenerować raporty, dokonać korekt.

#### Dokumenty

Oprócz wystawiania dokumentów takich jak faktury, LMS pozwala na wystawianie wielu innych
typów dokumentów i przypisywanie ich konkretnym klientom. **Rozbudowana możliwość tworzenia 
szablonów i automatycznego przepisywania danych klientów z bazy danych na dokumenty** pozwala
na łatwe i przyjemne zarządzanie dokumentami takimi jak billingi, umowy, książeczki opłat,
wezwania do zapłat i inne.

#### Userpanel

Userpanel to osobny system pozwalający klientowi znającemu swój numer i pin na zalogowanie
i wykonanie kilku podstawowych czynności administracyjnych związanych z jego kontem w systemie.


#### Helpdesk

Helpdesk pozwala na odbieranie zgłoszeń od klientów i zarządzanie nimi. Dzięki niemu **administratorzy
sieci mają możliwość śledzenia zgłoszeń**, delegowania pracowników do ich rozwiązania i prowadzenia
dialogu z klientem.

#### Funkcje backendu

LMS to nie tylko działająca w przeglądarce wizualna nakładka na bazę danych naszej sieci komputerowej,
ale także **rozbudowany system skryptów pomagających w zarządzaniu siecią w sposób zautomatyzowany**.
Dzięki temu cyklicznie wykonywane zadania stają się prostsze i pozostają pod kontrolą jednego spójnego
systemu.

#### Generowanie faktur

Po uruchomieniu, skrypt generujący faktury sprawdza w systemie LMS, czy któryś z klientów powinien mieć
na danych dzień wystawioną fakturę. Jeśli tak jest to **faktura jest generowana, konto klienta zostaje obciążone
odpowiednią kwotą a zmiany są natychmiast widoczne w systemie dla administratora i dla samego klienta**.
W razie potrzeby istnieje możliwość uruchomienia tego skryptu z datą ustawiona na dowolny dzień.

#### Wysyłka faktur

**Wystawione faktury mogą zostać automatycznie wysłane do klienta, na wskazany
adres e-mail**. Skrypt wysyłający faktury codziennie sprawdza czy zostały 
wystawione nowe faktury i jeśli takie zostaną znalezione, a klient podał adres
e-mail i zgodził się na dostarczanie faktur drogą elektroniczną, to nastąpi próba
 wysyłki danej faktury.

#### Blokowanie klientów

Prowadzenie historii operacji klienta, tzn. jego obciążeń i wpłat, pozwala na
uruchomienie automatycznego blokowania klienta po przekroczeniu wskazanego
limitu zadłużenia. LMS dostarcza w tym celu **prosty skrypt wykonujący całą 
pracę** za nas.

