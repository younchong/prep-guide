#다시 공부 필수
모든 코드가 잘 이해되지 않았다.
처음에

```
function debounce(func, wait=20, immediate =true){
    let timeout;
    return function(){
        let context = this, args = arguments;
        let later = function(){
            timeout = null;
            if(!immediate)func.apply(context, args);
        };
        let callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if(callNow)func.apply(context, args);
        };
    };
```

이 함수를 사용해서 scrollCtr 함수를 사용하는 이유를 모르겠다.

## 공부할 것

우선 전체 코드를 계속 보고 이해하기를 노력하고
scrollCtr 에서 사용됐던 offsetTop 이나 img.height, scrollY 값을 더한 값등이 한번에 어느 정도일 것이라는 감이 아예 없다.
여러번 다시 보면서 한번에 알 수 있게 하자.

### 알게 된 것

float
한 요소가 (img등) 텍스트 및 인라인 요소가 감쌀지 흐름에서 빠져 있을지 나타낸다.
기본적으로 텍스트와는 별개로 설정되어 있다가.
float : left;
float : right;
로 흐름의 한요소가 된다.

# 다시 공부 후

```
function debounce(func, wait=20, immediate =true){
    let timeout;
    return function(){
        let context = this, args = arguments;
        let later = function(){
            timeout = null;
            if(!immediate)func.apply(context, args);
        };
        let callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if(callNow)func.apply(context, args);
        };
    };
```

우선 이 함수를 이해하려고 하나씩 뜯어봤는데
실행되는 것은 return 값으로 나온 function 안에 clearTimeout 으로 timeout 초기화(반복되면서 setTimeout으로 설정된 값들)후 timeout 재설정
later라는 함수를 wait 시간으로 실행(0.02초)
apply 메소드
this인자나 필요없을경우 null을 받고 뒤에 배열인자를 받아서
배열인자 해결 못하는 함수를 작동시키려고 할때 사용한다.
다른 함수의 메소드를 사용하게 해줌

##다시 한번 더 공부 후
우선 처음 debounce 함수는
Timeout =null로 지속적으로 유지시켜주는 역할같다.

```

function scrollCtr(e){
    slideImages.forEach(slideImage=> {
        const slideAt =(window.scrollY + window.innerHeight) - slideImage.height/2;
        const imgBottom = slideImage.offsetTop + slideImage.height;
        const halfImg = slideAt > slideImage.offsetTop;
        const scrollPast = window.scrollY < imgBottom;
        if(halfImg && scrollPast){
            slideImage.classList.add("active");
        }else{
            slideImage.classList.remove("active");
        }

    });
}

```

그리고 주가 되는 scrollCtr함수에서
slideAt 에서
scrollY는 스크롤을 한 Y축 길이를 의미하고 그에 따라서
slideAt에서 window.scrollY + window.innerHeight 가 의미하는건 화면 Y축 하단값(길이)
slideAt은 Y축 하단값(스크롤하면서 내릴 길이 + 뷰포트에 나오는 길이)에서 이미지 길이 절반을 뺀 값이다.

offsetTop은 부무요소의 position: relative라면 그것을 기준으로 상대위치를 나타내지만
아니라면 그 부모요소보다 상위요소를 계속 올라가서 relative를 찾아 기준삼아 상대위치를 나타낸다.
만약 position: relative가 없다면 컨테츠의 시작지점을 기준으로 하는 위치, 즉 절대위치를 나타낸다.
전체 css에서 position:relative를 사용하지않아서 절대위치를 나타냈고
imgBottom은 말뜻 그대로 컨텐츠 시작점부터 이미지 까지의 길이를 나타낸다.

halfImg는 스크롤해서 내린 길이와 내가보는 사진의 절반 길이 > 이미지있는 곳의 절대위치(윗면기준)
일때 나타넨다.

scrollPast 는 스크롤한 총 길이 < 시작점부터 이미지 하단까지의 길이
일때를 나타낸다.

마지막으로 if안에서 ||(or)를 사용하지 않고 &&(and)를 사용한 이유를 모르겠었는데
halfImg는 당연하게도 이미지 절반에 왔을때 나오게 하려고 이고(class추가)
scrollPast는 스크롤해서 내린부분의 길이가 보려고 하는 이미지보다 짧을때
half이미지로 처음 이미지가 나오는 transition은 작동되지만 이후 없애거나
혹은 다시 scroll을 올렸을때 올리면서 다시 scrollY는 짧아지고 그에 따라 imgBottom보다 작아지기때문에 다시 이미지가 나오게된다.

진도 나가기에 급급했던거 같아서
이렇게 잘 모르고 코드만 옮겨적는거에 불과한 코딩을 하는건 무의미하다고 생각해서
하루정도 만들고 다음날 일가면서 버스나 틈틈히 찾아보고 끝나고 이 관련 내용만 찾아보고
완벽하게 이해했다.
처음에 와닿지 않았던 (어느정도 길이를 나타내는지) 부분들이 이제는 한눈에 들어온다.
처음 목표했던 부분을 이뤘다.
몰랐던 것을 많이 배웠다.
