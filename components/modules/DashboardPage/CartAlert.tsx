import { formatPrice } from '@/utils/common'
import { ICartAlertProps } from '../../../types/dashboard'
import Link from 'next/link'
import { useStore } from 'effector-react'
import { $mode } from '@/context/mode'
import styles from '@/styles/dashboard/index.module.scss'

const CartAlert = ({ count, closeAlert }: ICartAlertProps) => {
  const mode = useStore($mode)
  const darkModeClass = mode === 'dark' ? `${styles.dark_mode}` : ''

  return (
    <>
      <div className={`${styles.dashboard__alert__left} ${darkModeClass}`}>
        <span>У кошику {count} товару</span>
        <span>На суму {formatPrice(0)} грн</span>
      </div>
      <div className={styles.dashboard__alert__right}>
        <Link href="/order" legacyBehavior passHref>
          <a className={styles.dashboard__alert__btn_cart}>Перейти до кошика</a>
        </Link>
        <Link href="/order" legacyBehavior passHref>
          <a className={styles.dashboard__alert__btn_order}>
            Оформити замовлення
          </a>
        </Link>
      </div>
      <button
        className={styles.dashboard__alert__btn_close}
        onClick={closeAlert}
      />
    </>
  )
}

export default CartAlert
