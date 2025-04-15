import { AdventureListItem } from "../components/AdventureListItem";
import { Trips } from "../constants";

export const List = () => {
  return (
    <div className=" p-6 gap-6">
      <div className="flex flex-col">
        {Trips.map((trip) => (
          <AdventureListItem {...trip} />
        ))}
      </div>
      <div className="w-2/5 border border-gray-300 rounded-lg shadow-md bg-white p-4"></div>
    </div>
  );
};
