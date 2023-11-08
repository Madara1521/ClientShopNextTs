/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import styles from '@/styles/footer/index.module.scss'

const FooterLogo = () => (
  <div className={styles.footer__top__item}>
    <Link href="/dashboard" passHref legacyBehavior>
      <a className={styles.footer__top__item_logo}>
        <img src="/img/logo.svg" alt="logo" />
        <span className={styles.footer__top__item__text}>Продаж взуття</span>
      </a>
    </Link>
  </div>
)

export default FooterLogo
