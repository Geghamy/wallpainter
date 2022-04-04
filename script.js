const body = document.getElementsByTagName('body');

const colors = ['red', '#FFA500', 'rgb(255,255,0)', 'purple'];
color.innerHTML = colors[0];
let index = 0;
document.body.style.backgroundColor = colors[0];

btn.addEventListener('click', function onClick() {

  document.body.style.backgroundColor = colors[index+1];
  color.innerHTML = colors[index+1];
  
  index = index >= colors.length - 2 ? 0 : index + 1;
});
