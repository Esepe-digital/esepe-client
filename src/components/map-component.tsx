'use client';

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  useMapEvents,
} from 'react-leaflet';
import * as L from 'leaflet';
import { useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import { ProjectCard } from '@/interfaces/home/projectCardHome';

interface MapComponentProps {
  projects: ProjectCard[];
}

// Crear ícono personalizado por color
const createCustomIcon = (color: string) =>
  new L.Icon({
    iconUrl: `data:image/svg+xml;base64,${btoa(`
      <svg width="32" height="39" viewBox="0 0 32 39" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.9998 1.33337C23.5209 1.33337 30.3337 7.11748 30.3337 16.0004C30.3337 19.0365 29.1146 22.2524 26.8259 25.6263C24.535 29.0037 21.1297 32.6023 16.6492 36.4271L15.9998 36.9818L15.3503 36.4271C10.8701 32.6025 7.46543 29.0035 5.17456 25.6263C2.88593 22.2524 1.66684 19.0365 1.66675 16.0004C1.66675 7.11761 8.47871 1.33354 15.9998 1.33337ZM15.9998 13.3334C14.719 13.3336 13.6669 14.3856 13.6667 15.6664C13.6667 16.9473 14.7189 18.0002 15.9998 18.0004C17.2808 18.0004 18.3337 16.9474 18.3337 15.6664C18.3336 14.3855 17.2807 13.3334 15.9998 13.3334Z" fill="${color}" stroke="white" stroke-width="2"/>
      </svg>
    `)}`,
    iconSize: [32, 39],
    iconAnchor: [16, 39],
    popupAnchor: [0, -40],
  });

function MapController({ projects }: { projects: ProjectCard[] }) {
  const map = useMap();

  useMapEvents({
    wheel: () => {
      map.scrollWheelZoom.enable();
    },
  });

  useEffect(() => {
    // Enable mobile-friendly options
    map.doubleClickZoom.enable();
    map.dragging.enable();
    map.touchZoom.enable();
    if (map.tap) {
      map.tap.enable();
    }
  }, [map]);

  useEffect(() => {
    if (!projects.length) return;

    const validProjects = projects.filter((p) => p.latitude && p.longitude);

    if (validProjects.length === 0) {
      // 👉 Si no hay coordenadas válidas, centramos en Santiago
      map.setView([-33.45, -70.66], 12);
      return;
    }

    if (validProjects.length === 1) {
      const { latitude, longitude } = validProjects[0];
      map.setView([Number(latitude), Number(longitude)], 15);
    } else {
      const center = validProjects.reduce(
        (acc, p) => ({
          lat: acc.lat + Number(p.latitude),
          lng: acc.lng + Number(p.longitude),
        }),
        { lat: 0, lng: 0 }
      );
      map.setView(
        [center.lat / validProjects.length, center.lng / validProjects.length],
        6
      );
    }
  }, [projects, map]);

  return null;
}

export default function MapComponent({ projects }: MapComponentProps) {
  const fallbackCenter: [number, number] = [-33.45, -70.66]; // Santiago

  return (
    <MapContainer
      center={fallbackCenter}
      zoom={6}
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      <MapController projects={projects} />

      {projects.map((project, index) =>
        project.latitude && project.longitude ? (
          <Marker
            key={project.id ?? index}
            position={[Number(project.latitude), Number(project.longitude)]}
            icon={createCustomIcon(project.accentColor || '#FF6347')}
          >
            <Popup>
              <strong>{project.name}</strong>
              <p>{project.location}</p>
            </Popup>
          </Marker>
        ) : null
      )}
    </MapContainer>
  );
}
