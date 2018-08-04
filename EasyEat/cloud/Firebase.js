import firebase from 'firebase';

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