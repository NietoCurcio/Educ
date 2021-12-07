import styles from './styles.module.scss'
import NextImage from 'next/image'

export function Showcase() {
  return (
    <div className={styles.showcase}>
      <div className={styles.bgWrap}>
        <NextImage
          alt="Mountains"
          src="/images/image-bg.jpg"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
      </div>
      <div className={styles.bgText}>
        <h1>Plataforma gratuita de ensino</h1>
        <p>Aprenda de forma interativa</p>
      </div>
    </div>
  )
}
