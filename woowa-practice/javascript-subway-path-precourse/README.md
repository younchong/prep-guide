# ๐ ์งํ์ฒ  ๋ธ์ ๋ ๊ฒฝ๋ก ์กฐํ ๋ฏธ์
- ๋ฑ๋ก๋ ์งํ์ฒ  ๋ธ์ ๋์์ ๊ฒฝ๋ก๋ฅผ ์กฐํํ๋ ๊ธฐ๋ฅ์ ๊ตฌํํ๋ค.

## ๐ ๊ธฐ๋ฅ ์๊ตฌ์ฌํญ
> ํ๋ฆฌ์ฝ์ค 3์ฃผ์ฐจ ๋ฏธ์์์ ์ฌ์ฉํ ์ฝ๋๋ฅผ ์ฐธ๊ณ ํด๋ ๋ฌด๊ดํ๋ค.

### ์ด๊ธฐ ์ค์ 
- ํ๋ก๊ทธ๋จ ์์ ์ ์ญ, ๋ธ์ , ๊ตฌ๊ฐ ๋ฐ์ดํฐ๋ฅผ ์ด๊ธฐ ์ค์  ํด์ผ ํ๋ค.
- ๊ฑฐ๋ฆฌ์ ์์ ์๊ฐ์ ์์ ์ ์์ด๋ฉฐ ๋จ์๋ km์ ๋ถ์ ์๋ฏธํ๋ค.
- ์๋์ ์ฌ์  ๋ฑ๋ก ์ ๋ณด๋ก ๋ฐ๋์ ์ด๊ธฐ ์ค์ ์ ํ๋ค.

```
1. ์งํ์ฒ ์ญ์ผ๋ก ๊ต๋, ๊ฐ๋จ, ์ญ์ผ, ๋จ๋ถํฐ๋ฏธ๋, ์์ฌ, ์์ฌ์๋ฏผ์์ฒ, ๋งค๋ด ์ญ ์ ๋ณด๊ฐ ๋ฑ๋ก๋์ด ์๋ค.
2. ์งํ์ฒ  ๋ธ์ ์ผ๋ก 2ํธ์ , 3ํธ์ , ์ ๋ถ๋น์ ์ด ๋ฑ๋ก๋์ด ์๋ค.
3. ๋ธ์ ์ ์ญ์ด ์๋์ ๊ฐ์ด ๋ฑ๋ก๋์ด ์๋ค.(์ผ์ชฝ ๋์ด ์ํ ์ข์ )
    - 2ํธ์ : ๊ต๋ - ( 2km / 3๋ถ ) - ๊ฐ๋จ - ( 2km / 3๋ถ ) - ์ญ์ผ
    - 3ํธ์ : ๊ต๋ - ( 3km / 2๋ถ ) - ๋จ๋ถํฐ๋ฏธ๋ - ( 6km / 5๋ถ ) - ์์ฌ - ( 1km / 1๋ถ ) - ๋งค๋ด
    - ์ ๋ถ๋น์ : ๊ฐ๋จ - ( 2km / 8๋ถ ) - ์์ฌ - ( 10km / 3๋ถ ) - ์์ฌ์๋ฏผ์์ฒ
```

### ๊ฒฝ๋ก ์กฐํ ๊ธฐ๋ฅ
<img src="/images/path_result.jpg" width="100%">

- ์ถ๋ฐ์ญ๊ณผ ๋์ฐฉ์ญ์ ์๋ ฅ๋ฐ์ ๊ฒฝ๋ก๋ฅผ ์กฐํํ๋ค.
- ๊ฒฝ๋ก ์กฐํ ์ ์ด ๊ฑฐ๋ฆฌ, ์ด ์์ ์๊ฐ์ ํจ๊ป ์ถ๋ ฅํ๋ค.
- ๊ฒฝ๋ก ์กฐํ ์ `์ต๋จ ๊ฑฐ๋ฆฌ` ๋๋ `์ต์ ์๊ฐ` ์ต์์ ์ ํํ   ์ ์๋ค.

