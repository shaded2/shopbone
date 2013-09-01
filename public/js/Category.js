window.Category = Backbone.Model.extend({
	idAttribute: "_id",

	url: function() {
		if (this.get('_id'))
			return '/category/' + this.get('_id');
		else
			return '/categories';
	},

	defaults: function(){
		return {
			name: 'untitled'
		};
	}

});