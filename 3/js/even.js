let userNumber = prompt("숫자를 입력하세요."); // prompt창에 입력 받은 숫자가 userNumber라는 변수에 들어가게 됨

if (userNumber !== null) {
  userNumber = parseInt(userNumber); //null이 아니라면 정수로 변환
  (userNumber % 2 === 0)?alert(`${userNumber} : 짝수`):alert(`${userNumber} : 홀수`); //userNumber에 들어간 값이 2로 나눴을 때 0이면 짝수 아니면 홀수
}