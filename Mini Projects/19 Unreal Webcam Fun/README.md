# 공부한것

video관련된 연습은 처음이라 거의 모든 코드를 따라적었다.

```
function getVideo(){
    navigator.mediaDevices.getUserMedia({ video: true, audio: false })
        .then(localMediaStream => {
            console.log(localMediaStream);
            video.srcObject = localMediaStream;
            video.play();
        })
        .catch(err => {
            console.error("nope", err);
        })
}
```

처음 이 함수에서 video관련 메소드가 사용됐고,
navigator.mediaDevices.getUserMedia 는 카메라 마이크등 연결된 입력장치에 접근 권한요청후 활성화를 한다.
그리고 html5부터 바뀐 srcObject는 원래 createObject에서 바뀌어서 저렇게 사용된다. 비디오 src를 가져온다.

## 제일 이해가 힘들었던 rgb 정수표현

특정색 기준 255는 알지만 그 이외의 값을 표현하는 법이 이해가지 않았다.

# 다시 한번 복습 필요!!!
