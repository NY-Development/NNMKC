import { Box, Text } from '@chakra-ui/react'

function Title() {
  return (

    <Box display={'flex'} gap={'2'} justifyContent={'center'}>
        <Text className='title-lines'></Text>
            <Text fontSize={{base:'xl', md: '3xl', lg: '5xl', xl: '5xl', xlTo2xl: '6xl'}} fontWeight={'800'} >Title 1</Text>
            <Text fontSize={{base:'xl', md: '3xl', lg: '5xl', xl: '5xl', xlTo2xl: '6xl'}} fontWeight={'800'} color={'blue.600'} >Title 2</Text>
        <Text className='title-lines'></Text>
        
    </Box>
    
  )
}

export default Title