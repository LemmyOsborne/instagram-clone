/* eslint-disable no-plusplus */
import { addDoc, collection, Firestore } from "firebase/firestore"

export async function seedDataBase(db: Firestore) {
    const users = [
        {
            userId: "1KFtS7A2pcR92qX67dabcp44INB2",
            username: "rodion",
            fullName: "Rodion Bozhenko",
            emailAddress: "bozhenko.rodion@mail.ru",
            following: ["2"],
            followers: ["2", "3", "4"],
            dateCreated: Date.now(),
        },
        {
            userId: "2",
            username: "ozzy",
            fullName: "Ozzy Osborne",
            emailAddress: "ozzy.osborne@gmail.com",
            following: [],
            followers: ["1KFtS7A2pcR92qX67dabcp44INB2"],
            dateCreated: Date.now(),
        },
        {
            userId: "3",
            username: "lemmy",
            fullName: "Lemmy Kilmister",
            emailAddress: "lemmy.kilmister@gmail.com",
            following: [],
            followers: ["1KFtS7A2pcR92qX67dabcp44INB2"],
            dateCreated: Date.now(),
        },
        {
            userId: "4",
            username: "david",
            fullName: "David Bowie",
            emailAddress: "david.bowie@gmail.com",
            following: [],
            followers: ["1KFtS7A2pcR92qX67dabcp44INB2"],
            dateCreated: Date.now(),
        },
        {
            userId: "5",
            username: "robert",
            fullName: "Robert Plant",
            emailAddress: "robert.plant@gmail.com",
            following: [],
            followers: ["1KFtS7A2pcR92qX67dabcp44INB2"],
            dateCreated: Date.now(),
        },
        {
            userId: "6",
            username: "john",
            fullName: "John Lennon",
            emailAddress: "john.lennon@gmail.com",
            following: [],
            followers: ["1KFtS7A2pcR92qX67dabcp44INB2"],
            dateCreated: Date.now(),
        },
    ]

    for (let k = 0; k < users.length; k++) {
        try {
            const docRef = await addDoc(collection(db, "users"), users[k])

            console.log("Document written in 'users' with ID: ", docRef.id)
        } catch (e) {
            console.error("Error adding document: ", e)
        }
    }

    for (let i = 1; i <= 5; ++i) {
        try {
            const docRef = await addDoc(collection(db, "photos"), {
                photoId: i,
                userId: "2",
                imageSrc: `/images/users/ozzy/${i}.jpg`,
                caption: "Don't ever try to eat bat",
                likes: [],
                comments: [
                    {
                        displayName: "plant",
                        comment: "Love your music, mate!",
                    },
                    {
                        displayName: "lennon",
                        comment: "Dunno, I like bats",
                    },
                ],
                userLatitude: "40.7128°",
                userLongitude: "74.0060°",
                dateCreated: Date.now(),
            })

            console.log("Document written in 'photos' with ID: ", docRef.id)
        } catch (e) {
            console.error("Error adding document: ", e)
        }
    }

    // for (let i = 1; i <= 3; ++i) {
    //     try {
    //         const docRef = await addDoc(collection(db, "photos"), {
    //             photoId: i,
    //             userId: "6",
    //             imageSrc: `/images/users/lennon/${i}.jpg`,
    //             caption: "I believe in yesterday",
    //             likes: [],
    //             comments: [
    //                 {
    //                     displayName: "david",
    //                     comment: "You such a great inspiration for me!",
    //                 }
    //             ],
    //             userLatitude: "40.7128°",
    //             userLongitude: "74.0060°",
    //             dateCreated: Date.now(),
    //         })

    //         console.log("Document written in 'photos' with ID: ", docRef.id)
    //     } catch (e) {
    //         console.error("Error adding document: ", e)
    //     }
    // }
}
