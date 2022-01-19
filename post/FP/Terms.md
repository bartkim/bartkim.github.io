Functional Programming 의 용어들



## Option == Maybe
null 사용으로 인한 여러 문제들을 회피하기 위해 사용하는 기법. Functional Programming에서는 Monad로 만들어 사용한다.

```
Option := Some | None
Maybe := Just | Nothing
```

JavaScript와 Haskell에서는 Maybe라는 용어를 사용한다.

C++에서는 _std::optional_ 을 C++17 부터 지원한다. 게다가 C++23에서는 monadic operation인
* _and_then_
* _transform_
* _or_else_

을 지원 예정이다. 

