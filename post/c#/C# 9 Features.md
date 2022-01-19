# New Features of C# 9
https://docs.microsoft.com/en-us/dotnet/csharp/whats-new/csharp-9


## Record Type
Immutable 데이터를 언어차원에서 쉽고 편하게 정의 및 사용할 수 있도록 제공하기 위해 추가 되었다.

물론 기존의 class와 struct를 사용하여 목적을 달성할 수 있는데 굳이 언어차원에서 추가할 필요가 있었을까?
record가 없었을 때 이를 구현하기 위한 방법으로는
1. 일반 class로 구현한 후 불변성(Immutable)을 암묵적인 약속을 기반으로 사용한다. 즉, 변경할 수 있지만 안한다.

C#에서도 함수형 프로그래밍(Functional Programming) 개념 적용을 확대해 나가기 위함으로 보인다.



#### References
- https://docs.microsoft.com/en-us/dotnet/csharp/whats-new/csharp-9#record-types
- https://www.daveabrock.com/2020/07/06/c-sharp-9-deep-dive-records/

## Static Anonymous Function
https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/proposals/csharp-9.0/static-anonymous-functions

람다(lambda)식과 같은 익명 함수(anonymos function)에서 불필요한 주변 컨텍스트 캡쳐를 방지하기 위해 함수 앞에 _static_ 을 붙일 수 있다.
이 경우 익명 함수 내에서 인스턴스 멤버에 대한 접근은 차단되나, static 멤버와 const 정의값은 접근 가능하다.

static을 붙이지 않아도 프로그램의 의미가 달라지지 않으므로 해당 함수의 참조 범위를 쉽게 파악할 수 있는 목적으로 사용할 수 있겠다.

#### Example

```csharp
    class ClassA
    {
        int mInstanceVariable;
        static int sStaticVariable;
        const int CONSTANT_VALUE = 1;

        void DoSomething()
        {
            const int s = 100;

            var fooFunc = static (int a) =>
            {
                var v1 = mInstanceVariable;   // 컴파일 에러
                var v2 = sStaticVariable;     // 참조 가능
                var v3 = CONSTANT_VALUE;      // 참조 가능
                var v4 = s;                   // 참조 가능

            };
        }
    }
```
