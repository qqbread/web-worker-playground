module.exports = {
  create: function(req, res) {
    var params = req.params.all(),
        data = params.data;

    Info.create({
      data: data
    }).exec(function(err, info) {
      return res.json(info);
    });
  },

  list: function(req, res) {
    Info.find().exec(function(err, info) {
      return res.json(info);
    })
  },

  // reset: function(req, res) {
  //   Info.drop(function(err) {
  //     return res.json('success');
  //   });
  // }
};