import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { url: "/", priority: 1.0, changeFrequency: "weekly" as const },
    { url: "/kurumsal", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/basari-modelimiz", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/dijital-takip", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/rehberlik", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/subelerimiz", priority: 0.8, changeFrequency: "weekly" as const },
    { url: "/iletisim", priority: 0.7, changeFrequency: "yearly" as const },
  ];

  return routes.map(({ url, priority, changeFrequency }) => ({
    url: `${site.url}${url === "/" ? "" : url}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
