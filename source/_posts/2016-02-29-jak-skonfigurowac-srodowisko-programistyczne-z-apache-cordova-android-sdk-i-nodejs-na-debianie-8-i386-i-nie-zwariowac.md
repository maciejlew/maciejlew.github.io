---
layout: post
title: "Jak skonfigurować środowisko programistyczne z Apache Cordova, Android SKD i NodeJS na Debianie 8 i386 i nie zwariować"
date: 2016-02-29 18:00:00
description: "Opis konfiguracji środowiska składającego się z Apache Cordova, Android SDK i NodeJS na 32-bitowym Debianie"
keywords: "apache cordova, nodejs, środowisko programistyczne, debian, wirtualizacja"
tags:
- JS
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

Opiszę pokrótce jak skonfigurowałem sobie środowisko programistyczne na moim 
laptopie z Debianem 8. Laptop wyposażony jest w procesor o architekturze 32-bitowej
co okaże się dość istotne w całym procesie.

Najpierw przedstawię co chciałem osiągnąć:

 * Apache Cordova
 * Android SDK
 * NodeJS
 * Netbeans IDE

Zaczynamy od pobrania i instalacji NodeJS oraz Android SDK. W repozytorium 
Debiana jest obecnie dostępna nieaktualna, zabugowana, wersja NodeJS pozostaje 
więc jedynie kompilacja ze źródeł. Dodatkowo, nie chcę aby NodeJS był zainstalowany 
globalnie, a jedynie dla mojego użytkownika. Jak się okazuje, dla architektury
32-bitowej w 
[Android Platform Tools w wersji 23.1+ występuje bug](http://stackoverflow.com/a/34219845) 
- należy zrobić "downgrade".

    mkdir -p ~/local/src
    cd ~/local/src
    wget https://nodejs.org/dist/v4.3.1/node-v4.3.1.tar.gz
    wget http://dl.google.com/android/android-sdk_r24.4.1-linux.tgz
    wget https://dl-ssl.google.com/android/repository/platform-tools_r23.0.1-linux.zip
    tar -zxf node-v4.3.1.tar.gz
    tar -zxf android-sdk_r24.4.1-linux.tgz
    unzip platform-tools_r23.0.1-linux.zip
    cd ~/local/src/node-v4.3.1
    ./configure --prefix=~/local
    make
    make install
    mv ~/local/src/android-sdk-linux ~/local/lib
    mv ~/local/src/platform-tools ~/local/lib/android-sdk-linux
    echo 'export PATH=$HOME/local/bin:$PATH' >> ~/.bashrc
    echo 'export PATH=$HOME/local/lib/android-sdk-linux/tools:$PATH' >> ~/.bashrc
    echo 'export PATH=$HOME/local/lib/android-sdk-linux/platform-tools:$PATH' >> ~/.bashrc

W tym momencie można się przelogować aby nowe polecenia stały się widoczne w systemie.

Teraz możemy doinstalować potrzebne komponenty, pamiętając aby przypadkiem nie 
zrobić aktualizacji platform-tools:

    android sdk

Tworzymy wirtualne urządzenie:

    android avd

Możemy teraz doinstalować Apache Cordova:

    npm install -g cordova

Tworzymy przykładowy projekt:

    cd ~/projects/
    cordova create test
    cd test
    cordova platform add android
    cordova run android

Prawdopodobnie otrzymamy komunikat jak poniżej:

> Either one will allow you to use the 32-bit binaries, but please be
aware that these will disappear in a future Android SDK release.
Consider moving to a 64-bit Linux system before that happens.

Aby się go pozbyć robimy taki trik:

    echo 'export ANDROID_EMULATOR_FORCE_32BIT=true' >> ~/.bashrc
    export ANDROID_EMULATOR_FORCE_32BIT=true

Próbujemy ponownie, możemy zobaczyć coś takiego:

> emulator: ERROR: x86 emulation currently requires hardware acceleration!
Please ensure KVM is properly installed and usable.
CPU acceleration status: KVM is not installed on this machine (/dev/kvm is missing).

Instalujemy potrzebne do wirtualizacji paczki:

    aptitude install qemu-kvm libvirt-bin

Jeśli nadal widzimy powyższy komunikat może to oznaczać że wirtualizacja jest
wyłączona z poziomu BIOS lub że procesor wcale nie wspiera wirtualizacji.

Uruchamiamy ponownie maszynę i w BIOS szukamy odpowiedniej opcji, w okolicach
ustawień związanych z CPU.

Po ponownym uruchomieniu komputera polecenie *cordova run android* powinno zadziałać.
Jeśli się tak nie stało i nadal otrzymujemy komunikaty związane z KVM warto 
posłużyć się jednym z poniższych poleceń w celu sprawdzenia co jest grane:

    sudo ls -l /dev/kvm
    egrep '(vmx|svm)' /proc/cpuinfo
    sudo systemctl status libvirtd.service
    sudo dmesg | grep kvm

Na tym etapie mamy już wszystko potrzebne do uruchomienia projektu, pozostaje 
skonfigurowanie IDE.

Niestety Netbeans 8.1 nie może poradzić sobie z odnalezieniem Apache Cordova
i nie znalazłem żadnego rozwiązania tego problemu. NodeJS oraz NPM można natomiast
skonfigurować wybierając w NB opcję "Tools > Options > HTML/JS > NodeJS".

Mam nadzieję że ten opis pomoże osobom zainteresowanym programowaniem urządzeń
mobilnych w konfiguracji swojego środowiska. Ilość trudności jakie napotkałem
podczas uruchamiania tego zestawu narzędzi popchnął mnie do refleksji, że czasy
procesorów 32 bitowych powoli mijają i niebawem, chcąc nie chcąc, trzeba będzie
się przesiąść na ich następców, choćby po to aby odpalić sobie jakieś SDK...

