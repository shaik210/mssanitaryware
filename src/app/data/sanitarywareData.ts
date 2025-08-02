// data/sanitaryData.ts

export const sanitarySeries = [
  { id: "commodesonepiece", name: "One Piece Commodes", img: "/images/sanitary/series/commodes.jpeg" },
  { id: "wallhungcommodes", name: "Wall Hung Commodes", img: "/images/sanitary/series/basins.jpeg" },
  { id: "desinercommodes", name: "Desiner Commodes", img: "/images/sanitary/series/basins.jpeg" },
  { id: "floormountcommodes", name: "Floor Mount Commodes", img: "/images/sanitary/series/urinals.jpeg" },
  { id: "tabletop", name: "Table Top Basins", img: "/images/sanitary/series/urinals.jpeg" },
  { id: "wallhung", name: "Wall Hung Basins", img: "/images/sanitary/series/urinals.jpeg" },
  { id: "onepiecebasins", name: "One Piece Basins", img: "/images/sanitary/series/urinals.jpeg" },
  { id: "basinstand", name: "Wash Basins With Padestral", img: "/images/sanitary/series/urinals.jpeg" },
  { id: "desinerbasins", name: "Desiner Basin", img: "/images/sanitary/series/urinals.jpeg" },
  { id: "pan", name: "Pan(WC) & Urinals", img: "/images/sanitary/series/urinals.jpeg" },
  { id: "sanitaryaccessories", name: "Accessories", img: "/images/sanitary/series/urinals.jpeg" },

];

export const sanitaryData: Record<string, { id: number; name: string; img: string; price: number; discount: number; description: string }[]> = {
  commodesonepiece: [
    { id: 1, name: "Pedestal Basin", img: "/images/sanitary/products/basin1.jpeg", price: 1200, discount: 10, description: "Elegant pedestal wash basin with a premium finish." },
    { id: 2, name: "Wall Mounted Basin", img: "/images/sanitary/products/basin2.jpeg", price: 1000, discount: 15, description: "Space-saving wall-mounted wash basin." },
  ],
  desinercommodes: [
    { id: 1, name: "Pedestal Basin", img: "/images/sanitary/products/basin1.jpeg", price: 1200, discount: 10, description: "Elegant pedestal wash basin with a premium finish." },
    { id: 2, name: "Wall Mounted Basin", img: "/images/sanitary/products/basin2.jpeg", price: 1000, discount: 15, description: "Space-saving wall-mounted wash basin." },
  ],
  wallhungcommodes: [
    { id: 1, name: "Pedestal Basin", img: "/images/sanitary/products/basin1.jpeg", price: 1200, discount: 10, description: "Elegant pedestal wash basin with a premium finish." },
    { id: 2, name: "Wall Mounted Basin", img: "/images/sanitary/products/basin2.jpeg", price: 1000, discount: 15, description: "Space-saving wall-mounted wash basin." },
  ],
  floormountcommodes: [
    { id: 1, name: "Pedestal Basin", img: "/images/sanitary/products/basin1.jpeg", price: 1200, discount: 10, description: "Elegant pedestal wash basin with a premium finish." },
    { id: 2, name: "Wall Mounted Basin", img: "/images/sanitary/products/basin2.jpeg", price: 1000, discount: 15, description: "Space-saving wall-mounted wash basin." },
  ],
  tabletop: [
    { id: 1, name: "Wall Hung Commode", img: "/images/sanitary/products/commode1.jpeg", price: 2500, discount: 10, description: "Stylish and compact wall-hung commode." },
    { id: 2, name: "One-Piece Commode", img: "/images/sanitary/products/commode2.jpeg", price: 3000, discount: 15, description: "Sleek one-piece commode with efficient flushing system." },
  ],
  wallhung: [
    { id: 1, name: "Wall Hung Commode", img: "/images/sanitary/products/commode1.jpeg", price: 2500, discount: 10, description: "Stylish and compact wall-hung commode." },
    { id: 2, name: "One-Piece Commode", img: "/images/sanitary/products/commode2.jpeg", price: 3000, discount: 15, description: "Sleek one-piece commode with efficient flushing system." },
  ],
  onepiecebasins: [
    { id: 1, name: "Wall Hung Commode", img: "/images/sanitary/products/commode1.jpeg", price: 2500, discount: 10, description: "Stylish and compact wall-hung commode." },
    { id: 2, name: "One-Piece Commode", img: "/images/sanitary/products/commode2.jpeg", price: 3000, discount: 15, description: "Sleek one-piece commode with efficient flushing system." },
  ],
  basinstand: [
    { id: 1, name: "Wall Hung Commode", img: "/images/sanitary/products/commode1.jpeg", price: 2500, discount: 10, description: "Stylish and compact wall-hung commode." },
    { id: 2, name: "One-Piece Commode", img: "/images/sanitary/products/commode2.jpeg", price: 3000, discount: 15, description: "Sleek one-piece commode with efficient flushing system." },
  ],
  desinerbasins: [
    { id: 1, name: "Wall Hung Commode", img: "/images/sanitary/products/commode1.jpeg", price: 2500, discount: 10, description: "Stylish and compact wall-hung commode." },
    { id: 2, name: "One-Piece Commode", img: "/images/sanitary/products/commode2.jpeg", price: 3000, discount: 15, description: "Sleek one-piece commode with efficient flushing system." },
  ],
  pan: [
    { id: 1, name: "Sensor Urinal", img: "/images/sanitary/products/urinal1.jpeg", price: 2000, discount: 10, description: "Modern sensor urinal with automatic flushing." },
  ],
  sanitaryaccessories: [
    { id: 1, name: "Sensor Urinal", img: "/images/sanitary/products/urinal1.jpeg", price: 2000, discount: 10, description: "Modern sensor urinal with automatic flushing." },
  ],
};