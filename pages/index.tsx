import Head from 'next/head'
import NextImage from 'next/image'
import styles from '../styles/Home.module.scss'
import { Card } from '../components/Card'
import { Student } from '../components/Student'
import {
  Flex,
  UnorderedList,
  Heading,
  Box,
  Text,
  Button,
  Grid,
  GridItem,
  Divider,
  Image,
} from '@chakra-ui/react'
import { ArrowForwardIcon, CheckIcon, InfoIcon } from '@chakra-ui/icons'

const Background = () => (
  <>
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
    <main>
      <section className={styles.base}>
        <Box className={styles.container} pt="2rem">
          <Heading as="h2" size="lg">
            Formação de base
          </Heading>
          <Text fontSize="lg" align="justify">
            Acreditamos que um bom aprendizado dos fundamentos é primordial,
            dessa forma é possivel concluir o ensino fundamental em nossa
            plataforma. Nosso objetivo é permitir uma educação de qualidade para
            àqueles que não têm acesso.
          </Text>
          <UnorderedList py="3rem">
            <Flex justifyContent="space-between">
              <Card
                name="Aprender a ler"
                image="/images/aprender-a-ler.jpg"
                description="Todos devem saber ler e estamos aqui para te ajudar."
              />
              <Card
                name="Ensino fundamental"
                image="/images/certificado.jpg"
                description="Conclua o ensino fundamental com a Educ, reconhecida pelo MEC."
              />
              <Card
                name="Habilidades"
                image="/images/ilustracao.jpg"
                description="Aprenda sobre ilustração, design, programação, produção de contéudo, mercado financeiro e música."
              />
            </Flex>
          </UnorderedList>
        </Box>
      </section>
      <section>
        <Flex
          py="1rem"
          background="gray.900"
          alignItems="center"
          justifyContent="space-around"
        >
          <Text color="white">
            Educ Fórum - comunidade de professores e alunos
          </Text>
          <Button
            colorScheme="blue"
            border="none"
            size="lg"
            width="300px"
            cursor="pointer"
            leftIcon={<ArrowForwardIcon />}
          >
            Acessar Fórum
          </Button>
        </Flex>
      </section>
      <section className={styles.container}>
        <Grid templateColumns="repeat(2, 1fr)">
          <GridItem justifySelf="center" alignSelf="center" px="2rem">
            <Image width="300px" src="/images/studying.jpg" alt="Estudando" />
          </GridItem>
          <GridItem p="2rem" alignSelf="center">
            <Text fontSize="lg" align="justify">
              O aluno ao se cadastrar na plataforma, receberá um conteúdo
              personalizado de aprendizado de acordo com seus objetivos. Além de
              todo o material de apoio em vídeo e escrito, o ensino ocorre de
              forma interativa tornando o processo de aprendizagem mais
              atrativo.
            </Text>
          </GridItem>
        </Grid>
      </section>
      <section className={styles.parceria}>
        <Box className={styles.container}>
          <Grid templateColumns="repeat(2, 1fr)">
            <GridItem
              display="flex"
              alignItems="center"
              justifyContent="center"
              px="2rem"
            >
              <Text fontSize="lg" align="justify">
                A Educ é habilitada pelo MEC, com a nossa plataforma é possível
                agendar avaliações e emitir o certificado de conclusão do ensino
                fundamental. <CheckIcon />
                <Box>
                  <Button
                    colorScheme="blue"
                    border="none"
                    size="lg"
                    cursor="pointer"
                    mt="5"
                    leftIcon={<InfoIcon />}
                  >
                    Ver mais
                  </Button>
                </Box>
              </Text>
            </GridItem>
            <GridItem p="2rem" justifySelf="center">
              <Image
                borderRadius="10"
                htmlWidth="280"
                htmlHeight="210"
                objectFit="cover"
                src="/images/mec.jpg"
                alt="Ministério da Educação"
              />
            </GridItem>
          </Grid>
        </Box>
      </section>
      <section className={styles.container}>
        <Heading as="h3" fontSize="1.5rem" textAlign="center" my="5">
          Feedback
          <Text fontSize="lg">
            Opnião dos estudantes da{' '}
            <Text color="blue.700" display="inline">
              Educ
            </Text>
          </Text>
          <Divider my="5" />
        </Heading>
        <Grid templateColumns="repeat(2, 1fr)" justifyItems="center">
          <GridItem my="6" width="450px">
            <Student
              nome="Felipe Curcio"
              comentario="Essa plataforma é incrível"
              avatar="/images/felipe-curcio.png"
            />
          </GridItem>
          <GridItem my="6" width="450px">
            <Student nome="John Doe" comentario="Essa plataforma é incrível" />
          </GridItem>
          <GridItem my="6" width="450px">
            <Student nome="Jenny Doe" comentario="Essa plataforma é incrível" />
          </GridItem>
          <GridItem my="6" width="450px">
            <Student nome="John Doe" comentario="Essa plataforma é incrível" />
          </GridItem>
        </Grid>
      </section>
      <section>
        <Divider my="5" />
        <Box py="5rem" background="#9bb7b5">
          <Flex
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
          >
            <Heading as="h3" fontSize="2rem" color="black">
              Você é professor e gostaria de dar aula ou sugestões?
            </Heading>
            <Button
              colorScheme="blue"
              border="none"
              size="lg"
              cursor="pointer"
              mt="5"
              textAlign="center"
            >
              Contruibur com a Comunidade
            </Button>
          </Flex>
        </Box>
      </section>
    </main>
  </>
)

export default Background
