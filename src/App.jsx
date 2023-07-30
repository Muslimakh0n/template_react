// Bismillah

import { useState } from "react";

function App() {
  const [step, setStep] = useState(1);
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-[#8039A2] ">
      <div className="flex w-[500px] justify-between bg-white p-4">
        <div>
          <button
            className="mb-3 block"
            onClick={() => setStep(1)}
            disabled={step === 3}
          >
            <span
              className={`${
                step >= 1 ? "bg-blue-500" : "bg-neutral-200"
              } mr-2 rounded-full px-2 py-1 text-white`}
            >
              1
            </span>
            <span
              className={`text-${
                step >= 1 ? "black" : "gray-200"
              } font-semibold`}
            >
              Choose title
            </span>
          </button>
          <button className="mb-3 block" onClick={() => setStep(2)}>
            <span
              className={`${
                step >= 2 ? "bg-blue-500" : "bg-neutral-200"
              } mr-2 rounded-full px-2 py-1 text-white`}
            >
              2
            </span>
            <span
              className={`text-${
                step >= 2 ? "black" : "gray-200"
              } font-semibold`}
            >
              Choose description
            </span>
          </button>
          <button
            className="mb-3 block"
            onClick={() => setStep(3)}
            disabled={step === 1}
          >
            <span
              className={`${
                step >= 3 ? "bg-blue-500" : "bg-neutral-200"
              } mr-2 rounded-full px-2 py-1 text-white`}
            >
              3
            </span>
            <span
              className={`text-${
                step >= 3 ? "black" : "gray-200"
              } font-semibold`}
            >
              Confirm data
            </span>
          </button>
        </div>{" "}
        <div>
          {step === 1 && (
            <>
              <h4 className="mb-3">Choose description content</h4>
              <button
                className="bg-neutral-200 px-5 py-2"
                onClick={() => setStep(2)}
              >
                Submit title
              </button>
            </>
          )}

          {step === 2 && (
            <>
              <h4 className="mb-3">Choose title content</h4>
              <button
                className="mr-2 bg-neutral-200 px-5 py-2"
                onClick={() => setStep(step - 1)}
              >
                Back
              </button>
              <button
                className="bg-neutral-200 px-5 py-2"
                onClick={() => setStep(3)}
              >
                Submit title
              </button>
            </>
          )}
          {step === 3 && (
            <>
              <h4 className="mb-3">Choose title content</h4>
              <button
                className="mr-2 bg-neutral-200 px-5 py-2"
                onClick={() => setStep(step - 1)}
              >
                Now go Back
              </button>
              <button
                className="bg-neutral-200 px-5 py-2"
                onClick={() => setStep(4)}
              >
                Yes go ahead
              </button>
            </>
          )}
          {step === 4 && (
            <>
              <h4 className="mb-3">
                Ok we are done . Congratulations. <br /> We did it, yeey!!!
              </h4>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
