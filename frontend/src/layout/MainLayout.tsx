export const MainLayout = () => {
  return (
    <div className="max-w-6xl mx-auto border border-gray-800">
      {/* Header with logo and site name */}
      <header className="flex items-center p-4">
        <div className="p-4 w-32 text-center">
          <img src="/logo_black.webp" alt="Logo" className="w-full h-auto" />
        </div>
        <div className="p-4 ml-2 text-center text-2xl font-bold">
          Dynamo Danger Zone
        </div>
      </header>

      {/* Main content area */}
      <div className="flex p-4">
        {/* Left content section */}
        <div className="border border-gray-400 p-4 bg-gray-100">
          <div className="p-2 mb-4 text-center">
            We get you to the Danger Zone
          </div>

          <div className="mb-4">
            <img src="/danger_zone_image.jpg" alt="Danger Zone" className="w-full h-auto" />
          </div>

          <div className="p-4 mb-4">
            <div className="grid grid-cols-3">
              <dt className="text-sm/6 font-medium text-gray-900 font-semibold">Gefahr:</dt>
              <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">Einer der aktivsten Vulkane der Welt mit extrem flüssiger Lava.</dd>
            </div>
            <div className="grid grid-cols-3">
              <dt className="text-sm/6 font-medium text-gray-900 font-semibold">Warum hin?</dt>
              <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">Trekking auf den Gipfel mit Blick in den brodelnden Lavasee.</dd>
            </div>
            <div className="grid grid-cols-3">
              <dt className="text-sm/6 font-medium text-gray-900 font-semibold">Rating:</dt>
              <dd className="mt-1 text-sm/6 text-gray-700 sm:col-span-2 sm:mt-0">💀💀💀💀💀</dd>
            </div>
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
