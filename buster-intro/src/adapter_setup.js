/**
 * Created with IntelliJ IDEA.
 * User: reshet
 * Date: 9/30/13
 * Time: 10:41 AM
 * To change this template use File | Settings | File Templates.
 */




var doIt = function(){

   return true;
}





//var url_get_anket = 'http://localhost/MSS/InfoTransportGetRouteAnket.php';
//var url_post_interview = 'http://localhost/MSS/MainGate.php';
//var url_inpoll_streets = 'http://localhost/InteractiveMaps/js/inpollstreets.json';

var url_get_anket = 'http://82.196.0.140/MSS/JSAdapter.php';

var loadAnket = function(task_id,cb){
   $.getJSON(url_get_anket,function(data){
        cb(data);
    });
}
//var url_get_anket = 'http://82.196.0.140/MSS/InfoTransportGetRouteAnket.php';
exports.serverurl = url_get_anket;
exports.loadAnket = loadAnket;

exports.doIt = doIt;