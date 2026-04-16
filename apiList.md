# DevConnect APIs

## authRouter
- POST /signup
- POST /login
- POST /logout


## profileRouter
- GET /profile/view
- PATCH /profilr/edit
- PATCH /profilr/password


STATUS: ignore,intrested, accepted,rejected

## connectionRequestRouter
- POST /request/send/intrested/:userId
- POST /request/send/ignored/:userId
** => POST/request/send/:status/:userId **



- POST /request/review/accepted/:requestId
- POST /request/review/rejected/:requestId
** => POST/request/review/:Status/:requestId **



## userRouter
- GET/user/requests/recieved
- GET/user/connetions
- GET/user/feed - Gets you the profiles of other users on platform




