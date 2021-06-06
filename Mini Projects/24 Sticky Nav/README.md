# 공부한것

js코드에서는 classList로 클래스 add remove는 해봐서 알고 있었던 내용이지만
오히려,
css에서 class 설정해서 css효과를 넣는 순서를 공부했다.
처음에 그 css효과가 적용될 부분에 classList.add를 해서
css효과를 적용시키려했는데 안됐다.
물론 position:fixed가 전체적인 부분과 함께 연관지어 생각해야기도 하지만
전체 body에 class 를 설정한 후
li.logo와 nav 각각 순서에 적용시켰다.

처음엔 바로 적용시킨후 class는 입력되는데 css가 적용되지 않아서 강의를 보고 알았다.

이미 클래스가 있는곳에 또 클래스를 적용시킬 순 없으니
전체 body 에 scrolled 클래스를 적용시키고(scrolled 됐을때 전체 상황)
그 후에 각각 필요한 부분에 scrolled됐을때 적용시킬 css요소들을 class로 새로 만들어서 적용시켰다.

처음엔 왜 바로 li.logo .scrolled 이 순서로 하면 안되는지 그리고 적용시킬 부분에 바로 클래스 이름을 넣으면 안되는지에
궁금증이 있었는데
위와 같은 이유때문인것 같다.
강의 설명에서는 body에 class를 설정해두면 손쉽게 children 요소들에 효과를 설정할 수 있기 때문에 그렇게 했다.
