import { Button, Input, Stack, Text } from "@chakra-ui/react"

export const Login = () => {
    return(
        <>
      <Text fontSize={20} >Faça seu login</Text>
      <Stack  width='40%' spacing={3}>
          <Input borderColor= '#007aff' placeholder='Email' size='lg' type='email' />
        <Input borderColor= '#007aff' placeholder='Senha' size='lg' type='password' />
        <Button height={50}  bgColor= '#007aff' variant={'outline'}>Entrar</Button>
      </Stack>
      </>
    )
}