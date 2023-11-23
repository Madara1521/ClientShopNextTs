import { getShoesFx } from '@/app/api/shoes'
import FilterSelect from '@/components/modules/CatalogPage/FilterSelect'
import ManufacturersBlock from '@/components/modules/CatalogPage/ManufacturersBlock'
import { $mode } from '@/context/mode'
import { $shoes, setShoes } from '@/context/shoes'
import styles from '@/styles/catalog/index.module.scss'
import { useStore } from 'effector-react'
import { AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import skeletonStyles from '@/styles/skeleton/index.module.scss'
import CatalogItem from '@/components/modules/CatalogPage/CatalogItem'

const CatalogPage = () => {
  const mode = useStore($mode)
  const shoes = useStore($shoes)
  const [spinner, setSpinner] = useState(false)
  const darkModeClass = mode === 'dark' ? `${styles.dark_mode}` : ''

  useEffect(() => {
    loadShoes()
  }, [])

  const loadShoes = async () => {
    try {
      setSpinner(true)
      const data = await getShoesFx('/shoes?limit=20&offset=0')
      setShoes(data)
    } catch (error) {
      toast.error((error as Error).message)
    } finally {
      setSpinner(false)
    }
  }

  return (
    <section className={styles.catalog}>
      <div className={`container ${styles.catalog__container}`}>
        <h2 className={`${styles.catalog__title} ${darkModeClass}`}>
          Каталог товарів
        </h2>
        <div className={`${styles.catalog__top} ${darkModeClass}`}>
          <AnimatePresence>
            {false && <ManufacturersBlock title="Виробник взуття:" />}
          </AnimatePresence>
          <AnimatePresence>
            {false && <ManufacturersBlock title="Країна виробник:" />}
          </AnimatePresence>
          <div className={styles.catalog__top__inner}>
            <button
              className={`${styles.catalog__top__reset} ${darkModeClass}`}
              disabled={true}
            >
              Очистити фільтр
            </button>
            <FilterSelect />
          </div>
        </div>
        <div className={styles.catalog__bottom}>
          <div className={styles.catalog__bottom__inner}>
            <div>Filters</div>
            {spinner ? (
              <ul className={skeletonStyles.skeleton}>
                {Array.from(new Array(8)).map((_, i) => (
                  <li
                    key={i}
                    className={`${skeletonStyles.skeleton__item} ${
                      mode === 'dark' ? `${skeletonStyles.dark_mode}` : ''
                    }`}
                  >
                    <div className={skeletonStyles.skeleton__item__light} />
                  </li>
                ))}
              </ul>
            ) : (
              <ul className={styles.catalog__list}>
                {shoes.rows?.length ? (
                  shoes.rows.map((item) => (
                    <CatalogItem item={item} key={item.id} />
                  ))
                ) : (
                  <span>Список товарів порожній...</span>
                )}
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default CatalogPage
