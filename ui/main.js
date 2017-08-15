console.log('Loaded!');

//Move the image when click
/*
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
*/

//Counter Code
var button = document.getElementById('counter');
button.onclick = function()
{
    //Make request to the counter end point
    
    //Capture the response and store it in the variable
    
    //Render the variable in the correct span
    counter= counter+1;
    var span= dpcument.getElementById('count');
    span.innerHTML = counter.toString();
    
};