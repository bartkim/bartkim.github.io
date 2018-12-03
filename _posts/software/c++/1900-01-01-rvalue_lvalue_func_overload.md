---
title: 객체가 rvalue인 경우와 lvalue인 경우 다른 함수로 overload 하기
excerpt: 함수 선언 끝에 붙은 &, &&은 뭐지?
categories:
  - cpp
permalink: /sw/cpp/rvalue_lvalue_func_overload
toc: true
toc_sticky: true
---

함수 선언 뒤에 &, && 을 붙임으로써 각각 lvalue, rvalue 인 경우 사용할 함수로 overload 시킬 수 있다.

## 예제 코드
```cpp
struct test {
  void f() &  { std::cout << "lvalue object\n"; }
  void f() && { std::cout << "rvalue object\n"; }
};

int main() {
  test t;
  t.f();      // lvalue
  test().f(); // rvalue
}
```
출력은 다음과 같다.
```
lvalue object
rvalue object
```

## 활용
함수 chain을 사용한 builder 패턴에서 사용할 수 있다.
```cpp
auto foo = Foo::create()
    .set_param1(1)
    .set_param2("aa");
```

## 참고 사이트
* [const& , & and && specifiers for member functions in C++](https://stackoverflow.com/questions/28066777/const-and-specifiers-for-member-functions-in-c)
* [What is the "rvalue reference for *this" proposal?](https://stackoverflow.com/questions/8610571/what-is-the-rvalue-reference-for-this-proposal)