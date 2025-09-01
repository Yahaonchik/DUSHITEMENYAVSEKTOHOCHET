import { useEffect, useState } from 'react'
import { PHONE_TEL, PHONE_DISPLAY } from '../utils/contacts'

const PhoneModal = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = 'unset' }
  }, [isOpen])

  if (!isOpen) return null

  const telHref = `tel:${PHONE_TEL}`
  const waHref = `https://wa.me/${PHONE_TEL.replace(/\D/g, '')}`
  const tgHref = `https://t.me/+${PHONE_TEL.replace(/\D/g, '')}`
  const vcfHref = '/contact.vcf'

  const copyNumber = async () => {
    try {
      await navigator.clipboard.writeText(PHONE_DISPLAY)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {}
  }

  const Action = ({ href, label, onClick }) => (
    href ? (
      <a href={href} className="pm-action" onClick={onClick}>{label}</a>
    ) : (
      <button className="pm-action" onClick={onClick}>{label}</button>
    )
  )

  return (
    <>
      <div className="pm-overlay" onClick={onClose}>
        <div className="pm-content" onClick={(e) => e.stopPropagation()}>
          <div className="pm-header">
            <div className="pm-title">Связаться с нами</div>
            <button className="pm-close" onClick={onClose}>×</button>
          </div>
          <div className="pm-subtitle">{PHONE_DISPLAY}</div>
          <div className="pm-actions">
            <Action href={telHref} label="Позвонить" />
            <Action href={waHref} label="WhatsApp" />
            <Action href={tgHref} label="Telegram" />
            <Action onClick={copyNumber} label={copied ? 'Скопировано' : 'Скопировать номер'} />
            <Action href={vcfHref} label="Добавить контакт (.vcf)" />
          </div>
        </div>
      </div>

      <style jsx>{`
        .pm-overlay { position: fixed; inset: 0; background: rgba(0,0,0,.5); display: flex; align-items: center; justify-content: center; z-index: 1200; padding: 16px; }
        .pm-content { width: 100%; max-width: 420px; background: #fff; border-radius: 12px; box-shadow: 0 10px 30px rgba(0,0,0,.15); overflow: hidden; }
        .pm-header { display: flex; align-items: center; justify-content: space-between; padding: 14px 16px; border-bottom: 1px solid #eee; }
        .pm-title { font-family: 'Nunito'; font-size: 18px; font-weight: 700; color: #222; }
        .pm-close { background: transparent; border: 0; font-size: 24px; width: 36px; height: 36px; border-radius: 8px; cursor: pointer; }
        .pm-subtitle { padding: 12px 16px 0; font-family: 'Nunito'; color: #444; text-align: center; }
        .pm-actions { display: grid; grid-template-columns: 1fr; gap: 10px; padding: 16px; }
        .pm-action { display: block; text-align: center; padding: 12px 14px; border-radius: 8px; border: 1px solid #e6e6e6; background: #fafafa; color: #202020; text-decoration: none; font-family: 'Roboto'; font-size: 15px; cursor: pointer; transition: background .2s ease, transform .1s ease; }
        .pm-action:hover { background: #f0f0f0; }
        .pm-action:active { transform: translateY(1px); }
        @media (max-width: 479px) { .pm-content { border-radius: 10px; } }
      `}</style>
    </>
  )
}

export default PhoneModal
