import firebase from 'firebase';

/**
 * Den här komponenten kopplar upp en till firebase
 * Kanske skapa en ny firebase inför lansering
 * Skapa en här: https://firebase.google.com/
 * Här kan man också läsa mer: https://hackernoon.com/introduction-to-firebase-218a23186cd7
 */
class Firebase {
    constructor() {
        this.config = {
            apiKey: "AIzaSyB8gCteKi7gioMJv6BYB_W8QGxQatHmFS0",
            authDomain: "easyeat-fe1a1.firebaseapp.com",
            databaseURL: "https://easyeat-fe1a1.firebaseio.com",
            storageBucket: "easyeat-fe1a1.appspot.com",
        }
    }

    init() {
        firebase.initializeApp(this.config);
    }
}

export default new Firebase();