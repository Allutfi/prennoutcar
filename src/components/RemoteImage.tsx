/**
 * Thin wrapper around next/image for external CDN images (lh3.googleusercontent.com).
 * These are already optimised by Google's CDN so we skip Next.js re-optimisation,
 * which avoids upstream timeout errors in the image proxy.
 */
import Image, { type ImageProps } from "next/image";

type RemoteImageProps = Omit<ImageProps, "unoptimized">;

export default function RemoteImage(props: RemoteImageProps) {
  return <Image {...props} unoptimized />;
}
