module.exports = function(Purchase) {
  Purchase.beforeRemote('create', function(context, user, next) {
    var req = context.req;

    req.body.data.attributes['date'] = Date.now();
    req.body.data.relationships['end-user'].data = {
      id: req.accessToken.userId,
    };

    next();
  });
};
