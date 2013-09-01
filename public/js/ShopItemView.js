window.ShopItemView = Backbone.View.extend({
	tagName: "tr",
	template: "#shopitemView",
	events: {},

	initialize: function(){
		_.bindAll(this, 'render');
		this.model.bind('change', this.render);
	},

	render: function(){
		$(this.el).html(
			_.template(
				$(this.template).html(),
				{ model: this.model}
			)
		);
		return this;
	}

});