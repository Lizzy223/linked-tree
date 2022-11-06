import React from 'react'
import {Box, HStack} from '@chakra-ui/react'
const Dashboard = () => {
  return (
    <Box>
        <Text fontSize='32px' color='#16192C' fontWeight='700'>Welcome to BizzDesk Business Merchant</Text>
        <Box display='flex' flexDirection={['column','row']} mt='2rem'>
            <Box bg='#F3F7FC' borderRadius='8px' w={['100%','359.67px']} h={['100%','203px']}>
                <Box display='flex' justify='space-between'>
                    <Box>
                        <Text color='#425D8A' fontSize='1rem' fontWeight='700'>Total Users</Text>
                        <Text fontSize='40px' fontWeight='600'>321</Text>
                    </Box>
                </Box>
                <Box display='flex' gap='3'>
                    <HStack>
                        <Text fontSize='24px' fontWeight='600' >121</Text>
                        <Text color='#136F63' fontSize='14px' fontWeight='400' >Active</Text>
                    </HStack>
                    <HStack>
                        <Text fontSize='24px' fontWeight='600' >200</Text>
                        <Text color='#ED6A5A' fontSize='14px' fontWeight='400' >Inactive</Text>
                    </HStack>
                </Box>
            </Box>
        </Box>
    </Box>
  )
}

export default Dashboard