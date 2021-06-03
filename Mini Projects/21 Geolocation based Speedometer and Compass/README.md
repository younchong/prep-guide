# 공부한것

스마트폰으로 바로 확인할 수 없어서 시속이나 deg가 바뀌는건 확인 못했지만,
저번에 내가 직접 적은 코드와 강의에서 적은 코드중 달랐고 이번에도 차이가 있을 뻔했던 부분에 공부했다.
textContent와 innerText, innerHTML 이 모두의 차이점

예시

```
<div id="ex">
    안녕, 예시야.
    <span style="diplay:none">숨겨진 글</span>
<div>

const element = document.getElementById("ex");
```

1. innerHTML
   HTML전체 내용을 가져온다. HTML을 반환
   HTML로 분석할 필요가 없으면 textContent 성능이 더 좋다.

결과값

```
element.innerHTML =>
```

안녕, 예시야.
<span style="diplay:none">숨겨진 글</span>

2. innerText
   사람이 읽을 수 있는 요소만 처리한다.
   사용자에게 보여지는 텍스트값을 읽어온다.
   결과값

```
element.innerText =>
```

안녕, 예시야

3. textContent
   node의 모든 요소를 반환한다.
   node의 모든 자식을 주어진 문자열로 이루어진 하나의 텍스트 노드로 대치
   태그와 상관없이 해상 노드가 가지고 있는 텍스트 값을 그대로 읽는다.

결과값

```
element.textContent =>
```

안녕, 예시야.
숨겨진 글

참조
hianna.tistory.com
developer.mozilla.org
