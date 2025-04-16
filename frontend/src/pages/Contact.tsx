import React, { useState, useEffect } from "react";

export const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [requests, setRequests] = useState<any[]>([]);
  const [loadingRequests, setLoadingRequests] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setError("Bitte alle Felder ausfüllen.");
      return;
    }
    setError(null);
    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.message || "Fehler beim Senden der Anfrage.");
      }
      setSubmitted(true);
      setForm({ name: "", email: "", message: "" });
      fetchRequests();
    } catch (e: any) {
      setError(e.message);
    }
  };

  const fetchRequests = async () => {
    setLoadingRequests(true);
    try {
      const res = await fetch(`${import.meta.env.VITE_BACKEND_API_URL}/api/contact`);
      const data = await res.json();
      setRequests(data.reverse());
    } catch {
      setRequests([]);
    } finally {
      setLoadingRequests(false);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  return (
    <div className="max-w-lg mx-auto bg-white rounded-xl shadow p-8 mt-10">
      <h2 className="text-2xl font-bold mb-6 text-gray-900">Kontakt</h2>
      {submitted && (
        <div className="mb-6 text-green-700 font-semibold">Vielen Dank! Deine Nachricht wurde übermittelt.</div>
      )}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <label htmlFor="name" className="block text-gray-700 font-semibold mb-1">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-gray-700 font-semibold mb-1">E-Mail</label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300"
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-gray-700 font-semibold mb-1">Nachricht</label>
          <textarea
            id="message"
            name="message"
            value={form.message}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-300 min-h-[100px]"
            required
          />
        </div>
        {error && <div className="text-red-600 text-sm">{error}</div>}
        <button
          type="submit"
          className="mt-2 px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition font-semibold shadow focus:outline-none focus:ring-2 focus:ring-red-300"
        >
          Nachricht senden
        </button>
      </form>
      <div className="mt-10">
        <h3 className="text-lg font-bold mb-2 text-gray-900">Debug: Kontaktanfragen</h3>
        {loadingRequests ? (
          <div className="text-gray-500">Lädt...</div>
        ) : requests.length === 0 ? (
          <div className="text-gray-400">Keine Anfragen vorhanden.</div>
        ) : (
          <ul className="divide-y divide-gray-200 max-h-64 overflow-y-auto">
            {requests.map((req, idx) => (
              <li key={idx} className="py-2 text-sm">
                <div><span className="font-semibold">Name:</span> {req.name}</div>
                <div><span className="font-semibold">E-Mail:</span> {req.email}</div>
                <div><span className="font-semibold">Nachricht:</span> {req.message}</div>
                <div className="text-xs text-gray-400">{new Date(req.date).toLocaleString()}</div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
