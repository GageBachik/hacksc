Meteor.publish('contributors', function() {
	return Contributors.find();
});