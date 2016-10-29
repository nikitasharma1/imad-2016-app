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
        content:   `<p>
                        About me
                    </p>
                    `
    },
    'portfolio': {
        title: 'My Portfolio',
        heading: 'My Portfolio',
        content:   `<p>
                        My portfolio
                    </p>
                    `
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
/*var article = {
    'about': {
        'title': 'about',
        'heading': 'ABOUT ME',
        'content': {
            'info': {
               'ACADEMICS':['a', 'b', 'c'],
               'WEB DEVELOPMENT SKILLS':[],
               'PROJECTS':[],
               'CERTIFICATIONS':[],
               'OTHER SKILLS':[],
            }
        }
    },
    'portfolio': {
        'title': 'about',
        'heading': 'ABOUT ME',
        'content': {
            
        }
    },
    'contact': {
        'title': 'contact',
        'heading': 'ABOUT ME',
        'content': `<form>
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
    }
};*/

function createTemplate(data){
    var title = data.title;
    var heading= data.heading;
    var content= data.content;
 /* var title = data.title;
    var heading = data.heading;
    var pageContent = function callPageContent(title1) {
        var output = '';
        if (title1 === 'about') {
            output += 'it is about me';
            var info = [];
            

        } 
        else if (title1 === 'portfolio') {
            output += 'this is my portfolio';
        }
        else if (title1 === 'contact') {
            //output += 'contact me here';
            output += 
            `<form>
                <div class="col-md-8">
                    <label>Your Email</label><br/>
                    <input type="email" class="form-control pad"/><br/>                                
                    <label>Subject</label><br/>
                    <input type="text" class="form-control pad"/><br/>                                
                    <label>Message</label><br/>
                    <textarea class="form-control" rows="10"></textarea><br/>
                    <button class="btn btn-primary">Send</button><br/>
                </div>
            </form>`;
        }
        else {
            //error
        }
        return output;
    };*/

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
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
                <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
            </head>
            <body>
                <div class="container">
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
                    <div id="div-height-60"></div>
                    <h3>${heading}</h3>
                    <div id="${title}">
                      ${content}
                    </div>
                </div>    
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

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
