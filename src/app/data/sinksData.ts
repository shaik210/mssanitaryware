export const sinkSeries = [
  { id: "imported", name: "Imported & Quartz Kitchen Sinks", img: "/images/sinks/series/sinkseriesimported.jpg" },
  { id: "regular", name: "Regular Sinks", img: "/images/sinks/series/sinksregular.jpg" },
];

export const sinkData : Record<string, { id: number; name: string; img: string; price: number; discount: number; description: string }[]> = {
  imported:[
    { id: 1, name: "Rose Gold", img: "/images/sinks/products/SNK1.jpg", price: 2500, discount: 10, description: "Durable stainless steel kitchen sink." },
    { id: 2, name: "Nano Gold", img: "/images/sinks/products/SNK2.jpg", price: 2500, discount: 10, description: "Durable stainless steel kitchen sink." },
    { id: 3, name: "Nano Black", img: "/images/sinks/products/SNK3.jpg", price: 2500, discount: 10, description: "Durable stainless steel kitchen sink." },
    { id: 4, name: "30 x 18 Switch", img: "/images/sinks/products/SNK4.jpg", price: 2500, discount: 10, description: "Durable stainless steel kitchen sink." },
    { id: 5, name: "30 x 18 RO", img: "/images/sinks/products/SNK5.jpg", price: 2500, discount: 10, description: "Durable stainless steel kitchen sink." },
    { id: 6, name: "Quartz Sink", img: "/images/sinks/products/SNK6.jpg", price: 2500, discount: 10, description: "Durable stainless steel kitchen sink." },
    { id: 7, name: "Mirror", img: "/images/sinks/products/SNK7.jpg", price: 2500, discount: 10, description: "Durable stainless steel kitchen sink." },
  ],
  
};
