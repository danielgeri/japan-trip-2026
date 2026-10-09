// Master Day-by-Day Data
const itineraryData = [
  {
    day: 1,
    date: "Friday, Oct 16, 2026",
    location: "SFO Departure",
    morning: "All 5 meet at SFO International Terminal at 7:30 AM (3 hours prior to departure). Kumi & James arrive from Hotel 1550.",
    transit: "ANA Flight NH 7011 / UA 875 departs SFO at 10:35 AM (Boeing 777-200, 11h 20m flight time).",
    afternoon: "In-Flight transpacific crossing. Maria wears compression socks and takes 2-hour walking breaks. Kayden enjoys offline iPad shows and surprise wrapped toys.",
    evening: "Crossing international date line. Overnight in-flight.",
    dining: {
      lunch: "Airline meal service (~2 hours after takeoff).",
      dinner: "Pre-landing breakfast meal service (~2 hours before Tokyo arrival)."
    },
    pregnancyTip: "Stay well-hydrated; request extra bottled water from flight attendants. Use the aisle seat to stretch legs."
  },
  {
    day: 2,
    date: "Saturday, Oct 17, 2026",
    location: "Tokyo ➔ Sapporo",
    morning: "1:55 PM: Touchdown at Tokyo Haneda Airport (Terminal 3). Clear Immigration & Customs with Visit Japan Web QR codes.",
    transit: "Board free airport terminal shuttle bus from T3 to Terminal 1. Drop bags at JAL Domestic Bag Drop.",
    afternoon: "5:30 PM: Flight JAL 525 to Sapporo New Chitose Airport (CTS). Assigned Seats: Row 36 (36E-K). Lands at 7:05 PM.",
    evening: "Take elevator to CTS basement (B1F) and board JR Rapid Airport Express (37 min) directly to Sapporo Station. Take elevator straight into JR Tower Hotel Nikko Sapporo lobby!",
    dining: {
      lunch: "Snacks at Haneda Terminal 1 domestic departure lounge.",
      dinner: "Kasyunan (花旬庵) at Stellar Place 6F (Casual hot soba & tempura) OR Matsuo Genghis Khan (Skillet BBQ lamb)."
    },
    pregnancyTip: "Pick up the free pink 'Maternity Mark' badge at Haneda station ticket booth upon arrival!"
  },
  {
    day: 3,
    date: "Sunday, Oct 18, 2026",
    location: "Sapporo City",
    morning: "9:30 AM: Shiroi Koibito Park (Fairytale European-style chocolate factory village, singing mechanical clock tower, completely flat and stroller-friendly).",
    afternoon: "1:30 PM – 3:30 PM: Flexible Stroller-Nap & Cafe Recharge. Walk along the flat indoor Chi-Ka-Ho Promenade or relax at Atelier Morihiko (artisan Hokkaido tea & sweets) while Kayden sleeps.",
    evening: "4:00 PM: Odori Park autumn tree stroll & take high-speed elevator up Sapporo TV Tower for 360° sunset/night views.",
    dining: {
      lunch: "Cafe BUTLERS WHARF (Inside park omurice) OR Soup Curry GARAKU (Tender braised chicken soup curry).",
      dinner: "Ebisoba Ichigen Main Store (Open Sundays! Rich shrimp miso ramen) OR Sapporo Kani Shogun (Private tatami room steamed king crab hotpot)."
    },
    transit: "15-minute flat taxi from JR Tower hotel lobby to Shiroi Koibito Park (~￥2,500). Stroller fits in trunk."
  },
  {
    day: 4,
    date: "Monday, Oct 19, 2026",
    location: "Otaru Day Trip ➔ Sapporo",
    morning: "9:45 AM: JR Rapid Airport train to Minami-Otaru (32 mins). Visit Otaru Music Box Museum (thousands of gentle twinkling music boxes toddlers love) & flat stone canal walk.",
    afternoon: "1:30 PM – 3:30 PM: LeTAO Main Store 2F tea salon for world-famous Double Fromage cheesecake & hot rooibos tea while Kayden stroller-naps along Sakaimachi Street. Return to Sapporo by train.",
    evening: "5:30 PM: Sapporo Beer Museum (Historic red-brick brewery) & Akachan Honpo baby store at Ario Mall next door.",
    dining: {
      lunch: "Wakadori Jidai Naruto Main Store (Legendary golden deep-fried half chicken) OR Otaru Masazushi Zenan (Canal-view cooked seafood & sushi).",
      dinner: "Kessel Hall Sapporo Beer Garden (Atmospheric Bavarian beer hall BBQ) OR Garden Grill (Quiet Wagyu steakhouse)."
    },
    transit: "JR Hakodate Line Rapid train between Sapporo and Otaru Station. All stations equipped with elevators."
  },
  {
    day: 5,
    date: "Tuesday, Oct 20, 2026",
    location: "Sapporo Foliage & Shopping",
    morning: "🚨 8:30 AM: Hand large luggage to hotel front desk to forward via Yamato Takkyubin to Kyoto Airbnb! 9:30 AM: Nakajima Park (Golden ginkgos, duck pond, blue Hoheikan mansion).",
    afternoon: "1:30 PM – 3:30 PM: Stroller-nap in the park or sit-down at Rokkatei Sapporo Honten Cafe for fresh Marusei butter sandwiches and hot barley tea.",
    evening: "4:00 PM: Tanukikoji covered shopping arcade & Daimaru Sapporo depachika basement food hall for gift boxes.",
    dining: {
      lunch: "Soup Curry Suage+ (Charcoal-grilled chicken soup curry) OR Unagi Nakajima (Hitsumabushi eel at Hotel Mystays).",
      dinner: "Nemuro Hanamaru Sushi (Pull paper queue ticket at 4:15 PM on Stellar Place 6F!) OR Hyosetsu no Mon Sapporo (Historic crab feast in Susukino, Phone: 011-521-3046)."
    },
    pregnancyTip: "Remember to pack a 2-day carry-on bag today since forwarded luggage arrives in Kyoto on Thursday, Oct 22."
  },
  {
    day: 6,
    date: "Wednesday, Oct 21, 2026",
    location: "Sapporo ➔ Kyoto Arrival",
    morning: "10:30 AM: Relaxed checkout from JR Tower Hotel Nikko. JR train to New Chitose Airport. Lunch at CTS Ramen Dojo.",
    afternoon: "3:10 PM: JAL Flight JL 2008 CTS ➔ Osaka Itami (ITM), lands 5:05 PM. Walk to Airport Limousine Bus Stop #15 (55 min direct coach to Kyoto Station).",
    evening: "6:15 PM: Bus drops off at Kyoto Station Hachijo Exit (South Side). Stroll 4 minutes flat (350m) straight down Muromachi-dori into KotoStay 京粋庵 Airbnb (Conf: HMRQJQQTC3).",
    dining: {
      lunch: "Ebisoba Ichigen CTS Airport (Domestic 3F Ramen Dojo) OR Matsujin Genghis Khan.",
      dinner: "Katsukura Kyoto Station (Porta B1 crispy hirekatsu tonkatsu) OR Shozankaku (JR Kyoto Isetan 11F Obanzai with Kyoto Tower city views)."
    },
    transit: "Direct limousine bus loads luggage underneath—zero train transfers or subway stairs with bags!"
  },
  {
    day: 7,
    date: "Thursday, Oct 22, 2026",
    location: "Southern Higashiyama & Gion",
    morning: "8:30 AM: Taxi directly to Kiyomizu-dera upper taxi stand (skips the brutal uphill climb!). Marvel at wooden stage and walk downhill through Sannenzaka & Ninenzaka.",
    afternoon: "1:30 PM – 3:30 PM: Flexible Stroller-Nap in flat Maruyama Park. Maria relaxes at Kasagiya (100-year-old teahouse) for soft botamochi sweets & warm hojicha tea.",
    evening: "4:30 PM: Gion Shirakawa canal stroll along weeping willows and lantern-lit bridges. Forwarded luggage from Sapporo arrives at KotoStay today!",
    dining: {
      lunch: "Hisago (Famous Oyako-don chicken & egg bowl, arrive at 11:15 AM opening!) OR Junsei Okabeya (Simmered tofu hotpot in courtyard garden).",
      dinner: "Gion Tanto (Okonomiyaki by Tatsumi Bridge) OR Gion Karyo (Multi-course seasonal Kaiseki in restored machiya)."
    },
    pregnancyTip: "Always take a taxi up to Kiyomizu-dera's upper gate so the family only walks downhill through the historic stone lanes."
  },
  {
    day: 8,
    date: "Friday, Oct 23, 2026",
    location: "Arashiyama & Torii Gates",
    morning: "9:00 AM: JR train to Saga-Arashiyama. Ride the Sagano Romantic Train (Torokko open-air train through river gorge) & gentle flat walk through Arashiyama Bamboo Grove.",
    afternoon: "1:30 PM – 3:30 PM: Wheel Kayden along smooth paved riverbanks by Togetsukyo Bridge. Sit down at CHAVATY Kyoto Arashiyama for riverside hojicha lattes & scones.",
    evening: "4:30 PM: Fushimi Inari Taisha (JR train 5 mins). Walk the flat Senbon Torii lower loop (15 mins) illuminated at dusk. Do NOT hike the mountain stairs!",
    dining: {
      lunch: "Yoshiya Arashiyama (Riverside Kyoto sets) OR Shigetsu (Tenryu-ji Michelin vegetarian Shojin Ryori).",
      dinner: "Nishiki Warai (Kyoto Station The Cube 11F okonomiyaki) OR Moritaya (JR Kyoto Isetan 11F Wagyu sukiyaki with Kyoto Tower window views)."
    },
    transit: "JR San-in Line from Kyoto Station to Saga-Arashiyama (17 mins, fully elevator accessible)."
  },
  {
    day: 9,
    date: "Saturday, Oct 24, 2026",
    location: "Kyoto ➔ Kamakura Arrival",
    morning: "10:00 AM: Stroll 4 mins to Kyoto Station. Pick up Ekiben bento boxes. 11:05 AM: Board Shinkansen Nozomi #116 to Shin-Yokohama (arrive 1:15 PM).",
    afternoon: "JR Yokohama Line to Yokohama Station (12 min) ➔ JR Yokosuka Line to Kamakura Station (25 min). Exit West Exit (Onari Exit) ➔ 60-second flat walk into KAMAKURA HOTEL lobby!",
    evening: "4:30 PM: Stroll Onarimachi boutiques & Komachi-dori pedestrian street. Pick up Toshimaya Hato Sable dove cookies.",
    dining: {
      lunch: "Gourmet Ekiben bento boxes on the bullet train.",
      dinner: "Kamakura Akimoto (Shirasu tempura bowls near station) OR Kamakura Matsubara-an (70-year-old seaside pine villa, duck soba & tempura)."
    },
    transit: "Show both reservations (Oct 24-25 & Oct 25-27) at KAMAKURA HOTEL check-in to link the rooms for all 3 nights."
  },
  {
    day: 10,
    date: "Sunday, Oct 25, 2026",
    location: "Great Buddha & Coastal Enoden",
    morning: "9:30 AM: Ride retro green Enoden train from Kamakura Station to Hase Station (6 mins). Visit Kōtoku-in (The Great Buddha - flat gravel courtyard, stroller-friendly) & Hase-dera lower garden.",
    afternoon: "1:30 PM – 3:30 PM: Stroll along flat paved Yuigahama Beach promenade while ocean breezes rock Kayden to sleep. Maria relaxes at Amalfi Cafe on an oceanfront deck.",
    evening: "4:30 PM: Scenic sunset train ride on the retro green Enoden coastal train toward Shichirigahama watching Mount Fuji across Sagami Bay.",
    dining: {
      lunch: "Kaikoan Cafe (Inside Hase-dera overlooking bay) OR Woof Curry (Rich slow-braised beef & egg curry in Hase).",
      dinner: "Pacific DRIVE-IN (Beachfront Hawaiian-Japanese plates) OR Bills Shichirigahama (Fluffy ricotta hotcakes & Wagyu burger)."
    },
    pregnancyTip: "Skip Enoshima Island's steep cliff stairs! Enjoy the 100% seated oceanfront views from the Enoden train instead."
  },
  {
    day: 11,
    date: "Monday, Oct 26, 2026",
    location: "Kamakura Shrines & Bamboo",
    morning: "9:30 AM: Walk down flat cherry-lined Dankazura promenade to Tsurugaoka Hachimangu Shrine. Take a 7-min taxi to Hokokuji Temple (Tranquil grove of 2,000 bamboo stalks).",
    afternoon: "1:30 PM – 3:30 PM: Relax in the open-air wooden tea pavilion inside Hokokuji or in the tranquil green tea lounge at KAMAKURA HOTEL while Kayden naps.",
    evening: "4:30 PM: Final gift shopping along Komachi-dori (Kamakura Beniya Kurumicco walnut caramel boxes & Kamakura Mameya beans).",
    dining: {
      lunch: "Dankazura Kosuzu (Handmade buckwheat soba & famous warabi mochi) OR Hachinoki (Michelin Bib Gourmand Kaiseki in Kita-Kamakura).",
      dinner: "Ramen HANABI (Yuigahama dinner ramen) OR IL BIRRAIO (Local Shonan handmade pasta trattoria)."
    },
    transit: "KAMAKURA HOTEL is right in the heart of Onarimachi, 60 seconds from the station for easy packing."
  },
  {
    day: 12,
    date: "Tuesday, Oct 27, 2026",
    location: "Kamakura ➔ Haneda ➔ Fly Home",
    morning: "10:00 AM: Relaxed morning in Kamakura. Check out of KAMAKURA HOTEL by 11:00 AM (leave bags at front desk). Morning brunch at Cafe Vivement Dimanche (waffles & coffee).",
    afternoon: "1:30 PM: Retrieve bags. Walk 60 seconds to Kamakura Station. JR train to Yokohama Station (25 min) ➔ YCAT Keikyu Limousine Bus to Haneda Airport Terminal 3 (30 min). Arrive 3:30 PM.",
    evening: "6:25 PM: ANA Flight NH 7010 departs Haneda to SFO (lands SFO at 12:15 PM same day!). Kumi & James connect to Southwest WN 2791 (SFO 3:50 PM ➔ LAX 5:15 PM).",
    dining: {
      lunch: "Cafe Vivement Dimanche (Fresh butter waffles) OR Kamakura Kua'Aina burgers.",
      dinner: "Airport Terminal 3 Duty-Free dining & in-flight international meal service."
    },
    pregnancyTip: "Remember to put on Maria's compression socks before boarding the return flight!"
  }
];

