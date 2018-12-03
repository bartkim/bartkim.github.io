---
title: find_package 사용하기
excerpt: 다른 패키지를 쉽게 사용할 수 있다 
categories:
  - cmake
permalink: /sw/cmake/find_package
toc: true
toc_sticky: true
---


> CMake의 모든 것을 파악하고 쓰는 글이 아니다.
> 단편적인 정보들을 나열 할 수 있지만, 우선 당장의 닥친 문제들과 해결 방법들을 적어본다.

CMake를 사용하여 빌드 시스템을 구축 중이다. Open Source를 포함한 다수의 모듈들을  사용하는데 이들의 종속성을 쉽게 관리하는 방법들이 제공된다.

## 배경
CMake로 빌드되어 제공되는 패키지 중에는 이를 사용하는 다른 빌드에서 쉽게 사용할 수 있도록 해당 패키지의 빌드 설정, 타겟, 헤더 경로 등의 정보를 제공한다. 이는 주로 패키지 하위의 `cmake` 디렉토리에 존재한다.

이를 `find_package()`를 통해서 해당 패키지의 정보를 읽어 사용할 수 있는데, 몇가지 문제를 겪었다.

### 문제1. 패키지 검색 경로 문제
이렇게 하면 쉽게 찾아질 줄 알았다.
```cmake
find_package(Protobuf REQUIRED)
```
결과는
```cmake
message("protoc:        " PROTOC_COMMAND)
message("include dir:   " Protobuf_INCLUDE_DIR)
message("libraries dir: " Protobuf_LIBRARIES)
```
찾고자 하는 패키지가 시스템 라이브러리 경로에 존재 하지 않는다면 검색될 수 있도록 검색 경로에 추가해 주어야 한다.
`CMAKE_PREFIX_PATH`
```cmake
li
set(CMAKE)
```


CMAKE_PRE
### 문제2 CONFIG mode
### 문제2 MODULE mode

## 비교
내가 사용하려는 패키지가 소스와 함께 제공되고 CMake로 빌드가 가능한 경우는 `add_subdirectory()`를 통해 빌드에 포함하고 의존성을 기술하여 사용할 수 있다.

`find_package()`와 다른점은 사용하고자 하는 패키지를 이미 빌드되어 있는 상태에서 사용하느냐, 빌드도 포함하여 수행하느냐의 차이가 있다.


## Refenreces
* [CMake Using Dependencies Guid](https://cmake.org/cmake/help/latest/guide/using-dependencies/index.html)
