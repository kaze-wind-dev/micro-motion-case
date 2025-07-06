// microCMSの型定義
// @see https://document.microcms.io/content-api/get-api-field-responses
export type MicroCMSConnect = {
  apiDomain: string;
  apiKey: string;
};

export type MicroCMSGetOptions = {
  endpoint: string;
  queries?: MicroCMSQueries;
};

// コンテンツ取得時のクエリパラメータの型定義
// @see https://document.microcms.io/content-api/get-list-contents#h929d25d495
export type MicroCMSQueries = {
  draftKey?: string;
  limit?: number;
  offset?: number;
  orders?: string;
  q?: string;
  fields?: string | string[];
  ids?: string;
  filters?: string | string[];
  depth?: number;
  richEditorFormat?: "html" | "object";
};

// コンテンツ取得時のレスポンスボディの型定義
// @see https://document.microcms.io/content-api/get-list-contents#h8a4c320d89
export type MicroCMSResponseBody<T> = {
  contents: (T & MicroCMSContent)[];
  totalCount: number;
  offset: number;
  limit: number;
};

// コンテンツIDの型定義
// @see https://document.microcms.io/manual/automatic-grant-fields
export type MicroCMSContentId = {
  id: string;
};

// コンテンツの日付の型定義
// @see https://document.microcms.io/manual/automatic-grant-fields
export type MicroCMSDate = {
  createdAt: string;
  updatedAt: string;
  publishedAt?: string;
  revisedAt?: string;
};

//　コンテンツの型定義
// @see https://document.microcms.io/manual/automatic-grant-fields
export type MicroCMSContent = MicroCMSContentId & MicroCMSDate;

// コンテンツの画像の型定義
// @see https://document.microcms.io/content-api/get-api-field-responses#he02e86da57
export type MicroCMSImage = {
  url: string;
  width: number;
  height: number;
  alt?: string;
};

// お知らせコンテンツの型定義
export type News = {
  title: string;
  description: string;
  content: string;
  thumbnail?: MicroCMSImage;
} & MicroCMSContent;


export type NewsList = {
  totalCount: number;
  limit: number;
  offset: number;
} &
 MicroCMSContentId &
  MicroCMSDate &
  MicroCMSResponseBody<News>;
