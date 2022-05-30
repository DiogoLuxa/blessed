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
  const { isOpen, setIsOpen } = useContext(StateContext);

  return (
    <SidebarStyled isOpen={isOpen}>
      <SidebarContainer>
        <SidebarMenu>
          <SidebarItem>
            <SidebarLink to="home" onClick={() => setIsOpen((prev) => !prev)}>
              Home
            </SidebarLink>
          </SidebarItem>
          <SidebarItem>
            <SidebarLink
              to="sobre"
              className="active"
              onClick={() => setIsOpen((prev) => !prev)}
            >
              Sobre
            </SidebarLink>
          </SidebarItem>
          <SidebarItem>
            <SidebarLink
              to="atuacao"
              onClick={() => setIsOpen((prev) => !prev)}
            >
              Atuação
            </SidebarLink>
          </SidebarItem>
          <SidebarItem>
            <SidebarLink to="cases" onClick={() => setIsOpen((prev) => !prev)}>
              Cases
            </SidebarLink>
          </SidebarItem>
          <SidebarItem>
            <SidebarLink
              to="contato"
              onClick={() => setIsOpen((prev) => !prev)}
            >
              Contato
            </SidebarLink>
          </SidebarItem>
        </SidebarMenu>
      </SidebarContainer>
    </SidebarStyled>
  );
};

export default Sidebar;
