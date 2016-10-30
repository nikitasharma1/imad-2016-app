var express = require('express');
var morgan = require('morgan');
var path = require('path');

/*var Pool = require('pg').Pool;
var config = {
    host: 'db.imad.hasura-app.io',
    user: 'nikitasharma1',
    database: 'nikitasharma1',
    port: '5432',
    password: process.env.DB_PASSWORD
};*/

var app = express();
app.use(morgan('combined'));

var articles = {   
    'about': {
        title: 'About Me',
        heading: 'About Me',
        content:  {
            info: [
                {
                    title: `<!--imported-->
                    <div class="w3-container">
                      <h2>Slideshow Indicators</h2>
                      <p>An example of using buttons to indicate how many slides there are in the slideshow, and which slide the user is currently viewing.</p>
                    </div>
                    
                    <div class="w3-content w3-display-container" style="max-width:800px">
                      <img class="mySlides" src="img_nature_wide.jpg" style="width:100%">
                      <img class="mySlides" src="img_fjords_wide.jpg" style="width:100%">
                      <img class="mySlides" src="img_mountains_wide.jpg" style="width:100%">
                      <div class="w3-center w3-section w3-large w3-text-white w3-display-bottommiddle" style="width:100%">
                        <div class="w3-left w3-padding-left w3-hover-text-khaki" onclick="plusDivs(-1)">&#10094;</div>
                        <div class="w3-right w3-padding-right w3-hover-text-khaki" onclick="plusDivs(1)">&#10095;</div>
                        <span class="w3-badge demo w3-border w3-transparent w3-hover-white" onclick="currentDiv(1)"></span>
                        <span class="w3-badge demo w3-border w3-transparent w3-hover-white" onclick="currentDiv(2)"></span>
                        <span class="w3-badge demo w3-border w3-transparent w3-hover-white" onclick="currentDiv(3)"></span>
                      </div>
                    </div>
                    
                    <script>
                    var slideIndex = 1;
                    showDivs(slideIndex);
                    
                    function plusDivs(n) {
                      showDivs(slideIndex += n);
                    }
                    
                    function currentDiv(n) {
                      showDivs(slideIndex = n);
                    }
                    
                    function showDivs(n) {
                      var i;
                      var x = document.getElementsByClassName("mySlides");
                      var dots = document.getElementsByClassName("demo");
                      if (n > x.length) {slideIndex = 1}
                      if (n < 1) {slideIndex = x.length}
                      for (i = 0; i < x.length; i++) {
                         x[i].style.display = "none";
                      }
                      for (i = 0; i < dots.length; i++) {
                         dots[i].className = dots[i].className.replace(" w3-white", "");
                      }
                      x[slideIndex-1].style.display = "block";
                      dots[slideIndex-1].className += " w3-white";
                    }
                    </script>

                    <img class="slide img-responsive thumbnail" src="http://placehold.it/400x250" alt="ACADEMICS">`,
                    arr: [1, 2, 3]
                },
                {
                    title: `<img class="slide img-responsive thumbnail" src="http://placehold.it/400x250" alt="WEB DEVELOPMENT SKILLS">`,
                    arr: [4, 5, 6]
                },
                {
                    title: `<img class="slide img-responsive thumbnail" src="http://placehold.it/400x250" alt="PROJECTS">`,
                    arr: [7, 8, 9]
                },
                {
                    title: `<img class="slide img-responsive thumbnail" src="http://placehold.it/400x250" alt="CERTIFICATIONS">`,
                    arr: [10, 11, 12]
                },
                {
                    title: `<img class="slide img-responsive thumbnail" src="http://placehold.it/400x250" alt="OTHER SKILLS">`,
                    arr: [13, 14, 16]
                },
                {
                    title: `<img class="slide img-responsive thumbnail" src="http://placehold.it/400x250" alt="OTHER SKILL">`,
                    arr: [17, 18, 19]
                }
            ]
        }
    },
    'portfolio': {
        title: 'My Portfolio',
        heading: 'My Portfolio',
        content:  ['testing 1234','665463']
    },
    'contact': {
        title: 'Contact Me',
        heading: 'Contact Me',
        content:   `<form>
                        <div class="col-md-8">
                            <label>Your Email</label><br/>
                            <input type="email" class="form-control pad"/><br/>                                
                            <label>Subject</label><br/>
                            <input type="text" class="form-control pad"/><br/>                                
                            <label>Message</label><br/>
                            <textarea class="form-control" rows="10"></textarea><br/>
                            <button class="btn btn-primary">Send</button><br/>
                        </div>
                    </form>`
    },
};    


