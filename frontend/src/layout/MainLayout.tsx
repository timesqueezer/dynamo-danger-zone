import { Link } from "react-router";

interface IMainLayoutProps {
  children?: React.ReactNode;
}

export const MainLayout = (props: IMainLayoutProps) => {
  const { children } = props;
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 flex flex-col">
      {/* Header with logo and site name */}
      <header className="flex flex-col md:flex-row items-center justify-between p-8 bg-white shadow-sm rounded-b-2xl border-b border-gray-100 mb-6">
        <div className="flex items-center gap-4">
          <img src="/logo_black.webp" alt="Logo" className="w-16 h-16 rounded-lg shadow" />
          <div>
            <div className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">Dynamo Danger Zone</div>
            <div className="text-sm text-gray-400 font-medium mt-1">Extreme Abenteuer für Adrenalinjunkies</div>
          </div>
        </div>
        <nav className="flex gap-2 mt-6 md:mt-0">
          <Link
            className="px-5 py-2 rounded-lg font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 transition border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-red-300"
            to="/list"
          >
            Alle Trips
          </Link>
          <Link
            className="px-5 py-2 rounded-lg font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 transition border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-red-300"
            to="/contact"
          >
            Kontakt
          </Link>
        </nav>
      </header>
      {/* Main content area */}
      <main className="flex-1 w-full max-w-5xl mx-auto px-4 py-8">{children}</main>
    </div>
  );
};

export default MainLayout;
