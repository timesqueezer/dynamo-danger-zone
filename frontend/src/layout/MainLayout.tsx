import { useNavigate } from "react-router";

interface IMainLayoutProps {
  children?: React.ReactNode;
}

export const MainLayout = (props: IMainLayoutProps) => {
  const { children } = props;
  const navigate = useNavigate();
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

      {/* Navigation bar */}
      <div className="p-4 text-center mt-2 flex flex-wrap justify-center gap-4 bg-gradient-to-r from-red-700 to-red-900 rounded-b-lg border-t border-gray-300 shadow-md">
        {/* Navigation links */}
        <button
          className="bg-red-700 hover:bg-red-800 text-white px-6 py-3 rounded-md cursor-pointer transition duration-200 shadow-md font-semibold focus:outline-none focus:ring-2 focus:ring-red-400"
          onClick={() => navigate("/list")}
        >
          All Trips
        </button>
        <button className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-md cursor-pointer transition duration-200 shadow-md font-semibold focus:outline-none focus:ring-2 focus:ring-gray-400">
          Sorted by Dangerousness
        </button>
        <button className="bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-md cursor-pointer transition duration-200 shadow-md font-semibold focus:outline-none focus:ring-2 focus:ring-gray-400">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default MainLayout;
