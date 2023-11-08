import styles from '@/styles/footer/index.module.scss'
import FooterLogo from './FooterLogo'
import OnlineStoreContent from './OnlineStoreContent'
import CompanyContent from './CompanyContent'

const Footer = () => {
  console.log('')
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.footer__top}>
          <FooterLogo />
          <div className={styles.footer__inner}>
            <div className={styles.footer__top__item}>
              <h3 className={styles.footer__top__item__title}>
                Інтернет магазин
              </h3>
              <OnlineStoreContent />
            </div>
          </div>
          <div className={styles.footer__inner}>
            <div className={styles.footer__top__item}>
              <h3 className={styles.footer__top__item__title}>Компанія</h3>
              <CompanyContent />
            </div>
          </div>
          <div className={styles.footer__inner}>
            <div className={styles.footer__top__item}>
              <h3 className={styles.footer__top__item__title}>Компанія</h3>
              <ul
                className={`${styles.footer__top__item__list} ${styles.footer__top__item__contacts}`}
              >
                <li>
                  <a>
                    <span>Наша адреса</span>
                    <span>М. Київ, вул. ... д. ...</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.footer__bottom} />
      </div>
    </footer>
  )
}

export default Footer
