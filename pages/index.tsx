import Head from 'next/head'
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
import { Showcase } from '../components/Showcase'

const cards = [
  {
    name: 'Aprender a ler',
    description:
      'Também ensinamos a ler. Conhece alguem não sabe ler e escrever? Indique a Educ.',
    image: '/images/aprender-a-ler.jpg',
  },
  {
    name: 'Ensino fundamental',
    image: '/images/certificado.jpg',
    description:
      'Conclua o ensino fundamental com a Educ, reconhecida pelo MEC.',
  },
  {
    name: 'Habilidades',
    image: '/images/ilustracao.jpg',
    description:
      'Desenvolva habilidades em ilustração, design, programação, produção de contéudo, mercado financeiro e música.',
  },
]

const Background = () => (
  <>
    <Head>
      <title>Educ | Home</title>
    </Head>
    <Showcase />
    <main>
      <section className={styles.base}>
        <Box
          className={styles.container}
          pt="2rem"
          px={['2rem', '2rem', '2rem', '1rem']}
        >
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
            <Flex
              justifyContent="space-between"
              flexDirection={['column', 'column', 'column', 'row']}
              alignItems="center"
            >
              {cards.map((card, idx) => (
                <Card
                  key={idx}
                  name={card.name}
                  image={card.image}
                  description={card.description}
                />
              ))}
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
          flexDirection={['column', 'column', 'row', 'row']}
        >
          <Text color="white">
            Educ Fórum - comunidade de professores e alunos
          </Text>
          <Button
            colorScheme="blue"
            size="lg"
            width="300px"
            cursor="pointer"
            mt={[5, 5, 0, 0]}
            leftIcon={<ArrowForwardIcon />}
          >
            Acessar Fórum
          </Button>
        </Flex>
      </section>
      <section className={styles.container}>
        <Grid templateColumns={['1fr', '1fr', '1fr', 'repeat(2, 1fr)']}>
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
        <Box className={styles.container} pt={['2rem', '2rem', '2rem', 0]}>
          <Grid templateColumns={['1fr', '1fr', '1fr', 'repeat(2, 1fr)']}>
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
                <Button
                  colorScheme="blue"
                  size="lg"
                  cursor="pointer"
                  mt="5"
                  display="block"
                  mx={{ base: 'auto' }}
                  leftIcon={<InfoIcon />}
                >
                  Ver mais
                </Button>
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
            <Text as="span" color="blue.700" display="inline">
              Educ
            </Text>
          </Text>
          <Divider my="5" />
        </Heading>
        <Grid
          templateColumns={['1fr', '1fr', '1fr', 'repeat(2, 1fr)']}
          justifyItems="center"
        >
          <GridItem my="6" width={['280px', '350px', '400px', '450px']}>
            <Student
              nome="Felipe Curcio"
              comentario="Com a Educ pude desensolver habilidades de programação, mal posso esperar para começar os outros cursos."
              avatar="/images/felipe-curcio.png"
            />
          </GridItem>
          <GridItem my="6" width={['300px', '400px', '420px', '450px']}>
            <Student
              nome="John Doe"
              comentario="Apesar da escola ser muito distante de minha casa, meu filho pôde terminar o ensino fundamental pela plataforma usando o celular."
            />
          </GridItem>
          <GridItem my="6" width={['300px', '400px', '420px', '450px']}>
            <Student
              nome="Jane Doe"
              comentario="Consegui terminar o fundamental e desenvolver habilidades de base para o mercado financeiro."
            />
          </GridItem>
          <GridItem my="6" width={['300px', '400px', '420px', '450px']}>
            <Student
              nome="Johnny Doe"
              comentario="Essa plataforma é incrível."
            />
          </GridItem>
        </Grid>
      </section>
      <section>
        <Divider my="5" />
        <Box
          py="5rem"
          background="#9bb7b5"
          px={{ base: '1rem' }}
          textAlign={{ base: 'center' }}
        >
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
