import styled from '@emotion/styled';
import React from 'react';

const ResultsWrapper = styled.div`
  width: 250px;
  height: 100vh;
  border-right: 1px solid #e5e5ea;
  padding: 30px;
  position: fixed;
`;
const NavList = styled.ul`
  list-style: none;
  padding: 0;
`;

const navItem = {
  margin: '20px 0',
  cursor: 'pointer',
  color: '#808080',
};
const activeNavItem = {
  margin: '10px 0',
  cursor: 'pointer',
  fontWeight: 'bold',
  color: '#00b8d4',
};

interface Props {
  onTabClick: (tab: string) => void;
  activeTab: string;
}

const Sidebar = (props: Props) => {
  return (
    <ResultsWrapper>
      <NavList>
        <li
          style={props.activeTab === 'basic-info' ? activeNavItem : navItem}
          onClick={() => props.onTabClick('basic-info')}
        >
          Basic Info!
        </li>
        <li
          style={props.activeTab === 'shipping-info' ? activeNavItem : navItem}
          onClick={() => props.onTabClick('shipping-info')}
        >
          Shipping Info
        </li>
        <li
          style={props.activeTab === 'billing-info' ? activeNavItem : navItem}
          onClick={() => props.onTabClick('billing-info')}
        >
          Billing Info
        </li>
        <li
          style={props.activeTab === 'contacts' ? activeNavItem : navItem}
          onClick={() => props.onTabClick('contacts')}
        >
          Contacts
        </li>
      </NavList>
    </ResultsWrapper>
  );
};

export default Sidebar;