function createTemplate(data){
    var data1 = data;
    var title = data.title;
    var heading = data.heading;
    var content = data.content;

    var getContent = function getcontent(content1) {
        var out = '';
        if(typeof(content1) === 'object'){
            if(content1[0]) {
                out += '<div><ul>';
                for(var j in content1) {
                    out += '<li>'+content1[j]+'</li><br/>';
                }
                out += '</ul><div>'; 
            }
            else 
            {
                out += '';
                for(var i in content1.info) {
                out += '<div class="text-center col-md-4" id="slide-container">'+content1.info[i].title+'</div>';
                }
            
            }
        } 
      
        else if (typeof(content1) === 'string'){
            out += content1;
        }
        else {
            //error
        }
        return out;
    };
    

    var htmlTemplate = `
        <!DOCTYPE html>
        <html>
            <head>
                <title>
                    ${title}
                </title>
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <link href="/ui/style.css" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css?family=Molengo|Philosopher" rel="stylesheet"/>
                <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"/>
                <link rel="stylesheet" href="http://www.w3schools.com/lib/w3.css">
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
                <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
            </head>
            <body>
                
                    <nav class="navbar navbar-inverse navbar-fixed-top">
                      <div class="container-fluid container">
                        <div class="navbar-header">
                          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar-collapse-1" aria-expanded="false">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                          </button>
                          <a class="navbar-brand color-white" href="/"> NIKITA SHARMA </a>   
                        </div>
                        <div class="collapse navbar-collapse" id="navbar-collapse-1">
                          <!-- <ul class="nav navbar-nav"></ul> -->
                          <ul class="nav navbar-nav navbar-right text-center">
                            <li><a href="/" class="color-white"> HOME </a></li>
                            <li><a href="/about" class="color-white"> ABOUT ME </a></li>
                            <li><a href="/portfolio" class="color-white"> PORTFOLIO </a></li>
                            <li><a href="/contact" class="color-white"> CONTACT ME </a></li>
                          </ul>
                        </div>
                      </div>
                    </nav>
                <div class="container-fluid">
                    <div id="div-height-50"></div>
                    <h3 class="text-center">${heading}</h3>
                    <div id="${title}" class="text-center row">
                      <!--${content}-->
                      ${getContent(content)}
                    </div>
                </div>    
                <script type="text/javascript" src="/ui/main.js"></script>
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
                <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
            </body>
        </html>
    `;
    
    return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var counter = 0;
app.get('/counter', function(req, res) {
    counter = counter + 1;
    res.send(counter.toString());
});

//var pool = new Pool(config); 

/*app.get('/:articleName', function (req, res) {
    var articleName = req.params.articleName;
    pool.query("SELECT * from article  WHERE title = '"+ articleName + "'", function (err, result) {
        if (err) {
            res.status(500).send(err.toString());
        }
        else {
            if (result.rows.length === 0) {
                res.status(404).send(err.toString());
            }
            else {
                var articleData = result.rows[0];
                res.send(createTemplate(articleData));
            }
        }
    });
});*/



app.get('/:articleName', function (req, res) {
  var articleName = req.params.articleName;
  res.send(createTemplate(articles[articleName]));
});

app.get('/ui/:x', function (req, res) {
    var x = req.params.x;
    res.sendFile(path.join(__dirname, 'ui', x));
});

// app.get('/ui/style.css', function (req, res) {
//   res.sendFile(path.join(__dirname, 'ui', 'style.css'));
// });

// app.get('/ui/main.js', function (req, res) {
//   res.sendFile(path.join(__dirname, 'ui', 'main.js'));
// });

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
