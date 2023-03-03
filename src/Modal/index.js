import React from 'react';
import PortalReactDOM from 'react-dom';
import { AlterTodoButton } from '../components/AlterTodoButton'

function Modal({ children }) {
  return PortalReactDOM.createPortal(
    <div className="fixed inset-0 bg-slate-900 bg-opacity-60 overflow-hidden w-full h-full">
      <div className="grid place-content-center w-full h-full">
          <div className='rounded-xl bg-gradient-to-b from-slate-900 to-slate-700 w-72 h-80 flex flex-col justify-between items-center'>
            <div className="text-red-400 py-1 h-7 w-7 self-end mt-7">
              <AlterTodoButton />
            </div>
            <div className='px-4 bg-pink-500'>
              { children }
            </div>
          </div>
      </div>
    </div>,
    document.getElementById('modal')
  );
}

export { Modal };