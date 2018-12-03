var store = [{
        "title": "소프트웨어 장인",
        "excerpt":"산드로 만쿠소 지음 | 권오인 옮김 길벗출판사 책가게 사이트의 알고리즘에 추천 책으로 떴는데, 개발자 사이에서도 많이들 권장도서로 알려진 책인가보다. 개인적으로 한가지 속은 것은 ‘로버트 C.마틴 시리즈’라고 묶어 소개해서 저자가 당연히 밥아저씨인 줄 알고 샀는데, 그렇지 않았다는 거… 그냥 추천사를 썼다. ‘장인’이라는 칭호는 단순 전문가 이상의 어떤 의미를 지니는 단어로 다가온다....","categories": ["book it"],
        "tags": [],
        "url": "/book/it/swcraftsman",
        "teaser": null
      },{
        "title": "정리할 것들",
        "excerpt":"Software Architecture Software Systems Architecture Working with Stakeholders Using Viewpoints and Perspectives 0002/E Rozanski, Nick , Woods, Eoin 지음 Addison-Wesley Professional 2011년 11월 04일 ISBN 9780321718334(032171833X) ‘뷰 집합’ (기능, 정보, 동시성, 개발, 배포, 운영 뷰)를 사용할 것을 주장 Documenting Software Architectures Views and Beyond 0002/E Clements, Paul , Bachmann, Felix...","categories": ["book it"],
        "tags": [],
        "url": "/book/it/todo_review",
        "teaser": null
      },{
        "title": "URL 체계",
        "excerpt":"┌────────────────────────────────────────────────────────────────────────────────────────────────┐ │ href │ ├──────────┬──┬─────────────────────┬────────────────────────┬───────────────────────────┬───────┤ │ protocol │ │ auth │ host │ path │ hash │ │ │ │ ├─────────────────┬──────┼──────────┬────────────────┤ │ │ │ │ │ hostname │ port │ pathname │ search │ │ │ │ │ │ │ │ ├─┬──────────────┤ │ │ │ │ │ │ │ │...","categories": ["sw"],
        "tags": [],
        "url": "/sw/url",
        "teaser": null
      },{
        "title": "gflags 빌드하기",
        "excerpt":"gflags는 실행파일을 실행할 때 commandline으로 flag를 설정하기 위한 C++ 라이브러리이다. github project page 참고로 윈도우즈에서 메모리 누수를 탐지하기 위한 디버깅 도구와는 다른 도구이다. 지금은 CMake + VC + ninja 를 사용하여 빌드하기에 그리 필요없는 정보이기는 하나 혹시 모를 경우를 대비하여 남겨둔다. CMake에서 Generator를 Visual Studio로 설정하여 사용할 때 발생한 문제에...","categories": ["sw"],
        "tags": [],
        "url": "/sw/gflags_cli",
        "teaser": null
      },{
        "title": "Lazy Evaluation",
        "excerpt":"value가 필요할 때까지 평가(혹은 계산)하지 않는다.   함수형 프로그래밍이나 Tensorflow 예전 버전에서 모델을 구성할 때 접하게 되었다.   반대되는 말은 Eager Evaluation 이다.   Pros  eager evaluation에 비해서 step이 늘어나지는 않으며, 특정 경우에는 eager evaluation 보다 짧아진다.   Cons  메모리 공간을 더 차지할 수 있다. 또한 연산 과정을 이해하기 어려울 수 있다.  ","categories": ["sw"],
        "tags": [],
        "url": "/sw/lazy_evaluation",
        "teaser": null
      },{
        "title": "메모",
        "excerpt":"어디서 듣거나 읽고 적어두었는데, 그 컨택스트와 출처를 잃어버린 것들을 우선 남겨둔다. Pure Fabrication 책임을 할당하기 위해 창조되는 도메인과 무관한 인공적인 객체 어떤 행동을 책임질 마땅한 도메인 개념이 존재하지 않으면 Pusre Fabrication을 추가하고 이 객체에게 책임을 할당하라 객체지향이 실세계의 모방이라는 말은 옳지 않다 책임 할당 ‘책임을 수행하는데 필요한 정보를 가장 많이...","categories": ["sw_arch"],
        "tags": [],
        "url": "/sw/arch/memo",
        "teaser": null
      },{
        "title": "어디선가 들어봄직한 SW 유명인사의 말들",
        "excerpt":"모듈화  객체 지향 언어가 개발자에게 쥐어준 가장 강력한 무기는 다형성을 안전하게 쓸 수 있게 된 것입니다.   다형성이 안전해진 덕분에 개발자는 본인의 시스템이 의존하고 있는 모든 구현체를 교체 가능한 플러그인으로 만들어 버릴 수 있죠.   이렇게 할 방법이 있다는 것을 알면서 시스템을 이런식으로 디자인하지 않을 이유가 있나요?   Uncle Bob  ","categories": ["sw_arch"],
        "tags": [],
        "url": "/sw/arch/quotes",
        "teaser": null
      },{
        "title": "New Features of C# 10",
        "excerpt":"https://docs.microsoft.com/en-us/dotnet/csharp/whats-new/csharp-10      file-scoped namespace   global using directive   System.Linq   PublishSingleFile : 릴리즈를 하나의 파일로 archive 하는 건가   System.Json : NewtonJson 은 안녕?, source generation  ","categories": ["c#"],
        "tags": [],
        "url": "/sw/csharp/new_feature_10",
        "teaser": null
      },{
        "title": "New Features of C# 9",
        "excerpt":"https://docs.microsoft.com/en-us/dotnet/csharp/whats-new/csharp-9 Record Type Immutable 데이터를 언어차원에서 쉽고 편하게 정의 및 사용할 수 있도록 제공하기 위해 추가 되었다. 물론 기존의 class와 struct를 사용하여 목적을 달성할 수 있는데 굳이 언어차원에서 추가할 필요가 있었을까? record가 없었을 때 이를 구현하기 위한 방법으로는 일반 class로 구현한 후 불변성(Immutable)을 암묵적인 약속을 기반으로 사용한다. 즉, 변경할 수...","categories": ["c#"],
        "tags": [],
        "url": "/sw/csharp/new_feature_9",
        "teaser": null
      },{
        "title": "객체가 rvalue인 경우와 lvalue인 경우 다른 함수로 overload 하기",
        "excerpt":"함수 선언 뒤에 &amp;, &amp;&amp; 을 붙임으로써 각각 lvalue, rvalue 인 경우 사용할 함수로 overload 시킬 수 있다. 예제 코드 struct test { void f() &amp; { std::cout &lt;&lt; \"lvalue object\\n\"; } void f() &amp;&amp; { std::cout &lt;&lt; \"rvalue object\\n\"; } }; int main() { test t; t.f(); // lvalue...","categories": ["cpp"],
        "tags": [],
        "url": "/sw/cpp/rvalue_lvalue_func_overload",
        "teaser": null
      },{
        "title": "find_package 사용하기",
        "excerpt":"CMake의 모든 것을 파악하고 쓰는 글이 아니다. 단편적인 정보들을 나열 할 수 있지만, 우선 당장의 닥친 문제들과 해결 방법들을 적어본다. CMake를 사용하여 빌드 시스템을 구축 중이다. Open Source를 포함한 다수의 모듈들을 사용하는데 이들의 종속성을 쉽게 관리하는 방법들이 제공된다. 배경 CMake로 빌드되어 제공되는 패키지 중에는 이를 사용하는 다른 빌드에서 쉽게 사용할...","categories": ["cmake"],
        "tags": [],
        "url": "/sw/cmake/find_package",
        "teaser": null
      },{
        "title": "알아볼 MongoDB 기능들",
        "excerpt":"우선 키워드만 적어두고 차차 알아보자.   TTL Index  https://rastalion.me/mongodb-index-6-ttl-index/   Time Series  Change Streams  ","categories": ["database"],
        "tags": [],
        "url": "/sw/database/mongo_features_to_know",
        "teaser": null
      },{
        "title": "Docker Command",
        "excerpt":"Docker Commands Concept docker의 image와 container의 관계는 program과 process의 관계와 유사하다. image는 실행할 내용을 담은 패키지이고 container는 이를 실행시킨 것이다. pull run docker hub -----&gt; image -----&gt; container 여기서는 image를 대상으로 하는 명령과 conainer를 대상으로 하는 명령으로 나누어 간단히 알아본다. ubuntu에서 docker 명령을 실행하기 위해서는 관리자 권한이 필요하다. 따라서 sudo를...","categories": ["docker"],
        "tags": [],
        "url": "/sw/docker/command",
        "teaser": null
      },{
        "title": "Image Variants",
        "excerpt":"나는 아주 가끔 docker를 사용한다. 그런데 모처럼 이미지를 하나 받으러 hub.docker.com 에 갔다가 도대체 어떤 것을 받아야 할지 혼란스러움을 느꼈다. image:&lt;version&gt; 여기까지는 알겠다. 특정 버전을 다운받고 싶으면 버전을 명시하라는 말이라는 것을. 그런데… image:&lt;version&gt;-alpine image:&lt;version&gt;-slim image:&lt;version&gt;-windowsservercore 이렇게 뒤에 더 붙은 -apline, -slim, -windowsservercore 는 무엇이란 말인가. 우선 이런 것들은 tag라고 하며...","categories": ["docker"],
        "tags": [],
        "url": "/sw/docker/image_variant",
        "teaser": null
      },{
        "title": "sudo 없이 docker 명령 실행하기",
        "excerpt":"docker 명령은 기본적으로 특권모드(privileged mode) 실행 권한이 필요하다. 이는 관리자 권한이 필요하다는 의미로 항상 docker 명령앞에 sudo를 붙여줘야 한다. 만약 이것이 불편하다면 아래와 같이 현재 사용자를 docker 그룹에 추가하면 된다. $ sudo usermod -aG docker $USER $USER 는 현재 로그인 사용자의 id가 저장된 환경변수이다. 그룹에 추가하고 난 뒤 로그아웃 후...","categories": ["docker"],
        "tags": [],
        "url": "/sw/docker/without_sudo",
        "teaser": null
      },{
        "title": "Functional Programming 의 용어들",
        "excerpt":"Option == Maybe  null 사용으로 인한 여러 문제들을 회피하기 위해 사용하는 기법. Functional Programming에서는 Monad로 만들어 사용한다.   Option := Some | None Maybe := Just | Nothing   JavaScript와 Haskell에서는 Maybe라는 용어를 사용한다.   C++에서는 std::optional 을 C++17 부터 지원한다. 그리고 C++23부터 아래와 같은 monadic operation을 지원한다.     and_then   transform   or_else   ","categories": ["fp"],
        "tags": [],
        "url": "/sw/fp/terms",
        "teaser": null
      },{
        "title": "리눅스의 디렉토리들",
        "excerpt":"직접 작성한 것은 아니고 어디서 가져오거나 책에서 베낀것 같은데 출처를 잊어버렸다. /bin 일반 유저가 사용할 수 있는 기본적인 명령어나 프로그램을 담고 있는 디렉토리입니다. /boot 시스템 부팅에 필요한 파일들을 담고 있는 디렉토리입니다. /dev 리눅스에서는 컴퓨터에 부착된 물리적인 장치들을 디바이스 드라이버를 거쳐 파일 형태로 접근 가능합니다. 그러한 장치들을 나타내는 파일들을 담고 있는...","categories": ["linux"],
        "tags": [],
        "url": "/sw/linux/directories",
        "teaser": null
      },{
        "title": "Saved Model에서 Input/Output Tensor 정보 얻기",
        "excerpt":"input/output tensor 정보 얻기 아래와 같은 명령을 통해 input/output tensor의 정보를 얻을 수 있다. &gt; python scripts\\saved_model_cli.exe show ^ --dir {SAVED_MODEL_DIR} ^ --tag_set {TAG_SET} ^ --signature_def {SIGNITURE_DEF} 명령의 결과로 다음과 같은 정보를 얻을 수 있다. tensor data type tensor shape tensor name The given SavedModel SignatureDef contains the following input(s):...","categories": ["tensorflow"],
        "tags": [],
        "url": "/sw/tensorflow/inout_tensor_from_saved_model",
        "teaser": null
      },{
        "title": "Windows 시작메뉴에 프로그램 등록하기",
        "excerpt":"시작메뉴에 특정 프로그램 등록하기 위해서는 아래 경로에 원하는 프로그램의 바로가기를 만들어 넣으면 된다.   특정 사용자  %AppData%\\Microsoft\\Windows\\Start Menu\\Programs   모든 사용자  C:\\ProgramData\\Microsoft\\Windows\\Start Menu\\Programs  ","categories": ["windows"],
        "tags": [],
        "url": "/sw/windows/startmenu",
        "teaser": null
      },{
        "title": "Python Study",
        "excerpt":"나는 동적 타입 언어가 힘들다. functions input() join() len() int() map() 삼항 연산 영어 어순을 쓰는 사람에게는 readability가 높은 것 같지만, 한국어 어순에는 어색하다. Python에서 삼항 연산 a if test else b C에서 삼항 연산 test ? a : b List Comprehension 만약 [ 1, 2, ,3, 4 ] 중에서...","categories": ["python"],
        "tags": [],
        "url": "/sw/python/study",
        "teaser": null
      },{
        "title": "Softmax Function",
        "excerpt":"\\[0 \\le \\mathit{P}_i(x_1,x_2) \\le 1 \\quad (i = 1,2,3) \\\\ \\\\ \\mathit{P}_1(x_1,x_2) + \\mathit{P}_2(x_1,x_2) + \\mathit{P}_2(x_1,x_2) = 1 \\\\ \\\\ f_i(x_1,x_2) &gt; f_j(x_1,x_2) \\Rightarrow \\mathit{P}_i(x_1,x_2) &gt; \\mathit{P}_j(x_1,x_2) \\quad (i,j = 1,2,3) \\\\ \\\\ P_i(x_1,x_2) = \\frac{e^{f_i(x_1,x_2)}}{e^{f_1(x_1,x_2)} + e^{f_2(x_1,x_2)} + e^{f_3(x_1,x_2)}} \\quad (i = 1,2,3)\\] 좌표 $ (x_1,x_2,\\cdots,x_M) $ 을 가진...","categories": ["ai"],
        "tags": [],
        "url": "/sw/ai/softmax",
        "teaser": null
      },{
        "title": "broadcasting rule",
        "excerpt":"Rule 1. 행렬과 스칼라의 덧셈은 각 성분에 대한 덧셈이다 \\[\\begin{pmatrix} 1 &amp; 2 &amp; 3 \\\\ 4 &amp; 5 &amp; 6 \\\\ 7 &amp; 8 &amp; 9 \\end{pmatrix} + (10) = \\begin{pmatrix} 11 &amp; 12 &amp; 13 \\\\ 14 &amp; 15 &amp; 16 \\\\ 17 &amp; 18 &amp; 19 \\end{pmatrix}\\]...","categories": ["tensorflow"],
        "tags": [],
        "url": "/sw/tensorflow/broadcasting",
        "teaser": null
      },{
        "title": "Weight",
        "excerpt":"              ","categories": ["me"],
        "tags": [],
        "url": "/book/me/weight",
        "teaser": null
      },{
        "title": "NoSQL",
        "excerpt":"Visual Guides to NoSQL Systems  3개의 꼭지점 중에 두개만 선택할 수 있다.     Availability   Consistency   Partition Tolerance    from http://blog.nahurst.com/visual-guide-to-nosql-systems   더 읽을거리     NoSQL            What Is NoSQL?       Why NoSQL?          ","categories": ["database"],
        "tags": [],
        "url": "/sw/database/nosql",
        "teaser": null
      }]
