"use client"

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import L from "leaflet"
import styles from "./MapView.module.css"
import "leaflet/dist/leaflet.css"

interface Professional {
  id: number
  nome: string
  categoria: string
  latitude: number
  longitude: number
  nota: number
  preco_min: number
  foto: string
}

interface MapViewProps {
  profissionais: Professional[]
}

// Ícone personalizado verde
const greenIcon = L.icon({
  iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
})

export default function MapView({ profissionais }: MapViewProps) {
  // Centro padrão (Indaiatuba, SP)
  const center: [number, number] = profissionais.length > 0
    ? [profissionais[0].latitude, profissionais[0].longitude]
    : [-23.0902, -47.2178]

  return (
    <div className={styles.mapViewContainer}>
      <MapContainer 
        center={center} 
        zoom={13} 
        scrollWheelZoom={true}
        className={styles.map}
        style={{ height: "500px", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {profissionais.map((prof) => (
          <Marker
            key={prof.id}
            position={[prof.latitude, prof.longitude]}
            icon={greenIcon}
          >
            <Popup>
              <div style={{ minWidth: "200px" }}>
                <img
                  src={prof.foto}
                  alt={prof.nome}
                  style={{
                    width: "100%",
                    height: "100px",
                    objectFit: "cover",
                    borderRadius: "8px",
                    marginBottom: "8px",
                  }}
                />
                <h3 style={{ margin: "0 0 4px 0", fontSize: "14px", fontWeight: 600 }}>
                  {prof.nome}
                </h3>
                <p style={{ margin: "0 0 4px 0", fontSize: "12px", color: "#666" }}>
                  {prof.categoria}
                </p>
                <p style={{ margin: 0, fontSize: "12px" }}>
                  ⭐ {prof.nota.toFixed(1)} • R$ {prof.preco_min}+
                </p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
      <p className={styles.resultsCount}>
        {profissionais.length} profissionais encontrados próximos a você
      </p>
    </div>
  )
}
