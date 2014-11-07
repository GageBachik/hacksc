Template.index.events({
	'click .user': function(event){
		$(event.target).css({color: 'green'});
	}
});