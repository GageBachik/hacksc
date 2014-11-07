Router.configure({
	layoutTemplate: 'layout',
});

Router.route('/', function() {
	this.subscribe('contributors').wait();
	this.render('index', {data: function(){
		return {
			contributors: Contributors.find()
		};
	}});
});