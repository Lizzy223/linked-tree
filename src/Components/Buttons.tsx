import {Button} from '@chakra-ui/react';

const Buttons = (name:any) => {
  return (
    <div>
      <Button w='805' h='4.75rem' bg='#EAECF0' borderRadius='8px' color='#000' border='1px solid #EAECF0'>
        {name}
      </Button>
    </div>
  )
}

export default Buttons