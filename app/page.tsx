
// import Image from "next/image";
import { getArticleList } from "@/libs/microcmsFunctions";
import NewsCardList from "@/components/NewsCardList";
import Hero from "@/components/Hero";
import AnimationSection from "@/components/AnimationSection";

// APIから記事一覧を取得
const news = await getArticleList({
  endpoint: "news", // 取得したいエンドポイント名を指定
  queries: {
    limit: 3,
  },
});

export default function Home() {

  return (
    <main className="">
      <Hero />
      <AnimationSection/>
      <section className="py-16 md:py-24 lg:py-32">
        <div className="inner">
          <hgroup className="title mb-10 md:mb-16 lg:mb-20">
            <h2>お知らせ</h2>
            <p>News</p>
          </hgroup>
          <p className="text-base text-center leading-loose">
            最新情報をお届けします。
          </p>
          <NewsCardList news={news.contents} />
        </div>
      </section>
    </main>
  );
}
