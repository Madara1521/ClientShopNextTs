import styles from '@/styles/auth/index.module.scss'
import { MutableRefObject, useRef } from 'react'

const AuthPage = () => {
  const switchCtn = useRef() as MutableRefObject<HTMLDivElement>
  const switchC1 = useRef() as MutableRefObject<HTMLDivElement>
  const switchC2 = useRef() as MutableRefObject<HTMLDivElement>
  const switchCircle1 = useRef() as MutableRefObject<HTMLDivElement>
  const switchCircle2 = useRef() as MutableRefObject<HTMLDivElement>
  const switchBtn = useRef() as MutableRefObject<HTMLDivElement>
  const aContainer = useRef() as MutableRefObject<HTMLDivElement>
  const bContainer = useRef() as MutableRefObject<HTMLDivElement>

  const switchForm = () => {
    switchCtn.current.classList.add(styles.is_gx)
    setTimeout(() => switchCtn.current.classList.remove(styles.is_gx), 1500)

    switchCtn.current.classList.toggle(styles.is_txr)
    switchCircle1.current.classList.toggle(styles.is_txr)
    switchCircle2.current.classList.toggle(styles.is_txr)

    switchC1.current.classList.toggle(styles.is_hidden)
    switchC2.current.classList.toggle(styles.is_hidden)
    aContainer.current.classList.toggle(styles.is_txl)
    bContainer.current.classList.toggle(styles.is_txl)
    bContainer.current.classList.toggle(styles.is_z200)
  }

  return (
    <div className={styles.main}>
      <div
        className={`${styles.container} ${styles.a_container}`}
        id="a-container"
        ref={aContainer}
      >
        <form className={styles.form}>
          <h2 className={`${styles.form__title} ${styles.title}`}>
            Create Account
          </h2>
          <input
            className={styles.form__input}
            type="text"
            placeholder="Name"
          />
          <input
            className={styles.form__input}
            type="text"
            placeholder="Email"
          />
          <input
            className={styles.form__input}
            type="password"
            placeholder="Password"
          />
          <button
            className={`${styles.form__button} ${styles.button} ${styles.submit}`}
          >
            SIGN UP
          </button>
        </form>
      </div>
      <div
        className={`${styles.container} ${styles.b_container}`}
        id="b-container"
        ref={bContainer}
      >
        <form className={styles.form}>
          <h2 className={`${styles.form__title} ${styles.title}`}>
            Sign in to Website
          </h2>
          <input
            className={styles.form__input}
            type="text"
            placeholder="Email"
          />
          <input
            className={styles.form__input}
            type="password"
            placeholder="Password"
          />
          <button
            className={`${styles.form__button} ${styles.button} ${styles.submit}`}
          >
            SIGN IN
          </button>
        </form>
      </div>
      <div className={styles.switch} id="switch-cnt" ref={switchCtn}>
        <div className={styles.switch__circle} ref={switchCircle1} />
        <div
          className={`${styles.switch__circle} ${styles.switch__circle__t}`}
          ref={switchCircle2}
        />
        <div className={styles.switch__container} id="switch-c1" ref={switchC1}>
          <h2 className={`${styles.switch__title} ${styles.title}`}>
            Welcome Back !
          </h2>
          <p className={`${styles.switch__description} ${styles.description}`}>
            To keep connected with us please login with your personal info
          </p>
          <button
            onClick={switchForm}
            className={`${styles.switch__button} ${styles.button} ${styles.switch__btn}`}
          >
            SIGN IN
          </button>
        </div>
        <div
          className={`${styles.switch__container} ${styles.is_hidden}`}
          id="switch-c2"
          ref={switchC2}
        >
          <h2 className={`${styles.switch__title} ${styles.title}`}>
            Hello Friend !
          </h2>
          <p className={`${styles.switch__description} ${styles.description}`}>
            Enter your personal details and start journey with us
          </p>
          <button
            onClick={switchForm}
            className={`${styles.switch__button} ${styles.button} ${styles.switch__btn}`}
          >
            SIGN UP
          </button>
        </div>
      </div>
    </div>
  )
}

export default AuthPage
