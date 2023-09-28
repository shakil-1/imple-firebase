/**
 *  ------------------
 *   INSTALL INSTALLIATION
 *  ------------------
 * 1. visit : console.google.firebase.com 
 * 2. create project (skip google analytics)
 * 3. register app (Create config )
 * 4. install firebase : npm install firebase 
 * 5. add config file to your project 
 * 6. DANGER : do not publish or make firebase config to public by pushing those to github 
 *  ------------------
 *   INTEGRATION
 *  ------------------
 *7. Visit : Go to Docs > Build > Authentication > web > get Started 
 * 8. Export app form the firebase.confing.js file: export default app
 * 9. Login.jsx : import getAuth from 'firebase/auth'
 * 10. create const auth = getAuth(app)
    ------------------
      PROVIDER SETUP
    ------------------
 * 11. import googeleAuthProvider and create a new provider 
 * 12. use signInWithPopup and pass auth provider 
 * 13. activate sign-in mathod (google, github, facebook, ect)
 * 14. [vite]: changing 127.0.0.1 to localhost
 * -------------
 * More Auth provider 
 * ------------
 * 1. Activate the provider(create app , provide redirect url , client id , clint secret ) 
 * 2. 
 */