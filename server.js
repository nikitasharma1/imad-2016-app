var express = require('express');
var morgan = require('morgan');
var path = require('path');

var Pool = require('pg').Pool;
var config = {
  host: 'db.imad.hasura-app.io',
  user: 'nikitasharma1',
  database: 'nikitasharma1',
  port: '5432',
  password: process.env.DB_PASSWORD
};


var app = express();
app.use(morgan('combined'));

function createTemplate(data){
    var title = data.title;
    var heading = data.heading;
    
    var content = function callContent(title1) {
        var out='';
        if (title1 === 'contact') {
            out += ` <form>
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
        else if(title1 === 'portfolio') {
            var info = {'ACADEMICS':'', 'INTERNSHIPS':'', 'WORKSHOPS':'', 'WEB DEVELOPMENT SKILLS':'', 'PROJECTS':'', 'CERTIFICATIONS':'', 'OTHER SKILLS':''};
            typeof(Object.keys(info));
            // for(var i in info) {
            //     out += '<span class="category">'+Object.keys(info)+'</span><br/>';
            // }
        }
        else {
            out += 'know me';
        }
        return out;
    };
    
   //////////////////////////////////////////////////////////////////////// 
    // var heading1 = function fun (test11){
    //     var i;
    //     if(test11 === 'contact') {
    //       i = 'contact me';
           
    //     }
    //     else if(test11 === 'portfolio') {
    //       i = 'my portfolio';  
    //     }
    //     else {
    //         i = 'know me';
    //     }
        
    //     return i;
    // };
  //////////////////////////////////////////////////////////////////////  ???
    // var contentout = function cont (test22) {
    //   if (test22 === 'about') {
    //       var content;
    //       query = "SELECT info from info WHERE article-id=1";
    //       var q = pool.query(query, function(err, res) {
    //           var out='';
    //           if (res) {
    //               if(res.rows.length > 0) {
    //                   out = 'success';
    //               }
    //           }
    //           return out;
    //       });
    //       content = q();
    //   } 
    // } ;
    
    var htmlTemplate = `
        <!DOCTYPE html>
        <html>
            <head>
                <title>
                    ${title}
                </title>
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <link href="/ui/style.css" rel="stylesheet" />
                <link href="https://fonts.googleapis.com/css?family=Molengo|Philosopher" rel="stylesheet">
                <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
                <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
            </head>
            <body>
                <div class="container">
                    <nav class="navbar navbar-inverse navbar-fixed-top" id="main-nav">
                      <div class="container-fluid container" id="main-nav-inner-div">
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
                            <li><a href="/article/about" class="color-white"> ABOUT ME </a></li>
                            <li><a href="/article/portfolio" class="color-white"> PORTFOLIO </a></li>
                            <li><a href="/article/contact" class="color-white"> CONTACT ME </a></li>
                          </ul>
                        </div>
                      </div>
                    </nav>
                    <div id="div-height-60"></div>
                    <h3>${heading}</h3>
                    <div>
                       ${content(title)}  
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

var pool = new Pool(config); 
app.get('/article/:articleName', function (req, res) {
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
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

// app.get('/ui/madi.png', function (req, res) {
//   res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
// });

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});