# An example of REST API in nodejs, using restify and save data in mongodb.
Simple you run command npm install (insall all required module).
config database change config/database.js.  
'url' : 'mongodb://username:password@hostname:post/database'. 
example : 'url' : 'mongodb://127.0.0.1:27017/test'.
Change port number in .env file.
HOST_NAME= http://13.126.89.183:5000/. 
create database test then create collection contet(Define in model) in mongodb.
I am using post,put,get and delete method.
you can run http://13.126.89.183:5000/.
Application API is running on aws server.This is live url:http://13.126.89.183:5000/.

#Add post API
 API UTL : http://13.126.89.183:5000/savepost 
 Method : PUT
 Request data  : title:Upcoming event
				 content:This is a good event 
				 Body in form data
Response data : {
    "type": true,
    "data": {
        "__v": 0,
        "title": "Upcoming event",
        "content": "This is a good event",
        "_id": "5a107226718cc5767340a470",
        "created_date": "2017-11-18T17:47:18.682Z"
    }
}
 #post List  API
 API UTL : http://13.126.89.183:5000/postlist 
 Method : GET
Response data :{
    "type": true,
    "data": [
        {
            "_id": "5a107226718cc5767340a470",
            "title": "Upcoming event",
            "content": "This is a good event",
            "__v": 0,
            "created_date": "2017-11-18T17:47:18.682Z"
        },
        {
            "_id": "5a1071e0718cc5767340a46f",
            "title": "suman  is dancing",
            "content": "ggbdfgd",
            "__v": 0,
            "created_date": "2017-11-18T17:46:08.690Z"
        },
        {
            "_id": "5a107178718cc5767340a46e",
            "title": "dfgdfgd",
            "content": "d dfsf fgdfgdff",
            "__v": 0,
            "created_date": "2017-11-18T17:44:24.046Z"
        }
    ]
}

#Delet post API
 API UTL : http://13.126.89.183:5000/savepost 
 Method : DELETE
 Request data  : id:5a0876b7cd36f37d52dd1062 
				 Body in form data
Response data : {
    "type": true,
    "message": "you have successfully delete"
}

#Update post API
 API UTL : http://13.126.89.183:5000/updatepost
 Method : PUT
 Request data  : id:5a107178718cc5767340a46e
				content:update content here
				title:update title 
				 Body in form data
Response data : {
    "type": true,
    "message": "you have successfully update",
    "data": {
        "_id": "5a107178718cc5767340a46e",
        "title": "update title ",
        "content": "update content here",
        "__v": 0,
        "created_date": "2017-11-18T17:44:24.046Z"
    }
}