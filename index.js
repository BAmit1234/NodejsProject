const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();


router.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/app.html'));

});
app.use(express.static(__dirname + '/'));
app.use('/', router);
app.listen(process.env.PORT||3000);

console.log('Running at Port 3000');