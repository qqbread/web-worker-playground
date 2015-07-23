module.exports = {
  create: function(req, res) {
    var params = req.params.all(),
        data = params.data;

    Info.create({
      data: data
    }).exec(function(err, info) {
      console.log(err);
      console.log(info);

      return res.json(info);
    });
  }
};