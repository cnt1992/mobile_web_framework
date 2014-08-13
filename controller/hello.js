/*
 * GET home page.
 */

module.exports.hello = function(req, res){
  var pageData = {
    pageTitle:'hello world'
  };
  res.render('./page/hello', pageData);
};