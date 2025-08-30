const SiteTagline = () => {
  return (
    <>
      <span className="site-tagline">
        <span className="site-tagline__name">&quot;Ваше название&quot;</span>
        <span>: сервис по ремонту стиральных машин</span>
        <br />
        <span>© 2025</span>
      </span>
      <style jsx>{`
        .site-tagline {
          color: rgb(56, 56, 56);
          display: block;
          width: 100%;
          text-align: center;
          font-family: Nunito;
          font-size: 18px;
          font-weight: 400;
          line-height: normal;
          text-decoration: none;
          margin: 10px 0;
          margin-left: auto;
          margin-right: auto;
          background: transparent !important;
          box-shadow: none !important;
          border: none !important;
          padding: 0 !important;
        }

        .site-tagline__name {
          color: #87ceeb;
          font-weight: 600;
          font-style: normal;
        }

        @media (max-width: 479px) {
          .site-tagline {
            max-width: 300px;
            min-width: auto;
            margin-top: 10px;
          }
        }
      `}</style>
    </>
  )
}

export default SiteTagline
