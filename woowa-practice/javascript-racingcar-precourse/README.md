# ποΈ μλμ°¨ κ²½μ£Ό κ²μ

## π― κΈ°λ₯ μκ΅¬μ¬ν­

- μ£Όμ΄μ§ νμ λμ nλμ μλμ°¨λ μ μ§ λλ λ©μΆ μ μλ€.
- μλμ°¨μ μ΄λ¦μ λΆμ¬ν  μ μλ€. μ μ§νλ μλμ°¨λ₯Ό μΆλ ₯ν  λ μλμ°¨ μ΄λ¦μ κ°μ΄ μΆλ ₯νλ€.
- μλμ°¨ μ΄λ¦μ μΌν(,)λ₯Ό κΈ°μ€μΌλ‘ κ΅¬λΆνλ©° μ΄λ¦μ 5μ μ΄νλ§ κ°λ₯νλ€.
- μ¬μ©μλ μλν  νμλ₯Ό μλ ₯ν  μ μμ΄μΌ νλ€.
- μ μ§νλ μ‘°κ±΄μ 0μμ 9 μ¬μ΄μμ random κ°μ κ΅¬ν ν random κ°μ΄ 4 μ΄μμΌ κ²½μ° μ μ§νκ³ , 3 μ΄νμ κ°μ΄λ©΄ λ©μΆλ€.
- μλμ°¨ κ²½μ£Ό κ²μμ μλ£ν ν λκ° μ°μΉνλμ§λ₯Ό μλ €μ€λ€. μ°μΉμλ ν λͺ μ΄μμΌ μ μλ€.
- μ°μΉμκ° μ¬λ¬λͺμΌ κ²½μ° ,λ₯Ό μ΄μ©νμ¬ κ΅¬λΆνλ€.

## π» νλ‘κ·Έλ¨ μ€ν κ²°κ³Ό

![μ€νμ΄λ―Έμ§](images/result.gif)
![μ€νμ΄λ―Έμ§](images/result.jpg)

## β νλ‘κ·Έλλ° μκ΅¬μ¬ν­

- μ¬μ©μκ° μλͺ»λ μλ ₯ κ°μ μμ±ν κ²½μ° `alert`μ μ΄μ©ν΄ λ©μμ§λ₯Ό λ³΄μ¬μ£Όκ³ , μ¬μλ ₯ν  μ μκ² νλ€.
- μΈλΆ λΌμ΄λΈλ¬λ¦¬(jQuery, Lodash λ±)λ₯Ό μ¬μ©νμ§ μκ³ , μμ Vanilla JSλ‘λ§ κ΅¬ννλ€.
- **μλ°μ€ν¬λ¦½νΈ μ½λ μ»¨λ²€μμ μ§ν€λ©΄μ νλ‘κ·Έλλ°** νλ€
  - [https://google.github.io/styleguide/jsguide.html](https://google.github.io/styleguide/jsguide.html)
  - [https://ui.toast.com/fe-guide/ko_CODING-CONVENSION/](https://ui.toast.com/fe-guide/ko_CODING-CONVENTION)
- **indent(μΈλ΄νΈ, λ€μ¬μ°κΈ°) depthλ₯Ό 3μ΄ λμ§ μλλ‘ κ΅¬ννλ€. 2κΉμ§λ§ νμ©**νλ€.
  - μλ₯Ό λ€μ΄ whileλ¬Έ μμ ifλ¬Έμ΄ μμΌλ©΄ λ€μ¬μ°κΈ°λ 2μ΄λ€.
  - ννΈ: indent(μΈλ΄νΈ, λ€μ¬μ°κΈ°) depthλ₯Ό μ€μ΄λ μ’μ λ°©λ²μ ν¨μ(λλ λ©μλ)λ₯Ό λΆλ¦¬νλ©΄ λλ€.
- **ν¨μ(λλ λ©μλ)κ° ν κ°μ§ μΌλ§ νλλ‘ μ΅λν μκ²** λ§λ€μ΄λΌ.

### μΆκ°λ μκ΅¬μ¬ν­

- **ν¨μ(λλ λ©μλ)μ κΈΈμ΄κ° 15λΌμΈμ λμ΄κ°μ§ μλλ‘ κ΅¬ννλ€.**
  - ν¨μ(λλ λ©μλ)κ° ν κ°μ§ μΌλ§ μ νλλ‘ κ΅¬ννλ€.
- μλμ°¨μ μ΄λ¦μ μλ ₯νλ input νκ·Έλ `car-names-input` idκ°μ κ°μ§λ€.
- μλμ°¨μ μ΄λ¦μ μ μΆνλ button νκ·Έλ `car-names-submit` idκ°μ κ°μ§λ€.
- λ μ΄μ± νμλ₯Ό μλ ₯νλ input νκ·Έλ `racing-count-input` idκ°μ κ°μ§λ€.
- λ μ΄μ± νμμ μ μΆνλ button νκ·Έλ `racing-count-submit` idκ°μ κ°μ§λ€.
- μ΅μ’ μ°μΉμλ₯Ό μΆλ ₯νλ span νκ·Έλ `racing-winners` idλ₯Ό κ°μ§λ€.
  - μ) `<span id="racing-winners">poco,park,jun</span>` ννλ‘ μμ±ν΄μ£ΌμΈμ.
- λ€μ Car κ°μ²΄λ₯Ό λ§λ€κ³ , new λ₯Ό μ΄μ©ν΄ μΈμ€ν΄μ€λ₯Ό λ§λ λ€.
```javascript
function Car(name) {
  this.name = name;
}

class Car {
  constructor(name) {
    this.name = name;
  }
}
```

- λ³μ μ μΈμ `var` λ₯Ό μ¬μ©νμ§ μλλ€. `const` μ `let` μ μ¬μ©νλ€.
  - [const](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/const)
  - [let](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/let)
- `import` λ¬Έμ μ΄μ©ν΄ μ€ν¬λ¦½νΈλ₯Ό λͺ¨λννκ³  λΆλ¬μ¬ μ μκ² λ§λ λ€.
  - [https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/import](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/import)
- `template literal`μ μ΄μ©ν΄ λ°μ΄ν°μ html stringμ κ°λμ± μ’κ² νννλ€.
  - [https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Template_literals](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Template_literals)

## π λ―Έμ μ μ₯μ λ° μ§ν μκ΅¬μ¬ν­

- λ―Έμμ [https://github.com/woowacourse/javascript-racingcar-precours](https://github.com/woowacourse/javascript-racingcar-precourse) μ μ₯μλ₯Ό fork/cloneν΄ μμνλ€.
- **κΈ°λ₯μ κ΅¬ννκΈ° μ μ javascript-racingcar-precourse/docs/README.md νμΌμ κ΅¬νν  κΈ°λ₯ λͺ©λ‘**μ μ λ¦¬ν΄ μΆκ°νλ€.
- **gitμ commit λ¨μλ μ λ¨κ³μμ README.md νμΌμ μ λ¦¬ν κΈ°λ₯ λͺ©λ‘ λ¨μλ‘ μΆκ°**νλ€.
- [νλ¦¬μ½μ€ κ³Όμ  μ μΆ](https://github.com/woowacourse/woowacourse-docs/tree/master/precourse) λ¬Έμ μ μ°¨λ₯Ό λ°λΌ λ―Έμμ μ μΆνλ€.
