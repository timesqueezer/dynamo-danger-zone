export const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-50">
      <h1 className="text-4xl font-bold text-gray-800">
        Welcome to the Adventure Zone!
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        Get ready for an adrenaline-pumping experience!
      </p>
      <button className="mt-6 px-4 py-2 bg-red-700 text-white rounded-md hover:bg-red-800 transition duration-200">
        Start Your Adventure
      </button>
    </div>
  );
};
