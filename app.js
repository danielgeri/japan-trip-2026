// Master Day-by-Day Data (Updated with Oct 17–27 Weather & Schedule Optimizations)
const itineraryData = [
  {
    day: 1,
    date: "Friday, Oct 16, 2026",
    location: "SFO Departure",
    weather: "✈️ In-Flight • Cabin 21°C (70°F)",
    morning: "All 5 travelers meet at SFO International Terminal (Aisle 8, ANA / United Check-In) at 7:30 AM (3 hours prior to departure). Kumi & James arrive via free shuttle from Hotel 1550 (following Thu 10/15 Southwest Flight WN 384 LAX ➔ SFO).",
    transit: "ANA Flight NH 7011 / UA 875 departs SFO at 10:35 AM (Boeing 777-200, 11h 20m flight time).",
    afternoon: "Transpacific crossing. Maria wears graduated compression socks and takes short aisle walks every 2 hours. Kayden enjoys offline iPad shows, surprise wrapped novelty toys, and horizontal lap-bridge sleep.",
    evening: "Crossing the International Date Line. Overnight in-flight rest using the 5-adult tag-team shift rotation.",
    dining: {
      lunch: "Main cabin meal service (~2 hours after takeoff) + pre-packed toddler snack spinner.",
      dinner: "Pre-landing breakfast service (~2 hours prior to Tokyo Haneda arrival)."
    },
    pregnancyTip: "Prioritize an aisle seat for Maria, use the inflatable lumbar pillow, and keep a Dum Dums lollipop or fruit pouch ready for Kayden during the final 35-minute descent."
  },
  {
    day: 2,
    date: "Saturday, Oct 17, 2026",
    location: "Tokyo ➔ Sapporo",
    weather: "🌧️ 17° / 5°C (63° / 41°F) • Evening Showers",
    morning: "1:55 PM: Touchdown at Tokyo Haneda Airport (Terminal 3). Collect gate-checked stroller on the jetbridge and clear Immigration & Customs using Visit Japan Web QR codes.",
    transit: "Re-check bags at the JAL Domestic Transfer Counter in Terminal 3, then board the free Terminal Shuttle Bus to Terminal 1.",
    afternoon: "5:30 PM: Japan Airlines Flight JL 525 to Sapporo New Chitose Airport (CTS). Assigned Seats: Row 36 (36K, 36J, 36H, 36G, 36E). Lands at 7:05 PM.",
    evening: "Take the indoor elevator to CTS Basement (B1F) and board the JR Rapid Airport Express (37 mins) directly to Sapporo Station. Take the indoor station elevator straight into JR Tower Hotel Nikko Sapporo!",
    dining: {
      lunch: "Light meal & snacks at Haneda Terminal 1 domestic departure lounge.",
      dinner: "Kasyunan (花旬庵) at Stellar Place 6F (Hot buckwheat soba & tempura directly inside the station building) OR Matsuo Genghis Khan."
    },
    weatherStrategy: "Passing evening showers & brisk 41°F air in Sapporo tonight—zero impact on your group because the entire transfer from CTS Airport to JR Sapporo Station, your hotel lobby, and Stellar Place 6F dinner is 100% enclosed indoors.",
    pregnancyTip: "Pick up the free pink 'Maternity Mark' badge at the Haneda or Sapporo JR ticket counter, and keep power banks in your under-seat personal bag (never in overhead bins on JAL)."
  },
  {
    day: 3,
    date: "Sunday, Oct 18, 2026",
    location: "Sapporo City",
    weather: "⛅ 20° / 13°C (68° / 55°F) • Sunny AM / Late PM Rain",
    morning: "9:30 AM – 12:30 PM (Clear Sunny Window): Visit Shiroi Koibito Park (European-style chocolate factory village & mechanical clock tower; flat & stroller-friendly) OR swap in Maruyama Zoo / Hitsujigaoka Sheep Hill while skies are bright and 68°F.",
    afternoon: "12:45 PM – 3:00 PM (Weather-Smart Swap): Stroll Odori Park autumn foliage & ride the elevator up Sapporo TV Tower in the sunny early afternoon BEFORE late-afternoon rain showers arrive. At 3:00 PM, head underground into the climate-controlled Chi-Ka-Ho walkway & Atelier Morihiko cafe for Kayden's stroller nap.",
    evening: "5:30 PM: Private tatami room dinner in Susukino (short 5-minute taxi door-to-door so you stay dry during evening showers).",
    dining: {
      lunch: "Cafe BUTLERS WHARF (Inside Shiroi Koibito Park) OR Soup Curry GARAKU (Braised chicken soup curry near Odori).",
      dinner: "Sapporo Kani Shogun (札幌かに将軍 本店 — Private room steamed king crab hotpot & crab porridge) OR Ebisoba Ichigen Main Store (Rich shrimp miso ramen)."
    },
    weatherStrategy: "Schedule Tweaked for Sunday Weather: Sunday starts sunny and mild (20°C / 68°F) before scattered rain arrives late afternoon. We shifted Odori Park & TV Tower up to midday (12:45–2:30 PM) so all outdoor sightseeing happens in dry sunshine, keeping you underground/indoors after 3:00 PM!",
    transit: "15-minute taxi from JR Tower Hotel lobby to Shiroi Koibito Park or Maruyama Zoo (~¥2,500). Remember: 4 adults + 1 toddler requires either a Jumbo/Van taxi (Uber XL/GO) or 2 standard cabs.",
    additionalOptions: "🦁 <strong>Option A — Maruyama Zoo (15 min taxi):</strong> Flat woodland paths with an underwater glass tunnel where polar bears & seals swim overhead, plus red pandas & elephants.<br>🐑 <strong>Option B — Hitsujigaoka Sheep Hill (25 min taxi):</strong> Open pasture where woolly sheep graze overlooking Sapporo Dome, Dr. Clark statue, and fresh Hokkaido milk soft-serve."
  },
  {
    day: 4,
    date: "Monday, Oct 19, 2026",
    location: "Otaru Day Trip ➔ Sapporo",
    weather: "🌥️ 18° / 8°C (64° / 46°F) • Dry & Crisp",
    morning: "9:45 AM: Board JR Rapid Airport train from Sapporo Station to Minami-Otaru (32 mins along coastal cliffs). Visit the Otaru Music Box Museum (thousands of twinkling chimes toddlers adore) and stroll the flat stone Otaru Canal promenade.",
    afternoon: "1:30 PM – 3:30 PM: Relax at LeTAO Main Store 2F Tea Salon for Double Fromage cheesecake and hot non-caffeinated rooibos tea while Kayden stroller-naps along pedestrian-friendly Sakaimachi Street. Return to Sapporo by train.",
    evening: "5:30 PM: Visit Sapporo Beer Museum (historic red-brick heritage brewery) & Akachan Honpo baby megastore next door at Ario Mall to restock Moony diapers or snacks.",
    dining: {
      lunch: "Wakadori Jidai Naruto Main Store (Crispy golden half-fried chicken & rice sets) OR Otaru Masazushi Zenan (Cooked crab, shrimp, tamago & sushi in private booths).",
      dinner: "Kessel Hall at Sapporo Beer Garden (Grand 1912 copper-kettle hall BBQ) OR Garden Grill (Quiet upscale Wagyu & roasted vegetables)."
    },
    weatherStrategy: "Monday is dry and comfortable (18°C / 64°F daytime)—an ideal weather window for your coastal day trip to Otaru Canal. Bring a windproof outer layer for the cooler sea breeze.",
    transit: "JR Hakodate Line Rapid train between Sapporo and Minami-Otaru / Otaru Station. All platforms have elevator access."
  },
  {
    day: 5,
    date: "Tuesday, Oct 20, 2026",
    location: "Sapporo Foliage & Shopping",
    weather: "☁️ 13° / 9°C (55° / 48°F) • Coolest Hokkaido Day",
    morning: "🚨 8:30 AM: Hand large suitcases to JR Tower Hotel front desk to forward via Yamato Takkyubin to your Kyoto Airbnb! 9:30 AM: Morning excursion to Hitsujigaoka Observation Hill (Sheep Hill) OR stroll Nakajima Park's golden ginkgo avenues and duck pond.",
    afternoon: "1:30 PM – 3:30 PM: Warm up indoors during the cooler afternoon at Rokkatei Sapporo Honten 2F Cafe (fresh Marusei butter sandwiches & hot barley tea) and browse Daimaru Sapporo's 4F baby lounge & B1F Depachika food hall.",
    evening: "4:15 PM: Pull a paper queue ticket at Nemuro Hanamaru Sushi (Stellar Place 6F), stroll the covered 7-block Tanukikoji Shopping Arcade, and return for dinner.",
    dining: {
      lunch: "Soup Curry Suage+ (Charcoal-grilled chicken & sweet Hokkaido vegetables in warm spice broth) OR Unagi Nakajima (Grilled eel over rice).",
      dinner: "Nemuro Hanamaru Sushi (JR Stellar Place 6F — Hokkaido's #1 conveyor-belt sushi) OR Hyosetsu no Mon Sapporo (Historic King Crab banquet in private suites, Phone: +81 11-521-3046)."
    },
    weatherStrategy: "Coolest Day Alert (13°C / 55°F): Tuesday brings a crisp northern temperature dip. Dress everyone in the full 3-layer system (Heattech + Fleece + Packable Down) and wrap Kayden in his fleece stroller blanket & beanie for the morning park/sheep hill visit, then spend the afternoon inside heated arcades and department stores.",
    pregnancyTip: "Keep your 2-day carry-on duffle bag with you tonight—your large forwarded suitcases will meet you in Kyoto on Thursday, Oct 22.",
    additionalOptions: "🐑 <strong>Hitsujigaoka Sheep Hill Morning Window (9:30 AM – 11:30 AM):</strong> If you didn't visit on Sunday, take a 25-min taxi right after dropping your luggage at 8:30 AM to see the sheep pastures before heading to Nakajima Park."
  },
  {
    day: 6,
    date: "Wednesday, Oct 21, 2026",
    location: "Sapporo ➔ Kyoto Arrival",
    weather: "🌤️ 15°C Sapporo ➔ 23°C (73°F) Kyoto",
    morning: "10:30 AM: Relaxed checkout from JR Tower Hotel Nikko. Take the JR Rapid Airport train (37 mins) to New Chitose Airport (CTS). Enjoy ramen & buy ROYCE' / LeTAO gifts with insulated cold packs at CTS Domestic Terminal.",
    afternoon: "3:10 PM: Japan Airlines Flight JL 2008 departs CTS for Osaka Itami (ITM), landing at 5:05 PM. Walk straight outside baggage claim to Airport Limousine Bus Stop #15 (55-minute direct highway coach to Kyoto Station).",
    evening: "6:15 PM: Limousine Bus drops off at Kyoto Station Hachijo Exit (South Side). Walk 4 minutes on flat pavement (350m) down Muromachi-dori into KotoStay 京粋庵 2BR Private Suite (Conf: HMRQJQQTC3).",
    dining: {
      lunch: "Hokkaido Ramen Dojo at CTS Airport Domestic 3F (Ebisoba Ichigen or Keyaki miso ramen).",
      dinner: "Katsukura Kyoto Station (The Cube 11F / Porta B1 — Tender pork tenderloin tonkatsu & barley rice) OR Shozankaku (JR Kyoto Isetan 11F)."
    },
    weatherStrategy: "Two-Climate Transition Day: Peel off your heavy Hokkaido layers before landing in Osaka/Kyoto—temperatures jump from 59°F in Sapporo to a pleasant 73°F in Kyoto!",
    transit: "The Itami Airport Limousine Bus stows your stroller and carry-on duffles underneath the coach—zero train transfers or station stairs!"
  },
  {
    day: 7,
    date: "Thursday, Oct 22, 2026",
    location: "Southern Higashiyama & Gion",
    weather: "☀️ 22° / 13°C (72° / 55°F) • Sunny + Jidai Matsuri",
    morning: "8:30 AM: Take a taxi directly to Kiyomizu-dera's upper taxi drop-off (skipping the steep uphill climb). Take in the wooden stage views and stroll gently downhill along Sannenzaka & Ninenzaka's stone lanes before crowds peak.",
    afternoon: "1:30 PM – 3:30 PM: Stroller-nap under the weeping cherry trees in flat Maruyama Park while Maria rests at Kasagiya (traditional 1914 teahouse) with warm hojicha tea & sweet red bean botamochi.",
    evening: "4:30 PM: Stroll the lantern-lit Gion Shirakawa Canal. Your forwarded suitcases from Sapporo arrive at KotoStay today!",
    dining: {
      lunch: "Hisago (Famous fluffy Oyako-don chicken & egg rice bowl; arrive at 11:15 AM opening) OR Junsei Okabeya (Simmered Yudofu tofu hotpot in a tranquil garden).",
      dinner: "Gion Tanto (Teppanyaki okonomiyaki & yakisoba beside Shirakawa Canal) OR Gion Karyo (Seasonal Kyoto Kaiseki with private room option)."
    },
    weatherStrategy: "☀️ Crisp, sunny 72°F autumn weather! 🎉 Special Festival Note (Jidai Matsuri): Oct 22 is Kyoto's famous 'Festival of the Ages'—2,000 performers in samurai & imperial attire march from Kyoto Imperial Palace (12:00 PM) to Heian Shrine (2:30 PM). Stay in the pedestrian Higashiyama/Maruyama Park zone until 3:00 PM to avoid downtown bus/taxi road closures (or walk 10 mins north from Maruyama Park to Heian Shrine at 2:00 PM to watch the samurai procession arrive!).",
    pregnancyTip: "Always take a taxi up to Kiyomizu-dera's upper gate so your walking route is 100% downhill."
  },
  {
    day: 8,
    date: "Friday, Oct 23, 2026",
    location: "Arashiyama & Fushimi Inari",
    weather: "☀️ 22° / 14°C (72° / 57°F) • Golden Autumn Sun",
    morning: "9:00 AM: Take the JR San-in Line from Kyoto Station to Saga-Arashiyama (17 mins). Ride the scenic Sagano Romantic Train (Torokko open-air vintage train through Hozugawa Gorge) and stroll the flat paved path through Arashiyama Bamboo Grove.",
    afternoon: "1:30 PM – 3:30 PM: Wheel Kayden along the level Katsura River promenade by Togetsukyo Bridge. Stop at CHAVATY Kyoto Arashiyama for roasted hojicha tea lattes & warm scones while Kayden naps.",
    evening: "4:30 PM: Take the JR train to Fushimi Inari Taisha (5 mins from Kyoto Station). Walk only the flat, paved lower Senbon Torii loop (15–20 mins) illuminated at dusk—skip the steep mountain stairs!",
    dining: {
      lunch: "Yoshiya Arashiyama (Spacious family dining by Togetsukyo Bridge) OR Shigetsu (Inside Tenryu-ji Zen Garden).",
      dinner: "Moritaya JR Kyoto Isetan 11F (Kuroge Wagyu sukiyaki overlooking Kyoto Tower; request well-done egg for Maria) OR Nishiki Warai (Kyoto Station 11F)."
    },
    weatherStrategy: "Sunny 72°F afternoon with a cool 57°F breeze in the Hozugawa river canyon—bring a light cardigan or windbreaker for the open-air Sagano Romantic Train.",
    transit: "JR San-in Line (Platform 32/33 at Kyoto Station) is level-entry with zero steps."
  },
  {
    day: 9,
    date: "Saturday, Oct 24, 2026",
    location: "Kyoto ➔ Kamakura Arrival",
    weather: "⛅ 21° / 15°C (70° / 59°F) • Mild & Pleasant",
    morning: "9:45 AM: Check out of KotoStay and walk 4 minutes flat to Kyoto Station. Pick up gourmet Ekiben bento boxes & snacks. 11:05 AM: Board Shinkansen Nozomi #116 to Shin-Yokohama (arrives 1:15 PM).",
    afternoon: "Transfer at Shin-Yokohama via station elevators to JR Yokohama Line (12 mins to Yokohama) ➔ JR Yokosuka Line (25 mins to Kamakura). Exit Kamakura Station West Exit (Onari Exit) and walk 60 seconds flat into KAMAKURA HOTEL!",
    evening: "4:30 PM: Relax in the hotel's complimentary green-tea lounge, then stroll quiet Onarimachi boutiques and Komachi-dori pedestrian street. Pick up iconic Toshimaya Hato Sablé dove shortbread cookies.",
    dining: {
      lunch: "Gourmet Kyoto Ekiben bento boxes aboard the Shinkansen bullet train.",
      dinner: "Kamakura Matsubara-an (70-year-old seaside wooden villa serving handmade duck soba & crispy tempura; Phone: +81 467-61-3838) OR Kamakura Akimoto (Station Square)."
    },
    transit: "At KAMAKURA HOTEL check-in, present both consecutive booking confirmations (Oct 24–25 & Oct 25–27, Conf: 1032548490) so the front desk links your rooms for all 3 nights."
  },
  {
    day: 10,
    date: "Sunday, Oct 25, 2026",
    location: "Great Buddha & Shonan Coast",
    weather: "🌤️ 21° / 15°C (70° / 59°F) • Breezy Coastal Sun",
    morning: "9:30 AM: Step across the square to ride the vintage green Enoden tram from Kamakura Station to Hase Station (6 mins). Visit Kōtoku-in (The Great Bronze Buddha—100% flat courtyard) and Hase-dera's lower koi ponds.",
    afternoon: "1:30 PM – 3:30 PM: Wheel the stroller along the smooth paved Yuigahama Beach boardwalk while ocean breezes rock Kayden to sleep. Maria relaxes on the oceanfront terrace at Amalfi Caffè.",
    evening: "4:30 PM: Ride the scenic coastal Enoden tram along Shichirigahama at golden hour, watching the sun set behind Mount Fuji across Sagami Bay.",
    dining: {
      lunch: "Kaikoan (Ocean-view temple cafe inside Hase-dera serving vegetarian curry & noodles) OR Woof Curry (Slow-simmered beef curry in Hase).",
      dinner: "Bills Shichirigahama (Oceanfront terrace serving ricotta hotcakes, Wagyu burgers & pasta) OR Pacific DRIVE-IN (Hawaiian-Japanese coastal plates)."
    },
    pregnancyTip: "Skip Enoshima Island's steep cliff staircases—enjoy the panoramic ocean views effortlessly from the seated Enoden coastal train and flat beach boardwalks."
  },
  {
    day: 11,
    date: "Monday, Oct 26, 2026",
    location: "Kamakura Shrines & Bamboo",
    weather: "⛅ 20° / 15°C (68° / 59°F) • Partly Cloudy",
    morning: "9:30 AM: Stroll the raised cherry-tree Dankazura pedestrian path to Tsurugaoka Hachimangu Shrine (wide grounds, red bridges & dove ponds). Take a 7-minute taxi to Hokokuji Temple to walk its tranquil grove of 2,000 Moso bamboo stalks.",
    afternoon: "1:30 PM – 3:30 PM: Sip ceremonial matcha in Hokokuji's open-air wooden teahouse overlooking the bamboo forest, then return to Onarimachi for Kayden's afternoon nap.",
    evening: "4:30 PM: Final souvenir stroll along Komachi-dori & Onarimachi. Pack main suitcases so Tuesday morning is completely unhurried.",
    dining: {
      lunch: "Kamakura Beniya Kurumicco (Buy boxes before 10:30 AM!) + lunch at Dankazura Kosuzu (Handmade soba & warabi mochi) OR Hachinoki (Kita-Kamakura Kaiseki).",
      dinner: "IL BIRRAIO Kamakura (Warm neighborhood Italian trattoria with fresh handmade Shonan pasta—a great toddler & family favorite) OR Ramen HANABI."
    },
    weatherStrategy: "Mild 68°F coastal autumn day with a small chance of a brief passing sprinkle—keep a compact umbrella in the stroller basket."
  },
  {
    day: 12,
    date: "Tuesday, Oct 27, 2026",
    location: "Kamakura ➔ Haneda ➔ SFO",
    weather: "🌤️ 21°C (70°F) Tokyo ➔ 66°F SFO",
    morning: "9:30 AM: Unhurried final morning in Kamakura. Enjoy fresh-baked waffles at Cafe Vivement Dimanche (2 mins from hotel). Check out of KAMAKURA HOTEL at 11:00 AM and store bags at the front desk for a final stroll.",
    afternoon: "1:30 PM: Retrieve bags and walk 60 seconds into Kamakura Station. Take JR Yokosuka Line to Yokohama Station (25 mins) ➔ transfer via elevator to YCAT Keikyu Airport Limousine Bus direct to Haneda Terminal 3 (30 mins). Arrive at 3:30 PM.",
    evening: "6:25 PM: ANA Flight NH 7010 / UA 876 departs Haneda for SFO (lands at 12:15 PM same calendar day, Tue Oct 27!). Kumi & James connect to Southwest Flight WN 2791 (SFO 3:50 PM ➔ LAX 5:15 PM).",
    dining: {
      lunch: "Cafe Vivement Dimanche (Famous Kamakura waffles) OR Kua'Aina Kamakura (Avocado burgers & fries).",
      dinner: "Haneda Terminal 3 Edo Koji dining promenade + International in-flight dinner service."
    },
    pregnancyTip: "Put Maria's compression socks on before leaving Kamakura, and ensure all power banks are in your under-seat personal bags (not checked bags or overhead bins) before checking suitcases at Haneda."
  }
];

