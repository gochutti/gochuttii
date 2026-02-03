import React from "react";



        const { useState, useEffect, useMemo, useRef } = React;

        // --- SUB-PAGE CONTENT (ENHANCED) ---
        const SUB_PAGES = {
            'about-us': {
                title: "About gochutti",
                content: (
                    <div className="space-y-8 text-slate-700 leading-relaxed font-light">
                        <div className="flex flex-col md:flex-row gap-8 items-center mb-10">
                            <div className="flex-1">
                                <span className="text-teal-600 font-bold uppercase tracking-widest text-xs mb-2 block">Our Story</span>
                                <h2 className="text-4xl font-display font-bold text-slate-900 mb-4">Redefining the <span className="text-orange-500 font-serif italic">Joy</span> of Travel.</h2>
                                <p className="text-lg">Welcome to <strong>gochutti.com</strong>, a premier venture by <strong>FLYONGO TRAVEL PRIVATE LIMITED</strong>. Born from a desire to declutter travel planning, we are India's first "Calm Tech" holiday platform. We believe travel should be about anticipation, not anxiety.</p>
                            </div>
                            <div className="flex-1 rounded-3xl overflow-hidden shadow-card rotate-1 hover:rotate-0 transition-transform duration-500">
                                <img src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?w=800&q=80" className="w-full h-64 object-cover" alt="Travel Team"/>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="p-8 bg-teal-50 rounded-3xl border border-teal-100 hover:shadow-float transition-all">
                                <h3 className="text-xl font-bold text-teal-800 mb-2 font-display"><i className="fas fa-hourglass-half mr-2"></i>No Fake Urgency</h3>
                                <p>We don't use countdown timers to panic you. Take your time, plan with peace. Your mental space matters to us.</p>
                            </div>
                            <div className="p-8 bg-orange-50 rounded-3xl border border-orange-100 hover:shadow-float transition-all">
                                <h3 className="text-xl font-bold text-orange-800 mb-2 font-display"><i className="fas fa-tag mr-2"></i>Transparent Pricing</h3>
                                <p>What you see is what you pay. No hidden taxes or surprise fees at checkout. Honesty is our currency.</p>
                            </div>
                        </div>
                    </div>
                )
            },
            'contact-us': {
                title: "Get in Touch",
                content: (
                    <div className="space-y-10">
                        <p className="text-xl text-slate-600 text-center font-light">We are here to help you plan the perfect trip.</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-white p-10 rounded-[2.5rem] shadow-card border border-slate-50 hover:border-teal-200 transition-all hover:shadow-float group text-center">
                                <div className="w-20 h-20 bg-teal-50 rounded-full flex items-center justify-center text-teal-600 mb-6 mx-auto group-hover:scale-110 transition-transform"><i className="fas fa-map-marker-alt text-3xl"></i></div>
                                <h3 className="font-bold text-2xl mb-3 text-slate-900 font-display">Visit HQ</h3>
                                <p className="text-slate-500 leading-relaxed">FLYONGO TRAVEL PRIVATE LIMITED<br/>A-26, Second Floor, Sector-03,<br/>NOIDA, Uttar Pradesh - 201301</p>
                                <span className="text-teal-700 text-xs font-bold bg-teal-50 px-4 py-1.5 rounded-full mt-4 inline-block tracking-wide">Near Noida Sec 16 Metro Station</span>
                            </div>
                            <div className="bg-white p-10 rounded-[2.5rem] shadow-card border border-slate-50 hover:border-orange-200 transition-all hover:shadow-float group text-center">
                                <div className="w-20 h-20 bg-orange-50 rounded-full flex items-center justify-center text-orange-600 mb-6 mx-auto group-hover:scale-110 transition-transform"><i className="fas fa-headset text-3xl"></i></div>
                                <h3 className="font-bold text-2xl mb-3 text-slate-900 font-display">Call / WhatsApp</h3>
                                <p className="text-slate-900 mb-6 text-3xl font-display font-bold">+91 96 50 38 65 65</p>
                                <a href="https://wa.me/919650386565" target="_blank" className="inline-flex items-center gap-3 bg-green-500 text-white px-8 py-3 rounded-2xl font-bold hover:bg-green-600 transition-colors shadow-lg shadow-green-500/30"><i className="fab fa-whatsapp text-xl"></i> Chat Now</a>
                            </div>
                        </div>
                    </div>
                )
            },
            'faqs': {
                title: "Frequently Asked Questions",
                content: (
                    <div className="space-y-4">
                        {[
                            {q: "How do I book?", a: "Simply click 'Request Booking' on any package. Our experts will call you to customize and confirm availability."},
                            {q: "Are flights included?", a: "Most of our packages include flights, but it varies. Check the 'Inclusions' tab on the package detail page."},
                            {q: "Is EMI available?", a: "Yes! We partner with major banks to offer flexible EMI options for packages above ₹50,000."},
                            {q: "Can I customize the itinerary?", a: "Absolutely. All our packages are 100% customizable. Discuss your preferences with our travel expert."}
                        ].map((faq, i) => (
                            <details key={i} className="group bg-white p-6 rounded-3xl border border-slate-200 shadow-sm open:ring-2 open:ring-teal-500/20 transition-all">
                                <summary className="font-bold text-slate-900 cursor-pointer list-none flex justify-between items-center text-lg font-display">{faq.q} <i className="fas fa-chevron-down text-teal-500 group-open:rotate-180 transition-transform text-sm bg-teal-50 w-8 h-8 rounded-full flex items-center justify-center"></i></summary>
                                <p className="mt-4 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">{faq.a}</p>
                            </details>
                        ))}
                    </div>
                )
            },
            'cancellation-policy': {
                title: "Cancellation Policy",
                content: (
                    <div className="bg-white p-10 rounded-[2.5rem] shadow-soft border border-slate-100 prose prose-slate max-w-none">
                        <p className="lead text-lg font-light text-slate-600">We understand plans change. Here is our transparent cancellation policy designed for your peace of mind:</p>
                        <div className="space-y-4 mt-8">
                            <div className="flex items-center gap-4 p-4 bg-green-50 rounded-2xl border border-green-100"><div className="w-12 h-12 bg-green-200 rounded-full flex items-center justify-center text-green-700 font-bold shrink-0">30+</div><div><div className="font-bold text-green-900">Days before travel</div><div className="text-sm text-green-700">100% Refund (minus nominal booking fee)</div></div></div>
                            <div className="flex items-center gap-4 p-4 bg-orange-50 rounded-2xl border border-orange-100"><div className="w-12 h-12 bg-orange-200 rounded-full flex items-center justify-center text-orange-700 font-bold shrink-0">15+</div><div><div className="font-bold text-orange-900">Days before travel</div><div className="text-sm text-orange-700">50% Refund</div></div></div>
                            <div className="flex items-center gap-4 p-4 bg-red-50 rounded-2xl border border-red-100"><div className="w-12 h-12 bg-red-200 rounded-full flex items-center justify-center text-red-700 font-bold shrink-0">0-14</div><div><div className="font-bold text-red-900">Days before travel</div><div className="text-sm text-red-700">Non-refundable</div></div></div>
                        </div>
                    </div>
                )
            },
            'terms-of-service': {
                title: "Terms of Service",
                content: (
                    <div className="bg-white p-8 rounded-3xl shadow-soft border border-slate-100 prose prose-slate max-w-none">
                        <p>By using <strong>gochutti.com</strong>, you agree to the following terms:</p>
                        <h4 className="font-bold text-slate-900 mt-8 mb-3 text-lg">1. Booking & Payments</h4>
                        <p>All bookings are tentative until a booking amount is received. Prices are subject to change based on real-time availability of flights and hotels.</p>
                        <h4 className="font-bold text-slate-900 mt-8 mb-3 text-lg">2. Limitation of Liability</h4>
                        <p>gochutti.com acts as an aggregator/agent. We are not liable for delays, losses, or damages caused by third-party service providers (airlines, hotels, transport).</p>
                    </div>
                )
            },
            'default': { title: "Coming Soon", content: <div className="text-center py-32"><div className="w-24 h-24 bg-teal-50 rounded-full flex items-center justify-center mx-auto mb-6"><i className="fas fa-rocket text-4xl text-teal-400"></i></div><h3 className="text-2xl font-bold text-slate-800 mb-2">We are building something calm.</h3><p className="text-slate-500">This section will be live shortly.</p></div> }
        };

        // --- MOCK REVIEWS ---
        const MOCK_REVIEWS = [
            { id: 1, name: "Aditi S.", rating: 5, date: "2 days ago", text: "Absolutely loved the arrangement. The hotel was top-notch! The entire process was so calm and stress-free.", avatar: "A" },
            { id: 2, name: "Rahul K.", rating: 4, date: "1 week ago", text: "Great experience, although the transfer was slightly delayed. Overall recommended for the transparency.", avatar: "R" },
            { id: 3, name: "Priya M.", rating: 5, date: "2 weeks ago", text: "A stress-free vacation as promised. The itinerary was perfect and the 'no fake urgency' pledge is real.", avatar: "P" },
            { id: 4, name: "Vikram R.", rating: 5, date: "3 weeks ago", text: "Best platform for family trips. The AI assistant helped me customize the package perfectly.", avatar: "V" }
        ];

        // --- ROOM AMENITIES DATA ---
        const ROOM_AMENITIES = {
            'Standard': [{icon:'wifi', label:'Wifi'}, {icon:'coffee', label:'Breakfast'}],
            'Deluxe': [{icon:'wifi', label:'Wifi'}, {icon:'coffee', label:'Breakfast'}, {icon:'tv', label:'TV'}, {icon:'wind', label:'AC'}],
            'Premium': [{icon:'wifi', label:'Wifi'}, {icon:'coffee', label:'Breakfast'}, {icon:'cocktail', label:'Mini Bar'}, {icon:'spa', label:'Jacuzzi'}, {icon:'water', label:'View'}]
        };

        // --- COMPREHENSIVE HOLIDAY DATASET (ENHANCED) ---
        const HOLIDAY_PACKAGES = [
            // --- DOMESTIC (Incredible India) ---
            { id: 1, title: "Andaman: Havelock & Neil", region: "Domestic", type: "Beach", collection: "Incredible India", duration: "5N/6D", price: 32500, agentPrice: 28000, rating: 4.8, image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=800&q=80", tags: ["Ferry", "Beach", "Insta-Worthy"], description: "White sands of Havelock. No rushing.", inclusions: ["Flights", "Stay", "Meals", "Ferry"], exclusions: ["Water Sports"], itinerary: [{ day: 1, title: "Arrival", desc: "Port Blair pickup.", icon: "plane" }, { day: 2, title: "Havelock", desc: "Private Ferry Transfer.", icon: "ship" }], hotel: "4* Beach Resort", instantBook: true, bestTime: "Oct - May", visaPolicy: "No Visa Req" },
            { id: 2, title: "Kashmir: Paradise Found", region: "Domestic", type: "Nature", collection: "Incredible India", duration: "6N/7D", price: 41000, agentPrice: 35000, rating: 4.9, image: "https://images.unsplash.com/photo-1595846519845-68e298c2edd8?w=800&q=80", tags: ["Houseboat", "Shikara", "Romance"], description: "Dal Lake stillness and Pahalgam meadows.", inclusions: ["Houseboat", "Car", "Meals"], exclusions: ["Pony Ride"], itinerary: [{ day: 1, title: "Srinagar", desc: "Welcome.", icon: "plane" }, { day: 2, title: "Sonmarg", desc: "Thajiwas Glacier.", icon: "mountain" }], hotel: "Premium Houseboat", bestTime: "Mar - Oct" },
            { id: 3, title: "Kerala: God's Own Country", region: "Domestic", type: "Nature", collection: "Incredible India", duration: "4N/5D", price: 28900, agentPrice: 24500, rating: 4.7, image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=800&q=80", tags: ["Backwaters", "Munnar", "Relax"], description: "Munnar mist and Alleppey backwaters.", inclusions: ["AC Car", "Houseboat", "Meals"], exclusions: ["Massage"], itinerary: [{ day: 1, title: "Cochin", desc: "Drive to Munnar.", icon: "car" }], hotel: "3* Hotel + Houseboat", bestTime: "Sep - Mar" },
            { id: 10, title: "Udaipur: Lake City", region: "Domestic", type: "Culture", collection: "Incredible India", duration: "3N/4D", price: 18000, agentPrice: 15000, rating: 4.9, image: "https://images.unsplash.com/photo-1615836245337-f5b9b2303f10?w=800&q=80", tags: ["Royalty", "Lakes", "Couple"], description: "Romantic boat rides and palaces.", inclusions: ["Heritage Hotel", "Boat Ride"], exclusions: ["Lunch"], itinerary: [{ day: 1, title: "Arrival", desc: "City Palace.", icon: "building" }], hotel: "Heritage Haveli", bestTime: "Oct - Mar" },
            { id: 12, title: "Sikkim: Himalayan Gem", region: "Domestic", type: "Nature", collection: "Incredible India", duration: "5N/6D", price: 26500, agentPrice: 22000, rating: 4.8, image: "https://images.unsplash.com/photo-1626127878347-152d19208a09?w=800&q=80", tags: ["Gangtok", "Snow", "Adventure"], description: "Kanchenjunga views and clean air.", inclusions: ["Car", "Permits"], exclusions: ["Nathula Fee"], itinerary: [{ day: 1, title: "Gangtok", desc: "Arrival.", icon: "mountain" }], hotel: "3* Mountain View", bestTime: "Mar - Jun" },
            { id: 13, title: "Coorg: Coffee Hills", region: "Domestic", type: "Nature", collection: "Incredible India", duration: "3N/4D", price: 15000, agentPrice: 12000, rating: 4.6, image: "https://images.unsplash.com/photo-1596328225575-b3858c25381a?w=800&q=80", tags: ["Plantation", "Relax", "Kid-Friendly"], description: "Scotland of India with coffee aroma.", inclusions: ["Homestay", "Breakfast"], exclusions: ["Travel"], itinerary: [{ day: 1, title: "Madikeri", desc: "Check in.", icon: "coffee" }], hotel: "Coffee Estate Stay", bestTime: "All Year" },
            { id: 14, title: "Jaipur: Pink City", region: "Domestic", type: "Culture", collection: "Incredible India", duration: "3N/4D", price: 14000, agentPrice: 11000, rating: 4.7, image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?w=800&q=80", tags: ["Forts", "History", "Insta-Worthy"], description: "Hawa Mahal and Amber Fort grandeur.", inclusions: ["3* Hotel", "Guide"], exclusions: ["Entry Fee"], itinerary: [{ day: 1, title: "Jaipur", desc: "Arrival.", icon: "landmark" }], hotel: "3* Heritage", bestTime: "Oct - Mar" },
            { id: 15, title: "Ooty & Kodaikanal", region: "Domestic", type: "Nature", collection: "Incredible India", duration: "4N/5D", price: 22000, agentPrice: 18000, rating: 4.7, image: "https://images.unsplash.com/photo-1548695663-7c789233be8c?w=800&q=80", tags: ["Tea Gardens", "Hills", "Family"], description: "Nilgiri Mountain Railway and scenic lakes.", inclusions: ["Car", "Hotel", "Breakfast"], exclusions: ["Toy Train"], itinerary: [{ day: 1, title: "Ooty", desc: "Arrival.", icon: "leaf" }], hotel: "3* Hill Resort", bestTime: "Apr - Jun" },
            { id: 16, title: "Darjeeling: Queen of Hills", region: "Domestic", type: "Nature", collection: "Incredible India", duration: "3N/4D", price: 19500, agentPrice: 16000, rating: 4.8, image: "https://images.unsplash.com/photo-1544634262-e673033f2730?w=800&q=80", tags: ["Tea", "Kanchenjunga", "Chill"], description: "Sunrise at Tiger Hill and Mall Road.", inclusions: ["Stay", "Transfers"], exclusions: ["Joyride"], itinerary: [{ day: 1, title: "Darjeeling", desc: "Check-in.", icon: "mountain" }], hotel: "3* Colonial Hotel", bestTime: "Mar - May" },
            { id: 17, title: "Nainital: Lake District", region: "Domestic", type: "Nature", collection: "Incredible India", duration: "3N/4D", price: 16000, agentPrice: 12500, rating: 4.6, image: "https://images.unsplash.com/photo-1570700005719-43c538439368?w=800&q=80", tags: ["Lakes", "Boating", "Family"], description: "Peaceful boating in Naini Lake.", inclusions: ["Hotel", "Boating"], exclusions: ["Lunch"], itinerary: [{ day: 1, title: "Nainital", desc: "Mall Road.", icon: "water" }], hotel: "Lakeside Hotel", bestTime: "Mar - Jun" },
            { id: 18, title: "Lakshadweep: Coral Paradise", region: "Domestic", type: "Beach", collection: "Incredible India", duration: "4N/5D", price: 42000, agentPrice: 36000, rating: 4.9, image: "https://images.unsplash.com/photo-1696417723908-1e247441542f?w=800&q=80", tags: ["Untouched", "Snorkeling", "Trending"], description: "India's Maldives. Pristine reefs and blue lagoons.", inclusions: ["Agatti Permit", "Cottage", "Meals"], exclusions: ["Flights", "Scuba"], itinerary: [{ day: 1, title: "Agatti", desc: "Arrival.", icon: "plane" }], hotel: "Beach Cottage", bestTime: "Oct - Apr" },
            { id: 19, title: "Kaziranga: Rhino Land", region: "Domestic", type: "Nature", collection: "Wildlife & Safari", duration: "3N/4D", price: 21000, agentPrice: 17000, rating: 4.7, image: "https://images.unsplash.com/photo-1570889279762-c040d7c71638?w=800&q=80", tags: ["Wildlife", "Assam", "GenZ"], description: "Home of the One-Horned Rhinoceros.", inclusions: ["Jeep Safari", "Elephant Safari", "Stay"], exclusions: ["Camera Fee"], itinerary: [{ day: 1, title: "Guwahati", desc: "Drive.", icon: "car" }], hotel: "Jungle Lodge", bestTime: "Nov - Apr" },
            { id: 50, title: "Golden Triangle", region: "Domestic", type: "Culture", collection: "Incredible India", duration: "5N/6D", price: 24000, agentPrice: 19000, rating: 4.8, image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&q=80", tags: ["Taj Mahal", "History", "Family"], description: "Delhi, Agra, and Jaipur in one go.", inclusions: ["AC Car", "Hotels", "Guides"], exclusions: ["Monuments"], itinerary: [{ day: 1, title: "Delhi", desc: "Sightseeing.", icon: "landmark" }], hotel: "3* City Hotels", bestTime: "Oct - Mar" },
            { id: 51, title: "Sundarbans: Mangrove Mystery", region: "Domestic", type: "Nature", collection: "Wildlife & Safari", duration: "2N/3D", price: 9000, agentPrice: 7000, rating: 4.5, image: "https://images.unsplash.com/photo-1619441164627-d460d379055e?w=800&q=80", tags: ["Tiger", "Boat", "Adventure"], description: "Largest mangrove forest and Royal Bengal Tigers.", inclusions: ["Boat Safari", "Eco Resort", "Meals"], exclusions: ["Tips"], itinerary: [{ day: 1, title: "Godkhali", desc: "Board Boat.", icon: "ship" }], hotel: "Eco Resort", bestTime: "Sep - Mar" },
            { id: 52, title: "Gir: Land of Lions", region: "Domestic", type: "Wildlife", collection: "Wildlife & Safari", duration: "3N/4D", price: 18500, agentPrice: 15500, rating: 4.8, image: "https://images.unsplash.com/photo-1577114436531-1634df982361?w=800&q=80", tags: ["Lions", "Safari", "VisaFree"], description: "The only home of Asiatic Lions.", inclusions: ["Jeep Safari", "Stay", "Meals"], exclusions: ["Travel to Diu"], itinerary: [{ day: 1, title: "Sasan Gir", desc: "Arrival.", icon: "camera" }], hotel: "Forest Resort", bestTime: "Nov - Mar" },
            { id: 53, title: "Ranthambore: Tiger Trail", region: "Domestic", type: "Wildlife", collection: "Wildlife & Safari", duration: "2N/3D", price: 16000, agentPrice: 13000, rating: 4.7, image: "https://images.unsplash.com/photo-1599596645396-9f7960787a70?w=800&q=80", tags: ["Tigers", "Fort", "VisaFree"], description: "Spot majestic tigers in Rajasthan's premier park.", inclusions: ["Canter Safari", "Resort"], exclusions: ["Lunch"], itinerary: [{ day: 1, title: "Sawai Madhopur", desc: "Check in.", icon: "hotel" }], hotel: "Luxury Tent", bestTime: "Oct - Jun" },
            { id: 54, title: "Periyar: Elephants", region: "Domestic", type: "Wildlife", collection: "Wildlife & Safari", duration: "2N/3D", price: 12000, agentPrice: 10000, rating: 4.6, image: "https://images.unsplash.com/photo-1573059883501-c88f72390a78?w=800&q=80", tags: ["Kerala", "Boat", "VisaFree"], description: "Boat safari amidst wild elephants.", inclusions: ["Boat Ride", "Stay"], exclusions: ["Travel"], itinerary: [{ day: 1, title: "Thekkady", desc: "Arrival.", icon: "tree" }], hotel: "3* Nature Resort", bestTime: "Sep - Mar" },
            { id: 55, title: "Pachmarhi: Queen of Satpura", region: "Domestic", type: "Nature", collection: "Incredible India", duration: "3N/4D", price: 14000, agentPrice: 11500, rating: 4.6, image: "https://images.unsplash.com/photo-1595180126743-3b4d1b8c1c0e?w=800&q=80", tags: ["Hill Station", "MP", "Relax"], description: "Waterfalls, caves and panoramic views in MP.", inclusions: ["Hotel", "Sightseeing"], exclusions: ["Entry Fee"], itinerary: [{ day: 1, title: "Arrival", desc: "Pandav Caves.", icon: "mountain" }], hotel: "3* Resort", bestTime: "Oct - Jun" },
            { id: 56, title: "Auli: Skiing Capital", region: "Domestic", type: "Nature", collection: "Pahadi Calling 🏔️", duration: "3N/4D", price: 16500, agentPrice: 13500, rating: 4.8, image: "https://images.unsplash.com/photo-1626084042879-166d3a847055?w=800&q=80", tags: ["Skiing", "Snow", "Winter"], description: "Ski slopes and Nanda Devi views.", inclusions: ["Ski Equipment", "Resort"], exclusions: ["Instructor"], itinerary: [{ day: 1, title: "Joshimath", desc: "Cable car.", icon: "snowflake" }], hotel: "Ski Resort", bestTime: "Jan - Mar", instantBook: true },
            { id: 57, title: "Wayanad: Green Paradise", region: "Domestic", type: "Nature", collection: "Young & Wild", duration: "3N/4D", price: 13500, agentPrice: 11000, rating: 4.7, image: "https://images.unsplash.com/photo-1600609386348-1c448439166f?w=800&q=80", tags: ["Caves", "Trek", "Chill"], description: "Edakkal caves and Chembra peak.", inclusions: ["Homestay", "Breakfast"], exclusions: ["Entry Fees"], itinerary: [{ day: 1, title: "Wayanad", desc: "Edakkal Caves.", icon: "leaf" }], hotel: "Eco Stay", bestTime: "Oct - May" },
            { id: 805, title: "Nagaland: Hornbill Festival", region: "Domestic", type: "Culture", collection: "Incredible India", duration: "5N/6D", price: 32000, agentPrice: 28000, rating: 4.9, image: "https://images.unsplash.com/photo-1616744955743-42e5b77c570b?w=800&q=80", tags: ["Tribal", "Festival", "Unique"], description: "Experience the festival of festivals in Kisama Heritage Village.", inclusions: ["ILP", "Homestay", "Guide"], exclusions: ["Camera Fee"], itinerary: [{ day: 1, title: "Dimapur", desc: "Drive to Kohima.", icon: "car" }, { day: 2, title: "Kisama", desc: "Festival Grounds.", icon: "camera" }], hotel: "Traditional Homestay", bestTime: "Dec (1st-10th)", visaPolicy: "ILP Required" },

            // --- INTERNATIONAL (Worldly Wonders) ---
            { id: 5, title: "Dubai: Desert & City", region: "International", type: "Luxury", collection: "Worldly Wonders", duration: "4N/5D", price: 45000, agentPrice: 38000, rating: 4.9, image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80", tags: ["Shopping", "Safari", "Insta-Worthy"], description: "Burj Khalifa and Desert Safari.", inclusions: ["Visa", "4* Hotel", "Safari"], exclusions: ["Tax"], itinerary: [{ day: 1, title: "Arrival", desc: "Transfer.", icon: "plane" }], hotel: "4* City Hotel", instantBook: true, bestTime: "Nov - Mar", visaPolicy: "E-Visa" },
            { id: 6, title: "Thailand: Island Fun", region: "International", type: "Beach", collection: "Worldly Wonders", duration: "5N/6D", price: 35000, agentPrice: 29000, rating: 4.7, image: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=800&q=80", tags: ["Phuket", "Krabi", "VisaFree"], description: "Tropical beaches and nightlife.", inclusions: ["Island Tour", "Transfers"], exclusions: ["Park Fee"], itinerary: [{ day: 1, title: "Phuket", desc: "Leisure.", icon: "umbrella-beach" }], hotel: "3* Beach Hotel", bestTime: "Nov - Apr", visaPolicy: "Visa Free" },
            { id: 11, title: "Bali: Island of Gods", region: "International", type: "Culture", collection: "Worldly Wonders", duration: "6N/7D", price: 48000, agentPrice: 41000, rating: 4.9, image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80", tags: ["Ubud", "Seminyak", "VisaFree"], description: "Temples, rice fields and beaches.", inclusions: ["Driver", "Villa", "Swing"], exclusions: ["Visa"], itinerary: [{ day: 1, title: "Arrival", desc: "Ubud.", icon: "plane" }], hotel: "4* Hotel & Villa", bestTime: "Apr - Oct", visaPolicy: "Visa on Arrival" },
            { id: 20, title: "Singapore: Future City", region: "International", type: "Luxury", collection: "Worldly Wonders", duration: "4N/5D", price: 52000, agentPrice: 46000, rating: 4.9, image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&q=80", tags: ["Sentosa", "Marina Bay", "Family"], description: "Gardens by the Bay and Universal Studios.", inclusions: ["Sentosa Pass", "3* Hotel", "Visa"], exclusions: ["Lunch"], itinerary: [{ day: 1, title: "Arrival", desc: "Night Safari.", icon: "moon" }], hotel: "3* City Hotel", bestTime: "Feb - Apr", visaPolicy: "E-Visa" },
            { id: 21, title: "Vietnam: Dragon Land", region: "International", type: "Culture", collection: "Worldly Wonders", duration: "6N/7D", price: 42000, agentPrice: 35000, rating: 4.8, image: "https://images.unsplash.com/photo-1557750255-c76072a7aad1?w=800&q=80", tags: ["Halong", "Hoi An", "VisaFree"], description: "Cruises and lantern festivals.", inclusions: ["Visa Letter", "Cruise", "Hotels"], exclusions: ["Flights"], itinerary: [{ day: 1, title: "Hanoi", desc: "Arrival.", icon: "plane" }], hotel: "3* Hotel + Cruise", bestTime: "Feb - Apr", visaPolicy: "E-Visa" },
            { id: 22, title: "Sri Lanka: Emerald Isle", region: "International", type: "Nature", collection: "Worldly Wonders", duration: "5N/6D", price: 32000, agentPrice: 28000, rating: 4.7, image: "https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?w=800&q=80", tags: ["Kandy", "Bentota", "VisaFree"], description: "Tea gardens and golden beaches.", inclusions: ["Private Car", "Hotels", "Breakfast"], exclusions: ["Visa"], itinerary: [{ day: 1, title: "Colombo", desc: "Transfer.", icon: "car" }], hotel: "4* Beach Resort", bestTime: "Dec - Mar", visaPolicy: "Free Visa" },
            { id: 23, title: "Swiss Alps & Paris", region: "International", type: "Luxury", collection: "Honeymoon Specials", duration: "6N/7D", price: 145000, agentPrice: 125000, rating: 5.0, image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=800&q=80", tags: ["Eiffel", "Alps", "Romance"], description: "The dream European vacation.", inclusions: ["Rail Pass", "Hotels", "Seine Cruise"], exclusions: ["Flights"], itinerary: [{ day: 1, title: "Paris", desc: "Arrival.", icon: "plane" }], hotel: "4* City Hotels", bestTime: "Jun - Aug", visaPolicy: "Schengen Visa" },
            { id: 24, title: "Turkey: East Meets West", region: "International", type: "Culture", collection: "Worldly Wonders", duration: "7N/8D", price: 95000, agentPrice: 85000, rating: 4.8, image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800&q=80", tags: ["Istanbul", "Cappadocia", "Hot Air Balloon"], description: "Hot air balloons and history.", inclusions: ["Domestic Flights", "Cave Hotel", "Tours"], exclusions: ["Balloon Ride"], itinerary: [{ day: 1, title: "Istanbul", desc: "Welcome.", icon: "plane" }], hotel: "Cave Hotel & 4*", bestTime: "Apr - May", visaPolicy: "E-Visa" },
            { id: 25, title: "Azerbaijan: Baku", region: "International", type: "Culture", collection: "Worldly Wonders", duration: "4N/5D", price: 38000, agentPrice: 32000, rating: 4.6, image: "https://images.unsplash.com/photo-1539650116455-251d9a6952cd?w=800&q=80", tags: ["Flame Towers", "VisaFree"], description: "European charm on a budget.", inclusions: ["E-Visa", "City Tour"], exclusions: ["Flights"], itinerary: [{ day: 1, title: "Baku", desc: "Arrival.", icon: "plane" }], hotel: "4* Central Hotel", bestTime: "Apr - Jun", visaPolicy: "E-Visa" },
            { id: 26, title: "Malaysia: True Asia", region: "International", type: "Culture", collection: "Worldly Wonders", duration: "5N/6D", price: 35000, agentPrice: 29000, rating: 4.7, image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=800&q=80", tags: ["KL Tower", "Langkawi", "VisaFree"], description: "Twin towers and tropical islands.", inclusions: ["Hotels", "Transfers"], exclusions: ["Tourism Tax"], itinerary: [{ day: 1, title: "KL", desc: "City tour.", icon: "building" }], hotel: "4* City Hotel", bestTime: "Dec - Feb", visaPolicy: "Visa Free" },
            { id: 27, title: "Hong Kong & Macau", region: "International", type: "Luxury", collection: "Worldly Wonders", duration: "5N/6D", price: 65000, agentPrice: 55000, rating: 4.9, image: "https://images.unsplash.com/photo-1506318137071-a8bcbf675b27?w=800&q=80", tags: ["Disneyland", "Casino", "Family"], description: "Skyline views and entertainment.", inclusions: ["Ferry", "Hotels", "Disney Tix"], exclusions: ["Lunch"], itinerary: [{ day: 1, title: "HK", desc: "Arrival.", icon: "plane" }], hotel: "4* Hotel", bestTime: "Oct - Dec", visaPolicy: "Pre-Arrival Reg" },
            { id: 28, title: "Australia: Aussie Adventure", region: "International", type: "Adventure", collection: "Worldly Wonders", duration: "8N/9D", price: 175000, agentPrice: 155000, rating: 5.0, image: "https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?w=800&q=80", tags: ["Sydney", "Gold Coast"], description: "Opera House, Reefs, and Kangaroos.", inclusions: ["4* Hotels", "Attraction Passes"], exclusions: ["Flights"], itinerary: [{ day: 1, title: "Sydney", desc: "Harbour View.", icon: "water" }], hotel: "4* Central Hotels", bestTime: "Sep - Nov", visaPolicy: "E-Visitor" },
            { id: 29, title: "South Africa: Wild & Free", region: "International", type: "Adventure", collection: "Worldly Wonders", duration: "7N/8D", price: 130000, agentPrice: 110000, rating: 4.9, image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80", tags: ["Cape Town", "Safari", "VisaFree"], description: "Table Mountain and Kruger Safari.", inclusions: ["Safari", "Hotels", "Garden Route"], exclusions: ["Lunch"], itinerary: [{ day: 1, title: "Cape Town", desc: "Arrival.", icon: "plane" }], hotel: "4* & Safari Lodge", bestTime: "May - Sep", visaPolicy: "E-Visa" },
            { id: 30, title: "Egypt: Pharaoh's Land", region: "International", type: "History", collection: "Worldly Wonders", duration: "6N/7D", price: 78000, agentPrice: 65000, rating: 4.8, image: "https://images.unsplash.com/photo-1539650116455-251d9a6952cd?w=800&q=80", tags: ["Pyramids", "Nile", "VisaFree"], description: "Walk through history in Cairo and Luxor.", inclusions: ["Nile Cruise", "Guide", "Entry"], exclusions: ["Tips"], itinerary: [{ day: 1, title: "Cairo", desc: "Pyramids.", icon: "landmark" }], hotel: "5* Nile Cruise", bestTime: "Oct - Apr", visaPolicy: "Visa on Arrival" },
            { id: 31, title: "USA: West Coast", region: "International", type: "Luxury", collection: "Worldly Wonders", duration: "9N/10D", price: 250000, agentPrice: 220000, rating: 5.0, image: "https://images.unsplash.com/photo-1449034446853-66c86144b0ad?w=800&q=80", tags: ["LA", "Vegas"], description: "Hollywood, Grand Canyon and Casinos.", inclusions: ["Hotels", "Tours", "Transfers"], exclusions: ["Flights"], itinerary: [{ day: 1, title: "San Francisco", desc: "Golden Gate.", icon: "bridge" }], hotel: "4* Hotels", bestTime: "Jun - Aug", visaPolicy: "US Visa" },
            { id: 32, title: "London & Scotland", region: "International", type: "Culture", collection: "Worldly Wonders", duration: "7N/8D", price: 110000, agentPrice: 95000, rating: 4.9, image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&q=80", tags: ["Big Ben", "Highlands"], description: "Royal palaces and scenic highlands.", inclusions: ["Train", "Hotels", "Tours"], exclusions: ["Visa"], itinerary: [{ day: 1, title: "London", desc: "Arrival.", icon: "plane" }], hotel: "4* Central", bestTime: "May - Sep", visaPolicy: "UK Visa" },
            { id: 33, title: "Italy: Dolce Vita", region: "International", type: "Culture", collection: "Honeymoon Specials", duration: "6N/7D", price: 135000, agentPrice: 115000, rating: 4.9, image: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=800&q=80", tags: ["Venice", "Rome", "Romance"], description: "Gondola rides, pizza, and history.", inclusions: ["Trains", "4* Hotels"], exclusions: ["City Tax"], itinerary: [{ day: 1, title: "Rome", desc: "Colosseum.", icon: "landmark" }], hotel: "4* Boutique", bestTime: "Apr - Jun", visaPolicy: "Schengen Visa" },
            { id: 34, title: "Seychelles: Tropical Luxe", region: "International", type: "Beach", collection: "Honeymoon Specials", duration: "5N/6D", price: 120000, agentPrice: 100000, rating: 5.0, image: "https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?w=800&q=80", tags: ["Luxury", "Beaches", "VisaFree"], description: "Exclusive islands and granite boulders.", inclusions: ["Resort", "Ferry"], exclusions: ["Water Sports"], itinerary: [{ day: 1, title: "Mahe", desc: "Arrival.", icon: "plane" }], hotel: "5* Beach Resort", bestTime: "Apr - May", visaPolicy: "Visa Free" },
            { id: 35, title: "USA: East Coast Magic", region: "International", type: "Luxury", collection: "Worldly Wonders", duration: "6N/7D", price: 180000, agentPrice: 150000, rating: 4.8, image: "https://images.unsplash.com/photo-1496442226666-8d4a0e62e6e9?w=800&q=80", tags: ["Times Square", "History"], description: "The Big Apple and the Capital.", inclusions: ["Hotels", "Tours"], exclusions: ["Flights"], itinerary: [{ day: 1, title: "NYC", desc: "Arrival.", icon: "building" }], hotel: "4* City Hotels", bestTime: "May - Sep", visaPolicy: "US Visa" },
            { id: 36, title: "Spain: Fiesta & Siesta", region: "International", type: "Culture", collection: "Young & Wild", duration: "7N/8D", price: 140000, agentPrice: 120000, rating: 4.9, image: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=800&q=80", tags: ["Party", "Festival"], description: "Vibrant festivals and Mediterranean beaches.", inclusions: ["Stay", "Train"], exclusions: ["Visa"], itinerary: [{ day: 1, title: "Barcelona", desc: "Hola!", icon: "sun" }], hotel: "4* Modern", bestTime: "May - Sep", visaPolicy: "Schengen Visa" },
            { id: 37, title: "Abu Dhabi: Yas Island", region: "International", type: "Luxury", collection: "Worldly Wonders", duration: "3N/4D", price: 32000, agentPrice: 28000, rating: 4.8, image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80", tags: ["Ferrari World", "Luxury"], description: "Theme parks and luxury shopping.", inclusions: ["Park Tickets", "Hotel"], exclusions: ["Flights"], itinerary: [{ day: 1, title: "Yas Island", desc: "Check in.", icon: "hotel" }], hotel: "4* Yas Hotel", bestTime: "Nov - Mar", visaPolicy: "E-Visa" },
            { id: 38, title: "Eastern Europe Charm", region: "International", type: "Culture", collection: "Worldly Wonders", duration: "7N/8D", price: 110000, agentPrice: 95000, rating: 4.8, image: "https://images.unsplash.com/photo-1565099824688-e93eb20fe622?w=800&q=80", tags: ["Prague", "Budapest"], description: "Medieval cities and thermal baths.", inclusions: ["Train", "Hotels"], exclusions: ["Visa"], itinerary: [{ day: 1, title: "Prague", desc: "Old Town.", icon: "landmark" }], hotel: "4* Central", bestTime: "May - Sep", visaPolicy: "Schengen Visa" },
            { id: 601, title: "Cordelia: Mumbai to Goa", region: "Domestic", type: "Cruise", collection: "Cruise Control", duration: "2N/3D", price: 28000, agentPrice: 22000, rating: 4.7, image: "https://images.unsplash.com/photo-1548574505-5e239809ee19?w=800&q=80", tags: ["Casino", "Ocean", "Cruise"], description: "India's premium cruise liner experience.", inclusions: ["All Meals", "Shows", "Stay"], exclusions: ["Alcohol", "Spa"], itinerary: [{ day: 1, title: "Mumbai", desc: "Boarding.", icon: "ship" }], hotel: "Ocean View Cabin", bestTime: "Sep - May", visaPolicy: "NA" },
            { id: 602, title: "Singapore Cruise: Spectrum", region: "International", type: "Cruise", collection: "Cruise Control", duration: "3N/4D", price: 45000, agentPrice: 38000, rating: 4.9, image: "https://images.unsplash.com/photo-1559599238-308793637427?w=800&q=80", tags: ["Luxury", "Penang", "Cruise"], description: "Royal Caribbean cruise to Penang/Phuket.", inclusions: ["Meals", "Activities"], exclusions: ["Gratuity"], itinerary: [{ day: 1, title: "Singapore", desc: "Set sail.", icon: "ship" }], hotel: "Balcony Stateroom", bestTime: "All Year", visaPolicy: "Multiple Entry SG" },
            
            // New Additions
            { id: 907, title: "Seoul: K-Pop & Culture", region: "International", type: "Culture", collection: "Worldly Wonders", duration: "6N/7D", price: 85000, agentPrice: 75000, rating: 4.8, image: "https://images.unsplash.com/photo-1517154421773-052f83c42226?w=800&q=80", tags: ["K-Pop", "Food", "GenZ"], description: "Experience the vibrant culture of South Korea.", inclusions: ["City Tour", "Hotel", "T-Money Card"], exclusions: ["Flights"], itinerary: [{ day: 1, title: "Incheon", desc: "Arrival.", icon: "plane" }], hotel: "4* Myeongdong Hotel", bestTime: "Mar - May", visaPolicy: "E-Visa" },
            { id: 606, title: "Finland: Santa's Home", region: "International", type: "Nature", collection: "Worldly Wonders", duration: "5N/6D", price: 195000, agentPrice: 175000, rating: 5.0, image: "https://images.unsplash.com/photo-1517330357046-3ab5a5dd42a1?w=800&q=80", tags: ["Aurora", "Snow"], description: "Visit Santa Claus Village and see Northern Lights.", inclusions: ["Igloo Stay", "Husky Safari"], exclusions: ["Flights"], itinerary: [{ day: 1, title: "Rovaniemi", desc: "Arctic Circle.", icon: "snowflake" }], hotel: "Glass Igloo", bestTime: "Dec - Mar", visaPolicy: "Schengen Visa" },
            { id: 908, title: "Tokyo: Anime & Tech", region: "International", type: "Culture", collection: "Worldly Wonders", duration: "6N/7D", price: 155000, agentPrice: 140000, rating: 4.9, image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=800&q=80", tags: ["Anime", "Tech", "GenZ"], description: "Akihabara, Shibuya Crossing and Sushi.", inclusions: ["Hotel", "TeamLab Ticket"], exclusions: ["Flights"], itinerary: [{ day: 1, title: "Tokyo", desc: "Shibuya.", icon: "city" }], hotel: "3* Shinjuku Hotel", bestTime: "Mar - May", visaPolicy: "E-Visa" },
            { id: 993, title: "Ramayana Trail Sri Lanka", region: "International", type: "Spiritual", collection: "Pavitra Yatra", duration: "6N/7D", price: 38000, agentPrice: 32000, rating: 4.8, image: "https://images.unsplash.com/photo-1588258219511-64eb629cb833?w=800&q=75", tags: ["Mythology", "History"], description: "Visit sites associated with the Ramayana epic in Sri Lanka.", inclusions: ["Driver", "Hotels", "Entry Fees"], exclusions: ["Flights"], itinerary: [{ day: 1, title: "Colombo", desc: "Arrival." }], hotel: "3* Hotels", bestTime: "Dec - Mar", visaPolicy: "Free Visa", instantBook: true },

            // --- SPIRITUAL (Mann Ki Shanti / Pavitra Yatra) ---
            { id: 301, title: "Char Dham Yatra", region: "Domestic", type: "Spiritual", collection: "Pavitra Yatra", duration: "9N/10D", price: 35000, agentPrice: 30000, rating: 4.9, image: "https://images.unsplash.com/photo-1622483737392-255431de8f40?w=800&q=75", tags: ["Kedarnath", "Badrinath"], description: "The ultimate pilgrimage in Himalayas.", inclusions: ["Transport", "Stay", "Registration"], exclusions: ["Pony/Doli"], itinerary: [{ day: 1, title: "Haridwar", desc: "Start.", icon: "om" }], hotel: "Standard Hotels", bestTime: "May - Oct", visaPolicy: "NA" },
            { id: 302, title: "Varanasi: Kashi Darshan", region: "Domestic", type: "Spiritual", collection: "Pavitra Yatra", duration: "3N/4D", price: 18500, agentPrice: 15000, rating: 4.8, image: "https://images.unsplash.com/photo-1561361522-58907043a553?w=800&q=75", tags: ["Ganga Aarti"], description: "Spiritual capital of India.", inclusions: ["Boat Ride", "Temple Tour"], exclusions: ["Offerings"], itinerary: [{ day: 1, title: "Arrival", desc: "Aarti.", icon: "water" }], hotel: "3* Hotel", bestTime: "Oct - Mar", visaPolicy: "NA" },
            { id: 303, title: "Vaishno Devi: Jai Mata Di", region: "Domestic", type: "Spiritual", collection: "Pavitra Yatra", duration: "2N/3D", price: 9500, agentPrice: 7500, rating: 4.9, image: "https://images.unsplash.com/photo-1591289009723-aef0a1a8a211?w=800&q=75", tags: ["Katra", "Trek"], description: "Divine darshan at Trikuta hills.", inclusions: ["Hotel", "Pick/Drop"], exclusions: ["Helicopter"], itinerary: [{ day: 1, title: "Katra", desc: "Trek start.", icon: "mountain" }], hotel: "3* Katra Hotel", bestTime: "All Year", visaPolicy: "NA" },
            { id: 304, title: "Tirupati Balaji", region: "Domestic", type: "Spiritual", collection: "Pavitra Yatra", duration: "1N/2D", price: 8000, agentPrice: 6000, rating: 4.8, image: "https://images.unsplash.com/photo-1628062120087-43a99202422c?w=800&q=75", tags: ["Darshan", "South"], description: "The richest temple in the world.", inclusions: ["Darshan Ticket Assistance", "Stay"], exclusions: ["Travel"], itinerary: [{ day: 1, title: "Tirumala", desc: "Darshan.", icon: "temple" }], hotel: "3* Hotel", bestTime: "All Year", visaPolicy: "NA" },
            { id: 305, title: "Puri Jagannath Dham", region: "Domestic", type: "Spiritual", collection: "Pavitra Yatra", duration: "2N/3D", price: 12000, agentPrice: 9000, rating: 4.7, image: "https://images.unsplash.com/photo-1627918388837-7744359eb39c?w=800&q=75", tags: ["Odisha", "Temple"], description: "Lord Jagannath's abode by the sea.", inclusions: ["Hotel", "AC Car"], exclusions: ["Panda Fee"], itinerary: [{ day: 1, title: "Puri", desc: "Beach & Temple.", icon: "sun" }], hotel: "Beach Resort", bestTime: "Oct - Mar", visaPolicy: "NA" },
            { id: 306, title: "Rameswaram & Madurai", region: "Domestic", type: "Spiritual", collection: "Pavitra Yatra", duration: "3N/4D", price: 16500, agentPrice: 13500, rating: 4.8, image: "https://images.unsplash.com/photo-1582556272565-5c9429402e3b?w=800&q=75", tags: ["Jyotirlinga"], description: "Where Lord Rama worshipped Shiva.", inclusions: ["Transport", "Stay"], exclusions: ["Meals"], itinerary: [{ day: 1, title: "Madurai", desc: "Meenakshi Temple.", icon: "temple" }], hotel: "3* Hotel", bestTime: "Oct - Mar", visaPolicy: "NA" },
            { id: 307, title: "Kailash Mansarovar", region: "International", type: "Spiritual", collection: "Pavitra Yatra", duration: "13N/14D", price: 185000, agentPrice: 160000, rating: 5.0, image: "https://images.unsplash.com/photo-1558272662-79c239459203?w=800&q=75", tags: ["Shiva", "Tibet"], description: "The ultimate pilgrimage to Mount Kailash.", inclusions: ["Visa", "Permits", "Sherpa"], exclusions: ["Personal Gear"], itinerary: [{ day: 1, title: "Kathmandu", desc: "Assembly.", icon: "mountain" }], hotel: "Guest House/Camp", bestTime: "May - Sep", visaPolicy: "Special Permit" },
            { id: 308, title: "Muktinath Yatra (Nepal)", region: "International", type: "Spiritual", collection: "Pavitra Yatra", duration: "5N/6D", price: 28000, agentPrice: 24000, rating: 4.7, image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&q=75", tags: ["Vishnu", "Mustang"], description: "Sacred temple in the Mustang valley.", inclusions: ["Flights (Pokhara-Jomsom)", "Stay"], exclusions: ["Intl Flights"], itinerary: [{ day: 1, title: "Kathmandu", desc: "Arrival.", icon: "plane" }], hotel: "3* Hotel", bestTime: "Mar - May", visaPolicy: "Visa Free" },
            { id: 311, title: "Somnath & Dwarka", region: "Domestic", type: "Spiritual", collection: "Pavitra Yatra", duration: "4N/5D", price: 21000, agentPrice: 17500, rating: 4.9, image: "https://images.unsplash.com/photo-1605628628734-75d5e94b2f8f?w=800&q=75", tags: ["Krishna", "Jyotirlinga"], description: "Land of Lord Krishna and first Jyotirlinga.", inclusions: ["AC Car", "Hotels"], exclusions: ["Meals"], itinerary: [{ day: 1, title: "Ahmedabad", desc: "Drive.", icon: "car" }], hotel: "3* Hotel", bestTime: "Nov - Feb", visaPolicy: "NA" },
            { id: 312, title: "Shirdi Sai Baba", region: "Domestic", type: "Spiritual", collection: "Pavitra Yatra", duration: "2N/3D", price: 10000, agentPrice: 8000, rating: 4.8, image: "https://images.unsplash.com/photo-1604332790936-236b9c9f4c3f?w=800&q=75", tags: ["Sai Baba", "Faith"], description: "Seek blessings at Shirdi.", inclusions: ["Transport", "VIP Darshan Assist"], exclusions: ["Train"], itinerary: [{ day: 1, title: "Shirdi", desc: "Arrival.", icon: "train" }], hotel: "3* Hotel near Temple", bestTime: "All Year", visaPolicy: "NA" },
            { id: 313, title: "Mathura & Vrindavan", region: "Domestic", type: "Spiritual", collection: "Pavitra Yatra", duration: "2N/3D", price: 9500, agentPrice: 7000, rating: 4.8, image: "https://images.unsplash.com/photo-1572455026997-7597402a8335?w=800&q=75", tags: ["Krishna", "Braj"], description: "Playground of Lord Krishna.", inclusions: ["Guide", "Car"], exclusions: ["Food"], itinerary: [{ day: 1, title: "Mathura", desc: "Krishna Janmabhoomi.", icon: "temple" }], hotel: "3* Hotel", bestTime: "Oct - Mar", visaPolicy: "NA" },
            { id: 316, title: "Ajmer Sharif Dargah", region: "Domestic", type: "Spiritual", collection: "Pavitra Yatra", duration: "2N/3D", price: 9000, agentPrice: 7000, rating: 4.9, image: "https://images.unsplash.com/photo-1590664216212-62e7637d1665?w=800&q=75", tags: ["Sufi", "Peace"], description: "Khwaja Moinuddin Chishti's Dargah.", inclusions: ["Hotel", "Transfers"], exclusions: ["Chadars"], itinerary: [{ day: 1, title: "Ajmer", desc: "Ziyarat.", icon: "mosque" }], hotel: "3* Hotel", bestTime: "All Year", visaPolicy: "NA" },
            { id: 317, title: "Ayodhya: Ram Janmabhoomi", region: "Domestic", type: "Spiritual", collection: "Pavitra Yatra", duration: "2N/3D", price: 11000, agentPrice: 9000, rating: 4.9, image: "https://images.unsplash.com/photo-1705912443425-4c0704996924?w=800&q=75", tags: ["Ram Mandir", "Saryu"], description: "Darshan of Ram Lalla and Saryu Aarti.", inclusions: ["Hotel", "Darshan Guide"], exclusions: ["Travel to Ayodhya"], itinerary: [{ day: 1, title: "Ayodhya", desc: "Arrival & Aarti.", icon: "temple" }, { day: 2, title: "Darshan", desc: "Ram Mandir.", icon: "pray" }], hotel: "3* Hotel", bestTime: "Oct - Mar", visaPolicy: "NA" },

            // Buddhist
            { id: 309, title: "Bodh Gaya & Sarnath", region: "Domestic", type: "Spiritual", collection: "Pavitra Yatra", duration: "4N/5D", price: 18000, agentPrice: 15000, rating: 4.8, image: "https://images.unsplash.com/photo-1569288285918-3c0663473c43?w=800&q=75", tags: ["Budhism", "Peace"], description: "Where Buddha attained enlightenment.", inclusions: ["Guide", "Transport"], exclusions: ["Donations"], itinerary: [{ day: 1, title: "Gaya", desc: "Mahabodhi Temple." }], hotel: "3* Hotel", bestTime: "Oct - Mar", visaPolicy: "NA" },
            { id: 310, title: "Lumbini: Birth of Buddha", region: "International", type: "Spiritual", collection: "Pavitra Yatra", duration: "3N/4D", price: 15000, agentPrice: 12000, rating: 4.6, image: "https://images.unsplash.com/photo-1623953447959-b9a3044a2c0f?w=800&q=75", tags: ["Nepal", "History"], description: "Birthplace of Lord Buddha.", inclusions: ["Hotel", "Car"], exclusions: ["Visa"], itinerary: [{ day: 1, title: "Bhairahawa", desc: "Drive to Lumbini." }], hotel: "3* Hotel", bestTime: "Sep - Apr", visaPolicy: "Visa Free" },
            { id: 314, title: "Sanchi Stupa", region: "Domestic", type: "Spiritual", collection: "Pavitra Yatra", duration: "2N/3D", price: 11000, agentPrice: 9000, rating: 4.7, image: "https://images.unsplash.com/photo-1590425762692-42484a005697?w=800&q=75", tags: ["UNESCO", "Ashoka"], description: "Ancient Buddhist complex in MP.", inclusions: ["Stay in Bhopal", "Car"], exclusions: ["Entry"], itinerary: [{ day: 1, title: "Bhopal", desc: "Arrival." }], hotel: "3* City Hotel", bestTime: "Nov - Feb", visaPolicy: "NA" },
            { id: 315, title: "Kushinagar: Parinirvana", region: "Domestic", type: "Spiritual", collection: "Pavitra Yatra", duration: "2N/3D", price: 12000, agentPrice: 9500, rating: 4.6, image: "https://images.unsplash.com/photo-1628672068340-9774775276e0?w=800&q=75", tags: ["Budhism", "UP"], description: "Where Buddha attained Parinirvana.", inclusions: ["Hotel", "Transport"], exclusions: ["Meals"], itinerary: [{ day: 1, title: "Gorakhpur", desc: "Drive." }], hotel: "3* Hotel", bestTime: "Oct - Mar", visaPolicy: "NA" },

            // --- YOUTHFUL (Yaaron Ki Trip) ---
            { id: 401, title: "Kasol: Mini Israel", region: "Domestic", type: "Youthful", collection: "Young & Wild", duration: "4N/5D", price: 12000, agentPrice: 9500, rating: 4.7, image: "https://images.unsplash.com/photo-1599408223644-440115336881?w=800&q=75", tags: ["Parvati Valley", "Trek"], description: "Riverside cafes and Kheerganga trek.", inclusions: ["Volvo", "Camps", "Meals"], exclusions: ["Porter"], itinerary: [{ day: 1, title: "Kasol", desc: "Chalal Trek.", icon: "hiking" }], hotel: "Riverside Camp", bestTime: "Mar - Jun", visaPolicy: "NA" },
            { id: 402, title: "Rishikesh: Rafting", region: "Domestic", type: "Adventure", collection: "Young & Wild", duration: "2N/3D", price: 8500, agentPrice: 6500, rating: 4.7, image: "https://images.unsplash.com/photo-1506473082729-e31a89c258d3?w=800&q=75", tags: ["Rafting", "Camping"], description: "Adrenaline on the Ganges.", inclusions: ["Rafting", "Camp", "Meals"], exclusions: ["Bungee"], itinerary: [{ day: 1, title: "Camp", desc: "Bonfire.", icon: "fire" }], hotel: "Luxury Tent", bestTime: "Sep - Jun", visaPolicy: "NA" },
            { id: 403, title: "Goa: Friends Trip", region: "Domestic", type: "Beach", collection: "Young & Wild", duration: "3N/4D", price: 18500, agentPrice: 15000, rating: 4.6, image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&q=75", tags: ["North Goa", "Party"], description: "Scooters, beaches, and nightlife.", inclusions: ["Hotel", "Scooter"], exclusions: ["Drinks"], itinerary: [{ day: 1, title: "Baga", desc: "Arrival." }], hotel: "Boutique Hotel", bestTime: "Nov - Feb", visaPolicy: "NA" },
            { id: 404, title: "Bir Billing: Paragliding", region: "Domestic", type: "Youthful", collection: "Young & Wild", duration: "3N/4D", price: 14500, agentPrice: 11000, rating: 4.7, image: "https://images.unsplash.com/photo-1608280854894-3358c213ac54?w=800&q=75", tags: ["Fly", "Monastery"], description: "World's 2nd highest paragliding site.", inclusions: ["Flight", "Camp"], exclusions: ["Travel"], itinerary: [{ day: 1, title: "Bir", desc: "Cafe hopping.", icon: "cloud" }], hotel: "Glamping", bestTime: "Mar - Jun", visaPolicy: "NA" },
            { id: 405, title: "Gokarna: Beach Trek", region: "Domestic", type: "Youthful", collection: "Young & Wild", duration: "2N/3D", price: 7500, agentPrice: 5500, rating: 4.8, image: "https://images.unsplash.com/photo-1614713568779-7f3c9597257e?w=800&q=75", tags: ["Om Beach", "Chill"], description: "The quieter alternative to Goa.", inclusions: ["Hostel", "Trek Guide"], exclusions: ["Food"], itinerary: [{ day: 1, title: "Kudle", desc: "Sunset.", icon: "sun" }], hotel: "Backpacker Hostel", bestTime: "Oct - Mar", visaPolicy: "NA" },
            { id: 406, title: "Pushkar: Camel Fair", region: "Domestic", type: "Youthful", collection: "Young & Wild", duration: "2N/3D", price: 8000, agentPrice: 6500, rating: 4.6, image: "https://images.unsplash.com/photo-1590664216212-62e7637d1665?w=800&q=75", tags: ["Hippie", "Culture"], description: "Vibrant markets and ghats.", inclusions: ["Cottage", "Breakfast"], exclusions: ["Travel"], itinerary: [{ day: 1, title: "Pushkar", desc: "Lake visit." }], hotel: "Heritage Cottage", bestTime: "Oct - Mar", visaPolicy: "NA" },
            { id: 407, title: "Ziro Valley: Music", region: "Domestic", type: "Youthful", collection: "Young & Wild", duration: "4N/5D", price: 22000, agentPrice: 18000, rating: 4.8, image: "https://images.unsplash.com/photo-1598616239103-689369949e25?w=800&q=75", tags: ["Festival", "Nature"], description: "Home of the Ziro Music Festival.", inclusions: ["Camp", "Local Transport"], exclusions: ["Flights"], itinerary: [{ day: 1, title: "Guwahati", desc: "Drive." }], hotel: "Campsite", bestTime: "Sep (Festival)", visaPolicy: "ILP Req" },
            { id: 204, title: "Tawang: Hidden Paradise", region: "Domestic", type: "Adventure", collection: "Young & Wild", duration: "6N/7D", price: 32000, agentPrice: 28000, rating: 4.8, image: "https://images.unsplash.com/photo-1626862828062-8706d3989c7d?w=800&q=75", tags: ["Monastery", "Snow"], description: "Unexplored Arunachal Pradesh.", inclusions: ["ILP", "Car", "Stay"], exclusions: ["Lunch"], itinerary: [{ day: 1, title: "Guwahati", desc: "Drive to Bomdila." }], hotel: "3* Hotel", bestTime: "Mar - Oct", visaPolicy: "ILP Req" },

            // --- ADVENTURE (Pahadi Calling) ---
            { id: 501, title: "Hampta Pass Trek", region: "Domestic", type: "Trek", collection: "Adventure Awaits", duration: "5N/6D", price: 18500, agentPrice: 14000, rating: 4.8, image: "https://images.unsplash.com/photo-1598155513123-e913098254b3?w=800&q=75", tags: ["Snow", "Crossover"], description: "Kullu to Spiti crossover trek.", inclusions: ["Guide", "Gear", "Meals"], exclusions: ["Backpack"], itinerary: [{ day: 1, title: "Manali", desc: "Base." }], hotel: "Camping", bestTime: "Jun - Sep", visaPolicy: "NA" },
            { id: 502, title: "Spiti Valley Roadtrip", region: "Domestic", type: "Adventure", collection: "Adventure Awaits", duration: "7N/8D", price: 28000, agentPrice: 24000, rating: 4.9, image: "https://images.unsplash.com/photo-1626621338662-7232239322c9?w=800&q=75", tags: ["Road Trip", "Cold Desert"], description: "The middle land of Himalayas.", inclusions: ["Tempo Traveller", "Homestays"], exclusions: ["Lunch"], itinerary: [{ day: 1, title: "Manali", desc: "Start." }], hotel: "Homestays", bestTime: "Jun - Oct", visaPolicy: "NA" },
            { id: 503, title: "Kedarkantha Trek", region: "Domestic", type: "Trek", collection: "Adventure Awaits", duration: "4N/5D", price: 12500, agentPrice: 10000, rating: 4.8, image: "https://images.unsplash.com/photo-1610996894676-46f91d044230?w=800&q=75", tags: ["Winter Trek", "Summit"], description: "Best winter summit trek for beginners.", inclusions: ["Guide", "Camps", "Meals"], exclusions: ["Gear"], itinerary: [{ day: 1, title: "Sankri", desc: "Base." }], hotel: "Camping", bestTime: "Dec - Apr", visaPolicy: "NA" },
            { id: 504, title: "Valley of Flowers", region: "Domestic", type: "Trek", collection: "Adventure Awaits", duration: "5N/6D", price: 16000, agentPrice: 13000, rating: 4.9, image: "https://images.unsplash.com/photo-1566808905380-49638c407677?w=800&q=75", tags: ["Monsoon", "UNESCO"], description: "A fairyland of alpine flowers.", inclusions: ["Hotel", "Guide", "Meals"], exclusions: ["Mule"], itinerary: [{ day: 1, title: "Govindghat", desc: "Drive." }], hotel: "Guest House", bestTime: "Jul - Sep", visaPolicy: "NA" },
            { id: 505, title: "Chadar Trek", region: "Domestic", type: "Adventure", collection: "Adventure Awaits", duration: "8N/9D", price: 65000, agentPrice: 55000, rating: 5.0, image: "https://images.unsplash.com/photo-1549527963-c7e63b632426?w=800&q=75", tags: ["Frozen River", "Extreme"], description: "Walking on the frozen Zanskar river.", inclusions: ["Expert Guide", "Equipment", "Meals"], exclusions: ["Flights"], itinerary: [{ day: 1, title: "Leh", desc: "Acclimatize." }], hotel: "Camping", bestTime: "Jan - Feb", visaPolicy: "NA" },
            { id: 506, title: "Triund Trek", region: "Domestic", type: "Trek", collection: "Adventure Awaits", duration: "1N/2D", price: 3500, agentPrice: 2500, rating: 4.7, image: "https://images.unsplash.com/photo-1593693411606-25e24744b673?w=800&q=75", tags: ["Weekend", "Dharamshala"], description: "Easy weekend trek with stunning views.", inclusions: ["Camp", "Guide", "Dinner"], exclusions: ["Water"], itinerary: [{ day: 1, title: "Mcleodganj", desc: "Start hike." }], hotel: "Camping", bestTime: "Mar - Jun / Sep - Dec", visaPolicy: "NA" },
            { id: 992, title: "Auli Skiing Adventure", region: "Domestic", type: "Adventure", collection: "Pahadi Calling 🏔️", duration: "3N/4D", price: 18500, agentPrice: 15000, rating: 4.9, image: "https://images.unsplash.com/photo-1548577322-2a297924d528?w=800&q=75", tags: ["Snow", "Skiing", "Insta-Worthy"], description: "Learn to ski in India's premier ski destination.", inclusions: ["Ski Equipment", "Instructor", "Stay"], exclusions: ["Cable Car"], itinerary: [{ day: 1, title: "Joshimath", desc: "Base Camp." }], hotel: "Ski Resort", bestTime: "Jan - Mar", instantBook: true }
        ];

        // --- SKELETON CARD ---
        const SkeletonCard = () => (
            <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden animate-pulse">
                <div className="h-56 bg-gray-100 animate-shimmer"></div>
                <div className="p-6 space-y-4">
                    <div className="h-4 bg-gray-100 rounded w-1/3 animate-shimmer"></div>
                    <div className="h-6 bg-gray-100 rounded w-3/4 animate-shimmer"></div>
                    <div className="h-4 bg-gray-100 rounded w-full animate-shimmer"></div>
                    <div className="flex justify-between pt-4 border-t border-gray-50">
                        <div className="h-8 bg-gray-100 rounded w-1/3 animate-shimmer"></div>
                        <div className="h-8 bg-gray-100 rounded w-1/4 animate-shimmer"></div>
                    </div>
                </div>
            </div>
        );
        
        // --- QUICK VIEW MODAL COMPONENT ---
        const QuickViewModal = ({ pkg, onClose, onPriceFormat }) => {
            if (!pkg) return null;
            return (
                <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-fade-in" onClick={onClose}>
                    <div className="bg-white/95 backdrop-blur-2xl rounded-[2rem] w-full max-w-lg overflow-hidden shadow-2xl animate-pop-in relative border border-white/50" onClick={e => e.stopPropagation()}>
                        <button onClick={onClose} className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 backdrop-blur-md text-white rounded-full w-10 h-10 flex items-center justify-center transition-all z-10 border border-white/30">
                            <i className="fas fa-times"></i>
                        </button>
                        <div className="h-56 relative group">
                            <img src={pkg.image} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                            <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent text-white">
                                <h3 className="font-bold text-2xl font-display">{pkg.title}</h3>
                                <p className="text-sm font-medium opacity-90 flex items-center gap-2 mt-1"><i className="fas fa-map-marker-alt text-teal-400"></i> {pkg.region} • {pkg.duration}</p>
                            </div>
                        </div>
                        <div className="p-8">
                            <p className="text-slate-600 mb-6 text-base leading-relaxed">{pkg.description}</p>
                            <div className="flex gap-2 mb-8 overflow-x-auto no-scrollbar">
                                {pkg.inclusions.slice(0,3).map((inc, i) => (
                                    <span key={i} className="text-xs font-bold bg-teal-50 text-teal-700 px-3 py-1.5 rounded-full border border-teal-100 whitespace-nowrap">{inc}</span>
                                ))}
                                {pkg.inclusions.length > 3 && <span className="text-xs font-bold text-slate-400 px-3 py-1.5 bg-slate-50 rounded-full">+{pkg.inclusions.length - 3} more</span>}
                            </div>
                            <div className="flex justify-between items-center pt-6 border-t border-slate-100">
                                <div>
                                    <span className="text-xs text-slate-400 uppercase font-bold tracking-wider">Total Price</span>
                                    <div className="text-3xl font-bold text-slate-900 font-display">{onPriceFormat(pkg.price)}</div>
                                </div>
                                <button className="bg-teal-600 text-white px-8 py-3 rounded-2xl font-bold hover:bg-teal-700 transition-all shadow-lg shadow-teal-500/30 hover:-translate-y-0.5">View Details</button>
                            </div>
                        </div>
                    </div>
                </div>
            );
        };

        // --- COUNTDOWN TIMER COMPONENT ---
        const CountdownTimer = () => {
            const [time, setTime] = useState({h: 11, m: 45, s: 0});
            
            useEffect(() => {
                const timer = setInterval(() => {
                    setTime(prev => {
                        if(prev.s > 0) return {...prev, s: prev.s - 1};
                        if(prev.m > 0) return {...prev, m: prev.m - 1, s: 59};
                        if(prev.h > 0) return {...prev, h: prev.h - 1, m: 59, s: 59};
                        return prev;
                    });
                }, 1000);
                return () => clearInterval(timer);
            }, []);
            
            return (
                <div className="bg-white/95 backdrop-blur text-red-600 text-[10px] font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 border border-red-100 animate-pulse-soft">
                    <i className="far fa-clock"></i> <span>Ends in {time.h}h {time.m}m</span>
                </div>
            );
        };

        // --- HELPER FOR HIGHLIGHTING TEXT ---
        const HighlightMatch = ({ text, highlight }) => {
            if (!highlight.trim()) return <span>{text}</span>;
            const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
            return (
                <span>
                    {parts.map((part, i) => 
                        part.toLowerCase() === highlight.toLowerCase() 
                            ? <span key={i} className="bg-yellow-200 text-teal-900 font-bold px-0.5 rounded-sm">{part}</span> 
                            : part
                    )}
                </span>
            );
        };

        // --- TOAST COMPONENT ---
        const ToastContainer = ({ toasts }) => (
            <div className="fixed top-24 right-6 z-[300] flex flex-col gap-3">
                {toasts.map(t => (
                    <div key={t.id} className={`glass-panel border-l-4 ${t.type === 'success' ? 'border-l-green-500' : 'border-l-red-500'} p-4 rounded-xl shadow-float animate-toast flex items-center gap-4 min-w-[300px] bg-white/90 backdrop-blur-md`}>
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${t.type === 'success' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                                <i className={`fas ${t.type === 'success' ? 'fa-check' : 'fa-info'}`}></i>
                            </div>
                            <span className="text-sm font-bold text-slate-800">{t.msg}</span>
                    </div>
                ))}
            </div>
        );

        // --- WELCOME POPUP ---
        const WelcomePopup = ({ onClose, greeting }) => (
            <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-fade-in">
                <div className="bg-white rounded-[2.5rem] shadow-2xl w-full max-w-lg relative overflow-hidden animate-pop-in border border-white/50">
                    <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-r from-teal-500 to-emerald-600"></div>
                     <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
                    <button className="absolute top-6 right-6 bg-white/20 hover:bg-white/30 backdrop-blur-md text-white rounded-full w-10 h-10 flex items-center justify-center transition-all z-10" onClick={onClose}>
                        <i className="fas fa-times"></i>
                    </button>
                    <div className="relative pt-20 px-10 pb-10 text-center">
                        <div className="w-28 h-28 bg-white rounded-full p-1.5 mx-auto mb-6 shadow-float flex items-center justify-center relative z-10">
                            <img src="https://flagcdn.com/w160/in.png" alt="India" className="w-full h-full rounded-full object-cover shadow-inner" />
                        </div>
                        <h2 className="text-4xl font-bold text-slate-900 mb-3 font-display">{greeting} 🙏</h2>
                        <p className="text-xl text-teal-700 font-medium mb-4">Welcome to gochutti.com</p>
                        <p className="text-slate-500 mb-10 leading-relaxed text-base">India's first <strong>Calm Tech</strong> holiday platform.<br/>No fake timers. No hidden fees. Just pure joy.</p>
                        <button onClick={onClose} className="bg-teal-600 text-white px-10 py-4 rounded-2xl font-bold text-lg hover:bg-teal-700 transition-all shadow-lg shadow-teal-500/40 w-full hover:-translate-y-1">Start Exploring</button>
                        <div className="mt-8 pt-6 border-t border-slate-100"><p className="text-[10px] text-slate-400 uppercase tracking-[0.2em] font-bold">A Venture of FLYONGO</p></div>
                    </div>
                </div>
            </div>
        );

        // --- AI ASSISTANT ---
        const AIAssistant = ({ isOpen, onClose }) => {
            if (!isOpen) return null;
            const [messages, setMessages] = useState([{ type: 'bot', text: "Namaste! I'm your AI Travel Buddy. Ask me anything like 'Plan a 3 day trip to Goa' or 'Best honeymoon spots in Dec'." }]);
            const [input, setInput] = useState("");
            const [isTyping, setIsTyping] = useState(false);

            const handleSend = (e) => {
                e.preventDefault();
                if (!input.trim()) return;
                setMessages(prev => [...prev, { type: 'user', text: input }]);
                setInput("");
                setIsTyping(true);
                
                // Simulate API Call
                setTimeout(() => {
                    setIsTyping(false);
                    const keywords = input.toLowerCase();
                    let response = "That sounds lovely! Our 'Incredible India' collection has some amazing options. Would you like me to recommend a package?";
                    
                    if(keywords.includes('goa')) response = "Goa is perfect! For a chill vibe, check out our North Goa 'Friends Trip' package.";
                    if(keywords.includes('kashmir')) response = "Kashmir is magical. Our 'Paradise Found' package includes a premium houseboat stay.";
                    if(keywords.includes('price') || keywords.includes('cost')) response = "We believe in transparent pricing. All prices you see include taxes. No surprises!";
                    
                    setMessages(prev => [...prev, { type: 'bot', text: response }]);
                }, 1500);
            };

            return (
                <div className="fixed bottom-24 right-4 md:right-8 w-[90vw] md:w-96 h-[550px] bg-white rounded-[2rem] shadow-2xl border border-slate-100 z-50 flex flex-col overflow-hidden animate-slide-up">
                    <div className="bg-gradient-to-r from-teal-600 to-emerald-600 p-5 text-white flex justify-between items-center shadow-lg">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center shadow-inner"><i className="fas fa-robot"></i></div>
                            <div>
                                <span className="font-bold block font-display">Gochutti AI</span>
                                <span className="text-[10px] opacity-80 flex items-center gap-1"><div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div> Online</span>
                            </div>
                        </div>
                        <button onClick={onClose} className="hover:bg-white/20 p-2 rounded-full transition-colors"><i className="fas fa-times"></i></button>
                    </div>
                    <div className="flex-1 p-5 overflow-y-auto bg-slate-50 space-y-4">
                        {messages.map((msg, i) => (
                            <div key={i} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                                <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed shadow-sm ${msg.type === 'user' ? 'bg-teal-600 text-white rounded-br-none' : 'bg-white text-slate-700 rounded-bl-none border border-slate-100'}`}>{msg.text}</div>
                            </div>
                        ))}
                        {isTyping && <div className="flex justify-start"><div className="bg-white p-4 rounded-2xl rounded-bl-none shadow-sm border border-slate-100"><div className="flex gap-1.5"><div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div><div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-75"></div><div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce delay-150"></div></div></div></div>}
                    </div>
                    <form onSubmit={handleSend} className="p-4 bg-white border-t border-slate-100 flex gap-3">
                        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Ask anything..." className="flex-1 bg-slate-50 border border-slate-200 rounded-full px-5 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white transition-all" />
                        <button type="submit" className="w-12 h-12 bg-teal-600 text-white rounded-full flex items-center justify-center hover:bg-teal-700 shadow-lg shadow-teal-500/30 transition-transform hover:scale-105 active:scale-95"><i className="fas fa-paper-plane"></i></button>
                    </form>
                </div>
            );
        };

        // --- FLASH DEALS COMPONENT (ULTRA-ENHANCED) ---
        const FlashDeals = ({ setSelectedHoliday, setView, formatPrice }) => {
            const scrollRef = useRef(null);

            const scroll = (direction) => {
                if(scrollRef.current) {
                    const { current } = scrollRef;
                    const scrollAmount = direction === 'left' ? -360 : 360;
                    current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
                }
            };

            return (
                <div className="relative bg-gradient-to-b from-slate-50 to-white py-24 overflow-hidden">
                    {/* Background Decor */}
                    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-200 to-transparent opacity-50"></div>
                    <div className="absolute -left-20 top-20 w-72 h-72 bg-red-100 rounded-full mix-blend-multiply filter blur-[80px] opacity-40 animate-blob"></div>
                    <div className="absolute -right-20 bottom-20 w-72 h-72 bg-orange-100 rounded-full mix-blend-multiply filter blur-[80px] opacity-40 animate-blob animation-delay-2000"></div>

                    <div className="max-w-7xl mx-auto px-6 relative z-10">
                        {/* Header Strategy */}
                        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                            <div className="md:w-2/3">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className="bg-gradient-to-r from-red-500 to-orange-500 text-white text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-[0.15em] shadow-lg shadow-red-500/30 animate-pulse-soft">Limited Edition</span>
                                    <span className="text-slate-400 text-xs font-bold uppercase tracking-widest bg-white/50 px-3 py-1.5 rounded-full border border-slate-200/50 backdrop-blur-sm">Curated for You</span>
                                </div>
                                <h2 className="text-5xl md:text-6xl font-bold text-slate-900 font-display mb-4 leading-tight">
                                    Flash <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500">Steals</span>
                                </h2>
                                <p className="text-slate-500 text-lg md:text-xl font-light leading-relaxed max-w-2xl">
                                    Spontaneous plans deserve spectacular prices. Grab these hand-picked luxury experiences at unbeatable rates. No hidden catches, just pure <span className="font-serif italic text-teal-700 font-semibold">joy</span>.
                                </p>
                            </div>
                            {/* Navigation Controls */}
                            <div className="flex gap-4">
                                <button onClick={() => scroll('left')} className="w-14 h-14 rounded-full border border-slate-200 bg-white text-slate-400 flex items-center justify-center hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all shadow-float hover:-translate-x-1 group"><i className="fas fa-arrow-left text-lg"></i></button>
                                <button onClick={() => scroll('right')} className="w-14 h-14 rounded-full border border-slate-200 bg-white text-slate-400 flex items-center justify-center hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all shadow-float hover:translate-x-1 group"><i className="fas fa-arrow-right text-lg"></i></button>
                            </div>
                        </div>

                        {/* Scroll Container */}
                        <div 
                            ref={scrollRef}
                            className="flex gap-8 overflow-x-auto no-scrollbar pb-16 snap-x snap-mandatory px-4 -mx-4 scroll-smooth"
                        >
                            {HOLIDAY_PACKAGES.filter(p => p.instantBook).map((pkg, idx) => (
                                /* Enhanced Card */
                                <div key={pkg.id} onClick={() => {setSelectedHoliday(pkg); setView('detail')}} className="snap-center shrink-0 w-[320px] md:w-[380px] bg-white rounded-[2.5rem] shadow-card hover:shadow-2xl border border-slate-100 overflow-hidden group cursor-pointer transition-all duration-500 relative flex flex-col hover:-translate-y-2">
                                    
                                    {/* Image Section */}
                                    <div className="h-72 relative overflow-hidden">
                                        <img src={pkg.image} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent"></div>
                                        
                                        {/* Badges */}
                                        <div className="absolute top-5 left-5 flex flex-col gap-2 items-start">
                                            <span className="bg-white/95 backdrop-blur text-slate-900 text-[10px] font-bold px-3 py-1.5 rounded-lg shadow-sm border border-white/50 flex items-center gap-1.5">
                                                <i className="fas fa-stopwatch text-orange-500"></i> {pkg.duration}
                                            </span>
                                        </div>
                                        <div className="absolute top-5 right-5">
                                             <CountdownTimer />
                                        </div>

                                        {/* Deal Strength Badge (Mocked based on index) */}
                                        <div className="absolute bottom-5 left-5 right-5 flex justify-between items-end">
                                            <span className="bg-red-600 text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg flex items-center gap-2 border border-red-500 transform group-hover:scale-105 transition-transform">
                                                <i className="fas fa-fire-alt animate-pulse"></i> {idx % 2 === 0 ? "50% OFF" : "Best Seller"}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Content Section */}
                                    <div className="p-8 flex-1 flex flex-col relative bg-white">
                                        {/* Floating Price Pill */}
                                        <div className="absolute -top-7 right-8 bg-teal-700 text-white px-5 py-3 rounded-2xl shadow-xl shadow-teal-700/30 flex flex-col items-center border-2 border-white group-hover:-translate-y-1 transition-transform z-20">
                                            <span className="text-[9px] uppercase font-bold opacity-80 tracking-wide mb-0.5">Deal Price</span>
                                            <span className="text-xl font-bold font-display">{formatPrice(pkg.price)}</span>
                                        </div>

                                        <div className="mb-6 mt-2">
                                            <h3 className="text-2xl font-bold text-slate-900 font-display leading-tight mb-2 group-hover:text-teal-700 transition-colors line-clamp-2">{pkg.title}</h3>
                                            <div className="flex items-center gap-2 text-xs text-slate-500 font-medium">
                                                <i className="fas fa-map-marker-alt text-orange-500"></i> {pkg.region}
                                            </div>
                                        </div>

                                        {/* Perks List (Strategy Enhancement) */}
                                        <div className="space-y-3 mb-8 bg-slate-50/50 p-4 rounded-xl border border-slate-100">
                                            <div className="flex items-center gap-3 text-sm text-slate-600">
                                                <div className="w-5 h-5 rounded-full bg-teal-100 flex items-center justify-center text-teal-700 shrink-0"><i className="fas fa-check text-[10px]"></i></div>
                                                <span className="font-medium">Free Cancellation <span className="text-slate-400 text-xs font-normal">(48h)</span></span>
                                            </div>
                                            <div className="flex items-center gap-3 text-sm text-slate-600">
                                                <div className="w-5 h-5 rounded-full bg-teal-100 flex items-center justify-center text-teal-700 shrink-0"><i className="fas fa-utensils text-[10px]"></i></div>
                                                <span className="font-medium">Breakfast & Dinner Included</span>
                                            </div>
                                        </div>

                                        <div className="mt-auto pt-6 border-t border-slate-100 flex justify-between items-center">
                                            <div>
                                                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wide mb-0.5">Regular Price</div>
                                                <div className="text-sm text-slate-400 font-medium line-through decoration-red-400 decoration-2">{formatPrice(pkg.price * 1.4)}</div>
                                            </div>
                                            <span className="flex items-center gap-2 text-sm font-bold text-slate-900 group-hover:text-teal-700 transition-colors bg-slate-50 px-4 py-2 rounded-full group-hover:bg-teal-50">
                                                View Itinerary <i className="fas fa-arrow-right text-xs group-hover:translate-x-1 transition-transform"></i>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            );
        };

        // --- FOOTER ---
        const Footer = ({ setActiveSubPage }) => (
            <footer className="bg-slate-900 text-white pt-24 pb-12 border-t border-slate-800 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 via-teal-500 to-purple-500"></div>
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
                        <div>
                            <div className="flex items-baseline gap-1.5 mb-6"><span className="text-3xl font-bold tracking-tight font-display">gochutti</span><span className="text-orange-500 font-bold text-3xl font-display">.com</span></div>
                            <p className="text-slate-400 text-sm leading-relaxed mb-8 font-light">India's calmest holiday booking platform. We prioritize your peace of mind with transparent pricing and zero fake urgency.</p>
                            <div className="px-5 py-3 bg-slate-800/50 rounded-xl border border-slate-700/50 inline-block backdrop-blur-sm"><span className="text-[10px] text-slate-400 uppercase tracking-widest block mb-1 font-bold">A Venture of</span><span className="font-bold text-xs text-white tracking-wide">FLYONGO TRAVEL PVT. LTD.</span></div>
                        </div>
                        <div>
                            <h4 className="text-lg font-bold mb-6 text-white font-display">Company</h4>
                            <ul className="space-y-4 text-sm text-slate-400">
                                {['About Us', 'Our Philosophy', 'Careers', 'Press & Media'].map(item => (
                                    <li key={item}><button onClick={() => setActiveSubPage(item.toLowerCase().replace(/ /g, '-'))} className="hover:text-teal-400 transition-colors text-left w-full hover:translate-x-1 duration-300 inline-block">{item}</button></li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-lg font-bold mb-6 text-white font-display">Support</h4>
                            <ul className="space-y-4 text-sm text-slate-400">
                                {['Contact Us', 'Privacy Policy', 'Terms of Service', 'Cancellation Policy'].map(item => (
                                    <li key={item}><button onClick={() => setActiveSubPage(item.toLowerCase().replace(/ /g, '-'))} className="hover:text-teal-400 transition-colors text-left w-full hover:translate-x-1 duration-300 inline-block">{item}</button></li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-lg font-bold mb-6 text-white font-display">Headquarters</h4>
                            <ul className="space-y-5 text-sm text-slate-400">
                                <li className="flex items-start gap-4"><div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center shrink-0 text-teal-500"><i className="fas fa-map-marker-alt"></i></div><span>A-26, Second Floor, Sector-03,<br/>NOIDA, Uttar Pradesh - 201301<br/><span className="text-xs text-slate-500 mt-1 block font-medium">(Near Sec 16 Metro Station)</span></span></li>
                                <li className="flex items-center gap-4"><div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center shrink-0 text-teal-500"><i className="fas fa-phone-alt"></i></div><span>+91 96 50 38 65 65</span></li>
                            </ul>
                             <div className="mt-8">
                                <h5 className="text-sm font-bold text-slate-300 mb-3">Travel Inspiration</h5>
                                <div className="flex gap-2">
                                    <input type="email" placeholder="Email Address" className="bg-slate-800 border border-slate-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-teal-500 flex-1" />
                                    <button className="bg-teal-600 hover:bg-teal-700 text-white rounded-lg px-4 py-2 text-sm font-bold transition-colors">Go</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-slate-500">
                        <div>© 2025 gochutti.com. All rights reserved. Made with ❤️ in India.</div>
                        <div className="flex gap-6 opacity-60 grayscale hover:grayscale-0 transition-all duration-500"><i className="fab fa-cc-visa text-3xl"></i><i className="fab fa-cc-mastercard text-3xl"></i><i className="fas fa-shield-alt text-3xl"></i></div>
                    </div>
                </div>
            </footer>
        );

        // --- COMPARE MODAL ---
        const CompareModal = ({ compareList, onClose, formatPrice }) => (
            <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-md animate-fade-in">
                <div className="bg-white rounded-3xl w-full max-w-5xl p-8 relative shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
                    <div className="flex justify-between items-center mb-8">
                        <div>
                             <h3 className="text-3xl font-bold font-display text-slate-900">Compare Packages</h3>
                             <p className="text-slate-500 text-sm mt-1">Comparing {compareList.length} items side-by-side</p>
                        </div>
                        <button onClick={onClose} className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center hover:bg-slate-200 transition-colors"><i className="fas fa-times text-xl text-slate-600"></i></button>
                    </div>
                    <div className="flex-1 overflow-x-auto pb-4 custom-scrollbar">
                        <div className="flex gap-6 min-w-max">
                            {compareList.map(pkg => (
                                <div key={pkg.id} className="w-72 bg-white border border-slate-200 rounded-2xl p-4 shadow-sm flex flex-col">
                                    <div className="h-40 rounded-xl overflow-hidden mb-4 relative">
                                        <img src={pkg.image} className="w-full h-full object-cover" />
                                        <div className="absolute top-2 right-2 bg-white/90 backdrop-blur px-2 py-1 rounded text-xs font-bold shadow-sm">⭐ {pkg.rating}</div>
                                    </div>
                                    <h4 className="font-bold text-lg mb-2 font-display text-slate-900 line-clamp-2 h-14">{pkg.title}</h4>
                                    <div className="space-y-3 text-sm text-slate-600 flex-1">
                                        <div className="flex justify-between py-2 border-b border-slate-100"><span>Price</span><span className="font-bold text-teal-700 text-lg">{formatPrice(pkg.price)}</span></div>
                                        <div className="flex justify-between py-2 border-b border-slate-100"><span>Duration</span><span className="font-medium">{pkg.duration}</span></div>
                                        <div className="flex justify-between py-2 border-b border-slate-100"><span>Type</span><span className="font-medium">{pkg.type}</span></div>
                                        <div className="pt-2">
                                            <div className="font-semibold mb-2 text-xs uppercase tracking-wide text-slate-400">Inclusions</div>
                                            <div className="flex flex-wrap gap-1.5">{pkg.inclusions.map(i => <span key={i} className="text-[10px] bg-slate-100 text-slate-600 px-2 py-1 rounded border border-slate-200">{i}</span>)}</div>
                                        </div>
                                    </div>
                                    <button className="w-full mt-4 bg-slate-900 text-white py-2.5 rounded-xl font-bold text-sm hover:bg-slate-800 transition-colors">Select</button>
                                </div>
                            ))}
                            {compareList.length < 3 && (
                                <div className="w-72 border-2 border-dashed border-slate-200 rounded-2xl flex flex-col items-center justify-center text-slate-400 bg-slate-50/50">
                                    <i className="fas fa-plus text-3xl mb-2 opacity-50"></i>
                                    <span className="text-sm font-medium">Add another to compare</span>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        );

        // --- COMPARE BAR ---
        const CompareBar = ({ compareList, onOpenCompare, onClear }) => {
            if (compareList.length === 0) return null;
            return (
                <div className="fixed bottom-24 left-1/2 -translate-x-1/2 bg-slate-900/90 backdrop-blur-md text-white pl-6 pr-2 py-2.5 rounded-full shadow-float flex items-center gap-6 z-[150] animate-slide-up border border-white/10 ring-1 ring-black/5">
                    <span className="text-sm font-bold flex items-center gap-2"><i className="fas fa-balance-scale text-orange-400"></i> {compareList.length} Selected</span>
                    <div className="flex items-center gap-2">
                        <button onClick={onOpenCompare} className="bg-white text-slate-900 hover:bg-teal-50 px-5 py-2 rounded-full text-xs font-bold transition-all shadow-sm">Compare Now</button>
                        <button onClick={onClear} className="w-8 h-8 rounded-full hover:bg-white/10 flex items-center justify-center transition-colors"><i className="fas fa-times text-sm opacity-70"></i></button>
                    </div>
                </div>
            );
        };

        // --- WISHLIST VIEW ---
        const WishlistView = ({ wishlist, setView, setSelectedHoliday, addToHistory, formatPrice }) => {
            const lovedPackages = HOLIDAY_PACKAGES.filter(p => wishlist.includes(p.id));
            return (
                <div className="animate-fade-in bg-slate-50 min-h-screen pb-20 pt-12">
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="flex items-center gap-3 mb-8">
                            <h1 className="text-4xl font-bold text-slate-900 font-display">My Wishlist</h1>
                            <span className="bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-bold shadow-sm">{lovedPackages.length}</span>
                        </div>
                        
                        {lovedPackages.length === 0 ? (
                            <div className="text-center py-32 bg-white rounded-[2.5rem] border-2 border-dashed border-slate-200">
                                <div className="text-6xl mb-6 opacity-80">💔</div>
                                <h3 className="text-2xl font-bold text-slate-800 mb-2 font-display">Your wishlist is empty</h3>
                                <p className="text-slate-500 mb-8 max-w-md mx-auto">You haven't saved any trips yet. Browse our collections and click the heart icon to save your favorites.</p>
                                <button onClick={() => setView('home')} className="bg-teal-600 text-white px-8 py-3 rounded-2xl font-bold hover:bg-teal-700 hover:-translate-y-1 transition-all shadow-lg shadow-teal-500/30">Start Exploring</button>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {lovedPackages.map(pkg => (
                                    <div key={pkg.id} onClick={() => {setSelectedHoliday(pkg); addToHistory(pkg); setView('detail')}} className="bg-white rounded-3xl shadow-card border border-slate-100 overflow-hidden cursor-pointer hover:shadow-float transition-all duration-300 group relative">
                                        <div className="h-52 overflow-hidden relative">
                                            <img src={pkg.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
                                            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-lg text-xs font-bold text-teal-800 uppercase tracking-wide shadow-sm border border-white/50">{pkg.type}</div>
                                        </div>
                                        <div className="p-6">
                                            <h3 className="font-bold text-xl mb-1 font-display line-clamp-1 group-hover:text-teal-700 transition-colors text-slate-900">{pkg.title}</h3>
                                            <div className="flex items-center gap-2 text-xs text-slate-500 mb-4">
                                                <i className="fas fa-clock"></i> {pkg.duration} • <i className="fas fa-map-marker-alt"></i> {pkg.region}
                                            </div>
                                            <div className="flex justify-between items-end pt-4 border-t border-slate-50">
                                                <div>
                                                    <span className="text-xs text-slate-400 uppercase tracking-wide font-bold">Total</span>
                                                    <div className="text-2xl font-bold text-slate-900 font-display">{formatPrice(pkg.price)}</div>
                                                </div>
                                                <button className="text-orange-600 font-bold text-sm hover:bg-orange-50 px-4 py-2 rounded-lg transition-colors">View Details</button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            );
        };

        // --- NAVBAR ---
        const Navbar = ({ isB2BMode, setIsB2BMode, setView, wishlist, user, handleLogin, swipedRight, setCurrency, currency, mobileMenuOpen, setMobileMenuOpen, setActiveSubPage }) => (
            <nav className={`sticky top-0 z-50 transition-all duration-500 ${isB2BMode ? 'bg-slate-900/95 border-slate-800 text-white' : 'glass-nav text-slate-900'}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        <div className="flex flex-col cursor-pointer group select-none" onClick={() => setView('home')}>
                            <div className="flex items-baseline gap-1"><span className={`text-2xl font-bold tracking-tight font-display group-hover:text-teal-600 transition-colors ${isB2BMode ? 'text-white' : 'text-teal-800'}`}>gochutti</span><span className="text-orange-500 font-bold text-2xl font-display">.com</span></div>
                            <span className={`text-[10px] font-bold tracking-[0.2em] uppercase ${isB2BMode ? 'text-slate-500' : 'text-slate-400'}`}>by FLYONGO</span>
                        </div>
                        <div className="hidden md:flex space-x-4 items-center">
                            {/* Currency Toggle */}
                            <div className="flex bg-slate-100 rounded-xl p-1 mr-2 border border-slate-200">
                                <button onClick={() => setCurrency('INR')} className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${currency === 'INR' ? 'bg-white text-teal-700 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}>₹ INR</button>
                                <button onClick={() => setCurrency('USD')} className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${currency === 'USD' ? 'bg-white text-teal-700 shadow-sm' : 'text-slate-500 hover:text-slate-700'}`}>$ USD</button>
                            </div>

                            <div className={`flex items-center gap-1 p-1 rounded-xl border ${isB2BMode ? 'bg-slate-800 border-slate-700' : 'bg-slate-50 border-slate-200'}`}>
                                <button onClick={() => { setIsB2BMode(false); setView('home'); }} className={`px-5 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-2 ${!isB2BMode ? 'bg-white text-teal-700 shadow-sm ring-1 ring-black/5' : 'text-slate-500 hover:text-slate-300'}`}><i className="fas fa-user"></i> Traveller</button>
                                <button onClick={() => { setIsB2BMode(true); setView('b2b-swipe'); }} className={`px-5 py-2 rounded-lg text-xs font-bold transition-all flex items-center gap-2 ${isB2BMode ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-md' : 'text-slate-500 hover:text-slate-700'}`}><i className="fas fa-briefcase"></i> Agent</button>
                            </div>
                            
                            <div className="h-8 w-px bg-slate-200 mx-2"></div>

                            {!isB2BMode ? (
                                <>
                                    <button onClick={() => setView('listing')} className="px-4 py-2 rounded-xl text-sm font-bold hover:bg-slate-50 hover:text-teal-600 transition-colors">Holidays</button>
                                    <button onClick={() => setView('wishlist')} className="px-4 py-2 rounded-xl text-sm font-bold hover:bg-red-50 hover:text-red-500 transition-colors flex items-center gap-2 relative">
                                        <i className={`fas fa-heart ${wishlist.length > 0 ? 'text-red-500' : 'text-slate-400'}`}></i> 
                                        {wishlist.length > 0 && <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>}
                                        Wishlist
                                    </button>
                                    
                                    {/* User Login / Profile */}
                                    {user ? (
                                        <button className="flex items-center gap-2 text-sm font-bold text-teal-800 bg-teal-50 border border-teal-100 px-4 py-2 rounded-xl hover:bg-teal-100 transition-colors"><div className="w-7 h-7 bg-teal-600 text-white rounded-lg flex items-center justify-center text-xs shadow-sm">{user.avatar}</div> {user.name}</button>
                                    ) : (
                                        <button onClick={handleLogin} className="text-sm font-bold text-white bg-slate-900 px-6 py-2.5 rounded-xl hover:bg-slate-800 transition-all shadow-md hover:shadow-lg">Login</button>
                                    )}
                                </>
                            ) : (
                                <>
                                    <button onClick={() => setView('b2b-swipe')} className="text-sm font-medium hover:text-white transition-colors">Swipe Deck</button>
                                    <button onClick={() => setView('b2b-dashboard')} className="text-sm font-medium hover:text-white transition-colors">Dashboard <span className="bg-orange-600 text-white px-1.5 rounded-full text-[10px] ml-1">{swipedRight.length}</span></button>
                                </>
                            )}
                        </div>
                        <div className="md:hidden"><button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-2xl w-10 h-10 flex items-center justify-center bg-slate-50 rounded-lg text-slate-700"><i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i></button></div>
                    </div>
                </div>
                {/* Mobile Menu (simplified) */}
                {mobileMenuOpen && (
                    <div className={`md:hidden p-6 border-t ${isB2BMode ? 'bg-slate-900 border-slate-800' : 'bg-white border-gray-100'} animate-fade-in shadow-xl absolute w-full`}>
                        <div className="flex gap-3 mb-6">
                            <button onClick={() => {setIsB2BMode(false); setView('home'); setMobileMenuOpen(false);}} className={`flex-1 py-3 rounded-xl font-bold text-sm border ${!isB2BMode ? 'bg-teal-50 border-teal-200 text-teal-700' : 'border-gray-200 text-gray-400'}`}>Traveller</button>
                            <button onClick={() => {setIsB2BMode(true); setView('b2b-swipe'); setMobileMenuOpen(false);}} className={`flex-1 py-3 rounded-xl font-bold text-sm border ${isB2BMode ? 'bg-slate-800 border-orange-500 text-orange-500' : 'border-gray-200 text-gray-400'}`}>Agent</button>
                        </div>
                        <div className="space-y-2">
                            <button onClick={() => {setView('listing'); setMobileMenuOpen(false);}} className="block w-full text-left font-bold p-3 hover:bg-slate-50 rounded-xl">Browse Holidays</button>
                            <button onClick={() => {setView('wishlist'); setMobileMenuOpen(false);}} className="block w-full text-left font-bold p-3 hover:bg-slate-50 rounded-xl flex justify-between">My Wishlist <span className="bg-red-100 text-red-600 px-2 rounded-full text-xs flex items-center">{wishlist.length}</span></button>
                            <button onClick={() => {setActiveSubPage('contact-us'); setMobileMenuOpen(false);}} className="block w-full text-left font-bold p-3 hover:bg-slate-50 rounded-xl">Contact Support</button>
                        </div>
                    </div>
                )}
            </nav>
        );

        // --- RECENTLY VIEWED ---
        const RecentlyViewed = ({ recentlyViewed, setSelectedHoliday, setView, formatPrice }) => {
            if (recentlyViewed.length === 0) return null;
            return (
                <div className="max-w-7xl mx-auto px-6 py-10 mb-6 border-t border-slate-100 bg-white/50 backdrop-blur-sm rounded-[2rem] mt-8">
                        <h3 className="text-sm font-bold text-slate-400 mb-5 uppercase tracking-widest font-display flex items-center gap-2"><i className="fas fa-history"></i> Pick up where you left off</h3>
                        <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2">
                            {recentlyViewed.map(pkg => (
                                <div key={pkg.id} onClick={() => {setSelectedHoliday(pkg); setView('detail')}} className="min-w-[220px] flex items-center gap-4 bg-white p-2.5 rounded-2xl shadow-sm border border-slate-200 cursor-pointer hover:shadow-md hover:border-teal-200 transition-all group">
                                    <div className="w-16 h-16 rounded-xl overflow-hidden bg-slate-200 shrink-0 relative">
                                        <img src={pkg.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform" />
                                    </div>
                                    <div className="flex-1 min-w-0 pr-2">
                                        <h4 className="text-sm font-bold text-slate-800 line-clamp-1 group-hover:text-teal-700">{pkg.title}</h4>
                                        <span className="text-xs text-slate-500 font-medium block mt-0.5">{formatPrice(pkg.price)}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                </div>
            )
        };

        // --- TRAVEL BLOG ---
        const TravelBlog = () => (
            <div className="bg-slate-50 py-24 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-96 h-96 bg-teal-100/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-100/50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
                
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="flex justify-between items-end mb-10">
                        <div>
                             <span className="text-teal-600 font-bold tracking-wider text-xs uppercase mb-2 block">Inspiration</span>
                             <h2 className="text-3xl font-bold text-slate-900 font-display">Travel Guides & Tips</h2>
                        </div>
                        <button className="text-slate-500 font-bold text-sm hover:text-teal-600 transition-colors">View All Articles &rarr;</button>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-0 rounded-[2rem] overflow-hidden shadow-card hover:shadow-float transition-all duration-500 group cursor-pointer border border-white/50">
                            <div className="h-56 bg-slate-200 overflow-hidden relative">
                                <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                <div className="absolute top-4 left-4">
                                     <span className="text-[10px] font-bold text-teal-700 uppercase tracking-wide bg-white/90 backdrop-blur px-3 py-1 rounded-full shadow-sm">Food</span>
                                </div>
                            </div>
                            <div className="p-8">
                                <h3 className="font-bold text-xl mb-3 font-display group-hover:text-teal-700 transition-colors">Top 10 Street Foods in Delhi</h3>
                                <p className="text-slate-500 text-sm line-clamp-2 leading-relaxed">From Paranthe Wali Gali to Chole Bhature, here is your ultimate guide to the capital's flavors.</p>
                                <button className="text-teal-600 text-sm font-bold mt-6 hover:underline flex items-center gap-2 group/btn">Read More <i className="fas fa-arrow-right text-xs group-hover/btn:translate-x-1 transition-transform"></i></button>
                            </div>
                        </div>
                        <div className="bg-white p-0 rounded-[2rem] overflow-hidden shadow-card hover:shadow-float transition-all duration-500 group cursor-pointer border border-white/50">
                            <div className="h-56 bg-slate-200 overflow-hidden relative">
                                <img src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=600" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                <div className="absolute top-4 left-4">
                                     <span className="text-[10px] font-bold text-orange-700 uppercase tracking-wide bg-white/90 backdrop-blur px-3 py-1 rounded-full shadow-sm">Guide</span>
                                </div>
                            </div>
                            <div className="p-8">
                                <h3 className="font-bold text-xl mb-3 font-display group-hover:text-orange-600 transition-colors">Best Time to Visit Switzerland</h3>
                                <p className="text-slate-500 text-sm line-clamp-2 leading-relaxed">Summer for hiking or Winter for skiing? We break it down month by month for the perfect trip.</p>
                                <button className="text-orange-600 text-sm font-bold mt-6 hover:underline flex items-center gap-2 group/btn">Read More <i className="fas fa-arrow-right text-xs group-hover/btn:translate-x-1 transition-transform"></i></button>
                            </div>
                        </div>
                        <div className="bg-white p-0 rounded-[2rem] overflow-hidden shadow-card hover:shadow-float transition-all duration-500 group cursor-pointer border border-white/50">
                            <div className="h-56 bg-slate-200 overflow-hidden relative">
                                <img src="https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                <div className="absolute top-4 left-4">
                                     <span className="text-[10px] font-bold text-blue-700 uppercase tracking-wide bg-white/90 backdrop-blur px-3 py-1 rounded-full shadow-sm">Visa</span>
                                </div>
                            </div>
                            <div className="p-8">
                                <h3 className="font-bold text-xl mb-3 font-display group-hover:text-blue-600 transition-colors">Visa-Free Countries for Indians</h3>
                                <p className="text-slate-500 text-sm line-clamp-2 leading-relaxed">Thailand, Malaysia, Kenya and more. Travel without the paperwork this season.</p>
                                <button className="text-blue-600 text-sm font-bold mt-6 hover:underline flex items-center gap-2 group/btn">Read More <i className="fas fa-arrow-right text-xs group-hover/btn:translate-x-1 transition-transform"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );

        // --- WHY CHOOSE US ---
        const WhyChooseUs = () => (
            <div className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="text-teal-600 font-bold uppercase tracking-widest text-xs mb-2 block">Our Promise</span>
                        <h2 className="text-3xl font-bold font-display text-slate-900">Why travelers love gochutti</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div className="text-center p-6 rounded-3xl hover:bg-slate-50 transition-colors">
                            <div className="w-16 h-16 bg-teal-50 rounded-full flex items-center justify-center text-teal-600 text-2xl mx-auto mb-4"><i className="fas fa-hand-holding-heart"></i></div>
                            <h3 className="font-bold text-lg mb-2 text-slate-900">Curated with Care</h3>
                            <p className="text-slate-500 text-sm">Hand-picked experiences, not just database entries.</p>
                        </div>
                         <div className="text-center p-6 rounded-3xl hover:bg-slate-50 transition-colors">
                            <div className="w-16 h-16 bg-orange-50 rounded-full flex items-center justify-center text-orange-600 text-2xl mx-auto mb-4"><i className="fas fa-rupee-sign"></i></div>
                            <h3 className="font-bold text-lg mb-2 text-slate-900">Honest Pricing</h3>
                            <p className="text-slate-500 text-sm">No hidden charges. What you see is what you pay.</p>
                        </div>
                         <div className="text-center p-6 rounded-3xl hover:bg-slate-50 transition-colors">
                            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center text-blue-600 text-2xl mx-auto mb-4"><i className="fas fa-headset"></i></div>
                            <h3 className="font-bold text-lg mb-2 text-slate-900">24/7 Support</h3>
                            <p className="text-slate-500 text-sm">Real humans, not bots (unless you want our AI buddy).</p>
                        </div>
                         <div className="text-center p-6 rounded-3xl hover:bg-slate-50 transition-colors">
                            <div className="w-16 h-16 bg-purple-50 rounded-full flex items-center justify-center text-purple-600 text-2xl mx-auto mb-4"><i className="fas fa-shield-alt"></i></div>
                            <h3 className="font-bold text-lg mb-2 text-slate-900">100% Secure</h3>
                            <p className="text-slate-500 text-sm">Your data and payments are safe with us.</p>
                        </div>
                    </div>
                </div>
            </div>
        );

        // --- ULTRA ENHANCED DESI CHUTTI SECTION ---
        const EnhancedDesiSection = ({ col, handleDestinationClick, setSelectedHoliday, setView, toggleWishlist, wishlist, addToHistory, formatPrice, handleQuickView }) => {
            const [activeVibe, setActiveVibe] = useState('All');
            const scrollRef = useRef(null);

            const vibeFilters = [
                { id: 'All', label: 'All Vibes' },
                { id: 'Chill', label: 'Chill & Relax', icon: 'coffee' },
                { id: 'Spiritual', label: 'Spiritual', icon: 'om' },
                { id: 'Adventure', label: 'Thrill Seeker', icon: 'hiking' },
                { id: 'Culture', label: 'Royal & Heritage', icon: 'landmark' },
                { id: 'Beach', label: 'Beach Bum', icon: 'umbrella-beach' }
            ];

            const stateStories = [
                { name: 'Goa', img: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=150&h=150&fit=crop' },
                { name: 'Kerala', img: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?w=150&h=150&fit=crop' },
                { name: 'Kashmir', img: 'https://images.unsplash.com/photo-1595846519845-68e298c2edd8?w=150&h=150&fit=crop' },
                { name: 'Rajasthan', img: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?w=150&h=150&fit=crop' },
                { name: 'Himachal', img: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=150&h=150&fit=crop' },
                { name: 'Uttarakhand', img: 'https://images.unsplash.com/photo-1589136777351-9432831d1029?w=150&h=150&fit=crop' }
            ];

            const filteredDesiPackages = HOLIDAY_PACKAGES.filter(p => {
                if (p.region !== 'Domestic') return false;
                if (activeVibe === 'All') return true;
                if (activeVibe === 'Chill') return p.tags.includes('Relax') || p.tags.includes('Nature');
                if (activeVibe === 'Spiritual') return p.collection === 'Pavitra Yatra';
                if (activeVibe === 'Adventure') return p.tags.includes('Adventure') || p.tags.includes('Trek');
                if (activeVibe === 'Culture') return p.type === 'Culture' || p.tags.includes('Royalty');
                if (activeVibe === 'Beach') return p.type === 'Beach';
                return false;
            }).slice(0, 10); // Limit to top 10 for horizontal scroll

            const scroll = (direction) => {
                if (scrollRef.current) {
                    const scrollAmount = direction === 'left' ? -400 : 400;
                    scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
                }
            };

            return (
                <div className="py-24 desi-mesh-bg relative overflow-hidden group/section">
                    <div className="max-w-7xl mx-auto px-6 relative z-10">
                        {/* 1. Enhanced Header Block */}
                        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                            <div>
                                <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold tracking-[0.2em] text-[10px] uppercase mb-4 px-3 py-1.5 rounded-full inline-flex items-center gap-2 shadow-lg shadow-orange-500/20 animate-pulse-soft">
                                    <img src="https://flagcdn.com/20x15/in.png" className="rounded-sm shadow-sm" alt="India"/> Incredible India
                                </span>
                                <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-4 font-display leading-tight">
                                    Desi <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600">Chutti</span>
                                </h2>
                                <p className="text-slate-600 max-w-2xl text-lg font-light leading-relaxed">
                                    Discover the soul of India. From the snowy peaks of Kashmir to the tropical backwaters of Kerala, experience the diverse beauty of our homeland.
                                </p>
                            </div>
                            
                            {/* Navigation Buttons for Advanced Scroll */}
                            <div className="flex gap-3">
                                <button onClick={() => scroll('left')} className="w-12 h-12 rounded-full bg-white text-slate-400 flex items-center justify-center hover:bg-slate-900 hover:text-white transition-all shadow-float border border-slate-100"><i className="fas fa-chevron-left"></i></button>
                                <button onClick={() => scroll('right')} className="w-12 h-12 rounded-full bg-white text-slate-400 flex items-center justify-center hover:bg-slate-900 hover:text-white transition-all shadow-float border border-slate-100"><i className="fas fa-chevron-right"></i></button>
                            </div>
                        </div>

                        {/* 2. "Insta-Story" State Navigation */}
                        <div className="flex gap-6 overflow-x-auto pb-8 no-scrollbar mb-8">
                            {stateStories.map((story, i) => (
                                <div key={i} onClick={() => handleDestinationClick(story.name)} className="flex flex-col items-center gap-3 cursor-pointer group flex-shrink-0">
                                    <div className="story-ring p-[3px] transition-transform duration-300 group-hover:scale-110">
                                        <div className="w-20 h-20 rounded-full border-4 border-white overflow-hidden relative">
                                            <img src={story.img} className="w-full h-full object-cover" alt={story.name}/>
                                        </div>
                                    </div>
                                    <span className="text-xs font-bold text-slate-700 tracking-wide">{story.name}</span>
                                </div>
                            ))}
                        </div>

                        {/* 3. "Vibe Check" Internal Filter */}
                        <div className="flex gap-3 overflow-x-auto no-scrollbar pb-6 mb-2">
                            {vibeFilters.map((vibe) => (
                                <button 
                                    key={vibe.id} 
                                    onClick={() => setActiveVibe(vibe.id)}
                                    className={`px-5 py-2.5 rounded-full text-sm font-bold flex items-center gap-2 whitespace-nowrap transition-all duration-300 border ${activeVibe === vibe.id ? 'bg-slate-900 text-white border-slate-900 shadow-lg scale-105' : 'bg-white text-slate-600 border-slate-200 hover:border-orange-300 hover:text-orange-600'}`}
                                >
                                    {vibe.icon && <i className={`fas fa-${vibe.icon}`}></i>} {vibe.label}
                                </button>
                            ))}
                        </div>

                        {/* 4. The Advanced Scroll-In Container */}
                        <div 
                            ref={scrollRef}
                            className="flex overflow-x-auto gap-6 pb-12 pt-4 no-scrollbar snap-x snap-mandatory px-2 -mx-2 scroll-smooth"
                        >
                            {/* Feature Card (Static First Item) */}
                            {activeVibe === 'All' && (
                                <div className="snap-start flex-shrink-0 w-[350px] md:w-[400px] bg-gradient-to-br from-orange-500 to-pink-600 rounded-[2.5rem] p-8 text-white relative overflow-hidden shadow-2xl flex flex-col justify-end group cursor-pointer hover:-translate-y-2 transition-transform duration-300" onClick={() => handleDestinationClick('Kashmir')}>
                                    <img src="https://images.unsplash.com/photo-1566837945700-30057527ade0?w=600&q=80" className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-50 group-hover:scale-110 transition-transform duration-1000"/>
                                    <div className="relative z-10">
                                        <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wide mb-3 inline-block">Editor's Pick</span>
                                        <h3 className="text-4xl font-display font-bold mb-2 leading-tight">Magical Kashmir</h3>
                                        <p className="opacity-90 text-sm mb-6 line-clamp-2">Experience paradise on earth with our exclusive houseboat stays.</p>
                                        <button className="bg-white text-orange-600 px-6 py-3 rounded-xl font-bold text-sm hover:bg-orange-50 transition-colors shadow-lg">Explore Collection</button>
                                    </div>
                                </div>
                            )}

                            {filteredDesiPackages.map((pkg) => (
                                <div key={pkg.id} onClick={() => {setSelectedHoliday(pkg); addToHistory(pkg); setView('detail')}} className="snap-start flex-shrink-0 w-80 bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-card hover:shadow-float transition-all duration-300 group relative transform hover:-translate-y-2">
                                    <div className="h-64 overflow-hidden relative">
                                        <img src={pkg.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-lg text-xs font-bold text-teal-800 uppercase tracking-wide shadow-sm border border-white/50">{pkg.type}</div>
                                        
                                        {/* Quick View Button (Advanced Scroll-In Feature) */}
                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                             <button 
                                                onClick={(e) => handleQuickView(e, pkg)}
                                                className="bg-white/20 backdrop-blur-md border border-white/50 text-white px-6 py-2 rounded-full font-bold text-sm hover:bg-white hover:text-teal-700 transition-all transform scale-90 group-hover:scale-100 hover:shadow-lg"
                                            >
                                                Quick View
                                            </button>
                                        </div>
                                    </div>
                                    
                                    <button 
                                        onClick={(e) => { e.stopPropagation(); toggleWishlist(pkg.id); }}
                                        className="absolute top-4 right-4 bg-white/20 backdrop-blur-md p-2.5 rounded-full hover:bg-white hover:text-red-500 text-white transition-all shadow-sm border border-white/30 z-20"
                                    >
                                        <i className={`${wishlist.includes(pkg.id) ? 'fas text-red-500' : 'far'} fa-heart text-lg`}></i>
                                    </button>
                                    
                                    <div className="p-6">
                                        <h3 className="font-bold text-xl text-slate-900 mb-1 line-clamp-1 group-hover:text-orange-600 transition-colors font-display">{pkg.title}</h3>
                                        <div className="flex items-center gap-3 text-xs font-bold text-slate-400 mb-4">
                                            <span className="flex items-center gap-1"><i className="fas fa-clock"></i> {pkg.duration}</span>
                                            <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                                            <span className="flex items-center gap-1 text-orange-400"><i className="fas fa-star"></i> {pkg.rating}</span>
                                        </div>
                                        
                                        {/* Smart Tags specific to Desi Chutti */}
                                        <div className="flex flex-wrap gap-1 mb-4">
                                            {pkg.tags.slice(0, 2).map((tag, idx) => (
                                                <span key={idx} className="text-[10px] font-bold px-2 py-1 rounded bg-slate-50 text-slate-500 border border-slate-100">{tag}</span>
                                            ))}
                                        </div>

                                        <div className="flex justify-between items-end pt-4 border-t border-slate-50">
                                            <div><span className="text-[10px] text-slate-400 uppercase tracking-widest font-bold block mb-0.5">Starting from</span><span className="font-bold text-2xl text-slate-900 font-display">{formatPrice(pkg.price)}</span></div>
                                            <span className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-teal-600 group-hover:bg-orange-500 group-hover:text-white transition-colors shadow-sm"><i className="fas fa-arrow-right"></i></span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            );
        };

        // --- HOME VIEW (UPDATED TO USE ENHANCED DESI SECTION) ---
        const HomeView = ({ 
            setView, setActiveFilter, searchTerm, setSearchTerm, recentlyViewed, 
            setSelectedHoliday, addToHistory, formatPrice, wishlist, toggleWishlist, 
            compareList, toggleCompare, isSearchFocused, setIsSearchFocused, 
            searchPlaceholder, activeSuggestionIndex, handleSearchKeyDown, 
            searchSuggestions, handleQuickView 
        }) => {
            const collections = [
                // "Desi Chutti" is handled separately now, so we remove the generic definition for it from here to avoid duplication if we want.
                // However, to keep the logic clean, we will render it conditionally in the map.
                { 
                    title: <span className="flex items-center gap-3">Desi Chutti <img src="https://flagcdn.com/48x36/in.png" className="h-7 rounded shadow-sm border border-white" alt="India"/></span>, 
                    filter: "Domestic", 
                    isPremium: true,
                    isDesiSpecial: true // FLAG FOR ULTRA ENHANCEMENT
                },
                { 
                    title: "Videshi Vibes 🌍", 
                    filter: "International", 
                    bg: "bg-white", 
                    text: "text-slate-900", 
                    destinations: [
                        {name:"Dubai",img:"https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=300"},
                        {name:"Thailand",img:"https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=300"},
                        {name:"Maldives",img:"https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=300"},
                        {name:"Bali",img:"https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=300"},
                        {name:"Vietnam",img:"https://images.unsplash.com/photo-1528127269322-539801943592?w=300"},
                        {name:"Europe",img:"https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?w=300"},
                        {name:"Singapore",img:"https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=300"}
                    ] 
                },
                { title: "Wildlife & Safari 🐅", filter: "Wildlife", bg: "bg-teal-50", text: "text-teal-900", destinations: [{name:"Gir",img:"https://images.unsplash.com/photo-1577114436531-1634df982361?w=300"},{name:"Ranthambore",img:"https://images.unsplash.com/photo-1599596645396-9f7960787a70?w=300"},{name:"Kaziranga",img:"https://images.unsplash.com/photo-1570889279762-c040d7c71638?w=300"},{name:"Sundarbans",img:"https://images.unsplash.com/photo-1619441164627-d460d379055e?w=300"},{name:"Kenya",img:"https://images.unsplash.com/photo-1516426122078-c23e76319801?w=300"}] },
                { title: "Honeymoon Specials 💖", filter: "Honeymoon", bg: "bg-white", text: "text-pink-600", destinations: [{name:"Maldives",img:"https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=300"},{name:"Seychelles",img:"https://images.unsplash.com/photo-1505228395891-9a51e7e86bf6?w=300"},{name:"Santorini",img:"https://images.unsplash.com/photo-1613395877344-13d4c2ce5d2d?w=300"},{name:"Venice",img:"https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=300"},{name:"Bali",img:"https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=300"}] },
                { title: "Visa Free & Easy 🛂", filter: "VisaFree", bg: "bg-teal-50", text: "text-teal-900", destinations: [{name:"Thailand",img:"https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=300"},{name:"Sri Lanka",img:"https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?w=300"},{name:"Malaysia",img:"https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=300"},{name:"Kenya",img:"https://images.unsplash.com/photo-1516426122078-c23e76319801?w=300"},{name:"Vietnam",img:"https://images.unsplash.com/photo-1557750255-c76072a7aad1?w=300"}] },
                { title: "Cruise Control 🚢", filter: "Cruise", bg: "bg-white", text: "text-blue-900", destinations: [{name:"Cordelia",img:"https://images.unsplash.com/photo-1548574505-5e239809ee19?w=300"},{name:"Singapore",img:"https://images.unsplash.com/photo-1559599238-308793637427?w=300"},{name:"Nile Cruise",img:"https://images.unsplash.com/photo-1539650116455-251d9a6952cd?w=300"}] },
                { 
                    title: "Mann Ki Shanti 🙏", 
                    filter: "Spiritual", 
                    bg: "bg-orange-50", 
                    text: "text-orange-900", 
                    destinations: [
                        {name:"Char Dham",img:"https://images.unsplash.com/photo-1622483737392-255431de8f40?w=300"},
                        {name:"Varanasi",img:"https://images.unsplash.com/photo-1561361522-58907043a553?w=300"},
                        {name:"Tirupati",img:"https://images.unsplash.com/photo-1628062120087-43a99202422c?w=300"},
                        {name:"Bodh Gaya",img:"https://images.unsplash.com/photo-1569288285918-3c0663473c43?w=300"},
                        {name:"Kailash",img:"https://images.unsplash.com/photo-1558272662-79c239459203?w=300"},
                        {name:"Lumbini",img:"https://images.unsplash.com/photo-1623953447959-b9a3044a2c0f?w=300"},
                        {name:"Amritsar",img:"https://images.unsplash.com/photo-1588416936097-4183d815e24d?w=300"},
                        {name:"Somnath",img:"https://images.unsplash.com/photo-1605628628734-75d5e94b2f8f?w=300"},
                        {name:"Shirdi",img:"https://images.unsplash.com/photo-1604332790936-236b9c9f4c3f?w=300"},
                        {name:"Sanchi",img:"https://images.unsplash.com/photo-1590425762692-42484a005697?w=300"},
                        {name:"Kushinagar",img:"https://images.unsplash.com/photo-1628672068340-9774775276e0?w=300"},
                        {name:"Ajmer Sharif",img:"https://images.unsplash.com/photo-1590664216212-62e7637d1665?w=300"},
                        {name:"Rameswaram",img:"https://images.unsplash.com/photo-1582556272565-5c9429402e3b?w=300"},
                        {name:"Puri",img:"https://images.unsplash.com/photo-1627918388837-7744359eb39c?w=300"}
                    ] 
                },
                { 
                    title: "Yaaron Ki Trip 🎉", 
                    filter: "Youthful", 
                    bg: "bg-white", 
                    text: "text-slate-900", 
                    externalLink: "https://vibeyatri.com/", 
                    destinations: [
                        {name:"Goa",img:"https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=300"},
                        {name:"Kasol",img:"https://images.unsplash.com/photo-1599408223644-440115336881?w=300"},
                        {name:"Rishikesh",img:"https://images.unsplash.com/photo-1506473082729-e31a89c258d3?w=300"},
                        {name:"Bir Billing",img:"https://images.unsplash.com/photo-1608280854894-3358c213ac54?w=300"},
                        {name:"Gokarna",img:"https://images.unsplash.com/photo-1614713568779-7f3c9597257e?w=300"},
                        {name:"Pondicherry",img:"https://images.unsplash.com/photo-1582556272565-5c9429402e3b?w=300"},
                        {name:"Pushkar",img:"https://images.unsplash.com/photo-1590664216212-62e7637d1665?w=300"},
                        {name:"Ziro",img:"https://images.unsplash.com/photo-1598616239103-689369949e25?w=300"}
                    ] 
                },
                { 
                    title: "Pahadi Calling 🏔️", 
                    filter: "Trek", 
                    bg: "bg-teal-50", 
                    text: "text-teal-900", 
                    externalLink: "https://vibeyatri.com/", 
                    destinations: [
                        {name:"Hampta Pass",img:"https://images.unsplash.com/photo-1598155513123-e913098254b3?w=300"},
                        {name:"Spiti Valley",img:"https://images.unsplash.com/photo-1626621338662-7232239322c9?w=300"},
                        {name:"Kedarkantha",img:"https://images.unsplash.com/photo-1610996894676-46f91d044230?w=300"},
                        {name:"Valley Flowers",img:"https://images.unsplash.com/photo-1566808905380-49638c407677?w=300"},
                        {name:"Chadar Trek",img:"https://images.unsplash.com/photo-1549527963-c7e63b632426?w=300"},
                        {name:"Triund",img:"https://images.unsplash.com/photo-1593693411606-25e24744b673?w=300"}
                    ] 
                }
            ];

            const handleDestinationClick = (name) => {
                setSearchTerm(name);
                setView('listing');
            };

            return (
                <div className="animate-fade-in pb-20" onClick={() => setIsSearchFocused(false)}>
                    {/* Hero Section */}
                    <div className="relative bg-slate-50 overflow-hidden pt-28 pb-32 px-4 mesh-bg">
                        <div className="absolute top-0 right-0 w-1/2 h-full bg-teal-50/20 rounded-bl-[120px] -z-0 hidden md:block"></div>
                        <div className="max-w-6xl mx-auto relative z-10">
                            <div className="md:w-3/4">
                                <div className="inline-block px-4 py-2 bg-white/60 backdrop-blur text-orange-700 rounded-full text-xs font-bold tracking-wide mb-6 border border-orange-100 shadow-sm animate-slide-up"><i className="fas fa-check-circle mr-1"></i> INDIA'S CALMEST BOOKING PLATFORM</div>
                                <h1 className="text-5xl md:text-8xl font-bold text-slate-900 leading-[1.1] mb-8 font-display animate-slide-up" style={{animationDelay: '0.1s'}}>
                                    Chutti starts <br/>
                                    <span className="text-teal-600 relative inline-block">
                                        here.
                                        <svg className="absolute w-full h-4 -bottom-1 left-0 text-orange-400 opacity-60" viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.00025 6.99997C25.7602 2.76678 73.1895 -2.48398 197.999 2.00021" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/></svg>
                                    </span>
                                </h1>
                                <p className="text-xl md:text-2xl text-slate-500 mb-12 max-w-lg leading-relaxed animate-slide-up" style={{animationDelay: '0.2s'}}>Planning a holiday shouldn't feel like work. Transparent pricing, curated experiences, and zero clutter.</p>
                                
                                {/* --- ADVANCED SMART SEARCH BAR --- */}
                                <div 
                                    onClick={(e) => e.stopPropagation()} 
                                    className={`relative bg-white/90 p-3 rounded-[2.5rem] border border-white/60 backdrop-blur-2xl flex flex-col md:flex-row gap-2 max-w-4xl shadow-float transform transition-all duration-300 z-30 animate-slide-up ${isSearchFocused ? 'scale-[1.01] ring-4 ring-teal-500/10' : ''}`}
                                    style={{animationDelay: '0.3s'}}
                                >
                                    
                                    {/* Destination Input */}
                                    <div className="flex-1 bg-slate-50/50 hover:bg-white rounded-[2rem] px-8 py-4 transition-all border border-transparent hover:border-teal-100 group text-left cursor-text relative">
                                        <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1 group-hover:text-teal-600 transition-colors">Where to?</label>
                                        <div className="flex items-center">
                                            <i className={`fas fa-map-marker-alt mr-4 text-xl transition-colors ${isSearchFocused ? 'text-teal-600' : 'text-slate-400'}`}></i>
                                            <input 
                                                id="search-input"
                                                type="text" 
                                                placeholder={searchPlaceholder} 
                                                value={searchTerm} 
                                                onFocus={() => setIsSearchFocused(true)}
                                                onChange={(e) => {
                                                    setSearchTerm(e.target.value);
                                                    setIsSearchFocused(true);
                                                    setActiveSuggestionIndex(-1);
                                                }}
                                                onKeyDown={handleSearchKeyDown}
                                                className="w-full bg-transparent outline-none text-slate-900 font-bold text-xl placeholder:text-slate-300 placeholder:font-medium" 
                                                autoComplete="off"
                                            />
                                        </div>
                                        {searchTerm && (
                                            <i onClick={() => {setSearchTerm(""); setIsSearchFocused(true);}} className="fas fa-times-circle text-slate-300 absolute right-6 top-1/2 -translate-y-1/2 cursor-pointer hover:text-red-400 transition-colors text-xl"></i>
                                        )}
                                        
                                        {/* --- INTELLIGENT DROPDOWN --- */}
                                        {isSearchFocused && (
                                            <div className="absolute top-full left-0 w-full mt-4 bg-white/90 backdrop-blur-2xl rounded-[2rem] shadow-2xl border border-white/50 overflow-hidden z-[60] animate-slide-up origin-top">
                                                {/* CASE 1: INPUT IS EMPTY */}
                                                {searchTerm.length === 0 && (
                                                    <div className="p-6">
                                                        {recentlyViewed.length > 0 && (
                                                            <div className="mb-6">
                                                                <div className="text-xs font-bold text-slate-400 uppercase mb-3 flex items-center gap-2 tracking-wider"><i className="fas fa-history"></i> Recent Searches</div>
                                                                <div className="flex gap-2 flex-wrap">
                                                                    {recentlyViewed.slice(0,3).map(pkg => (
                                                                        <button key={pkg.id} onClick={() => {setSelectedHoliday(pkg); setView('detail'); setIsSearchFocused(false);}} className="text-sm bg-slate-50 hover:bg-teal-50 text-slate-600 hover:text-teal-700 px-4 py-2 rounded-xl border border-slate-100 transition-colors truncate max-w-[150px] font-medium">{pkg.title}</button>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        )}
                                                        <div className="text-xs font-bold text-slate-400 uppercase mb-3 flex items-center gap-2 tracking-wider"><i className="fas fa-fire text-orange-400"></i> Trending Now</div>
                                                        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                                            {['Goa', 'Maldives', 'Kashmir', 'Dubai', 'Kerala'].map(trend => (
                                                                <div key={trend} onClick={() => {setSearchTerm(trend);}} className="cursor-pointer p-3 hover:bg-slate-50 rounded-xl flex items-center gap-3 text-slate-600 font-bold transition-colors">
                                                                    <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 text-xs shadow-sm">#</div> {trend}
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}

                                                {/* CASE 2: HAS RESULTS */}
                                                {searchTerm.length > 0 && searchSuggestions.length > 0 && (
                                                    <div>
                                                        <div className="bg-slate-50/50 px-6 py-3 border-b border-slate-100 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Best Matches</div>
                                                        {searchSuggestions.map((pkg, i) => (
                                                            <div 
                                                                key={pkg.id} 
                                                                onClick={(e) => {
                                                                    e.stopPropagation();
                                                                    setSearchTerm(pkg.title);
                                                                    setSelectedHoliday(pkg);
                                                                    addToHistory(pkg);
                                                                    setView('detail');
                                                                    setIsSearchFocused(false);
                                                                }}
                                                                className={`px-6 py-4 cursor-pointer flex items-center gap-4 border-b border-slate-50 last:border-0 transition-colors ${i === activeSuggestionIndex ? 'bg-teal-50' : 'hover:bg-slate-50'}`}
                                                            >
                                                                <div className="w-14 h-14 rounded-xl overflow-hidden bg-slate-200 shrink-0 shadow-sm relative group">
                                                                    <img src={pkg.image} className="w-full h-full object-cover transition-transform group-hover:scale-110" />
                                                                </div>
                                                                <div className="flex-1 min-w-0">
                                                                    <div className="font-bold text-slate-900 truncate text-lg">
                                                                        <HighlightMatch text={pkg.title} highlight={searchTerm} />
                                                                    </div>
                                                                    <div className="text-xs text-slate-500 flex items-center gap-3 mt-1 font-medium">
                                                                        <span className={`px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wide ${pkg.region === 'International' ? 'bg-purple-50 text-purple-600 border border-purple-100' : 'bg-green-50 text-green-600 border border-green-100'}`}>{pkg.region === 'International' ? 'INTL' : 'DOM'}</span>
                                                                        <span><i className="far fa-clock"></i> {pkg.duration}</span>
                                                                        {pkg.rating >= 4.8 && <span className="text-orange-500 flex items-center gap-1"><i className="fas fa-star text-[8px]"></i> {pkg.rating}</span>}
                                                                    </div>
                                                                </div>
                                                                <div className="text-right shrink-0">
                                                                    <div className="font-bold text-teal-700 text-lg">{formatPrice(pkg.price)}</div>
                                                                    <div className="text-[10px] text-slate-400 font-medium">per person</div>
                                                                </div>
                                                            </div>
                                                        ))}
                                                        <div onClick={() => {setView('listing'); setIsSearchFocused(false);}} className="p-4 text-center text-teal-600 text-sm font-bold cursor-pointer hover:bg-teal-50 transition-colors border-t border-slate-100">
                                                            View all results for "{searchTerm}"
                                                        </div>
                                                    </div>
                                                )}

                                                {/* CASE 3: NO RESULTS */}
                                                {searchTerm.length > 0 && searchSuggestions.length === 0 && (
                                                    <div className="p-10 text-center">
                                                        <div className="text-5xl mb-4 opacity-50">🤔</div>
                                                        <h4 className="font-bold text-slate-900 text-lg">No destinations found</h4>
                                                        <p className="text-slate-500 text-sm mb-6 mt-1">Try searching for 'Goa', 'Kerala' or 'Dubai'</p>
                                                        <button onClick={() => {setSearchTerm("");}} className="text-teal-600 text-sm font-bold hover:underline">Clear Search</button>
                                                    </div>
                                                )}
                                            </div>
                                        )}
                                    </div>

                                    {/* Date Input (Simulated) */}
                                    <div className="bg-slate-50/50 hover:bg-white rounded-[2rem] px-8 py-4 transition-colors border border-transparent hover:border-teal-100 group text-left w-full md:w-56 hidden md:block">
                                        <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1 group-hover:text-teal-600 transition-colors">When?</label>
                                        <div className="flex items-center">
                                            <i className="far fa-calendar-alt text-slate-400 mr-3 text-xl"></i>
                                            <input 
                                                type="text" 
                                                placeholder="Anytime"
                                                onFocus={(e) => e.target.type='date'}
                                                onBlur={(e) => e.target.type='text'}
                                                className="w-full bg-transparent outline-none text-slate-900 font-bold text-lg placeholder:text-slate-800 cursor-pointer" 
                                            />
                                        </div>
                                    </div>

                                    {/* Search Button */}
                                    <button 
                                        onClick={() => setView('listing')} 
                                        className="bg-teal-600 text-white px-10 py-4 rounded-[2rem] font-bold text-xl hover:bg-teal-700 transition-all shadow-lg shadow-teal-500/30 active:scale-95 flex items-center justify-center gap-2 md:w-auto w-full group hover:-translate-y-1"
                                    >
                                        <i className="fas fa-search group-hover:scale-110 transition-transform"></i>
                                    </button>
                                </div>
                                
                                {/* Popular Tags */}
                                <div className="mt-10 flex justify-center gap-3 flex-wrap opacity-80 hover:opacity-100 transition-opacity animate-slide-up" style={{animationDelay: '0.4s'}}>
                                    <span className="text-sm text-slate-400 font-medium py-1.5">Trending:</span>
                                    {['Kashmir', 'Bali', 'Kerala', 'Dubai', 'Honeymoon'].map(tag => (
                                        <button key={tag} onClick={() => {setSearchTerm(tag); setView('listing');}} className="text-xs font-bold text-teal-700 bg-white/60 backdrop-blur-sm px-4 py-1.5 rounded-full border border-white/50 hover:bg-white hover:shadow-md hover:-translate-y-0.5 transition-all">{tag}</button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Recently Viewed */}
                    <RecentlyViewed recentlyViewed={recentlyViewed} setSelectedHoliday={setSelectedHoliday} setView={setView} formatPrice={formatPrice} />
                    
                    <WhyChooseUs />

                    {/* Flash Deals - ULTRA LEVEL ENHANCEMENT */}
                    <FlashDeals setSelectedHoliday={setSelectedHoliday} setView={setView} formatPrice={formatPrice} />

                    {/* Travel Essentials */}
                    <div className="max-w-7xl mx-auto px-6 mb-16">
                            <h3 className="text-2xl font-bold text-slate-900 mb-8 font-display">Travel Essentials</h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                <div className="bg-white p-8 rounded-[2rem] shadow-card border border-slate-100 flex items-center gap-6 hover:shadow-float transition-all hover:-translate-y-1 duration-300 group cursor-pointer">
                                    <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform"><i className="fas fa-passport text-2xl"></i></div>
                                    <div><h4 className="font-bold text-xl text-slate-900 font-display mb-1">Visa Services</h4><p className="text-sm text-slate-500 font-medium">Hassle-free processing</p></div>
                                </div>
                                <div className="bg-white p-8 rounded-[2rem] shadow-card border border-slate-100 flex items-center gap-6 hover:shadow-float transition-all hover:-translate-y-1 duration-300 group cursor-pointer">
                                    <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center text-green-600 group-hover:scale-110 transition-transform"><i className="fas fa-money-bill-wave text-2xl"></i></div>
                                    <div><h4 className="font-bold text-xl text-slate-900 font-display mb-1">Forex Cards</h4><p className="text-sm text-slate-500 font-medium">Best exchange rates</p></div>
                                </div>
                                <div className="bg-white p-8 rounded-[2rem] shadow-card border border-slate-100 flex items-center gap-6 hover:shadow-float transition-all hover:-translate-y-1 duration-300 group cursor-pointer">
                                    <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center text-red-600 group-hover:scale-110 transition-transform"><i className="fas fa-heartbeat text-2xl"></i></div>
                                    <div><h4 className="font-bold text-xl text-slate-900 font-display mb-1">Travel Insurance</h4><p className="text-sm text-slate-500 font-medium">Secure your trip</p></div>
                                </div>
                            </div>
                    </div>

                    {/* Collections - Conditional Rendering for Enhanced Desi Chutti */}
                    {collections.map((col, idx) => {
                        if (col.isDesiSpecial) {
                            return (
                                <EnhancedDesiSection 
                                    key={idx}
                                    col={col}
                                    handleDestinationClick={handleDestinationClick}
                                    setSelectedHoliday={setSelectedHoliday}
                                    setView={setView}
                                    toggleWishlist={toggleWishlist}
                                    wishlist={wishlist}
                                    addToHistory={addToHistory}
                                    formatPrice={formatPrice}
                                    handleQuickView={handleQuickView}
                                />
                            );
                        }

                        return (
                        <div key={idx} className={`py-20 ${col.bg} relative overflow-hidden`}>
                            <div className="max-w-7xl mx-auto px-6 relative z-10">
                                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                                    <div>
                                        <h2 className={`text-3xl md:text-5xl font-bold ${col.text} mb-4 font-display`}>{col.title}</h2>
                                    </div>
                                    {col.externalLink ? (
                                        <a 
                                            href={col.externalLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-teal-700 font-bold hover:text-teal-900 flex items-center gap-2 group bg-white/50 hover:bg-white px-5 py-2.5 rounded-full transition-all shadow-sm"
                                        >
                                            View on VibeYatri <i className="fas fa-external-link-alt text-sm group-hover:translate-x-1 transition-transform"></i>
                                        </a>
                                    ) : (
                                        <button 
                                            onClick={() => { setActiveFilter(col.filter); setView('listing'); }}
                                            className="text-teal-700 font-bold hover:text-teal-900 flex items-center gap-2 group bg-white/50 hover:bg-white px-5 py-2.5 rounded-full transition-all shadow-sm whitespace-nowrap"
                                        >
                                            View all <i className="fas fa-arrow-right text-sm group-hover:translate-x-1 transition-transform"></i>
                                        </button>
                                    )}
                                </div>

                                {/* App Style Destinations */}
                                {col.destinations && (
                                    <div className="flex gap-8 overflow-x-auto pb-10 no-scrollbar snap-x mb-4 snap-padding-x px-2">
                                        {col.destinations.map((dest, i) => (
                                            <div 
                                                key={i} 
                                                onClick={() => handleDestinationClick(dest.name)}
                                                className="destination-icon flex flex-col items-center gap-4 cursor-pointer group flex-shrink-0 snap-start"
                                            >
                                                <div className="w-28 h-28 rounded-3xl overflow-hidden shadow-soft border-4 border-white group-hover:shadow-glow transition-all relative">
                                                    <div className="story-ring w-full h-full p-[3px]">
                                                        <img src={dest.img} alt={dest.name} className="w-full h-full object-cover rounded-[1.2rem] border-2 border-white" />
                                                    </div>
                                                    {/* Price Pill Enhancement */}
                                                    {dest.startPrice && (
                                                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-slate-900 text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-lg border border-white whitespace-nowrap z-10 group-hover:bg-teal-600 transition-colors">
                                                            fr. {dest.startPrice}
                                                        </div>
                                                    )}
                                                </div>
                                                <span className="text-sm font-bold text-slate-700 group-hover:text-teal-700 font-display tracking-wide mt-2">{dest.name}</span>
                                            </div>
                                        ))}
                                    </div>
                                )}
                                
                                {/* Packages Row */}
                                <div className="flex overflow-x-auto gap-8 pb-8 no-scrollbar snap-x snap-mandatory snap-padding-x px-2">
                                    {HOLIDAY_PACKAGES.filter(p => 
                                        col.filter === "Domestic" ? p.region === "Domestic" :
                                        col.filter === "International" ? p.region === "International" :
                                        p.type === col.filter
                                    ).slice(0, 5).map((pkg) => (
                                        <div key={pkg.id} onClick={() => {setSelectedHoliday(pkg); addToHistory(pkg); setView('detail')}} className="snap-start flex-shrink-0 w-80 bg-white rounded-[2rem] overflow-hidden border border-slate-100 shadow-card hover:shadow-float transition-all duration-300 group relative transform hover:-translate-y-2">
                                            <div className="h-60 overflow-hidden relative">
                                                <img src={pkg.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60"></div>
                                                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-lg text-xs font-bold text-teal-800 uppercase tracking-wide shadow-sm">{pkg.type}</div>
                                                {pkg.instantBook && <div className="absolute top-4 right-4 bg-orange-500 text-white px-2 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider shadow-sm flex items-center gap-1"><i className="fas fa-bolt"></i> Instant</div>}
                                                <button 
                                                    onClick={(e) => { e.stopPropagation(); toggleWishlist(pkg.id); }}
                                                    className="absolute bottom-4 right-4 bg-white/20 backdrop-blur-md p-3 rounded-full hover:bg-white hover:text-red-500 text-white transition-all shadow-lg z-10 border border-white/30"
                                                >
                                                    <i className={`${wishlist.includes(pkg.id) ? 'fas text-red-500' : 'far'} fa-heart text-lg`}></i>
                                                </button>
                                                
                                                <button 
                                                    onClick={(e) => handleQuickView(e, pkg)}
                                                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-full font-bold text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white hover:text-teal-700 hover:scale-110"
                                                >
                                                    Quick View
                                                </button>
                                            </div>
                                            <div className="p-6">
                                                <div className="flex justify-between items-start mb-3">
                                                    <h3 className="font-bold text-xl text-slate-900 mb-1 line-clamp-1 group-hover:text-teal-700 transition-colors font-display">{pkg.title}</h3>
                                                </div>
                                                <div className="flex items-center gap-3 text-xs font-bold text-slate-400 mb-4">
                                                    <span className="flex items-center gap-1"><i className="fas fa-clock"></i> {pkg.duration}</span>
                                                    <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                                                    <span className="flex items-center gap-1 text-orange-400"><i className="fas fa-star"></i> {pkg.rating}</span>
                                                </div>
                                                <div className="flex justify-between items-end pt-4 border-t border-slate-50">
                                                    <div>
                                                        <span className="text-[10px] text-slate-400 uppercase tracking-widest font-bold block mb-0.5">Starting from</span>
                                                        <span className="font-bold text-2xl text-slate-900 font-display">{formatPrice(pkg.price)}</span>
                                                    </div>
                                                    <span className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-teal-600 group-hover:bg-teal-600 group-hover:text-white transition-colors shadow-sm"><i className="fas fa-arrow-right"></i></span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    );
                    })}

                    {/* Travel Blog Section */}
                    <TravelBlog />
                    <CompareBar compareList={compareList} onOpenCompare={() => setShowCompareModal(true)} onClear={() => setCompareList([])} />
                </div>
            );
        };
        
        // --- B2B SWIPE VIEW ---
        const B2BSwipeView = ({ setView }) => (
            <div className="min-h-screen bg-slate-900 flex items-center justify-center text-white relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[100px] pointer-events-none"></div>
                <div className="text-center relative z-10 p-8 glass-panel rounded-3xl border-slate-700">
                    <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-600 rounded-2xl flex items-center justify-center text-4xl mb-6 mx-auto shadow-lg shadow-orange-500/30"><i className="fas fa-briefcase"></i></div>
                    <h2 className="text-3xl font-bold font-display mb-2">B2B Agent Portal</h2>
                    <p className="text-slate-400 mb-8">Exclusive deals and swipe deck for verified agents.</p>
                    <button onClick={() => setView('b2b-dashboard')} className="px-8 py-3 bg-white text-slate-900 rounded-xl font-bold hover:bg-teal-50 transition-colors">Go to Dashboard</button>
                    <div className="mt-6 text-xs text-slate-600">Switch back to Traveller mode in Navbar</div>
                </div>
            </div>
        );

        // --- B2B DASHBOARD (ENHANCED) ---
        const B2BDashboard = () => (
            <div className="min-h-screen bg-slate-900 text-white p-8 md:p-12">
                <div className="max-w-7xl mx-auto">
                    <div className="flex justify-between items-center mb-12">
                        <div>
                             <h1 className="text-3xl font-bold font-display">Agent Dashboard</h1>
                             <p className="text-slate-400">Welcome back, Partner.</p>
                        </div>
                        <div className="flex gap-3">
                            <button className="bg-slate-800 px-5 py-2 rounded-lg text-sm font-bold border border-slate-700">Download Reports</button>
                            <button className="bg-teal-600 px-5 py-2 rounded-lg text-sm font-bold">New Booking</button>
                        </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <div className="bg-slate-800 p-6 rounded-3xl border border-slate-700 relative overflow-hidden group hover:border-teal-500/50 transition-colors">
                            <div className="absolute right-0 top-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
                            <h3 className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-4 flex items-center gap-2"><div className="w-2 h-2 bg-emerald-400 rounded-full"></div> Wallet Balance</h3>
                            <p className="text-4xl font-bold font-display text-emerald-400 mb-2">₹45,200</p>
                            <p className="text-xs text-emerald-300/60">+ ₹12,500 this week</p>
                        </div>
                        <div className="bg-slate-800 p-6 rounded-3xl border border-slate-700 relative overflow-hidden group hover:border-orange-500/50 transition-colors">
                            <div className="absolute right-0 top-0 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
                             <h3 className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-4 flex items-center gap-2"><div className="w-2 h-2 bg-orange-400 rounded-full"></div> Pending Quotes</h3>
                             <p className="text-4xl font-bold font-display text-orange-400 mb-2">3</p>
                             <p className="text-xs text-orange-300/60">2 expiring soon</p>
                        </div>
                        <div className="bg-slate-800 p-6 rounded-3xl border border-slate-700 relative overflow-hidden group hover:border-blue-500/50 transition-colors">
                            <div className="absolute right-0 top-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
                             <h3 className="text-slate-400 text-xs font-bold uppercase tracking-wider mb-4 flex items-center gap-2"><div className="w-2 h-2 bg-blue-400 rounded-full"></div> Total Bookings</h3>
                             <p className="text-4xl font-bold font-display text-blue-400 mb-2">12</p>
                             <p className="text-xs text-blue-300/60">Top tier unlocked!</p>
                        </div>
                    </div>
                </div>
            </div>
        );
        
        // --- QUOTE MODAL ---
        const QuoteModal = ({ setShowQuoteModal, quoteItem }) => (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm animate-fade-in">
                <div className="bg-white rounded-3xl w-full max-w-md p-8 relative shadow-2xl animate-pop-in">
                    <button onClick={() => setShowQuoteModal(false)} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600"><i className="fas fa-times text-xl"></i></button>
                    <div className="w-16 h-16 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center mb-6 mx-auto text-2xl"><i className="fas fa-file-invoice"></i></div>
                    <h3 className="text-2xl font-bold mb-2 font-display text-center text-slate-900">Quote Generated!</h3>
                    <p className="text-slate-500 mb-8 text-center text-sm">Your quote for <strong>{quoteItem?.title}</strong> is ready to share.</p>
                    <div className="bg-slate-50 p-6 rounded-2xl mb-8 border border-slate-100">
                            <div className="flex justify-between mb-2"><span className="text-slate-500 text-sm font-medium">Client Price</span><span className="font-bold text-xl text-slate-900">₹{quoteItem?.finalPrice?.toLocaleString()}</span></div>
                            <div className="flex justify-between"><span className="text-slate-500 text-sm font-medium">Your Commission</span><span className="font-bold text-green-600">+ ₹{Math.round(quoteItem?.finalPrice * 0.1).toLocaleString()}</span></div>
                    </div>
                    <div className="flex gap-3">
                            <button className="flex-1 bg-green-500 text-white py-3 rounded-xl font-bold hover:bg-green-600 transition-colors shadow-lg shadow-green-500/30 flex items-center justify-center gap-2"><i className="fab fa-whatsapp"></i> WhatsApp</button>
                            <button className="flex-1 bg-slate-100 text-slate-700 py-3 rounded-xl font-bold hover:bg-slate-200 transition-colors flex items-center justify-center gap-2"><i className="fas fa-download"></i> PDF</button>
                    </div>
                </div>
            </div>
        );
        
        // --- LISTING VIEW ---
        const ListingView = ({ 
            filteredPackages, isLoading, searchTerm, setSearchTerm, activeFilter, 
            setActiveFilter, sortBy, setSortBy, setSelectedHoliday, setView, 
            toggleWishlist, wishlist, compareList, toggleCompare, handleQuickView, 
            formatPrice, handleResetFilters 
        }) => (
            <div className="animate-fade-in bg-slate-50 min-h-screen pb-20">
                <div className="bg-white/80 backdrop-blur-xl border-b border-slate-200 sticky top-20 z-40 py-4 px-6 shadow-sm">
                    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
                        <div><h1 className="text-2xl font-bold text-slate-900 font-display">Explore Packages</h1><p className="text-xs text-slate-500 font-medium">{filteredPackages.length} curated experiences found</p></div>
                        <div className="flex gap-3 w-full md:w-auto">
                            {/* Sorting Dropdown */}
                            <div className="relative group/sort">
                                <button className="flex items-center gap-2 px-5 py-2.5 border border-slate-200 bg-white rounded-xl text-sm font-bold text-slate-700 hover:bg-slate-50 transition-colors shadow-sm">
                                    <i className="fas fa-sort-amount-down text-slate-400"></i> {sortBy === 'price_low' ? 'Price: Low to High' : sortBy === 'price_high' ? 'Price: High to Low' : sortBy === 'rating' ? 'Top Rated' : 'Recommended'}
                                </button>
                                <div className="absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-xl border border-slate-100 hidden group-hover/sort:block z-50 animate-fade-in p-2">
                                    <button onClick={() => setSortBy('recommended')} className="block w-full text-left px-4 py-2 hover:bg-slate-50 text-sm font-medium rounded-lg text-slate-700">Recommended</button>
                                    <button onClick={() => setSortBy('price_low')} className="block w-full text-left px-4 py-2 hover:bg-slate-50 text-sm font-medium rounded-lg text-slate-700">Price: Low to High</button>
                                    <button onClick={() => setSortBy('price_high')} className="block w-full text-left px-4 py-2 hover:bg-slate-50 text-sm font-medium rounded-lg text-slate-700">Price: High to Low</button>
                                    <button onClick={() => setSortBy('rating')} className="block w-full text-left px-4 py-2 hover:bg-slate-50 text-sm font-medium rounded-lg text-slate-700">Top Rated</button>
                                </div>
                            </div>
                            <div className="relative w-full md:w-auto"><i className="fas fa-search absolute left-4 top-3.5 text-slate-400"></i><input type="text" placeholder="Search places..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="pl-10 pr-4 py-2.5 border border-slate-200 bg-white rounded-xl w-full md:w-64 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all text-sm font-medium shadow-sm" /></div>
                        </div>
                    </div>
                </div>
                
                {/* Quick Filters */}
                <div className="max-w-7xl mx-auto px-6 mt-8 overflow-x-auto no-scrollbar flex gap-3 pb-2">
                    <button 
                        onClick={handleResetFilters}
                        className={`px-5 py-2 rounded-full text-sm font-bold transition-all shadow-sm flex items-center gap-2 ${activeFilter !== 'All' ? 'bg-red-50 text-red-600 border border-red-100 hover:bg-red-100' : 'hidden'}`}
                    >
                        <i className="fas fa-times"></i> Clear
                    </button>
                    {[{label: "Under ₹30k", filter: "budget"}, {label: "Long Trips (6D+)", filter: "long"}, {label: "Visa Free", filter: "VisaFree"}, {label: "Honeymoon", filter: "Honeymoon"}].map((f, i) => (
                        <button key={i} onClick={() => { if(f.filter !== "budget" && f.filter !== "long") setActiveFilter(f.filter); }} className="px-5 py-2 rounded-full bg-white border border-slate-200 text-sm font-bold text-slate-600 whitespace-nowrap hover:border-teal-500 hover:text-teal-600 hover:shadow-md transition-all shadow-sm">{f.label}</button>
                    ))}
                </div>

                <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="hidden md:block col-span-1">
                        <div className="bg-white p-6 rounded-3xl shadow-soft border border-slate-100 sticky top-44">
                            <h3 className="font-bold text-slate-900 mb-6 flex items-center gap-2 font-display text-lg"><i className="fas fa-sliders-h text-teal-500"></i> Filters</h3>
                            <div className="space-y-2">
                                <div onClick={() => setActiveFilter("All")} className={`cursor-pointer flex items-center gap-3 p-3 rounded-xl transition-all ${activeFilter === "All" ? 'bg-teal-50 text-teal-700 font-bold shadow-sm' : 'text-slate-600 hover:bg-slate-50 font-medium'}`}><i className="fas fa-globe text-sm w-5"></i> All Destinations</div>
                                <div onClick={() => setActiveFilter("International")} className={`cursor-pointer flex items-center gap-3 p-3 rounded-xl transition-all ${activeFilter === "International" ? 'bg-teal-50 text-teal-700 font-bold shadow-sm' : 'text-slate-600 hover:bg-slate-50 font-medium'}`}><i className="fas fa-plane text-sm w-5"></i> International</div>
                                <div className="border-t border-slate-100 my-3"></div>
                                {['Beach', 'Nature', 'Luxury', 'Culture', 'Spiritual', 'Youthful', 'Trek', 'Wildlife', 'Honeymoon', 'VisaFree', 'Cruise', 'Corporate'].map(t => (<div key={t} onClick={() => setActiveFilter(t)} className={`cursor-pointer flex items-center gap-3 p-3 rounded-xl transition-all ${activeFilter === t ? 'bg-teal-50 text-teal-700 font-bold shadow-sm' : 'text-slate-600 hover:bg-slate-50 font-medium'}`}><div className={`w-2 h-2 rounded-full ${activeFilter === t ? 'bg-teal-500' : 'bg-slate-300'}`}></div> {t}</div>))}
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1 md:col-span-3 space-y-8">
                        {isLoading ? (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {[1, 2, 3, 4, 5, 6].map(n => <SkeletonCard key={n} />)}
                            </div>
                        ) : filteredPackages.length === 0 ? (
                            <div className="text-center py-24 bg-white rounded-[2rem] border-2 border-dashed border-slate-200">
                                <div className="text-6xl mb-6 opacity-80">🔍</div>
                                <h3 className="text-2xl font-bold text-slate-800 mb-2 font-display">No results found</h3>
                                <p className="text-slate-500 mb-8">Try adjusting your search or filters to find what you're looking for.</p>
                                <button onClick={() => {setSearchTerm(""); setActiveFilter("All")}} className="text-teal-600 font-bold hover:underline bg-teal-50 px-6 py-2 rounded-full">Clear All Filters</button>
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {filteredPackages.map(pkg => (
                            <div key={pkg.id} onClick={() => {setSelectedHoliday(pkg); setView('detail')}} className="bg-white rounded-[2rem] shadow-card border border-slate-100 overflow-hidden cursor-pointer hover:shadow-float transition-all duration-300 group relative transform hover:-translate-y-2">
                                <div className="h-52 overflow-hidden relative">
                                    <img src={pkg.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"/>
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-lg text-xs font-bold text-teal-800 uppercase tracking-wide shadow-sm border border-white/50">{pkg.type}</div>
                                    {pkg.instantBook && <div className="absolute top-4 right-4 bg-orange-500 text-white px-2 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider shadow-sm flex items-center gap-1"><i className="fas fa-bolt"></i> Instant</div>}
                                    
                                    {/* Hover Action Buttons */}
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-90 group-hover:scale-100">
                                        <button 
                                            onClick={(e) => handleQuickView(e, pkg)}
                                            className="bg-white text-slate-900 px-4 py-2 rounded-full font-bold text-xs hover:bg-teal-50 hover:text-teal-700 shadow-lg"
                                        >
                                            Quick View
                                        </button>
                                    </div>
                                </div>
                                
                                <button 
                                    onClick={(e) => { e.stopPropagation(); toggleWishlist(pkg.id); }}
                                    className="absolute -bottom-5 right-6 bg-white p-3 rounded-full shadow-lg hover:text-red-500 text-slate-300 transition-all z-20 group-hover:bottom-28 duration-300"
                                >
                                    <i className={`${wishlist.includes(pkg.id) ? 'fas text-red-500' : 'fas'} fa-heart text-lg`}></i>
                                </button>
                                
                                <div className="p-6">
                                    <div className="flex justify-between items-start mb-3">
                                        <h3 className="font-bold text-xl text-slate-900 mb-1 line-clamp-1 group-hover:text-teal-700 transition-colors font-display">{pkg.title}</h3>
                                    </div>
                                    <div className="flex items-center gap-3 text-xs font-bold text-slate-400 mb-4">
                                        <span className="flex items-center gap-1"><i className="fas fa-clock"></i> {pkg.duration}</span>
                                        <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                                        <span className="flex items-center gap-1 text-orange-400"><i className="fas fa-star"></i> {pkg.rating}</span>
                                    </div>
                                    <div className="flex justify-between items-end pt-4 border-t border-slate-50">
                                        <div><span className="text-[10px] text-slate-400 uppercase tracking-widest font-bold block mb-0.5">Starting from</span><span className="font-bold text-2xl text-slate-900 font-display">{formatPrice(pkg.price)}</span></div>
                                        <button className="text-orange-600 font-bold text-xs bg-orange-50 hover:bg-orange-100 px-4 py-2 rounded-lg transition-colors uppercase tracking-wide">View Deal</button>
                                    </div>
                                </div>
                            </div>
                        ))}</div>)}
                    </div>
                </div>
            </div>
        );

        const LandingPage = () => {
            const [view, setView] = useState('home'); 
            const [isB2BMode, setIsB2BMode] = useState(false);
            const [selectedHoliday, setSelectedHoliday] = useState(null);
            const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
            const [activeSubPage, setActiveSubPage] = useState(null);
            const [showWelcome, setShowWelcome] = useState(false);
            const [isAIModalOpen, setIsAIModalOpen] = useState(false); 
            const [wishlist, setWishlist] = useState([]); 
            const [recentlyViewed, setRecentlyViewed] = useState([]); 
            const [toasts, setToasts] = useState([]); 
            const [compareList, setCompareList] = useState([]); 
            const [showCompareModal, setShowCompareModal] = useState(false);
            const [isLoading, setIsLoading] = useState(false);
            const [user, setUser] = useState(null);
            const [greeting, setGreeting] = useState("Namaste!");
            const [currency, setCurrency] = useState('INR'); 
            const [quickViewPkg, setQuickViewPkg] = useState(null); 
            
            const [searchTerm, setSearchTerm] = useState("");
            const [activeFilter, setActiveFilter] = useState("All");
            
            // Advanced Search States
            const [isSearchFocused, setIsSearchFocused] = useState(false);
            const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(-1);
            const [searchPlaceholder, setSearchPlaceholder] = useState("Search destinations...");

            const [showBookingModal, setShowBookingModal] = useState(false);
            const [bookingStatus, setBookingStatus] = useState("idle"); 
            const [showQuoteModal, setShowQuoteModal] = useState(false);
            const [quoteItem, setQuoteItem] = useState(null);
            
            // B2B State
            const [swipedRight, setSwipedRight] = useState([]);

            useEffect(() => window.scrollTo(0, 0), [view, activeSubPage]);

            useEffect(() => {
                const hasVisited = sessionStorage.getItem('hasVisitedGochutti');
                if (!hasVisited) {
                    const timer = setTimeout(() => {
                        setShowWelcome(true);
                        sessionStorage.setItem('hasVisitedGochutti', 'true');
                    }, 1500);
                    return () => clearTimeout(timer);
                }
                
                // Time-based greeting
                const hour = new Date().getHours();
                if (hour < 12) setGreeting("Good Morning");
                else if (hour < 18) setGreeting("Good Afternoon");
                else setGreeting("Good Evening");
            }, []);

            // Dynamic Search Placeholder
            useEffect(() => {
                if (isSearchFocused || searchTerm) return;

                const placeholders = ["Search 'Goa'", "Search 'Honeymoon'", "Search 'Dubai'", "Search 'Adventure'", "Search 'Kerala'"];
                let index = 0;
                const interval = setInterval(() => {
                    index = (index + 1) % placeholders.length;
                    setSearchPlaceholder(placeholders[index]);
                }, 3000);
                return () => clearInterval(interval);
            }, [isSearchFocused, searchTerm]);
            
            // Currency Formatter
            const formatPrice = (price) => {
                if (currency === 'USD') {
                    return `$${Math.round(price / 84).toLocaleString()}`;
                }
                return `₹${price.toLocaleString()}`;
            };
            
            // Add to Recently Viewed
            const addToHistory = (pkg) => {
                setRecentlyViewed(prev => {
                    const filtered = prev.filter(p => p.id !== pkg.id);
                    return [pkg, ...filtered].slice(0, 5); 
                });
            };

            // Toast Helper
            const addToast = (msg, type = 'info') => {
                const id = Date.now();
                setToasts(prev => [...prev, { id, msg, type }]);
                setTimeout(() => setToasts(prev => prev.filter(t => t.id !== id)), 3000);
            };

            const toggleWishlist = (pkgId) => {
                setWishlist(prev => {
                    if (prev.includes(pkgId)) {
                         addToast("Removed from Wishlist", "error");
                         return prev.filter(id => id !== pkgId);
                    } else {
                        addToast("Added to Wishlist ❤️", "success");
                        return [...prev, pkgId];
                    }
                });
            };

            const toggleCompare = (e, pkg) => {
                e.stopPropagation();
                setCompareList(prev => {
                    if (prev.find(p => p.id === pkg.id)) {
                         return prev.filter(p => p.id !== pkg.id);
                    }
                    if (prev.length >= 3) {
                        addToast("Max 3 packages to compare!", "info");
                        return prev;
                    }
                    return [...prev, pkg];
                });
            };
            
            const handleResetFilters = () => {
                setActiveFilter("All");
                setSearchTerm("");
                setSortBy('recommended');
            };
            
            const handleQuickView = (e, pkg) => {
                e.stopPropagation();
                setQuickViewPkg(pkg);
            }

            // Enhanced Filter Logic
            useEffect(() => {
                if(activeFilter !== 'All') window.scrollTo({ top: 0, behavior: 'smooth' });
            }, [activeFilter]);

            const filteredPackages = useMemo(() => {
                return HOLIDAY_PACKAGES.filter(pkg => {
                    const matchesSearch = pkg.title.toLowerCase().includes(searchTerm.toLowerCase()) || pkg.tags.some(t => t.toLowerCase().includes(searchTerm.toLowerCase()));
                    const matchesFilter = activeFilter === "All" || (activeFilter === "International" ? pkg.region === "International" : (activeFilter === "Domestic" ? pkg.region === "Domestic" : (activeFilter === "Wildlife" ? pkg.collection === "Wildlife & Safari" : (activeFilter === "Honeymoon" ? pkg.collection === "Honeymoon Specials" : (activeFilter === "VisaFree" ? (pkg.tags.includes("VisaFree") || pkg.collection === "Visa Free & Easy 🛂") : (activeFilter === "Cruise" ? pkg.type === "Cruise" : pkg.type === activeFilter || pkg.collection === activeFilter))))));
                    return matchesSearch && matchesFilter;
                });
            }, [searchTerm, activeFilter]);

            // --- SMART SEARCH LOGIC (WEIGHTED) ---
            const searchSuggestions = useMemo(() => {
                if (!searchTerm || searchTerm.length < 1) return [];
                const terms = searchTerm.toLowerCase();
                
                return HOLIDAY_PACKAGES.map(pkg => {
                    let score = 0;
                    const titleLower = pkg.title.toLowerCase();
                    const tagsLower = pkg.tags.map(t => t.toLowerCase());
                    const regionLower = pkg.region.toLowerCase();

                    // Scoring Logic
                    if (titleLower === terms) score += 100; // Exact match
                    else if (titleLower.startsWith(terms)) score += 50; // Starts with
                    else if (titleLower.includes(terms)) score += 20; // Contains
                    
                    if (tagsLower.some(t => t.includes(terms))) score += 10;
                    if (regionLower.includes(terms)) score += 5;

                    return { ...pkg, score };
                })
                .filter(pkg => pkg.score > 0)
                .sort((a, b) => b.score - a.score)
                .slice(0, 6);
            }, [searchTerm]);

            const handleSearchKeyDown = (e) => {
                if (e.key === 'ArrowDown') {
                    setActiveSuggestionIndex(prev => (prev < searchSuggestions.length - 1 ? prev + 1 : prev));
                } else if (e.key === 'ArrowUp') {
                    setActiveSuggestionIndex(prev => (prev > 0 ? prev - 1 : -1));
                } else if (e.key === 'Enter') {
                    if (activeSuggestionIndex >= 0 && searchSuggestions[activeSuggestionIndex]) {
                         const pkg = searchSuggestions[activeSuggestionIndex];
                         setSearchTerm(pkg.title);
                         setSelectedHoliday(pkg);
                         addToHistory(pkg);
                         setView('detail');
                         setIsSearchFocused(false);
                    } else if (searchTerm.trim() !== "") {
                        setView('listing');
                        setIsSearchFocused(false);
                    }
                }
            };

            const handleLogin = () => {
                setUser({ name: "Rahul", avatar: "R" });
                addToast("Welcome back, Rahul!", "success");
            };
            
            // --- Sort By State and Logic ---
            const [sortBy, setSortBy] = useState('recommended');

            const sortedPackages = useMemo(() => {
                let sorted = [...filteredPackages];
                if (sortBy === 'price_low') {
                    sorted.sort((a, b) => a.price - b.price);
                } else if (sortBy === 'price_high') {
                    sorted.sort((a, b) => b.price - a.price);
                } else if (sortBy === 'rating') {
                    sorted.sort((a, b) => b.rating - a.rating);
                }
                return sorted;
            }, [filteredPackages, sortBy]);

            return (
                <div className={`min-h-screen font-sans transition-colors duration-500 mode-transition ${isB2BMode ? 'bg-slate-900 text-white' : 'bg-white text-gray-900'}`}>
                    <Navbar 
                        isB2BMode={isB2BMode} 
                        setIsB2BMode={setIsB2BMode} 
                        setView={setView} 
                        wishlist={wishlist} 
                        user={user} 
                        handleLogin={handleLogin} 
                        swipedRight={swipedRight} 
                        setCurrency={setCurrency} 
                        currency={currency} 
                        mobileMenuOpen={mobileMenuOpen} 
                        setMobileMenuOpen={setMobileMenuOpen} 
                        setActiveSubPage={setActiveSubPage}
                    />
                    <main>
                        {isB2BMode ? (view === 'b2b-dashboard' ? <B2BDashboard/> : <B2BSwipeView setView={setView}/>) : 
                        (view === 'home' ? (
                            <HomeView 
                                setView={setView} 
                                setActiveFilter={setActiveFilter} 
                                searchTerm={searchTerm} 
                                setSearchTerm={setSearchTerm} 
                                recentlyViewed={recentlyViewed} 
                                setSelectedHoliday={setSelectedHoliday} 
                                addToHistory={addToHistory} 
                                formatPrice={formatPrice} 
                                wishlist={wishlist} 
                                toggleWishlist={toggleWishlist} 
                                compareList={compareList} 
                                toggleCompare={toggleCompare} 
                                isSearchFocused={isSearchFocused} 
                                setIsSearchFocused={setIsSearchFocused} 
                                searchPlaceholder={searchPlaceholder} 
                                activeSuggestionIndex={activeSuggestionIndex} 
                                handleSearchKeyDown={handleSearchKeyDown} 
                                searchSuggestions={searchSuggestions} 
                                handleQuickView={handleQuickView}
                            />
                        ) : view === 'listing' ? (
                            <ListingView 
                                filteredPackages={filteredPackages} 
                                isLoading={isLoading} 
                                searchTerm={searchTerm} 
                                setSearchTerm={setSearchTerm} 
                                activeFilter={activeFilter} 
                                setActiveFilter={setActiveFilter} 
                                sortBy={sortBy} 
                                setSortBy={setSortBy} 
                                setSelectedHoliday={setSelectedHoliday} 
                                setView={setView} 
                                toggleWishlist={toggleWishlist} 
                                wishlist={wishlist} 
                                compareList={compareList} 
                                toggleCompare={toggleCompare} 
                                handleQuickView={handleQuickView} 
                                formatPrice={formatPrice} 
                                handleResetFilters={handleResetFilters}
                            />
                        ) : view === 'wishlist' ? (
                            <WishlistView 
                                wishlist={wishlist} 
                                setView={setView} 
                                setSelectedHoliday={setSelectedHoliday} 
                                addToHistory={addToHistory} 
                                formatPrice={formatPrice}
                            />
                        ) : (
                            <DetailView 
                                selectedHoliday={selectedHoliday}
                                setView={setView}
                                toggleWishlist={toggleWishlist}
                                wishlist={wishlist}
                                addToHistory={addToHistory}
                                formatPrice={formatPrice}
                                setShowBookingModal={setShowBookingModal}
                                addToast={addToast}
                            />
                        ))}
                    </main>
                    {!isB2BMode && <Footer setActiveSubPage={setActiveSubPage} />}
                    <AIAssistant isOpen={isAIModalOpen} onClose={() => setIsAIModalOpen(false)} />
                    {/* Floating AI Button (only on non-B2B) */}
                    {!isB2BMode && !isAIModalOpen && (
                        <button onClick={() => setIsAIModalOpen(true)} className="fixed bottom-20 md:bottom-6 right-6 w-14 h-14 bg-teal-600 text-white rounded-full shadow-glow flex items-center justify-center hover:scale-110 transition-transform z-40 animate-bounce">
                            <i className="fas fa-robot text-2xl"></i>
                        </button>
                    )}
                    <ToastContainer toasts={toasts} />
                    {activeSubPage && <SubPageView pageKey={activeSubPage} onClose={() => setActiveSubPage(null)} />}
                    {showBookingModal && <BookingModal onClose={() => setShowBookingModal(false)} addToast={addToast} />}
                    {showQuoteModal && <QuoteModal setShowQuoteModal={setShowQuoteModal} quoteItem={quoteItem} />}
                    {showWelcome && <WelcomePopup onClose={() => setShowWelcome(false)} greeting={greeting} />}
                    {showCompareModal && <CompareModal compareList={compareList} onClose={() => setShowCompareModal(false)} formatPrice={formatPrice} />}
                    {quickViewPkg && <QuickViewModal pkg={quickViewPkg} onClose={() => setQuickViewPkg(null)} onPriceFormat={formatPrice} />}
                </div>
            );
        };
        
        // --- DETAIL VIEW (ENHANCED) ---
        const DetailView = ({ selectedHoliday, setView, toggleWishlist, wishlist, addToHistory, formatPrice, setShowBookingModal, addToast }) => {
            if(!selectedHoliday) return null; 
            
            const [travelers, setTravelers] = useState(2);
            const [roomType, setRoomType] = useState('Standard');
            const [detailTab, setDetailTab] = useState('overview');

            const basePrice = selectedHoliday.price;
            const roomMultiplier = roomType === 'Deluxe' ? 1.2 : roomType === 'Premium' ? 1.5 : 1;
            const finalPrice = Math.round(basePrice * roomMultiplier);
            const totalPrice = finalPrice * travelers;
            
            const handleShare = () => {
                if (navigator.share) {
                    navigator.share({
                        title: selectedHoliday.title,
                        text: `Check out this amazing trip to ${selectedHoliday.title} on gochutti!`,
                        url: window.location.href,
                    });
                    addToast("Opening share menu...", "info");
                } else {
                    navigator.clipboard.writeText(window.location.href);
                    addToast("Link copied to clipboard! 🔗", "success");
                }
            };
            const weather = "28°C ☀️ Sunny"; 

            return (
                <div className="animate-fade-in bg-white pb-24 md:pb-20">
                    <div className="relative h-[60vh] lg:h-[70vh]">
                         <img src={selectedHoliday.image} className="w-full h-full object-cover fixed top-0 left-0 -z-10 brightness-[0.85]" />
                         <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
                         
                         <div className="absolute top-0 left-0 w-full p-6 z-20">
                            <button onClick={() => setView('listing')} className="bg-white/20 backdrop-blur-md hover:bg-white/30 text-white px-4 py-2 rounded-full font-bold flex items-center gap-2 transition-all"><i className="fas fa-arrow-left"></i> Back</button>
                         </div>

                         <div className="absolute bottom-0 w-full p-6 md:p-12 text-white z-20">
                             <div className="max-w-7xl mx-auto">
                                 <div className="flex flex-col md:flex-row justify-between items-end gap-6">
                                     <div>
                                        <div className="flex gap-2 mb-4">
                                            <span className="bg-teal-500/90 backdrop-blur px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wide">{selectedHoliday.type}</span>
                                            <span className="bg-white/20 backdrop-blur px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-wide border border-white/20">{selectedHoliday.duration}</span>
                                        </div>
                                        <h1 className="text-4xl md:text-6xl font-bold mb-2 font-display leading-tight">{selectedHoliday.title}</h1>
                                        <div className="flex items-center gap-2 text-sm opacity-90 font-light"><i className="fas fa-map-marker-alt"></i> {selectedHoliday.region}</div>
                                     </div>
                                     <div className="flex gap-3">
                                         <button onClick={() => toggleWishlist(selectedHoliday.id)} className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-full hover:bg-white hover:text-red-500 transition-all"><i className={`${wishlist.includes(selectedHoliday.id) ? 'fas text-red-500' : 'far'} fa-heart text-xl`}></i></button>
                                         <button onClick={handleShare} className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-full hover:bg-white hover:text-teal-600 transition-all"><i className="fas fa-share-alt text-xl"></i></button>
                                     </div>
                                 </div>
                             </div>
                         </div>
                    </div>

                    <div className="bg-white relative z-10 rounded-t-[2.5rem] -mt-10 pt-10">
                        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12">
                            <div className="lg:col-span-2 space-y-10">
                                <div className="flex gap-6 overflow-x-auto pb-2 no-scrollbar border-b border-slate-100">
                                    {['Overview', 'Itinerary', 'Reviews', 'Info'].map(tab => (
                                        <button key={tab} onClick={() => setDetailTab(tab.toLowerCase())} className={`px-4 py-2 font-bold text-sm whitespace-nowrap transition-all border-b-2 ${detailTab === tab.toLowerCase() ? 'text-teal-600 border-teal-600' : 'text-slate-400 border-transparent hover:text-slate-600'}`}>{tab}</button>
                                    ))}
                                </div>

                                {detailTab === 'overview' && (
                                    <div className="animate-fade-in space-y-8">
                                        <div className="flex justify-between items-center bg-blue-50 p-6 rounded-3xl border border-blue-100">
                                            <div className="flex items-center gap-4">
                                                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-500 text-xl"><i className="fas fa-cloud-sun"></i></div>
                                                <div><div className="text-xs text-blue-800 font-bold uppercase tracking-wider">Weather Now</div><div className="text-xl font-bold text-slate-900">{weather}</div></div>
                                            </div>
                                            <div className="text-right"><div className="text-xs text-slate-500 font-bold uppercase mb-1">Best Time</div><div className="text-sm font-medium text-slate-700">{selectedHoliday.bestTime}</div></div>
                                        </div>

                                        <div>
                                            <h3 className="text-xl font-bold text-slate-900 mb-4 font-display">Experience</h3>
                                            <p className="text-slate-600 leading-relaxed text-lg font-light">{selectedHoliday.description}</p>
                                        </div>

                                        <div>
                                            <h3 className="text-xl font-bold text-slate-900 mb-4 font-display">Highlights</h3>
                                            <div className="grid grid-cols-2 gap-4">
                                                {selectedHoliday.inclusions.map(inc => (
                                                    <div key={inc} className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100"><i className="fas fa-check-circle text-teal-500"></i> <span className="text-slate-700 font-medium">{inc}</span></div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                )}
                                
                                {detailTab === 'itinerary' && (
                                    <div className="space-y-6 animate-fade-in pl-4">
                                        {selectedHoliday.itinerary.map((day, i) => (
                                            <div key={i} className="timeline-item">
                                                <div className="timeline-dot"><i className={`fas fa-${day.icon || 'map-marker-alt'}`}></i></div>
                                                <div className="bg-white border border-slate-200 p-6 rounded-3xl hover:shadow-card transition-all group cursor-pointer">
                                                    <div className="flex justify-between items-center mb-2">
                                                        <span className="text-xs font-bold text-teal-600 uppercase tracking-wide bg-teal-50 px-3 py-1 rounded-full">Day {day.day}</span>
                                                    </div>
                                                    <h4 className="font-bold text-xl text-slate-900 mb-2 font-display">{day.title}</h4>
                                                    <p className="text-slate-500 text-sm leading-relaxed">{day.desc}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {detailTab === 'reviews' && (
                                    <div className="space-y-6 animate-fade-in">
                                         {MOCK_REVIEWS.map(review => (
                                            <div key={review.id} className="bg-white border border-slate-100 p-6 rounded-3xl shadow-sm">
                                                <div className="flex justify-between items-start mb-4">
                                                    <div className="flex items-center gap-3">
                                                        <div className="w-10 h-10 bg-teal-100 text-teal-700 rounded-full flex items-center justify-center font-bold">{review.avatar}</div>
                                                        <div><h4 className="font-bold text-slate-900 text-sm">{review.name}</h4><span className="text-xs text-slate-400">{review.date}</span></div>
                                                    </div>
                                                    <div className="flex text-orange-400 text-xs">
                                                        {[...Array(5)].map((_, i) => <i key={i} className={`fas fa-star ${i < review.rating ? '' : 'text-slate-200'}`}></i>)}
                                                    </div>
                                                </div>
                                                <p className="text-slate-600 text-sm leading-relaxed">"{review.text}"</p>
                                            </div>
                                         ))}
                                    </div>
                                )}

                                {detailTab === 'info' && (
                                    <div className="space-y-6 animate-fade-in text-sm text-slate-600">
                                        <div className="bg-slate-50 p-6 rounded-3xl">
                                            <h4 className="font-bold text-slate-900 mb-2">Visa Policy</h4>
                                            <p>{selectedHoliday.visaPolicy || "Standard policy applies. Check government website."}</p>
                                        </div>
                                        <div className="bg-slate-50 p-6 rounded-3xl">
                                            <h4 className="font-bold text-slate-900 mb-2">Exclusions</h4>
                                            <ul className="list-disc list-inside space-y-1">
                                                {selectedHoliday.exclusions.map((ex, i) => <li key={i}>{ex}</li>)}
                                            </ul>
                                        </div>
                                    </div>
                                )}
                            </div>

                            <div className="lg:col-span-1">
                                <div className="bg-white p-8 rounded-[2.5rem] shadow-float border border-slate-100 sticky top-28 desktop-booking-card">
                                    <div className="flex justify-between items-end mb-8 pb-6 border-b border-slate-100">
                                        <div><span className="text-xs text-slate-400 uppercase tracking-wide font-bold">Total Price</span><div className="text-4xl font-bold text-slate-900 font-display">{formatPrice(totalPrice)}</div></div>
                                        <div className="text-right">
                                            <div className="text-xs font-bold text-slate-400 mb-1">Per Person</div>
                                            <div className="text-lg font-bold text-slate-600">{formatPrice(finalPrice)}</div>
                                        </div>
                                    </div>

                                    <div className="space-y-6">
                                        <div>
                                            <label className="text-xs font-bold text-slate-400 uppercase mb-3 block">Travelers</label>
                                            <div className="flex items-center justify-between bg-slate-50 p-2 rounded-2xl border border-slate-200">
                                                <button onClick={() => setTravelers(Math.max(1, travelers - 1))} className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-slate-600 hover:text-teal-600 font-bold text-lg">-</button>
                                                <span className="font-bold text-lg text-slate-900">{travelers}</span>
                                                <button onClick={() => setTravelers(travelers + 1)} className="w-10 h-10 rounded-xl bg-white shadow-sm flex items-center justify-center text-slate-600 hover:text-teal-600 font-bold text-lg">+</button>
                                            </div>
                                        </div>

                                        <div>
                                            <label className="text-xs font-bold text-slate-400 uppercase mb-3 block">Room Type</label>
                                            <div className="grid grid-cols-3 gap-2">
                                                {['Standard', 'Deluxe', 'Premium'].map(type => (
                                                    <button key={type} onClick={() => setRoomType(type)} className={`py-3 rounded-xl text-xs font-bold transition-all ${roomType === type ? 'bg-slate-900 text-white shadow-lg' : 'bg-white border border-slate-200 text-slate-500 hover:bg-slate-50'}`}>{type}</button>
                                                ))}
                                            </div>
                                        </div>

                                        <button onClick={() => setShowBookingModal(true)} className="w-full bg-teal-600 text-white py-4 rounded-2xl font-bold text-lg hover:bg-teal-700 transition-all shadow-lg shadow-teal-500/30 active:scale-95">Request Booking</button>
                                        <div className="text-center text-xs text-slate-400 font-medium"><i className="fas fa-lock mr-1"></i> No payment required today</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        };
        
        // --- BOOKING MODAL (ENHANCED) ---
        const BookingModal = ({ onClose, addToast }) => {
            const handleSubmit = (e) => {
                e.preventDefault();
                addToast("Booking request sent! Our calm experts will call you soon.", "success");
                onClose();
            };

             return (
                 <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-fade-in">
                    <div className="bg-white rounded-[2.5rem] w-full max-w-md p-8 relative shadow-2xl animate-pop-in">
                        <button onClick={onClose} className="absolute top-6 right-6 text-slate-400 hover:text-slate-600 transition-colors"><i className="fas fa-times text-xl"></i></button>
                        <h2 className="text-2xl font-bold font-display text-slate-900 mb-2">Let's plan this!</h2>
                        <p className="text-slate-500 text-sm mb-6">Fill in your details. We'll handle the rest calmly.</p>
                        
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="text-xs font-bold text-slate-500 uppercase block mb-1">Full Name</label>
                                <input type="text" required className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-teal-500" placeholder="e.g. Rahul Sharma" />
                            </div>
                             <div>
                                <label className="text-xs font-bold text-slate-500 uppercase block mb-1">Phone Number</label>
                                <input type="tel" required className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-teal-500" placeholder="+91 98765 43210" />
                            </div>
                             <div>
                                <label className="text-xs font-bold text-slate-500 uppercase block mb-1">Travel Date (Tentative)</label>
                                <input type="date" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-teal-500" />
                            </div>
                            <button type="submit" className="w-full bg-teal-600 text-white py-4 rounded-2xl font-bold text-lg hover:bg-teal-700 transition-all shadow-lg mt-4">Confirm Request</button>
                        </form>
                    </div>
                 </div>
             );
        };

        
export default LandingPage;
