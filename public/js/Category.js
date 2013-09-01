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

window.CategoryCollection = Backbone.Collection.extend({
	model: Category,
	url: '/categories'
});