import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-charcoal text-[#c8c0b4] py-16 px-[5vw]">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 pb-12 border-b border-white/8">
                <div className="col-span-1 md:col-span-1">
                    <Link href="/" className="font-serif text-[1.4rem] text-white block mb-4 italic">
                        Delta <em className="not-italic text-gold">Force</em>
                    </Link>
                    <p className="text-[13px] text-muted leading-[1.8] mb-6">
                        Celebrating the art of Indian dressing. Every fabric tells a story, every stitch is a promise of quality. Crafted with love, worn with pride.
                    </p>
                    <div className="flex gap-2.5">
                        {["📷", "💬", "📘"].map((icon, i) => (
                            <div key={i} className="w-[34px] h-[34px] border border-white/12 flex items-center justify-center text-[12px] text-muted hover:border-gold hover:text-gold transition-all cursor-pointer">
                                {icon}
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <h4 className="text-[11px] tracking-[0.25em] uppercase text-white mb-[1.2rem] font-medium">Shop</h4>
                    <ul className="list-none text-[13px] text-muted space-y-[0.6rem]">
                        <li><Link href="/products" className="hover:text-gold transition-colors">New Arrivals</Link></li>
                        <li><Link href="/products" className="hover:text-gold transition-colors">Sarees</Link></li>
                        <li><Link href="/products" className="hover:text-gold transition-colors">Kurtis</Link></li>
                        <li><Link href="/products" className="hover:text-gold transition-colors">Anarkali</Link></li>
                        <li><Link href="/products" className="hover:text-gold transition-colors">Lehengas</Link></li>
                        <li><Link href="/products" className="hover:text-gold transition-colors">Sale</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-[11px] tracking-[0.25em] uppercase text-white mb-[1.2rem] font-medium">Help</h4>
                    <ul className="list-none text-[13px] text-muted space-y-[0.6rem]">
                        <li><Link href="#" className="hover:text-gold transition-colors">About Us</Link></li>
                        <li><Link href="#" className="hover:text-gold transition-colors">Contact Us</Link></li>
                        <li><Link href="#" className="hover:text-gold transition-colors">Size Guide</Link></li>
                        <li><Link href="#" className="hover:text-gold transition-colors">Shipping Policy</Link></li>
                        <li><Link href="#" className="hover:text-gold transition-colors">Returns & Refunds</Link></li>
                        <li><Link href="#" className="hover:text-gold transition-colors">Privacy Policy</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-[11px] tracking-[0.25em] uppercase text-white mb-[1.2rem] font-medium">Stay in the Loop</h4>
                    <p className="text-[13px] text-muted leading-[1.7] mb-4">Get early access to new launches, festive deals & style inspiration — straight to your inbox.</p>
                    <div className="flex">
                        <input type="email" placeholder="Your email address" className="flex-1 bg-white/6 border border-white/12 border-r-0 px-3.5 py-2.5 text-[12px] text-white outline-none placeholder:text-[#5a5248]" />
                        <button className="bg-gold text-white px-4 py-2.5 text-[10px] tracking-[0.18em] uppercase hover:bg-gold-dark transition-colors">Subscribe</button>
                    </div>
                </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between items-center text-[12px] text-[#5a5248] gap-4">
                <span>© 2025 Delta Force. All rights reserved.</span>
                <span>Accepts: 💳 UPI · Cards · Net Banking · COD</span>
            </div>
        </footer>
    );
}
