(function(app){
  var Component=ng.core.Component;
  var NgModule=ng.core.NgModule;
  var BrowserModule=ng.platformBrowser.BrowserModule;
  var platformBrowserDynamic=ng.platformBrowserDynamic.platformBrowserDynamic;
  var QuoteService=app.QuoteService;

  var RandomQuoteComponent = Component({
    selector: 'random-quote',
    // providers: [QuoteService],//creating service instance at Component level
    template: '<p><em>{{quote.line}}</em> <br> - <b>{{quote.author}}</b></p>'//Property binding with interpolation{{}}
  })
  .Class({
    constructor: [QuoteService,function RandomQuoteComponent(quoteService) {
      //var quoteService=new QuoteService();//each component has sepetate copy of service
      //if we want to REPLACE this QuoteService with different implementation we need to chage code in each component
      //eg:var quoteService=new DifferentQuoteService();
      var self = this;
      quoteService.generateRandomQuotes(3000, function(quote) {
        self.quote = quote;
      });
    }]
  });

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


