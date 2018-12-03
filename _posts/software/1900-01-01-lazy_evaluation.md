---
title: Lazy Evaluation
excerpt: 지연 평가 
categories:
  - sw
permalink: /sw/lazy_evaluation
toc: true
toc_sticky: true
---

value가 필요할 때까지 평가(혹은 계산)하지 않는다.

함수형 프로그래밍이나 Tensorflow 예전 버전에서 모델을 구성할 때 접하게 되었다.

반대되는 말은 **Eager Evaluation** 이다.

## Pros
eager evaluation에 비해서 step이 늘어나지는 않으며, 특정 경우에는 eager evaluation 보다 짧아진다.

## Cons
메모리 공간을 더 차지할 수 있다. 또한 연산 과정을 이해하기 어려울 수 있다.
