---
title: jekyll 설치 및 실행
excerpt: jekyll 설치 
categories:
  - sw
permalink: /sw/jekyll_install
---

github를 사용한 블로그를 개설하고 글 작성을 위해 PC에서 clone을 설치하였다. 


## 설치

- WSL에 ruby를 설치
  - 웹 자료를 참고함
- gem을 통해 jekyll 및 bundler 설치

```bash
gem install jekyll bundler
```


## 실행

```bash
bundle exec jekyll serve
```