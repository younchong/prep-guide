{
    const fruits = ['apple', 'banana', 'orange'];
    const result = fruits.join();
    console.log(result);
}

{
    const fruits = 'a, b, c, d';
    const result = fruits.split(',');
    console.log(result);
}

//Quiz
{
const Q3 = [1, 2, 3, 4, 5];
 const result = Q3.slice(2, 5);
 console.log(result);
 console.log(Q3);
}
{
 const Q4 = [1, 2, 3, 4, 5];
 Q4.splice(0, 2);
 console.log(Q4);
}
 // splice와 slice 차이... splice는 기존배열에서 수정, slice 는 배열에서 원하는 부분만 return
 class Student {
     constructor(name, age, enrolled, score){
         this.name = name;
         this.age = age;
         this.enrolled = enrolled;
         this.score =score;
     }
 }
 const students = [
     new Student('A', 29, true, 45),
     new Student('B', 28, false, 80),
     new Student('C', 30, true, 90),
     new Student('D', 40, false, 66),
     new Student('E', 18, true, 88)
 ];
{
 const result = students.find(function (student, index){
     return student.score === 90;
     
    });
    console.log(result);
}
//find 다시 찾아보기.
 
{const result = students.filter((student) => student.enrolled);
    console.log(result);
    }

    {
        const result = students.map((student) => student.score);
        console.log(result);
        //map이란 배열안에 있는 요소 한가지 한가지를  보여준다.
    }

    {
        /*
        const result = students.filter(function(student){
            return student.score <50
         내 코드 */
            
        const result = students.some((student) => student.score < 50);
        console.log(result);
        }

    {
        const result = students.reduce((prev, curr) => prev + curr.score, 0);
        console.log(result / students.length);
    }

    {
        const result = students
        .map((student) => student.score)
        .join();
        console.log(result);
    }

    {
        const result = students
        .map(student =>student.score)
        .sort((a, b)=> a-b)
        .join();        
        console.log(result);
    }