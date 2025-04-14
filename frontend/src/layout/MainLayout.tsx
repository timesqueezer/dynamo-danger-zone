export const MainLayout = () => {
  return (
    <div className="max-w-6xl mx-auto border border-gray-800">
      {/* Header with logo and site name */}
      <header className="flex items-center p-4">
        <div className="bg-gray-700 text-white p-4 w-32 text-center">
          <img src="/logo_transparent.webp" alt="Logo" className="w-full h-auto" />
        </div>
        <div className="bg-gray-700 text-white p-4 ml-2 flex-grow text-center">
          Dynamo Danger Zone
        </div>
      </header>

      {/* Main content area */}
      <div className="flex p-4">
        {/* Left content section */}
        <div className="w-3/5 border border-gray-400 p-4 bg-gray-100">
          <div className="bg-gray-700 text-white p-2 mb-4 text-center">
            title
          </div>

          <div className="bg-gray-700 text-white h-48 flex items-center justify-center mb-4">
            image
          </div>

          <div className="bg-gray-700 text-white p-4 mb-4 text-center">
            description
          </div>

          <div className="bg-gray-700 text-white p-2 text-center">
            categories
          </div>
        </div>

        {/* Right sidebar */}
        <div className="w-2/5 border border-gray-400 ml-4">
          {/* Empty sidebar content */}
        </div>
      </div>

      {/* Navigation bar */}
      <div className="p-2 text-center mt-2 flex">
        {/* Navigation links */}
        <div className="bg-gray-700 text-white p-2 mx-2 cursor-pointer">
          All Trips
        </div>
        <div className="bg-gray-700 text-white p-2 mx-2 cursor-pointer">
          Sorted by Dangerousness
        </div>
      </div>

    </div>
  );
};

export default MainLayout;
