var api_key = 'XXXXXXXXXXXXXXXXXXXXXXX';
var domain = 'www.mydomain.com';
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});
 
var data = {
  from: 'Excited User <me@samples.mailgun.org>',
  to: 'serobnic@mail.ru',
  subject: 'Hello',
  text: 'Testing some Mailgun awesomeness!'
};

export default (req, res) => {
  const { targetLaneId } = JSON.parse(req.body);
  console.log(targetLaneId, JSON.parse(req.body));
  switch (targetLaneId) {
    case "1":
      console.log("Телега");
      break;
    case "2":
      console.log("Почта");
      mailgun.messages().send(data, function (error, body) {
        console.log(body);
      });
      break;
    case "3":
      console.log("Слак");
      break;
    case "4":
      break;
  }
};
