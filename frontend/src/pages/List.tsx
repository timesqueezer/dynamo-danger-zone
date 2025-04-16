import React, { useEffect, useState } from "react";
import { AdventureListItem } from "../components/AdventureListItem";
import { Trip } from "../types/Trip";
import { LoadingSpinner } from "../components/LoadingSpinner";

export const List = () => {
  const [trips, setTrips] = useState<Trip[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTrips = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_BACKEND_API_URL}/api/destinations`);
        if (!res.ok) throw new Error("Fehler beim Laden der Trips");
        const data = await res.json();
        // Normalize danger to array if needed
        setTrips(
          data.map((trip: any, idx: number) => ({
            ...trip,
            id: idx.toString(),
            danger: Array.isArray(trip.danger) ? trip.danger : String(trip.danger).split(/, ?/),
            description: trip.description ?? trip.danger,
          }))
        );
      } catch (e: any) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };
    fetchTrips();
  }, []);

  if (loading) return <LoadingSpinner />;
  if (error) return <div className="text-red-600">{error}</div>;
  if (!loading && !error && trips.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20">
        <img src="/build/danger_zone_image.jpg" alt="No trips" className="w-32 h-32 opacity-60 mb-6" />
        <div className="text-xl text-gray-500 font-semibold mb-2">No trips found</div>
        <div className="text-gray-400">Check back later for more adventures!</div>
      </div>
    );
  }

  return (
    <div className=" p-6 gap-6">
      <div className="flex flex-col">
        {trips.map((trip) => (
          <AdventureListItem key={trip.id} {...trip} />
        ))}
      </div>
    </div>
  );
};
