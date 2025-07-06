import { getArticleList } from "@/libs/microcmsFunctions";
import NewsCardList from "@/components/NewsCardList";
import { NEW_LIMIT } from "@/constants";

export default async function Page() {
  const currentInt = 1;
  // APIから記事一覧を取得
  const news = await getArticleList({
    endpoint: "news", // 取得したいエンドポイント名を指定
    queries: {
      limit: NEW_LIMIT,
    },
  });

  const pager: number = Math.ceil(news.totalCount / NEW_LIMIT);
  const pages: number[] = [...Array(pager)].map((_, i) => i);
  return (
    <section className="py-16 md:py-24 lg:py-32">
      <div className="inner">
        <hgroup className="title mb-10 md:mb-16 lg:mb-20">
          <h2>お知らせ一覧</h2>
          <p>News</p>
        </hgroup>
        <NewsCardList news={news.contents} />
        <ul className="flex justify-center items-start gap-2 mt-10">
          {pages.map((page) => {
            return (
              <li key={page}>
                {currentInt == page + 1 ? (
                  <span className="bg-green-600 text-white w-8 h-8 block leading-8 text-center">
                    {page + 1}
                  </span>
                ) : (
                  <a
                    href={`/news/page/${page + 1}`}
                    className="bg-gray-200 text-gray-800 transition hover:bg-green-600 hover:text-white w-8 h-8 block leading-8 text-center"
                  >
                    {page + 1}
                  </a>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
