import type { MicroCMSGetOptions } from "../types/index";

import { microcms } from "./microcmsConfig";

export const getArticleList = async ({
  endpoint,
  queries,
}: MicroCMSGetOptions) => {
  return await microcms.get({ endpoint, queries });
};
