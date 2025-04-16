// server.js
const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());
app.use('/images', express.static(path.join(__dirname, 'images')));

// Load data
let destinations = [];
try {
  const rawData = fs.readFileSync(path.join(__dirname, 'data.json'), 'utf8');
  destinations = JSON.parse(rawData);
} catch (err) {
  console.error('Error loading data:', err);
  // Initialize with sample data if file doesn't exist
  destinations = [
    {
      "name": "Mount Nyiragongo",
      "country": "Demokratische Republik Kongo",
      "danger": "Aktiver Vulkan mit flüssiger Lava",
      "why_go": "Trekking zum Lavasee auf dem Gipfel",
      "skull_rating": 5,
      "image_url": "images/1.jpg"
    },
    {
      "name": "Kakadu National Park",
      "country": "Australien",
      "danger": "Salzwasserkrokodile, Giftschlangen, Quallen",
      "why_go": "Natur, Aboriginal-Kunst, Abenteuer",
      "skull_rating": 3,
      "image_url": "images/2.jpg"
    },
    {
      "name": "Tornado Alley",
      "country": "USA",
      "danger": "Tornados der Kategorie F5",
      "why_go": "Storm-Chasing-Touren",
      "skull_rating": 4,
      "image_url": "images/3.jpg"
    },
    {
      "name": "Death Road (Yungas Road)",
      "country": "Bolivien",
      "danger": "600m Abgrund, enge Schotterstraße",
      "why_go": "Mountainbike mit Ausblick",
      "skull_rating": 5,
      "image_url": "images/4.jpg"
    },
    {
      "name": "Gansbaai",
      "country": "Südafrika",
      "danger": "Großer Weißer Hai",
      "why_go": "Käfigtauchen",
      "skull_rating": 2,
      "image_url": "images/5.jpeg"
    },
    {
      "name": "Danakil-Wüste",
      "country": "Äthiopien",
      "danger": "Extreme Hitze, Gase, Unruhen",
      "why_go": "Surreale Vulkanlandschaften",
      "skull_rating": 4,
      "image_url": "images/6.jpeg"
    },
    {
      "name": "Ilha da Queimada Grande (Snake Island)",
      "country": "Brasilien",
      "danger": "Tödliche Schlangen überall",
      "why_go": "Verbotene Insel-Legende",
      "skull_rating": 5,
      "image_url": "images/7.jpeg"
    },
    {
      "name": "Cenoten-Tauchen",
      "country": "Mexiko",
      "danger": "Höhlensysteme, Orientierung",
      "why_go": "Kristallklares Wasser, Unterwelt",
      "skull_rating": 3,
      "image_url": "images/8.jpg"
    },
    {
      "name": "Ciudad Juárez",
      "country": "Mexiko",
      "danger": "Kartelle, hohe Kriminalität",
      "why_go": "Städtische Spannung, Kultur",
      "skull_rating": 4,
      "image_url": "images/9.jpg"
    },
    {
      "name": "Tschernobyl",
      "country": "Ukraine",
      "danger": "Reststrahlung",
      "why_go": "Postapokalyptische Atmosphäre",
      "skull_rating": 3,
      "image_url": "images/10.jpg"
    }
  ];

  // Save the sample data to a file
  fs.writeFileSync(path.join(__dirname, 'data.json'), JSON.stringify(destinations, null, 2));
}

// Helper function to save data to file
const saveData = () => {
  fs.writeFileSync(path.join(__dirname, 'data.json'), JSON.stringify(destinations, null, 2));
};

// Store contact requests in memory and in a file
const CONTACT_FILE = path.join(__dirname, 'contact_requests.json');
let contactRequests = [];
try {
  if (fs.existsSync(CONTACT_FILE)) {
    contactRequests = JSON.parse(fs.readFileSync(CONTACT_FILE, 'utf8'));
  }
} catch (err) {
  contactRequests = [];
}

function saveContactRequests() {
  fs.writeFileSync(CONTACT_FILE, JSON.stringify(contactRequests, null, 2));
}

// Routes

// GET all destinations
app.get('/api/destinations', (req, res) => {
  if (req.query.sortBy) {
    const sortBy = req.query.sortBy;
    const order = req.query.order === 'desc' ? -1 : 1;

    const destinationsCopy = [...destinations];

    destinationsCopy.sort((a, b) => {
      if (a[sortBy] < b[sortBy]) return -1 * order;
      if (a[sortBy] > b[sortBy]) return 1 * order;
      return 0;
    });
    return res.json(destinationsCopy);
  }
  res.json(destinations);
});

// GET destination by ID (index)
app.get('/api/destinations/:id', (req, res) => {
  const id = parseInt(req.params.id);
  if (isNaN(id) || id < 0 || id >= destinations.length) {
    return res.status(404).json({ message: 'Destination not found' });
  }
  res.json(destinations[id]);
});

// POST new destination
app.post('/api/destinations', (req, res) => {
  const newDestination = req.body;

  // Basic validation
  if (!newDestination.name || !newDestination.country || !newDestination.danger ||
      !newDestination.why_go || !newDestination.skull_rating) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  destinations.push(newDestination);
  saveData();
  res.status(201).json(newDestination);
});

// PUT update destination
app.put('/api/destinations/:id', (req, res) => {
  const id = parseInt(req.params.id);
  if (isNaN(id) || id < 0 || id >= destinations.length) {
    return res.status(404).json({ message: 'Destination not found' });
  }

  const updatedDestination = req.body;

  // Basic validation
  if (!updatedDestination.name || !updatedDestination.country || !updatedDestination.danger ||
      !updatedDestination.why_go || !updatedDestination.skull_rating) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  destinations[id] = updatedDestination;
  saveData();
  res.json(updatedDestination);
});

// DELETE destination
app.delete('/api/destinations/:id', (req, res) => {
  const id = parseInt(req.params.id);
  if (isNaN(id) || id < 0 || id >= destinations.length) {
    return res.status(404).json({ message: 'Destination not found' });
  }

  const deletedDestination = destinations[id];
  destinations.splice(id, 1);
  saveData();
  res.json(deletedDestination);
});

// BOOK a destination
app.post('/api/destinations/:id/book', (req, res) => {
  const id = parseInt(req.params.id);
  if (isNaN(id) || id < 0 || id >= destinations.length) {
    return res.status(404).json({ message: 'Destination not found' });
  }
  if (destinations[id].booked) {
    return res.status(400).json({ message: 'This trip is already booked.' });
  }
  destinations[id].booked = true;
  saveData();
  res.json({ message: 'Trip successfully booked!' });
});

// POST contact request
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Name, E-Mail und Nachricht sind erforderlich.' });
  }
  const entry = {
    name,
    email,
    message,
    date: new Date().toISOString(),
  };
  contactRequests.push(entry);
  saveContactRequests();
  res.status(201).json({ message: 'Kontaktanfrage gespeichert.' });
});

// GET all contact requests
app.get('/api/contact', (req, res) => {
  res.json(contactRequests);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
