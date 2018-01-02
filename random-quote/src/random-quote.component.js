(function(app) {
  var Component = ng.core.Component;
  var QuoteService = app.QuoteService;

  app.RandomQuoteComponent = Component({
    selector: 'random-quote',
    template: '<p><em>--{{quote.line}}</em> - {{quote.author}}</p>'
  })
  .Class({
    constructor: [QuoteService, function RandomQuoteComponent(quoteService) {
     //var self = this;
      // quoteService.generateRandomQuotes(2000, function(quote) {
      //   self.quote = quote;
      // });
      //quoteService.generateRandomQuotes(2000, (quote) =>{self.quote = quote;});
      //quoteService.generateRandomQuotes(2000, (quote) =>self.quote = quote);//for single statement in function body  remove {}
      quoteService.generateRandomQuotes(2000, quote =>this.quote = quote);//for single parameter remove()
      //we can now use "this" here
    }]
  });

})(window.app || (window.app = {}));
