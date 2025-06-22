import Image from "next/image";
import React from "react";

import { getArticleList } from "@/libs/microcmsFunctions";
import type { News } from "@/types";

// APIから記事一覧を取得
const news = await getArticleList({
  endpoint: "news", // 取得したいエンドポイント名を指定
  queries: { 
    limit: 3,
   }, // オプションで取得件数やオフセットを指定可能
});
// console.log(data);
export default function Home() {
  return (
    <div className="">
      <main className="">
        <h1 className="font-base text-[5rem]">
          何かテキストを入れてくれNotosans
        </h1>
        <h1 className="font-mono text-[5rem] ">MonoFont</h1>

        <section className="py-16 md:py-24 lg:py-32">
          <div className="inner">
            <hgroup className="title mb-10 md:mb-16 lg:mb-20">
              <h2>お知らせ</h2>
              <p>News</p>
            </hgroup>
            <p className="text-base text-center leading-loose">
              最新情報をお届けします。
            </p>
            {news.contents.length === 0 ? (
              <p>投稿がありません</p>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mt-10">
                {news.contents.map((article: News) => {
                  return (
                    <article key={article.id}>
                      <a
                        href={`/news/${article.id}`}
                        className="py-6 lg:py-8 px-5 bg-white rounded-xl shadow-lg mb-4 hover:bg-green-50 hover:shadow-sm transition-all duration-300 block"
                      >
                        <header className="mb-2 md:mb-3 lg:mb-4">
                          <p className="text-xs text-right text-gray-500 mb-2 lg:mb-3">
                            <time>
                              {article.publishedAt
                                ? article.publishedAt
                                : article.createdAt}
                            </time>
                          </p>
                          <figure className="mb-4 aspect-[3/2]">
                            {article.thumbnail ? (
                              <Image
                                src={article.thumbnail.url}
                                width={article.thumbnail.width}
                                height={article.thumbnail.height}
                                alt={
                                  article.thumbnail.alt
                                    ? article.thumbnail.alt
                                    : ""
                                }
                                className="w-full h-full object-cover rounded-lg"
                              />
                            ) : (
                              <Image
                                src="/images/no-img.jpg"
                                width={600}
                                height={400}
                                alt="no image"
                                className="w-full h-full object-cover rounded-lg"
                              />
                            )}
                          </figure>
                        </header>
                        <h3 className="text-md font-bold mb-2 line-clamp-1">
                          {article.title}
                        </h3>
                        <p className="text-sm line-clamp-2">
                          {article.description}
                        </p>
      
                      </a>
                    </article>
                  );
                })}
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}
