import { useNavigate } from "react-router";
import { getSkullRatingVisual } from "../helper";

interface IAdventureListItemProps {
  name: string;
  description: string;
  skull_rating: number;
  id: string;
  image_url: string;
}

export const AdventureListItem = (props: IAdventureListItemProps) => {
  const { name, description, skull_rating, id, image_url } = props;
  const navigate = useNavigate();

  return (
    <div
      className="border border-gray-300 rounded-lg shadow-md bg-white mb-5 cursor-pointer"
      onClick={() => navigate(`/details/${id}`)}
    >
      <div className="p-3 mb-4 text-center bg-red-800 text-white font-bold text-lg">
        We get you to the Danger Zone
      </div>

      <div className="flex flex-row">
        <div className="relative mb-4 w-1/4 rounded-lg">
          <img
            src={image_url}
            alt="Danger Zone"
            className="w-full h-full object-cover"
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
            <dt className="text-sm/6 font-medium font-semibold">Warum hin?</dt>
            <dd className="mt-1 text-sm/6 text-gray-100 sm:col-span-2 sm:mt-0">
              Trekking auf den Gipfel mit Blick in den brodelnden Lavasee.
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
        <span className="bg-red-700 text-white px-3 py-1 rounded-full text-sm font-semibold">
          Extreme Sports
        </span>
        <span className="bg-red-700 text-white px-3 py-1 rounded-full text-sm font-semibold">
          Mountain Climbing
        </span>
        <span className="bg-red-700 text-white px-3 py-1 rounded-full text-sm font-semibold">
          Shark Diving
        </span>
        <span className="bg-red-700 text-white px-3 py-1 rounded-full text-sm font-semibold">
          Volcano Trekking
        </span>
      </div>
    </div>
  );
};
