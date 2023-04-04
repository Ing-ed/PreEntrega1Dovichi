let admin = require("firebase-admin");
// const { Timestamp } = require("firebase/firestore");

let serviceAccount = require("./pass.json");
let data = require("./productos.json")
let collectonKey = "items"

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
let firestore = admin.firestore();
let settings = {TimestampsInSnapshots:true};
firestore.settings(settings);
if(data &&(typeof data === "object")){
    Object.keys(data).forEach(docKey =>{
        firestore.collection(collectonKey).doc(docKey).set(data[docKey]).then((res) =>{
            console.log("document"+docKey+"successfully")
        }).catch((err) => console.log("error on :",err))
    })
}