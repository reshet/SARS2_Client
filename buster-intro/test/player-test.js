var buster = require("buster");
var http = require('http');
var fs = require('fs');

//var $ = require("jquery");
var player = require("../src/domain/Player.js");
var domain = require("../src/domain/MainClasses.js");
//var assertions = require("buster-assertions");
var assert = buster.referee.assert;

buster.testCase("Test anket player",
    /*  {
     setUp: function() {
     this.timeout = 250; // 1000 ms ~ 1 s
     }
     },*/
    {
        setUp: function() {
            this.timeout = 250; // 1000 ms ~ 1 s


        },
        "parse empty anket": function(){
            var parser = new player.Parser("raw");
            var logic = new player.Logic();

            assert.equals(logic.toString(),parser.parse().toString());

        }

    }

);

buster.testCase("Test anket parser",
    {
        refer_anket:null,
        setUp: function(done) {
            this.timeout = 250; // 1000 ms ~ 1 s


            fs.readFile('/var/www/SARS2/buster-intro/test/res/anket_linear_raw.json', 'utf8', done(function (err,data) {
                if (err) {
                    return console.log(err);
                }
                //console.log(data);
                refer_anket = data;
                //return data;
            }));


        },
        "parse empty anket": function(){
            //this.
            console.log(refer_anket);
            var parser = new player.Parser(refer_anket);
            var logic = new player.Logic();
            assert.equals(logic.toString(),parser.parse().toString());

        }
    }
);

buster.testCase("Test anket parser small",
    {
        refer_anket:null,
        setUp: function(done) {
            this.timeout = 250; // 1000 ms ~ 1 s


            fs.readFile('/var/www/SARS2/buster-intro/test/res/anket_linear_raw_small.json', 'utf8', done(function (err,data) {
                if (err) {
                    return console.log(err);
                }
                //console.log(data);
                refer_anket = data;
                //return data;
            }));


        },
        "parse real anket small": function(){
            //this.
            //console.log(refer_anket);
            var parser = new player.Parser(refer_anket);
            var logic = new player.Logic();
            question = new domain.single("Q1","Q1. Закрытый вопрос с единичным выбором",[new domain.alt("1","Альтернатива 1<br/> <br/>"),new domain.alt("2","Альтернатива 2")],false);
            //console.log(typeof question);
            //console.log(question.toString());
            //assert(true);
            logic.addQuestion(question);

            assert.equals(logic.getQuestions().toString(),parser.parse().getQuestions().toString());

        }
    }
);
