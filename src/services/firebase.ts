import { db } from "firebase/firebase"
import { collection, query, where, getDocs } from "firebase/firestore"

export const doesUsernameExist = async (username: string) => {
    const q = query(collection(db, "users"), where("username", "==", username))
    const querySnapshot = await getDocs(q)

    return querySnapshot.docs.length > 0
}

export const getUserById = async (userId: number) => {
    const q = query(collection(db, "users"), where("userId", "==", userId))
    const querySnapshot = await getDocs(q)
    const user = querySnapshot.docs.map((item) => ({
        ...item.data(),
        docId: item.id,
    }))

    return user
}
