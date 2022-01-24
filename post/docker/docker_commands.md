# Docker Commands

## Concept
docker의 image와 container의 관계는 program과 process의 관계와 유사하다. image는 실행할 내용을 담은 패키지이고 container는 이를 실행시킨 것이다.

```text
            pull         run
docker hub -----> image -----> container
```

이 개념을 가지고 명령을 이해하는 것이 도움이 된다.

ubuntu에서 docker 명령을 실행하기 위해서는 관리자 권한이 필요하다. 따라서 sudo를 항상 붙여서 표기하였다.


## image 관리 명령어

image 관련 명령은 `docker image {COMMAND}` 를 기본으로 한다.

##### image 내려받기
[docker hub](https://hub.docker.com/search?type=image)로부터 image를 내려받는다.

```bash
$ sudo docker pull {image}:{tag}
```

##### image 조회하기
```bash
$ sudo docker image ls
```

##### image 삭제하기
```bash
$ sudo docker image rm {image}:{tag}
$ sudo docker image rm {image id}
```


## container 관리 명령어

container 관련 명령은 `docker container {COMMAND}`를 기본으로 한다.

##### 새 container 실행하기
image로부터 새 container를 실행시킨다.

아래는 실행 예 이다.
```bash
$ sudo docker container run     \
    -d                          \   # 백그라운드로 실행
    -it                         \   # pseudo tty와 stdin을 open
    --rm                        \   # 명령 종료시 자동으로 contariner 삭제
    -p {host port}:{container port} \ # container의 port를 publish
    -v {host dir}:{container dir}   \ # host dir을 container의 특정경로에 mount
    --name {container name}     \   # 실행될 container 이름
    {image}                     \   # 실행시킬 image. image:tag or image_id
    {command}                       # container 내부의 실행시킬 명령어
```

아래 옵션은 따로 알아보자.
* `--link` : 두 container를 연결한다.
* `-v`: host의 파일 시스템을 container의 파일 시스템에 mount한다.
* `-p`: container의 port를 publish한다. [참고](https://docs.docker.com/engine/reference/commandline/run/#publish-or-expose-port--p---expose)


##### container에 접속하기
container의 표준 입출력(stdin, stdout, stderr)에 연결한다.
```bash
$ sudo docker container attach {container id or name}
```

##### container stop/start/restart 하기

```bash
$ sudo docker container stop {container id or name}
$ sudo docker container start {container id or name}
$ sudo docker container restart {container id or name}
```

##### container 목록 조회하기
ps, ls, list 모두 같은 명령이다.
```bash
$ sudo docker container ls -a
```

##### container 내부의 명령 실행하기
```bash
$ sudo docker container exec    \
    {options}                   \
    {command}
```
option은 `-d`, `-i`, `-t`, `-e`, `-w` 등이 있다. run 명령의 옵션과 비슷하며 자세한 것은 [여기](https://docs.docker.com/engine/reference/commandline/exec/#options)를 참고하자.

##### container를 삭제하기
```bash
$ sudo docker container rm {container id or name}
```




## Examples

다음의 예제에서는 python 3.10 image를 docker hub로 부터 다운로드 받아 container로 실행시킨 후 버전을 확인하고 다시 image를 삭제하는 예제이다.

```bash
$ sudo docker image pull python:3.10

$ sudo docker container run -d -it --name python_test python:3.10 /bin/bash
$ sudo docker container ls -a
CONTAINER ID   IMAGE         COMMAND       CREATED          STATUS          PORTS     NAMES
da796b77e4b6   python:3.10   "/bin/bash"   34 seconds ago   Up 33 seconds             python_test

$ sudo docker container attach python_test # container로 접속됨. 프롬프트가 변경됨

$ python --version
Python 3.10.2
$ exit  # container에서 빠져나옴

$ sudo docker container rm python_test
$ sudo docker container ls -a
CONTAINER ID   IMAGE     COMMAND   CREATED   STATUS    PORTS     NAMES

$ sudo docker image rm python_test
```
