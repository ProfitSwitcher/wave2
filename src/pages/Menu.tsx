import { COMPANY, MENU } from "../lib/content";
import { Coffee, IceCream, Gift, ArrowRight } from "lucide-react";

export function Menu() {
  return (
    <div className="max-w-4xl mx-auto px-4 md:px-8 py-16 md:py-24">
      <p className="section-label text-center">Eat, Drink, Browse</p>
      <h1 className="section-title text-center">Our Menu</h1>
      <p className="section-subtitle text-center mx-auto">{COMPANY.taglineShort}</p>

      <div className="space-y-16" role="list" aria-label="Menu categories">
        {MENU.map((cat) => (
          <div key={cat.category} role="listitem">
            <div className="flex items-center gap-4 mb-8">
              {cat.category.includes("Coffee") ? (
                <Coffee className="w-8 h-8 text-brand-green" aria-hidden="true" />
              ) : (
                <Gift className="w-8 h-8 text-brand-green" aria-hidden="true" />
              )}
              <h2 className="font-display text-3xl font-bold text-brand-brown">
                {cat.category}
              </h2>
            </div>
            <ul className="space-y-0" aria-label={`${cat.category} items`}>
              {cat.items.map((item) => (
                <li key={item.name} className="menu-item" role="listitem">
                  <div>
                    <span className="font-body font-semibold text-brand-brown">{item.name}</span>
                    {item.desc && (
                      <p className="font-body text-sm text-brand-brown/50 mt-1">{item.desc}</p>
                    )}
                  </div>
                  {item.price && (
                    <span className="menu-price" aria-label={`Price: ${item.price}`}>{item.price}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Big Dipper section — unboxed, no card styling */}
      <div className="mt-16 text-center" role="note">
        <IceCream className="w-14 h-14 text-brand-green mx-auto mb-4" aria-hidden="true" />
        <p className="font-display text-xl font-semibold text-brand-brown mb-2">
          Ask About Today's Big Dipper Flavors!
        </p>
        <p className="font-body text-brand-brown/60 text-sm">
          Rotating seasonal flavors — always made with Montana love.
        </p>
      </div>
    </div>
  );
}
