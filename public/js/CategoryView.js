window.CategoryView = Backbone.View.extend({
	template: "#categoryView",
	events: {},

	initialize: function(){
		_.bindAll(this, 'render');
	},

	render: function(){
		$(this.el).html($(this.template).html());
		return this;
	}
});