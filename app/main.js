(function(app){

  var BrowserModule=ng.platformBrowser.BrowserModule;
  var platformBrowserDynamic=ng.platformBrowserDynamic.platformBrowserDynamic;
  var AppModule=app.AppModule;


  platformBrowserDynamic().bootstrapModule(AppModule);

})(window.app ||(window.app={}));


