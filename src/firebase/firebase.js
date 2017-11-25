import * as firebase from 'firebase'

import { apiKey, authDomain, databaseURL, projectId, storageBucket, messagingSenderId } from './firebase-config.js'

const config = {
  apiKey,
  authDomain,
  databaseURL,
  projectId,
  storageBucket,
  messagingSenderId,
};

firebase.initializeApp(config)


firebase.database.enableLogging(false);


const database = firebase.database()

export { firebase, database }