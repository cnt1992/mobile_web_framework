/*
 * GET home page.
 */

module.exports.index = function(req, res){
  var pageData = {
    pageTitle:'Index'
  };
  res.render('./page/index', pageData);
};