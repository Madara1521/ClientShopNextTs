import { getBestsellersOrNewShoesFx } from '@/app/api/shoes'
import BrandsSlider from '@/components/modules/DashboardPage/BrandsSlider'
import CartAlert from '@/components/modules/DashboardPage/CartAlert'
import DashboardSlider from '@/components/modules/DashboardPage/DashboardSlider'
import { $mode } from '@/context/mode'
import { $shoppingCart } from '@/context/shopping-cart'
import styles from '@/styles/dashboard/index.module.scss'
import { IShoeses } from '@/types/shoes'
import { useStore } from 'effector-react'
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

const DashboardPage = () => {
  const mode = useStore($mode)
  const shoppingCart = useStore($shoppingCart)
  const darkModeClass = mode === 'dark' ? `${styles.dark_mode}` : ''
  const [newShoes, setNewShoes] = useState<IShoeses>({} as IShoeses)
  const [bestsellers, setBestsellers] = useState<IShoeses>({} as IShoeses)
  const [spinner, setSpinner] = useState(false)
  const [showAlert, setShowAlert] = useState(!!shoppingCart.length)

  useEffect(() => {
    loadShoes()
  }, [])

  const loadShoes = async () => {
    try {
      setSpinner(true)
      const bestsellers = await getBestsellersOrNewShoesFx('/shoes/bestsellers')
      const newShoes = await getBestsellersOrNewShoesFx('/shoes/new')

      setBestsellers(bestsellers)
      setNewShoes(newShoes)
    } catch (error) {
      toast.error((error as Error).message)
    } finally {
      setSpinner(false)
    }
  }

  const closeAlert = () => setShowAlert(false)

  return (
    <section className={styles.dashboard}>
      <div className={`container ${styles.dashboard__container}`}>
        <AnimatePresence>
          {showAlert && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={`${styles.dashboard__alert} ${darkModeClass}`}
            >
              <CartAlert count={shoppingCart.length} closeAlert={closeAlert} />
            </motion.div>
          )}
        </AnimatePresence>
        <div className={styles.dashboard__brands}>
          <BrandsSlider />
        </div>
        <h2 className={`${styles.dashboard__title} ${darkModeClass}`}>
          Взуття для дорослих та підлітків
        </h2>
        <div className={`${styles.dashboard__shoes} ${darkModeClass}`}>
          <h3 className={`${styles.dashboard__shoes__title} ${darkModeClass}`}>
            Хіти продаж
          </h3>
          <DashboardSlider items={bestsellers.rows || []} spinner={spinner} />
        </div>
        <div className={`${styles.dashboard__shoes} ${darkModeClass}`}>
          <h3 className={`${styles.dashboard__shoes__title} ${darkModeClass}`}>
            Новинки
          </h3>
          <DashboardSlider items={newShoes.rows || []} spinner={spinner} />
        </div>
        <div className={styles.dashboard__about}>
          <h3
            className={`${styles.dashboard__shoes__title} ${styles.dashboard__about__title} ${darkModeClass}`}
          >
            Про компанію
          </h3>
          <p
            className={`${styles.dashboard__shoes__title} ${styles.dashboard__about__text} ${darkModeClass}`}
          >
            багатонаціональна компанія-виробник спортивного взуття, одягу та
            аксесуарів. Бренд входить до трійки лідерів України
          </p>
        </div>
      </div>
    </section>
  )
}

export default DashboardPage
