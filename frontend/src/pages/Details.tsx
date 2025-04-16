import React, { useEffect, useState } from "react";
import { FullScreenViewer } from "react-iv-viewer";
import { useNavigate, useParams } from "react-router";
import { getSkullRatingVisual } from "../helper";
import { Trip } from "../types/Trip";
import { LoadingSpinner } from "../components/LoadingSpinner";

export const Details = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [trip, setTrip] = useState<Trip | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTrip = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_BACKEND_API_URL}/api/destinations/${id}`);
        if (!res.ok) throw new Error("Trip nicht gefunden");
        const data = await res.json();
        setTrip({
          ...data,
          id,
          danger: Array.isArray(data.danger) ? data.danger : String(data.danger).split(/, ?/),
          description: data.description ?? data.danger,
        });
      } catch (e: any) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };
    fetchTrip();
  }, [id]);

  if (loading) return <LoadingSpinner />;
  if (error || !trip) {
    return (
      <div className="text-center text-red-600 font-bold mt-10">
        {error ?? "Trip nicht gefunden."}
      </div>
    );
  }

  const {
    name,
    country,
    danger,
    description,
    why_go,
    skull_rating,
    image_url,
  } = trip;

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <button
        className="mb-6 text-sm text-gray-600 hover:underline"
        onClick={() => navigate(-1)}
      >
        ← Zurück zur Übersicht
      </button>

      <div className="text-center mb-6">
        <h1 className="text-3xl font-bold text-red-800">{name}</h1>
        <p className="text-sm text-gray-500">{country}</p>
      </div>

      <div className="relative h-72 rounded-lg overflow-hidden mb-6">
        <FullScreenViewer
          snapView
          img={image_url}
          defaultZoom={1}
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="mb-10">
        <h2 className="font-bold text-lg mb-2">Beschreibung</h2>
        <p className="text-sm text-gray-700">{description}</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
        <div>
          <h2 className="font-bold text-lg mb-2">Gefahren</h2>
          <p className="text-sm text-gray-700">{danger.join(", ")}</p>
        </div>

        <div>
          <h2 className="font-bold text-lg mb-2">Warum solltest du hin?</h2>
          <p className="text-sm text-gray-700">{why_go}</p>
        </div>

        <div>
          <h2 className="font-bold text-lg mb-2">Skull Rating</h2>
          <p className="text-2xl">{getSkullRatingVisual(skull_rating)}</p>
        </div>
      </div>

      <div className="mt-8 flex flex-wrap gap-3 justify-center">
        {danger.map((item: string) => (
          <span className="bg-red-700 text-white px-3 py-1 rounded-full text-sm font-semibold" key={item}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};
