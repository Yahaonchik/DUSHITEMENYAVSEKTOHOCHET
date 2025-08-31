import './teleporthq.css';
import './style.css';
import GoogleAnalytics from '../components/GoogleAnalytics';
import SiteTagline from '../components/SiteTagline';
import { Inter, Nunito, Roboto, Roboto_Serif, Spectral } from 'next/font/google'

const inter = Inter({ subsets: ['latin', 'cyrillic'], display: 'swap' })
const nunito = Nunito({ subsets: ['latin','cyrillic'], weight: ['300','400','500','600','700'], display: 'swap', variable: '--font-nunito' })
const roboto = Roboto({ subsets: ['latin','cyrillic'], weight: ['300','400','500','700'], display: 'swap', variable: '--font-roboto' })
const robotoSerif = Roboto_Serif({ subsets: ['latin','cyrillic'], weight: ['300','400','500','700'], display: 'swap', variable: '--font-roboto-serif' })
const spectral = Spectral({ subsets: ['latin','cyrillic'], weight: ['400','500','600','700'], display: 'swap', variable: '--font-spectral' })

export default function MyApp({ Component, pageProps }) {
  return (
    <div className={`${inter.className} ${nunito.variable} ${roboto.variable} ${robotoSerif.variable} ${spectral.variable}`}>
      <GoogleAnalytics gtag={process.env.NEXT_PUBLIC_GA_ID || "G-XXXXXXXXXX"} />
      <Component {...pageProps} />
      <SiteTagline />
    </div>
  );
}