### ์์ธ ์ฒ๋ฆฌ
- ์ถ๋ฐ์ญ๊ณผ ๋์ฐฉ์ญ์ 2๊ธ์ ์ด์์ด์ด์ผ ํ๋ค.
- ์กด์ฌํ์ง ์๋ ์ญ์ ์ถ๋ฐ์ญ ๋๋ ๋์ฐฉ์ญ์ผ๋ก ์๋ ฅํ  ์ ์๋ค.
- ๊ฒฝ๋ก ์กฐํ ์ ์ถ๋ฐ์ญ๊ณผ ๋์ฐฉ์ญ์ด ๊ฐ์ ์ ์๋ค.
- ๊ฒฝ๋ก ์กฐํ ์ ์ถ๋ฐ์ญ๊ณผ ๋์ฐฉ์ญ์ด ์ฐ๊ฒฐ๋์ง ์์ผ๋ฉด ๊ฒฝ๋ก๋ฅผ ์กฐํํ  ์ ์๋ค.
- ๊ทธ ์ธ ์ ์์ ์ผ๋ก ํ๋ก๊ทธ๋จ์ด ์ํ๋์ง ์์ ๊ฒฝ์ฐ `alert`์ผ๋ก ์๋ฌ๋ฅผ ์ถ๋ ฅํ๋ค.

<br>

## ๐ป ํ๋ก๊ทธ๋๋ฐ ์คํ ๊ฒฐ๊ณผ
### ๊ฒฝ๋ก ์กฐํ
<img src="/images/path_result.gif" width="100%">


## โ ํ๋ก๊ทธ๋๋ฐ ์๊ตฌ์ฌํญ
### ๊ธธ์ฐพ๊ธฐ ๊ด๋ จ ๊ธฐ๋ฅ
- ์ถ๋ฐ์ญ์ ์๋ ฅํ๋ input ํ๊ทธ๋ `departure-station-name-input` id ์์ฑ๊ฐ์ ๊ฐ์ง๋ค.
- ๋์ฐฉ์ญ์ ์๋ ฅํ๋ input ํ๊ทธ๋ `arrival-station-name-input` id ์์ฑ๊ฐ์ ๊ฐ์ง๋ค.
- ์ต๋จ๊ฑฐ๋ฆฌ, ์ต์์๊ฐ์ ์ ํํ๋ radio๋ `search-type` name ์์ฑ๊ฐ์ ๊ฐ์ง๋ค.
  - **radio option์ default ๊ฐ์ ์ต๋จ๊ฑฐ๋ฆฌ์ด๋ค.**
- ๊ธธ์ฐพ๊ธฐ ๋ฒํผ์ `search-button` id ์์ฑ๊ฐ์ ๊ฐ์ง๋ค.
- ๐ ๊ฒฐ๊ณผ๋ `table`์ ์ด์ฉํ์ฌ ๋ณด์ฌ์ค๋ค.

## โ๏ธํํธ
## ๋ฐ์ดํฐ ์ด๊ธฐํ
์๋ฐ์คํฌ๋ฆฝํธ์์ ๋ฐ์ดํฐ๋ฅผ ์ด๊ธฐํํ๋ ๋ฐฉ๋ฒ ์ค์ ํ๋๋ ์๋์ ๊ฐ์ด data๋ฅผ `export`ํ๊ณ , `import`ํ๋ ๊ฒ์ด๋ค.

```javascript
export const users = [
  {
    name: 'Alt'
  },
  {
    name: 'Jamie'
  },
  {
    name: 'Sony'
  }
]

export const courses = [
  {
    name: 'frontend',
  },
  {
    name: 'backend',
  },
  {
    name: 'iOS',
  },
  {
    name: 'Android',
  }
]

```
์์ ๊ฐ์ด ๋ฐ์ดํฐ๋ฅผ `export`ํ๋ฉด ์๋์ ๊ฐ์ด ๋ฐ์ดํฐ๋ฅผ `import` ํ์ฌ ์ฌ์ฉํ  ์ ์๋ค.
```javascript
import { users, courses } from './data.js'

function App() {
  this.users = users
  this.courses = courses
}
```

