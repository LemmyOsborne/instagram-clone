import { db } from "firebase/firebase"
import { collection, query, where, getDocs } from "firebase/firestore"

export const doesUsernameExist = async (username: string) => {
    const q = query(collection(db, "users"), where("username", "==", username))
    const querySnapshot = await getDocs(q)

    return querySnapshot.docs.length > 0
}
