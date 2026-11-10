import { existsSync } from "node:fs";
import { join } from "node:path";
import Image from "next/image";

export function ImagePlaceholder({
  fileName,
  alt,
  className = "",
  src,
  width = 1000,
  height = 1250,
  priority = false,
}: {
  fileName: string;
  alt: string;
  className?: string;
  src: string;
  width?: number;
  height?: number;
  priority?: boolean;
}) {
  const imageExists = existsSync(join(process.cwd(), "public", src.replace(/^\/+/, "")));

  return (
    <div className={`image-placeholder ${className}`}>
      {imageExists ? (
        <Image src={src} alt={alt} width={width} height={height} priority={priority} sizes={priority ? "100vw" : "(max-width: 860px) 50vw, 33vw"} className="placeholder-photo" />
      ) : (
        <div className="placeholder-art" role="img" aria-label={`${alt}. ${fileName}`}>
          <span className="placeholder-route" aria-hidden="true" />
          <span className="placeholder-name">{fileName}</span>
        </div>
      )}
    </div>
  );
}