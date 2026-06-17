# React , express, mongoose, mongodb atlas, node , bcrypt, jwt , validator or zod, nodemailer, cors, helmet, nodemon, , dotenv, claudinary, razorpay ..... 

# package.json 
   i) change the type to module (below lincense)
     "type": "module"

   ii) change to main to server.js from index.js
   iii) in scripts 
          add --> "dev" : "nodemon server.js"

folder structure...-> 
src 
  |--> config
  |--> constants
  |--> middlewares
  |--> utils
  |--> controllers
  |--> routes
  |--> models


# app.js file
    create app.js file directly in src folder

# server.js file
    create server.js file outside src

    along with server.js create 
            i)  .gitignore 
            ii) .env           and 
            iii) README.md


# package installation
    
    i) npm i express mongoose dotenv bcrypt jsonwebtoken nodemailer validator helmet cors express-rate-limit

    ii) install nodemon globally
         npm i -g nodemon

    iii) in .gitignore 
               write --> 1. node_modules
                         2. .env


# create express server in app.js
  in app.js 
        import express from "express"
        const app = express();
        export default app;
     
    
   now in app.js --> 
   import helmet from 'helmet';
   import cors from 'cors';

   app.use(helmet());
   app.use(cors({
    origin: 
    credentials: true
    methods:
    headers:
   }))

# .env file
    NODE_ENV=development
    PORT=3000
    MONGO_URI=""
    ALLOWED_ORIGINS=https://localhost:5173

   * to use env variables 
      import 'dotenv/config'

      const PORT = process.env.PORT;

# server.js file
        import 'dotenv/config' ;
        import app from './src/app.js';

        const PORT = process.env.PORT || 8080;

        const startServer = async () => {
            try{
                // await connectDB();
                const server = app.listen(PORT, () =>{
                    console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`);
                });

                process.on('unhandledRejection',(err) =>{
                    console.error('UNHANDLED REJECTION: ',err.message);
                    server.close(() => process.exit(1));
                });
            }catch (err) {
                console.log('Failed to start server: ',err.message);
                process.exit(1);
            }
        }


        startServer();

# mongodb atlas

   go to mongodb atlas website
     then login using google accout -> kumaranshu2208@gmail.com 

     i) create cluster

     ii) go to database and network access 
          --> add new database user and remember the password

     iii) ip access list 
          --> add ip access list

     iv)  go to the cluster and click on connect 
         --> connect to mongodb atlas

# mongoose configuration 
   in config folder
    --> create db.config.js file

       