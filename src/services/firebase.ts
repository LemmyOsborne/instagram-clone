import { db } from "firebase/firebase"
import { collection, query, where, getDocs, updateDoc, doc, arrayUnion } from "firebase/firestore"
import { IUser } from "interfaces/interfaces"

export const doesUsernameExist = async (username: string) => {
    const q = query(collection(db, "users"), where("username", "==", username))
    const querySnapshot = await getDocs(q)

    return querySnapshot.docs.length > 0
}

export const getUserById = async (userId: string | undefined) => {
    const q = query(collection(db, "users"), where("userId", "==", userId))
    const querySnapshot = await getDocs(q)
    const LoggedUser = querySnapshot.docs.map((doc) => ({
        ...(doc.data() as IUser),
        docId: doc.id,
    }))

    return LoggedUser
}

export const getSuggestedProfiles = async (docId: string, following: string[]) => {
    const q = query(collection(db, "users"), where("userId", "!=", docId))
    const querySnapshot = await getDocs(q)
    return querySnapshot.docs
        .map((doc) => ({
            ...(doc.data() as IUser),
            docId: doc.id,
        }))
        .filter((profile) => !following.includes(profile.userId))
}

export const updateLoggedUserFollowing = async (loggedUserDocId: string, profileId: string) => {
    const loggedUserRef = doc(db, "users", loggedUserDocId)
    const result = await updateDoc(loggedUserRef, {
        following: arrayUnion(profileId),
    })

    return result
}

export const updateFollowedUserFollowing = async (loggedUserId: string, profileDocId: string) => {
    const loggedUserRef = doc(db, "users", profileDocId)
    const result = await updateDoc(loggedUserRef, {
        followers: arrayUnion(loggedUserId),
    })

    return result
}
