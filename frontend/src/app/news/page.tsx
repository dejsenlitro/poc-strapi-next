import fetchData from "@/api";
import Image from "next/image";
import { NewsData } from "./model";
import Link from "next/link";

async function fetch(): Promise<NewsData> {
  const json = await fetchData("newss?populate=*");
  return json as NewsData;
}

export default async function News() {
  const { data } = await fetch();

  return (
    <main className="p-24">
      <h1 className="text-2xl font-bold mb-9">To so dev novice</h1>

      <div className="">
        <ul>
          {data.map((newsItem) => (
            <li key={newsItem.id}>{newsItem.attributes.news_title}</li>
          ))}
        </ul>
      </div>
    </main>
  );
}
