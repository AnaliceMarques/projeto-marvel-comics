import axios from "axios";
import md5 from "md5";
import { keyPrivateMarvel } from "../keys/Keys";

const privateKey = keyPrivateMarvel;
const publicKey = "e0e6819fac199485f5fd579b453e0d09";

const ts = +new Date();

const hash = md5(ts + privateKey + publicKey);

export const api = axios.create({
  baseURL: "http://gateway.marvel.com/v1/public/",
  params: {
    ts,
    apikey: publicKey,
    hash,
    limit: 30,
  },
});
