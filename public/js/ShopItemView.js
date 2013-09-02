window.ShopItemView = Backbone.View.extend({
	tagName: "tr",
	template: "#shopitemView",
	events: {
		'click .dropdown-menu a': 'setCategory'
	},

	initialize: function(){
		_.bindAll(this, 'render');
		this.model.bind('change', this.render);
		this.options.categories.bind('all', this.render);
	},

	setCategory: function(e){
		e.preventDefault();
		var id = $(e.target).data('id');
		var c = this.options.categories.get(id);
		this.model.set('category', c);
		this.model.save();
	},

	render: function(){
		$(this.el).html(
			_.template(
				$(this.template).html(),
				{ model: this.model, categories:this.options.categories }
			)
		);
		return this;
	}

});