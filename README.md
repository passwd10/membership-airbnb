# javascript-w1-airbnb

스프린트 1주차 웹 프로젝트 - airbnb

## 요구사항

- [x] 로그인, 회원가입 페이지를 구현한다, 템플릿(pug) 을 사용한다.
- [x] 로그인 / 로그아웃 기능을 구현한다.
- [x] 로그인과 로그아웃을 구현하기 위해서 쿠키와 세션을 이용한다.
- [x] passport나 express-session 등의 외부 모듈은 사용하지 않고, 직접 세션을 구현한다.
- [x] session은 메모리에 저장한다. DB등의 별도 저장장치를 사용하지 않는다.
- [x] Node.js와 Express를 사용한다.
- [x] 회원가입 기능을 구현한다.
- [x] 간단한 파일 기반의 데이터베이스를 직접 구현한다.
- [x] 세션 middleware로 구현한다.
- [x] 회원가입 요소를 구체화한다.
- [x] 패스워드 저장기법을 고민해 보고 구현한다.
- [x] 로그인 / 회원가입 모달창으로 구현한다.
- [x] middleware로 로그인상태 관리
- [x] 세션 expire 적용
- [x] 회원가입시 로그인상태 유지
- [ ] 예약 검색기능을 구현한다.
- [ ] 검색결과 페이지를 구현한다.
- [ ] 배포는 heroku 서비스를 이용한다.

commit : git의 유일한 객체
branch : 커밋에 대한 참조
HEAD : 현재 작업중인 branch에 대한 포인터(즉 참조의 참조)

커밋메시지: 왜? 무엇을? 어떻게? 제목+내용으로 두줄로 적기

merge rebase 차이

merge : branch두개를 합쳐서 새로운 commit을 만들어 내는것
rebase : 내 변경사항을 들어서 master위에 얹는것 (깔끔하게 된다)

git rebase master
git checkout master
git merge hell

conflict났을 때 뒤에있는 변경사항으로 옵션을 선택하게한다

git log --oneline --decorate --graph --all
