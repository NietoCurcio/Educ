import Image from 'next/image'
import Link from 'next/link'
import styles from './styles.module.scss'

export const Header = () => {
  return (
    <nav className={styles.headerContainer}>
      <Link href="">
        <a>
          <Image
            alt="Educ.io"
            src="/images/logo.svg"
            width={160}
            height={30}
            quality={100}
            priority
          />
        </a>
      </Link>
      <ul>
        <li>
          <Link href="/contribuir">
            <a>Contribuir</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
