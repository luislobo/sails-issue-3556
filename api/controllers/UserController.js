/**
 * UserController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  find: function (req, res) {
    sails.log.silly('printing users')
    User.find().populate('groups').then(function (users) {
      return res.send(users);
    }).catch(function (err) {
      return res.serverError(err);
    });
  }
};
