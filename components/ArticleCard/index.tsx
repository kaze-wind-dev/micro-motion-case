"use client";

import Image from "next/image";
import type { News } from "@/types";
import { useInview } from "@/hook/useInview";
import { useRef, useState } from "react";
import Spinner from "../Spinner";
import { dateFormat } from "@/libs/utility";
type Props = {
  article: News;
};

const ArticleCard = ({ article }: Props) => {
  const ref = useRef<HTMLElement>(null);
  const [inview, setInview] = useState(false);
  useInview<HTMLElement>({ ref, setInview });

  return (
    <article key={article.id} ref={ref}>
      <a
        href={`/news/${article.id}`}
        className="py-6 lg:py-8 px-5 bg-white rounded-xl shadow-lg mb-4 hover:bg-green-50 hover:shadow-sm transition-all duration-300 block"
      >
        <header className="mb-2 md:mb-3 lg:mb-4">
          <p className="text-xs text-right text-gray-500 mb-2 lg:mb-3">
            <time dateTime={article.publishedAt ?? article.createdAt}>
              {dateFormat(article.publishedAt ?? article.createdAt, ".")}
            </time>
          </p>
          <figure className="mb-4 aspect-[3/2] rounded-lg overflow-hidden">
            {inview ? (
              article.thumbnail ? (
                <Image
                  src={article.thumbnail.url}
                  width={article.thumbnail.width}
                  height={article.thumbnail.height}
                  alt={article.thumbnail.alt ? article.thumbnail.alt : ""}
                  className="w-full h-full object-cover rounded-lg"
                />
              ) : (
                <Image
                  src="/images/no-img.jpg"
                  width={600}
                  height={400}
                  alt="noimage"
                  className="w-full h-full object-cover rounded-lg"
                />
              )
            ) : (
              <Spinner addClass="mb-4 aspect-[3/2] rounded-lg overflow-hidden" />
            )}
          </figure>
        </header>
        <h3 className="text-md font-bold mb-2 line-clamp-1">{article.title}</h3>
        <p className="text-sm line-clamp-2">{article.description}</p>
      </a>
    </article>
  );
};
export default ArticleCard;
