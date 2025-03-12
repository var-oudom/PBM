
import React from 'react';
import { Loader } from 'lucide-react';

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center">
      <div className="relative">
        <svg viewBox="0 0 100 30" width="160" className="fill-brand-blue mb-8">
          <path d="M26.2,9.6c-2.3,0-4.2,1.9-4.2,4.2s1.9,4.2,4.2,4.2s4.2-1.9,4.2-4.2S28.5,9.6,26.2,9.6z M26.2,15.8c-1.1,0-2-0.9-2-2
            s0.9-2,2-2s2,0.9,2,2S27.3,15.8,26.2,15.8z M40.4,9.6c-2.3,0-4.2,1.9-4.2,4.2s1.9,4.2,4.2,4.2s4.2-1.9,4.2-4.2
            S42.7,9.6,40.4,9.6z M40.4,15.8c-1.1,0-2-0.9-2-2s0.9-2,2-2s2,0.9,2,2S41.5,15.8,40.4,15.8z M54.7,9.6
            c-2.3,0-4.2,1.9-4.2,4.2s1.9,4.2,4.2,4.2s4.2-1.9,4.2-4.2S57,9.6,54.7,9.6z M54.7,15.8c-1.1,0-2-0.9-2-2s0.9-2,2-2
            s2,0.9,2,2S55.8,15.8,54.7,15.8z M69,9.6c-2.3,0-4.2,1.9-4.2,4.2s1.9,4.2,4.2,4.2s4.2-1.9,4.2-4.2S71.3,9.6,69,9.6z
            M69,15.8c-1.1,0-2-0.9-2-2s0.9-2,2-2s2,0.9,2,2S70.1,15.8,69,15.8z M14.8,12.7l4.9-8.4H9.9L5,12.7l4.9,8.4h9.8
            L14.8,12.7z M13.4,18.9h-5l-2.5-4.3l2.5-4.3h5l2.5,4.3L13.4,18.9z M89.1,10h-3V9.8h7.3V10h-3v8h-1.3V10z M95.3,18
            h1.3v-8.2h-1.3V18z"/>
        </svg>
        <Loader className="w-10 h-10 text-brand-blue animate-spin" />
      </div>
      <p className="mt-4 text-gray-600 text-lg animate-pulse">Loading amazing pools...</p>
    </div>
  );
};

export default LoadingSpinner;
