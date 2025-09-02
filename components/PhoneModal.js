import { useEffect } from 'react'
import { PHONE_TEL, PHONE_DISPLAY, PHONE_TEL_2, PHONE_DISPLAY_2 } from '../utils/contacts'

const PhoneModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = 'unset' }
  }, [isOpen])

  if (!isOpen) return null

  const phoneDigits = PHONE_TEL.replace(/\D/g, '')
  const phoneDigits2 = PHONE_TEL_2.replace(/\D/g, '')
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
            <a href={`tel:+${phoneDigits}`} className="pm-phone">{PHONE_DISPLAY}</a>
            <a href={`tel:+${phoneDigits2}`} className="pm-phone">{PHONE_DISPLAY_2}</a>
            <div className="pm-schedule"><span className="pm-schedule-bold">Пн–Вс:</span> <span className="pm-schedule-normal">9:00–21:00</span></div>
            <div className="pm-arcs variant1">
              <div className="wave-left">
                <span className="wave-arc"></span>
                <span className="wave-arc"></span>
                <span className="wave-arc"></span>
                <span className="wave-arc"></span>
              </div>
              <div className="wave-right">
                <span className="wave-arc"></span>
                <span className="wave-arc"></span>
                <span className="wave-arc"></span>
                <span className="wave-arc"></span>
              </div>
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
        .pm-icons { position: absolute; left: 0; right: 0; bottom: 0; height: 118px; }
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
        .pm-center { position: absolute; inset: 0 0 110px 0; display: flex; flex-direction: column; align-items: center; justify-content: center; color: #FFFFFF; text-align: center; } .pm-phone { user-select: text; -webkit-user-select: text; }
        .pm-schedule { margin-top: 12px; font-family: 'Noto Serif SC'; font-weight: 300; font-size: 14px; color: #000000; } .pm-schedule-bold { font-weight: 700; } .pm-schedule-normal { font-weight: 300; }
        .pm-title { font-family: 'Noto Serif SC'; font-weight: 500; font-size: 24px; margin-bottom: 12px; letter-spacing: 0; color: #000000; text-shadow: none; }
        .pm-phone { display: block; color: #FFFFFF; text-decoration: none; font-family: 'Noto Serif SC'; font-weight: 700; font-size: 26px; line-height: 1.5; letter-spacing: 0; text-shadow: none; }
        .pm-waves { position: absolute; top: 50%; width: 56px; height: 140px; transform: translateY(-50%); pointer-events: none; contain: paint; }
        .pm-waves.left { left: 40px; }
        .pm-waves.right { right: 40px; } .pm-arcs { position: absolute; top: 34px; left: 0; right: 0; height: 140px; pointer-events: none; } .pm-arcs .wave-left, .pm-arcs .wave-right { position: absolute; top: 0; width: 56px; height: 140px; } .pm-arcs .wave-left { left: 95px; } .pm-arcs .wave-right { right: 95px; } .variant1 .wave-arc { position: absolute; border: 2px solid #ffffff; border-radius: 50%; opacity: 0; border-color: #ffffff; will-change: transform, opacity; pointer-events: none; } .variant1 .wave-left .wave-arc { border-right: transparent; border-bottom: transparent; border-top: transparent; top: 50%; transform: translateY(-50%); animation: arc1-left 2s infinite ease-out; } .variant1 .wave-right .wave-arc { border-left: transparent; border-bottom: transparent; border-top: transparent; top: 50%; transform: translateY(-50%); animation: arc1-right 2s infinite ease-out; } .variant1 .wave-arc:nth-child(1) { animation-delay: 0s; } .variant1 .wave-arc:nth-child(2) { animation-delay: 0.4s; } .variant1 .wave-arc:nth-child(3) { animation-delay: 0.8s; } .variant1 .wave-arc:nth-child(4) { animation-delay: 1.2s; } @keyframes arc1-left { 0% { width: 30px; height: 30px; right: 0; opacity: 1; } 100% { width: 140px; height: 140px; right: -75px; opacity: 0; } } @keyframes arc1-right { 0% { width: 30px; height: 30px; left: 0; opacity: 1; } 100% { width: 140px; height: 140px; left: -75px; opacity: 0; } }
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
                @media (max-width: 560px) { .pm-card { width: 300px; min-width: 280px; height: 283px; border-radius: 14px; background: transparent url('/Subtractmini.svg') top center/contain no-repeat; } .pm-center { inset: 29px 0 100px 0; left: 0; right: 0; transform: none; text-align: center; gap: 5px; } .pm-title { font-size: 20px; font-weight: 500; } .pm-phone { font-size: 23px; font-weight: 700; white-space: nowrap; } .pm-schedule { font-size: 14px; } .pm-item.viber, .pm-item.telegram, .pm-item.whatsapp { bottom: 0; } .pm-item.viber { left: 21%; } .pm-item.telegram { left: 50%; } .pm-item.whatsapp { left: 79%; margin-left: -1px; } .pm-icon-link { width: 42px; height: 42px; bottom: 29px; } .pm-caption { font-size: 11px; bottom: 6px; text-align: center; } .pm-waves.left { left: 6px; } .pm-waves.right { right: 6px; } .pm-arcs { top: 35px; height: 92px; } .pm-arcs .wave-left, .pm-arcs .wave-right { width: 40px; height: 92px; } .pm-arcs .wave-left { left: 14px; } .pm-arcs .wave-right { right: 14px; } .variant1 .wave-left .wave-arc { animation: arc1-left-m 1.8s infinite ease-out; } .variant1 .wave-right .wave-arc { animation: arc1-right-m 1.8s infinite ease-out; } .pm-arcs .wave-left .wave-arc:nth-child(4), .pm-arcs .wave-right .wave-arc:nth-child(4) { display: none; } }
        @keyframes arc1-left-m { 0% { width: 20px; height: 20px; right: 8px; opacity: 1; } 100% { width: 90px; height: 90px; right: -24px; opacity: 0; } }
        @keyframes arc1-right-m { 0% { width: 20px; height: 20px; left: 8px; opacity: 1; } 100% { width: 90px; height: 90px; left: -24px; opacity: 0; } }
              `}</style>
    </>
  )
}

export default PhoneModal
