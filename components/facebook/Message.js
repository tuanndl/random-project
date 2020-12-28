import React from 'react';
import MessengerCustomerChat from 'react-messenger-customer-chat';
import { useRouter } from 'next/router';

const MessengerChat = () => {
  const router = useRouter();
  const lang = 'vi_VN';

  return (
    <MessengerCustomerChat
      pageId={393774084801224}
      appId={104479844915184}
      htmlRef={router.pathname}
      language={lang}
      minimized
    />
  );
};

export default MessengerChat;
