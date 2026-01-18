---
title: oat++ (웹/백엔드)
excerpt: oat++ 빌드 
categories:
  - sw
permalink: /sw/oatpp_build
---

임베디드 시스템에서 웹서비스를 제공하기 위해 가볍고 네이티브 모듈들과 쉽게 결합할 수 있는 솔루션으로 검토


## Source
* [https://github.com/oatpp/oatpp](https://github.com/oatpp/oatpp)


## Jetson 등 임베디드를 위한 빌드
```bash
cmake \
	-DCMAKE_BUILD_TYPE=Release \
	-DBUILD_SHARED_LIBS=off \
	-DOATPP_BUILD_TESTS=off \
	-DOATPP_LINK_ATOMIC=on \
	-DOATPP_DISABLE_ENV_OBJECT_COUNTERS=on \
	-DOATPP_DISABLE_POOL_ALLOCATIONS=on \
	-DOATPP_COMPAT_BUILD_NO_THREAD_LOCAL=off
```


## Windows를 위한 빌드