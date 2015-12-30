routes = {
  '/special-message': function(req, res){
    res.end("you're special");
  },

  '/non-special-message': function (req, res){
    res.end("you're boring");
  }

};

module.exports = routes;
