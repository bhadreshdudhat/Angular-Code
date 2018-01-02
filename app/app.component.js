(function(app){
  var Component=ng.core.Component;
  var AppComponent=app.AppComponent;

    app.AppComponent=Component({
        selector:'my-app',
        template:
         '<h1>Random Quote</h1>'+
        '<random-quote></random-quote>'
    })
    .Class({
    constructor: function AppComponent() { }
  });

 })(window.app ||(window.app={}));


