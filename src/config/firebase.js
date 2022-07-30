import { getApps,initializeApp } from 'firebase/app'
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,GoogleAuthProvider,signInWithPopup,signOut,signInWithCustomToken } from "firebase/auth";


const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSEAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID
}


const apps =  getApps





if (!apps.length){
    initializeApp(firebaseConfig);
}

export const CreateUser = (email, password) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        const user = userCredential.user;
        console.log(user)
        console.log('create user success!!')
        return 'success'
    })
    .catch((error) => {
        console.log(error.message)
        return 'failed'
    });
}

export const Login = (email, password) => {
    return new Promise((resolve, reject) => {
        const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user)
        console.log('login success!!')
        resolve('success')
      })
      .catch((error) => {
        console.log(error.message)
        reject('failed')
      });


      
    })

    


};
const provider = new GoogleAuthProvider();

export const googleLogin = () =>{
  return new Promise((resolve, reject) => {
    const auth = getAuth();
signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    console.log(user, 'user')
    resolve('success')
    // ...
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage, 'errorMessage')
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
    reject('failed')
  });
  })
}
export const Logout = () => {
  return new Promise((resolve, reject) => {
  const auth = getAuth();
signOut(auth).then(() => {
  // Sign-out successful.
  console.log('logout success!!')
        resolve('success')
}).catch((error) => {
  // An error happened.
  console.log(error.message)
        reject('failed')
  });
  })
}

export const Token = (token) => {
  return new Promise((resolve, reject) => {
const auth = getAuth();
// const token = 'token'
signInWithCustomToken(auth, token)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;
    // ...
    console.log('success!!')
    resolve('success')
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ...
    console.log(error.message)
    reject('failed')
  });
  })
}
