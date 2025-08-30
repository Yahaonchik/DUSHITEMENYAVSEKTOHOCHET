import Head from 'next/head'
import { useRouter } from 'next/router'

const SEOHead = ({ 
  title, 
  description, 
  keywords,
  canonical,
  ogTitle,
  ogDescription,
  ogImage,
  structuredData 
}) => {
  const router = useRouter()
  const baseUrl = 'https://remstirmash.od.ua' // замените на ваш домен
  const currentUrl = `${baseUrl}${router.asPath}`

  // Значения по умолчанию
  const defaultTitle = 'Ремонт стиральных машин в Одессе'
  const defaultDescription = 'Профессиональный ремонт стиральных машин в Одессе. Бесплатный выезд мастера, диагностика. Ремонт в день обращения. Честные цены. ☎ +38 (098) 467-13-52'
  const defaultKeywords = 'ремонт стиральных машин, Одесса, мастер по ремонту, стиральная машина, сервис'
  const defaultOgImage = `${baseUrl}/og-image.jpg`

  const finalTitle = title || defaultTitle
  const finalDescription = description || defaultDescription
  const finalKeywords = keywords || defaultKeywords
  const finalCanonical = canonical || currentUrl
  const finalOgTitle = ogTitle || finalTitle
  const finalOgDescription = ogDescription || finalDescription
  const finalOgImage = ogImage || defaultOgImage

  return (
    <Head>
      {/* Основные мета-теги */}
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
      <meta name="keywords" content={finalKeywords} />
      <meta name="robots" content="index, follow" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={finalCanonical} />
      
      {/* Open Graph */}
      <meta property="og:title" content={finalOgTitle} />
      <meta property="og:description" content={finalOgDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:image" content={finalOgImage} />
      <meta property="og:site_name" content="РемСтирМаш - Ремонт стиральных машин в Одессе" />
      <meta property="og:locale" content="ru_UA" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={finalOgTitle} />
      <meta name="twitter:description" content={finalOgDescription} />
      <meta name="twitter:image" content={finalOgImage} />
      
      {/* Мобильная оптимизация */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Языковые теги */}
      <meta httpEquiv="content-language" content="ru" />
      <link rel="alternate" hrefLang="ru" href={currentUrl} />
      
      {/* Структурированные данные */}
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      )}
    </Head>
  )
}

export default SEOHead
