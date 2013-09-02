window.ShoppingView = Backbone.View.extend({
	template: "#shoppingView",
	events: {
		'click': 'addToList'
	},
	initialize: function(){
		_.bindAll(this, 'render', 'addToList');
		this.collection = new ShoppingList();
		this.collection.bind('reset', this.render);
		this.collection.bind('add',this.render);
		this.collection.fetch();
		this.options.categories.bind('all', this.render);
	},

	addToList: function(e){
		e.preventDefault();
		var items = _.compact($(this.el).find('.listbox').val().split('\n'));
		var c = this.options.categories.first();
		_.each(items, function(i){
			this.collection.create({name: i, category: c});
		}, this);
		console.log(items);
	},

	render: function(){
		$(this.el).html($(this.template).html());
		this.collection.toBuy().each(function(shopItem){
			var viewModels = { model: shopItem, categories: this.options.categories };
			var view = new ShopItemView(viewModels);
			$(this.el).find('.shoppinglist').append(view.render().el);
		}, this);
	}



});