const services = [
  {
    category: "賃貸",
    icon: "🏠",
    items: ["アパート・マンション", "事務所・店舗", "駐車場"],
    color: "from-blue-50 to-indigo-50",
    border: "border-blue-200",
    badge: "bg-[#1b3a6b] text-white",
  },
  {
    category: "売買",
    icon: "🏢",
    items: ["一戸建て", "アパート・マンション"],
    color: "from-amber-50 to-yellow-50",
    border: "border-amber-200",
    badge: "bg-[#c9a84c] text-white",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-[#c9a84c] font-medium tracking-[0.2em] text-sm uppercase mb-3">
            Services
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#1b3a6b] mb-4">
            取扱物件
          </h2>
          <div className="w-16 h-1 bg-[#c9a84c] mx-auto rounded" />
          <p className="mt-6 text-gray-600 max-w-xl mx-auto">
            墨田区を中心に、様々な物件をご紹介しています。
            お客様のご要望に合わせてご提案いたします。
          </p>
        </div>

        {/* Service cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map((service) => (
            <div
              key={service.category}
              className={`rounded-2xl border-2 ${service.border} bg-gradient-to-br ${service.color} p-8`}
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="text-4xl">{service.icon}</span>
                <div>
                  <span
                    className={`inline-block px-3 py-1 text-xs font-bold rounded-full ${service.badge} mb-1`}
                  >
                    {service.category}
                  </span>
                  <h3 className="text-xl font-bold text-[#1b3a6b]">
                    {service.category}物件
                  </h3>
                </div>
              </div>
              <ul className="space-y-3">
                {service.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-gray-700"
                  >
                    <span className="w-2 h-2 rounded-full bg-[#c9a84c] flex-shrink-0" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-[#1b3a6b] text-white font-bold rounded hover:bg-[#2a5298] transition-colors"
          >
            物件のご相談はこちら
          </a>
        </div>
      </div>
    </section>
  );
}
