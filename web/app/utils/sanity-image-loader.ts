// sanity-image-loader.ts
import type { ImageLoaderProps } from "next/image";

export default function sanityLoader({
  src,
  width,
  quality,
}: ImageLoaderProps) {
  // Leave non-Sanity images (e.g. /public assets) untouched
  if (!src.startsWith("https://cdn.sanity.io")) return src;

  const url = new URL(src);
  url.searchParams.set("w", String(width));
  url.searchParams.set("q", String(quality ?? 75));
  url.searchParams.set("auto", "format"); // serves WebP/AVIF when supported
  url.searchParams.set("fit", "max"); // never upscale
  return url.toString();
}
