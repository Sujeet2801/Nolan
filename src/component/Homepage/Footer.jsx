import React from 'react';

const Footer = () => {
  return (
    <div className="relative top-48 grid items-center p-6 text-white ">
      <div className="col-span-3 flex justify-start">
        <img
          src="https://www.nolanai.app/_next/image?url=%2Fimages%2Flogo-header.png&w=256&q=75"
          alt="NolanAI Logo"
          className="w-24"
        />
      </div>

      <div className="col-span-1 flex flex-col items-center">
        <p>© NolanAI, Inc. 2024</p>
        <nav className="flex justify-center space-x-4">
          <a href="#" className="hover:underline">Testimonials</a>
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms of Service</a>
          <a href="#" className="hover:underline">Referral Program</a>
          <a href="#" className="hover:underline">Releases</a>
          <a href="#" className="hover:underline">FAQ</a>
        </nav>
      </div>

      <div className="col-span-10 flex justify-end space-x-4">
        <a href="#" aria-label="Instagram">
          <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" width="32" height="32">
            <path d="M10.24 1.92c-4.587 0-8.32 3.733-8.32 8.32v11.52c0 4.587 3.733 8.32 8.32 8.32h11.52c4.587 0 8.32-3.733 8.32-8.32V10.24c0-4.587-3.733-8.32-8.32-8.32H10.24zm0 1.28h11.52a7.03 7.03 0 017.04 7.04v11.52a7.03 7.03 0 01-7.04 7.04H10.24a7.03 7.03 0 01-7.04-7.04V10.24a7.03 7.03 0 017.04-7.04zm13.44 3.84a1.28 1.28 0 100 2.56 1.28 1.28 0 000-2.56zM16 8.96c-3.88 0-7.04 3.16-7.04 7.04s3.16 7.04 7.04 7.04 7.04-3.16 7.04-7.04S19.88 8.96 16 8.96zm0 1.28A5.75 5.75 0 0121.76 16 5.75 5.75 0 0116 21.76 5.75 5.75 0 0110.24 16 5.75 5.75 0 0116 10.24z" fill="#fff" fillOpacity="0.72"></path>
          </svg>
        </a>
        <a href="#" aria-label="Twitter">
          <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" width="32" height="32">
            <path d="M3.789 3.84l9.384 13.68-9.185 10.64h2.035l8.048-9.33 6.4 9.33h7.69l-9.805-14.291L27.008 3.84h-2.03l-7.522 8.715-5.978-8.715h-7.69zm2.43 1.28h4.585L25.73 26.88h-4.585L6.22 5.12z" fill="#fff" fillOpacity="0.72"></path>
          </svg>
        </a>
        <a href="#" aria-label="Youtube">
          <svg width="32" height="32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15.617 5.76c-4.225 0-8.192.32-10.305.768-1.407.32-2.625 1.28-2.88 2.752-.255 1.535-.512 3.84-.512 6.72s.255 5.12.575 6.72c.257 1.408 1.472 2.433 2.88 2.753 2.242.447 6.08.767 10.305.767s8.062-.32 10.302-.767c1.41-.32 2.625-1.28 2.88-2.753.258-1.6.578-3.902.64-6.782 0-2.88-.32-5.186-.64-6.785-.255-1.408-1.47-2.433-2.88-2.753-2.24-.32-6.142-.64-10.365-.64zm0 1.28c4.608 0 8.318.383 10.11.703.96.257 1.728.897 1.855 1.73.385 2.047.64 4.224.64 6.464-.062 2.75-.382 4.99-.64 6.59-.19 1.215-1.47 1.6-1.855 1.73-2.305.448-6.145.765-9.985.765S8 24.768 5.76 24.259c-.96-.258-1.728-.898-1.855-1.73C3.392 20.735 3.2 18.367 3.2 16c0-2.945.257-5.12.512-6.462.193-1.218 1.535-1.603 1.855-1.73 2.113-.448 6.018-.768 10.05-.768zm-3.457 3.84v10.24L21.12 16l-8.96-5.12zm1.28 2.177L18.56 16l-5.12 2.942v-5.885z" fill="#fff" fillOpacity="0.72"></path>
          </svg>
        </a>
        <a href="#" aria-label="Discord">
          <svg viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg" width="30" height="30">
            <path d="M18.894 4.344A17.409 17.409 0 0014.532 3c-.192.33-.406.779-.555 1.13a16.677 16.677 0 00-4.833 0c-.15-.351-.373-.8-.555-1.13a17.162 17.162 0 00-4.363 1.344C1.463 8.419.716 12.397 1.09 16.323A17.782 17.782 0 006.435 19a13 13 0 001.14-1.845 11.182 11.182 0 01-1.802-.864c.15-.107.299-.224.438-.342 3.477 1.59 7.243 1.59 10.678 0 .15.118.288.235.437.342a11.18 11.18 0 01-1.802.864A13 13 0 0016.665 19a17.684 17.684 0 005.345-2.677c.459-4.544-.726-8.491-3.116-11.979zM8.056 13.901c-1.045 0-1.899-.949-1.899-2.112 0-1.162.832-2.112 1.899-2.112 1.056 0 1.92.95 1.899 2.112 0 1.163-.843 2.112-1.9 2.112zm7.009 0c-1.045 0-1.9-.949-1.9-2.112 0-1.162.833-2.112 1.9-2.112 1.056 0 1.92.95 1.899 2.112 0 1.163-.832 2.112-1.899 2.112z" stroke="currentColor" strokeLinejoin="round"></path>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Footer;
