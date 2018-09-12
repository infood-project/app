
// Framtida möjligt alternativ
// React redux kan fungera lite som "localstorage"
// och hålla värden på klienten
// Läs mer här: https://redux.js.org/basics/usagewithreact

import { createStore } from 'redux';

// TODO This is the redux store that needs to be configured for future
// server requests with axios
const store = createStore(reducer);