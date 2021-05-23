특별한 점은 없었지만
저번의 반성에 따라 스스로 모두 작성했다.

## #한번에 이해하지 못한코드

```
box.splice(-secretWord.length-1, box.length-secretWord.length )
```

처음에 box의 첫 글자만 빠지지않고 있어서 왜그런가 하다가
-secretWord.length에 -1을 해야 box내 첫글자도 빠지는 걸 확인했다.
바로 이해하지는 못했지만
이해한바로는
start에서 음수는 뒤에서부터 숫자를 count하게 되는데
그때 secretWord와 같은 length인 -5로 그대로 하면
5글자를 다 채우고 새로운 글자가 들어왔을때
box.length = 6이되고
그러면 box.splice(-5, 1) 이렇게 돼서
첫글자 앞의 숫자만 지워지게 된다.
그래서 첫글자는 지워지지 않고 2번째 글자만 지워지는 일이 일어났다.
생각해서 스스로 해결했다.
