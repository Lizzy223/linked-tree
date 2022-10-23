import React from 'react'
import {Box, Image, Button, Text, Divider} from '@chakra-ui/react'


const Homepage = () => {
  return (
    <Box w='100%' h='100%' display='flex' p={['1rem','4rem']} mt={['1.5rem','0']} justifyItems='center' alignItems='center' flexDirection='column'>
        <Box >
        <Image id='profile__img’' src='assets/img.png' w='80px' h='80px' alt='' />
        </Box>
        <Box position='absolute' top={['10px','40px']} right={['40px','278px']}>
        <Image src='assets/share.png'  _hover={{cursor:'pointer'}} w='40px' display={['none','block']} h='40px' alt=''/>
        <Image src='assets/mobile.png' _hover={{cursor:'pointer'}} display={['block','none']} w='40px' h='40px' alt=''/>
        
        </Box>
        <Text fontWeight='700' id='twitter' textAlign='center' mt='1rem' fontSize='20px'>
            Annette Black
        </Text>
        <Text fontWeight='700' display='none' visibility='hidden' id='slack' textAlign='center' mt='1rem' fontSize='20px'>
            Annette Black
        </Text>
        <Box w='full' display='flex' flexDirection='column' gap='6' alignItems={['none','center']} justifyItems={['none','center']} h='100%' mt={['1rem','2rem']}>
            <Button  as='a' href='https://twitter.com/hnginternship' target='_blank' w={['100%','90%']} h='4.75rem' m='auto' bg='#EAECF0' borderRadius='8px' color='#101828' fontWeight='500' fontSize='18px' border='1px solid #EAECF0'>
                Twitter link
            </Button>
            <Button as='a' id='btn__zuri' href='https://training.zuri.team/' target='_blank' w={['100%','90%']} h='4.75rem' m='auto' bg='#EAECF0' borderRadius='8px' color='#101828' fontWeight='500' fontSize='18px' border='1px solid #EAECF0'>
                Zuri Team
            </Button>
            <Button as='a' id='books' href='https://books.zuri.team/' target='_blank' w={['100%','90%']} h='4.75rem' m='auto' bg='#EAECF0' borderRadius='8px' color='#101828' fontWeight='500' fontSize='18px' border='1px solid #EAECF0'>
                Zuri Books
            </Button>
            <Button  as='a' id='book__python' href='https://books.zuri.team/python-for-beginners?ref_id=%3Cyourslackname%3E' target='_blank' w={['100%','90%']} h='4.75rem' m='auto' bg='#EAECF0' borderRadius='8px' color='#101828' fontWeight='500' fontSize='18px' border='1px solid #EAECF0'>
                Python Books
            </Button>
            <Button  as='a' id='pitch' href='https://background.zuri.team/' target='_blank' w={['100%','90%']} h='4.75rem' m='auto' bg='#EAECF0' borderRadius='8px' color='#101828' fontWeight='500' fontSize='18px' border='1px solid #EAECF0'>
                Background Check for Coders
            </Button>
            <Button  as='a' id='book__design' href='https://books.zuri.team/design-rules' target='_blank' w={['100%','90%']} h='4.75rem' m='auto' bg='#EAECF0' borderRadius='8px' color='#101828' fontWeight='500' fontSize='18px' border='1px solid #EAECF0'>
                Design books
            </Button>
            <Box display='flex' padding='24px, 32px, 24px, 32px' mt='1rem' gap='6'>
                <Image src='assets/slack.png' alt=''/>
                <Image alt='' src='assets/Icon.png'/>
            </Box>
        </Box>
        <Box w='90%' mt='6rem' alignItems='center' display='flex' flexDirection='column' >
            <Divider/>
            <Box display='flex' h='100px' alignItems='center' justifyContent='space-between' w='full'>
                <Image src='assets/zuri.png' alt=''/>
                <Text color='#667085' fontWeight='400'>HNG Internship 9 Frontend Task</Text>
                <Image alt='' src='assets/I4G.png'/>
            </Box>
        </Box>
    </Box>
  )
}

export default Homepage