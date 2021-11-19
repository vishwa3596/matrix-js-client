/*
 * The objective is to implement syncing and to listen to the room states.
 *
 * */

import { storage } from "./storage.js";
import { login } from "./login.js";
import { createClient } from "matrix-js-sdk";

/**
                                         +---->STOPPED
                                         |
             +----->PREPARED -------> SYNCING <--+
             |                        ^  |  ^    |
             |      CATCHUP ----------+  |  |    |
             |        ^                  V  |    |
  null ------+        |  +------- RECONNECTING   |
             |        V  V                       |
             +------->ERROR ---------------------+

*/

/**
 *on(event, listener) -> Adds a listener to the end of the listeners array for the specified event. 
  No checks are made to see if the listener has already been added. Multiple calls passing the same combination of event and listener will result in the listener being added multiple times.
 *createClient() -> accept option to create a MatrixClient instance.
 * startClient() -> High level helper method to begin syncing and poll for new events. To listen for these events, add a listener for module:client~MatrixClient#event:"event" via module:client~MatrixClient#on. Alternatively, listen for specific state change events
  * */
const clientSync = (client) => {
  client.once("sync", (state, prevState, data) => {
    console.log(" inside sync");
    switch (state) {
      case "ERROR":
        console.log("in error update the ui about the errors ");
        break;
      case "SYNCING":
        console.log(" in syncing update the ui ");
        break;
      case "PREPARED":
        console.log(" IN PREPARED STATE OF SYNCING ");
        let rooms = client.getRooms();
        console.log(rooms);
        break;
      default:
        break;
    }
  });
};

const Event = async () => {
  const responseFromLogin = await login(storage.userName, storage.password);
  clientSync(responseFromLogin);
  responseFromLogin.startClient();
};

Event();
