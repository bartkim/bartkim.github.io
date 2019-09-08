# CMake eclipse project file 생성하기

여러가지 builder로 생성가능하다.
* Eclipse CDT4 - MinGW Makefiles
* Eclipse CDT4 - NMake Makefiles
* Eclipse CDT4 - Ninja
* Eclipse CDT4 - Unix Makefiles

다음은 make 를 builder로 생성하는 예제이다.
```bash
cmake -G"Eclipse CDT4 - Unix Makefiles" -D_ECLIPSE_VERSION=4.12
```

참고: [Eclipse Generators from cmake.org](https://cmake.org/cmake/help/v3.10/generator/Eclipse%20CDT4.html)
