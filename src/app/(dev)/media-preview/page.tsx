import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { ShowcaseMockVariant } from "@/types/content";
import {
  FEATURE_BACKGROUNDS,
  FEATURE_SCENES,
  FeatureBackground,
  FeatureScene,
  type FeatureSceneId,
} from "@/components/dev/FeatureScenes";
import { MediaTour } from "@/components/dev/MediaTour";
import { TourShot } from "@/components/dev/TourShot";
import { ShowcaseMock } from "@/components/sections/product-showcase/ShowcaseMocks";

/**
 * DEVELOPMENT ONLY — renders artwork on its own so
 * `npm run media:placeholders` can screenshot / record it into /public.
 *
 *   /media-preview?variant=knowledge|builder|widget|conversations|analytics   showcase screens
 *   /media-preview?variant=tour                                               walkthrough video
 *   /media-preview?variant=tour-shot&id=knowledge|builder|…                  16:9 product-tour shots
 *   /media-preview?variant=feature-bg&id=0..3                                 feature card backgrounds
 *   /media-preview?variant=feature-scene&id=knowledge|builder|…              feature picture cards
 *
 * Returns 404 in production builds.
 */
export const metadata: Metadata = { robots: { index: false, follow: false } };

const MOCKS: ShowcaseMockVariant[] = ["knowledge", "builder", "widget", "conversations", "analytics"];

export default async function MediaPreviewPage({ searchParams }: PageProps<"/media-preview">) {
  if (process.env.NODE_ENV === "production") notFound();

  const { variant, id } = await searchParams;
  const v = typeof variant === "string" ? variant : "knowledge";
  const itemId = typeof id === "string" ? id : "";

  let content;
  if (v === "tour") {
    content = <MediaTour variants={MOCKS} />;
  } else if (v === "tour-shot" && MOCKS.includes(itemId as ShowcaseMockVariant)) {
    content = <TourShot variant={itemId as ShowcaseMockVariant} />;
  } else if (v === "feature-bg" && Number(itemId) < FEATURE_BACKGROUNDS) {
    content = <FeatureBackground index={Number(itemId)} />;
  } else if (v === "feature-scene" && FEATURE_SCENES.includes(itemId as FeatureSceneId)) {
    content = <FeatureScene id={itemId as FeatureSceneId} />;
  } else if (MOCKS.includes(v as ShowcaseMockVariant)) {
    content = (
      <div id="capture" className="w-[1200px] bg-surface-raised">
        <ShowcaseMock variant={v as ShowcaseMockVariant} />
      </div>
    );
  } else {
    content = <p className="p-8">Unknown variant “{v}”.</p>;
  }

  return <div className="min-h-screen bg-surface p-0">{content}</div>;
}
