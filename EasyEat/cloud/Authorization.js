import firebase from "firebase";
import { Facebook } from 'expo';

/**
 * Den här komponenten kan användas för att
 * Logga in använder med firebase och facebook
 * Firebase sparar användardatan, och facebook ger en nyckel
 * Läs mer här: https://docs.expo.io/versions/latest/guides/using-firebase#listening-for-authentication
 */
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
  
    // Just nu används en nyckel hämtad från facebook
    // Kanske skaffa en ny vid lansering
    // Gå in här för att skapa en ny facebook-app:
    // https://developers.facebook.com/
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