import Head from "next/head";
import { Navbar } from "@/components";

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Chibiki Origin - The Most Cutest and Strongest Anime style NFT
          collection on SUI
        </title>
        <meta
          name="description"
          content="The Most Cutest and Strongest Anime style NFT collection on SUI with multiple utilities backed by the NFT and token."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon-2.png" />
      </Head>
      <main className="bg-gray-950 min-h-screen font-outfit">
        <Navbar />
      </main>
    </>
  );
}
