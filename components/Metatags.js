import Head from "next/head";

export default function Metatags({
  title = "Bloggr App",
  description = "A complete Blog posting app by Abdullah Alam",
  image = "https://img.icons8.com/dusk/64/null/google-blog-search.png",
}) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@alamdraws" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
    </Head>
  );
}
