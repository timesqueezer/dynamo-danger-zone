export const MainLayout = () => {
  return (
    <div className="max-w-6xl mx-auto border border-gray-800">
      {/* Header with logo and site name */}
      <header className="flex items-center p-4">
        <div className="bg-gray-700 text-white p-4 w-32 text-center">logo</div>
        <div className="bg-gray-700 text-white p-4 ml-2 flex-grow text-center">
          site name
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
      <div className="bg-gray-700 text-white p-2 text-center mt-2">
        navigation
      </div>

      {/* Scroll bar/footer */}
      <div className="flex border-t border-gray-300 mt-2">
        <div className="w-12 bg-black text-white flex items-center justify-center">
          &lt
        </div>
        <div className="h-6 bg-black w-1/4"></div>
        <div className="h-6 bg-gray-200 flex-grow"></div>
        <div className="w-12 flex items-center justify-center">&gt</div>
      </div>
    </div>
  );
};

export default MainLayout;
