import fetchData from "@/api";
import Image from "next/image";
import { RootPageObject } from "./model";
import Link from "next/link";

async function fetch(): Promise<RootPageObject> {
  const json = await fetchData("home-page?populate=*");
  return json as RootPageObject;
}

export default async function Home() {
  const {
    data: { attributes: pageData },
  } = await fetch();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-2xl font-bold p-4">{pageData.heading}</h1>
      <p className="text-center">{pageData.description}</p>

      <p className="p-8">
        Pejdi na novice:{" "}
        <Link href="/news" className="underline">
          News
        </Link>
      </p>

      <div className="">
        <img
          alt="thumbnail"
          width={156}
          height={156}
          src={`${process.env.NEXT_PUBLIC_STRAPI_IMAGES_URL}${pageData.image.data.attributes.formats.thumbnail.url}`}
        />
        <img
          alt="small"
          width={500}
          height={500}
          src={`${process.env.NEXT_PUBLIC_STRAPI_IMAGES_URL}${pageData.image.data.attributes.formats.small.url}`}
        />
        <img
          alt="medium"
          width={750}
          height={750}
          src={`${process.env.NEXT_PUBLIC_STRAPI_IMAGES_URL}${pageData.image.data.attributes.formats.medium.url}`}
        />
        <img
          alt="large"
          width={1000}
          height={1000}
          src={`${process.env.NEXT_PUBLIC_STRAPI_IMAGES_URL}${pageData.image.data.attributes.formats.large.url}`}
        />
      </div>
    </main>
  );
}
