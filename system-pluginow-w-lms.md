---
layout: post
title: System pluginów w LMS
date: 2015-02-16 18:00:00
description: Opis nowego systemu pluginów w LMS
keywords: lms, lan management system, pluginy, wzorce projektowe, rozbudowa lms

---

Od kilku miesięcy LMS ma nowy system pluginów, którego jestem autorem. Postanowiłem
napisać o nim coś więcej, tak aby innym developerom pomóc się w niego wdrożyć.

# Po co w ogóle nam system pluginów?

System pluginów powstał z prostego powodu - aby zewnętrznym dostawcom funkcjonalności
w LMS żyło się łatwiej. Dotychczas zapanowanie nad kilkunastoma stabilnymi wersjami LMS
oraz niezliczoną ilością wersij z GIT, w kórych posiadaniu są potencjalni klienci,
było wielkim problemem. Każdy najmniejszy i mogłoby sie wydawać najbardziej niewinny commit
mógł powodować trudności we włączaniu dodatków do zainstalowanej instancji LMS.

Pluginy miały z założenia rozwiązać ten problem. LMS otwiera się na kod dostarczany
przez pluginy, przekazuje im w krytyczych miejscach (zwanych dalej hookami) kontrolę,
a w zamian plugin nie ingeruje w kod LMS - możliwa jest łatwa aktualizacja samego LMS
do najnowszej wersji dostępnej na GitHubie.

# Jak to działa

Za działanie systemu odpowiadają klasy *LMSPluginManager* i *LMSPlugin*. Realizują
one wzorzec projektowy Obserwator, posiłkując się w tym biblioteką Phine\Observer.
