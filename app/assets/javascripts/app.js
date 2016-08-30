(function() { //IIFE This function can only be accessed within this scope. No other file has access to this function.
  "use strict";
  angular.module("app", []); //"app" is the name of your app - it be called anything
  //[] is where you can pass other angular libraries if you need it.

}()); // this end () envokes the function. without it it does not run the function.
