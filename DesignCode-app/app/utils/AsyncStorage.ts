import AsyncStorage from "@react-native-community/async-storage";

const get = async (key: string, defaultValue: any = null) => {
  try {
    const item = await AsyncStorage.getItem(key);
    return item !== null ? JSON.parse(item) : defaultValue;
  } catch (error) {
    console.log(error);
  }
};

const set = async (key: string, value: any) => {
  try {
    return await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.log(error);
  }
};

const remove = async (key: string) => {
  await AsyncStorage.removeItem(key);
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { get, set, remove };
