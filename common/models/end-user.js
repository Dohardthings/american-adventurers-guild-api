module.exports = function(EndUser) {
  function saveAdmin(context, next) {
    var user = context.instance;
    var ds = user.getDataSource();
    var Role = ds.models.Role;
    var RoleMapping = ds.models.RoleMapping;

    Role.findOrCreate({ name: 'admin' }, function(err, role) {
      var attrs = {
          principalType: RoleMapping.USER,
          principalId: user.id
      };

      if (user.admin) {
        role.principals.findOne({where: attrs}, function(err, principal) {
          if (principal) {
            return next();
          }

          return role.principals.create(attrs, function(err) {
            next();
          });
        });
      } else {
        role.principals.destroyAll(attrs, function(err, principal) {
          next();
        });
      }
    });
  }

  EndUser.observe('after save', saveAdmin);
  // EndUser.afterRemote(`update`, saveAdmin);
  // EndUser.afterRemote(`updateAttributes`, saveAdmin);
  // EndUser.afterRemote(`upsert`, saveAdmin);
};
