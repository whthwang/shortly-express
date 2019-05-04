const parseCookies = (req, res, next) => {
  var cookie = {};
  console.log(req.headers.cookie);
};

module.exports = parseCookies;

//every time a request is sent on the web, a cookie is sent
//the content of the cookie is stored in req.headers.cookie
