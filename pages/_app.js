import './teleporthq.css';
import './style.css';
import GoogleAnalytics from '../components/GoogleAnalytics';
import SiteTagline from '../components/SiteTagline';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <GoogleAnalytics gtag={process.env.NEXT_PUBLIC_GA_ID || "G-XXXXXXXXXX"} />
      <Component {...pageProps} />
      <SiteTagline />
    </>
  );
}
