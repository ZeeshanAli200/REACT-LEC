import React, { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../../screens/context/context';
import {
    auth, doc, db, collection, addDoc, getDocs, getDoc,
    setDoc, updateDoc, onSnapshot
} from '../../config/firebase'



function HomeTweet({ tweetData }) {
    // let totalLikes = 0, totaldisLikes = 0
    const { state, dispatch } = useContext(GlobalContext);

    const [tweets, settweets] = useState([]);
    const [boolsnap, setbool] = useState(false);
    var unsubscribe;
    useEffect(async () => {

        const q = collection(db, "tweets");
        
        unsubscribe = onSnapshot(q, (querySnapshot) => {
            let tweetclone=[];
            querySnapshot.forEach(async (docTwee) => {
            tweetclone.push(docTwee)
                

                // let docrefReact = collection(db, `users`)
                // let querySnapshotReact = await getDocs(docrefReact)

                // querySnapshotReact.forEach(async (docUser) => {
                //     let docrefsubColl = collection(db, `users/${docUser.id}/postReaction`)

                //     let querySnapshotSubReact = await getDocs(docrefsubColl)

                //     querySnapshotSubReact.forEach(async (docSubdoc) => {
                //         // const washingtonRef = doc(db, "cities", "DC");

                //         // Set the "capital" field of the city 'DC'
                //         // await updateDoc(doc, {
                //         //     like: docSubdoc.data().Like
                //         // });
                //         if(docSubdoc.id==docTwee.id){


                //             totalLikes+=docSubdoc.data().Like
                //             totaldisLikes+=docSubdoc.data().Dislike



                //             console.log("likes>>",totalLikes);
                //         }

                //         // console.log(docSubdoc.id,likereact, "");

                //     }

                //     )
                //     const tweetLikeUpd = doc(db, "tweets", docTwee.id);
                //     await updateDoc(tweetLikeUpd, {
                //         like: totalLikes,
                //         dislike:totaldisLikes
                //     });


                // })
             
                
            });
            settweets(tweetclone)
            console.log("out loop>",tweetclone);
            // settweets

        })





        // let docref = collection(db, "tweets")
        // let querySnapshot = await getDocs(docref);

        // let tweetclone = [];
        // querySnapshot.forEach(async (docTwee) => {
        //     tweetclone.push(docTwee)




        //     let docrefReact = collection(db, `users`)
        //     let querySnapshotReact = await getDocs(docrefReact)

        //     querySnapshotReact.forEach(async (docUser) => {
        //         let docrefsubColl = collection(db, `users/${docUser.id}/postReaction`)

        //         let querySnapshotSubReact = await getDocs(docrefsubColl)

        //         querySnapshotSubReact.forEach(async (docSubdoc) => {
      

        //             if(docSubdoc.id==docTwee.id){


        //                 totalLikes+=docSubdoc.data().Like
        //                 totaldisLikes+=docSubdoc.data().Dislike



        //                 console.log("likes>>",totalLikes);
        //             }

        

        //         }

        //         )
        //         const tweetLikeUpd = doc(db, "tweets", docTwee.id);
        //         await updateDoc(tweetLikeUpd, {
        //             like: totalLikes,
        //             dislike:totaldisLikes
        //         });


        //     })





        //     // console.log(doc.data());here

        // });
        // console.log("Query>>", querySnapshot);
        


    }, [state.authUser])

    const reactionFunc = async (ele) => {
        // console.log(ele.target.parentNode.id);
        let reaction = ele.target.innerText
        let postId=ele.target.parentNode.id
        // console.log(ele.target.innerText);
        if (reaction == "Like") {
            let totalLikes = 0, totaldisLikes = 0
            console.log(tweets);
            const dataRef = doc(db, `users/${state.authUser.uid}/postReaction/${postId}`)
            await setDoc(dataRef, {
                Like: 1,
                Dislike: 0

            })


                let docrefReact = collection(db, `users`)
            let querySnapshotReact = await getDocs(docrefReact)

            querySnapshotReact.forEach(async (docUser) => {
                let docrefsubColl = collection(db, `users/${docUser.id}/postReaction`)

                let querySnapshotSubReact = await getDocs(docrefsubColl)

                querySnapshotSubReact.forEach(async (docSubdoc) => {
      

                    if(docSubdoc.id==postId){


                        totalLikes+=docSubdoc.data().Like
                        totaldisLikes+=docSubdoc.data().Dislike



                        console.log("likes>>",totalLikes);
                    }

        

                }

                )
                const tweetLikeUpd = doc(db, "tweets", postId);
                await updateDoc(tweetLikeUpd, {
                    like: totalLikes,
                    dislike:totaldisLikes
                });


            })



        }
        else if (reaction == "DisLike") {
            let totalLikes = 0, totaldisLikes = 0
            const dataRef = doc(db, `users/${state.authUser.uid}/postReaction/${ele.target.parentNode.id}`)
            await setDoc(dataRef, {
                Like: 0,
                Dislike: 1

            })
            let docrefReact = collection(db, `users`)
            let querySnapshotReact = await getDocs(docrefReact)

            querySnapshotReact.forEach(async (docUser) => {
                let docrefsubColl = collection(db, `users/${docUser.id}/postReaction`)

                let querySnapshotSubReact = await getDocs(docrefsubColl)

                querySnapshotSubReact.forEach(async (docSubdoc) => {
      

                    if(docSubdoc.id==postId){


                        totalLikes+=docSubdoc.data().Like
                        totaldisLikes+=docSubdoc.data().Dislike



                        console.log("likes>>",totalLikes);
                    }

        

                }

                )
                const tweetLikeUpd = doc(db, "tweets", postId);
                await updateDoc(tweetLikeUpd, {
                    like: totalLikes,
                    dislike:totaldisLikes
                });


            })




        }

    }

    return (







        tweets.map((tweetObj, i) => {
            return (
                <div id={tweetObj.id} key={i} style={{ width: "500px", margin: "0 auto", border: '1px solid', borderRadius: '2%', padding: '10px' }}>
                    {console.log(tweets)}
                    <div><h3>{tweetObj.data().userName}</h3>
                        <p>{tweetObj.data().tweetText}</p></div>

                    <b>{tweetObj.data().like}</b>
                    <button onClick={(e) => { reactionFunc(e) }}>Like</button>
                    <b>{tweetObj.data().dislike}</b>
                    <button onClick={(e) => { reactionFunc(e) }}>DisLike</button>
                </div>
            )
        })





    )
}

export default HomeTweet;
