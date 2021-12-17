import '../styles/globals.css'
import CommonHeader from "../src/CommonHeader";
import useAuthUser from "../src/hook/useAuthUser";

function MyApp({ Component, pageProps }) {
  const isAuth = useAuthUser();
  return(
      <>
          <CommonHeader/>
          {
              (isAuth)
              ?
                  <Component {...pageProps} />
              :
                  <div>Need to Login</div>
          }
      </>
  )
}
export default MyApp
