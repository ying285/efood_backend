import {getAuth} from 'firebase/auth';

exports.authTokenVerifyMiddleware=(req,res,next)=>{
    var admin=require('firebase-admin');
    var serviceAccount=require('../firebasecreate.json')

    admin.initializeApp({
        credential:admin.credential.cert(serviceAccount)
    });

    getAuth()
  .verifyIdToken(idToken)
  .then((decodedToken) => {
    const uid = decodedToken.uid;
    console.log(uid)
  })
  .catch((error) => {
    console.log(error)
  });
  next()

    // const tokenString=req.headers['authorization']? req.headers['authorization'].split(''):null
    // if(!tokenString)
    // res.send('no header provided')
    // console.log(tokenString);

    
}