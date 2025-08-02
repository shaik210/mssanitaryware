// data/faucetData.ts

export const faucetSeries = [
  { id: "royal", name: "Royal Series", img: "/images/faucets/series/royalseries.jpeg" },
  { id: "axe", name: "Axe Series", img: "/images/faucets/series/axeseries.jpeg" },
  { id: "galaxy", name: "Galaxy Series", img: "/images/faucets/series/galaxyseries.jpeg" },
  { id: "aqua", name: "Aqua Series", img: "/images/faucets/series/aquaseries.jpeg" },
  { id: "nexa", name: "Nexa Series", img: "/images/faucets/series/nexaseries.jpeg" },
  { id: "flora", name: "Flora Series", img: "/images/faucets/series/floraseries.jpeg" },
];


export const seriesData: Record<string, { id: number; name: string; img: string; price: number; discount: number; description: string }[]> = {
  royal: [
    { id: 1, name: "Pillar Cock", img: "/images/faucets/products/swan4.jpeg", price: 500, discount: 10, description: "A high-quality pillar cock faucet with a sleek design." },
    { id: 2, name: "Bib Cock", img: "/images/faucets/products/swan6.jpeg", price: 600, discount: 15, description: "Durable and elegant bib cock for modern bathrooms." },
    { id: 3, name: "Swan Neck", img: "/images/faucets/products/swanpc.jpeg", price: 800, discount: 5, description: "Stylish swan neck faucet with a smooth water flow." },
  ],
  axe: [
    { id: 1, name: "Stop Cock", img: "/images/faucets/products/swanpc2.jpeg", price: 700, discount: 20, description: "Reliable stop cock for controlling water flow efficiently." },
    { id: 2, name: "Angular Cock", img: "/images/faucets/products/swanpc3.jpeg", price: 900, discount: 10, description: "Sleek and modern angular cock for contemporary interiors." },
  ],
  galaxy: [
    { id: 1, name: "Stop Cock", img: "/images/faucets/products/swanpc2.jpeg", price: 700, discount: 20, description: "Reliable stop cock for controlling water flow efficiently." },
    { id: 2, name: "Stop Cock", img: "/images/faucets/products/swanpc5.jpeg", price: 700, discount: 20, description: "Reliable stop cock for controlling water flow efficiently." },
  ],

  aqua: [
    { id: 1, name: "Stop Cock", img: "/images/faucets/products/swanpc2.jpeg", price: 700, discount: 20, description: "Reliable stop cock for controlling water flow efficiently." },
    { id: 2, name: "Stop Cock", img: "/images/faucets/products/swanpc5.jpeg", price: 700, discount: 20, description: "Reliable stop cock for controlling water flow efficiently." },
  ],

  nexa: [
    { id: 1, name: "Stop Cock", img: "/images/faucets/products/swanpc2.jpeg", price: 700, discount: 20, description: "Reliable stop cock for controlling water flow efficiently." },
    { id: 2, name: "Stop Cock", img: "/images/faucets/products/swanpc5.jpeg", price: 700, discount: 20, description: "Reliable stop cock for controlling water flow efficiently." },
  ],
  flora: [
    { id: 1, name: "Stop Cock", img: "/images/faucets/products/swanpc2.jpeg", price: 700, discount: 20, description: "Reliable stop cock for controlling water flow efficiently." },
    { id: 2, name: "Stop Cock", img: "/images/faucets/products/swanpc5.jpeg", price: 700, discount: 20, description: "Reliable stop cock for controlling water flow efficiently." },
    { id: 1, name: "Stop Cock", img: "/images/faucets/products/swanpc2.jpeg", price: 700, discount: 20, description: "Reliable stop cock for controlling water flow efficiently." },

  ]
};






