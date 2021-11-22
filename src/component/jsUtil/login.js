import sdk from "matrix-js-sdk";
import { storage } from "./storage.js";
import { Event } from "./event.js";

export const createClient = (username, password) => {
  return sdk.createClient(storage.baseUrl);
};

/**
 * The login with the http request is giving cors error and I'm not able to figure it out till now and for now (18/11/2021) I think  i should be moving ahead with the matrix-js-sdk and should come to figure out this later on. base usl can be found out by printing the reposine log from the login response
 *
 *
 * 6. Filtering -> This api helps us to apply certain filter to the server
 * while fetching the query like the list of room you have left gets added
 * to the No_longer_room -> and this is passed to the server to identify
 * all those rooms which you are not a part off this is not a concreate ex.
 * The usecase might vary depending on the client request which all thing they
 * want to see.
 * */
export const login = async (username, password) => {
  const Client = createClient(username, password);
  let loginResponse = await Client.login("m.login.password", {
    user: username,
    password: password,
  });
  await Event(loginResponse);
};
