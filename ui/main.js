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
    //Create a request
    var request = new XMLHttpRequest();
  
    //Capture the response and store it in the variable
    request.onreadystatechange = function()
    {
        if(request.readyState === XMLHttpRequest.DONE)
        {
            //Take some action
            if(request.status === 200)
            {
                var counter = request.responseText;
                var span= document.getElementById('count');
                span.innerHTML = counter.toString();            
            }
        }
    };
    
    //Make a request
    request.open('GET', 'http://rjtmehta99.imad.hasura-app.io/counter', true);
    request.send(null);
    
};

var nameInput = document.getElementById('name');
var name = nameInput.value;
var submit = document.getElementById('submit_btn');
submit.onclick = function()
{
  //Make a request to the server and send the name
  
  //Capture a list of names and render it as a list
  var names = ['name1', 'name2', 'name3', 'name4'];
  var list= '';
  for(var i=0;i<names.length;i++)
  {
      list += '<li>' + names[i] + '</li>';
      
  }
  
  var ul = document.getElementById('namelist');
  ul.innerHTML = list;
  
  
  
  
};

































