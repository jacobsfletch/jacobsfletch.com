var keystone = require('keystone');

exports = module.exports = function (req, res) {

    // Define the variables
    var data = (req.method == 'POST') ? req.body : req.query;
    var view = new keystone.View(req, res);
    var locals = res.locals;

    // Load the Projects
    view.on('init', function (next) {
        var q = keystone.list('Project').model.find({
            state: 'published',
        }).populate('categories');

        q.exec(function (err, result) {
            if (result) {
                locals.projects = result;
            }
            next(err);
        });
    });

    view.on('init', function (next) {
        var q = keystone.list('Category').model.find();

        q.exec(function (err, result) {
            if (result) {
                locals.categories = result;
            }
            next(err);
        });
    });

    // Render the view
    view.render('index');

};
