import React, { useEffect, useState } from "react";
import { FullScreenViewer } from "react-iv-viewer";
import { useNavigate, useParams } from "react-router";
import { getSkullRatingVisual } from "../helper";
import { Trip } from "../types/Trip";
import { LoadingSpinner } from "../components/LoadingSpinner";
import { DangerRating } from "../components/DangerRating";

export const Details = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [trip, setTrip] = useState<Trip | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [bookingError, setBookingError] = useState<string | null>(null);
  const [bookingSuccess, setBookingSuccess] = useState(false);

  useEffect(() => {
    const fetchTrip = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_BACKEND_API_URL}/api/destinations/${id}`);
        if (!res.ok) throw new Error("Reise nicht gefunden");
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
  }, [id, bookingSuccess]);

  if (loading) return <LoadingSpinner />;
  if (error || !trip) {
    return (
      <div className="text-center text-red-600 font-bold mt-10">
        {error ?? "Reise nicht gefunden."}
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

  const handleBook = async () => {
    setBookingError(null);
    setBookingSuccess(false);
    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_API_URL}/api/destinations/${id}/book`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.message || "Booking failed");
      }
      setBookingSuccess(true);
    } catch (e: any) {
      setBookingError(e.message);
    }
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 p-8 bg-white rounded-2xl shadow-lg">
      <button
        className="mb-8 text-sm text-gray-500 hover:underline focus:outline-none"
        onClick={() => navigate(-1)}
      >
        ← Zurück zur Übersicht
      </button>
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-1">{name}</h1>
        <p className="text-base text-gray-400">{country}</p>
      </div>
      <div className="relative h-64 md:h-80 rounded-xl overflow-hidden mb-8 shadow">
        <FullScreenViewer
          snapView
          img={image_url}
          defaultZoom={1}
          className="w-full h-full object-cover object-center"
        />
      </div>
      <div className="mb-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="font-bold text-lg mb-2 text-gray-800">Gefahren</h2>
          <p className="text-sm text-gray-600">{danger.join(", ")}</p>
        </div>
        <div>
          <h2 className="font-bold text-lg mb-2 text-gray-800">Warum solltest du hin?</h2>
          <p className="text-sm text-gray-600">{why_go}</p>
        </div>
        <div className="flex flex-col items-center">
          <h2 className="font-bold text-lg mb-2 text-gray-800">Gefahrenlevel</h2>
          <DangerRating rating={skull_rating} size={36} />
        </div>
      </div>
      <div className="mb-6 flex justify-center">
        {trip.booked ? (
          <button className="px-6 py-3 rounded-lg bg-gray-300 text-gray-500 font-semibold cursor-not-allowed" disabled>
            Bereits gebucht
          </button>
        ) : (
          <button
            className="px-6 py-3 rounded-lg bg-red-600 text-white font-semibold shadow hover:bg-red-700 transition focus:outline-none focus:ring-2 focus:ring-red-300"
            onClick={handleBook}
          >
            Jetzt buchen
          </button>
        )}
      </div>
      {bookingError && (
        <div className="text-center text-red-600 font-semibold mb-4">{bookingError}</div>
      )}
      {bookingSuccess && (
        <div className="text-center text-green-600 font-semibold mb-4">Reise erfolgreich gebucht!</div>
      )}
      <div className="mt-8 flex flex-wrap gap-3 justify-center">
        {danger.map((item: string) => (
          <span className="bg-red-700 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-sm hover:bg-red-800 transition" key={item}>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};
