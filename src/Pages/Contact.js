import {
  Container,
  Box,
  Button,
  Image,
  VStack,
  Text,
  Input,
  HStack,
  Textarea,
  Checkbox,
} from '@chakra-ui/react';

export default function Contact() {
  return (
    <Container bg="#fff" w={["100vw",'full']} display='flex' justifyContent='center' alignItems='center' flexDirection='column' h={['100%','100%']}  >
     <Box mt={['64px' ,'154px']} w='full'>
        <Text fontWeigth='600' fontSize='36px'>Contact Me</Text>
        <Text fontSize={['18px', '20px']} color='#475467' mt='1rem' fontWeight='400'>Hi there, contact me to ask me about anything you have in mind.</Text>
        <Box w='full' mt='1.5rem' display='flex' flexDirection='column' gap='6!important'>
            <HStack w='full' gap={['6',0]} display='flex' flexDirection={['column','row']} justifyContent='space-between'>
                <VStack align='flex-start' w={['100%','50%']}>
                    <Text fontWeight='500' fontSize='14px' color='#344054'>First Name</Text>
                    <Input placeholder='Enter your first name' fontWeight='400' fontSize='16px' borderRadius='8px' border='1px solid #D0D5DD' color='#667085' />
                </VStack>
                 <VStack mt={['6','0']} align='flex-start' w={['100%','50%']}>
                    <Text fontWeight='500' fontSize='14px' color='#344054'>Last Name</Text>
                    <Input placeholder='Enter your last name' fontWeight='400' fontSize='16px' borderRadius='8px' border='1px solid #D0D5DD' color='#667085' />
                </VStack>
            </HStack>
            <HStack w='full' display='flex' flexDirection={['column','row']} justifyContent='space-between'>
                <VStack align='flex-start' w={['100%','100%']}>
                    <Text fontWeight='500' fontSize='14px' color='#344054'>Email</Text>
                    <Input placeholder='yourname@email.com' fontWeight='400' fontSize='16px' borderRadius='8px' border='1px solid #D0D5DD' color='#667085' />
                </VStack>
            </HStack>
            <HStack w='full' display='flex' flexDirection={['column','row']} justifyContent='space-between'>
                <VStack align='flex-start' w={['100%','100%']}>
                    <Text fontWeight='500' fontSize='14px' color='#344054'>Message</Text>
                    <Textarea placeholder="Send me a message and I'll reply you as soon as possible..." fontWeight='400' fontSize='16px' borderRadius='8px' border='1px solid #D0D5DD' color='#667085' />
                </VStack>
            </HStack>
           <HStack>
            <Checkbox/>
             <Text fontSize='16px' fontWeight='400' color='#475467'>You agree to providing your data to name who may contact you.</Text>
           </HStack>
           
            <Button bg='#1570EF' color='#fff' borderRadius='8px' border='1px solid #1570EF' w='100%' >Send Message </Button>
        </Box>
        <Box w={['100%','90%']} mt={['3rem','6rem']} alignItems='center' display='flex' flexDirection={['column','column']} >
            
            <Box display='flex' h={['100%','100px']} alignItems='center' gap={['3','0']} flexDirection={['column','row']} justifyContent='space-between' w='full'>
                <Image src='assets/zuri.png' alt=''/>
                <Text color='#667085' fontWeight='400'>HNG Internship 9 Frontend Task</Text>
                <Image alt='' src='assets/I4G.png'/>
            </Box>
        </Box>
     </Box>
    </Container>
  );
}