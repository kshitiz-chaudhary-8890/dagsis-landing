"use client";

import { Play } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { siteConfig } from "@/config/site";
import { videoMeta } from "@/content";
import { Section } from "@/components/ui";
import styles from "./VideoSection.module.css";

const isFileVideo = (src: string) => /\.(mp4|webm|mov)(?:[?#].*)?$/i.test(src);

export function VideoSection() {
  const [playing, setPlaying] = useState(false);
  const src: string = siteConfig.links.productVideo;
  const hasVideo = src.length > 0;

  return (
    <Section id="video" aria-label="Introducing Dagsis" containerClassName="max-w-[1280px]" className={styles.section}>
      <div className={styles.frame}>
        <div className={styles.player}>
          {playing && hasVideo ? (
            isFileVideo(src) ? (
              <video src={src} controls autoPlay playsInline aria-label={videoMeta.caption} />
            ) : (
              <iframe src={src} title={videoMeta.caption} allow="autoplay; fullscreen; picture-in-picture" allowFullScreen />
            )
          ) : (
            <button type="button" disabled={!hasVideo} onClick={() => setPlaying(true)} className={styles.playOverlay} aria-label={hasVideo ? `Play ${videoMeta.caption}` : "Video coming soon"}>
              <Image src={siteConfig.links.productVideoPoster} alt="" fill sizes="(min-width: 1280px) 1200px, 95vw" className={styles.poster} />
              <span className={styles.scrim} aria-hidden="true" />
              <span className={styles.playCircle}><Play size={30} fill="currentColor" aria-hidden="true" /></span>
              <span className={styles.label}>{hasVideo ? videoMeta.watchLabel : "Video coming soon"}</span>
            </button>
          )}
        </div>
      </div>
    </Section>
  );
}
