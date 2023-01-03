import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';


const app = firebase.initializeApp({

//   apiKey: process.env.API_KEY || "AIzaSyCWjf0BwCA80ub1U_DVMW0RydKWF9bCiL4",
//   authDomain: process.env.AUTH_DOMAIN || "dropbox-react-d3fe2.firebaseapp.com",
//   projectId: process.env.PROJECT_ID ||  "dropbox-react-d3fe2",
//   storageBucket: process.env.STORAGE_BUCKET ||  "dropbox-react-d3fe2.appspot.com",
//   messagingSenderId: process.env.MESSAGING_SENDER_ID ||  "293933458524",
//   appId: process.env.APP_ID ||  "1:293933458524:web:54ef94f634a0d58800b299",
//   measurementId:  "G-NXQR82P079"

// apiKey: "AIzaSyD9XgJ8janoPGaHIA25ZZPEa7XUs5Gy8XM",
// authDomain: "dropbox-2a34b.firebaseapp.com",
// projectId: "dropbox-2a34b",
// storageBucket: "dropbox-2a34b.appspot.com",
// messagingSenderId: "188617933392",
// appId: "1:188617933392:web:a34e405fd8456278c78755",
// measurementId: "G-PQQFDZ3CCG"
apiKey: "AIzaSyCBWDKtF7GPPSx1qqGB3uO5hGr1tLtM8FM",
authDomain: "drop-a9a23.firebaseapp.com",
projectId: "drop-a9a23",
storageBucket: "drop-a9a23.appspot.com",
messagingSenderId: "125266879322",
appId: "1:125266879322:web:0a9167e633672db7770963",
measurementId: "G-M77NCCGZNF"               

});
const firestore = app.firestore();

export const database = {
    folders: firestore.collection("folders"),
    files: firestore.collection("files"),
    formatDoc: doc => {
        return {
            id: doc.id,
            ...doc.data()
        }
    },
    getCurrentTimestamp: firebase.firestore.FieldValue.serverTimestamp
}

export const storage = app.storage();
export const auth = app.auth();
export default app;

