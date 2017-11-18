'use strict';

module.exports = function (server,controllers)
 {
	 server.put('/savepost', controllers.post.savepost); 
	 server.get('/postlist', controllers.post.postlist); 
	 server.del('/deletepost', controllers.post.deletepost); 
	 server.put('/updatepost', controllers.post.updatepost); 

}
