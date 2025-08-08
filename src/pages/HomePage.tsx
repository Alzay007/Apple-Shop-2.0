import { Container, Heading, Text, Flex } from '@radix-ui/themes'

export const HomePage = () => {
  return (
    <Container size="4" py="6">
      <Flex direction="column" gap="4">
        <Heading size="8">Welcome to Apple Shop v2.0 🍎</Heading>
        <Text size="4" color="gray">
          Современный интернет-магазин Apple товаров
        </Text>
      </Flex>
    </Container>
  )
}
