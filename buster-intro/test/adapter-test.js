var buster = require("buster");
var http = require('http');
//var $ = require("jquery");
var adapter_setup = require("../src/adapter_setup.js");
//var assertions = require("buster-assertions");
var assert = buster.referee.assert;
buster.testCase("Test adapter for format conformation",
  /*  {
        setUp: function() {
            this.timeout = 250; // 1000 ms ~ 1 s
        }
    },*/
    {
        setUp: function() {
            this.timeout = 1000; // 1000 ms ~ 1 s
        },
       "server is up": function(done){
           //assert.equals('http://82.196.0.140/MSS/InfoTransportGetRouteAnket.php',adapter_setup.serverurl);
          //var loadPage = (adapter_setup.serverurl).toURL().getText();
           //console.log("serv url "+adapter_setup.serverurl);

           /*$.getJSON(adapter_setup.serverurl,function(data){
               console.log("aga");
               //assert.isNull(data);
           });*/
           http.get(adapter_setup.serverurl, done(
               function(res) {
                    // console.log("Got response: " + res.statusCode);
                    assert.equals(res.statusCode,200);
                   //console.log(res);
                    /*res.on('data', function (chunk) {
                           console.log('BODY: ' + chunk);
                       });*/
                   //res.
                   //assert.equals(res.content,"Adapter response");
                }));
          //(300);
           //console.log("after");

       }
    }
);
buster.testCase("Test adapter for format conformation",
    /*  {
     setUp: function() {
     this.timeout = 250; // 1000 ms ~ 1 s
     }
     },*/
    {
        setUp: function() {
            this.timeout = 1000; // 1000 ms ~ 1 s
        },
        "server content is valid": function(done){

            http.get(adapter_setup.serverurl, done(
                function(res) {
                    //console.log("Got response: " + res.statusCode);
                    assert.equals(res.statusCode,200);
                    res.on('data', done(function (chunk) {
                        //console.log('BODY: ' + chunk);
                        assert.equals("SERGEY",chunk.toString());
                    }))

                }));

            //console.log("after");

        }
    }
);
