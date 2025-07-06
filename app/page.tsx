import Link from "next/link";
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
          <Link href="/news/" className="bg-green-600 hover:bg-green-700 transition text-white text-center py-4 px-6 mx-auto mt-10 block w-fit">一覧を見る</Link>
        </div>
      </section>
    </main>
  );
}