## ์ต๋จ ๊ฒฝ๋ก ๋ผ์ด๋ธ๋ฌ๋ฆฌ
- `utils/Dijkstra.js` ๋ผ์ด๋ธ๋ฌ๋ฆฌ๋ฅผ ํ์ฉํ๋ฉด ๊ฐํธํ๊ฒ ์ต๋จ๊ฑฐ๋ฆฌ๋ฅผ ์กฐํํ  ์ ์๋ค.
- ์ ์ (Vertex)๊ณผ ๊ฐ์ (Edge), ๊ทธ๋ฆฌ๊ณ  ๊ฐ์ค์น ๊ฐ๋์ ์ด์ฉ
  - ์ ์ : ์งํ์ฒ ์ญ
  - ๊ฐ์ : ์งํ์ฒ ์ญ ์ฐ๊ฒฐ์ ๋ณด
  - ๊ฐ์ค์น: ๊ฑฐ๋ฆฌ or ์์ ์๊ฐ
- ์ต๋จ ๊ฑฐ๋ฆฌ ๊ธฐ์ค ์กฐํ ์ ๊ฐ์ค์น๋ฅผ ๊ฑฐ๋ฆฌ๋ก ์ค์ 
- ์ต์ ์๊ฐ ๊ธฐ์ค ์กฐํ ์ ๊ฐ์ค์น๋ฅผ ์๊ฐ์ผ๋ก ์ค์ 

```javascript
import Dijkstra from "./utils/Dijkstra.js";
const dijkstra = new Dijkstra()

//dijkstra.addEdge("์ถ๋ฐ์ญ", "๋์ฐฉ์ญ", ๊ฑฐ๋ฆฌ ๋๋ ์๊ฐ);
dijkstra.addEdge("V1", "V2", 2);
dijkstra.addEdge("V2", "V3", 2);
dijkstra.addEdge("V1", "V3", 100);

const result = dijkstra.findShortestPath("V1", "V3");
// result = ["V1", "V2", "V3"] 
```

#### ํ์คํธ์ค๋ช
<img src="/images/dijkstra_example.png" width="400">

- ์ญ ์ฌ์ด์ ๊ฑฐ๋ฆฌ๋ฅผ ๊ณ ๋ คํ์ง ์๋ ๊ฒฝ์ฐ V1->V3 ๊ฒฝ๋ก๊ฐ ์ต๋จ ๊ฒฝ๋ก
- ์ญ ์ฌ์ด์ ๊ฑฐ๋ฆฌ๋ฅผ ๊ณ ๋ คํ  ๊ฒฝ์ฐ V1->V3 ๊ฒฝ๋ก์ ๊ฑฐ๋ฆฌ๋ 100km, V1->V2->V3 ๊ฒฝ๋ก์ ๊ฑฐ๋ฆฌ๋ 4km์ด๋ฏ๋ก ์ต๋จ ๊ฒฝ๋ก๋ V1->V2->V3

<br>

