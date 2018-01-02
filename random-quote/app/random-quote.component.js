'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function (app) {
  var _dec, _class;

  var Component = ng.core.Component;
  var QuoteService = app.QuoteService;
  var Inject = ng.core.Inject;

  var RandomQuoteComponent = (_dec = Component({
    selector: 'random-quote',
    template: '<p><em>{{quote.line}}</em> - {{quote.author}}</p>'
  }), _dec(_class = function RandomQuoteComponent(quoteService) {
    var _this = this;

    _classCallCheck(this, RandomQuoteComponent);

    quoteService.generateRandomQuotes(2000, function (quote) {
      return _this.quote = quote;
    });
  }) || _class);
  Inject(QuoteService)(RandomQuoteComponent, null, 0);


  app.RandomQuoteComponent = RandomQuoteComponent;
})(window.app || (window.app = {}));