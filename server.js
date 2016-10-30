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
                    <div class="row">
                		<div class="col-sm-13">
                			<div id="slider" class="carousel slide" data-ride="carousel">
                				<div class="carousel-inner" role="listbox">
                					<div class="item active" id="img-hold">
                						<img class="slides" src="http://placehold.it/400x250" alt="fruits"/>
                						<div class="carousel-caption">
                							<h3>slide-1</h3>
                						</div>
                					</div>
                					<div class="item" id="img-hold">
                						<img class="slides" src="http://placehold.it/400x250" alt="fruits"/>
                						<div class="carousel-caption">
                							<h3>slide-2</h3>
                						</div>
                					</div>
                					<div class="item" id="img-hold">
                						<img class="slides" src="http://placehold.it/400x250" alt="fruits"/>
                						<div class="carousel-caption">
                							<h3>slide-3</h3>
                						</div>
                					</div>
                				</div>
                				<!--<a class="left carousel-control" href="#slider" role="button" data-slide="prev">
                					<span class="fa fa-chevron-circle-left" id="left-control" aria-hidden="true"></span>
                					<span class="sr-only">Previous</span>
                				</a>
                				<a class="right carousel-control" href="#slider" role="'button" data-slide="next">
                					<span class="fa fa-chevron-circle-right" id="right-control"aria-hidden="true"></span>
                					<span class="sr-only">Next</span>
                				</a>-->
                			</div>
                		</div>
                	</div>
                	<script>
                	$('.carousel').carousel({
                      interval: 2000
                    });
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
