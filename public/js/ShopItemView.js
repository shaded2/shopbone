window.ShopItemView = Backbone.View.extend({
	tagName: "tr",
	template: "#shopitemView",
	events: {
		'click .dropdown-menu a': 'setCategory',
		'click .purchase': 'purchase',
		'click .delete': 'destroy'
	},

	initialize: function(){
		_.bindAll(this, 'render','destroy','purchase');
		this.model.bind('change', this.render);
		this.options.categories.bind('all', this.render);
	},

	destroy: function(e){
		e.preventDefault();
		this.model.destroy();
	},

	purchase: function(e){
		e.preventDefault();
		this.model.off();
		this.model.set('purchased', true);
		this.model.save();
		var el = this.el;
		$(this.el).fadeOut('slow', function(e){
			$(el).remove();
		});
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