const students = ["Park", "Kim", "Lee", "Kang"];   

//기본 for문
document.write(`기본 for문: <br>`); //document.write로 웹 브라우저에 "기본 for문: "으로 띄우고 <br>로 줄바꿈 함
for (let i =0; i <students.length; i++) { // i는 0부터 students 배열의 길이전까지, 실행할때마다 i값 1씩 증가
  document.write(`${students[i]}.`) // document.write로 웹 브라우저에 표시, `${students[i]}`로 students배열 안에 있는 값들 1개씩 꺼냄
  document.write(`<br>`);
}

// foreach문
document.write(`forEach문: <br>`); // document.write로 웹 브라우저에 "forEach문: "으로 띄우고 <br>
students.forEach(function(student) { // students배열 각 요소들을 stduent라는 매개변수에 받아서 forEach문으로 통해 각각 가져올 예정
  document.write(`${student}. `) // document.write를 통해 웹 브라우저에 표시해줌, student
  document.write(`<br><br>`);
});

//화살표 함수를 사용하면?
document.write(`forEach 화살표 함수 사용: <br>`);
students.forEach(student => document.write(`${student}. `)); // student라는 매개변수에 화살표 함수 사용해서 바로 student 배열을 각각 꺼내면서 출력함
document.write(`<br><br>`);

//forof문
document.write(`forof문: <br>`);
for (let student of students) {  
  document.write(`${student}. `);
}
document.write(`<br><br>`)

//forin문
document.write(`forin문: <br>`);
for (let student in students) {  
  document.write(`${student}. `);
}
document.write(`<br><br>`)
for (let student in students) {  
  document.write(`${students[student]}. `);
}