import firebase from "firebase";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCUOf66uldP2IPnS5NuHyWlPRO8ba5Iz9s",
  authDomain: "designcode-app-1d3da.firebaseapp.com",
  databaseURL: "https://designcode-app-1d3da.firebaseio.com",
  projectId: "designcode-app-1d3da",
  storageBucket: "designcode-app-1d3da.appspot.com",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
