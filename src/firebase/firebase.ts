import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
// import { seedDataBase } from "seed"

const firebaseConfig = {
    apiKey: "AIzaSyBxISZd0IbDVN8OEO7GlN0qCbwYBi_Fqtw",
    authDomain: "instagram-clone-36358.firebaseapp.com",
    projectId: "instagram-clone-36358",
    storageBucket: "instagram-clone-36358.appspot.com",
    messagingSenderId: "406669608193",
    appId: "1:406669608193:web:ddafbefa57bead7c3ec700",
}

const firebase = initializeApp(firebaseConfig)

export const db = getFirestore(firebase)

// seedDataBase(db)

export { firebase }
