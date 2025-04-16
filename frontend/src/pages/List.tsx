import React, { useEffect, useState } from "react";
import { AdventureListItem } from "../components/AdventureListItem";

export const List = () => {
  const [trips, setTrips] = useState<any[]>([]);
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
            description: trip.description || trip.danger,
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

  if (loading) return <div>Lade Trips...</div>;
  if (error) return <div className="text-red-600">{error}</div>;

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
