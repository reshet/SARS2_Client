var buster = require("buster");
//var assertions = require("buster-assertions");
var assert = buster.referee.assert;
buster.testCase("Reshet",
    {
       "know a little math": function(){
           assert.equals(2+3,5);
       }
    }

);
