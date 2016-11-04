/*CODE CLEANING PENDING*/
var express = require('express');
var morgan = require('morgan');
var path = require('path');

// var Pool = require('pg').Pool;
// var config = {
//     host: 'db.imad.hasura-app.io',
//     user: 'nikitasharma1',
//     database: 'nikitasharma1',
//     port: '5432',
//     password: process.env.DB_PASSWORD
// };

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
                    
                	<div id="myCarousel" class="carousel slide thumbnail" data-ride="carousel" data-interval="false">
                        
                    
                        <!-- Wrapper for slides -->
                        <div class="carousel-inner" role="listbox">
                          <div class="item active" >
                            <img src="http://nikitasharma.neocities.org/skills/skills.jpg" alt=" MY SKILLS" >
                          </div>
                    
                          <div class="item">
                            <img src="http://nikitasharma.neocities.org/skills/practica.png" alt=" HTML5, CSS3, JAVASCRIPT" >
                          </div>
                        
                          <div class="item">
                            <img src="http://nikitasharma.neocities.org/skills/jquery_bootstrap.png" alt=" JQUERY, BOOTSTRAP" >
                          </div>
                    
                          <div class="item">
                            <img src="http://nikitasharma.neocities.org/skills/database.png" alt=" MYSQL, POSGRESQL" >
                          </div>
                          
                          <div class="item">
                            <img src="http://nikitasharma.neocities.org/skills/phpnodejs.png" alt=" PHP, NODE.JS" >
                          </div>
                          
                          <div class="item">
                            <img src="http://nikitasharma.neocities.org/skills/react-express.png" alt=" REACTJS, EXPRESS.JS" >
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
 
                    `
                    
                },
                
                 {
                    title: `
                    
                	<div id="myCarousel2" class="carousel slide thumbnail" data-ride="carousel" data-interval="false">
                        
                    
                        <!-- Wrapper for slides -->
                        <div class="carousel-inner" role="listbox">
                          <div class="item active">
                            <img src="http://nikitasharma.neocities.org/certificate-courses/certified.jpg" alt=" Certification Courses Completed" >
                          </div>
                          <div class="item">
                            <img src="http://nikitasharma.neocities.org/certificate-courses/slide1.JPG" alt=" Node.js from Scratch" >
                          </div>
                          <div class="item">
                            <img src="http://nikitasharma.neocities.org/certificate-courses/Slide2.JPG" alt=" Creating dynamic websites with PHP and MySQL" >
                          </div>
                          <div class="item">
                            <img src="http://nikitasharma.neocities.org/certificate-courses/Slide3.JPG" alt=" Introduction to Jquery" >
                          </div>
                          <div class="item">
                            <img src="http://nikitasharma.neocities.org/certificate-courses/Slide18.JPG" alt=" Learn Jquery & Javascript" >
                          </div>
                          <div class="item">
                            <img src="http://nikitasharma.neocities.org/certificate-courses/Slide4.JPG" alt=" Javascript for beginners" >
                          </div>
                          <div class="item">
                            <img src="http://nikitasharma.neocities.org/certificate-courses/Slide17.JPG" alt=" Learn Javascript and Jquery from scratch" >
                          </div>
                          <div class="item">
                            <img src="http://nikitasharma.neocities.org/certificate-courses/Slide16.JPG" alt=" Responsive Web Development" >
                          </div>
                         <div class="item">
                            <img src="http://nikitasharma.neocities.org/certificate-courses/Slide15.JPG" alt=" Learn HTML and CSS" >
                          </div>
                         <div class="item">
                            <img src="http://nikitasharma.neocities.org/certificate-courses/Slide5.JPG" alt=" Javascript for beginners" >
                          </div>
                          <div class="item">
                            <img src="http://nikitasharma.neocities.org/certificate-courses/Slide6.JPG" alt=" Java for beginners" >
                          </div>

                          <div class="item">
                            <img src="http://nikitasharma.neocities.org/certificate-courses/Slide7.JPG" alt=" Software Testing" >
                          </div>
                          <div class="item">
                            <img src="http://nikitasharma.neocities.org/certificate-courses/Slide8.JPG" alt=" Online Marketing" >
                          </div>
                          
                          <div class="item">
                            <img src="http://nikitasharma.neocities.org/certificate-courses/Slide10.JPG" alt=" Content Writing" >
                          </div>
                          <div class="item">
                            <img src="http://nikitasharma.neocities.org/certificate-courses/Slide11.JPG" alt=" Facebook Marketing for beginners" >
                          </div>
                          <div class="item">
                            <img src="http://nikitasharma.neocities.org/certificate-courses/Slide9.JPG" alt=" SEO - Search engine optimization" >
                          </div>
                          <div class="item">
                            <img src="http://nikitasharma.neocities.org/certificate-courses/Slide12.JPG" alt=" Basics of Marketing" >
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
 
                	
                    `
                },
                
                {
                    title: `
                    
                	<div id="myCarousel1" class="carousel slide thumbnail" data-ride="carousel" data-interval="false" >
                        
                    
                        <!-- Wrapper for slides -->
                        <div class="carousel-inner" role="listbox">
                          <div class="item active">
                            <img src="http://nikitasharma.neocities.org/other-skills/otherskills.png" alt=" OTHER SKILLS" >
                          </div>
                    
                          <div class="item">
                            <img src="http://nikitasharma.neocities.org/other-skills/core-java-3-icon.png" alt=" CORE JAVA" >
                          </div>
                        
                          <div class="item">
                            <img src="http://nikitasharma.neocities.org/other-skills/hello3.png" alt=" C/C++" >
                          </div>
                    
                          <div class="item">
                            <img src="http://nikitasharma.neocities.org/other-skills/resize.png" alt=" WORDPRESS/BLOGGER" >
                          </div>
                          
                          <div class="item">
                            <img src="http://nikitasharma.neocities.org/other-skills/1600.jpg"  alt=" ADOBE PHOTOSHOP" >
                          </div>
                          
                          <div class="item">
                            <img src="http://nikitasharma.neocities.org/other-skills/download.jpg" alt=" MICROSOFT OFFICE SKILLS" >
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
 
                	
                    `
                    
                },
               
               
                {
                    title: `
                    
                	<div id="myCarousel5" class="carousel slide thumbnail" data-ride="carousel" data-interval="false">
                        
                    
                        <!-- Wrapper for slides -->
                        <div class="carousel-inner" role="listbox">
                          <div class="item active">
                            <img src="http://nikitasharma.neocities.org/school/academics.jpg" alt=" ACADEMICS" >
                          </div>
                    
                          <div class="item">
                            <img src="http://nikitasharma.neocities.org/school/YMCA.jpg" alt=" YMCA UNIVERSITY OF SCIENCE AND TECHNOLOGY, FARIDABAD, HARYANA" title="B-Tech: Electronics and Instrumentation, 2013-2017">
                          </div>
                        
                          <div class="item">
                            <img src="http://nikitasharma.neocities.org/school/mvn1.jpg" alt=" MODERN VIDYA NIKETAN, SECTOR-17, FARIDABAD" title="2012-2013">
                          </div>
                    
                          <div class="item">
                            <img src="http://nikitasharma.neocities.org/school/dav1.jpg" alt=" DAV PUBLIC SCHOOL, SECTOR-14, FARIDABAD" title="2010-2011">
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
 
                	
                    `
                }
                 
               
            ]
        }
    },
    'portfolio': {
        title: 'My Portfolio',
        heading: 'My Portfolio',
        content:  [`<img class="image image1 slide img-responsive" src="http://nikitasharma.neocities.org/projects/Slide21.JPG"/>
                    <img id="click" class="img-responsive" src="http://quojs.tapquo.com/img/product/quojs/touch.png"/>
                    <img class="image sub-image slide img-responsive" src="http://nikitasharma.neocities.org/projects/Untitled2.png" title="http://codepen.io/nikita1/full/vXkzdv"/>`,
                   `<img class="image image1 slide img-responsive" src="http://nikitasharma.neocities.org/projects/Slide22.JPG"/>
                    <img class="image sub-image slide img-responsive" src="http://nikitasharma.neocities.org/projects/weather.png" title="http://codepen.io/nikita1/full/qajxwE/"/>`,
                   `<img class="image image1 slide img-responsive" src="http://nikitasharma.neocities.org/projects/Slide23.JPG"/>
                    <img class="image sub-image slide img-responsive" src="http://nikitasharma.neocities.org/projects/Untitled4.png" title="http://codepen.io/nikita1/full/QKwyEd/"/>`,
                   `<img class="image image1 slide img-responsive" src="http://nikitasharma.neocities.org/projects/Slide24.JPG"/>
                    <img class="image sub-image slide img-responsive" src="http://nikitasharma.neocities.org/projects/Untitled5.png" title="http://codepen.io/nikita1/full/zBgWVy/"/>`,
                   `<img class="image image1 slide img-responsive" src="http://nikitasharma.neocities.org/projects/Slide25.JPG"/>
                    <img class="image sub-image slide img-responsive" src="http://nikitasharma.neocities.org/projects/Music_Store_php.png"/>`,
                   `<img class="image image1 slide img-responsive" src="http://nikitasharma.neocities.org/projects/Slide26.JPG"/>
                    <img class="image sub-image slide img-responsive" src="http://nikitasharma.neocities.org/projects/Untitled6.png"/>`,
                   `<img class="image image1 slide img-responsive" src="http://nikitasharma.neocities.org/projects/Slide27.JPG"/>
                    <img class="image sub-image slide img-responsive" src="http://nikitasharma.neocities.org/projects/Clean&Clear_Bootstrap.png"/>`,
                   `<img class="image image1 slide img-responsive" src="http://nikitasharma.neocities.org/projects/Slide28.JPG"/>
                    <img class="image sub-image slide img-responsive" src="http://nikitasharma.neocities.org/projects/Html_Template2.png"/>`
                    ]
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
                    out +=`<div class="container text-center">
                            <div class="row text-center">
                              <div class=" image-div text-center">`+ content1[j]+
                            `</div>
                            </div>
                           </div> <br/>`;
                }
                
            }
            else 
            {
                out += '<div class="container width">';
                for(var i in content1.info) {
                out += '<div class="width text-center col-md-6" id="slide-container">'+content1.info[i].title+'</div>';
                }
            // out+='<div class=" text-center col-md-12" id="slide-container">'+content1.info[i].title+'</div>'+'</div>';
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
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
                <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
                <script type="text/javascript" src="/ui/main.js"></script>
            </head>
            <body class="${title}">
                
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
                          <ul class="nav navbar-nav navbar-right text-center hover">
                            <li><a href="/" class="color-white"> HOME </a></li>
                            <li><a href="/about" class="color-white"> ABOUT ME </a></li>
                            <li><a href="/portfolio" class="color-white"> PORTFOLIO </a></li>
                            <li><a href=" www.linkedin.com/in/nikita-sharma" class="color-white"> LinkedIn </a></li>
                            <li><a href="http://codepen.io/nikita1" class="color-white"> Codepen </a></li>
                          </ul>
                        </div>
                      </div>
                    </nav>
                <div class="container-fluid">
                    <div id="div-height-50"></div>
                    <h3 class="text-center">${heading}</h3>
                    <div id="${title}" class="row text-center">
                      <!--${content}-->
                      ${getContent(content)}
                    </div>
                </div>    
                <script type="text/javascript" src="/ui/main.js"></script>
                
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

// app.post('/form', function(req,res){
//     var queryString = "insert into contact(email,subject,message) values('"+req.body.email+"','"+req.body.subject+"','"+req.body.message+"')";
    
//     pool.query(queryString,function(error,results){
//       if(error)
//           {
//               throw error;
//           }
//       else 
//           {
//              res.send('Sent!');
//           }
       
//     });
// });



app.get('/:articleName', function (req, res) {
  var articleName = req.params.articleName;
  res.send(createTemplate(articles[articleName]));
});

// app.get('/ui/:x', function (req, res) {
//     var x = req.params.x;
//     res.sendFile(path.join(__dirname, 'ui', x));
// });
// app.get('/ui/other%20skills/:other', function(req, res){
//   var other = req.params.other;
//   res.sendFile(path.join(__dirname, 'ui', '/other%skills/'+other));
// });

// app.get('/ui/skills/:skill', function (req, res) {
//   var skill = req.params.skill;    
//   res.sendFile(path.join(__dirname, 'ui', '/skills/'+skill));
// });

app.get('/ui/:folder/:file', function (req, res) {
  var folder = req.params.folder;
  var file = req.params.file;    
  res.sendFile(path.join(__dirname, 'ui', '/'+folder+'/'+file));
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