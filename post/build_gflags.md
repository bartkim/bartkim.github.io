CMake를 통해서 VS2019 프로젝트 파일을 생성한다.
* static library를 사용하기 위해서 gflags_static 프로젝트를 사용
* 프로젝트 파일에서 절대 경로로 된 부분을 $(ProjectDir)을 기준으로 변경
* library의 사용 모듈과 link시 아래 에러 발생
  ```
  gflags_static.lib(gflags.obj) : error LNK2019: unresolved external symbol __imp_PathMatchSpecA referenced in function "public: class std::basic_string<char,struct std::char_traits<char>,class std::allocator<char> > __cdecl google::`anonymous namespace'::CommandLineFlagParser::ProcessOptionsFromStringLocked(class std::basic_string<char,struct std::char_traits<char>,class std::allocator<char> > const &,enum google::FlagSettingMode)" (?ProcessOptionsFromStringLocked@CommandLineFlagParser@?A0xa4208b8f@google@@QEAA?AV?$basic_string@DU?$char_traits@D@std@@V?$allocator@D@2@@std@@AEBV45@W4FlagSettingMode@3@@Z)
  ```
  * 해결방법
    * gflags_static 프로젝트에 아래처럼 'shlwapi.lib'을 추가한다
    > Add “shlwapi.lib” to “Project - Property - Linker - Input - Additional Dependencies”.

