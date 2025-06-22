import microcmsConnect from "./microcmsClient";

export const microcms = microcmsConnect({
  apiDomain: process.env.MICROCMS_API_DOMAIN || "",
  apiKey: process.env.MICROCMS_API_KEY || "",
});

