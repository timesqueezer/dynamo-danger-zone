import React, { useEffect, useState } from "react";
import { AdventureListItem } from "../components/AdventureListItem";
import { Trip } from "../types/Trip";
import { LoadingSpinner } from "../components/LoadingSpinner";
import { RangeSlider } from "../components/RangeSlider";

const RISK_MIN = 1;
const RISK_MAX = 5;

export const List = () => {
  const [trips, setTrips] = useState<Trip[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [riskRange, setRiskRange] = useState<[number, number]>([RISK_MIN, RISK_MAX]);

  const filteredTrips = trips.filter(
    (trip) => trip.skull_rating >= riskRange[0] && trip.skull_rating <= riskRange[1]
  );

  useEffect(() => {
    const fetchTrips = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_BACKEND_API_URL}/api/destinations`);
        if (!res.ok) throw new Error("Fehler beim Laden der Trips");
        const data = await res.json();
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
        <img src="/build/danger_zone_image.jpg" alt="Keine Reisen" className="w-32 h-32 opacity-60 mb-6" />
        <div className="text-xl text-gray-500 font-semibold mb-2">Keine Reisen gefunden</div>
        <div className="text-gray-400">Schau später nochmal vorbei für neue Abenteuer!</div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-3xl mx-auto px-2 md:px-0">
      <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8 text-center">Alle Danger Zone Reisen</h1>
      <div className="flex flex-col items-center mb-8">
        <div className="w-full max-w-md flex flex-col gap-2">
          <label className="font-semibold text-gray-700 text-center mb-2">Gefahrenlevel-Bereich</label>
          <RangeSlider
            min={RISK_MIN}
            max={RISK_MAX}
            value={riskRange}
            onChange={setRiskRange}
          />
        </div>
      </div>
      <div className="flex flex-col gap-6">
        {filteredTrips.length === 0 ? (
          <div className="text-center text-gray-500">Keine Reisen im gewählten Gefahrenbereich gefunden.</div>
        ) : (
          filteredTrips.map((trip) => (
            <AdventureListItem key={trip.id} {...trip} booked={trip.booked} />
          ))
        )}
      </div>
    </div>
  );
};
