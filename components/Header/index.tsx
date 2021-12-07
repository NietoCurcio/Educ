import { Image } from '@chakra-ui/react'
import Link from 'next/link'
import styles from './styles.module.scss'

export const Header = () => {
  return (
    <nav className={styles.headerContainer}>
      <Link href="/">
        <a>
          <Image alt="Educ.io" src="/images/logo.svg" />
        </a>
      </Link>
      <ul>
        <li>
          <Link href="/">
            <a>Contribuir</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
