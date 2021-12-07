import { Box, Badge, Image, Flex, Text } from '@chakra-ui/react'
import styles from './styles.module.scss'

interface CardProps {
  description: string
  image: string
  name: string
}

export function Card({ name, image, description }: CardProps) {
  return (
    <Box maxW="280px" alignItems="baseline" mb={{ base: '2rem' }}>
      <Flex flexDirection="column">
        <Box className={styles.cardImageContainer}>
          <Image
            className={styles.cardImage}
            borderRadius="10px"
            htmlWidth="100%"
            htmlHeight="100%"
            objectFit="cover"
            src={image}
            alt={name}
          />
          <Text fontSize="lg" fontWeight="bold">
            {description}
          </Text>
        </Box>
        <Box textAlign="center">
          <Badge px="2" colorScheme="teal">
            {name}
          </Badge>
        </Box>
      </Flex>
    </Box>
  )
}
