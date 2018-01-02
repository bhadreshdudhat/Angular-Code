(function(app){
  var Component=ng.core.Component;
  var QuoteService=app.QuoteService;

  app.RandomQuoteComponent = Component({
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

})(window.app ||(window.app={}));


