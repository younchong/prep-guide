#Clock
시간 얻어오기나 다른 css부분들은 모두 배웠던 것이라 간다했다.
setInterval을 이용해서 설정해놓은 시간마다 함수를 실행하는
걸 알았다.

<pre>
<code>
clock.style.animation="animationNameSomething";
</code>
</pre>

이용해서 keyframes로 만든 애니메이션 넣으려고 했는데
작동되지 않았다.
왜그런지는 공부해봐야겠다.
그래서 어쩔 수 없이
안좋은 코드인 것 같지만
if절을 이용해서 시간이 변함에 따라 scale을 넣었다.
정각인 것을 강조하고 싶었다.
1분이 지날때마다
