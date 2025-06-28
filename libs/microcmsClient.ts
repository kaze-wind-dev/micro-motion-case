import type { MicroCMSConnect, MicroCMSGetOptions } from "@/types";
import { buildQueryString } from "./utility";

function microCMSConnect({ apiDomain, apiKey }: MicroCMSConnect) {

  const get = async ({ endpoint, queries }: MicroCMSGetOptions) => {
    // APIリクエストのヘッダーとURLを設定
    // @see https://document.microcms.io/content-api/get-list-contents
    if (!endpoint) {
      throw new Error("エンドポイントが指定されていません。");
    }

    // クエリパラメータの設定（）
    if (queries && typeof queries !== "object") {
      throw new Error("クエリパラメータはオブジェクトでなければなりません。");
    }
    const queryParams = queries ? buildQueryString(queries) : "";
    const headers = {
      "Content-Type": "application/json",
      "X-MICROCMS-API-KEY": apiKey || "",
    };
    const url = `https://${apiDomain}.microcms.io/api/v1/${endpoint}${
      queryParams ? `?${queryParams}` : ""
    }`;
    try {
      const response = await fetch(url, {
        headers: headers,
      });
      if (!response.ok) {
        throw new Error(`HTTPエラー: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error: unknown) {
      if (error) {
        const message =
          error instanceof Error
            ? `APIリクエスト中にエラーが発生しました: ${error.message}`
            : "APIリクエスト中にエラーが発生しました。";
        throw new Error(message);
      }
    }
  };
  return {
    get,
  };
}

export default microCMSConnect;
