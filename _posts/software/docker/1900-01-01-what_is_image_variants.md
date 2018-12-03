---
title: Image Variants
excerpt: alpline? slim?
categories:
  - docker
permalink: /sw/docker/image_variant
toc: true
toc_sticky: true
---

나는 아주 가끔 docker를 사용한다.
그런데 모처럼 이미지를 하나 받으러 hub.docker.com 에 갔다가 도대체 어떤 것을 받아야 할지 혼란스러움을 느꼈다.

```shell
image:<version>
```
  

여기까지는 알겠다. 특정 버전을 다운받고 싶으면 버전을 명시하라는 말이라는 것을.
그런데...

```shell
image:<version>-alpine
image:<version>-slim
image:<version>-windowsservercore
```

이렇게 뒤에 더 붙은 -apline, -slim, -windowsservercore 는 무엇이란 말인가.
우선 이런 것들은 tag라고 하며 이들이 무엇을 뜻하는지 찾아봤다.

## image:\<version>
Full Official Image이며, Debian 배포판 중 가장 최신 안정버전을 기반으로 만들어진 이미지이다. 어떤 것을 써야할 지 모르겠다면, 이것을 선택하면 된다.

주로 많이 사용하는 Ubuntu 배포판은 Debian 배포판을 기반으로 하므로 이를 사용하면 된다.

## image:\<version>-bullseye, -stretch, -buster, -jessie
bullseye, stretch, buster, jessie는 Debian 배포판의 코드 네임이며 원하는 버전이 있다면 이를 선택하면 된다.

> 모르는 이름이 tag에 붙었다고 하면 Debian 배포판 릴리즈 코드 네임을 살펴보자.

### -alpine
[alpine](https://alpinelinux.org/)은 linux 배포판 중 하나로 작고 간단한 것을 특징으로 하며, 특히 container 환경을 염두에 두고 만들어진 배포판이다.
다른 배포판에 비해 많은 것들이 생략되어 있으므로, linux 배포판의 특정 모듈에 의존성이 있는 경우 호환성이 문제가 되기도 한다. 예를들면 alpine에는 glibc 라이브러리 대신 musl libc가 포함되어 있다.

image의 용량이 작은 대신 호환성에 문제가 있을 수 있으므로 주의가 필요하다. 

### -slim
최소 패키지를 설치한 image이다. 당연히 full version에 비해 용량이 작다는 장점이 있지만, 막상 필요한 부분이 설치에서 제외되어 있을 가능성이 있으므로 주의가 필요하다.

### -windowsservercore
Windows Server를 위한 image이다.


## 용량 비교

| python | 3.8.3       | 934MB |
| python | 3.8.3-slim  | 165MB |
| python | 3.8.3-aline | 78.9MB |


## 선택 가이드 라인
* 뭐가 뭔지 모르겠다면, 우선 official full image를 사용한다.
* 설치 용량을 고민해야 하고, 최소 패키지로 동작이 가능하다는 것을 알면 -slim 버전을 이용한다. 
* 설치 용량이 크게 고려되어야 한다면, -alpine 버전을 이용한다. 단, 테스트를 많이 해봐야 한다.


## References
* https://medium.com/swlh/alpine-slim-stretch-buster-jessie-bullseye-bookworm-what-are-the-differences-in-docker-62171ed4531d
