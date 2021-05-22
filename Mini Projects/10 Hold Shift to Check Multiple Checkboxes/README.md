처음에 잘못 이해해서 e.shiftKey를 왜 사용하는 지 몰라서 시간이 좀 걸렸다.
그래서 검색해보면서 알아본 것들은
1.shiftKey
2.altKey
3.ctrKey
등이 눌러졌음을 boolean으로 나타낸다는 점과

# hard to understand

```
if(checkbox === this || checkbox === lastChecked)
```

이부분에서 마지막으로 체크된 부분이 동일하다고 생각했다.
lastcheck === this 라고 생각해서.
그래서 이부분을 여러번 돌려보고 이해하려고 노력한 결과

```
lastChecked = this;
```

이게 함수식 전체가 끝나기 직전에 실행되는 식이라서
if 안에서 lastchecked부분은 이 전에 click했던 것이 선택된다.
그래서 처음 선택한 부분이랑 마지막에 선택한 부분이 무엇인지 알 수 있게 된다.
이 알고리즘(?) 혼자 생각못하고 강의를 보고 적었는데 스스로 생각하는 방식을 계속 노력하자.
