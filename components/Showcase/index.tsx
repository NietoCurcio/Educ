import styles from './styles.module.scss'
import NextImage from 'next/image'
import { Button } from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'

export function Showcase() {
  return (
    <div className={styles.showcase}>
      <NextImage
        className={styles.showcaseImg}
        alt="Mountains"
        src="/images/image-bg.jpg"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority
      />
      <div className={styles.bgText}>
        <h1>Plataforma gratuita de ensino</h1>
        <p>Aprenda de forma interativa</p>
        <Button
          colorScheme="blue"
          size="lg"
          width="16rem"
          cursor="pointer"
          mt="4"
          rightIcon={<ArrowForwardIcon />}
        >
          Acessar plataforma
        </Button>
      </div>
    </div>
  )
}
