import React, { useState } from 'react';
import useStore from '@store/store';
import ClipLoader from "react-spinners/ClipLoader";

import ContentView from './View/ContentView';
import EditView from './View/EditView';


const MessageContent = ({
  role,
  content,
  messageIndex,
  sticky = false,
}: {
  role: string;
  content: string;
  messageIndex: number;
  sticky?: boolean;
}) => {
  const [isEdit, setIsEdit] = useState<boolean>(sticky);
  const advancedMode = useStore((state) => state.advancedMode);
  const generating = useStore.getState().generating;

  return (
    <div className='relative flex flex-col gap-1 md:gap-3 lg:w-[calc(100%-115px)]'>
      {advancedMode && <div className='flex flex-grow flex-col gap-3'></div>}
      {generating && role === 'assistant' && !content ? <ClipLoader color="#fff" className='relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2' /> : (isEdit ? (
        <EditView
          content={content}
          setIsEdit={setIsEdit}
          messageIndex={messageIndex}
          sticky={sticky}
        />
      ) : (
        <ContentView
          role={role}
          content={content}
          setIsEdit={setIsEdit}
          messageIndex={messageIndex}
        />
      ))}
    </div>
  );
};

export default MessageContent;
