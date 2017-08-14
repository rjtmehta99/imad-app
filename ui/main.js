console.log('Loaded!');

//Move the image when click
var img = document.getElementById('pic');
var marginLeft = 0;
function moveRight()
{
    marginLeft = marginLeft + 1;
    img.style.marginLeft = marginLeft + 'px';
}

img.onclick = function()
{
  var interval = setInterval(moveRight, 100);   
};