import { useEffect } from 'react'
import { PHONE_TEL, PHONE_DISPLAY } from '../utils/contacts'

const PhoneModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = 'unset' }
  }, [isOpen])

  if (!isOpen) return null

  const phoneDigits = PHONE_TEL.replace(/\D/g, '')
  const telHref = `tel:${PHONE_TEL}`
  const waHref = `https://wa.me/${phoneDigits}`
  const tgHref = `https://t.me/+${phoneDigits}`
  const viberHref = `viber://chat?number=${phoneDigits}`

  const ActionCircle = ({ href, label, children }) => (
    <a href={href} className="pm-circle" aria-label={label}>
      <span className="pm-circle-icon">{children}</span>
      <span className="pm-circle-label">{label}</span>
    </a>
  )

  return (
    <>
      <div className="pm-overlay" onClick={onClose}>
        <div className="pm-card" onClick={(e) => e.stopPropagation()}>
          <button className="pm-close" onClick={onClose} aria-label="Закрыть">×</button>

          <div className="pm-hero">
            <div className="pm-centered">
              <div className="pm-heading">Контакты</div>
              <a href={telHref} className="pm-number" aria-label="Позвонить на первый номер">{PHONE_DISPLAY}</a>
              <a href={telHref} className="pm-number" aria-label="Позвонить на второй номер">{PHONE_DISPLAY}</a>
            </div>
          </div>

          <div className="pm-footer">
            <a href={viberHref} className="pm-link" aria-label="Viber">
              <span className="pm-icon viber" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.028-.966-.272-.099-.47-.148-.669.15-.198.297-.767.966-.94 1.164-.173.199-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.787-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.149-.173.198-.297.297-.495.099-.198.05-.372-.025-.521-.074-.149-.669-1.614-.916-2.212-.242-.58-.487-.501-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.876 1.213 3.074.149.198 2.095 3.2 5.074 4.487.709.306 1.262.489 1.693.626.711.226 1.358.194 1.87.118.571-.085 1.758-.718 2.006-1.411.248-.694.248-1.289.173-1.411-.074-.124-.272-.198-.57-.347z" fill="currentColor"/>
                  <path d="M20.001 3.999C18.365 2.363 16.269 1.5 13.999 1.5 7.648 1.5 2.5 6.648 2.5 13c0 2.27.863 4.366 2.499 6.002 1.636 1.636 3.732 2.499 6.002 2.499 6.352 0 11.5-5.148 11.5-11.5 0-2.27-.863-4.366-2.499-6.002zM14 20.5c-4.135 0-7.5-3.365-7.5-7.5S9.865 5.5 14 5.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5z" fill="currentColor"/>
                </svg>
              </span>
              <span className="pm-label">Viber</span>
            </a>
            <a href={tgHref} className="pm-link" aria-label="Telegram">
              <span className="pm-icon telegram" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.036 15.803l-.214 3.017c.306 0 .438-.132.596-.29l1.429-1.38 2.963 2.176c.543.298.93.141 1.079-.504l1.954-9.188c.179-.83-.299-1.154-.823-.952L5.24 12.24c-.793.31-.779.757-.135.955l3.079.961 7.155-4.515c.337-.204.644-.091.392.113" fill="currentColor"/>
                </svg>
              </span>
              <span className="pm-label">Telegram</span>
            </a>
            <a href={waHref} className="pm-link" aria-label="WhatsApp">
              <span className="pm-icon whatsapp" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.52 3.48A11.93 11.93 0 0012 0C5.373 0 0 5.373 0 12c0 2.112.552 4.09 1.516 5.8L0 24l6.356-1.66A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12 0-3.19-1.244-6.188-3.48-8.52zM12 21.75c-1.98 0-3.82-.576-5.356-1.566l-.383-.244-3.77.985.999-3.674-.25-.377A9.73 9.73 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75zm5.324-6.16c-.293-.147-1.732-.854-1.999-.95-.267-.097-.46-.146-.651.149-.192.296-.744.95-.912 1.146-.167.196-.335.219-.621.073-.293-.147-1.235-.454-2.35-1.44-.87-.768-1.456-1.719-1.626-2.008-.167-.296-.018-.448.125-.593.128-.128.293-.335.442-.5.149-.165.198-.283.293-.479.096-.196.048-.356-.024-.5-.073-.146-.629-1.518-.861-2.08-.226-.543-.457-.47-.629-.479-.165-.008-.349-.01-.534-.01-.186 0-.488.073-.744.356-.257.283-.975.967-.975 2.36s.998 2.734 1.138 2.923c.141.196 2.003 3.06 4.858 4.289.68.293 1.209.467 1.627.598.684.223 1.305.19 1.797.116.549-.082 1.688-.689 1.927-1.353.239-.664.239-1.237.167-1.355-.073-.116-.257-.19-.54-.335z" fill="currentColor"/>
                </svg>
              </span>
              <span className="pm-label">WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .pm-overlay { position: fixed; inset: 0; background: rgba(0,0,0,.55); display: flex; align-items: center; justify-content: center; z-index: 1200; padding: 16px; }
        .pm-card { position: relative; width: 523px; height: 350px; background: #fff url('https://cdn.builder.io/api/v1/image/assets%2Fd9d23d328bd540588ac00b8010b1957e%2F50a4b1048cd5476baa0df2f50f7ebcac?format=webp&width=800') center/cover no-repeat; border-radius: 16px; box-shadow: 0 10px 30px rgba(0,0,0,.15); overflow: hidden; }
        .pm-close { position: absolute; top: 10px; right: 10px; background: transparent; border: 0; font-size: 24px; width: 36px; height: 36px; border-radius: 8px; cursor: pointer; z-index: 2; color: #232020; }
        .pm-hero { background: transparent; padding: 0; width: 100%; height: 100%; text-align: center; color: #fff; position: relative; }
        .pm-hero-title { font-family: 'Noto Serif SC'; font-size: 18px; letter-spacing: 0.5px; margin-bottom: 6px; }
        .pm-phones { display: flex; flex-direction: column; gap: 4px; align-items: center; margin-bottom: 14px; }
        .pm-phone { font-family: 'Roboto'; font-weight: 700; font-size: 24px; letter-spacing: 1.2px; }
        .pm-call-button { display: inline-flex; align-items: center; gap: 10px; background: #ffffff; color: #232020; text-decoration: none; padding: 10px 14px; border-radius: 999px; font-family: 'Roboto'; font-weight: 500; font-size: 14px; box-shadow: 0 4px 12px rgba(0,0,0,.15); transition: transform .1s ease, box-shadow .2s ease; }
        .pm-call-button:hover { box-shadow: 0 6px 16px rgba(0,0,0,.18); }
        .pm-call-button:active { transform: translateY(1px); }
        .pm-call-icon { display: inline-flex; align-items: center; justify-content: center; width: 28px; height: 28px; border-radius: 50%; background: #87ceeb; color: #fff; }
        .pm-footer { display: none; }
        .pm-link { display: inline-flex; align-items: center; gap: 8px; text-decoration: none; color: #202020; font-family: 'Roboto'; font-size: 15px; }
        .pm-icon { width: 36px; height: 36px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; color: #fff; box-shadow: 0 2px 6px rgba(0,0,0,.12); }
        .pm-icon.viber { background: #7F4DA0; }
        .pm-icon.telegram { background: #2AABEE; }
        .pm-icon.whatsapp { background: #25D366; }
        .pm-label { line-height: 1; }
        .pm-centered { height: 100%; display: flex; flex-direction: column; align-items: center; padding-top: 60px; }
        .pm-heading { font-family: 'Noto Serif SC'; font-size: 20px; margin-bottom: 30px; letter-spacing: .5px; }
        .pm-number { display: block; color: #fff; text-decoration: none; font-family: 'Roboto'; font-weight: 700; font-size: 24px; letter-spacing: 1.2px; }
        .pm-number + .pm-number { margin-top: 20px; }
        @media (max-width: 560px) { .pm-card { width: 90vw; height: calc(90vw * 0.669); border-radius: 14px; } .pm-heading { font-size: 18px; } .pm-number { font-size: 20px; } }
        @media (max-width: 479px) { .pm-card { border-radius: 14px; } .pm-footer { padding: 12px; } .pm-phone { font-size: 20px; } }
      `}</style>
    </>
  )
}

export default PhoneModal
