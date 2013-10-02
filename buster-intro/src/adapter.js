/**
 * Created with IntelliJ IDEA.
 * User: reshet
 * Date: 9/30/13
 * Time: 10:41 AM
 * To change this template use File | Settings | File Templates.
 */

//var player = require("../src/domain/Player.js");

var url_get_anket = 'http://82.196.0.140/MSS/JSAdapter.php';

var loadAnket = function(task_id,cb){
   $.getJSON(url_get_anket,function(data){
        cb(data);
    });
}

var playerPlay = function(logic,canvas){

     return true;
}

if(exports!=='undeifined')exports.playerPlay = playerPlay;
exports.player = player;