import microcmsConnect from "./microcmsClient";

  // 環境変数のチェック
  if (!process.env.MICROCMS_API_DOMAIN || !process.env.MICROCMS_API_KEY) {
    throw new Error("MicroCMS API ドメインまたはAPIキーが設定されていません。");
  }

export const microcms = microcmsConnect({
  apiDomain: process.env.MICROCMS_API_DOMAIN,
  apiKey: process.env.MICROCMS_API_KEY,
});

