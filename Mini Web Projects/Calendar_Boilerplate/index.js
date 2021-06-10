let today = new Date();
let date = today.getDate();
let week = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
let day = week[today.getDay()];
let monthArr = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUNE', 'JULY', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
let month = monthArr[today.getMonth()];
let year = today.getFullYear();
let both = month + year;
let first = new Date(today.getFullYear(), today.getMonth(), 1);
let leapMonth = [31,28,31,30,31,30,31,31,30,31,30,31];
let noLeap = [31,29,31,30,31,30,31,31,30,31,30,31];
let calYear;
if(year % 4 ===0){
    calYear = noLeap;
}else{
    calYear = leapMonth;
}
let tBody = document.getElementById('tBody');
let num=0;

function writeDate(){    
let dateTitle = document.getElementById('date');
dateTitle.innerText=date;
};

function writeDay(){
    let dayTitle = document.getElementById('day');
    dayTitle.innerText=day;
}

function writeMonYear(){
    let monTitle = document.getElementById('monYear');
    monTitle.innerText= both;
}

function makeCalendar(){
    let monthCnt = 100;
    let cnt = 1;
    for(let i=0; i<6; i++){
        let $tr = document.createElement('tr');
        $tr.setAttribute('id', monthCnt);
        for(let j =0; j<7; j++){
        if((i===0 && j<first.getDay()) || cnt> calYear[first.getMonth()]){ //빈칸을 만드는 과정 요일에
            let $td = document.createElement('td');
            $tr.appendChild($td);
        }else{ //날짜입력
            let $td = document.createElement('td');
            $td.textContent = cnt;
            $td.setAttribute('id', cnt);
            $tr.appendChild($td);
            cnt++;
        }
    }
    monthCnt++;
    tBody.appendChild($tr);
    }
}
//도저히 모르겠어서 강재영씨 블로그 도움을 받았습니다. 이해는 하고 옮겼다. appendchild 와 createElement용도를 알겠다.
function highLight(){
    let now = date;
    let here = document.getElementById(now);
    here.style.color='red';
}

function next(){
    num++;
    let nextD = new Date(year, today.getMonth(), 1);
    
    while(tBody.hasChildNodes()){
        tBody.removeChild(tBody.firstChild);
    }

    function writeNewMonYear(num){
        let newD = new Date(year, today.getMonth()+num, 1);
        let monTitle = document.getElementById('monYear');
        let NMonth = monthArr[newD.getMonth()];
        let newYear =  newD.getFullYear();
                
        let NBoth = NMonth +  newYear;
        monTitle.innerText= NBoth;
    }

    writeNewMonYear(num);
    
    

    if(nextD.getMonth()<12){
        let nextD = new Date(year, today.getMonth()+num, 1);
        let monthCnt = 200;
        let cnt = 1;
        for(let i=0; i<6; i++){
            let $tr = document.createElement('tr');
            $tr.setAttribute('id', monthCnt);
            for(let j =0; j<7; j++){
            if((i===0 && j<nextD.getDay()) || cnt> calYear[nextD.getMonth()]){ //빈칸을 만드는 과정 요일에
                let $td = document.createElement('td');
                $tr.appendChild($td);
            }else{ //날짜입력
                let $td = document.createElement('td');
                $td.textContent = cnt;
                $td.setAttribute('id', cnt);
                $tr.appendChild($td);
                cnt++;
            }
        }
            let tableMain = document.getElementById('tableMain');
            monthCnt++;
            tBody.appendChild($tr);
            
            
        }

    }else{
        nextD.getMonth()=0;
        let monthCnt = 200;
        let cnt = 1;
        for(let i=0; i<6; i++){
            let $tr = document.createElement('tr');
            $tr.setAttribute('id', monthCnt);
            for(let j =0; j<7; j++){
            if((i===0 && j<nextD.getDay()) || cnt> calYear[nextD.getMonth()]){ //빈칸을 만드는 과정 요일에
                let $td = document.createElement('td');
                $tr.appendChild($td);
            }else{ //날짜입력
                let $td = document.createElement('td');
                $td.textContent = cnt;
                $td.setAttribute('id', cnt);
                $tr.appendChild($td);
                cnt++;
            }
        }
            let tableMain = document.getElementById('tableMain');
            monthCnt++;
            tBody.appendChild($tr);
            
        }


    }
    let forChangeD = new Date(year, today.getMonth()+num, 1);
    function changeDate(){
        let date = document.getElementById('date');
        date.removeChild(date.firstChild);
        let day = document.getElementById('day');
        day.removeChild(day.firstChild);
        date.innerText = forChangeD.getDate();
        day.innerText = week[forChangeD.getDay()];
    }
changeDate();

}    

