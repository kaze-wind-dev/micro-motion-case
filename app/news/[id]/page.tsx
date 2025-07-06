import { Metadata } from "next";
import Link from "next/link";
import { getArticleList } from "@/libs/microcmsFunctions";
import { notFound } from "next/navigation";
import { dateFormat } from "@/libs/utility";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({params}: Props): Promise<Metadata | undefined> {
  const { id } = await params;
  const data = await getArticleList({
    endpoint: `news/${id}`, // 取得したいエンドポイント名を指定
  });
  return {
    title: data.title,
    description: data.description,
    openGraph: {
      title: data.title,
      description: data.description,
    },
  };
}
export default async function Page({ params }: Props) {
  const { id } = await params;
  // APIから記事一覧を取得
  let data;
  try {
    data = await getArticleList({
      endpoint: `news/${id}`, // 取得したいエンドポイント名を指定
    });
  } catch {
    notFound();
  }
  return (
    <>
      <article className="py-16 md:py-24 lg:py-32">
        <div className="inner">
          <div className="prose-sm md:prose-base lg:prose-lg">
            <h1>{data.title}</h1>
            <p className="text-sm lg:text-md text-right text-gray-500 mb-2 lg:mb-3">
              <time dateTime={data.publishedAt ?? data.createdAt}>
                {dateFormat(data.publishedAt ?? data.createdAt, ".")}
              </time>
            </p>
            <div dangerouslySetInnerHTML={{ __html: data.content }} />
          </div>
          <Link
            href="/news/"
            className="bg-green-600 hover:bg-green-700 transition text-white text-center py-4 px-6 mx-auto mt-10 block w-fit"
          >
            一覧に戻る
          </Link>
        </div>
      </article>
    </>
  );
}
