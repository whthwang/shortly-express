const parseCookies = (req, res, next) => {
  req.cookies = {};
  if (req.headers.cookie === undefined) {
    return;
  }
  else if (req.headers) {
    let cookieArray = req.headers.cookie.split('; ');
    for (let i = 0; i < cookieArray.length; i++) {
      let indivCookie = cookieArray[i];
      let cookieKeyAndValue = indivCookie.split('=');
      req.cookies[cookieKeyAndValue[0]] = cookieKeyAndValue[1]; 
    }
  }
  
  next();
};



module.exports = parseCookies;

//every time a request is sent on the web, a cookie is sent
//the content of the cookie is stored in req.headers.cookie
