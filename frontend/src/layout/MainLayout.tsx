export const MainLayout = () => {
  return (
    <div className="max-w-6xl mx-auto bg-gray-50">
      {/* Header with logo and site name */}
      <header className="flex items-center p-6 bg-gradient-to-r from-red-700 to-red-900 text-white rounded-t-lg">
        <div className="p-3 w-28 bg-white rounded-lg shadow-md">
          <img src="/logo_black.webp" alt="Logo" className="w-full h-auto" />
        </div>
        <div className="p-4 ml-4 text-3xl font-extrabold tracking-wide">
          Dynamo Danger Zone
          <div className="text-sm font-normal mt-1 text-red-200">Extreme adventures for thrill seekers</div>
        </div>
      </header>

      {/* Main content area */}
      <div className="flex p-6 gap-6">
        {/* Left content section */}
        <div className="w-3/5 border border-gray-300 rounded-lg shadow-md overflow-hidden bg-white">
          <div className="p-3 mb-4 text-center bg-red-800 text-white font-bold text-lg">
            We get you to the Danger Zone
          </div>

          <div className="relative mb-4">
            <img
              src="/danger_zone_image.jpg"
              alt="Danger Zone"
              className="w-full h-auto object-cover"
            />
            {/* <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white p-3 text-center font-bold">
              Are you ready for the ultimate adventure?
            </div> */}
          </div>

          <div className="bg-gray-800 text-white p-5 mb-4 mx-4 rounded-lg shadow-inner">
            <h2 className="font-bold text-xl mb-2">Experience the Thrill</h2>

            <div className="grid grid-cols-3">
              <dt className="text-sm/6 font-medium font-semibold">Gefahr:</dt>
              <dd className="mt-1 text-sm/6 text-gray-100 sm:col-span-2 sm:mt-0">Einer der aktivsten Vulkane der Welt mit extrem flüssiger Lava.</dd>
            </div>
            <div className="grid grid-cols-3">
              <dt className="text-sm/6 font-medium font-semibold">Warum hin?</dt>
              <dd className="mt-1 text-sm/6 text-gray-100 sm:col-span-2 sm:mt-0">Trekking auf den Gipfel mit Blick in den brodelnden Lavasee.</dd>
            </div>
            <div className="grid grid-cols-3">
              <dt className="text-sm/6 font-medium font-semibold">Rating:</dt>
              <dd className="mt-1 text-sm/6 text-gray-100 sm:col-span-2 sm:mt-0">💀💀💀💀💀</dd>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 p-4 justify-center">
            <span className="bg-red-700 text-white px-3 py-1 rounded-full text-sm font-semibold">Extreme Sports</span>
            <span className="bg-red-700 text-white px-3 py-1 rounded-full text-sm font-semibold">Mountain Climbing</span>
            <span className="bg-red-700 text-white px-3 py-1 rounded-full text-sm font-semibold">Shark Diving</span>
            <span className="bg-red-700 text-white px-3 py-1 rounded-full text-sm font-semibold">Volcano Trekking</span>
          </div>
        </div>

        {/* Right sidebar */}
        <div className="w-2/5 border border-gray-300 rounded-lg shadow-md bg-white p-4">
          {/* <div className="bg-gray-800 text-white p-3 rounded-lg mb-4 font-bold text-center">
            Featured Adventures
          </div>

          <div className="space-y-4">
            <div className="border border-gray-200 rounded-lg p-3 hover:bg-gray-50 transition duration-200">
              <h3 className="font-bold text-red-800">Volcano Boarding in Nicaragua</h3>
              <p className="text-sm text-gray-600 mt-1">Slide down an active volcano at 60mph</p>
              <div className="mt-2 flex justify-between items-center">
                <span className="font-bold">$499</span>
                <span className="bg-yellow-500 text-xs px-2 py-1 rounded font-bold">Danger Level: 8/10</span>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg p-3 hover:bg-gray-50 transition duration-200">
              <h3 className="font-bold text-red-800">Death Road Cycling in Bolivia</h3>
              <p className="text-sm text-gray-600 mt-1">Cycle down the world's most dangerous road</p>
              <div className="mt-2 flex justify-between items-center">
                <span className="font-bold">$349</span>
                <span className="bg-yellow-500 text-xs px-2 py-1 rounded font-bold">Danger Level: 9/10</span>
              </div>
            </div>
          </div> */}
        </div>
      </div>

      {/* Navigation bar */}
      <div className="p-4 text-center mt-2 flex justify-center gap-4 bg-gray-100 rounded-b-lg border-t border-gray-300">
        {/* Navigation links */}
        <div className="bg-red-700 hover:bg-red-800 text-white px-6 py-3 rounded-md cursor-pointer transition duration-200 shadow-md font-semibold">
          All Trips
        </div>
        <div className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-md cursor-pointer transition duration-200 shadow-md font-semibold">
          Sorted by Dangerousness
        </div>
        <div className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-md cursor-pointer transition duration-200 shadow-md font-semibold">
          Book Now
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
