"use client"
import styles from "./MapToggle.module.css"

interface MapToggleProps {
  viewMode: "list" | "map"
  onViewModeChange: (mode: "list" | "map") => void
}

export default function MapToggle({ viewMode, onViewModeChange }: MapToggleProps) {
  return (
    <div className={styles.mapToggle} role="group" aria-label="Alternar visualização">
      <button
        className={`${styles.button} ${viewMode === "list" ? styles.active : ""}`}
        onClick={() => onViewModeChange("list")}
        aria-pressed={viewMode === "list"}
        aria-label="Visualizar em lista"
      >
        📋 Lista
      </button>
      <button
        className={`${styles.button} ${viewMode === "map" ? styles.active : ""}`}
        onClick={() => onViewModeChange("map")}
        aria-pressed={viewMode === "map"}
        aria-label="Visualizar em mapa"
      >
        🗺️ Mapa
      </button>
    </div>
  )
}
