import { FC } from 'react';
import { EditForm } from '@/components';
import { ModalProps } from './Modal.types';

export const Modal: FC<ModalProps> = ({ onClose }) => {
  return (
    <div className="relative">
      <div className="fixed inset-0 overflow-y-auto z-50" aria-hidden="true">
        <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0 ">
          <div className="fixed inset-0 transition-opacity" aria-hidden="true">
            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>

          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen "
            aria-hidden="true"
          >
            &#8203;
          </span>

          <div
            className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full p-[25px] "
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-headline"
          >
            <button
              onClick={onClose}
              className="bg-[#CA4546] hover:bg-[#9d4545] font-bold py-2 px-4  inline-flex items-center absolute top-4 right-4 rounded-full"
            >
              <svg
                className="w-4 h-4 "
                fill="none"
                stroke="white"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="flex flex-col items-center">
                <h2 className="text-2xl font-bold mb-4">Edit contact</h2>
                <EditForm onClose={onClose} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
