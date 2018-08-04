import firebase from "firebase";
import { Facebook } from 'expo';

class Authorization {

  constructor() {
    this.auth = firebase.auth
    this.provider = new firebase.auth.FacebookAuthProvider();
  }

  getUserStatus(cb) {
    this.auth().onAuthStateChanged((user) => {
      cb(user);
    })
  }

  async signIn() {
  
    const { type, token } = await Facebook.logInWithReadPermissionsAsync(
      '1516453125121816', {
      permissions: ['public_profile'],
    });
  
    if (type === 'success') {
      const credential = firebase.auth.FacebookAuthProvider.credential(token);
      firebase.auth().signInAndRetrieveDataWithCredential(credential).catch((error) => {
        console.log(error);
      });
    }
  }

  signOut() {
    return this.auth().signOut();
  }
}

export default new Authorization();