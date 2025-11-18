import type { MetadataRoute } from "next";

const baseUrl = "https://www.poheating.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return [
    {
      url: `${baseUrl}/en`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/pl`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 1,
    },

    // About
    {
      url: `${baseUrl}/en/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/pl/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    // Boiler Services
    {
      url: `${baseUrl}/en/boiler-services`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/pl/boiler-services`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    // Radiators
    {
      url: `${baseUrl}/en/radiators-installations-n-repairs`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/pl/radiators-installations-n-repairs`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    // Gas Appliances
    {
      url: `${baseUrl}/en/gas-appliances-installations`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/pl/gas-appliances-installations`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    // Heating Upgrades
    {
      url: `${baseUrl}/en/heating-upgrades-n-smart-controls`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/pl/heating-upgrades-n-smart-controls`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    // Cookies Policy
    {
      url: `${baseUrl}/en/cookies-policy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/pl/cookies-policy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.5,
    },

    // Privacy Policy
    {
      url: `${baseUrl}/en/privacy-policy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/pl/privacy-policy`,
      lastModified: now,
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ];
}
