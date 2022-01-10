import Head from "next/head";
import Image from "next/image";
import { Router, useRouter } from "next/router";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Typography } from "@mui/material";
import DeleteOutlined from "@mui/icons-material/DeleteOutlined";
import Closet from "../components/Closet";
import OutfitBoard from "../components/OutfitBoard";
import Container from '@mui/material/Container';



export default function Home() {
  return (
    <div>
      <Head>
        <title>Wardrobe Wrangler</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="main-container">
          <div className="board-containers">
            <OutfitBoard/>
            <Closet /> 
          </div>
      </main>
   </div>
  );
}
