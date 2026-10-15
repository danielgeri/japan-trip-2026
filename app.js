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
      lunch: "<strong>In-Flight Main Meal:</strong> Served ~2 hours after takeoff + pre-packed toddler snack spinner (freeze-dried strawberries, crackers, cheese sticks).",
      dinner: "<strong>Pre-Landing Meal:</strong> Served ~2 hours prior to Tokyo Haneda arrival.",
      kidSafeOrder: "Keep a fruit squeeze pouch or Dum Dums lollipop handy for Kayden's ears during the final 35-minute descent into Haneda."
    },
    pregnancyTip: "Prioritize an aisle seat for Maria, use the inflatable lumbar pillow, and keep a Dum Dums lollipop or fruit pouch ready for Kayden during the final 35-minute descent."
  },
  {
    day: 2,
    date: "Saturday, Oct 17, 2026",
    location: "Tokyo ➔ Sapporo",
    weather: "⛅ 13° / 8°C (56° / 46°F) • Dry & Crisp Evening",
    morning: "1:55 PM: Touchdown at Tokyo Haneda Airport (Terminal 3). Collect gate-checked stroller on the jetbridge and clear Immigration & Customs using Visit Japan Web QR codes.",
    transit: "Re-check bags at the JAL Domestic Transfer Counter in Terminal 3, then board the free Terminal Shuttle Bus to Terminal 1.",
    afternoon: "5:30 PM: Japan Airlines Flight JL 525 to Sapporo New Chitose Airport (CTS). Assigned Seats: Row 36 (36K, 36J, 36H, 36G, 36E). Lands at 7:05 PM.",
    evening: "Take the indoor elevator to CTS Basement (B1F) and board the JR Rapid Airport Express (37 mins) directly to Sapporo Station. Take the indoor station elevator straight into JR Tower Hotel Nikko Sapporo!",
    dining: {
      lunch: "<strong>Haneda Terminal 1 (Before 5:30 PM Flight):</strong> 1) <strong>Hitoshinaya (ひとしなや)</strong> (Renowned warm dashi salmon/rice set & broth right in T1); 2) <strong>Marugame Seimen (丸亀製麺 T1)</strong> (Fast warm udon noodles & sweet potato tempura); 3) <strong>Royal Host Haneda T1</strong> (Spacious family booths, pancakes & kids plates).",
      dinner: "<strong>Inside Your Hotel / Station Building (Stellar Place 6F — 100% Indoors):</strong> 1) <strong>Kasyunan (花旬庵)</strong> (Warm buckwheat soba/udon & crispy tempura in wide booths—fastest arrival meal); 2) <strong>Tonkatsu Wako (とんかつ和幸 Stellar Place 6F)</strong> (Crispy pork tenderloin cutlets, miso soup & free white rice refills); 3) <strong>Matsuo Genghis Khan (松尾ジンギスカン)</strong> (Sweet apple-marinated Hokkaido lamb & udon); 4) <strong>Daimaru B1F Depachika / 7-Eleven Room Picnic</strong> (If everyone is exhausted at 8:30 PM, grab warm bento boxes, egg sandwiches & fruit to eat in your hotel rooms!).",
      kidSafeOrder: "<strong>For Kayden & Maria:</strong> Warm Kitsune Udon (mild broth noodles with sweet tofu), shrimp/sweet potato tempura, or a kids tonkatsu & steamed rice set."
    },
    weatherStrategy: "Updated Live Forecast: The evening showers cleared out—Sapporo will be 100% dry tonight with crisp 46°F–50°F autumn air! Plus, your entire transfer from CTS Airport to JR Sapporo Station, hotel lobby, and Stellar Place 6F dinner is 100% enclosed indoors.",
    pregnancyTip: "Pick up the free pink 'Maternity Mark' badge at the Haneda or Sapporo JR ticket counter, and keep power banks in your under-seat personal bag (never in overhead bins on JAL)."
  },
  {
    day: 3,
    date: "Sunday, Oct 18, 2026",
    location: "Sapporo City",
    weather: "🌤️ 15° / 6°C (59° / 43°F) • Dry All Day & Evening!",
    morning: "9:30 AM – 12:30 PM: Visit Shiroi Koibito Park during its annual 'Nya-Halloween' Autumn Festival (fairytale European chocolate village decked out with friendly black-cat/pumpkin displays, singing mechanical clock tower & limited-edition Halloween parfaits; 100% flat & stroller-friendly) OR swap in Maruyama Zoo / Hitsujigaoka Sheep Hill.",
    afternoon: "1:00 PM – 3:30 PM: Stroll Odori Park autumn foliage & ride the elevator up Sapporo TV Tower, then relax along the climate-controlled Chi-Ka-Ho walkway & Atelier Morihiko cafe for Kayden's afternoon stroller nap.",
    evening: "5:30 PM: Private tatami room King Crab feast in Susukino (short 5-minute taxi door-to-door from your hotel).",
    dining: {
      breakfast: "<strong>Hotel SKY J (35F Panoramic Buffet)</strong> OR <strong>Sandria / Paul Bakery</strong> inside Sapporo Station (fresh warm egg/fruit sandwiches, croissants & Meiji 100% milk).",
      lunch: "1) <strong>Cafe BUTLERS WHARF</strong> (Inside Shiroi Koibito Park — spaghetti, Hokkaido beef stew & pumpkin soup); 2) <strong>Soup Curry GARAKU or Suage+</strong> (Odori — braised chicken leg & sweet Hokkaido veggies; choose <strong>Spice Level 0/1</strong> for zero heat + Kids Curry); 3) <strong>Odori Bisse Food Hall (1F–4F)</strong> (Direct underground access at Odori Park—spacious tables, udon, pastries & Tokachi beef bowls with zero wait).",
      dinner: "1) <strong>Sapporo Kani Shogun (札幌かに将軍 本店)</strong> (Private room steamed King Crab hotpot, crab dumplings & rice porridge); 2) <strong>Hokkaido Dining Kitchen Aiyo (あいよ)</strong> (Private enclosed booths serving buttered potatoes, yakitori skewers, grilled fish, corn & fluffy omelet); 3) <strong>Sapporo Ramen Kyowakoku (10F Station) or Ebisoba Ichigen</strong> (Famous Sapporo miso/shrimp ramen with family table booths).",
      kidSafeOrder: "<strong>For Kayden & Maria:</strong> At Kani Shogun, order <em>Chawanmushi</em> (silky warm egg custard), crab Shumai dumplings, and <em>Zosui</em> (crab & egg rice porridge cooked in the pot at the end)."
    },
    weatherStrategy: "🎉 Great Sunday Weather Upgrade: The rain front slowed down by 7 hours—Sunday is now 100% dry from 9:00 AM until 10:00 PM overnight! Enjoy Shiroi Koibito's 'Nya-Halloween' Park, Odori Park, and TV Tower at an unhurried pace with zero afternoon rain rush.",
    transit: "15-minute taxi from JR Tower Hotel lobby to Shiroi Koibito Park or Maruyama Zoo (~¥2,500). Remember: 4 adults + 1 toddler requires either a Jumbo/Van taxi (Uber XL/GO) or 2 standard cabs.",
    additionalOptions: "🎃 <strong>Shiroi Koibito 'Nya-Halloween' Perks:</strong> Great day to dress Kayden in a festive Halloween shirt for courtyard pumpkin photos!<br>🦁 <strong>Option A — Maruyama Zoo (15 min taxi):</strong> Flat woodland paths with an underwater glass tunnel where polar bears & seals swim overhead, plus red pandas & elephants.<br>🐑 <strong>Option B — Hitsujigaoka Sheep Hill (25 min taxi):</strong> Open pasture where woolly sheep graze overlooking Sapporo Dome, Dr. Clark statue, and fresh Hokkaido milk soft-serve."
  },
  {
    day: 4,
    date: "Monday, Oct 19, 2026",
    location: "Sapporo Covered Arcades & Beer Hall",
    weather: "🌧️ 18° / 10°C (65° / 50°F) • AM Rain ➔ Dry After 3 PM",
    morning: "9:45 AM – 12:30 PM (100% Dry Underground & Covered Route): Because steady rain falls in Sapporo & Otaru from 4:00 AM until 3:00 PM today, we swapped Otaru to dry Tuesday! Walk the heated underground Chi-Ka-Ho promenade to Rokkatei Sapporo Honten 2F Cafe (fresh Marusei butter sandwiches & hot barley tea) and stroll the 7-block glass-canopy Tanukikoji Covered Shopping Arcade (100% roofed!).",
    afternoon: "1:30 PM – 3:30 PM: Browse Daimaru Sapporo's 4F luxury baby lounge & B1F Depachika food hall while Kayden stroller-naps indoors (OR visit AOAO SAPPORO Urban Aquarium right inside Moyuk Sapporo at Tanukikoji!).",
    evening: "4:30 PM (Skies Dry Out!): Rain ends by 3:00–3:30 PM! Take a 10-minute taxi to the historic red-brick Sapporo Beer Museum, restock Moony diapers or snacks next door at Akachan Honpo baby megastore (Ario Mall), and enjoy dinner at Garden Grill or Kessel Hall.",
    dining: {
      breakfast: "<strong>Rokkatei or Kinotoya Bake (Sapporo Station)</strong> (Warm freshly baked cheese tarts, butter toast & coffee) OR hotel buffet.",
      lunch: "1) <strong>Soup Curry Suage+ or GARAKU</strong> (Charcoal-grilled chicken & sweet Hokkaido pumpkin, carrots & potatoes; choose <strong>Spice Level 0/1</strong> for zero heat); 2) <strong>Daimaru Sapporo 8F Restaurant Floor</strong> (Spacious booths with Tempura Tsunahachi, Tonkatsu & Kyoto Udon—luxury baby room on the same floor); 3) <strong>Rokkatei Sapporo Honten 2F Salon</strong> (Light lunch of crispy pizzas, hot soufflé pancakes & strawberry shortcake).",
      dinner: "1) <strong>Garden Grill at Sapporo Beer Garden</strong> (Upscale, quiet glass-walled dining room with wide booths—grain-fed lamb, Hokkaido roast beef & vegetables without heavy smoke); 2) <strong>Kessel Hall at Sapporo Beer Garden</strong> (Iconic lively 1912 copper-kettle beer hall BBQ); 3) <strong>Ario Sapporo Mall Family Dining (Next Door)</strong> (Right inside the Akachan Honpo building—zero-wait family restaurants, udon, hamburger steaks & kid sets); 4) <strong>Nemuro Hanamaru Sushi (Stellar Place 6F)</strong> (If you prefer staying inside the station building tonight!).",
      kidSafeOrder: "<strong>For Kayden & Maria:</strong> Spice Level 1 (zero chili heat) chicken/veggie soup curry or udon at lunch; roasted Hokkaido potatoes, sweet corn, and well-done beef/lamb with rice rolls at dinner."
    },
    weatherStrategy: "🔄 Smart Weather Swap (Mon 10/19 ⇄ Tue 10/20): Live JMA & ECMWF models show 15–19 mm of rain between 4:00 AM and 3:00 PM on Monday before clearing out completely at 3:30 PM, while Tuesday is 100% dry all day. Moving your indoor Sapporo underground walk, covered Tanukikoji arcade, and afternoon Beer Museum + Akachan Honpo here keeps everyone 100% dry!",
    transit: "Sapporo Station, Chi-Ka-Ho, Odori, and Susukino/Tanukikoji are connected by a continuous, flat, heated underground walkway with elevators.",
    additionalOptions: "🐧 <strong>Rainy-Morning Indoor Gem — AOAO SAPPORO Urban Aquarium (Tanukikoji 4-chome):</strong> Located right inside the Moyuk Sapporo building on covered Tanukikoji Street—Kayden can watch rockhopper penguins hop up-close on indoor ledges and glowing jellyfish tanks without stepping into the rain!"
  },
  {
    day: 5,
    date: "Tuesday, Oct 20, 2026",
    location: "Otaru Canal Day Trip ➔ Sapporo",
    weather: "⛅ 15° / 6°C (59° / 43°F) • 100% Dry All Day!",
    morning: "🚨 8:30 AM: Hand large suitcases to JR Tower Hotel front desk to forward via Yamato Takkyubin to your Kyoto Airbnb! 9:30 AM: Take the elevator down to Sapporo Station and board the JR Rapid Airport train (32 mins along coastal cliffs) to Minami-Otaru. Visit the twinkling Otaru Music Box Museum and stroll the flat stone Otaru Canal promenade under 100% dry skies!",
    afternoon: "1:30 PM – 3:30 PM: Relax at LeTAO Main Store 2F Tea Salon for Double Fromage cheesecake and hot non-caffeinated rooibos tea while Kayden stroller-naps along pedestrian-friendly Sakaimachi Street. Return to Sapporo Station by train.",
    evening: "4:15 PM: Back at Sapporo Station, pull a paper queue ticket at Nemuro Hanamaru Sushi (JR Stellar Place 6F right inside your hotel building!) OR head to Hyosetsu no Mon for a private-suite King Crab banquet.",
    dining: {
      breakfast: "<strong>Doutor / Starbucks APIA Underground</strong> OR <strong>Donq Bakery (Daimaru B1F)</strong> for warm Hokkaido milk bread, corn rolls & coffee before boarding the 9:30 AM Otaru train.",
      lunch: "1) <strong>Wakadori Jidai Naruto Main Store (若鶏時代なると本店)</strong> (Huge 280-seat family hall serving Otaru's famous crispy golden half-fried chicken, fries, udon & sushi sets); 2) <strong>Otaru Masazushi Honten or Zenan</strong> (Private booths with cooked crab, grilled scallops, tamago egg & sushi); 3) <strong>Otaru Bine (小樽バイン)</strong> (1912 stone bank building serving Hokkaido cheese fondues, roast beef & pasta in wide booths).",
      dinner: "1) <strong>Nemuro Hanamaru Sushi (JR Stellar Place 6F)</strong> (Hokkaido's #1 conveyor-belt sushi; pull ticket at 4:15 PM and track on phone); 2) <strong>Kaitenzushi Toriton (回転寿し トリトン 円山店 / 豊平店)</strong> (Locals' favorite conveyor-belt sushi with huge family booths—10 min taxi); 3) <strong>Hyosetsu no Mon Sapporo (氷雪の門)</strong> (Historic King Crab banquet in private suites, Phone: +81 11-521-3046); 4) <strong>Butadon Ippin (豚丼いっぴん Stellar Place 6F)</strong> (Charcoal-grilled Tokachi sweet soy pork rice bowls—kids love the sweet tare glaze!).",
      kidSafeOrder: "<strong>For Kayden & Maria:</strong> Naruto's crispy boneless chicken tenders + udon at lunch in Otaru; at Hanamaru/Toriton dinner, order <em>Tamago</em> (sweet omelet), <em>Inari</em> (sweet tofu pockets), <em>Ebi</em> (boiled shrimp), <em>Aburi Salmon/Beef</em> (seared/cooked), crab soup, udon, and French fries!"
    },
    weatherStrategy: "☀️ 100% Dry Otaru Window (0.0 mm Rain): Tuesday is completely dry from morning to night (15°C / 59°F)—ideal for strolling Otaru Canal and Sakaimachi Street without umbrellas! Dress in the 3-layer system (Heattech + Fleece + Packable Down) for the crisp coastal breeze.",
    pregnancyTip: "Keep your 2-day carry-on duffle bag with you tonight—your large forwarded suitcases will meet you in Kyoto on Thursday, Oct 22.",
    additionalOptions: "🍂 <strong>Hokkaido University Golden Ginkgo Avenue (Ichō Namiki):</strong> Just a 10-minute flat walk north of your hotel at Kita-13-jo Street—a stunning 380-meter tunnel of 70 golden yellow ginkgo trees (great quick morning stroll before Otaru or after returning at 3:30 PM!).<br>🐑 <strong>Hitsujigaoka Sheep Hill Alternative:</strong> If you prefer staying in Sapporo instead of Otaru, Tuesday's dry skies are also great for visiting the sheep pastures and Nakajima Park."
  },
  {
    day: 6,
    date: "Wednesday, Oct 21, 2026",
    location: "Sapporo (CTS) ➔ Osaka (ITM) ➔ Kyoto",
    weather: "🌤️ 16°C Sapporo ➔ 27°C (81°F) Osaka / Kyoto!",
    morning: "10:30 AM: Relaxed checkout from JR Tower Hotel Nikko. Take the JR Rapid Airport train (37 mins) to New Chitose Airport (CTS). Enjoy ramen & buy ROYCE' / LeTAO gifts with insulated cold packs at CTS Domestic Terminal.",
    afternoon: "3:10 PM: Fly Japan Airlines Flight JL 2008 from Sapporo (CTS) into Osaka Itami Airport (ITM), landing at 5:05 PM. From Osaka Itami baggage claim, walk right outside to Airport Limousine Bus Stop #15 for the direct 55-minute highway coach from Osaka straight to Kyoto Station.",
    evening: "6:15 PM: Osaka Airport Limousine Bus drops off at Kyoto Station Hachijo Exit (South Side). Walk 4 minutes on flat pavement (350m) down Muromachi-dori into KotoStay 京粋庵 2BR Private Suite (Conf: HMRQJQQTC3).",
    dining: {
      breakfast: "<strong>Sapporo Station Bakery (Little Mermaid or Sandria)</strong> + grab extra Hokkaido milk & snacks for the airport train.",
      lunch: "<strong>New Chitose Airport (CTS Domestic 3F — World-Class Dining):</strong> 1) <strong>Hokkaido Ramen Dojo (北海道ラーメン道場)</strong> (10 famous ramen shops including Ebisoba Ichigen & Keyaki butter-corn miso ramen with open family tables); 2) <strong>Drive-In Yoshimi (ドライブインいとう)</strong> (Sweet-soy roasted pork bowls & kids plates with zero line); 3) <strong>Kantaro Gourmet Kaitenzushi (函太郎 3F)</strong> (Booth seating overlooking the runway—Kayden can watch jets take off while eating!).",
      dinner: "<strong>Kyoto Station (4-Min Flat Walk from KotoStay — or grab 551 Horai Pork Buns at Osaka Itami Airport upon landing!):</strong> 1) <strong>Katsukura Tonkatsu (名代とんかつ かつくら The Cube 11F)</strong> (Tender pork/shrimp cutlets & barley rice; kids get a mini mortar & pestle to grind sesame seeds!); 2) <strong>Kyoto Ramen Koji (京都拉麺小路 10F)</strong> (9 famous regional ramen shops on one stroller-friendly floor); 3) <strong>Tagoto or Matsubaya (Kyoto Porta B1F)</strong> (Soothing warm Kyoto yuba/duck udon & tempura bowls); 4) <strong>Isetan B1F Depachika Takeout Feast</strong> (Bring roast wagyu bento boxes, dashimaki egg rolls & strawberries back to your private KotoStay dining table!).",
      kidSafeOrder: "<strong>For Kayden & Maria:</strong> Grab warm <em>551 Horai Butaman</em> (Osaka's famous steamed pork buns right inside Osaka Itami arrival terminal!) for the bus ride, then at Katsukura in Kyoto order the <em>Hire-katsu</em> (ultra-tender lean pork tenderloin), miso soup, and barley rice."
    },
    weatherStrategy: "🌡️ Huge 20°F Temperature Jump (Sapporo ➔ Osaka/Kyoto): Sapporo is a crisp 61°F (16°C), while Osaka & Kyoto hit a balmy 81°F (27°C) on Wednesday! Wear a light breathable short-sleeve or cotton tee underneath your Hokkaido jacket so you can peel off all warm layers on the plane before landing at Osaka Itami (ITM).",
    transit: "Osaka Itami (ITM) ➔ Kyoto Transit: The Airport Limousine Bus from Osaka Itami Stop #15 (¥1,340/adult, runs every 20 mins) stows your stroller and carry-on duffles underneath the coach—taking you from Osaka Airport straight to Kyoto Station Hachijo Exit with zero train transfers or station stairs!"
  },
  {
    day: 7,
    date: "Thursday, Oct 22, 2026",
    location: "Southern Higashiyama & Gion",
    weather: "🌤️ 22° / 13°C (72° / 55°F) • Dry PM + Jidai & Fire Fest",
    morning: "8:30 AM: Take a taxi directly to Kiyomizu-dera's upper taxi drop-off (skipping the steep uphill climb). Take in the wooden stage views and stroll gently downhill along Sannenzaka & Ninenzaka's stone lanes before crowds peak.",
    afternoon: "1:30 PM – 3:30 PM: Stroller-nap under the weeping cherry trees in flat Maruyama Park while Maria rests at Kasagiya (traditional 1914 teahouse) with warm hojicha tea & sweet red bean botamochi.",
    evening: "4:30 PM: Stroll the lantern-lit Gion Shirakawa Canal. Your forwarded suitcases from Sapporo arrive at KotoStay today!",
    dining: {
      breakfast: "<strong>Inoda Coffee or Ogawa Coffee (Kyoto Station)</strong> (Classic Kyoto morning toast sets, scrambled eggs, bacon & fruit) OR <strong>Sizuya Bakery (志津屋)</strong> (Famous <em>Katsu-sando</em> & fluffy <em>Karne</em> butter rolls).",
      lunch: "1) <strong>Okabeya (おかべ家 near Kiyomizu-dera)</strong> (Spacious 200-seat hall serving warm <em>Yudofu</em> simmered tofu hotpot, crispy vegetable tempura & rice—zero cramped counter stress!); 2) <strong>Hisago (ひさご) or Kodaiji Hashiba</strong> (Fluffy <em>Oyako-don</em> chicken & cooked egg rice bowl + warm udon at the bottom of Ninenzaka); 3) <strong>Sodoh Higashiyama Kyoto</strong> (Gorgeous garden villa serving brick-oven Margherita pizza & pasta—reserve or walk in at 11:30 AM).",
      dinner: "1) <strong>Gion Tanto (祇園たんと) or Donguri (どんぐり)</strong> (Savory Kyoto okonomiyaki pancakes, yakisoba noodles & teppanyaki beef/corn); 2) <strong>Gion Karyo (祇園かりょう) or Roan Kikunoi</strong> (Approachable seasonal Kyoto Kaiseki with private table rooms); 3) <strong>Gyoza Hohei (ぎょうざ歩兵 Gion)</strong> (Famous bite-sized crispy ginger gyoza dumplings & white rice); 4) <strong>Kyoto Station 11F Restaurant Floor</strong> (If returning early before James leaves for the Kurama Fire Festival!).",
      kidSafeOrder: "<strong>For Kayden & Maria:</strong> <em>Oyako-don</em> (request egg cooked firm: <em>'Tamago yoku-yaki'</em>), warm udon noodles, simmered silky tofu, or sweet-sauce <em>Yakisoba</em> noodles."
    },
    weatherStrategy: "🌤️ Early overnight moisture clears out by mid-morning, leaving a pleasant, dry 72°F afternoon and crisp 55°F evening—ideal for Kiyomizu-dera, the 2:00 PM Jidai Matsuri Samurai Parade, and James's 6:00 PM Kurama Fire Festival! (Tip for James: Kurama mountain village drops to ~47°F at night—pack your fleece/down layer!). 🎉 Traffic Note: Oike & Kawaramachi streets close 11:30 AM – 3:00 PM for Jidai Matsuri, while your Higashiyama pedestrian route is 100% open.",
    additionalOptions: "⚔️ <strong>Jidai Matsuri Samurai Parade (2:00 PM – 2:30 PM at Heian Shrine):</strong> Walk 10 mins flat north from Maruyama Park along wide Jingu-michi to watch 2,000 participants dressed as samurai warriors, shoguns on horseback, and Heian nobles arrive at Heian Shrine!<br>🔥 <strong>James's Solo Night Quest — Kurama Fire Festival (Kurama-no-Hi Matsuri, 6:00 PM – 9:30 PM):</strong> Held once a year on Oct 22 up in the mountain village of Kurama (30-min Eizan Railway ride from Demachiyanagi Station). Locals carry massive 100-kg flaming pine torches through narrow village streets! <em>(Skip for Maria & Kayden due to heavy train crowds & flying sparks, but an unforgettable solo evening adventure for James after dinner!)</em>",
    pregnancyTip: "Always take a taxi up to Kiyomizu-dera's upper gate so your walking route is 100% downhill."
  },
  {
    day: 8,
    date: "Friday, Oct 23, 2026",
    location: "Arashiyama & Fushimi Inari",
    weather: "⛅ 18° / 13°C (65° / 55°F) • Crisp & Dry Autumn",
    morning: "9:00 AM: Take the JR San-in Line from Kyoto Station to Saga-Arashiyama (17 mins). Ride the scenic Sagano Romantic Train (Torokko open-air vintage train through Hozugawa Gorge) and stroll the flat paved path through Arashiyama Bamboo Grove.",
    afternoon: "1:30 PM – 3:30 PM: Wheel Kayden along the level Katsura River promenade by Togetsukyo Bridge. Stop at CHAVATY Kyoto Arashiyama for roasted hojicha tea lattes & warm scones while Kayden naps.",
    evening: "4:30 PM: Take the JR train to Fushimi Inari Taisha (5 mins from Kyoto Station). Walk only the flat, paved lower Senbon Torii loop (15–20 mins) illuminated at dusk—skip the steep mountain stairs!",
    dining: {
      breakfast: "<strong>Shinshindo Bakery (進々堂 Kyoto Station)</strong> (French brioche toast, scrambled eggs, yogurt & hot cocoa) OR heat pastries in your KotoStay kitchen.",
      lunch: "1) <strong>Arashiyama Yoshiya (良彌) or Sagano Tofu Ine (嵯峨野とうふ 稲)</strong> (Spacious 2-story family dining right by Tenryu-ji & Togetsukyo Bridge—creamy yuba tofu skin, tempura, udon & beef sets); 2) <strong>Arashiyama Yoshimura (嵐山よしむら)</strong> (Handmade buckwheat soba overlooking the river); 3) <strong>Bread, Espresso & Arashiyama Garden</strong> (200-year-old farmhouse cafe with a garden lawn—warm French toast, paninis & decaf lattes).",
      dinner: "1) <strong>Moritaya JR Kyoto Isetan 11F (モリタ屋)</strong> (150-year-old Kuroge Wagyu sukiyaki & shabu-shabu overlooking Kyoto Tower; Phone: +81 75-365-7788); 2) <strong>Nishiki Warai (錦わらい Kyoto Station 11F)</strong> (Casual spacious booths right next door on 11F—Kyoto okonomiyaki, yakisoba & teppanyaki); 3) <strong>Wakana / Kyoto Isetan 10F–11F Dining Floor</strong> (20+ spacious restaurants on the same floor with high chairs & baby lounge).",
      kidSafeOrder: "<strong>For Kayden & Maria:</strong> In Moritaya's sweet soy-mirin sukiyaki pot, simmer the thick wheat udon noodles, tofu, carrots, and tender Wagyu slices (skip the raw egg dip for Maria & Kayden!)."
    },
    weatherStrategy: "Crisp, dry 65°F (18°C) sweater weather all day (0.0 mm daytime rain)—wear a warm sweater or light jacket for the open-air Sagano Romantic Train through Hozugawa Gorge and Kōdai-ji's Opening Night Illumination.",
    transit: "JR San-in Line (Platform 32/33 at Kyoto Station) is level-entry with zero steps.",
    additionalOptions: "✨ <strong>Opening Night — Kōdai-ji Temple Autumn Night Illumination (5:00 PM – 9:30 PM, ¥800):</strong> Friday Oct 23 is the official 2026 season opening night! Features a glowing bamboo forest, 3D Zen rock garden light projection, and crimson maples reflected like glass in the mirror-still <em>Garyō-ike</em> pond.<br>🚂 <strong>Toddler Bonus — Kyoto Railway Museum & SL Steam Train (Umekoji Park):</strong> Just 1 train stop (or 5-min taxi) from your Kyoto Airbnb—Kayden can ride a real puffing coal-fired Steam Locomotive (¥300, 10-min loop) and climb inside retired Shinkansen bullet trains!"
  },
  {
    day: 9,
    date: "Saturday, Oct 24, 2026",
    location: "Kyoto ➔ Kamakura Arrival",
    weather: "🌧️ 18° / 14°C (64° / 57°F) • Rain on Shinkansen Transit Day",
    morning: "9:45 AM: Check out of KotoStay and walk 4 minutes flat to Kyoto Station. Pick up gourmet Ekiben bento boxes & snacks. 11:05 AM: Board Shinkansen Nozomi #116 to Shin-Yokohama (arrives 1:15 PM).",
    afternoon: "Transfer at Shin-Yokohama via station elevators to JR Yokohama Line (12 mins to Yokohama) ➔ JR Yokosuka Line (25 mins to Kamakura). Exit Kamakura Station West Exit (Onari Exit) and walk 60 seconds flat into KAMAKURA HOTEL!",
    evening: "4:00 PM: Relax dry indoors in the hotel's complimentary green-tea lounge! Because a coastal rain shower passes through Kamakura this Saturday, save your outdoor Komachi-dori stroll for sunny Sunday/Monday and enjoy a cozy dinner right next door at Garden House (2-min walk) or take a 3-min door-to-door taxi to Matsubara-an.",
    dining: {
      breakfast: "<strong>Kyoto Station Hachijo Exit Cafes (Hoshino Coffee or Manneken Belgian Waffles)</strong> right along your 4-minute walk to the Shinkansen gates.",
      lunch: "<strong>Gourmet Shinkansen Ekiben Feast (Buy inside Kyoto Station 'Ekiben Nigiwai' before boarding):</strong> 1) <strong>Shinkansen Bullet Train Ceramic Bento</strong> (Shaped like a real bullet train—Kayden keeps the ceramic train box!); 2) <strong>Kobe/Kyoto Wagyu Sukiyaki Bento</strong> (Pull the string to self-heat the beef & rice steaming hot at your seat!); 3) <strong>Kyoto Dashimaki Egg & Chicken Bento</strong>.",
      dinner: "1) <strong>Kamakura Matsubara-an (鎌倉 松原庵)</strong> (70-year-old seaside wooden villa serving handmade duck soba, fluffy rolled omelet & crispy tempura; take a 3-min taxi door-to-door in the rain, Phone: +81 467-61-3838); 2) <strong>Garden House Kamakura (ガーデンハウス鎌倉)</strong> (Literally 2 mins from your hotel! Cozy indoor booths serving wood-fired pizza, roast chicken, fries & craft beer); 3) <strong>Kamakura Akimoto (鎌倉 秋本)</strong> (Right at Kamakura Station Square—elevator access, wide tables, crispy tempura & cooked Shirasu bowls).",
      kidSafeOrder: "<strong>For Kayden & Maria:</strong> At Matsubara-an, order <em>Dashimaki Tamago</em> (warm rolled egg), <em>Tempura Seiro</em> (shrimp & sweet vegetable tempura with soba), or Garden House's Margherita pizza & fries."
    },
    weatherStrategy: "☔ Lucky Timing — Rain Hits on Your Indoor Train Day: Saturday's coastal rain falls while you are riding dry inside the Shinkansen bullet train! Even better, KAMAKURA HOTEL is literally a 60-second (100m) flat walk from Kamakura Station West Exit—just keep compact umbrellas at the top of your bag for that 1-minute walk.",
    transit: "At KAMAKURA HOTEL check-in, present both consecutive booking confirmations (Oct 24–25 & Oct 25–27, Conf: 1032548490) so the front desk links your rooms for all 3 nights."
  },
  {
    day: 10,
    date: "Sunday, Oct 25, 2026",
    location: "Great Buddha & Shonan Coast",
    weather: "🌤️ 23° / 16°C (74° / 60°F) • Warm & Sunny Coast!",
    morning: "9:30 AM: Step across the square to ride the vintage green Enoden tram from Kamakura Station to Hase Station (6 mins). Visit Kōtoku-in (The Great Bronze Buddha—100% flat courtyard) and Hase-dera's lower koi ponds.",
    afternoon: "1:30 PM – 3:30 PM: Wheel the stroller along the smooth paved Yuigahama Beach boardwalk while warm 74°F ocean breezes rock Kayden to sleep. Maria relaxes on the oceanfront terrace at Amalfi Caffè.",
    evening: "4:30 PM: Ride the scenic coastal Enoden tram along Shichirigahama at golden hour, watching the sun set behind Mount Fuji across Sagami Bay.",
    dining: {
      breakfast: "<strong>KAMAKURA HOTEL Hot Breakfast Onigiri Set</strong> (Warm miso soup & freshly made rice balls) OR <strong>Garden House Kamakura (2 mins walk)</strong> for buttermilk pancakes, eggs & coffee.",
      lunch: "1) <strong>Kaikoan (海光庵 inside Hase-dera)</strong> (Panoramic ocean-view temple cafe serving mild temple curry, udon noodles & sweet sesame団子 dango); 2) <strong>Woof Curry (ウーフカレー Hase)</strong> (Cozy 2-story house near the Great Buddha serving slow-simmered beef/pork/veggie curry & kids mild plates); 3) <strong>Cafe Luonto or Daisy's Cafe (Hase)</strong> (Casual sandwiches, pancakes & pasta steps from the Buddha).",
      dinner: "1) <strong>Bills Shichirigahama (ビルズ 七里ヶ浜)</strong> (Iconic oceanfront terrace & booths—world-famous fluffy ricotta hotcakes with banana & honeycomb butter, Wagyu burgers, fish & chips, and pasta); 2) <strong>Amalfi Della Sera (アマルフィイ デラセーラ)</strong> (Cliffside coastal Italian serving brick-oven pizza & fresh Shonan pasta); 3) <strong>Pacific DRIVE-IN</strong> (Casual Hawaiian-Japanese plates, garlic shrimp, loco moco & fries right on the beach).",
      kidSafeOrder: "<strong>For Kayden & Maria:</strong> Bills' fluffy <em>Ricotta Hotcakes</em>, kids Wagyu cheeseburger with fries, or creamy chicken/mushroom pasta—guaranteed toddler crowd-pleasers!"
    },
    weatherStrategy: "☀️ Saturday's rain clears out completely into a gorgeous, warm 74°F (23°C) Sunday on the Shonan Coast! Ideal conditions for the Great Buddha, Yuigahama Beach boardwalk, Bills Shichirigahama, and the sunset Shonan Candle illumination.",
    additionalOptions: "🕯️ <strong>Shonan Candle 2026 at Enoshima Sea Candle (5:00 PM – 9:00 PM):</strong> Over 10,000 hand-lit candles illuminate the oceanfront Samuel Cocking Botanical Garden at the end of the Enoden tram line (¥500 entry). <strong>Stair-Free Escalator Hack:</strong> Skip the island stairs by taking the <strong>Enoshima Escar (江の島エスカー, ¥360)</strong>—4 covered outdoor escalators that carry you straight up the cliff (just fold Kayden's stroller for 4 minutes on the escalator; the garden and lighthouse elevator at the top are 100% flat!).",
    pregnancyTip: "If visiting Enoshima for the candle illumination, always use the Enoshima Escar outdoor escalators so Maria never climbs the cliff steps."
  },
  {
    day: 11,
    date: "Monday, Oct 26, 2026",
    location: "Kamakura Shrines & Bamboo",
    weather: "☀️ 22° / 15°C (71° / 59°F) • Sunny & 100% Dry",
    morning: "9:30 AM: Stroll the raised cherry-tree Dankazura pedestrian path to Tsurugaoka Hachimangu Shrine (wide grounds, red bridges & dove ponds). Take a 7-minute taxi to Hokokuji Temple to walk its tranquil grove of 2,000 Moso bamboo stalks.",
    afternoon: "1:30 PM – 3:30 PM: Sip ceremonial matcha in Hokokuji's open-air wooden teahouse overlooking the bamboo forest, then return to Onarimachi for Kayden's afternoon nap.",
    evening: "4:30 PM: Sunny souvenir stroll along Komachi-dori & Onarimachi. Pick up Toshimaya Hato Sablé dove shortbread cookies and pack main suitcases so Tuesday morning is completely unhurried.",
    dining: {
      breakfast: "<strong>Kibiyabakery (キビヤベーカリー Onarimachi)</strong> OR <strong>Chabakka Tea Parks / Verve Coffee Roasters Kamakura</strong> (1–2 mins from hotel; waffles, avocado toast & decaf lattes).",
      lunch: "1) <strong>Dankazura Kosuzu (段葛 こ寿々)</strong> (Historic timber shop right on the shrine path serving handmade soba noodles, udon & famous brown-sugar <em>Warabi Mochi</em>); 2) <strong>Oxymoron Onari (オクシモロン オナリ)</strong> (1 min from your hotel—mild Japanese keema curry, sweet custard pudding & toddler-friendly booths); 3) <strong>Caraway (キャラウェイ) or Giraffa Curry Bread</strong> (Legendary mild Japanese cheese/beef curry rice with huge portions).",
      dinner: "1) <strong>IL BIRRAIO Kamakura (イル・ビッライオ)</strong> (Warm neighborhood Italian trattoria 3 mins from your hotel—fresh handmade Shonan pasta, braised meats & tiramisu); 2) <strong>Garden House Kamakura</strong> (Spacious garden/indoor booths 2 mins from hotel—wood-fired pizza, roast chicken & salads); 3) <strong>AWkitchen Garden Kamakura</strong> (Right on Onarimachi with a private garden & train view—farm-to-table pasta, pizza & kids plates watching the Enoden tram roll right past the patio!).",
      kidSafeOrder: "<strong>For Kayden & Maria:</strong> AWkitchen's fresh tomato/bolognese pasta (while watching the green Enoden train pass right outside the fence!) or IL BIRRAIO's handmade gnocchi & bread."
    },
    weatherStrategy: "☀️ 100% Dry & Sunny (71°F / 22°C): Clear blue skies all day for Tsurugaoka Hachimangu Shrine, Hokokuji Bamboo Forest, strolling Komachi-dori, and Monday night's quiet Shonan Candle illumination!",
    additionalOptions: "🕯️ <strong>Shonan Candle 2026 (Quiet Weekday Evening Option, 5:00 PM – 8:00 PM):</strong> Monday night has clear 63°F skies and significantly lighter crowds than Sunday if you want to ride the Enoden tram down to Enoshima and take the stair-free <em>Enoshima Escar</em> escalator up to see the 10,000 oceanfront candles!"
  },
  {
    day: 12,
    date: "Tuesday, Oct 27, 2026",
    location: "Kamakura ➔ Haneda ➔ SFO",
    weather: "⛅ 22° / 15°C (71° / 59°F) • Dry Morning & Departure",
    morning: "9:30 AM: Unhurried final morning in Kamakura. Enjoy fresh-baked waffles at Cafe Vivement Dimanche (2 mins from hotel). Check out of KAMAKURA HOTEL at 11:00 AM and store bags at the front desk for a final stroll.",
    afternoon: "1:30 PM: Retrieve bags and walk 60 seconds into Kamakura Station. Take JR Yokosuka Line to Yokohama Station (25 mins) ➔ transfer via elevator to YCAT Keikyu Airport Limousine Bus direct to Haneda Terminal 3 (30 mins). Arrive at 3:30 PM.",
    evening: "6:25 PM: ANA Flight NH 7010 / UA 876 departs Haneda for SFO (lands at 12:15 PM same calendar day, Tue Oct 27!). Kumi & James connect to Southwest Flight WN 2791 (SFO 3:50 PM ➔ LAX 5:15 PM).",
    dining: {
      breakfast: "<strong>Cafe Vivement Dimanche (カフェ・ヴィヴモン・ディモンシュ)</strong> (2 mins from hotel—famous crispy fresh-baked waffles with whipped butter/caramel & decaf coffee).",
      lunch: "1) <strong>Kua'Aina Kamakura (クア・アイナ)</strong> (Right by Kamakura Station—juicy avocado cheddar burgers, crispy shoestring fries & kids sets); 2) <strong>Chaya Karinkorin or Komachi-dori Street Snacks</strong> (Warm sweet potato croquettes, grilled dango & tamagoyaki skewers); 3) <strong>CIAO / Yokohama Porta (If eating during Yokohama transfer)</strong>.",
      dinner: "<strong>Haneda Terminal 3 'Edo Koji' (4F Pre-Security Dining Promenade — Wide Stroller Aisles):</strong> 1) <strong>Tsurutontan Udon (つるとんたん)</strong> (Famous giant wooden bowls of gourmet udon noodles—toddler heaven before the 11h flight!); 2) <strong>Katsusen Tonkatsu (かつ仙)</strong> (Crispy pork tenderloin cutlets & rice); 3) <strong>Setagaya Ramen or Mos Burger</strong> + International In-Flight Dinner Service.",
      kidSafeOrder: "<strong>For Kayden & Maria:</strong> Stop at <em>Tsurutontan</em> on Haneda T3 4F around 4:15 PM so Kayden has a full belly of warm udon noodles right before boarding—he will fall asleep much faster after takeoff!"
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
          <div class="dining-title">🍽️ Curated Family Dining & Multi-Option Backups</div>
          ${d.dining.breakfast ? `<div class="dining-item"><strong>☀️ Breakfast:</strong> ${d.dining.breakfast}</div>` : ""}
          <div class="dining-item"><strong>🍱 Lunch Options:</strong> ${d.dining.lunch}</div>
          <div class="dining-item"><strong>🌙 Dinner Options:</strong> ${d.dining.dinner}</div>
          ${d.dining.kidSafeOrder ? `<div class="dining-item dining-kid-note">${d.dining.kidSafeOrder}</div>` : ""}
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