// Initialize DOM
document.addEventListener("DOMContentLoaded", () => {
  renderItinerary("all");
  setupTabs();
  setupDayFilters();
  setupChecklistPersistence();
});

// Render Itinerary Cards
function renderItinerary(filterDay) {
  const container = document.getElementById("itinerary-container");
  container.innerHTML = "";

  const filtered = filterDay === "all" 
    ? itineraryData 
    : itineraryData.filter(d => d.day === parseInt(filterDay, 10));

  filtered.forEach(d => {
    const card = document.createElement("div");
    card.className = "day-card";
    card.innerHTML = `
      <div class="day-card-header">
        <div class="day-title-group">
          <h3>Day ${d.day}</h3>
          <span class="day-date-sub">${d.date}</span>
        </div>
        <span class="location-tag">${d.location}</span>
      </div>
      <div class="day-card-body">
        <div class="time-block">
          <span class="block-label">☀️ Morning Anchor</span>
          <div class="block-content">
            <p>${d.morning}</p>
          </div>
        </div>

        <div class="time-block">
          <span class="block-label">🍼 Afternoon Stroller-Nap & Cafe</span>
          <div class="block-content">
            <p>${d.afternoon}</p>
          </div>
        </div>

        <div class="time-block">
          <span class="block-label">🌙 Evening Block</span>
          <div class="block-content">
            <p>${d.evening}</p>
          </div>
        </div>

        <div class="dining-options">
          <div class="dining-title">🍽️ Curated Dining Options</div>
          <div class="dining-item"><strong>Lunch:</strong> ${d.dining.lunch}</div>
          <div class="dining-item"><strong>Dinner:</strong> ${d.dining.dinner}</div>
        </div>

        ${d.transit ? `
        <div class="transit-directive">
          <strong>🚆 Transit Route:</strong> ${d.transit}
        </div>` : ""}

        ${d.pregnancyTip ? `
        <div class="pregnancy-alert">
          <strong>🤰 Family Note:</strong> ${d.pregnancyTip}
        </div>` : ""}
      </div>
    `;
    container.appendChild(card);
  });
}

// Tab Navigation
function setupTabs() {
  const tabs = document.querySelectorAll(".nav-tab");
  const panes = document.querySelectorAll(".tab-pane");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      panes.forEach(p => p.classList.remove("active"));

      tab.classList.add("active");
      const target = document.getElementById("tab-" + tab.dataset.tab);
      if (target) target.classList.add("active");

      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });
}

// Day Filter Navigation
function setupDayFilters() {
  const pills = document.querySelectorAll(".day-pill");
  pills.forEach(pill => {
    pill.addEventListener("click", () => {
      pills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      renderItinerary(pill.dataset.day);
    });
  });
}

// Interactive Checklist Persistence (localStorage)
function setupChecklistPersistence() {
  const checkboxes = document.querySelectorAll('.interactive-checklist input[type="checkbox"]');
  
  // Load saved state
  checkboxes.forEach(cb => {
    const saved = localStorage.getItem("japan_chk_" + cb.id);
    if (saved === "true") {
      cb.checked = true;
    }
    
    cb.addEventListener("change", () => {
      localStorage.setItem("japan_chk_" + cb.id, cb.checked);
    });
  });
}
