import useStore from '@store/store';

import ChatContent from './ChatContent';
import MobileBar from '../MobileBar';

const Chat = () => {
  const hideSideMenu = useStore((state) => state.hideSideMenu);

  return (
    <div
      className={`flex h-full flex-1 flex-col ${
        hideSideMenu ? 'md:pl-0' : 'md:pl-[260px]'
      }`}
    >
      <MobileBar />
      <main className='relative h-full w-full transition-width flex flex-col overflow-hidden items-stretch flex-1'>
        <ChatContent />
      </main>
    </div>
  );
};

export default Chat;
