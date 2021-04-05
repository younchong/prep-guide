//1. string concatenation
//console.log(`string literals: 1 + 2 = ${1 + 2}`);


//2. Numeric operators

//3. Increment and decrement operators
 /*
  ++number 앞에 두면 바로 업데이트 돼서 할당이 되고
  number-- 뒤에 있으면 할당해두고 업데이트는 뒤에
  */

  // 9. Ternary operator: ?
  //condition ? value1 : value2;       if 간단할때 주로 사용 간편하게.
  //console.log(name === 'ellie'? 'yes' : 'no');

  //Q1. iterate from 0 to 10 and print only even numbers (use continue)
  /*
  for (let i = 0; i < 11; i++){
      if(i %2){continue;}
      else{
      console.log(`i: ${i}`);}
      
  }

  //Q2. iterate from 0 to 10 and print numbers until reaching 8 (use break)
  for (let i = 0; i <11; i++){
      if(i != 8){console.log(`i: ${i}`);}
      else{
          break;
      }
  }
  */

  function add(a, b){
      return a+b;
  }
  