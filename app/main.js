(function(app){
  var Component=ng.core.Component;
  var NgModule=ng.core.NgModule;
  var BrowserModule=ng.platformBrowser.BrowserModule;
  var platformBrowserDynamic=ng.platformBrowserDynamic.platformBrowserDynamic;
  var QuoteService=app.QuoteService;
  var RandomQuoteComponent= app.RandomQuoteComponent;//import


    var AppComponent=Component({
        selector:'my-app',
        template:
         '<h1>Random Quote</h1>'+
        '<random-quote></random-quote>'
    })
    .Class({
    constructor: function AppComponent() { }
  });

  var AppModule = NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent,RandomQuoteComponent],//all the components in our app
    //creating service instance at Module level
    providers:  [QuoteService],
              // only [QuoteService] same as [{provide:QuoteService,useClass:QuoteService}]
              // [{provide:QuoteService,useValue:new MockQuoteService()}]
             //  [{provide:QuoteService,useFactory:function(){return new MockQuoteService();}}]                                                                 
    bootstrap: [AppComponent]
  })
  .Class({
    constructor: function AppModule() { }
  });

  platformBrowserDynamic().bootstrapModule(AppModule);

})(window.app ||(window.app={}));


