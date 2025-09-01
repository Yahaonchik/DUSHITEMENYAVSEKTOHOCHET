import { useEffect } from 'react'

const PhoneModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = 'unset' }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <>
      <div className="pm-overlay" onClick={onClose}>
        <div className="pm-card" onClick={(e) => e.stopPropagation()}>
          <button className="pm-close" onClick={onClose} aria-label="Закрыть">×</button>

          <img src="/whatsapp.svg" alt="WhatsApp" className="pm-floating-icon pm-icon-whatsapp" />
          <img src="/telegram.svg" alt="Telegram" className="pm-floating-icon pm-icon-telegram" />
          <img src="/viber.svg" alt="Viber" className="pm-floating-icon pm-icon-viber" />
        </div>
      </div>

      <style jsx>{`
        .pm-overlay { position: fixed; inset: 0; background: rgba(0,0,0,.85); display: flex; align-items: center; justify-content: center; z-index: 1200; padding: 16px; }
        .pm-card { position: relative; width: 523px; height: 254px; background: transparent url('/Subtract.svg') center top/contain no-repeat; border-radius: 0; box-shadow: none; overflow: visible; }
        .pm-close { position: absolute; top: 10px; right: 10px; background: transparent; border: 0; font-size: 24px; width: 36px; height: 36px; border-radius: 8px; cursor: pointer; z-index: 2; color: #232020; }
        .pm-floating-icon { position: absolute; width: 60px; height: 60px; opacity: 1; pointer-events: none; }
        .pm-icon-whatsapp { bottom: 42px; left: 18%; transform: translateX(-50%) translate(45px, 27px); }
        .pm-icon-telegram { bottom: 50px; left: 50%; transform: translateX(-50%) translate(-2px, 55px); }
        .pm-icon-viber { bottom: 42px; left: 82%; transform: translateX(-50%) translate(-55px, 25px); }
        @media (max-width: 560px) { .pm-card { width: 90vw; height: calc(90vw * 0.486); border-radius: 0; box-shadow: none; } .pm-floating-icon { width: 48px; height: 48px; } .pm-icon-whatsapp { bottom: 7.5vw; left: 18%; transform: translateX(-50%) translate(45px, 27px); } .pm-icon-telegram { bottom: 9vw; left: 50%; transform: translateX(-50%) translate(-2px, 55px); } .pm-icon-viber { bottom: 7.5vw; left: 82%; transform: translateX(-50%) translate(-55px, 25px); } }
        @media (max-width: 479px) { .pm-card { border-radius: 14px; } }
      `}</style>
    </>
  )
}

export default PhoneModal
