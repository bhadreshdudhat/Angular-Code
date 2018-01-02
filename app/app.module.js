(function(app){

  var NgModule=ng.core.NgModule;
  var BrowserModule=ng.platformBrowser.BrowserModule;
  var QuoteService=app.QuoteService;
  var RandomQuoteComponent= app.RandomQuoteComponent;//import
  var AppComponent=app.AppComponent;
  var AppModule=app.AppModule;

  app.AppModule = NgModule({
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

  

})(window.app ||(window.app={}));


