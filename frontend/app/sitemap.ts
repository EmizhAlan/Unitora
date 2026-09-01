import type { MetadataRoute } from "next";
import { converters } from "@/lib/converters";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://unitora.online";

  const staticPages = [
    "",
    "/converters",
    "/calculators",
    "/about",
    "/privacy",
    "/contacts",
  ];

  return [
    ...staticPages.map((path) => ({
      url: `${baseUrl}${path}`,
      lastModified: new Date(),
    })),

    ...converters.map((converter) => ({
      url: `${baseUrl}/converters/${converter.slug}`,
      lastModified: new Date(),
    })),
  ];
}