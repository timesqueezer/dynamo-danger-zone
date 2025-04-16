import React, { useState } from "react";
import { Link } from "react-router";
import { DangerRating } from "./DangerRating";

interface IAdventureListItemProps {
  name: string;
  description: string;
  skull_rating: number;
  id: string;
  image_url: string;
  danger: string[];
  why_go: string;
  booked?: boolean;
}

export const AdventureListItem = (props: IAdventureListItemProps) => {
  const { name, description, skull_rating, id, image_url, danger, why_go } = props;
  const [imgError, setImgError] = useState(false);

  const computedImgUrl = image_url.startsWith("http") ? image_url : `${import.meta.env.VITE_BACKEND_API_URL}/${image_url}`;

  return (
    <Link
      className="border border-gray-200 rounded-xl shadow-md bg-white mb-6 cursor-pointer transition-transform duration-200 hover:scale-105 hover:shadow-xl group"
      to={`/details/${id}`}
    >
      <div className="flex flex-col md:flex-row pt-4">
        <div className="relative mb-4 w-full md:w-1/4 rounded-lg ml-0 md:ml-4 overflow-hidden">
          <img
            src={imgError ? '/build/danger_zone_image.jpg' : computedImgUrl}
            alt="Danger Zone"
            className="w-full h-48 md:h-full object-cover rounded-lg group-hover:brightness-90 transition duration-200"
            onError={() => setImgError(true)}
          />
        </div>
        <div className="bg-gradient-to-br from-gray-800 to-gray-700 text-white p-5 mb-4 mx-0 md:mx-4 rounded-lg grow">
          <h2 className="font-bold text-xl mb-2 group-hover:text-red-400 transition-colors duration-200">{name}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3">
            <dt className="text-sm/6 font-medium font-semibold">Gefahr:</dt>
            <dd className="mt-1 text-sm/6 text-gray-100 md:col-span-2 md:mt-0">
              {description}
            </dd>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3">
            <dt className="text-sm/6 font-medium font-semibold">Warum hin?</dt>
            <dd className="mt-1 text-sm/6 text-gray-100 md:col-span-2 md:mt-0">
              {why_go}
            </dd>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3">
            <dt className="text-sm/6 font-medium font-semibold">Rating:</dt>
            <dd className="mt-1 text-sm/6 text-gray-100 md:col-span-2 md:mt-0">
              <DangerRating rating={skull_rating} />
            </dd>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-2 p-4 justify-center">
        {danger.map((item) => (
          <span className="bg-red-700 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-sm hover:bg-red-800 transition" key={item}>
            {item}
          </span>
        ))}
        {props.booked && (
          <span className="ml-2 px-3 py-1 rounded-full text-xs font-bold bg-gray-300 text-gray-700 border border-gray-400 shadow-sm">Gebucht</span>
        )}
      </div>
    </Link>
  );
};
