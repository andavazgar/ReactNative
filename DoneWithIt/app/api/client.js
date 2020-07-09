import { create } from "apisauce";
import cache from "../utilities/caching";
import authStorage from "../auth/authStorage";

const apiClient = create({
  baseURL: "http://192.168.0.134:9000/api",
});

apiClient.addAsyncRequestTransform(async (request) => {
  const authToken = await authStorage.getToken();

  if (authToken) {
    request.headers["x-auth-token"] = authToken;
  }
});

const get = apiClient.get;
apiClient.get = async (url, params, axiosConfig) => {
  const response = await get(url, params, axiosConfig);

  if (response.ok) {
    cache.save(url, response.data);
    return response;
  }

  const data = await cache.get(url);
  return data ? { ok: true, data } : response;
};

export default apiClient;
