import * as SecureStore from "expo-secure-store";
import JwtDecode from "jwt-decode";

const key = "authToken";

const getToken = async () => {
  try {
    return await SecureStore.getItemAsync(key);
  } catch (error) {
    console.log("Error getting the auth token", error);
  }
};

const getUser = async () => {
  const token = await getToken();
  return token ? JwtDecode(token) : null;
};

const storeToken = async (token) => {
  try {
    await SecureStore.setItemAsync(key, token);
  } catch (error) {
    console.log("Error storing the auth token", error);
  }
};

const removeToken = async () => {
  try {
    await SecureStore.deleteItemAsync(key);
  } catch (error) {
    console.log("Error deleting the auth token", error);
  }
};

export default { getToken, getUser, storeToken, removeToken };
