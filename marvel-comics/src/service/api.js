import axios from "axios";
import md5 from "md5";

const privateKey = "06a03a64974e56f750884a64246d78dd51cbf9db";
const publicKey = "e0e6819fac199485f5fd579b453e0d09";

const ts = +new Date();

const hash = md5(ts + privateKey + publicKey);

export const api = axios.create({
  baseURL: "http://gateway.marvel.com/v1/public/",
  params: {
    ts,
    apikey: publicKey,
    hash,
  },
});
