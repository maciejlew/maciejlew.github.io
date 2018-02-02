---
layout: post
title: "PHPers Silesia #8 - relacja"
date: "2016-04-12 23:25:00"
description: 'Relacja ze 8. spotkania programistów PHP na Śląsku'
keywords: rzucanie wyjątków, dobre wzorce programowanie, jakość oprogramowania programowanie obiektowe, programowanie w php, spotkania it, cqrs, command and query responsibility segregation, php spl, rabbit mq, kolejki wiadomości, standard php library
tags:
- PHP
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

W dniu 06.05.2016, czyli kilka dni temu, odbyło się ósme spotkanie programistów
PHP na Śląsku. Czas na moją krótką relację z tego wydarzenia.

Na spotkaniu mieliśmy okazję wysłuchać trzech prezentacji na tematy mniej lub 
bardziej bezpośrednio związane z PHP:

 * Wprowadzenie do kolejek wiadomości na przykładzie RabbitMQ
 * SPL!!!11oneone
 * CQRS

### Wprowadzenie do kolejek wiadomości na przykładzie RabbitMQ

Podczas tej prezentacji Sebastian Kremiec zrobił nam wprowadzenie do idei systemów
kolejek wiadomości. Dowiedzieliśmy się jakie wiadomości mogą być buforowane w 
kolejkach i do czego to się może przydać. Przedstawione zostało także jedno z 
wiodących narzędzi w tej dziedzinie, czyli RabbitMQ. Sebastian przedstawił podstawowe
konfiguracje w systemach MQ, mogliśmy zobaczyć proste przykłady w PHP i JS.

Tak się akurat składa że ten temat jest teraz na topie. Tych, którzy chcieli by się
nim zainteresować, a nie byli na spotkaniu lub chcą poszerzyć zdobytą tam wiedzę,
odsyłam do na prawdę dobrego wprowadzenia jakie ukazało się w numerze 02/2016 
magazynu Programista:

[RabbitMQ – otwarty system pośredniczący w wymianie wiadomości w środowisku rozproszonym](http://szukaj.programistamag.pl/uuid/ce15f4f242250c82e4eb2eb14d935c7fe95d338a)

### SPL!!!11oneone

Wystąpienie Mateusza Juścińskiego miało na celu przypomnienie tym którzy zapomnieli
lub nigdy nie mieli przyjemności poznać czym jest SPL i co dzięki niej możemy
poprawić w pracy z kodem napisanym w PHP. Nie było to kompletne omówienie 
biblioteki, ale za to Mateusz wskazał nam te jej elementy które są ciekawe lub
wyjątkowo przydatne. A więc było o zaletach jakie przynosi w sobie autolaoding
dostępny właśnie w SPL, o rozbudowanym systemie iteratorów i wyjątków. Przedstawione
zostały także korzyści płynące z wykorzystania bardziej złożonych od tablic typów
opisujących kolekcje, czyli stert, stosów i kolejek, które także znajdziemy w SPL.
Dowiedzieliśmy się także co prelegent myśli o osobach nie znających/korzystających
z SPL ;). Była to moim zdaniem najciekawsza i najlepiej przeprowadzona prezentacja 
podczas tego spotkania.

### CQRS

Ostatnia prezentacja została wybrana przez publiczność. Większość z nas chciała
posłuchać o CQRS, czyli podejściu do projektowania architektury programu mówiącym
o tym że warto wydzielić model odpowiadający za zapis stanu aplikacji oraz modelu 
ten stan odczytujący. Piotr Pasich zrobił wprowadzenie do tego nośnego ostatnio
tematu. Omówione zostały zalety takiego podejścia. Koncepcja ta także została
rozwinięta przez Piotra o pomysł na rozdzielenie warstwy przechowującej dane
(bazy danych) również na dwa lub więcej bytów, przystosowanych do zapisu bądź 
odczytu danych przez model w stylu CQRS.

Ciekawy artykuł na ten temat także jest do poczytania w magazynie Programista 02/2016:

[CQRS pragmatycznie](http://szukaj.programistamag.pl/uuid/2a3d3d8bc606f0ae4cc4f9314c2d74ce1fa6ce62)

### Podsumowanie

Całe spotkanie oceniam za udane. Na afterparty również była okazja pogadać na 
tematy związane z programowaniem, nie tylko w PHP. Warto raz na kilka miesięcy
poświęcić jeden wieczór by móc spojrzeć na to co się robi z trochę innego punktu 
widzenia, poszerzyć wiedzę i kontakty. Do zobaczenia na kolejnym PHPers Silesia,
mam nadzieję że już wkrótce.

