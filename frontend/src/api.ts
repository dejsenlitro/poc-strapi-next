export default async function fetchData(path: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/${path}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
      },
    }
  );
  return await response.json();
}
