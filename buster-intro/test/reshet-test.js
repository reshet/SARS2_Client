var buster = require("buster");
var anket = require("../src/anket.js");
//var assertions = require("buster-assertions");
var assert = buster.referee.assert;
buster.testCase("Reshet",
    {
       "know a little math": function(){
           assert.equals(2+3,5);
       },
        "with my code": function(){
            assert(anket.doIt());
        }
    }

);
