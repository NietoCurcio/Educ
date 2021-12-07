import styles from './styles.module.scss'
import {
  Grid,
  GridItem,
  Text,
  Flex,
  UnorderedList,
  ListItem,
  Spacer,
  Button,
} from '@chakra-ui/react'
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa'

export function Footer() {
  return (
    <Grid
      background="#354554"
      color="white"
      templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }}
      justifyItems="center"
      p="1rem"
      fontSize="lg"
    >
      <GridItem
        gridColumn={{ base: '1', md: '2' }}
        justifySelf="center"
        alignSelf="center"
      >
        <Text>&copy; 2021 Educ.io, Inc.</Text>
      </GridItem>
      <GridItem alignSelf="center">
        <UnorderedList listStyleType="none" w="8rem">
          <Flex gap="12">
            <ListItem>
              <a
                href="https://www.facebook.com/felipeantonio.nieto/"
                target="_blank"
              >
                <FaFacebook />
              </a>
            </ListItem>
            <Spacer />
            <ListItem>
              <a href="https://github.com/NietoCurcio" target="_blank">
                <FaGithub />
              </a>
            </ListItem>
            <Spacer />
            <ListItem>
              <a
                href="https://www.linkedin.com/in/felipe-antonio-nieto-curcio-9b865116a/"
                target="_blank"
              >
                <FaLinkedin />
              </a>
            </ListItem>
          </Flex>
        </UnorderedList>
      </GridItem>
    </Grid>
  )
}
