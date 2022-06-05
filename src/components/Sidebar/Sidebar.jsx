import React, { useContext } from 'react';

// context
import { StateContext } from '../../context/StateProvider';

// styles
import {
  SidebarStyled,
  SidebarContainer,
  SidebarMenu,
  SidebarItem,
  SidebarLink,
} from '../../styles/Sidebar/Sidebar.styled';

const Sidebar = () => {
  const { navItems, isOpen, setIsOpen } = useContext(StateContext);

  return (
    <SidebarStyled isOpen={isOpen}>
      <SidebarContainer>
        <SidebarMenu>
          {navItems.map((item) => {
            return (
              <SidebarItem key={item.id}>
                <SidebarLink
                  to={item.title}
                  smooth={true}
                  onClick={() => setIsOpen((prev) => !prev)}
                >
                  {item.title}
                </SidebarLink>
              </SidebarItem>
            );
          })}
        </SidebarMenu>
      </SidebarContainer>
    </SidebarStyled>
  );
};

export default Sidebar;
