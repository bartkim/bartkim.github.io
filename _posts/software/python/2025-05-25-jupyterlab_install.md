---
title: Python jupyter lab 설치
excerpt: jupyter lab
categories:
  - python
permalink: /sw/python/jupyter_lap_install
toc: true
toc_sticky: true
---


## 설치
```
python -m pip install jupyterlab
```

## 실행
```
jupyter lab
```

## 다른 virtual env 추가

- 추가할 virutal env를 활성화 하고, ipykernel을 설치한다.
```
python -m pip install ipykernel
```

- virtual env에서 아래 명령어로 커널을 추가한다.
윈도우즈 환경에서는 다른 블로그에서 안내한 --user 옵션등이 불필요하였다.
```
pyhon -m ipykernel --name [가상환경폴더]
```
