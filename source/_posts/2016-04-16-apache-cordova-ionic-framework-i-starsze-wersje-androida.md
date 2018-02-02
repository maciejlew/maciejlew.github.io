---
layout: post
title: "Apache Cordova, Ionic Framework i starsze wersje Androida"
date: "2016-04-16 23:30:00"
description: 'Jak uruchomić aplikację zbudowaną w Ionic Framework na starszych wersjach Androida'
keywords: daj się poznać 2016, konkurs programistyczny, aplikacja konkursowa, drug dose framework, aplikacja mobilna, pas pediatryczny, dawkowanie leków, yeoman, ionic framework, generator aplikacji, jasmine, bdd, testowanie aplikacji
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

Stanąłem dziś przed problemem wgrania mojej aplikacji stworzonej w Ionic Framework
na kilkuletni już telefon z trochę starszą wersją Androida, a co za tym idzie także
wymaganą wersją SDK na którym budowano aplikację. Opiszę co udało mi się po kilku 
godzinach walki zrobić aby to zadziałało.

### Uruchamianie aplikacji na telefonie

Uruchomić aplikację zbudowaną w Ionic Framework możemy na kilka sposobów. Do tej
listy dołączyła się opcja przegotowana przez [szablon Yeoman][1]. 
Lista ta, posortowana od najbardziej opakowujących poleceń do najbardziej 
"niskopoziomowych", wygląda tak:

 * grunt run
 * ionic run
 * cordova run

#### grunt run

To polecenie opakowuje polecenie ionic run. Polecenie czyści śmieci powstałe
przy poprzednich wywołaniach zadań takich jak run, build czy serve, po czym buduje paczkę.
Po jej zbudowaniu i wgraniu jej na telefon dodatkowo obserwuje projekt i w razie 
zmian powtarza automatycznie ten proces.

#### ionic run

To polecenie tworzy paczkę i wgrywa ją na telefon. W tle wykonywane jest cordova run.

#### cordova run

To polecenie wykonuje całe budowanie paczki APK. Na podstawie manifestu jest w 
stanie określić jakiego ma użyć SDK.

#### gradle

Uruchomienie powyższych poleceń powoduje uruchomienie narzędzia Gradle (choć można je 
zmienić na Ant), zbudowanie paczki .apk i wgranie na podłączony do komputera 
telefon.

### Opcja minSdkVersion

Aby uruchomić aplikacje na starszym Androidzie musimy dowiedzieć się jakiemu
numerowi SDK odpowiada wersja Androida. Powiedzmy że mamy Androida 2.3.6, a 
odpowiadająca mu wersja SDK to 9. Apache Cordova domyślnie obsługuje minimalnie
wersję 14. A więc mamy problem. Jeśli korzystamy z Gradle możemy przekazać opcję
ustawiającą minimalna wersję SDK (z Ant nie działa).

    ionic run -- --minSdkVersion=9

Możemy także, aby nie musieć ciągle podawać tego parametru, umieścić to w **pliku
*config.xml* naszej aplikacji. Należy dodać taką sekcję:**

    <platform name="android">
        <preference name="android-minSdkVersion" value="9" />
        <preference name="android-targetSdkVersion" value="9" />
    </platform>

Spowoduje to że w pliku manifestu będziemy już mieli zapisane jakiej chcemy używać
wersji, ale nadal nie da się wgrać aplikacji na telefon z powodu:


> What went wrong:
> Execution failed for task ':processDebugManifest'.
> Manifest merger failed : uses-sdk:minSdkVersion 9 cannot be smaller than version 
> 14 declared in library [android:CordovaLib:unspecified:debug]
> Suggestion: use tools:overrideLibrary="org.apache.cordova" to force usage

Wygląda na to że wystarczy dodać w config.xml taki wpis:

    <preference name="tools-overrideLibrary" value="org.apache.cordova" />

lub taki:

    <preference name="tools:overrideLibrary" value="org.apache.cordova" />

Niestety to nie zadziała (a w każdym razie długo debugowałem czemu nie zadziała 
i wygląda na to że nie zadziała i już).

**Jedynym wyjściem jest oszukanie Cordovy w taki sposób że wyedytujemy jej plik
manifestu i zmniejszymy wartość minSdkVersion. Plik ten znajduje się w katalogu
*platforms/android/CordovaLib/AndroidManifest.xml*.**

Po takim zabiegu zobaczymy w końcu **BUILD SUCCESSFUL** i **LAUNCH SUCCESS** co 
oznacza, że możemy się już bawić naszą aplikacją na starszym telefonie.

Przykładowy plik *config.xml* można znaleźć w [repozytorium DDF](https://github.com/maciejlew/drug-dose-framework).

[1]: /2016/03/03/yeoman-idziemy-na-front.html