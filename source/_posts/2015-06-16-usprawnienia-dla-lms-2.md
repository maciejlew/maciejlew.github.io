---
layout: post
title: "Usprawnienia dla LMS, część 2"
date: 2015-06-16 18:00:00
description: "Lista nowych usprawnień dla LMS, dostępnych w ofercie LionNet, część 2"
keywords: LMS, Lan Management System, pluginy, wzorce projektowe, rozbudowa LMS, RADIUS accounting, załączniki do dokumentów w LMS, noty obciążeniowe w LMS, terminarz w LMS, wezwania do zapłaty, promocje w LMS
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

Kolejny etap prac nad rozwojem LMS za mną, stworzyłem kilka nowych rozwiązań, poprawiłem
trochę błędów:

 * **Przypisywanie komputerów klientów do urządzeń sieciowych (RADIUS accounting)**;
 * **Generator umów w promocji**;
 * **Dodawanie, usuwanie, edycja załączników do dokumentów w LMS**;
 * Zwiększenie maksymalnego rozmiaru załączników do dokumentów;
 * Noty obciążeniowe - generowanie w PDF;
 * Noty obciążeniowe - powrót na kartę klienta po kliknięciu "Zapisz";
 * Wyszukiwanie klientów po PESEL/NIP/REGON/KRS;
 * Wyszukiwanie klientów po numerach telefonu;
 * Terminy płatności per zobowiązanie;
 * Terminarz - powrót do karty klienta po dodaniu komentarza z poziomu karty klienta;
 * Terminarz - adresy komputerów klienta na liście zdarzeń;
 * Likwidacja pól GG, Yahoo, Skype na karcie klienta;
 * Umowy - adres korespondencyjny;
 * Wezwania do zapłaty - adres korespondencyjny;
 * Poprawienie tworzenia zobowiązań z schematu promocji (nie działało dla taryf z niezdefiniowanym okresem naliczania);
 * Automatycznie wyliczany rabat przy dodawaniu lub edycji zobowiązania;
 * Umożliwienie skopiowania numeru konta z faktury, którą klient dostaje w PDF (gdy PDF otwierany jest w Adobe Reader).


Obecnie pracuję nad:

 * Pobieranie informacji z serwera pocztowego czy FV została wysłana do klienta i prezentacja tejże w LMS;
 * Lista kończących się umów, powiadamianie BOK o kończących się umowach;
 * Lista kończących się zobowiązań, powiadamianie BOK o kończących się zobowiązaniach;
 * Terminarz - rozbudowa systemu komentarzy;
 * Pobieranie informacji z SerwerSMS.