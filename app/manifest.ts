import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "MOS Detailing",
    short_name: "MOS Detailing",
    description: "Premium Car Detailing in Yerevan",
    start_url: "/",
    display: "standalone",
    background_color: "#0a0a0a",
    theme_color: "#e63946",
    icons: [
      {
        src: "/icon.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
