interface IMainLayoutProps {
  children?: React.ReactNode;
}

export const MainLayout = (props: IMainLayoutProps) => {
  const { children } = props;
  return (
    <div className="max-w-6xl mx-auto bg-gray-50">
      {/* Header with logo and site name */}
      <header className="flex items-center p-6 bg-gradient-to-r from-red-700 to-red-900 text-white rounded-t-lg">
        <div className="p-3 w-28 bg-white rounded-lg shadow-md">
          <img src="/logo_black.webp" alt="Logo" className="w-full h-auto" />
        </div>
        <div className="p-4 ml-4 text-3xl font-extrabold tracking-wide">
          Dynamo Danger Zone
          <div className="text-sm font-normal mt-1 text-red-200">
            Extreme adventures for thrill seekers
          </div>
        </div>
      </header>

      {/* Main content area */}
      <div className=" p-6 gap-6">{children}</div>
      {/* <div className=" p-6 gap-6">
        <div className="flex flex-col">
          <AdventureListItem />
          <AdventureListItem />
          <AdventureListItem />
          <AdventureListItem />
        </div>
        <div className="w-2/5 border border-gray-300 rounded-lg shadow-md bg-white p-4">
        </div>
      </div> */}

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
