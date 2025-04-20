const num1 = parseInt(prompt("첫번째 양의 정수 :"));
const num2 = parseInt(prompt("두번째 양의 정수 :"));
let str; // num1과 num2에 들어간 숫자를 바로 정수로 변환시켜줌

//AND 연산. 둘 다 true여야 결괏값 true 
if(num1 % 2 === 0 && num2 % 2 === 0) { // num1이 2로 나눴을 때 0이고 num2도 2로 나눴을 때 0 즉, 2개의 조건이 true여야만 실행함
  str = "두 수 모두 짝수입니다.";
} else {
  str = "짝수가 아닌 수가 있습니다.";
}
alert(str);