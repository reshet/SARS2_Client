/**
 * Created with IntelliJ IDEA.
 * User: reshet
 * Date: 10/2/13
 * Time: 3:56 PM
 * To change this template use File | Settings | File Templates.
 */

var domain = require("../../src/domain/MainClasses.js")

function Transition(start,end){
   var _start = start;
   var _end = end;
}
function Logic(){
    var _quest = [];
    var _trans = [];
    this.addTransition = function(trans){
        if(typeof trans === Transition){
           _trans.push(trans);
        }
    }
    this.addQuestion = function(quest){
        _quest.push(quest);
    }

    this.getTransitions = function(){return _trans};
    this.getQuestions = function(){return _quest};
    this.toString = function(){
        return _quest+" "+_trans;
    }
}

function Parser(anket_raw){
    var _raw_anket = anket_raw;

    this.parse = function (){
        var logic = new Logic();
        var anket = JSON.parse(_raw_anket);
        //console.log(anket);
        if(anket["test"][0]["#"] !== undefined){
            //console.log("GO");
            var quests = anket["test"][0]["#"];
            for(var key in quests){
                //console.log(key);
                if(quests[key][0]["@"]["QUESTION"]!==undefined){
                    //console.log(quests[key][0]);
                   var question = null;
                   var qtype = quests[key][0]["@"]["ALG"];
                   var text = quests[key][0]["@"]["QUESTION"];
                   var alts = [];

                    //have alts
                    if(quests[key][0]["#"]["E"]!==undefined){
                        var arr = quests[key][0]["#"]["E"];

                        for(var i = 0;i < arr.length;i++){
                            var id_alt = arr[i]["@"]["ID"]
                            var text_alt = arr[i]["@"]["TEXT"]
                            alts.push(new domain.alt(id_alt,text_alt));

                        }
                    }
                    if(qtype === "tile://sars_int/q/s.m")question = new domain.single(key,text,alts,false);
                    console.log(question);
                    logic.addQuestion(question);
                    //console.log(qtype+" "+text);
                }
            }
        }
        //var question = new domain.single("Q1","Q1. Закрытый вопрос с единичным выбором",[new domain.alt("1","Альтернатива 1<br/> <br/>"),new domain.alt("2","Альтернатива 2<br/> <br/>")],false);


        return logic;
    }
}

exports.Parser = Parser;
exports.Logic = Logic;
exports.Transition = Transition;