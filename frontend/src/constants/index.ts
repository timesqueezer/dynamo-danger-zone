import image1 from "../assets/1.jpg";
import image10 from "../assets/10.jpg";
import image2 from "../assets/2.jpg";
import image3 from "../assets/3.jpg";
import image4 from "../assets/4.jpg";
import image5 from "../assets/5.jpeg";
import image6 from "../assets/6.jpeg";
import image7 from "../assets/7.jpeg";
import image8 from "../assets/8.jpg";
import image9 from "../assets/9.jpg";

export enum AppRoutes {
  HOME = "/",
  LIST = "/list",
}

export const Trips = [
  {
    id: "8e4cb7c3-ec95-4e59-a8f2-c7f6a0e2cc49",
    name: "Mount Nyiragongo",
    country: "Demokratische Republik Kongo",
    danger: ["Aktiver Vulkan", "flüssige Lava"],
    why_go: "Trekking zum Lavasee auf dem Gipfel",
    skull_rating: 5,
    image_url: image1,
    description:
      "Ein abenteuerlicher Aufstieg zu einem der wenigen Lavaseen der Welt – intensives Naturerlebnis garantiert.",
  },
  {
    id: "fe08c83e-9a1c-4a8f-b6d4-f839c2bbcc10",
    name: "Kakadu National Park",
    country: "Australien",
    danger: ["Salzwasserkrokodile", "Giftschlangen", "Quallen"],
    why_go: "Natur, Aboriginal-Kunst, Abenteuer",
    skull_rating: 3,
    image_url: image2,
    description:
      "Ein riesiges Naturreservat voller wilder Schönheit und kulturellem Erbe – aber nicht ohne Risiken.",
  },
  {
    id: "3b6741cc-2f07-4f8d-ae7e-3a934f7a6ad6",
    name: "Tornado Alley",
    country: "USA",
    danger: ["Tornados der Kategorie F5"],
    why_go: "Storm-Chasing-Touren",
    skull_rating: 4,
    image_url: image3,
    description:
      "Für Adrenalinjunkies: Verfolge gewaltige Stürme hautnah mit erfahrenen Storm-Chasern.",
  },
  {
    id: "58a1dc84-91eb-4e71-aee3-5e2b33cc1a76",
    name: "Death Road (Yungas Road)",
    country: "Bolivien",
    danger: ["600m Abgrund", "enge Schotterstraße"],
    why_go: "Mountainbike mit Ausblick",
    skull_rating: 5,
    image_url: image4,
    description:
      "Ein gefährlicher Nervenkitzel auf zwei Rädern – spektakuläre Ausblicke inklusive.",
  },
  {
    id: "e624c5c9-7334-4a6c-90a4-b2c0ab79c44a",
    name: "Gansbaai",
    country: "Südafrika",
    danger: ["Großer Weißer Hai"],
    why_go: "Käfigtauchen",
    skull_rating: 2,
    image_url: image5,
    description:
      "Komme den gefährlichsten Raubfischen der Welt näher – sicher im Käfig, aber nichts für schwache Nerven.",
  },
  {
    id: "7b0e6f4c-275b-4d84-9125-05c4db406cc5",
    name: "Danakil-Wüste",
    country: "Äthiopien",
    danger: ["Extreme Hitze", "Gase", "Unruhen"],
    why_go: "Surreale Vulkanlandschaften",
    skull_rating: 4,
    image_url: image6,
    description:
      "Eine der heißesten und unwirtlichsten Regionen der Erde – faszinierend, fremd, gefährlich.",
  },
  {
    id: "982a9c8b-87e8-4d7b-b5a0-72b94933685d",
    name: "Ilha da Queimada Grande (Snake Island)",
    country: "Brasilien",
    danger: ["Tödliche Schlangen überall"],
    why_go: "Verbotene Insel-Legende",
    skull_rating: 5,
    image_url: image7,
    description:
      "Verboten und tödlich – eine Insel voller Schlangen, die selbst Forschern das Fürchten lehrt.",
  },
  {
    id: "89d8a4d5-6d24-4951-a0a8-203fa8715764",
    name: "Cenoten-Tauchen",
    country: "Mexiko",
    danger: ["Höhlensysteme", "Orientierung"],
    why_go: "Kristallklares Wasser, Unterwelt",
    skull_rating: 3,
    image_url: image8,
    description:
      "Magisches Taucherlebnis in den geheimnisvollen Unterwasserhöhlen Yucatáns – Schönheit trifft Risiko.",
  },
  {
    id: "3c66efb8-d432-41f0-a7f2-68f3f349705c",
    name: "Ciudad Juárez",
    country: "Mexiko",
    danger: ["Kartelle", "hohe Kriminalität"],
    why_go: "Städtische Spannung, Kultur",
    skull_rating: 4,
    image_url: image9,
    description:
      "Ein Ort zwischen Kultur und Gefahr – intensive Einblicke in das Leben an der Grenze.",
  },
  {
    id: "b2dbce43-418f-4ae0-b8cc-71eb4e0ec31e",
    name: "Tschernobyl",
    country: "Ukraine",
    danger: ["Reststrahlung"],
    why_go: "Postapokalyptische Atmosphäre",
    skull_rating: 3,
    image_url: image10,
    description:
      "Eine Geisterstadt wie aus einem Film – faszinierend und bedrückend zugleich.",
  },
];