### ์๊ตฌ์ฌํญ
- ์ฌ์ฉ์๊ฐ ์๋ชป๋ ์๋ ฅ ๊ฐ์ ์์ฑํ ๊ฒฝ์ฐ `alert`์ ์ด์ฉํด ๋ฉ์์ง๋ฅผ ๋ณด์ฌ์ฃผ๊ณ , ์ฌ์๋ ฅํ  ์ ์๊ฒ ํ๋ค.
- ์ธ๋ถ ๋ผ์ด๋ธ๋ฌ๋ฆฌ(jQuery, Lodash ๋ฑ)๋ฅผ ์ฌ์ฉํ์ง ์๊ณ , ์์ Vanilla JS๋ก๋ง ๊ตฌํํ๋ค.
- **์๋ฐ์คํฌ๋ฆฝํธ ์ฝ๋ ์ปจ๋ฒค์์ ์งํค๋ฉด์ ํ๋ก๊ทธ๋๋ฐ** ํ๋ค
  - [https://google.github.io/styleguide/jsguide.html](https://google.github.io/styleguide/jsguide.html)
  - [https://ui.toast.com/fe-guide/ko_CODING-CONVENSION/](https://ui.toast.com/fe-guide/ko_CODING-CONVENTION)
- **indent(์ธ๋ดํธ, ๋ค์ฌ์ฐ๊ธฐ) depth๋ฅผ 3์ด ๋์ง ์๋๋ก ๊ตฌํํ๋ค. 2๊น์ง๋ง ํ์ฉ**ํ๋ค.
  - ์๋ฅผ ๋ค์ด while๋ฌธ ์์ if๋ฌธ์ด ์์ผ๋ฉด ๋ค์ฌ์ฐ๊ธฐ๋ 2์ด๋ค.
  - ํํธ: indent(์ธ๋ดํธ, ๋ค์ฌ์ฐ๊ธฐ) depth๋ฅผ ์ค์ด๋ ์ข์ ๋ฐฉ๋ฒ์ ํจ์(๋๋ ๋ฉ์๋)๋ฅผ ๋ถ๋ฆฌํ๋ฉด ๋๋ค.
- **ํจ์(๋๋ ๋ฉ์๋)์ ๊ธธ์ด๊ฐ 15๋ผ์ธ์ ๋์ด๊ฐ์ง ์๋๋ก ๊ตฌํํ๋ค.**
  - ํจ์(๋๋ ๋ฉ์๋)๊ฐ ํ ๊ฐ์ง ์ผ๋ง ์ ํ๋๋ก ๊ตฌํํ๋ค.
- ๋ณ์ ์ ์ธ์ [var](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/var) ๋ฅผ ์ฌ์ฉํ์ง ์๋๋ค. [const](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/const) ์ [let](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/let) ์ ์ฌ์ฉํ๋ค.
- [import](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/import) ๋ฌธ์ ์ด์ฉํด ์คํฌ๋ฆฝํธ๋ฅผ ๋ชจ๋ํํ๊ณ  ๋ถ๋ฌ์ฌ ์ ์๊ฒ ๋ง๋ ๋ค.
- [template literal](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Template_literals)์ ์ด์ฉํด ๋ฐ์ดํฐ์ html string์ ๊ฐ๋์ฑ ์ข๊ฒ ํํํ๋ค.

<br/>

## ๐ ๋ฏธ์ ์ ์ฅ์ ๋ฐ ์งํ ์๊ตฌ์ฌํญ

- ๋ฏธ์์ [https://github.com/woowacourse/javascript-subway-path-precourse](https://github.com/woowacourse/javascript-subway-path-precourse) ์ ์ฅ์๋ฅผ fork/cloneํด ์์ํ๋ค.
- **๊ธฐ๋ฅ์ ๊ตฌํํ๊ธฐ ์ ์ javascript-subway-path-precourse/docs/README.md ํ์ผ์ ๊ตฌํํ  ๊ธฐ๋ฅ ๋ชฉ๋ก**์ ์ ๋ฆฌํด ์ถ๊ฐํ๋ค.
- **git์ commit ๋จ์๋ ์ ๋จ๊ณ์์ README.md ํ์ผ์ ์ ๋ฆฌํ ๊ธฐ๋ฅ ๋ชฉ๋ก ๋จ์๋ก ์ถ๊ฐ**ํ๋ค.
- [ํ๋ฆฌ์ฝ์ค ๊ณผ์  ์ ์ถ](https://github.com/woowacourse/woowacourse-docs/tree/master/precourse) ๋ฌธ์ ์ ์ฐจ๋ฅผ ๋ฐ๋ผ ๋ฏธ์์ ์ ์ถํ๋ค.
