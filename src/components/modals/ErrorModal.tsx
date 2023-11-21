import { setIsFormSubmit } from "@/store/reducers/buttonSlice";
import { useDispatch } from "react-redux";

const ErrorModal = () => {
  const dispatch = useDispatch();
  return (
    <div className="fixed flex justify-center items-center w-full h-screen bg-black bg-opacity-60 z-50">
      <div className="absolute w-auto bg-white p-6 rounded-lg shadow-md z-50 | max-[350px]:w-[13.6rem]">
        <header className="text-2xl font-semibold text-red-500">Error</header>
        <main className="mt-4">
          <p className="text-gray-800">Something went wrong!</p>
          <p className="text-gray-800">
            This feature is currently unavailable.
          </p>
        </main>
        <footer className="mt-4 text-center">
          <button
            type="button"
            onClick={() => dispatch(setIsFormSubmit())}
            className="px-4 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 focus:outline-none"
          >
            Close
          </button>
        </footer>
      </div>
    </div>
  );
};

export default ErrorModal;
