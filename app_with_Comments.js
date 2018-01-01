// wraaping everything in immediately invoke javascript function so that it wont't pollute global name space
(function(){
  //craeting alias for readability
  var Component=ng.core.Component;
  var NgModule=ng.core.NgModule;
  var BrowserModule=ng.platformBrowser.BrowserModule;
  var platformBrowserDynamic=ng.platformBrowserDynamic.platformBrowserDynamic;
  var Class=ng.core.Class;

  //creating a service(contains data and logic)
  // --Components are responsible for displaying the things
  // --All the other logic is kept in services(A class)
  var QuoteService = Class({
    constructor: function QuoteService() {
      this.quotes = sampleQuotes;//using static quotes as of now (this can be dynamic)
    },
    //method for generating random number
    getRandomQuote: function() {
      var randomIndex = Math.floor(Math.random() * this.quotes.length);
      return this.quotes[randomIndex];
    }
  });


  //creating second component
  var RandomQuoteComponent = Component({
    selector: 'random-quote',
    // providers: [QuoteService],//creating service instance at Component level
    template: '<p><em>{{quote.line}}</em> <br> - <b>{{quote.author}}</b></p>'//Property binding with interpolation{{}}
  })
  .Class({
    //declaring services as a parameter in our constructor function
    //converting constructor into an array : to tell Angular parameterTYPE
    //first items specifies classes of parameters in the function
    constructor: [QuoteService,function RandomQuoteComponent(quoteService) {
      //var quoteService=new QuoteService();
      this.quote= quoteService.getRandomQuote();
    }]
  });


    //creating Angular component
    //ES 5 - access all angular 2 function by ng namespace available globally 
    //we are passing object to the Component method
    var AppComponent=Component({
        selector:'my-app',//metadata used by Angular
        template://html for our component
         '<h1>Random Quote</h1>'+
        '<random-quote></random-quote>'
    })
    .Class({
    constructor: function AppComponent() { }
  });//requires atleast a  constructor function for the class initialised in this fashion
    
  //Angular knows how to run our app
  //1. create angular module (ng module)
  var AppModule = NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent,RandomQuoteComponent],//all the components in our app
    providers: [QuoteService],//creating service instance at Module level
    bootstrap: [AppComponent]//which will rendered in our index.html (shared across different components)
  })
  .Class({
    constructor: function AppModule() { }
  });

  //telling Angular to bootsrap App MODULE we just created
  platformBrowserDynamic().bootstrapModule(AppModule);

  var sampleQuotes=[
    {
      "line": "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
      "author": "Brian W. Kernighan"
    },
    {
      "line": "Walking on water and developing software from a specification are easy if both are frozen.",
      "author": "Edward V Berard"
    },
    {
      "line": "It always takes longer than you expect, even when you take into account Hofstadter's Law.",
      "author": "Hofstadter's Law"
    },
    {
      "line": "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.",
      "author": "Rick Osborne"
    },
    {
      "line": "In theory, there is no difference between theory and practice. But, in practice, there is.",
      "author": "Jan L. A. van de Snepscheut"
    },
    {
      "line": "Measuring programming progress by lines of code is like measuring aircraft building progress by weight.",
      "author": "Bill Gates"
    },
    {
      "line": "There are 2 hard problems in computer science: cache invalidation, naming things, and off-by-1 errors.",
      "author": "Leon Bambrick"
    },
    {
      "line": "Nine people can't make a baby in a month.",
      "author": "Fred Brooks"
    },
    {
      "line": "If debugging is the process of removing software bugs, then programming must be the process of putting them in.",
      "author": "Edsger Dijkstra"
    },
    {
      "line": "The first 90% of the code accounts for the first 90% of the development time. The remaining 10% of the code accounts for the other 90% of the development time.",
      "author": "Tom Cargill"
    }
  ];

})();
(function(){
  var Component=ng.core.Component;
  var NgModule=ng.core.NgModule;
  var BrowserModule=ng.platformBrowser.BrowserModule;
  var platformBrowserDynamic=ng.platformBrowserDynamic.platformBrowserDynamic;
  var Class=ng.core.Class;

  var QuoteService = Class({
    constructor: function QuoteService() {
      this.quotes = sampleQuotes;
    },
    getRandomQuote: function() {
      var randomIndex = Math.floor(Math.random() * this.quotes.length);
      return this.quotes[randomIndex];
    }
  });

  var RandomQuoteComponent = Component({
    selector: 'random-quote',
    // providers: [QuoteService],//creating service instance at Component level
    template: '<p><em>{{quote.line}}</em> <br> - <b>{{quote.author}}</b></p>'//Property binding with interpolation{{}}
  })
  .Class({
    constructor: [QuoteService,function RandomQuoteComponent(quoteService) {
      //var quoteService=new QuoteService();
      this.quote= quoteService.getRandomQuote();
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
    providers: [QuoteService],//creating service instance at Module level
    bootstrap: [AppComponent]
  })
  .Class({
    constructor: function AppModule() { }
  });

  platformBrowserDynamic().bootstrapModule(AppModule);

  var sampleQuotes=[
    {
      "line": "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
      "author": "Brian W. Kernighan"
    },
    {
      "line": "Walking on water and developing software from a specification are easy if both are frozen.",
      "author": "Edward V Berard"
    },
    {
      "line": "It always takes longer than you expect, even when you take into account Hofstadter's Law.",
      "author": "Hofstadter's Law"
    },
    {
      "line": "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live.",
      "author": "Rick Osborne"
    },
    {
      "line": "In theory, there is no difference between theory and practice. But, in practice, there is.",
      "author": "Jan L. A. van de Snepscheut"
    },
    {
      "line": "Measuring programming progress by lines of code is like measuring aircraft building progress by weight.",
      "author": "Bill Gates"
    },
    {
      "line": "There are 2 hard problems in computer science: cache invalidation, naming things, and off-by-1 errors.",
      "author": "Leon Bambrick"
    },
    {
      "line": "Nine people can't make a baby in a month.",
      "author": "Fred Brooks"
    },
    {
      "line": "If debugging is the process of removing software bugs, then programming must be the process of putting them in.",
      "author": "Edsger Dijkstra"
    },
    {
      "line": "The first 90% of the code accounts for the first 90% of the development time. The remaining 10% of the code accounts for the other 90% of the development time.",
      "author": "Tom Cargill"
    }
  ];

})();

