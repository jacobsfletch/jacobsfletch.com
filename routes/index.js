var express = require('express')
var app = express()
var path = require('path')
var keystone = require('keystone')
var middleware = require('./middleware')
var importRoutes = keystone.importer(__dirname)

var routes = {
	api: importRoutes('./api')
}

keystone.pre('routes', middleware.api);
keystone.pre('render', middleware.flashMessages);

exports = module.exports = function(app) {

	app.use(express.static(path.join(__dirname, '../build')))

	// REST API CONTROLLER
	app.get('/api/portfolio', routes.api.portfolio.getAllPublished)
	app.get('/api/blog', routes.api.blog.getAllPublished)
	app.get('/api/globals', routes.api.global.getGlobals)
	app.get('/api/resume', routes.api.resume.getResume)
	app.post('/api/clap/article', routes.api.clap.article)
	app.post('/api/clap/project', routes.api.clap.project)
	app.post('/api/email/contact', routes.api.email.contact)
	app.post('/api/email/doodle', routes.api.email.doodle)
	app.post('/api/email/subscribe', routes.api.email.subscribe)
	app.post('/api/subscribe', routes.api.subscriber.create)

	app.use('/', (req, res) => {
		res.sendFile(path.join(__dirname, '../build/index.html'))
	})

}
