import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ProductCard from "@/features/products/components/ProductCard";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const newArrivals = [
    { id: "1", name: "Tara Lavender Anarkali", fabric: "Chanderi Silk", price: 1999, originalPrice: 2499, tag: "New", image: "https://images.unsplash.com/photo-1669197788715-ed7b7ca4ec89?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", description: "Full length pleated Anarkali with cutdana embroidery. Butter crepe lining. Sleeves can be customised." },
    { id: "2", name: "Rati Block Print Kurti", fabric: "Pure Cotton", price: 1399, originalPrice: 1800, tag: "Sale", image: "https://images.unsplash.com/photo-1741847639057-b51a25d42892?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", description: "Hand block printed kurti in natural cotton dyes. Relaxed fit, perfect for everyday wear." },
    { id: "3", name: "Aarav Pleated Co-ord Set", fabric: "Georgette", price: 2199, image: "https://images.unsplash.com/photo-1763818104121-7d63caa456f1?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", description: "Elegant pleated co-ord set in soft georgette. Includes kurti and palazzo pants." },
    { id: "4", name: "Priya Festive Saree", fabric: "Onam Saree", price: 4500, tag: "New", image: "https://images.unsplash.com/photo-1679849922748-f59ba2e10c10?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", description: "Pure Banarasi silk saree with intricate zari weave. Comes with an unstitched blouse piece." },
  ];

  const bestSellers = [
    { id: "5", name: "Damini Floral Kurti", fabric: "Mul Cotton", price: 2199, originalPrice: 2499, tag: "Best Seller", image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&q=80&w=800", description: "Floral printed kurti in breathable mul cotton. A customer favourite for its comfort." },
    { id: "6", name: "Banarasi Saree", fabric: "Crepe Silk", price: 1899, originalPrice: 2499, tag: "Best Seller", image: "https://images.unsplash.com/photo-1615555896813-401d84a0d737?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", description: "Three-piece crepe silk set with hand embroidered yoke. Includes kurti, dupatta and straight pants." },
    { id: "7", name: "Yamini Casual Kurti", fabric: "Pure Linen", price: 2199, originalPrice: 2499, tag: "Best Seller", image: "https://images.unsplash.com/photo-1745313452052-0e4e341f326c?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", description: "Effortlessly chic linen kurti for everyday styling. Minimal design, maximum elegance." },
    { id: "8", name: "Bengali Anarkali", fabric: "Crushed Georgette", price: 4800, originalPrice: 5500, tag: "Best Seller", image: "https://images.unsplash.com/photo-1716504627981-22728cb2d2e2?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", description: "Crushed georgette Anarkali with intricate cutdana embroidery. Full length with butter crepe lining." },
  ];

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* HERO */}
      <section className="grid grid-cols-1 md:grid-cols-2 min-h-[90vh] bg-offwhite">
        <div className="flex flex-col justify-center py-10 px-8 lg:pl-[7vw] lg:pr-10 animate-fade-up">
          <span className="bg-[#f0e6d8] text-gold-dark text-[11px] tracking-[0.25em] uppercase px-[14px] py-[6px] mb-[1.8rem] w-fit">
            ✦ New Festive Collection 2025
          </span>
          <h1 className="font-serif text-[clamp(2.6rem,4.5vh,4.8rem)] leading-[1.1] font-normal mb-[1.5rem]">
            Draped in<br />
            <em className="italic text-gold not-italic">Indian</em><br />
            Elegance
          </h1>
          <p className="text-[15px] text-muted leading-[1.85] max-w-[400px] mb-[2.5rem]">
            Handcrafted silhouettes that celebrate the grace of every Indian woman. From Chanderi Anarkalis to Banarasi Sarees — curated for the woman who wears her culture with pride.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/products" className="bg-brown text-white px-8 py-3.5 text-[11px] tracking-[0.2em] uppercase hover:bg-[#C6A75E] hover:text-black transition-colors duration-300" >
              Explore Collection
            </Link>
            <Link href="/products" className="border border-charcoal text-charcoal px-8 py-3 text-[11px] tracking-[0.2em] uppercase hover:bg-[#C6A75E] hover:text-black transition-all">
              View Lookbook
            </Link>
          </div>
          <div className="flex gap-10 mt-12 pt-8 border-t border-border">
            <div><span className="font-serif text-[1.6rem] block">500+</span><span className="text-[11px] tracking-[0.15em] uppercase text-muted">Styles</span></div>
            <div><span className="font-serif text-[1.6rem] block">10K+</span><span className="text-[11px] tracking-[0.15em] uppercase text-muted">Customers</span></div>
            <div><span className="font-serif text-[1.6rem] block">100%</span><span className="text-[11px] tracking-[0.15em] uppercase text-muted">Handcrafted</span></div>
          </div>
        </div>
        <div className="relative overflow-hidden group min-h-[400px]">
          <Image
            src="https://images.unsplash.com/photo-1616756141603-6d37d5cde2a2?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Indian woman in ethnic wear"
            fill
            className="object-cover transition-transform duration-[8s] scale-105 group-hover:scale-100"
            priority
          />
          <div className="absolute bottom-10 left-10 bg-white/95 p-[14px_20px] flex items-center gap-3 shadow-lg z-10">
            <span className="text-2xl">🧵</span>
            <div>
              <strong className="block text-[13px] font-medium">Handcrafted in India</strong>
              <span className="text-[11px] text-muted">Premium Fabrics Only</span>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <div className="flex flex-wrap border-b border-border bg-white divide-x divide-border">
        {[
          "🚚 Free Delivery Above ₹999",
          "↩️ Easy 7-Day Returns",
          "✦ 100% Authentic Fabrics",
          "🔒 Secure Payments",
          "💬 WhatsApp Support"
        ].map((item, i) => (
          <div key={i} className="flex-1 flex items-center justify-center gap-2 p-4 text-[11px] tracking-[0.09em] uppercase text-muted min-w-[200px]">
            {item}
          </div>
        ))}
      </div>

      {/* CATEGORIES */}
      <section className="py-20 px-[5vw]">
        <div className="text-center mb-16">
          <span className="text-[11px] tracking-[0.3em] uppercase text-gold block mb-[0.6rem]">Shop by Style</span>
          <h2 className="font-serif text-[2.6rem] font-normal mb-[0.6rem]">What&apos;s Your Fashion Mood?</h2>
          <p className="text-[14px] text-muted max-w-[460px] mx-auto leading-[1.7]">
            From everyday casuals to grand occasion wear — find your perfect style.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {[
            { name: "Sarees", count: 24, img: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&q=80&w=800" },
            { name: "Kurtis", count: 56, img: "https://images.unsplash.com/photo-1745313452052-0e4e341f326c?auto=format&fit=crop&q=80&w=800" },
            { name: "Anarkali", count: 18, img: "https://images.unsplash.com/photo-1716504627981-22728cb2d2e2?auto=format&fit=crop&q=80&w=800" },
            { name: "Lehengas", count: 12, img: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&q=80&w=800" },
            { name: "Kurti Sets", count: 30, img: "https://images.unsplash.com/photo-1763818104121-7d63caa456f1?auto=format&fit=crop&q=80&w=687&auto=format&fit=crop&q=80&w=1920" },
          ].map((cat, i) => (
            <Link key={i} href="/products" className="group relative aspect-[3/4] overflow-hidden cursor-pointer block">
              <Image src={cat.img} alt={cat.name} fill className="object-cover transition-transform duration-[650ms] group-hover:scale-108 brightness-[0.85] group-hover:brightness-[0.7]" />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 to-transparent" />
              <div className="absolute inset-2 border border-transparent group-hover:border-gold/60 transition-colors pointer-events-none" />
              <div className="absolute bottom-5.5 left-0 right-0 text-center text-white">
                <h3 className="font-serif text-[1.2rem] font-normal mb-0.5">{cat.name}</h3>
                <span className="text-[10px] tracking-[0.2em] uppercase opacity-[0.8]">{cat.count} Styles</span>
              </div>
            </Link>
          ))}
        </div>
        <div className="text-center">
          <Link href="/products" className="inline-block mt-12 text-[12px] tracking-[0.2em] uppercase text-charcoal border-b border-charcoal pb-0.5 hover:text-gold hover:border-gold transition-all">
            View All Categories →
          </Link>
        </div>
      </section>

      {/* NEW ARRIVALS */}
      <section className="py-24 px-[5vw] bg-offwhite border-y border-border">
        <div className="text-center mb-16">
          <span className="text-[11px] tracking-[0.3em] uppercase text-gold block mb-[0.6rem]">Handpicked for You</span>
          <h2 className="font-serif text-[2.6rem] font-normal mb-[0.6rem]">New Arrivals</h2>
          <p className="text-[14px] text-muted max-w-[460px] mx-auto leading-[1.7]">
            Fresh styles just added — be the first to wear them.
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {newArrivals.map((prod) => (
            <ProductCard key={prod.id} {...prod} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/products" className="inline-block text-[12px] tracking-[0.2em] uppercase text-charcoal border-b border-charcoal pb-0.5 hover:text-gold hover:border-gold transition-all">
            View All New Arrivals →
          </Link>
        </div>
      </section>

      {/* BEST SELLERS */}
      <section className="py-24 px-[5vw]">
        <div className="text-center mb-16">
          <span className="text-[11px] tracking-[0.3em] uppercase text-gold block mb-[0.6rem]">Tried & Loved</span>
          <h2 className="font-serif text-[2.6rem] font-normal mb-[0.6rem]">Best Sellers</h2>
          <p className="text-[14px] text-muted max-w-[460px] mx-auto leading-[1.7]">
            Our customers&apos; all-time favourites — grab them before they&apos;re gone.
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {bestSellers.map((prod) => (
            <ProductCard key={prod.id} {...prod} />
          ))}
        </div>
      </section>

      {/* MID BANNER */}
      <section className="grid grid-cols-1 md:grid-cols-2 min-h-[420px]">
        <div className="relative overflow-hidden group min-h-[400px]">
          <Image src="https://images.unsplash.com/photo-1612353375223-e6acfa31ae71?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Made to Order" fill className="object-cover transition-transform duration-[8s] group-hover:scale-110" />
        </div>
        <div className="flex flex-col justify-center py-16 px-8 md:pl-20 md:pr-16 bg-offwhite border-y border-border">
          <span className="text-[11px] tracking-[0.3em] uppercase text-gold block mb-[0.6rem]">Custom Craftsmanship</span>
          <h2 className="font-serif text-[2.2rem] font-normal mb-5 leading-tight">Made-to-Order<br /><em className="italic text-gold not-italic">Just for You</em></h2>
          <p className="text-[14px] text-muted leading-[1.85] mb-8 max-w-[480px]">
            Can&apos;t find your size? Want a custom colour? Our skilled artisans craft every piece to your exact measurements. WhatsApp us for a completely bespoke experience.
          </p>
          <a href="https://wa.me/91XXXXXXXXXX" className="bg-gold text-white px-9 py-4 text-[11px] tracking-[0.2em] uppercase hover:text-gold transition-colors w-fit font-sans inline-block">
            💬 Enquire on WhatsApp
          </a>
        </div>
      </section>

      {/* WALL OF LOVE */}
      <section className="py-24 px-[5vw] bg-offwhite">
        <div className="text-center mb-16">
          <span className="text-[11px] tracking-[0.3em] uppercase text-gold block mb-[0.6rem]">Real Customers</span>
          <h2 className="font-serif text-[2.6rem] font-normal mb-[0.6rem]">Wall of Love 💛</h2>
          <p className="text-[14px] text-muted max-w-[460px] mx-auto leading-[1.7]">Words from the women who wear Delta Force.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { text: '"Absolutely beautiful fabric. The Anarkali fits like a dream. Will definitely order again!"', name: "Priya S., Chennai" },
            { text: '"Quality is outstanding. The packaging was gorgeous and delivery was super fast. Loving it!"', name: "Ananya R., Bangalore" },
            { text: '"The Chanderi kurti set is just perfect for festive occasions. So many compliments received!"', name: "Meena K., Coimbatore" }
          ].map((review, i) => (
            <div key={i} className="bg-white border border-border p-10 hover:shadow-lg transition-shadow">
              <div className="text-gold text-sm tracking-[2px] mb-4">★★★★★</div>
              <p className="font-serif italic text-[15px] leading-[1.8] mb-6 text-charcoal">{review.text}</p>
              <span className="text-[11px] tracking-[0.2em] uppercase text-muted">— {review.name}</span>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
