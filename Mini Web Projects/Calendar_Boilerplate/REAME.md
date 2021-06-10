# review

처음 공부할때 왜 안되는지 몰랐었던걸 다시 review

```
function writeSomething(a){
    let Title = document.getElementById("a");
    Title.innerText= a;
}
```

## 처음

위 함수가 겹치는 부분이 많다. dry
그래서 중복되는 부분은 두고 변수부분만 함수에서 text로 받아서 대입하면 될 줄 알았는데 안된다.
왜 안되는지 알아보고 고쳐보자.

## review

저때 writeDate, writeDay함수가 겹치고 DRY(Don't Repeat Yourself)영상(좋은 코드를 작성하는 법)을 보고 고치려고 했었다.
안되는 이유는 함수가 받는 arg를 처음에 아이디 뒤에 "" 이거 없이 넣었고(다시 수정한것)
그리고 innerText에 그냥 a로 넣었는데
이미 내가 위쪽에 day랑 date를 정의 해놨었다.
그래서 처음 코드를 적을때는 a에 day와 date를 넣으면 구현될줄 알았는데 안됐던 이유다.

# makeCalender 함수

table개념도 없었고 날짜를 구현하기 너무 어려워서 블로그를 보고 적었다.
그리고 createElement메소드를 다시 append해서 옮겨 넣는것도 너무 어려웠던 기억이 있다.

# append VS appendChild

//nBody로 하고 하면 appendChild가 적용이 안됨 이유 모르겠음. nBody내부요소로 넣고 싶은데
전에 이렇게 적어두고 사실 내가 해석을 못해서... 아마도 nbody는 new body이고 tbody말고 새로 요소를 만들어서 추가하려고 한 것같다.
과정중에 아마 append 와 appendChild 차이로 적용이 안된 것 같아 차이점 공부

1. append
   노드객체와 DOMString(text)사용가능, 한번에 여러 개 자식요소 설정가능, return값 반환 안함

2. appendChild
   노드객체만 사용가능, 한가지 자식요소만 추가, return값 반환
