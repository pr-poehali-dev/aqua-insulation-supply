import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const POINTS = [
  {
    name: 'Офис',
    address: 'Московское шоссе 46Б, Санкт-Петербург',
    coords: [59.81936, 30.37071] as [number, number],
  },
  {
    name: 'Склад',
    address: 'Индустриальная ул. 21, Колтуши',
    coords: [59.9303, 30.6247] as [number, number],
  },
];

const pinIcon = (label: string) =>
  L.divIcon({
    className: '',
    html: `<div style="display:flex;align-items:center;gap:6px;transform:translate(-11px,-11px)">
      <span style="width:22px;height:22px;border-radius:50%;background:#C9A25A;border:3px solid #0C1826;box-shadow:0 0 0 2px rgba(201,162,90,.35)"></span>
      <span style="font:600 11px/1 'IBM Plex Mono',monospace;letter-spacing:.08em;text-transform:uppercase;color:#F0EBDE;background:rgba(12,24,38,.85);padding:5px 8px;border:1px solid rgba(201,162,90,.35);border-radius:2px;white-space:nowrap">${label}</span>
    </div>`,
    iconSize: [0, 0],
  });

const ContactsMap = () => {
  const ref = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);

  useEffect(() => {
    if (!ref.current || mapRef.current) return;

    const map = L.map(ref.current, {
      scrollWheelZoom: false,
      zoomControl: true,
      attributionControl: false,
    });
    mapRef.current = map;

    L.tileLayer(
      'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',
      { maxZoom: 19 },
    ).addTo(map);

    const bounds = L.latLngBounds(POINTS.map((p) => p.coords));
    map.fitBounds(bounds, { padding: [70, 70] });

    POINTS.forEach((p) => {
      L.marker(p.coords, { icon: pinIcon(p.name) })
        .addTo(map)
        .bindPopup(`<b>${p.name}</b><br/>${p.address}`);
    });

    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, []);

  return (
    <div className="overflow-hidden rounded-sm border border-white/12 shadow-lg shadow-black/20">
      <div className="grid gap-px bg-white/10 sm:grid-cols-2">
        {POINTS.map((p) => (
          <div
            key={p.name}
            className="flex items-start gap-3 px-6 py-5"
            style={{ backgroundColor: '#111f35' }}
          >
            <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-brass ring-2 ring-brass/25" />
            <div>
              <div className="label-mono text-[10px] text-brass-soft">
                {p.name}
              </div>
              <div className="mt-1.5 text-sm leading-relaxed text-ink-muted">
                {p.address}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div
        ref={ref}
        className="h-[340px] w-full md:h-[420px]"
        style={{ backgroundColor: '#0C1826' }}
      />
    </div>
  );
};

export default ContactsMap;
