import styled from 'styled-components';

// router
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

export const SidebarStyled = styled.aside`
  width: 100%;
  height: 70vh;
  padding: 5.5rem 2rem;
  background-color: var(--dark-slate-gray);
  color: var(--platinum);
  position: fixed;
  font-size: 2rem;
  text-transform: uppercase;
  opacity: ${(props) => (props.isOpen ? '100%' : '0')};
  top: ${(props) => (props.isOpen ? '80px' : '-100%')};
  transition: all 0.5s ease-in-out;
  z-index: 9;
`;

export const SidebarContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SidebarMenu = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const SidebarItem = styled.li`
  width: 50%;
  padding-bottom: 1rem;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  border-bottom: 2px solid var(--platinum);
`;

export const SidebarLink = styled(LinkS)`
  cursor: pointer;

  &:hover {
    color: #f2e45c;
  }
`;
