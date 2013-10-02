/**
 * Created with IntelliJ IDEA.
 * User: reshet
 * Date: 9/30/13
 * Time: 10:41 AM
 * To change this template use File | Settings | File Templates.
 */

var url_get_anket = 'http://82.196.0.140/MSS/JSAdapter.php';

var loadAnket = function(task_id,cb){
   $.getJSON(url_get_anket,function(data){
        cb(data);
    });
}