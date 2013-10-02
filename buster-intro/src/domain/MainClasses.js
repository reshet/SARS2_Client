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
 //End of   OpenedQuestionText
exports.single = SingleChoiceQuestion
exports.alt = Alternative