function prev(){
    num--;
    let nextD = new Date(year, today.getMonth(), 1);
    
    while(tBody.hasChildNodes()){
        tBody.removeChild(tBody.firstChild);
    }
      
    function writeNewMonYear(num){
        let newD = new Date(year, today.getMonth()+num, 1);
        let monTitle = document.getElementById('monYear');
        let NMonth = monthArr[newD.getMonth()];
        let newYear =  newD.getFullYear();
                
        let NBoth = NMonth +  newYear;
        monTitle.innerText= NBoth;
    }

    writeNewMonYear(num);
    
    

    if(nextD.getMonth()<12){
        let nextD = new Date(year, today.getMonth()+num, 1);
        let monthCnt = 200;
        let cnt = 1;
        for(let i=0; i<6; i++){
            let $tr = document.createElement('tr');
            $tr.setAttribute('id', monthCnt);
            for(let j =0; j<7; j++){
            if((i===0 && j<nextD.getDay()) || cnt> calYear[nextD.getMonth()]){ //빈칸을 만드는 과정 요일에
                let $td = document.createElement('td');
                $tr.appendChild($td);
            }else{ //날짜입력
                let $td = document.createElement('td');
                $td.textContent = cnt;
                $td.setAttribute('id', cnt);
                $tr.appendChild($td);
                cnt++;
            }
        }
            let tableMain = document.getElementById('tableMain');
            monthCnt++;
            tBody.appendChild($tr);
            
            
        }

    }else{
        nextD.getMonth()=0;
        let monthCnt = 200;
        let cnt = 1;
        for(let i=0; i<6; i++){
            let $tr = document.createElement('tr');
            $tr.setAttribute('id', monthCnt);
            for(let j =0; j<7; j++){
            if((i===0 && j<nextD.getDay()) || cnt> calYear[nextD.getMonth()]){ //빈칸을 만드는 과정 요일에
                let $td = document.createElement('td');
                $tr.appendChild($td);
            }else{ //날짜입력
                let $td = document.createElement('td');
                $td.textContent = cnt;
                $td.setAttribute('id', cnt);
                $tr.appendChild($td);
                cnt++;
            }
        }
            let tableMain = document.getElementById('tableMain');
            monthCnt++;
            tBody.appendChild($tr);
            
        }


    }
    let forChangeD = new Date(year, today.getMonth()+num, 1);
    function changeDate(){
        let date = document.getElementById('date');
        date.removeChild(date.firstChild);
        let day = document.getElementById('day');
        day.removeChild(day.firstChild);
        date.innerText = forChangeD.getDate();
        day.innerText = week[forChangeD.getDay()];
    }
changeDate();

} 

function clickEvent(event){
    let me =event.target;
    let date = document.getElementById('date');
    date.removeChild(date.firstChild);
    date.innerText = me.id;
    let day = document.getElementById('day');
    day.removeChild(day.firstChild);
    day.innerText= week[me.cellIndex];
    //me.style.background = 'grey';
}

document.getElementById('next').addEventListener('click', next);
document.getElementById('prev').addEventListener('click', prev);  
document.getElementById('tBody').addEventListener('click', clickEvent);
    
function init(){
writeDate();
writeDay();
writeMonYear();
makeCalendar();
highLight();
}

init();