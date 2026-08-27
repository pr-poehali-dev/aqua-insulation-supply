const POINTS = [
  {
    name: 'Офис',
    address: 'Московское шоссе 46Б, Санкт-Петербург',
  },
  {
    name: 'Склад',
    address: 'Индустриальная ул. 21, Колтуши',
  },
];

const MAP_SRC =
  'https://yandex.ru/map-widget/v1/?lang=ru_RU&ll=30.497700%2C59.874800&z=11' +
  '&pt=30.370710,59.819360,pm2orgm~30.624700,59.930300,pm2orgm';

const ContactsMap = () => {
  return (
    <div className="flex h-full min-h-[420px] flex-col overflow-hidden rounded-sm border border-white/12 shadow-lg shadow-black/20">
      <div className="grid shrink-0 gap-px bg-white/10 sm:grid-cols-2">
        {POINTS.map((p) => (
          <div
            key={p.name}
            className="flex items-start gap-3 px-5 py-4"
            style={{ backgroundColor: '#111f35' }}
          >
            <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-brass ring-2 ring-brass/25" />
            <div className="min-w-0">
              <div className="label-mono text-[9px] text-brass-soft">
                {p.name}
              </div>
              <div className="mt-1 text-[13px] leading-snug text-ink-muted">
                {p.address}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div
        className="min-h-[300px] w-full flex-1"
        style={{ backgroundColor: '#E8E6E1' }}
      >
        <iframe
          src={MAP_SRC}
          title="Карта: офис и склад"
          className="h-full w-full border-0"
          allowFullScreen
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default ContactsMap;