import { useEffect } from 'react'
import { PHONE_TEL, PHONE_DISPLAY } from '../utils/contacts'

const PhoneModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = 'unset' }
  }, [isOpen])

  if (!isOpen) return null

  const phoneDigits = PHONE_TEL.replace(/\D/g, '')
  const waHref = `https://wa.me/${phoneDigits}`
  const tgHref = `https://t.me/+${phoneDigits}`
  const viberHref = `viber://chat?number=${phoneDigits}`

  return (
    <>
      <div className="pm-overlay" onClick={onClose}>
        <div className="pm-card" onClick={(e) => e.stopPropagation()}>
          <button className="pm-close" onClick={onClose} aria-label="Закрыть">×</button>

          <div className="pm-center">
            <div className="pm-title">Контакты</div>
            <a href={`tel:${PHONE_TEL}`} className="pm-phone">{PHONE_DISPLAY}</a>
            <a href={`tel:${PHONE_TEL}`} className="pm-phone">{PHONE_DISPLAY}</a>
            <div className="pm-schedule">Пн–Вс: 9:00–21:00</div>
            <div className="pm-waves left">
              <svg className="pm-waves-svg" viewBox="0 0 56 140" aria-hidden="true" focusable="false">
                <defs>
                  <linearGradient id="wgL" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
                    <stop offset="100%" stopColor="#ffffff" stopOpacity="0.6" />
                  </linearGradient>
                </defs>
                <path className="wavePath p1" stroke="url(#wgL)" d="M46 10 Q 12 70 46 130" />
                <path className="wavePath p2" stroke="url(#wgL)" d="M42 8 Q 10 70 42 132" />
                <path className="wavePath p3" stroke="url(#wgL)" d="M38 6 Q 8 70 38 134" />
              </svg>
            </div>
            <div className="pm-waves right">
              <svg className="pm-waves-svg" viewBox="0 0 56 140" aria-hidden="true" focusable="false">
                <defs>
                  <linearGradient id="wgR" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
                    <stop offset="100%" stopColor="#ffffff" stopOpacity="0.6" />
                  </linearGradient>
                </defs>
                <path className="wavePath p1" stroke="url(#wgR)" d="M46 10 Q 12 70 46 130" />
                <path className="wavePath p2" stroke="url(#wgR)" d="M42 8 Q 10 70 42 132" />
                <path className="wavePath p3" stroke="url(#wgR)" d="M38 6 Q 8 70 38 134" />
              </svg>
            </div>
          </div>

          <div className="pm-icons">
            <div className="pm-item viber">
              <a href={viberHref} className="pm-icon-link viber" aria-label="Viber">
                <img src="/viber.svg" alt="" className="pm-icon-img" />
              </a>
              <span className="pm-caption">Viber</span>
            </div>
            <div className="pm-item telegram">
              <a href={tgHref} className="pm-icon-link telegram" aria-label="Telegram">
                <img src="/telegram.svg" alt="" className="pm-icon-img" />
              </a>
              <span className="pm-caption">Telegram</span>
            </div>
            <div className="pm-item whatsapp">
              <a href={waHref} className="pm-icon-link whatsapp" aria-label="WhatsApp">
                <img src="/whatsapp.svg" alt="" className="pm-icon-img" />
              </a>
              <span className="pm-caption">WhatsApp</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .pm-overlay { position: fixed; inset: 0; background: rgba(0,0,0,.8); display: flex; align-items: center; justify-content: center; z-index: 1200; padding: 16px; }
        .pm-card { position: relative; width: 537px; height: 305px; background: transparent url('/Subtract.svg') top center/contain no-repeat; border-radius: 16px; box-shadow: 0 10px 30px rgba(0,0,0,.15); overflow: hidden; }
        .pm-close { position: absolute; top: 10px; right: 10px; background: transparent; border: 0; font-size: 24px; width: 36px; height: 36px; border-radius: 8px; cursor: pointer; z-index: 2; color: #232020; }
        .pm-icons { position: absolute; inset: 0; }
        .pm-item { position: absolute; transform: translateX(-50%); }
        .pm-item.viber { left: 25.5%; bottom: 0; }
        .pm-item.telegram { left: 50.1%; bottom: 0; }
        .pm-item.whatsapp { left: 74.7%; bottom: 0; }
        .pm-icon-link { position: absolute; left: 50%; bottom: 48px; width: 62px; height: 62px; display: inline-flex; align-items: center; justify-content: center; background: transparent; box-shadow: none; border-radius: 0; transition: transform .25s cubic-bezier(.2,.8,.2,1); transform: translateX(-50%); transform-origin: 50% 50%; }
        .pm-item.viber:hover .pm-icon-link { transform: translateX(-50%) rotate(-14deg); }
        .pm-item.telegram:hover .pm-icon-link { transform: translateX(-50%) rotate(10deg); }
        .pm-item.whatsapp:hover .pm-icon-link { transform: translateX(-50%) rotate(14deg); }
        .pm-icon-img { width: 100%; height: 100%; display: block; }
        .pm-caption { position: absolute; left: 50%; bottom: 8px; transform: translateX(-50%); font-family: 'Roboto'; font-size: 14px; color: #fff; line-height: 1; text-shadow: 0 1px 2px rgba(0,0,0,.35); transition: color .2s ease, text-shadow .2s ease; }
        .pm-item:hover .pm-caption { color: #4EC8ED; text-shadow: 0 0 8px rgba(78,200,237,.8), 0 1px 2px rgba(0,0,0,.35); }
        .pm-center { position: absolute; inset: 0 0 110px 0; display: flex; flex-direction: column; align-items: center; justify-content: center; color: #fff; text-align: center; }
        .pm-schedule { margin-top: 8px; font-family: 'Noto Serif SC'; font-weight: 300; font-size: 16px; color: #FFFFFF; }
        .pm-title { font-family: 'Noto Serif SC'; font-weight: 600; font-size: 24px; margin-bottom: 12px; letter-spacing: 0; color: #FFFFFF; text-shadow: none; }
        .pm-phone { display: block; color: #FFFFFF; text-decoration: none; font-family: 'Noto Serif SC'; font-weight: 700; font-size: 26px; line-height: 1.5; letter-spacing: 0; text-shadow: none; }
        .pm-waves { position: absolute; top: 50%; width: 56px; height: 140px; transform: translateY(-50%); pointer-events: none; contain: paint; }
        .pm-waves.left { left: 40px; }
        .pm-waves.right { right: 40px; }
        .pm-waves-svg { width: 56px; height: 140px; display: block; }
        .wavePath { fill: none; stroke: #ffffff; stroke-width: 2.6; stroke-linecap: round; stroke-linejoin: round; filter: drop-shadow(0 0 6px rgba(255,255,255,.45)); stroke-dasharray: 6 18; stroke-dashoffset: 0; opacity: .9; animation: dashMove 1.6s linear infinite, shimmer 2.4s ease-in-out infinite; }
        .wavePath.p2 { stroke-dasharray: 5 16; animation-duration: 1.9s, 2.8s; }
        .wavePath.p3 { stroke-dasharray: 4 14; animation-duration: 2.2s, 3.2s; }
        .pm-waves.right { transform: translateY(-50%) scaleX(-1); transform-origin: center; }
        .pm-waves.left .wavePath { animation-delay: 0s, .2s; }
        .pm-waves.right .wavePath { animation-delay: .8s, .3s; }
        @keyframes dashMove { to { stroke-dashoffset: -48; } }
        @keyframes shimmer { 0%,100% { stroke-width: 2.4; opacity: .75; } 50% { stroke-width: 3.4; opacity: 1; } }
        @media (prefers-reduced-motion: reduce) { .wavePath { animation: none; opacity: .35; } }
        @media (prefers-reduced-motion: reduce) { .pm-wave { animation: none; opacity: .35; } }
                @media (max-width: 560px) { .pm-card { width: 280px; height: 159px; border-radius: 14px; } .pm-title { font-size: 20px; font-weight: 600; } .pm-phone { font-size: 22px; font-weight: 700; } .pm-schedule { font-size: 12px; } .pm-icon-link { width: 44px; height: 44px; } .pm-item.viber, .pm-item.telegram, .pm-item.whatsapp { bottom: 0; } .pm-icon-link { bottom: 32px; } .pm-caption { font-size: 12px; bottom: 6px; } }
              `}</style>
    </>
  )
}

export default PhoneModal
