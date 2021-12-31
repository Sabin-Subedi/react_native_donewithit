import * as SecureStore from "expo-secure-store";
import jwtDecode from "jwt-decode";

const key = "authToken";

const storeToken = async (token) => {
  try {
    await SecureStore.setItemAsync(key, token);
  } catch (err) {
    console.error(err);
  }
};

const getToken = async () => {
  try {
    const authToken = await SecureStore.getItemAsync(key);
    return authToken;
  } catch (err) {
    console.error(err);
  }
};

const removeToken = async () => {
  try {
    await SecureStore.deleteItemAsync(key);
  } catch (err) {
    console.error(err);
  }
};

const getUser = async () => {
  const token = await getToken();
  if (token) {
    return jwtDecode(token);
  }
  return null;
};

export default {
  storeToken,
  getUser,
  getToken,
  removeToken,
};
