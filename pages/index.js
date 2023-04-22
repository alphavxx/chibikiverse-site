import Head from "next/head";
import {
  Navbar,
  Hero,
  Welcome,
  TokenSection,
  Roadmap,
  Team,
  Goal,
  Footer,
} from "@/components";

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
        <link rel="icon" href="/img/favicon-2.svg" />
      </Head>
      <main className="bg-gray-950 font-outfit text-white">
        <Navbar />
        <Hero />
        <Welcome />
        <TokenSection />
        <Roadmap />
        <Team />
        <Goal />
        <Footer />
        <div className="h-1 bg-gradient-to-r from-violet-500 to-amber-500 bg-white"></div>
      </main>
    </>
  );
}
