const btn = document.getElementById('btn');
const wall = document.getElementById('wall');
const color = document.getElementById('color');

const colors = ['red', '#FFA500', 'rgb(255,255,0)', 'purple'];
color.innerHTML = colors[1];
 let index = 0;

btn.addEventListener('click', function onClick() {
  wall.style.backgroundColor = colors[index];
  color.innerHTML = colors[index];
  
  index = index >= colors.length - 1 ? 0 : index + 1;
});