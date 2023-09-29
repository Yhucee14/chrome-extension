import { useState } from 'react';

function App() {
  const [cameraToggle, setCameraToggle] = useState(false);
  const [audioToggle, setAudioToggle] = useState(false);

  const handleCameraToggle = () => {
    setCameraToggle(!cameraToggle);
  };

  const handleAudioToggle = () => {
    setAudioToggle(!audioToggle);
  };

  return (
    <div className="container rounded-2xl mx-auto h-[439px] w-[300px] p-2 shadow-md">
      <div className=" p-4 rounded-lg">
        <div className="flex items-center justify-between">
          <div className="logo flex flex-row ">
          <img src="icon32.png" alt="Logo Image" className="logo" />
           <h1 className='px-2 text-[#120B48] font-bold'>HelpMeOut</h1> 
            </div>
          <div className="menu flex flex-row">
            <img src="setting-2.png" alt="Fullscreen Icon"  className='px-4'/>
            <img src="close-circle.png" alt="Fullscreen Icon" />
          </div>
        </div>

        <p className='py-4 text-[#413C6D] leading-5'>This extension helps you record and share help videos with ease</p>

        <div className="flex items-center justify-center py-3 space-x-4">
          <div className="flex flex-col items-center">
            <img src="monitor.png" alt="Fullscreen Icon" />
            <div className='py-1'>Full screen</div>
          </div>

          <div className="flex flex-col items-center">
            <img src="copy.png" alt="Current Tab Icon" />
            <div className='text-[#120B48] font-medium py-1'>Current Tab</div>
          </div>
        </div>

        <div className="flex flex-col  mt-4 py-2 px-3 rounded-xl border-2 border-[#120B48]">
          <div className='flex justify-between'>
          <div className="flex flex-row">
            <img src="video-camera.png" alt="Current Tab Icon" />
            <div className='px-3 text-[#120B48] font-medium'>Camera</div>
          </div>

        <div>
        <label className="cursor-pointer relative inline-block w-full h-5">
            <input
              type="checkbox"
              id="camera-toggle"
              className="hidden"
              checked={cameraToggle}
              onChange={handleCameraToggle}
            />
            <span className="block bg-[#120B48] w-[45px] h-6 pt-0.5 rounded-xl shadow-md transform transition-transform duration-300 ease-in-out">
              <span
                className={`block w-[19px] h-5 rounded-full bg-white ml-0.5 transform transition-transform duration-300 ease-in-out ${
                  cameraToggle ? 'translate-x-5' : ''
                }`}
              ></span>
            </span>
          </label>
        </div>
          
          </div>
        </div>

        <div className="flex justify-between py-2 px-3 mt-6 rounded-xl border-2 border-[#120B48]">
        <div className="flex flex-row">
            <img src="microphone.png" alt="Current Tab Icon" />
            <div className='px-3 font-medium'>Audio</div>
          </div>

          <div>
          <label className="cursor-pointer relative inline-block w-full h-5">
            <input
              type="checkbox"
              id="audio-toggle"
              className="hidden"
              checked={audioToggle}
              onChange={handleAudioToggle}
            />
            <span className="block bg-[#120B48] w-[45px] h-6 pt-0.5 rounded-xl shadow-md transform transition-transform duration-300 ease-in-out">
              <span
                className={`block w-[19px] h-5 rounded-full bg-white ml-0.5 transform transition-transform duration-300 ease-in-out ${
                  audioToggle ? 'translate-x-5' : ''
                }`}
              ></span>
            </span>
          </label>
          </div>
         
        </div>

        <div className="flex justify-center mt-6">
          <button className="btn bg-[#120B48] hover:bg-white hover:border-2 hover:border-[#413C6D] hover:font-bold hover:text-[#413C6D] font-medium px-16 rounded-xl py-2.5 text-white">
            Start Recording
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
