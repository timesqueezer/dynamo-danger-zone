import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router";
import { getSkullRatingVisual } from "../helper";
import { Trip } from "../types/Trip";
import { LoadingSpinner } from "../components/LoadingSpinner";
import { DangerRating } from "../components/DangerRating";

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
    <div className="flex flex-col items-center justify-center bg-gradient-to-br from-gray-50 to-gray-200 min-h-[60vh] rounded-xl shadow p-8">
      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-2 text-center">
        Willkommen in der Danger Zone!
      </h1>
      <p className="mt-2 text-lg md:text-xl text-gray-500 text-center mb-6">
        Mach dich bereit für ein adrenalingeladenes Erlebnis!
      </p>
      <button
        className="mb-8 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition font-semibold shadow focus:outline-none focus:ring-2 focus:ring-red-300"
        onClick={() => navigate("/list")}
      >
        Alle Reisen anzeigen
      </button>
      <Link to={`/details/${id}`} className="w-full max-w-2xl border border-gray-200 rounded-2xl shadow-lg bg-white mb-5 cursor-pointer mt-5 transition hover:shadow-xl">
        <div className="p-4 mb-2 text-center bg-gradient-to-r from-red-600 to-red-800 text-white font-bold text-lg rounded-t-2xl">
          Von unseren Experten empfohlen
        </div>
        <div className="flex flex-col md:flex-row pt-4 items-center gap-6">
          <div className="relative mb-4 w-full md:w-1/3 rounded-xl overflow-hidden">
            <img
              src={image_url}
              alt="Danger Zone"
              className="w-full h-48 md:h-40 object-cover rounded-xl shadow"
            />
          </div>
          <div className="bg-gradient-to-br from-gray-800 to-gray-700 text-white p-6 mb-4 mx-0 md:mx-4 rounded-xl grow w-full">
            <h2 className="font-bold text-2xl mb-3 text-red-200">{name}</h2>
            <div className="mb-2 flex items-center gap-2">
              <span className="font-semibold text-gray-200">Rating:</span>
              <DangerRating rating={skull_rating} size={32} />
            </div>
            <div className="mb-2">
              <span className="font-semibold text-gray-200">Gefahr:</span>
              <span className="ml-2 text-gray-100">{description}</span>
            </div>
            <div className="mb-2">
              <span className="font-semibold text-gray-200">Warum hin?</span>
              <span className="ml-2 text-gray-100">{why_go}</span>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 p-4 justify-center">
          {danger.map((item: string) => (
            <span className="bg-red-700 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-sm hover:bg-red-800 transition" key={item}>
              {item}
            </span>
          ))}
        </div>
      </Link>
    </div>
  );
};
