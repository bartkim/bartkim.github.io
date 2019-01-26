## functions
* input()
* join()
* len()
* int()
* map()

## 3항 연산
```python
a if test else b
```
```C
test ? a : b
```
## list comprehension
만약 [1, 2, ,3, 4] 중에서 짝수인 2와 4에만 3을 곱하여 담고 싶다면 다음과 같이 리스트 내포 안에 "if 조건문"을 사용할 수도 있다.
```python
a = [1,2,3,4]
result = [num * 3 for num in a if num % 2 == 0]
print(result)
```
[6, 12]
리스트 내포의 일반적인 문법은 다음과 같다. "if 조건문" 부분은 앞의 예제에서 볼 수 있듯이 생략할 수 있다.

[표현식 for 항목 in 반복가능객체 if 조건문]

## slice

reverse
```pyhon
reversed = items[::-1]
```
