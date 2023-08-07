import { Button, Input, Stack, Text } from "@chakra-ui/react"

export const Sinistro = () => {

    return (
      <>
      <Text as={'h1'} fontSize={20} >Cadastro de Sinistro</Text>
      <Stack  width='50%' spacing={3}>
        <Input borderColor= '#007aff' placeholder='Data do Sinistro' size='lg' type='text' />
        <Input borderColor= '#007aff' placeholder='Tipo do Sinistro' size='lg' type='text' />
        <Input borderColor= '#007aff' placeholder='Rua' size='lg' type='text' />
        <Input borderColor= '#007aff' placeholder='Número' size='lg' type='text' />
        <Input borderColor= '#007aff' placeholder='Bairro' size='lg' type='text' />
        <Input borderColor= '#007aff' placeholder='Cidade' size='lg' type='text' />
        <Input borderColor= '#007aff' placeholder='Estado' size='lg' type='text' />
        <Input borderColor= '#007aff' placeholder='País' size='lg' type='text' />

        <Button height={50}  bgColor= '#007aff' variant={'outline'}>Cadastrar</Button>
      </Stack>
      </>
    )
}
