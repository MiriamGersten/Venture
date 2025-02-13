import React from 'react';
import ShippingInfo from './ShippingInformation';
import BillingInfo from './BillingInformation';
import Contacts from './Contacts';
import BasicInformation from './BasicInfo';

interface MainContentProps {
  activeTab: string;
}

const MainContent: React.FC<MainContentProps> = ({ activeTab }) => {
  switch (activeTab) {
    case 'basic-info':
      return <BasicInformation />;
    case 'shipping-info':
      return <ShippingInfo />;
    case 'billing-info':
      return <BillingInfo />;
    case 'contacts':
      return <Contacts />;
    default:
      return <BasicInformation />; 
  }
};

export default MainContent;
