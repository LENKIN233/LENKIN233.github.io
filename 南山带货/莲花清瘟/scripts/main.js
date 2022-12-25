let fandongImage = document.querySelector('img')

fandongImage.onclick = function(){
  let mySrc = fandongImage.getAttribute('src');
  if(mySrc === 'images/winnie.jpg'){
  fandongImage.setAttribute('src','images/winniexi.jpg')
  } else {
    fandongImage.setAttribute('src','images/winnie.jpg');
  }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
  let myName =prompt('尊姓大名');
  localStorage.setItem('name',myName);
  myHeading.textContent = '坚持习近平新时代中国特色社会主义思想，'+myName;
}
if(!localStorage.getItem('name')){
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = '坚持习近平新时代中国特色社会主义思想，'+storedName;
}
myButton.onclick = function(){
  setUserName();
}