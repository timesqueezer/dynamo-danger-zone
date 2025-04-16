import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router";
import { getSkullRatingVisual } from "../helper";
import { Trip } from "../types/Trip";
import { LoadingSpinner } from "../components/LoadingSpinner";

export const Home = () => {
  const [featuredTrip, setFeaturedTrip] = useState<Trip | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTrips = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_BACKEND_API_URL}/api/destinations`);
        if (!res.ok) throw new Error("Fehler beim Laden der Trips");
        const data = await res.json();
        // Use the last trip as featured (like before)
        const idx = data.length - 1;
        const trip = data[idx];
        setFeaturedTrip({
          ...trip,
          id: idx.toString(),
          danger: Array.isArray(trip.danger) ? trip.danger : String(trip.danger).split(/, ?/),
          description: trip.description ?? trip.danger,
        });
      } catch (e: any) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };
    fetchTrips();
  }, []);

  if (loading) return <LoadingSpinner />;
  if (error || !featuredTrip) return <div className="text-red-600">{error ?? "Trip nicht gefunden."}</div>;

  const { id, name, description, skull_rating, image_url, danger, why_go } = featuredTrip;

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

      <Link to={`/details/${id}`} className="border border-gray-300 rounded-lg shadow-md bg-white mb-5 cursor-pointer mt-5">
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
          {danger.map((item: string) => (
            <span className="bg-red-700 text-white px-3 py-1 rounded-full text-sm font-semibold" key={item}>
              {item}
            </span>
          ))}
        </div>
      </Link>
    </div>
  );
};
