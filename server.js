//Install express server
const express = require('express');
const path = require('path');
require('dotenv').config();
const nodemailer = require('nodemailer');


const app = express();

if(!process.env.PRODUCTION){
  app.use(express.static('./src/'))


  app.get('./*', function(req,res) {
    res.sendFile(path.join('src/index.html'));
  });
} else{
  app.use(express.static(__dirname + '/dist/MLA-Letter-Generator'));
  app.get('./*', function(req,res) {

    res.sendFile(path.join(__dirname+'/dist/MLA-Letter-Generator/index.html'));
  });
}
app.use(express.json());

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  port: process.env.EMAIL_PORT
});


app.post('/send', (req, res) => {

  const data = req.body;
  if(!data.mp.email){
    //MP has no email on record.
  }

  const mailOptions = {
    from: data.email, // sender address
    to: data.mp.email, // list of receivers
    cc: 'letters@bcedaccess.com',
    subject: 'Action Required: Education Assistants need Standards of Practice', // Subject line
    html: data.letterData// plain text body
  };
  transporter.sendMail(mailOptions, function (err, info) {
    if(err) {
      res.status(400);
      res.error();
    }
    else {
      res.status(200);
      res.json(info);
    }
  });


})
console.log("Production: " + process.env.PRODUCTION);

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
