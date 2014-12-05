/**
 * Created by Maxim on 27/11/2014.
 */

'use strict';


angular.module('joetzFilterSlice', [])
  .filter('slice', function() {
    return function(arr, start, end) {
      if(typeof(end) === "undefined") {
        end = arr.length;
      }
      return (arr || []).slice(start, end);
    };
  });
