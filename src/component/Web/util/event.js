/*
 * The objective is to implement syncing and to listen to the room states.
 *
 * */

import { IndexedDBStore } from "matrix-js-sdk";
import sdk from "matrix-js-sdk";
import getClient from "./client.js"

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
export const clientSync = (client, setUserSyncState) => {
  client.once("sync", (state, prevState, data) => {
    console.log(" inside sync");
    switch (state) {
      case "ERROR":
				setUserSyncState("ERROR")
        break;
      case "SYNCING":
        break;
      case "PREPARED":
				setUserSyncState("PREPARED");
        break;
      default:
        break;
    }
  });
};

export const Event = async (setUserSyncState) => {
  const client = await getClient();
  client.on("Room", (room) => {
    let roomId = room.roomId;
    console.log("in the room event, ", roomId);
  });
  clientSync(client,setUserSyncState);
  client.startClient();
	console.log("SYNC DONE");
};

// when the main.jsx is loading the page need to verify that the localstorage have data for the user obvio it is not accesiable so we can't fetch it for ourselves but I need to find that method.
