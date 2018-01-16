//버튼에 마우스 오버하는 것에 따라서 텍스트 색깔 제목 바꾸기
//1.버튼을 마우스 오버 할 때
//1-1. 버튼을 찾는다.(className, color-btn)
  var buttons = document.getElementsByClassName('color-btn');
  console.log(buttons);

  //반복되는 부분들을 함수로 묶어주면서 더 좋은 코드로 만들어보자.
  //함수 표현식
  var setTableAttribute = function(classList){
    var table = document.getElementsByTagName('table')[0];
    table.setAttribute('class',classList);
  }

  //함수 선언식
  // function setTableAttribute = function(classList){
  //   var table = document.getElementsByTagName('table')[0];
  //   table.setAttribute('class',classList);
  // }

//해결2.각 버튼에 각각 다른 이벤트 핸들러를 설정한다.
  buttons[0].onmouseover = function(){
    setTableAttribute('table table tavle-hover text-danger');
  }
  buttons[1].onmouseover = function(){
    setTableAttribute('table table tavle-hover text-primary');
  }
  buttons[2].onmouseover = function(){
    setTableAttribute('table table tavle-hover text-success');
  }


//1-2. 버튼을 순회하면서 이벤트 리스너를 달아준다.
  // for(var i=0; i<buttons.length; i++){
  //   var btn = buttons[i];
  //   buttons[i].onmouseover = function(){
  //     //2. table에 해당하는 HTML element를 찾아서.
  //     var table = document.getElementsByTagName('table');
  //     // 부트스트랩의 클래스를 이용해 색을 바꾸자.
  //     // 클래스 명을 바꿔야 하기 때문에 자바스크립트를 이용해서 클래스 이름을 동적으로 바꿔보자.
  //     table[0].classList.add('text-success');
  //     console.log(btn);
  //     console.log("클래스 냠냠");
  //   }
  // }

//3. color: red/blue/green의 속성을 부여한다.

//해결 방법
//1.각 버튼에 있는 클래스에 따라서 다른 클래스를 부여한다.(조건문)


var func1 = function(){
  //실행문
}

function func2(){
  //실행문
}
