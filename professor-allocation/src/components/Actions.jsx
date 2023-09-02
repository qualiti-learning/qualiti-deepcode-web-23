import { Menu, MenuButton, Button, MenuList, MenuItem } from '@chakra-ui/react';

function Actions({ actions = [], name = 'Actions' }) {
  return (
    <Menu>
      <MenuButton as={Button} colorScheme='blue'>
        {name}
      </MenuButton>

      {actions.length > 0 && (
        <MenuList>
          {actions.map((action, index) => (
            <MenuItem key={index} onClick={action.onClick}>
              {action.name}
            </MenuItem>
          ))}
        </MenuList>
      )}
    </Menu>
  );
}

export default Actions;
