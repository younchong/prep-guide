# Text Shadow mouse move event

전에 offsetX, offsetY 로 마우스 좌표에 대한 공부를 해서 어렵지 않았다.
그런데

```
 const shadowX= Math.round((x / width *walk) - (walk/2)),
        shadowY= Math.round((y / height *walk) - (walk/2));
```

이 코드를 이해하고 구현하는게 좀 힘들었다.
영상 설명에서는 최대 최소값을 50 ~ -50 을 맞추기 위해 만든 값이라고 설명했다.
이해를 하기 보단 값을 구성하기 위한 약간의 수학적 계산이 필요한 것 같다.
저 부분만 코드를 옮겨 적었다.

## text-shadow

사용한 text-shadow의 값 순서
offsetX | offsetY | blur-radius | color
