let stars = parseInt(prompt("별의 갯수 : "));
let stars2 = stars
//while 문으로 별찍기
while(stars > 0) {
  document.write('*');
  stars--;
}
document.write(`<br><br>`)
//do while 문으로 별찍기
do {
  document.write('*');
  stars2--;
} while (stars2 > 0)