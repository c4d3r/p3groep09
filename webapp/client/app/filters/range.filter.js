/**
 * Created by Maxim on 05/12/2014.
 */
'use strict';


angular.module('joetzFilterRange', [])
  .filter('range', function() {
    return function(input, start, end) {
      if(typeof(end) === "undefined") {
        end = start;
        start = 0;
      }

      for(var i = start; i <= end; i++) {
        input.push(i);
      }

      return input;
    };
  });
