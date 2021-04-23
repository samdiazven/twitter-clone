import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDdpMnrbc1irxp_SZvimvy7K9KdIvZb1Zc",
  authDomain: "twitter-clone-ec231.firebaseapp.com",
  projectId: "twitter-clone-ec231",
  storageBucket: "twitter-clone-ec231.appspot.com",
  messagingSenderId: "598246552140",
  appId: "1:598246552140:web:db874c0e5efe6494637ae9",
};

if (firebase.apps.length === 0) firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const mapUserFromFirebaseAuthToUser = (user) => {
  const { displayName, email, photoURL, uid } = user;

  return {
    avatar: photoURL,
    username: displayName,
    email,
    uid,
  };
};

export const onAuthStateChanged = (onChange) => {
  return firebase.auth().onAuthStateChanged((user) => {
    const normailzeUser = user ? mapUserFromFirebaseAuthToUser(user) : null;
    onChange(normailzeUser);
  });
};

export const LoginWithGithub = () => {
  const githubProvider = new firebase.auth.GithubAuthProvider();
  return firebase.auth().signInWithPopup(githubProvider);
};

export const addTwitt = ({ avatar, username, userId, content }) => {
  return db.collection("twitts").add({
    avatar,
    username,
    userId,
    content,
    createdAt: firebase.firestore.Timestamp.fromDate(new Date()),
    likesCount: 0,
    sharedCount: 0,
  });
};

export const fetchLatestTwitts = () => {
  return db
    .collection("twitts")
    .get()
    .then((snapShot) => {
      return snapShot.docs.map((doc) => {
        const data = doc.data();
        const id = doc.id;
        return {
          id,
          ...data,
        };
      });
    });
};
