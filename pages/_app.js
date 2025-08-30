import './teleporthq.css';
import './style.css';
import GoogleAnalytics from '../components/GoogleAnalytics';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <GoogleAnalytics gtag={process.env.NEXT_PUBLIC_GA_ID || "G-XXXXXXXXXX"} />
      <Component {...pageProps} />
    </>
  );
}
