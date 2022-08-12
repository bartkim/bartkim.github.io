
* [test page](https://bartkim.github.io/2018/12/04/bbb)
* [tensorflow: broadcasting rule](https://bartkim.github.io/2019/01/27/tensorflow_broadcasting_rule)
* [tensorflow: saved model](https://bartkim.github.io/post/tensorflow/saved_model_cli)
* [softmax](https://bartkim.github.io/2019/01/27/softmax)

* [UNICODE encoding](https://bartkim.github.io/2019/03/10/UNICODE_encoding)
* [NoSQL](https://bartkim.github.io/2019/06/20/NoSQL)

* [CMake: Generator](_posts/cmake/generate.md)
* [BUILD gflags in VS2019](post/build_gflags.md)

# 즐겨찾기
#### 개발도구 (CMake)
* [An Introduction to Modern CMake](https://cliutils.gitlab.io/modern-cmake/)
  * 적당한 howto 등의 내용과 함께 안티패턴 등도 소개됨
* [CMake 기본패턴](https://www.tuwlab.com/27270)
  * 오래된 내용이긴 하나 기본적인 내용을 얻을 수 있음
#### 개발도구 (Visual Studio Code)
* [Variables Reference](https://code.visualstudio.com/docs/editor/variables-reference)
  * launch.json 및 tasks.json 파일에서 Task와 Debugging 위한 설정에 사용할 수 있는 사전 정의 변수들의 목록
### 개발도구 (Docker)
  * [어떤 블로그](https://zinirun.github.io/categories/cloud/docker/)
    * 도구에 대한 이해도를 실무적인 차원에서 잘 표현함
### OS Windows
* [Windows Utility Download](https://docs.microsoft.com/en-us/sysinternals/downloads/procmon)
  * MS에서 제공하는 windows의 별의별 유틸리티들

### .NET
* [Announce NET6](https://devblogs.microsoft.com/dotnet/announcing-net-6/)
  * NET6
    * File IO Improvements
    * Faster interface checking and casting : 패턴 매칭의 개선으로 인함?
  * C# 10의 변화
    * file-scoped namespace
    * global using directive
    * System.Linq
    * PublishSingleFile : 릴리즈를 하나의 파일로 archive 하는 건가
    * System.Json : NewtonJson 은 안녕?, source generation
### .NET WPF
  * [PasswordBox data binding](http://blog.functionalfun.net/2008/06/wpf-passwordbox-and-data-binding.html)
    * xaml에서 추가 기능을 제공하는 attribute를 넣는 방법을 알 수 있다.

### 기타
* [HTTP 응답 상태 코드](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)
### 참고 사이트
* [DaleSeo](https://www.daleseo.com/)
  * 페이지 디자인이 무척 깔끔해서 내 블로그에 참고
  * web front-end 관련된 내용도 참고할만 함. 특히 CSS

## 딥러닝
* [YOLO](https://curt-park.github.io/2017-03-26/yolo/)
* [Tensorflow Dataset](https://cyc1am3n.github.io/2018/09/13/how-to-use-dataset-in-tensorflow.html)
* [Tensorflow blog](https://tensorflow.blog/2017/05/10/tf%EC%9D%98-%ED%85%90%EC%84%9C%EC%99%80-%EC%83%81%EC%88%98-%EB%B3%80%EC%88%98-%ED%94%8C%EB%A0%88%EC%9D%B4%EC%8A%A4%ED%99%80%EB%8D%94/)
* [Tensorflow 2.0에서 달라지는 점](https://medium.com/@ljb7977/%ED%85%90%EC%84%9C%ED%94%8C%EB%A1%9C%EC%9A%B0-2-0%EC%97%90%EC%84%9C-%EB%8B%AC%EB%9D%BC%EC%A7%80%EB%8A%94-%EC%A0%90-6e233e0c7fbe)

## Programing Language
* [Lazy Evaluation](post/programming_language/lazy_evaluation.md)

## Docker
* [ARM Docker Containers on x86](https://www.stereolabs.com/docs/docker/building-arm-container-on-x86)
* [docker usage](post/docker_usage.md)

## Config
Windows 시작메뉴 등록
특정 사용자
```
%AppData%\Microsoft\Windows\Start Menu\Programs
```
for all users
```
C:\ProgramData\Microsoft\Windows\Start Menu\Programs
```


## Deep Learning
* [EfficientDet-2](https://jjeamin.github.io/paper/2019/11/23/EfficientDet2/)
* [EfficeintDet 논문리뷰](https://hoya012.github.io/blog/EfficientDet-Review/)
* [Anchor Boxes — The key to quality object detection](https://medium.com/@andersasac/anchor-boxes-the-key-to-quality-object-detection-ddf9d612d4f9)
* [Anchors](https://medipixel.github.io/post/2019-06-14-anchor-target/)
* [딥러닝을 활용한 객체 탐지 알고리즘 이해하기](https://blogs.sas.com/content/saskorea/2018/12/21/%EB%94%A5%EB%9F%AC%EB%8B%9D%EC%9D%84-%ED%99%9C%EC%9A%A9%ED%95%9C-%EA%B0%9D%EC%B2%B4-%ED%83%90%EC%A7%80-%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0/)
* [전자통신동향분석](https://ettrends.etri.re.kr/ettrends/180/#section0)
  * [모바일/임베디드 객체 및 장면 인식 기술동향](https://ettrends.etri.re.kr/ettrends/180/0905180012/)
  * [심층강화학습 라이브러리 기술동향](https://ettrends.etri.re.kr/ettrends/180/0905180008/34-6_87-99.pdf)
* [Deep Learning Object Detection 계보](https://blog.naver.com/phj8498/221772316253)



# Books
* Software Architecture
  * Software Systems Architecture Working with Stakeholders Using Viewpoints and Perspectives 0002/E
    * Rozanski, Nick , Woods, Eoin 지음 | Addison-Wesley Professional | 2011년 11월 04일 | ISBN 9780321718334(032171833X)
    * '뷰 집합' (기능, 정보, 동시성, 개발, 배포, 운영 뷰)를 사용할 것을 주장
  * Documenting Software Architectures Views and Beyond 0002/E
    * Clements, Paul , Bachmann, Felix , Bass, Len 지음 | Addison-Wesley Professional | 2010년 10월 08일 | ISBN 9780321552686(0321552687)
