import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Image,
  Link,
} from '@chakra-ui/react';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps): JSX.Element {
  // TODO MODAL WITH IMAGE AND EXTERNAL LINK
  return (

    <Modal onClose={onClose} isOpen={isOpen} isCentered>
      <ModalOverlay />
      <ModalContent
        maxW={['300px', '450px', '900px']}
        maxH={['250px', '300px', '600px']}
      >
        <ModalBody p={0}>
          <Image
            maxW={['300px', '450px', '900px']}
            maxH={['250px', '300px', '600px']}
            src={imgUrl} />
        </ModalBody>
        <ModalFooter bg="pGray.800" h="2rem" py="20px" borderBottomRadius={"6px"}>
          <Link
            href={imgUrl}
            isExternal
            fontSize="1rem"
            mr="auto"
          >
            Abrir original
          </Link>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
