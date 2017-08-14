var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles=
{
    'article-one':
    {
    title: 'Article One',
    heading:'Article One',
    url:`<img src="https://s-media-cache-ak0.pinimg.com/736x/df/d9/35/dfd935d04bfb1956520526c7d0d527a5--yellow-coldplay-lyrics-quote-design.jpg" style="vertical-align:top" alt="Image Not Displayed">`,
    date:'August 14th, 2017',
    content:`Look at the stars, 
                Look how they shine for you!`
                
},

    'article-two': 
    {
    title: 'Article Two',
    heading:'Article Two',
    url:`<img src="http://www.stephaniedaily.com/wp-content/uploads/2014/08/coldplay.jpg" alt="Image Not Displayed">`,
    date:'August 14th, 2017',
    content:`Cause you're a sky,
             You're a sky full of stars.`
},

    'article-three':
    {
    title: 'Article Two',
    heading:'Article Two',
    url:`<img src="https://s-media-cache-ak0.pinimg.com/236x/4b/e8/17/4be817950359dbfdfb642d24d078abac--cellphone-wallpaper-phone-wallpapers.jpg" alt="Image Not Displayed">`,
    date:'August 14th, 2017',
    content:`Lights will guide you home,
             And I will try to fix you.`

}

};

function createTemplate(data)
{
        var date = data.date;
        var title = data.title;
        var heading = data.heading;
        var content = data.content;
        var url = data.url;
        var htmlTemplate = `<html>
        
        <head>
            <title>
                 ${title}
            </title>
        <link href="/ui/style.css" rel="stylesheet" />
        
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        </head>
        
        <body>
           <div class="container">
                <div>
                    <a href="/">Home</a>
                </div>
                <hr/>
                
                <h1> 
                    ${heading}
                </h1>
                
                <div>
                    ${date}
                </div>
                
                <div> 
                    <p style="text-align:center">
                        ${content}
                    </p>
                        ${url}
                                    </div>
            
            
            </div>
        </body>
        
        </html>
        `;
        return htmlTemplate;
}



app.get('/', function (req, res) 
{
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName', function(req,res)
{
    //articleName== article-one
    //articles[articleName] == {} content object for article one 
   var articleName = req.params.articleName;
   res.send(createTemplate(articles[articleName]));
});

app.get('/article-two', function(req,res)
{
   res.sendFile(path.join(__dirname, 'ui', 'article-two.html')); 
});

app.get('/article-three', function(req,res)
{
   res.sendFile(path.join(__dirname, 'ui', 'article-three.html')); 
});

app.get('/ui/style.css', function (req, res) 
{
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) 
{
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) 
{
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
