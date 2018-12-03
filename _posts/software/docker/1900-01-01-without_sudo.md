---
title: sudo 없이 docker 명령 실행하기
excerpt: 매번 sudo 입력
categories:
  - docker
permalink: /sw/docker/without_sudo
#toc: true
#toc_sticky: true
---

docker 명령은 기본적으로 특권모드(privileged mode) 실행 권한이 필요하다. 이는 관리자 권한이 필요하다는 의미로 항상 docker 명령앞에 sudo를 붙여줘야 한다. 만약 이것이 불편하다면 아래와 같이 현재 사용자를 `docker` 그룹에 추가하면 된다.

```shell
 $ sudo usermod -aG docker $USER
```

`$USER` 는 현재 로그인 사용자의 id가 저장된 환경변수이다.
그룹에 추가하고 난 뒤 로그아웃 후 다시 재로그인 하면 `sudo` 없이 docker 명령이 잘 실행됨을 볼 수 있다.


사실 4글자 정도 더 타이핑하는 것에 대해 큰 불편함 없이 sudo를 입력하고 사용했었는데, VSCode에서 docker를 사용하면서 어쩔 수 없이 추가하였다.
