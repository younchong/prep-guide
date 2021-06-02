# 공부한것

정규표현식

```
function strip(bandName){
    return bandName.replace(/^(a |the |an )/i, '').trim();
}
```

전에 한번 공부했지만 기억이 휘발됐었다.
^ 입력의 시작 부분에 대응
| or
i 대소문 구분없이 검색

trim() 함수
문자 식을 정리
" hello " >>>> "hello"

sort()함수
a>b return 1
return -1
내림차순 정리

map() 배열 내 모든 요소에 함수 호출결과를 적용해서 새로운 배열로 반환

join('') 해주는 이유
저번에도 문제가 됐었던
innerHTML로 넣었얼때 "," 가 요소와 요소 사이에 넣어져있었다.
그 이유는 배열내 요소들을 string화 했을때 각각을 구분해주기위해 자동으로 ","표시가 들어가 있는데 이를
innerHTML할때 나타났다.
그걸 없애주기 위해 join("")
