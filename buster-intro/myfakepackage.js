/**
 * Created with IntelliJ IDEA.
 * User: reshet
 * Date: 10/3/13
 * Time: 6:34 PM
 * To change this template use File | Settings | File Templates.
 */
/**
 * Created with IntelliJ IDEA.
 * User: Ferbolg
 * Date: 02.10.13
 * Time: 13:39
 * To change this template use File | Settings | File Templates.
 */
/*
 // создали базовый класс
 function Animal(..) { ... }

 // создали класс
 // и сделали его потомком базового
 function Rabbit(..)  { ... }
 extend(Rabbit, Animal)

 // добавили в класс Rabbit методы и свойства
 Rabbit.prototype.run = function(..) { ... }

 // все, теперь можно создавать объекты
 // класса-потомка и использовать методы класса-родителя
 rabbit = new Rabbit(..)
 rabbit.animalMethod()

 */

function extend(Child, Parent) {
    var F = function() { }
    F.prototype = Parent.prototype
    Child.prototype = new F()
    Child.prototype.constructor = Child
    Child.superclass = Parent.prototype
}

/*
 function AbstractQuestion(text,id){
 var text = text;
 var id = id;

 this.getText = function(){
 return text;
 }

 this.getID = function(){
 return id;
 }

 this.toString = function() {
 return text + ";" + id;
 }
 };
 */
function Alternative(id,text){
    var text = text;
    var id = id;

    this.getText = function(){
        return text;
    }

    this.getId = function(){
        return id;
    }

    this.setText = function(newText){
        text    = newText;
    }

    this.setId = function(newId){
        id = newId;
    }
    this.toString = function(){
        return id+" "+text;
    }
}

var altcheck = new Alternative(1,'blallada');
//console.log("altcheckId:" + altcheck.getId()) ;

function SingleChoiceQuestion(id,text,alternatives,withAnother){
    var _alternatives = alternatives;
    var _id = id;
    var _text = text;
    var _withAnother = withAnother;

    this.getAlternatives = function(){
        return _alternatives;
    }

    this.getText = function(){
        return _text;
    }

    this.getId = function(){
        return _id;
    }

    this.getWithAnother = function() {
        return _withAnother;

    }
    this.toString = function(){
        var str =  _id+" "+_text+" "+_alternatives+" "+_withAnother;
        return str;
    }

}; //End of SingleChoiceQuestion

//var arr_alt = ['alt1','alt2','alt3'];

//var ch_snglchcq = new SingleChoiceQuestion(1,"Some text",arr_alt);

//console.log("ch_snglchcq:" + ch_snglchcq.getId() + " " + ch_snglchcq.getText() + " " + ch_snglchcq.getAlternatives())

/*
 SingleChoiceQuestion.prototype = AsbtractQuestion;

 */

/*
 var altnr = ['dafd','fdsfa'];
 var check = new SingleChoiceQuestion(altrn);
 */

function MultipleChoiceQuestion(id,text,alternatives, withAnother){
    var _alternatives = alternatives;
    var _id = id;
    var _text = text;
    var _withAnother = withAnother;

    this.getAlternatives = function(){
        return _alternatives;
    }

    this.getText = function(){
        return _text;
    }

    this.getId = function(){
        return _id;
    }

    this.getWithAnother = function() {
        return _withAnother;

    }
}; //End of MultipleChoiceQuestion
/*
 function MultipleChoiceQuestionWithExclusiveAlternative(id,text,alternatives, withAnother){
 var _alternatives = alternatives;
 var _id = id;
 var _text = text;
 var _withAnother = withAnother;

 this.getAlternatives = function(){
 return _alternatives;
 }

 this.getText = function(){
 return _text;
 }

 this.getId = function(){
 return _id;
 }

 this.getWithAnother = function() {
 return _withAnother;

 }
 }; //End of MultipleChoiceQuestionWithExclusiveAlternative
 */

function OpenedQuestion(id,text,type){

    var _id = id;
    var _text = text;
    var _type = type;
    this.getText = function(){
        return _text;
    }

    this.getId = function(){
        return _id;
    }
    this.getType = function(){
        return _type;
    }

};


/**
 * Created with IntelliJ IDEA.
 * User: reshet
 * Date: 10/2/13
 * Time: 3:56 PM
 * To change this template use File | Settings | File Templates.
 */


//var domain = require("../../src/domain/MainClasses.js")

function Transition(start,end){
    var _start = start;
    var _end = end;
    this.toString = function(){
        return _start+" "+_end;
    }
}
function Logic(){
    var _quest = [];
    var _trans = [];
    this.addTransition = function(trans){
        //console.log("typeof "+typeof trans);
        /*if(typeof trans === Transition){

         }*/
        _trans.push(trans);
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

function AnketParser(anket_raw){
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
                            alts.push(new Alternative(id_alt,text_alt));

                        }
                    }
                    if(qtype === "tile://sars_int/q/s.m")question = new SingleChoiceQuestion(key,text,alts,false);
                    //console.log(question);
                    logic.addQuestion(question);
                    if(quests[key][0]["@"]["NEXT_ID"]!==undefined){
                        //console.log("TRANS!!! "+quests[key][0]["@"]["NEXT_ID"]);
                        logic.addTransition(new Transition(key,quests[key][0]["@"]["NEXT_ID"]));
                    }
                    //console.log(qtype+" "+text);
                }

            }
        }
        //var question = new domain.single("Q1","Q1. Закрытый вопрос с единичным выбором",[new domain.alt("1","Альтернатива 1<br/> <br/>"),new domain.alt("2","Альтернатива 2<br/> <br/>")],false);


        return logic;
    }
}


/**
 * Created with IntelliJ IDEA.
 * User: reshet
 * Date: 9/30/13
 * Time: 10:41 AM
 * To change this template use File | Settings | File Templates.
 */

//var player = require("../src/domain/Player.js");

var url_get_anket = 'http://82.196.0.140/MSS/JSAdapter.php';
//var url_get_anket = 'http://Local/MSS/JSAdapter.php';


var loadAnket = function(task_id,cb){
    $.getJSON(url_get_anket,function(data){
        cb(data);
    });
}

var playerPlay = function(logic,canvas){

    return true;
}





