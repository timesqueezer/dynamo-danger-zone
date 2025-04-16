import React, { useEffect, useState } from "react";
import { AdventureListItem } from "../components/AdventureListItem";
import { Trip } from "../types/Trip";
import { LoadingSpinner } from "../components/LoadingSpinner";

const RISK_MIN = 1;
const RISK_MAX = 5;

export const List = () => {
  const [trips, setTrips] = useState<Trip[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [minRisk, setMinRisk] = useState(RISK_MIN);
  const [maxRisk, setMaxRisk] = useState(RISK_MAX);

  const filteredTrips = trips.filter(
    (trip) => trip.skull_rating >= minRisk && trip.skull_rating <= maxRisk
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

  // Handle slider changes
  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>, which: 'min' | 'max') => {
    const value = Number(e.target.value);
    if (which === 'min') {
      setMinRisk(Math.min(value, maxRisk));
    } else {
      setMaxRisk(Math.max(value, minRisk));
    }
  };

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
          <div className="flex items-center gap-4">
            <span className="text-gray-700 font-bold">{minRisk}</span>
            <input
              type="range"
              min={RISK_MIN}
              max={RISK_MAX}
              value={minRisk}
              onChange={e => handleSliderChange(e, 'min')}
              className="w-full accent-red-600"
              step={1}
              style={{ zIndex: 2 }}
            />
            <span className="text-gray-700 font-bold">{maxRisk}</span>
            <input
              type="range"
              min={RISK_MIN}
              max={RISK_MAX}
              value={maxRisk}
              onChange={e => handleSliderChange(e, 'max')}
              className="w-full accent-red-600"
              step={1}
              style={{ marginLeft: -32, zIndex: 1 }}
            />
          </div>
          <div className="flex justify-between text-xs text-gray-400 px-1 mt-1">
            {[1,2,3,4,5].map(n => <span key={n}>{n}</span>)}
          </div>
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
