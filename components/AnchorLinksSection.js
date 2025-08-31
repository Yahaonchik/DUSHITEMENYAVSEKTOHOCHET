import React from 'react'

const AnchorLinksSection = ({
  title,
  items = [],
}) => {
  return (
    <section className="toc-container" aria-label={title}>
      <svg width="100%" xmlns="http://www.w3.org/2000/svg" height="17" viewBox="0 0 10 20" preserveAspectRatio="none" className="dot tr"><circle r="3.75" cx="5" cy="10" fill="#606060" vectorEffect="non-scaling-stroke"></circle></svg>
      <svg width="100%" xmlns="http://www.w3.org/2000/svg" height="17" viewBox="0 0 10 20" preserveAspectRatio="none" className="dot br"><circle r="3.75" cx="5" cy="10" fill="#606060" vectorEffect="non-scaling-stroke"></circle></svg>
      <svg width="100%" xmlns="http://www.w3.org/2000/svg" height="17" viewBox="0 0 10 20" preserveAspectRatio="none" className="dot bl"><circle r="3.75" cx="5" cy="10" fill="#606060" vectorEffect="non-scaling-stroke"></circle></svg>
      <svg width="100%" xmlns="http://www.w3.org/2000/svg" height="17" viewBox="0 0 10 20" preserveAspectRatio="none" className="dot tl"><circle r="3.75" cx="5" cy="10" fill="#606060" vectorEffect="non-scaling-stroke"></circle></svg>

      <strong className="toc-title"><span>{title}</span><br /></strong>
      <ul className="toc-list">
        {items.map((it, idx) => (
          <li className="toc-item" key={idx}>
            <img alt={it.alt || 'item'} src={it.icon || '/external/vector8669-r6fr.svg'} className="toc-icon" />
            <a href={it.href} className="toc-link">{it.text}</a>
          </li>
        ))}
      </ul>

      <svg width="330" xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 330 20" preserveAspectRatio="none" className="dash top"><path d="M0 10 H330" fill="none" stroke="#000000" strokeWidth="0.5" vectorEffect="non-scaling-stroke" strokeDasharray="11 11"></path></svg>
      <svg width="330" xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 330 20" preserveAspectRatio="none" className="dash bottom"><path d="M0 10 H330" fill="none" stroke="#000000" strokeWidth="0.5" vectorEffect="non-scaling-stroke" strokeDasharray="11 11"></path></svg>
      <svg width="20" xmlns="http://www.w3.org/2000/svg" height="110" viewBox="0 0 20 110" preserveAspectRatio="none" className="dash right"><path d="M10 0 V110" fill="none" stroke="#000000" strokeWidth="0.5" vectorEffect="non-scaling-stroke" strokeDasharray="11 11"></path></svg>
      <svg width="20" xmlns="http://www.w3.org/2000/svg" height="110" viewBox="0 0 20 110" preserveAspectRatio="none" className="dash left"><path d="M10 0 V110" fill="none" stroke="#000000" strokeWidth="0.5" vectorEffect="non-scaling-stroke" strokeDasharray="11 11"></path></svg>

      <style jsx>{`
        .toc-container { position: relative; display: block; padding: var(--dl-layout-space-unit); background-color: #ffffff; border-radius: var(--dl-layout-radius-imageradius); box-shadow: 0 0 14px 2px #e7e7e7; margin: var(--dl-layout-space-unit) 0; }
        .dot { position: absolute; width: 11px; height: auto; }
        .tr { top: -12px; right: -10px; }
        .br { right: -10px; bottom: -12px; }
        .bl { left: -10px; bottom: -12px; }
        .tl { top: -12px; left: -10px; }
        .dash { position: absolute; }
        .top { top: -10px; left: 0; width: 100%; height: 5px; }
        .bottom { bottom: -10px; left: 0; width: 100%; height: 5px; }
        .right { top: 0; right: -10px; width: 5px; height: 100%; }
        .left { top: 0; left: -10px; width: 5px; height: 100%; }
        .toc-title { color: var(--dl-color-theme-neutral-dark); font-size: 16px; font-family: 'Noto Serif SC'; font-weight: 400; display: inline-block; }
        .toc-list { list-style: none; padding: 0; margin: var(--dl-layout-space-halfunit) 0 0; display: grid; grid-template-columns: 1fr; gap: 6px; }
        .toc-item { display: flex; align-items: center; gap: 8px; }
        .toc-icon { width: 16px; height: 16px; object-fit: contain; }
        .toc-link { color: #000; text-decoration: none; font-family: 'Nunito'; font-size: 15px; }
        .toc-link:hover { text-decoration: underline; }
        @media (max-width: 479px) { .toc-title { font-size: 15px; } .toc-link { font-size: 14px; } }
      `}</style>
    </section>
  )
}

export default AnchorLinksSection
