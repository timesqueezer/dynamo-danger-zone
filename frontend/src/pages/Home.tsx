import { useNavigate } from "react-router";
import { Trips } from "../constants";
import { getSkullRatingVisual } from "../helper";

export const Home = () => {
  const featuredTrip = Trips.find(
    (trip) => trip.id === "b2dbce43-418f-4ae0-b8cc-71eb4e0ec31e"
  );
  const { id, name, description, skull_rating, image_url, danger, why_go } =
    featuredTrip || { skull_rating: 0, danger: [] };
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center bg-gray-50">
      <h1 className="text-4xl font-bold text-gray-800">
        Welcome to the Danger Zone!
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        Get ready for an adrenaline-pumping experience!
      </p>
      <div></div>
      <button
        className="mt-6 px-4 py-2 bg-red-700 text-white rounded-md hover:bg-red-800 transition duration-200 cursor-pointer"
        onClick={() => navigate("/list")}
      >
        Alle Trips anzeigen
      </button>

      <div
        className="border border-gray-300 rounded-lg shadow-md bg-white mb-5 cursor-pointer mt-5"
        onClick={() => navigate(`/details/${id}`)}
      >
        <div className="p-3 mb-4 text-center bg-red-800 text-white font-bold text-lg">
          Von unseren Experten empfohlen
        </div>

        <div className="flex flex-row pt-4">
          <div className="relative mb-4 w-1/4 rounded-lg ml-4">
            <img
              src={image_url}
              alt="Danger Zone"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          <div className="bg-gray-800 text-white p-5 mb-4 mx-4 rounded-lg grow">
            <h2 className="font-bold text-xl mb-2">{name}</h2>

            <div className="grid grid-cols-3">
              <dt className="text-sm/6 font-medium font-semibold">Gefahr:</dt>
              <dd className="mt-1 text-sm/6 text-gray-100 sm:col-span-2 sm:mt-0">
                {description}
              </dd>
            </div>
            <div className="grid grid-cols-3">
              <dt className="text-sm/6 font-medium font-semibold">
                Warum hin?
              </dt>
              <dd className="mt-1 text-sm/6 text-gray-100 sm:col-span-2 sm:mt-0">
                {why_go}
              </dd>
            </div>
            <div className="grid grid-cols-3">
              <dt className="text-sm/6 font-medium font-semibold">Rating:</dt>
              <dd className="mt-1 text-sm/6 text-gray-100 sm:col-span-2 sm:mt-0">
                {getSkullRatingVisual(skull_rating)}
              </dd>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 p-4 justify-center">
          {danger.map((item, index) => (
            <span className="bg-red-700 text-white px-3 py-1 rounded-full text-sm font-semibold">
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};
