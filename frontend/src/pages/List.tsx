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
    </div>
  );
};
