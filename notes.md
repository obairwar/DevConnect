lec 1 -E02
- create a repository 
- initizlize the repository
- nde_modules,package.json , package-lock.json
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
- ecplore routing and use of ? ,= , () , * , in the routing 
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
- create POST/sihnup API to add sata to database
- Push some documents using API calls from postman
- Error handling using try,catch

