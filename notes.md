lec 1 -E02
- create a repository 
- initizlize the repository
- node_modules,package.json , package-lock.json
- install express
- create a server
- listen to port 777
- write  request handlers for /test . /hello
- install nodemon and update script inside  package.json
- what  are dependencies
- what is the use of "-g" while npm install
- difference between caret and tilde (^ vs ~)


lec 2 - E03
- create a git repo. and push all code to git repo
- routes and route handlers 
- install postman and make a workspace /collection , test API calls
- handles => GET, POST , PATCH , DELETE API CALLS and test them on postman 
- explore routing and use of ? ,= , () , * , in the routing 
- use of regex in the routes  /a/,/.*fly$/
- reading the query params in the routes
- reading the dyamic routes 


lec 3 - E05
- mulltiple route handlers 
- next()
- next function and errors along res.send()
- app.use("/route" ,RH1,RH2,[RH3,RH4],RH5);
- what is middleware and why do we need it ?
- how express js basically handles requests behind the scenes
- difference app.use and app.all
- write a dummy auth middleware for admin
- write a dummy auth middle for all user routes , except /user/login

lec 4 - E06
- create a free cluster on MongoDB official website (Mongo Atlas)
- install mongoose library
- connect your application to the Database <"Connectiob-url"/devConnect> 
- call the connectDB function and connect t o database before starting application on 7777
- create a userSchema and user module
- create POST/signup API to add sata to database
- Push some documents using API calls from postman
- Error handling using try,catch


lec 5 - E07
- difference b/w JSON object and the JS object
- add the express.json middleware to your app
- make your signup API dynamic to recieve data from the end user
- user.findOne with duplicate emailId's which object will be returned
- API  - get use by email
- API - feed api - get/feed - get all the users room the database 
- API - get user by ID
- difference between patch and put 
- API - update a user
- explore the mongoose documentation for model methods 
- what are options in a model.findOneAndUpdate methodd, explore more about it
- API - update the user with email ID
-

lec 6 - E08
- explore schematype options from the documentation 
- add required,unoque,lowercase,min,minLength,trim
- add default
- create a custom validation dunction for gender
- improve the DB schema - PUT all appopirate valiadation on each field  in Schema
- add timestamp to the userSchema
- add Api leval validation on Patch request & Signup post api
- DATA SANITIZING =>Add API validation for each field 
- install validator
- explore validator library functionand use validatoe funcs for password, email ,and photo url
- NEVER TRUST req.body

lec-07 -E09
- Validate data in signup API
- install bcrypt package
- create PasswordHash using bcrypt.hash & save the user with encripted password ..
- create thee login API
- compare password and throw errors if email or password is invalid


lec 08- E10
-install cookie-parse
-send a dummy cookie to user
- create GET / profile API and check if you get the cookie back
-install jsonwebtoken
-IN login API , after email and password validation , create the JWT token and sent it to user in cookie
- read the cookies inside your profile API and find the logged in user
- userAuth middleware
- add the userAuth middle ware in profile API and a new sendConnectionRequest API
- set the expiry of JWT token and cookies to 7 days
-create usserSchema method to getJWT()
- create userSchema method to comparepassword(passwordInputBYUser)


lec 09 - E11
- Explore tinder API's
- create a list of all API you can thin f in Dev Tinder
- Group multiple routes under repetive routers
- read documentation for express.Router
- create routes folder for managing auth, profile, request routers
- reate authrouter , profileRouter, requestRouter 
- import these routers in app.ja
- create post/logout API
- create PATCH/profile/edit API
- create PATCH/profile/password API => forget password API
- make you validate all data in every POST , PATCH API's


lec 10 - E12
- create connection request API
- send connection request API
- proper validation of Data
- think about all corner cases
- $or query $and query and other queries.....in mongoose 
- schema.pre("save") function
- read more about indexes in MongoDb
- why do we need index in DB?
- what is the advantages and disadvantages of creating indexes?
- read the article aboout compound indexes
- ALWAYS THINK ABOUT CORNER CASES

lec 11- E13
 - write code with proper validations for POST/request/review/:status/:requestId
 - thought process - POST vs GET
 - read about ref and populate 
 - create GET/user/requests/recieved with all the checks



lec 12- E14
- logic for GET/ feed API
- explore the $nin , $ans , $ne and other query operatorators
- pagination ,.skip() & .limit()


- /feed?page=1&limit=10 => first 10 users 1-10 .skip(0).limit(10)
- /feed?page=2&limit=10 => 11-20 .skip(10).limit(10);
- /feed?page=3&limit=10 => 21-30 .skip(20).limit(10);

- skip = (page-1)*limit 



- installed cors
- sended back the user- in the login api