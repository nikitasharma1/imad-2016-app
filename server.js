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
                    title: `
                    
                	<div id="myCarousel" class="carousel slide thumbnail" data-ride="carousel">
                        
                    
                        <!-- Wrapper for slides -->
                        <div class="carousel-inner" role="listbox">
                          <div class="item active">
                            <img src="http://placehold.it/400x250" alt="" >
                          </div>
                    
                          <div class="item">
                            <img src="http://placehold.it/400x250" alt="" >
                          </div>
                        
                          <div class="item">
                            <img src="http://placehold.it/400x250" alt="" >
                          </div>
                    
                          <div class="item">
                            <img src="http://placehold.it/400x250" alt="" >
                          </div>
                        </div>
                    
                        <!-- Left and right controls -->
                        <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
                          <span class="glyphicon glyphicon-chevron-left btn-sm" aria-hidden="true"></span>
                          <span class="sr-only">Previous</span>
                        </a>
                        <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
                          <span class="glyphicon glyphicon-chevron-right btn-sm" aria-hidden="true"></span>
                          <span class="sr-only">Next</span>
                        </a>
                      </div>		
 
                	<script>
                	$('.carousel').carousel({
                      interval: 20000
                    });
                	</script>
                    `,
                    arr: [1, 2, 3]
                },
                {
                    title: `
                    
                	<div id="myCarousel1" class="carousel slide thumbnail" data-ride="carousel">
                        
                    
                        <!-- Wrapper for slides -->
                        <div class="carousel-inner" role="listbox">
                          <div class="item active">
                            <img src="http://placehold.it/400x250" alt="" >
                          </div>
                    
                          <div class="item">
                            <img src="http://placehold.it/400x250" alt="" >
                          </div>
                        
                          <div class="item">
                            <img src="http://placehold.it/400x250" alt="" >
                          </div>
                    
                          <div class="item">
                            <img src="http://placehold.it/400x250" alt="" >
                          </div>
                        </div>
                    
                        <!-- Left and right controls -->
                        <a class="left carousel-control" href="#myCarousel1" role="button" data-slide="prev">
                          <span class="glyphicon glyphicon-chevron-left btn-sm" aria-hidden="true"></span>
                          <span class="sr-only">Previous</span>
                        </a>
                        <a class="right carousel-control" href="#myCarousel1" role="button" data-slide="next">
                          <span class="glyphicon glyphicon-chevron-right btn-sm" aria-hidden="true"></span>
                          <span class="sr-only">Next</span>
                        </a>
                      </div>		
 
                	<script>
                	$('.carousel').carousel({
                      interval: 20000
                    });
                	</script>
                    `,
                    arr: [1, 2, 3]
                },
                {
                    title: `
                    
                	<div id="myCarousel2" class="carousel slide thumbnail" data-ride="carousel">
                        
                    
                        <!-- Wrapper for slides -->
                        <div class="carousel-inner" role="listbox">
                          <div class="item active">
                            <img src="http://placehold.it/400x250" alt="" >
                          </div>
                    
                          <div class="item">
                            <img src="http://placehold.it/400x250" alt="" >
                          </div>
                        
                          <div class="item">
                            <img src="http://placehold.it/400x250" alt="" >
                          </div>
                    
                          <div class="item">
                            <img src="http://placehold.it/400x250" alt="" >
                          </div>
                        </div>
                    
                        <!-- Left and right controls -->
                        <a class="left carousel-control" href="#myCarousel2" role="button" data-slide="prev">
                          <span class="glyphicon glyphicon-chevron-left btn-sm" aria-hidden="true"></span>
                          <span class="sr-only">Previous</span>
                        </a>
                        <a class="right carousel-control" href="#myCarousel2" role="button" data-slide="next">
                          <span class="glyphicon glyphicon-chevron-right btn-sm" aria-hidden="true"></span>
                          <span class="sr-only">Next</span>
                        </a>
                      </div>		
 
                	<script>
                	$('.carousel').carousel({
                      interval: 20000
                    });
                	</script>
                    `,
                    arr: [1, 2, 3]
                },
                {
                    title: `
                    
                	<div id="myCarousel3" class="carousel slide thumbnail" data-ride="carousel">
                        
                    
                        <!-- Wrapper for slides -->
                        <div class="carousel-inner" role="listbox">
                          <div class="item active">
                            <img src="http://placehold.it/400x250" alt="" >
                          </div>
                    
                          <div class="item">
                            <img src="http://placehold.it/400x250" alt="" >
                          </div>
                        
                          <div class="item">
                            <img src="http://placehold.it/400x250" alt="" >
                          </div>
                    
                          <div class="item">
                            <img src="http://placehold.it/400x250" alt="" >
                          </div>
                        </div>
                    
                        <!-- Left and right controls -->
                        <a class="left carousel-control" href="#myCarousel3" role="button" data-slide="prev">
                          <span class="glyphicon glyphicon-chevron-left btn-sm" aria-hidden="true"></span>
                          <span class="sr-only">Previous</span>
                        </a>
                        <a class="right carousel-control" href="#myCarousel3" role="button" data-slide="next">
                          <span class="glyphicon glyphicon-chevron-right btn-sm" aria-hidden="true"></span>
                          <span class="sr-only">Next</span>
                        </a>
                      </div>		
 
                	<script>
                	$('.carousel').carousel({
                      interval: 20000
                    });
                	</script>
                    `,
                    arr: [1, 2, 3]
                },
                {
                    title: `
                    
                	<div id="myCarousel4" class="carousel slide thumbnail" data-ride="carousel">
                        
                    
                        <!-- Wrapper for slides -->
                        <div class="carousel-inner" role="listbox">
                          <div class="item active">
                            <img src="http://placehold.it/400x250" alt="" >
                          </div>
                    
                          <div class="item">
                            <img src="http://placehold.it/400x250" alt="" >
                          </div>
                        
                          <div class="item">
                            <img src="http://placehold.it/400x250" alt="" >
                          </div>
                    
                          <div class="item">
                            <img src="http://placehold.it/400x250" alt="" >
                          </div>
                        </div>
                    
                        <!-- Left and right controls -->
                        <a class="left carousel-control" href="#myCarousel4" role="button" data-slide="prev">
                          <span class="glyphicon glyphicon-chevron-left btn-sm" aria-hidden="true"></span>
                          <span class="sr-only">Previous</span>
                        </a>
                        <a class="right carousel-control" href="#myCarousel4" role="button" data-slide="next">
                          <span class="glyphicon glyphicon-chevron-right btn-sm" aria-hidden="true"></span>
                          <span class="sr-only">Next</span>
                        </a>
                      </div>		
 
                	<script>
                	$('.carousel').carousel({
                      interval: 20000
                    });
                	</script>
                    `,
                    arr: [1, 2, 3]
                },
                {
                    title: `
                    
                	<div id="myCarousel5" class="carousel slide thumbnail" data-ride="carousel">
                        
                    
                        <!-- Wrapper for slides -->
                        <div class="carousel-inner" role="listbox">
                          <div class="item active">
                            <img src="http://placehold.it/400x250" alt="" >
                          </div>
                    
                          <div class="item">
                            <img src="http://placehold.it/400x250" alt="" >
                          </div>
                        
                          <div class="item">
                            <img src="http://placehold.it/400x250" alt="" >
                          </div>
                    
                          <div class="item">
                            <img src="http://placehold.it/400x250" alt="" >
                          </div>
                        </div>
                    
                        <!-- Left and right controls -->
                        <a class="left carousel-control" href="#myCarousel5" role="button" data-slide="prev">
                          <span class="glyphicon glyphicon-chevron-left btn-sm" aria-hidden="true"></span>
                          <span class="sr-only">Previous</span>
                        </a>
                        <a class="right carousel-control" href="#myCarousel5" role="button" data-slide="next">
                          <span class="glyphicon glyphicon-chevron-right btn-sm" aria-hidden="true"></span>
                          <span class="sr-only">Next</span>
                        </a>
                      </div>		
 
                	<script>
                	$('.carousel').carousel({
                      interval: 20000
                    });
                	</script>
                    `,
                    arr: [1, 2, 3]
                },
                {
                    title: `
                    
                	<div id="myCarousel6" class="carousel slide thumbnail" data-ride="carousel">
                        
                    
                        <!-- Wrapper for slides -->
                        <div class="carousel-inner" role="listbox">
                          <div class="item active">
                            <img src="http://placehold.it/400x250" alt="" >
                          </div>
                    
                          <div class="item">
                            <img src="http://placehold.it/400x250" alt="" >
                          </div>
                        
                          <div class="item">
                            <img src="http://placehold.it/400x250" alt="" >
                          </div>
                    
                          <div class="item">
                            <img src="http://placehold.it/400x250" alt="" >
                          </div>
                        </div>
                    
                        <!-- Left and right controls -->
                        <a class="left carousel-control" href="#myCarousel6" role="button" data-slide="prev">
                          <span class="glyphicon glyphicon-chevron-left btn-sm" aria-hidden="true"></span>
                          <span class="sr-only">Previous</span>
                        </a>
                        <a class="right carousel-control" href="#myCarousel6" role="button" data-slide="next">
                          <span class="glyphicon glyphicon-chevron-right btn-sm" aria-hidden="true"></span>
                          <span class="sr-only">Next</span>
                        </a>
                      </div>		
 
                	<script>
                	$('.carousel').carousel({
                      interval: 20000
                    });
                	</script>
                    `,
                    arr: [1, 2, 3]
                }
              
            ]
        }
    },
    'portfolio': {
        title: 'My Portfolio',
        heading: 'My Portfolio',
        content:  [`
                    <div class="dropdown">
                    <img src="http://placehold.it/400x250" class="thumbnail slide hover1"  alt="" >
                    <div class="dropdown-content img-responsive">
                    <p>Hello World!</p>
                    </div>
                    </div>
                    `
                	]
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
                out += '';
                for(var j in content1) {
                    out += '<div class="text-center col-md-4" id="slide-container">'+content1[j]+'</div>';
                }
                
            }
            else 
            {
                out += '';
                for(var i in content1.info) {
                out += '<div class="text-center col-md-3" id="slide-container">'+content1.info[i].title+'</div>';
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
                
                <link href="https://fonts.googleapis.com/css?family=Molengo|Philosopher" rel="stylesheet"/>
                <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"/>
                <link href="/ui/style.css" rel="stylesheet" />
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
                    <div id="${title}" class="row">
                      <!--${content}-->
                      ${getContent(content)}
                    </div>
                </div>    
                <!--<script type="text/javascript" src="/ui/main.js"></script>-->
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
