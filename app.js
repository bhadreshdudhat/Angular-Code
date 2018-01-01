// wraaping everything in immediately invoke javascript function so that it wont't pollute global name space
(function(){
  //craeting alias for readability
  var Component=ng.core.Component;
  var NgModule=ng.core.NgModule;
  var BrowserModule=ng.platformBrowser.BrowserModule;
  var platformBrowserDynamic=ng.platformBrowserDynamic.platformBrowserDynamic;

    //creating Angular component
    //ES 5 - access all angular 2 function by ng namespace available globally 
    //we are passing object to the Component method
    var AppComponent=Component({
        selector:'my-app',//metadata used by Angular
        template: '<h1>Hello World!</h1>'//html for our component
    })
    .Class({
    constructor: function() { }
  });//requires atleast a  constructor function for the class initialised in this fashion
    
  //Angular knows how to run our app
  //1. create angular module (ng module)
  var AppModule = NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent],//all the components in our app
    bootstrap: [AppComponent]//which will rendered in our index.html
  })
  .Class({
    constructor: function() { }
  });

  //telling Angular to bootsrap App MODULE we just created
  platformBrowserDynamic().bootstrapModule(AppModule);

})();

/*
(function() {

  var AppComponent = ng.core.Component({
    selector: 'my-app',
    template: '<h1>Hello World!</h1>'
  })
  .Class({
    constructor: function() { }
  });

  var AppModule = ng.core.NgModule({
    imports: [ng.platformBrowser.BrowserModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
  })
  .Class({
    constructor: function() { }
  });

  ng.platformBrowserDynamic.platformBrowserDynamic()
    .bootstrapModule(AppModule);

})();

*/