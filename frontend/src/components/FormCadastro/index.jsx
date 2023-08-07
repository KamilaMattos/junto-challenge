import { Button, Input, Stack, Text } from "@chakra-ui/react"

export const FormCadastro = () => {

    return (
      <>
      <Text as={'h1'} fontSize={20} >Cadastro</Text>
      <Stack  width='50%' spacing={3}>
        <Input borderColor= '#007aff' placeholder='Nome' size='lg' type='text' />
        <Input borderColor= '#007aff' placeholder='Email' size='lg' type='email' />
        <Input borderColor= '#007aff' placeholder='Senha' size='lg' type='password' />
        <Button height={50}  bgColor= '#007aff' variant={'outline'}>CADASTRAR</Button>
      </Stack>
      </>
    )
}
