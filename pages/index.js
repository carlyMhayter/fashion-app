import Head from "next/head";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Closet from "../components/Closet";
import OutfitBoard from "../components/OutfitBoard";
import { sections, categories, intialData } from "../utils/data";
import { ACTIONS, reducer, itemsOnBoard } from "../utils/reducer";
import { useReducer } from "react";
import { useEffect } from "react";

export default function Home() {
  const [data, dispatch] = useReducer(reducer, intialData);
  // useEffect(() => {
  //   dispatch({ type: ACTIONS.ADD_TO_SECTION, payload: data });
  // }, []);

  console.log(data);
  return (
    <div>
      <Head>
        <title>Wardrobe Wrangler</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main-container">
        <div className="board-containers">
          <OutfitBoard
            data={data.clothes}
            dispatch={dispatch}
            sections={sections}
            itemsOnBoard={data.itemsOnBoard}
          />
          <Closet
            data={data.clothes}
            categories={categories}
            dispatch={dispatch}
            itemsOnBoard={data.itemsOnBoard}
          />
        </div>
      </main>
    </div>
  );
}
