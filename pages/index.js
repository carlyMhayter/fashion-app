import Head from "next/head";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Closet from "../components/Closet";
import OutfitBoard from "../components/OutfitBoard";
import { clothes, sections, categories } from "../utils/data";
import { ACTIONS, reducer } from "../utils/reducer";
import { useReducer } from "react";

export default function Home() {
  const [data, dispatch] = useReducer(reducer, clothes);

  return (
    <div>
      <Head>
        <title>Wardrobe Wrangler</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main-container">
        <div className="board-containers">
          <OutfitBoard clothes={data} dispatch={dispatch} sections={sections} />
          <Closet clothes={data} categories={categories} dispatch={dispatch} />
        </div>
      </main>
    </div>
  );
}
