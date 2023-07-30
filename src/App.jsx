// Bismillah

import { useState } from "react";

function App() {
  const [step, setStep] = useState(1);
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-[#8039A2] ">
      <div className="flex w-[500px] justify-between bg-white p-4">
        <div>
          <button className="mb-3 block" onClick={() => setStep(1)}>
            <span
              className={`${
                step >= 1 ? "bg-blue-500" : "bg-neutral-200"
              } mr-2 rounded-full px-2 py-1 text-white`}
            >
              1
            </span>
            <span className="font-semibolt text-gray-200">Choose title</span>
          </button>
          <button className="mb-3 block" onClick={() => setStep(2)}>
            <span
              className={`${
                step >= 2 ? "bg-blue-500" : "bg-neutral-200"
              } mr-2 rounded-full px-2 py-1 text-white`}
            >
              2
            </span>
            <span className="font-semibolt text-gray-200">
              Choose description
            </span>
          </button>
          <button className="mb-3 block" onClick={() => setStep(3)}>
            <span
              className={`${
                step >= 3 ? "bg-blue-500" : "bg-neutral-200"
              } mr-2 rounded-full px-2 py-1 text-white`}
            >
              3
            </span>
            <span className="font-semibolt text-gray-200 ">Confirm data</span>
          </button>
        </div>
        <div>
          <h4 className="mb-3">Choose title content</h4>
          <button className="bg-neutral-200 px-5 py-2">Submit title </button>
        </div>
      </div>
    </div>
  );
}

export default App;
