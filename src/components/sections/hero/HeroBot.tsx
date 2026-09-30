import { InteractiveDemo } from "@/components/sections/interactive-demo/InteractiveDemo";
import styles from "./HeroBot.module.css";

export function HeroBot() {
  return (
    <div className={styles.experience}>
      <InteractiveDemo />
    </div>
  );
}
