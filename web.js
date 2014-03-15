/*
 * Module dependencies
 */
var express=require ('express')
  , stylus=require('stylus')
  , nib=require('nib');
  
// var app = express()
// function compile(str,path){
	// return stylus(str)
		// .set('filename',path)
		// .use(nib())
// }

var app = express();
function compile(str, path) {
  return stylus(str)
    .set('filename', path)
    .use(nib());
}
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.logger('dev'));
app.use(stylus.middleware(
  {	src: __dirname + '/public'
 , compile: compile
  }
));
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.render('index',
    {title : 'Seth & Kateleigh\'s Wedding'}
  );
});

app.get('/proposal', function (req, res) {
  res.render('proposal',
    {title : 'Proposal'}
  );  
});

app.get('/event-information', function (req, res) {
  res.render('event-information',
    {title : 'Event-Information'}
  );
});

app.get('/RSVP', function (req, res) {
  res.render('rsvp',
    {title : 'RSVP'}
  );  
});

app.get('/registry', function (req, res) {
  res.render('registry',
    {title : 'Registry'}
  );
});

var port = Number(process.env.PORT || 3000);
app.listen(port, function(){
	console.log("Listening on " + port);
});


