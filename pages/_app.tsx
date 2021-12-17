import '../styles/globals.css'
import CommonHeader from "../src/CommonHeader";
import useAuthUser from "../src/hook/useAuthUser";
import Head from "next/head";
import React from "react";
function MyApp({ Component, pageProps }) {
  const isAuth = useAuthUser();
  return(
      <>
          <Head>
              <title>test1-board-front</title>
              <meta name="viewport" content="initial-scale=1.0, width=device-width" />
              <meta property="og:title" content="My page title" key="title" />
          </Head>

          <CommonHeader
            isAuth={isAuth}
          />

          {
              (isAuth)
              ?
                  <Component {...pageProps} isAuth={isAuth} />
              :
                  <div>Not our member</div>
          }
      </>
  )
}
export default MyApp
