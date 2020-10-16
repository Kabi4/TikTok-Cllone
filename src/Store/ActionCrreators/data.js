import db from '../../Firebase/firebase';
import * as actionTypes from './../actionTypes';

const setData = (newArray)=>{
    return{
        type: actionTypes.SETDATA,
        newArray
    }
}

export const getdata = ()=>{
    return dispatch=>{
        db.collection("posts").onSnapshot(snapshot=>{
        const posts = [];
        snapshot.docs.forEach(doc=>{posts.push({
            id: doc.id,
            data: doc.data()
        })});
        dispatch(setData(posts));
    })
    }
}