---
layout: post
title: 'Jak włączyć tryb debug w cmake?'
date: '2017-03-15 21:00:00'
description: 'Podpowiedź jak włączyć debugi podczas wykonywania Makefile wygenerowanego w cmake'
keywords: daj się poznać 2017, konkurs programistyczny, aplikacja konkursowa, drug dose framework, aplikacja mobilna, pas pediatryczny, dawkowanie leków, framework pistache, rest, cmake, debug
tags:
- DSP2017
- DDS
- C++
img_hosting: "http:/interpc.pl/~mlewinterpc/lion.net.pl/2017/03/14/pistacja/"
---

W tym krótkim wpisie pokażę jak włączyć tryb debug podczas wykonywania Makefile
wygenerowanego przez narzędzie cmake.

### Po co debugować Makefile?

Natrafiłem dziś na dziwny problem podczas budowania [aplikacji DDS][1]. Błędy kompilacji
wskazywały na problem z linkowaniem zewnętrznych bibliotek. Wygenerowany przez
cmake plik Makefile był długi i skomplikowany a ja nie do końca wiedziałem co
w rzeczywistości dzieje się podczas wykonywania polecenia make. Przydałoby się
zobaczyć polecenie przekazywane do g++.

### Konfiguracja cmake

Podczas budowania pliku Makefile, cmake tworzy także plik CMakeCache.txt. W pliku
tym znajduje się dodatkowa konfiguracja dla make. Znajdziesz tam opcję 
*CMAKE_VERBOSE_MAKEFILE* z wartością domyślnie ustawioną na *FALSE*. Aby zobaczyć 
bardziej szczegółowe logi podczas wykonywania polecenia make należy ustawić tę
opcję na *TRUE*.

### Co można zobaczyć?

Z opcją *CMAKE_VERBOSE_MAKEFILE* równą *FALSE* przykładowe wyjście z make wygląda tak:

```
$ make
[100%] Building CXX object CMakeFiles/http_server.dir/src/main.cpp.o
Linking CXX executable http_server
[100%] Built target http_server
$ make
[100%] Built target http_server
$ make clean
```

Z tą samą opcją ustawioną na *TRUE* wyjście wygląda następująco:

```
$ make
/usr/bin/cmake -H/home/user/drug-dose-server -B/home/user/drug-dose-server --check-build-system CMakeFiles/Makefile.cmake 0
/usr/bin/cmake -E cmake_progress_start /home/user/drug-dose-server/CMakeFiles /home/user/drug-dose-server/CMakeFiles/progress.marks
make -f CMakeFiles/Makefile2 all
make[1]: Wejście do katalogu '/home/user/drug-dose-server'
make -f CMakeFiles/http_server.dir/build.make CMakeFiles/http_server.dir/depend
make[2]: Wejście do katalogu '/home/user/drug-dose-server'
cd /home/user/drug-dose-server && /usr/bin/cmake -E cmake_depends "Unix Makefiles" /home/user/drug-dose-server /home/user/drug-dose-server /home/user/drug-dose-server /home/user/drug-dose-server /home/user/drug-dose-server/CMakeFiles/http_server.dir/DependInfo.cmake --color=
make[2]: Opuszczenie katalogu '/home/user/drug-dose-server'
make -f CMakeFiles/http_server.dir/build.make CMakeFiles/http_server.dir/build
make[2]: Wejście do katalogu '/home/user/drug-dose-server'
Linking CXX executable http_server
/usr/bin/cmake -E cmake_link_script CMakeFiles/http_server.dir/link.txt --verbose=1
/usr/bin/c++    -std=c++11 -pthread    CMakeFiles/http_server.dir/src/main.cpp.o  -o http_server -rdynamic -lnet_static 
make[2]: Opuszczenie katalogu '/home/user/drug-dose-server'
/usr/bin/cmake -E cmake_progress_report /home/user/drug-dose-server/CMakeFiles  1
[100%] Built target http_server
make[1]: Opuszczenie katalogu '/home/user/drug-dose-server'
/usr/bin/cmake -E cmake_progress_start /home/user/drug-dose-server/CMakeFiles 0
$ make
/usr/bin/cmake -H/home/user/drug-dose-server -B/home/user/drug-dose-server --check-build-system CMakeFiles/Makefile.cmake 0
/usr/bin/cmake -E cmake_progress_start /home/user/drug-dose-server/CMakeFiles /home/user/drug-dose-server/CMakeFiles/progress.marks
make -f CMakeFiles/Makefile2 all
make[1]: Wejście do katalogu '/home/user/drug-dose-server'
make -f CMakeFiles/http_server.dir/build.make CMakeFiles/http_server.dir/depend
make[2]: Wejście do katalogu '/home/user/drug-dose-server'
cd /home/user/drug-dose-server && /usr/bin/cmake -E cmake_depends "Unix Makefiles" /home/user/drug-dose-server /home/user/drug-dose-server /home/user/drug-dose-server /home/user/drug-dose-server /home/user/drug-dose-server/CMakeFiles/http_server.dir/DependInfo.cmake --color=
make[2]: Opuszczenie katalogu '/home/user/drug-dose-server'
make -f CMakeFiles/http_server.dir/build.make CMakeFiles/http_server.dir/build
make[2]: Wejście do katalogu '/home/user/drug-dose-server'
make[2]: Nie ma nic do zrobienia w 'CMakeFiles/http_server.dir/build'.
make[2]: Opuszczenie katalogu '/home/user/drug-dose-server'
/usr/bin/cmake -E cmake_progress_report /home/user/drug-dose-server/CMakeFiles  1
[100%] Built target http_server
make[1]: Opuszczenie katalogu '/home/user/drug-dose-server'
/usr/bin/cmake -E cmake_progress_start /home/user/drug-dose-server/CMakeFiles 0
$ make clean
make -f CMakeFiles/Makefile2 clean
make[1]: Wejście do katalogu '/home/user/drug-dose-server'
make -f CMakeFiles/http_server.dir/build.make CMakeFiles/http_server.dir/clean
make[2]: Wejście do katalogu '/home/user/drug-dose-server'
/usr/bin/cmake -P CMakeFiles/http_server.dir/cmake_clean.cmake
make[2]: Opuszczenie katalogu '/home/user/drug-dose-server'
make[1]: Opuszczenie katalogu '/home/user/drug-dose-server'
```

Jak widać log jest bardziej szczegółowy. Widać tu przede wszystkim polecenie
przekazywane do g++ (c++) podczas kompilacji, co może bardzo pomóc w dalszym
debugowaniu ewentualnych problemów.



[1]: http://lion.net.pl/2017/03/01/powtorka-z-rozrywki.html