// Initialize DOM
document.addEventListener("DOMContentLoaded", () => {
  renderItinerary("all");
  setupTabs();
  setupDayFilters();
  setupChecklistPersistence();
  setupPWA();
});

// Render Itinerary Cards
function renderItinerary(filterDay) {
  const container = document.getElementById("itinerary-container");
  if (!container) return;
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
          <div class="day-title-row">
            <span class="day-badge-num">Day ${d.day}</span>
            <h3>${d.date}</h3>
          </div>
        </div>
        <div class="day-header-badges">
          ${d.weather ? `<span class="weather-Inline-pill">${d.weather}</span>` : ""}
          <span class="location-tag">${d.location}</span>
        </div>
      </div>
      <div class="day-card-body">
        <div class="schedule-timeline">
          <div class="time-block morning-block">
            <span class="block-label">Morning Block</span>
            <div class="block-content">
              <p>${d.morning}</p>
            </div>
          </div>

          <div class="time-block afternoon-block">
            <span class="block-label">Midday & Stroller-Nap Window</span>
            <div class="block-content">
              <p>${d.afternoon}</p>
            </div>
          </div>

          <div class="time-block evening-block">
            <span class="block-label">Evening Block</span>
            <div class="block-content">
              <p>${d.evening}</p>
            </div>
          </div>
        </div>

        <div class="dining-options">
          <div class="dining-title">Curated Family Dining</div>
          <div class="dining-item"><strong>Lunch:</strong> ${d.dining.lunch}</div>
          <div class="dining-item"><strong>Dinner:</strong> ${d.dining.dinner}</div>
        </div>

        ${d.weatherStrategy ? `
        <div class="weather-directive">
          <strong>🌤️ Weather & Timing Strategy:</strong> ${d.weatherStrategy}
        </div>` : ""}

        ${d.transit ? `
        <div class="transit-directive">
          <strong>🚆 Transit & Logistics:</strong> ${d.transit}
        </div>` : ""}

        ${d.additionalOptions ? `
        <div class="options-directive">
          <strong class="options-heading">Flexible Excursion Options</strong>
          <p>${d.additionalOptions}</p>
        </div>` : ""}

        ${d.pregnancyTip ? `
        <div class="pregnancy-alert">
          <strong>🤰 Maria & Kayden Care Note:</strong> ${d.pregnancyTip}
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

// Interactive Checklist Persistence (localStorage) + Progress Bar
function setupChecklistPersistence() {
  const checkboxes = document.querySelectorAll('.interactive-checklist input[type="checkbox"]');
  const progressFill = document.getElementById("checklist-progress-fill");
  const progressText = document.getElementById("checklist-progress-text");

  function updateProgress() {
    if (!progressFill || !progressText || checkboxes.length === 0) return;
    let checkedCount = 0;
    checkboxes.forEach(cb => {
      if (cb.checked) checkedCount++;
    });
    const pct = Math.round((checkedCount / checkboxes.length) * 100);
    progressFill.style.width = pct + "%";
    progressText.textContent = `${checkedCount} of ${checkboxes.length} completed (${pct}%)`;
  }

  // Load saved state
  checkboxes.forEach(cb => {
    const saved = localStorage.getItem("japan_chk_" + cb.id);
    if (saved === "true") {
      cb.checked = true;
    }
    
    cb.addEventListener("change", () => {
      localStorage.setItem("japan_chk_" + cb.id, cb.checked);
      updateProgress();
    });
  });

  updateProgress();
}

// ==========================================
// Progressive Web App (PWA) & Offline Engine
// ==========================================
let swRegistration = null;
let isRefreshing = false;
let deferredInstallPrompt = null;

function setupPWA() {
  if (!('serviceWorker' in navigator)) {
    console.log('[PWA] Service Workers not supported in this browser.');
    return;
  }

  // 1. Register Service Worker with updateViaCache: 'none' to bypass HTTP cache for sw.js
  navigator.serviceWorker
    .register('./sw.js', { updateViaCache: 'none' })
    .then((registration) => {
      swRegistration = registration;
      console.log('[PWA] Service Worker registered with scope:', registration.scope);

      // Proactively check for updates immediately upon registration
      registration.update().catch(() => {});

      // If a waiting worker already exists when the user opens the page, prompt immediately
      if (registration.waiting && navigator.serviceWorker.controller) {
        showUpdateToast(registration);
      }

      // Listen for when a new service worker is installing
      registration.addEventListener('updatefound', () => {
        const installingWorker = registration.installing;
        if (!installingWorker) return;

        installingWorker.addEventListener('statechange', () => {
          if (installingWorker.state === 'installed') {
            if (navigator.serviceWorker.controller) {
              // Update available!
              console.log('[PWA] New version ready for activation.');
              showUpdateToast(registration);
            } else {
              // Initial offline caching complete
              console.log('[PWA] App shell cached for offline travel use.');
            }
          }
        });
      });
    })
    .catch((error) => {
      console.warn('[PWA] Service Worker registration failed:', error);
    });

  // 2. Seamlessly reload when the active service worker controller changes
  navigator.serviceWorker.addEventListener('controllerchange', () => {
    if (isRefreshing) return;
    isRefreshing = true;
    console.log('[PWA] Controller changed, reloading to display latest changes.');
    window.location.reload();
  });

  // 3. Proactive Auto-Update Triggers
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible' && swRegistration && navigator.onLine) {
      swRegistration.update().catch(() => {});
    }
  });

  window.addEventListener('online', () => {
    updateOnlineStatus(true);
    if (swRegistration) swRegistration.update().catch(() => {});
  });

  window.addEventListener('offline', () => {
    updateOnlineStatus(false);
  });

  // Periodic background check every 30 minutes
  setInterval(() => {
    if (swRegistration && navigator.onLine) {
      swRegistration.update().catch(() => {});
    }
  }, 30 * 60 * 1000);

  // 4. Install Prompt Engine (Android Chrome & iOS Safari)
  setupInstallPrompt();

  // 5. Manual Update Checker & Status Indicator
  setupManualUpdateCheck();

  // Initial network status
  updateOnlineStatus(navigator.onLine);
}

function showUpdateToast(registration) {
  const toast = document.getElementById('pwa-update-toast');
  const reloadBtn = document.getElementById('pwa-reload-btn');
  const dismissBtn = document.getElementById('pwa-dismiss-btn');
  if (!toast) return;

  toast.style.display = 'flex';

  if (reloadBtn) {
    reloadBtn.onclick = () => {
      if (registration && registration.waiting) {
        registration.waiting.postMessage({ type: 'SKIP_WAITING' });
      } else {
        window.location.reload();
      }
    };
  }

  if (dismissBtn) {
    dismissBtn.onclick = () => {
      toast.style.display = 'none';
    };
  }
}

function setupInstallPrompt() {
  const installBtn = document.getElementById('pwa-install-btn');
  const iosModal = document.getElementById('ios-install-modal');
  const iosModalClose = document.getElementById('ios-modal-close');
  const iosModalGotIt = document.getElementById('ios-modal-got-it');

  if (!installBtn) return;

  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  const isStandalone = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone === true;

  if (isStandalone) {
    installBtn.style.display = 'none';
    return;
  }

  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredInstallPrompt = e;
    installBtn.style.display = 'inline-flex';
  });

  if (isIOS && !isStandalone) {
    installBtn.style.display = 'inline-flex';
  }

  installBtn.addEventListener('click', async () => {
    if (deferredInstallPrompt) {
      deferredInstallPrompt.prompt();
      const choice = await deferredInstallPrompt.userChoice;
      if (choice.outcome === 'accepted') {
        console.log('[PWA] User accepted the home screen installation.');
        installBtn.style.display = 'none';
      }
      deferredInstallPrompt = null;
    } else if (isIOS) {
      if (iosModal) iosModal.style.display = 'flex';
    } else {
      if (iosModal) {
        iosModal.style.display = 'flex';
      } else {
        alert('To install this app, tap your browser menu and select "Install" or "Add to Home Screen".');
      }
    }
  });

  if (iosModalClose) {
    iosModalClose.addEventListener('click', () => {
      iosModal.style.display = 'none';
    });
  }
  if (iosModalGotIt) {
    iosModalGotIt.addEventListener('click', () => {
      iosModal.style.display = 'none';
    });
  }
  if (iosModal) {
    iosModal.addEventListener('click', (e) => {
      if (e.target === iosModal) {
        iosModal.style.display = 'none';
      }
    });
  }

  window.addEventListener('appinstalled', () => {
    console.log('[PWA] Japan Trip app successfully installed!');
    installBtn.style.display = 'none';
    deferredInstallPrompt = null;
  });
}

function setupManualUpdateCheck() {
  const checkBtn = document.getElementById('pwa-check-update-btn');
  if (!checkBtn) return;

  checkBtn.addEventListener('click', async () => {
    if (!navigator.onLine) {
      alert('You are currently offline (Airplane Mode). The trip guide is running from offline cache.');
      return;
    }

    checkBtn.textContent = 'Checking...';
    checkBtn.disabled = true;

    if (swRegistration) {
      try {
        await swRegistration.update();
        setTimeout(() => {
          checkBtn.textContent = 'Up to Date ✓';
          setTimeout(() => {
            checkBtn.textContent = 'Check for Updates';
            checkBtn.disabled = false;
          }, 2500);
        }, 800);
      } catch (err) {
        checkBtn.textContent = 'Check for Updates';
        checkBtn.disabled = false;
      }
    } else {
      setTimeout(() => {
        checkBtn.textContent = 'Up to Date ✓';
        setTimeout(() => {
          checkBtn.textContent = 'Check for Updates';
          checkBtn.disabled = false;
        }, 2000);
      }, 500);
    }
  });
}

function updateOnlineStatus(isOnline) {
  const dot = document.getElementById('pwa-status-dot');
  const text = document.getElementById('pwa-status-text');
  if (!dot || !text) return;

  if (isOnline) {
    dot.className = 'status-dot online';
    text.textContent = 'Online • Auto-sync active';
  } else {
    dot.className = 'status-dot offline';
    text.textContent = '✈️ Airplane Mode • Trip cache active';
  }
}
