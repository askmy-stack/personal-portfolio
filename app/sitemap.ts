import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://abhinaysai.dev";

  return [
    {
      url: baseUrl,
      lastModified: new Date("2026-03-22"),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/projects/byu-flagellar-motors`,
      lastModified: new Date("2025-04-30"),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/projects/nasa-landslide`,
      lastModified: new Date("2024-12-15"),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/projects/eeg-seizure-detection`,
      lastModified: new Date("2026-03-22"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];
}
