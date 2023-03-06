import React from 'react';
import PortalReactDOM from 'react-dom';
import { AlterTodoButton } from '../components/AlterTodoButton'

function Modal({ children }) {
  return PortalReactDOM.createPortal(
    <div className="fixed inset-0 bg-slate-900 bg-opacity-60 overflow-hidden w-full h-full">
      <div className="grid place-content-center w-full h-full">
          <div className='rounded-2xl border-2 border-link bg-gradient-to-b from-slate-900 to-slate-800 w-80 h-96 flex flex-col justify-between items-center'>
            <div className="text-red-200 py-1 h-7 w-7 self-end mt-3">
              <AlterTodoButton />
            </div>
            <div className='px-4 w-full h-full'>
              { children }
            </div>
            <div className='h-10'></div>
          </div>
      </div>
    </div>,
    document.getElementById('modal')
  );
}

export { Modal };