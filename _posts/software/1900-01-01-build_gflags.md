---
title: gflags 빌드하기
excerpt: C++ commandline flag processor
categories:
  - sw
permalink: /sw/gflags_cli
toc: true
toc_sticky: true
---

gflags는 실행파일을 실행할 때 commandline으로 flag를 설정하기 위한 C++ 라이브러리이다.

* [github](https://github.com/gflags/gflags)
* [project page](https://gflags.github.io/gflags/)

참고로 윈도우즈에서 메모리 누수를 탐지하기 위한 디버깅 도구와는 다른 도구이다.

지금은 CMake + VC + ninja 를 사용하여 빌드하기에 그리 필요없는 정보이기는 하나 혹시 모를 경우를 대비하여 남겨둔다.

CMake에서 Generator를 Visual Studio로 설정하여 사용할 때 발생한 문제에 대한 기록이다.


## 빌드하기


#### 1. CMake를 통해서 VS2019 프로젝트 파일을 생성

#### 2. static library를 사용하기 위해서 gflags_static 프로젝트를 사용

#### 3. 프로젝트 파일에서 절대 경로로 된 부분을 $(ProjectDir)을 기준으로 변경

#### 4. library의 사용 모듈과 link시 아래 에러 발생
  > gflags_static.lib(gflags.obj) : error LNK2019: unresolved external symbol __imp_PathMatchSpecA referenced in function "public: class std::basic_string<char,struct std::char_traits<char>,class std::allocator<char> > __cdecl google::`anonymous namespace'::CommandLineFlagParser::ProcessOptionsFromStringLocked(class std::basic_string<char,struct std::char_traits<char>,class std::allocator<char> > const &,enum google::FlagSettingMode)" (?ProcessOptionsFromStringLocked@CommandLineFlagParser@?A0xa4208b8f@google@@QEAA?AV?$basic_string@DU?$char_traits@D@std@@V?$allocator@D@2@@std@@AEBV45@W4FlagSettingMode@3@@Z)

##### 해결방법
gflags_static 프로젝트에 링크할 라이브러리로 'shlwapi.lib'을 추가한다

