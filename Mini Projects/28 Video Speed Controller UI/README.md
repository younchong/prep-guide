# 공부한것

처음에 기본 길이가 400 까지 있으니까 그 값을 100으로 나누고 그걸 textContent에 넣고 playbackRate랑 height에 넣으면 더 간단하게 될 줄 알고
그렇게 구현하려다가
height에서 구현이 안됐다.
height값을 채울 때 비율로 들어가기 때문에 저런 작은 값으로 들어가게 되면 많이 playRate에 맞춰서 커지지는 않는다. 그래서 영상에 나온 방법대로
percent구하고 구한 percent로 height와 playbackRate에 들어갈 값 조금 수정했다.
저번에도 나왔지만 정확히는 이해 못했던
min, max가 있을때 값구하는법

```
const playRate = percent*(max-min) + min;
```

사용했고
textContent에서는 소숫점 2자리까지만을 나타내려고
toFixed(2) 를 이용했다.
고정 소수점 표기법

마지막으로 저번에는 x값을 구할때 offsetLeft를 빼주지 않았는데 margin 이나 padding 값이 있을때 그 값을 빼줘서 정확히 계산하려고 이번에는 뺐다. (저번예제는 0이었음)

강의와는 달리
클릭하고 (단지 mousemove할때만이 아니라) 움직일때 값이 변하도록 설정했다.
