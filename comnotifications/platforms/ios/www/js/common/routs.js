var AppRouter =Backbone.Router.extend({
  routes:{
    "":'home',
    "home":'home'
  },
  initialize: function () {
        this.headerView = new HeaderView();
        $('.comheader').html(this.headerView.el);
      this.bodyView = new fotterview();
        $('.container').append(this.bodyView.el);
    },

	HeaderView: function(page) {
    }
});
