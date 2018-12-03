---
title: broadcasting rule
excerpt: broadcasting
categories:
  - tensorflow
permalink: /sw/tensorflow/broadcasting
toc: true
toc_sticky: true
---

{% include head_math.html %}

## Rule 1. 행렬과 스칼라의 덧셈은 각 성분에 대한 덧셈이다

$$
\begin{pmatrix} 1 & 2 & 3 \\ 4 & 5 & 6 \\ 7 & 8 & 9 \end{pmatrix} + (10) = \begin{pmatrix} 11 & 12 & 13 \\ 14 & 15 & 16 \\ 17 & 18 & 19 \end{pmatrix}
$$


## Rule 2. 크기가 같은 행렬의 '*' 연산은 성분별 곱셈이다

$$
\begin{pmatrix} 1 & 2 & 3 \\ 4 & 5 & 6 \\ 7 & 8 & 9 \end{pmatrix} + \begin{pmatrix} 10 & 100 & 100 \\ 10 & 100 & 100 \\ 10 & 100 & 100 \end{pmatrix} = \begin{pmatrix} 1 & 2 & 3 \\ 4 & 5 & 6 \\ 7 & 8 & 9 \end{pmatrix}
$$


## Rule 3. 스칼라를 넘겨받는 함수를 행렬에 적용하면 각 성분에 함수가 적용된다

$$
\sigma \begin{pmatrix} 1 \\ 2 \\ 3 \end{pmatrix} = \begin{pmatrix} \sigma(1) \\ \sigma(2) \\ \sigma(3) \end{pmatrix}
$$

