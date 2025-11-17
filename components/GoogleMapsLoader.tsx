"use client"

import dynamic from "next/dynamic"

const DynamicMapView = dynamic(() => import("./MapView"), {
  ssr: false,
  loading: () => (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <div style={{ fontSize: "24px", marginBottom: "8px" }}>🗺️</div>
      <p>Carregando mapa...</p>
    </div>
  ),
})

export default DynamicMapView
