import { Box, Text, Heading, Flex, Image } from '@chakra-ui/react'

interface StudentProps {
  nome: string
  comentario: string
  avatar?: string
}

export function Student({ nome, comentario, avatar }: StudentProps) {
  return (
    <Box boxShadow="lg" p="6" rounded="md" bg="white">
      <Flex alignItems="center">
        <Image
          borderRadius="full"
          boxSize="50px"
          src={avatar ?? '/images/john-doe.png'}
          alt=""
          marginRight="3"
        />
        <Heading as="h4" size="md">
          {nome}
        </Heading>
      </Flex>

      <Text fontSize="lg">{comentario}</Text>
    </Box>
  )
}
