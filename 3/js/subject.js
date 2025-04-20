let subject = prompt("신청할 과목을 선택하세요. 1-HTML, 2-CSS, 3-Javascript"); // 신청할 과목을 입력하면 값이 subject 변수에 들어감
if(subject) { // 만약 subject 변수에 값이 있으면
  switch(subject) { //switch문을 실행시켜라.
  case "1" : document.write("HTML을 신청했습니다."); 
    break; // 1을 입력하면 "HTML을 신청했습니다"문구가 나오고 BREAK로 빠져나옴
  case 2 : document.write("CSS를 신청했습니다.");
    break; // 2를 입력하면 "CSS를 신청했습니다"문구가 나오고 BREAK로 빠져나옴
  case "3" : document.write("Javascript를 신청했습니다.");
    break; // 3을 입력하면 "Javascript를 신청했습니다"나오고 break로 빠져나옴, 만약에 case 2에 break가 빠지면 2를 입력했을때 3번 결과랑 같이 나오는 현상이 발생함.
  default : document.write("잘못 입력했습니다. 다시 입력해주세요.")
  }
}