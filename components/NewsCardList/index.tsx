import type { News } from "@/types";

import ArticleCard from "../ArticleCard";
type Props = {
  news: News[];
};

const NewsCardList = ({ news }: Props) => {
  if (news.length === 0) {
    return <p>投稿がありません</p>;
  }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mt-10">
      {news.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </div>
  );
};

export default NewsCardList;