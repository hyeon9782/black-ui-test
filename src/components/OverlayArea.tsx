import { useState } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerCloseButton,
  useDisclosure,
  Popover,
  PopoverArrow,
  PopoverCloseButton,
  PopoverContent,
  PopoverTrigger,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Button,
  Radio,
  RadioGroup,
  //   Tooltip,
  //   TooltipTrigger,
  //   TooltipContent,
  //   TooltipArrow,
} from "@black-ui/react";

type placement = "right" | "left" | "top" | "bottom";
const OverlayArea = () => {
  const [placement, setPlacement] = useState<placement>("right");

  const changeRadio = (value: placement) => {
    setPlacement(value);
  };

  const {
    isOpen: isDrawerOpen,
    onOpen: onDrawerOpen,
    onClose: onDrawerClose,
  } = useDisclosure();

  const {
    isOpen: isModalOpen,
    onOpen: onModalOpen,
    onClose: onModalClose,
  } = useDisclosure();

  return (
    <div>
      <fieldset>
        <legend>Drawer</legend>
        <div>
          <div style={{ marginBottom: "10px" }}>
            <RadioGroup onChange={changeRadio}>
              <Radio size="sm" value="top">
                Top
              </Radio>
              <Radio size="sm" value="right">
                Right
              </Radio>
              <Radio size="sm" value="bottom">
                Bottom
              </Radio>
              <Radio size="sm" value="left">
                Left
              </Radio>
            </RadioGroup>
          </div>
          <Button onClick={onDrawerOpen}>Drawer {placement}</Button>
          <Drawer
            isOpen={isDrawerOpen}
            onClose={onDrawerClose}
            placement={placement}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>Header</DrawerHeader>
              <DrawerBody>Body</DrawerBody>
              <DrawerFooter>Footer</DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>
      </fieldset>

      <fieldset>
        <legend>Modal</legend>
        <Button onClick={onModalOpen}>Modal 나와라!</Button>
        <Modal isOpen={isModalOpen} onClose={onModalClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <div>Modal 입니다!</div>
            </ModalBody>
            <ModalFooter>
              <Button onClick={() => onModalClose()}>취소</Button>
              <Button onClick={() => onModalClose()}>확인</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </fieldset>

      <fieldset>
        <legend>Menu</legend>
        <Menu>
          <MenuButton>Menu 나와라!</MenuButton>
          <MenuList>
            <MenuItem
              onClick={() => {
                alert("다운로드!");
              }}
            >
              Download
            </MenuItem>
            <MenuItem>Create a Copy</MenuItem>
            <MenuItem>Mark as Draft</MenuItem>
            <MenuItem>Delete</MenuItem>
            <MenuItem>Attend a Workshop</MenuItem>
          </MenuList>
        </Menu>
      </fieldset>

      <fieldset>
        <legend>Popover</legend>
        <div
          style={{ display: "flex", justifyContent: "center", width: "100%" }}
        >
          <Popover>
            <PopoverTrigger>
              <Button>Popover 나와라!</Button>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverCloseButton />
              <div>Popover입니다!!</div>
            </PopoverContent>
          </Popover>
        </div>
      </fieldset>

      <fieldset>
        <legend>Tooltip</legend>
        {/* <Tooltip>
          <TooltipTrigger>
            <Button>Tooltip 나와라!</Button>
          </TooltipTrigger>
          <TooltipContent>
            <TooltipArrow />
            <p>Tooltip입니다.</p>
          </TooltipContent>
        </Tooltip> */}
      </fieldset>
    </div>
  );
};

export default OverlayArea;
