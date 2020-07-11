import client from "./client";

const endpoint = "/messages";

const messagesApi = {
  get: () => client.get(endpoint),
  send: (message, listingId) => client.post(endpoint, { message, listingId }),
};

export default messagesApi;
