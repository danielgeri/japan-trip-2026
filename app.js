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
    location: "✅ Completed • Sapporo Mega-Day!",
    weather: "🌤️ 15° / 3°C (58° / 38°F) • Completed!",
    morning: "✅ <strong>Completed Morning:</strong> Started with a fresh seafood breakfast at <strong>Nijo Market (二条市場)</strong>, then walked over to the <strong>Sapporo TV Tower (さっぽろテレビ塔 — Sapporo's 'Tokyo Tower'!)</strong> where Kayden played by the fountains in <strong>Odori Park (大通公園)</strong>, and headed up to <strong>Hitsujigaoka Observation Hill (さっぽろ羊ヶ丘展望台 — Sheep Observation Hill)</strong> to see the fluffy autumn sheep & Dr. Clark Statue!",
    afternoon: "✅ <strong>Completed Afternoon:</strong> Visited <strong>Shiroi Koibito Park (白い恋人パーク — The Chocolate Factory)</strong> for the 'Nya-Halloween' displays, courtyard clock tower & treats!",
    evening: "✅ <strong>Completed Evening:</strong> Picked up a gourmet feast from the <strong>Daimaru Sapporo B1F Depachika (Department Store Food Hall)</strong> right below the hotel for an easy, relaxing family dinner!",
    dining: {
      breakfast: "✅ <strong>Nijo Market (二条市場)</strong> (Fresh Hokkaido seafood bowls, grilled crab & melon).",
      lunch: "✅ <strong>Hitsujigaoka Sheep Hill & Shiroi Koibito Chocolate Factory Snacks / Lunch</strong>.",
      dinner: "✅ <strong>Daimaru B1F Depachika (大丸札幌 地下1階デパ地下)</strong> (Gourmet department store food hall feast!).",
      kidSafeOrder: "✅ <strong>What a Day!</strong> Because you already knocked out Nijo Market, Odori Park & Sapporo TV Tower, Hitsujigaoka Sheep Hill, and Shiroi Koibito Chocolate Factory all in one day, Monday & Tuesday are now completely freed up for fresh, unhurried highlights!"
    },
    weatherStrategy: "✅ Completed under crisp, dry Sapporo skies (58°F / 15°C)!"
  },
  {
    day: 4,
    date: "Monday, Oct 19, 2026",
    location: "Sapporo Arcades, Zoo/Ginkgos & Beer Hall",
    weather: "🌧️➔🌤️ 21° / 11°C (69° / 51°F) • Dry & Warm 69°F from 10 AM!",
    morning: "9:30 AM – 12:00 PM (Covered / Indoor Morning): Overnight rain (13.0 mm of 13.6 mm) already fell before 8:00 AM, tapering to mist by 9–10 AM! Walk the heated underground <strong>Chi-Ka-Ho</strong> promenade to <strong>Rokkatei Sapporo Honten 2F Cafe</strong> (fresh Marusei ice cream butter sandwiches) & stroll the 7-block glass-canopy <strong>Tanukikoji Covered Shopping Arcade</strong>—OR visit <strong>AOAO SAPPORO Urban Aquarium</strong> right inside Moyuk Sapporo (Tanukikoji 4-chome) so Kayden can watch rockhopper penguins hop up-close indoors!",
    afternoon: "12:30 PM – 3:30 PM (Warm 69°F & Dry Afternoon — Fresh Highlights Since You Did Sheep Hill, Odori & Chocolate Factory Yesterday!):<br>• <strong>Option A — Maruyama Park, Hokkaido Shrine & Maruyama Zoo (15-min taxi):</strong> Flat cedar paths to Hokkaido Shrine (eat hot grilled <em>Hangansama</em> mochi at the Rokkatei shrine teahouse!) + right next door is <strong>Maruyama Zoo (円山動物園)</strong> with an underwater glass tunnel where polar bears & seals swim overhead, red pandas & elephants!<br>• <strong>Option B — Hokkaido University Golden Ginkgo Avenue (7-min flat walk north of hotel):</strong> Stroll the golden autumn ginkgo tunnel (<em>Kita-13-jo</em>) & grab campus farm milk gelato at <em>Marche Café & Labo</em>!",
    evening: "4:00 PM (Warm & 100% Dry Evening): Take a 10-minute taxi to the historic red-brick <strong>Sapporo Beer Museum</strong>, restock Moony diapers or toddler snacks next door at <strong>Akachan Honpo baby megastore (Ario Mall)</strong>, and enjoy dinner at <strong>Garden Grill / Kessel Hall</strong> OR hit <strong>Nemuro Hanamaru Sushi (Stellar Place 6F)</strong>!",
    dining: {
      breakfast: "<strong>SKY J 35F Hotel Panoramic Buffet</strong> OR <strong>Rokkatei / Kinotoya Bake / Sandria Sandwich Machine (Sapporo Station)</strong>.",
      lunch: "1) <strong>Soup Curry Suage+ or GARAKU</strong> (Charcoal-grilled chicken & sweet Hokkaido pumpkin, carrots & potatoes; choose <strong>Spice Level 0/1</strong> for zero heat); 2) <strong>Rokkatei Sapporo Honten 2F Salon</strong> (Crispy pizzas, hot soufflé pancakes & strawberry shortcake); 3) <strong>Daimaru Sapporo 8F Restaurant Floor</strong> (Spacious booths with Tempura Tsunahachi, Tonkatsu & Kyoto Udon).",
      dinner: "1) <strong>Garden Grill or Kessel Hall at Sapporo Beer Garden</strong> (Upscale glass-walled booths at Garden Grill or iconic 1912 brick hall at Kessel Hall—grain-fed lamb, Hokkaido roast beef & veggies); 2) <strong>Nemuro Hanamaru Sushi (根室花まる — JR Stellar Place 6F)</strong> (Right in your hotel building! Pull a paper queue ticket at 3:45–4:00 PM to skip the dinner line); 3) <strong>Butadon Ippin (Stellar Place 6F) or Ario Mall Family Dining</strong>.",
      kidSafeOrder: "<strong>For Kayden & Maria:</strong> Spice Level 1 (zero chili heat) chicken/veggie soup curry or udon at lunch; roasted Hokkaido potatoes, sweet corn & well-done beef/lamb at Sapporo Beer Garden, OR sweet omelet (<em>Tamago</em>), boiled shrimp, udon & fries at Hanamaru Sushi!"
    },
    weatherStrategy: "🌡️ Live Monday Forecast Update: Almost all rain fell before 8:00 AM while you slept! From 10:30 AM onward, Sapporo jumps to an unseasonably warm 69°F (21°C) and stays dry all afternoon and evening (0.0 mm from 3 PM to midnight)—making this afternoon ideal for Maruyama Zoo / Hokkaido Shrine or Hokkaido University Ginkgo Avenue!",
    transit: "Sapporo Station, Chi-Ka-Ho, Odori, and Susukino/Tanukikoji are connected by a continuous, flat, heated underground walkway with elevators.",
    additionalOptions: "🐧 <strong>AOAO SAPPORO Urban Aquarium (Tanukikoji 4-chome, Open 10 AM – 10 PM):</strong> Right on covered Tanukikoji Street—rockhopper penguins, glowing jellyfish tanks, and an indoor bakery bar.<br>🐑 <strong>Sapporo Satoland (サッポロさとらんど Fureai Farm):</strong> If your mom & Kayden still want to hand-feed sheep & goats from a ¥100 cup (10:30–11:30 AM or 1:30–3:30 PM), Satoland is a 25-min taxi northeast!"
  },
  {
    day: 5,
    date: "Tuesday, Oct 20, 2026",
    location: "Eniwa Sheep Farm (Ecorin Village) & Sapporo",
    weather: "⛅ 13° / 6°C (56° / 42°F) • 0% Rain All 24 Hours!",
    morning: "<strong>🌅 Early Bird Window (6:30 AM – 9:00 AM — Since You're Up Early!):</strong><br>• <strong>6:30 AM Breakfast:</strong> Head up to <strong>35F SKY J Panoramic Buffet</strong> at your hotel (opens 6:30 AM sharp!), grab fresh sandwiches from the <strong>24h Sandria Machine</strong> in JR Sapporo Station West Concourse, OR take the free hotel shuttle to <strong>Sapporo Curb Market (場外市場 — Kitano Gurume-tei opens 7:00 AM)</strong> if you didn't go yesterday!<br>• <strong>7:30 AM – 8:45 AM Optional Early Stroll:</strong> Walk 7 minutes flat north of your hotel to <strong>Hokkaido University Golden Ginkgo Avenue (北大イチョウ並木)</strong>—open 24/7 and peaceful in the morning sun!<br><br><strong>🐑 9:15 AM – 12:30 PM (Kumi's Eniwa Sheep Farm Trip — Ecorin Village / えこりん村):</strong><br>• <strong>9:15 AM Quick Front Desk Check:</strong> Ask the JR Tower Hotel front desk to call <strong>Ecorin Village Welcome Center (<code>0123-34-7800</code>)</strong> at 9:30 AM to check: <em>1) Which pasture area near the Welcome Center has the main flock of ~1,000 sheep out today? 2) Are any guided Farm Field Tours / Sheepdog Walks running this morning?</em><br>• <strong>9:30 AM Easy Transit:</strong> Board the southbound <strong>JR Rapid Airport Express</strong> from Sapporo Station to <strong>Eniwa Station (恵庭駅)</strong> (<strong>just 23 mins</strong>, ¥740) + an <strong>8-minute taxi (~¥1,500)</strong> from Eniwa Station East Exit (or take a 35-min door-to-door Uber/taxi straight from the hotel).<br>• <strong>What to Do at Ecorin Village (9:30 AM – 12:30 PM, Free Entry):</strong> See the <strong>~550–1,000 Poll Dorset sheep</strong> grazing across the wide outer meadows &amp; <em>Sheep Sheep Camping Field</em>, visit the <strong>Welcome Center (ウェルカムセンター)</strong> for <strong>hands-on wool crafts / needle-felting (羊毛クラフト体験)</strong> using real wool sheared from Ecorin's own sheep, and eat <strong>Hokkaido raw-milk soft serve (生乳ソフトクリーム, 10 AM – 3 PM)</strong>! <em>(Expectation Note: The old paid Midori no Makiba theme-park ranch &amp; Tomato Forest are closed and shearing is May-only—if Kumi &amp; Kayden also want up-close animal petting in Eniwa, pair with <strong>Murakami Farm / むらかみ牧場</strong> just 10 mins away!)</em>",
    afternoon: "<strong>🍕 11:15 AM – 12:30 PM (Farm Lunch at Rakuda-ken):</strong> Enjoy an early, zero-wait family lunch right inside Ecorin Village at <strong>Restaurant Rakuda-ken (らくだ軒, Open 10:00 AM – 3:00 PM)</strong>—famous for fresh stone-oven Hokkaido cheese &amp; Margherita pizzas, homemade fresh pasta (生パスタ), and kids plates!<br><br><strong>🚆 12:45 PM – 4:00 PM (Back to Sapporo — Skipping Otaru for an Unhurried Afternoon!):</strong> Ride the <strong>23-minute JR Rapid Airport train</strong> from Eniwa Station straight back to <strong>Sapporo Station</strong> while Kayden stroller-naps! Spend a relaxed final Hokkaido afternoon in Sapporo:<br>• <strong>Option A:</strong> <strong>Maruyama Park, Hokkaido Shrine &amp; Maruyama Zoo (円山動物園)</strong> (15-min taxi; underwater polar bear/seal tunnel, red pandas &amp; hot grilled mochi at the shrine teahouse) OR <strong>Hokkaido University Golden Ginkgo Avenue</strong>.<br>• <strong>Option B (If Kumi Wants ¥100 Cup-Feeding of Sheep):</strong> <strong>Sapporo Satoland (サッポロさとらんど Fureai Farm)</strong> runs hands-on sheep &amp; goat cup-feeding from <strong>1:30 PM – 3:30 PM</strong> (25-min taxi).<br>• <strong>Option C:</strong> Afternoon hotel nap + souvenir shopping at <strong>Daimaru Sapporo B1F &amp; JR Stellar Place</strong> (you can buy <strong>LeTAO Double Fromage cheesecake</strong> right at Daimaru B1F or CTS Airport tomorrow—no Otaru trip needed!).",
    evening: "4:30 PM: Celebrate your final evening in Hokkaido! Choose a private-room King Crab feast (<strong>Hyosetsu no Mon / Kani Shogun</strong>), conveyor-belt sushi at <strong>Nemuro Hanamaru (JR Stellar Place 6F)</strong> or <strong>Kaitenzushi Toriton</strong>, OR <strong>Sapporo Beer Garden (Garden Grill / Kessel Hall)</strong>!",
    dining: {
      breakfast: "<strong>Early Bird (6:30 AM+):</strong> 1) <strong>35F SKY J Panoramic Buffet</strong> inside JR Tower Hotel (opens 6:30 AM); 2) <strong>24h Sandria Fresh Sandwich Machine</strong> &amp; <strong>Doutor / Starbucks (Sapporo Station)</strong>; 3) <strong>Kitano Gurume-tei at Sapporo Curb Market (北のグルメ亭 — opens 7:00 AM)</strong> if you want grilled Hokke fish, crab soup &amp; cantaloupe before heading to Eniwa!",
      lunch: "<strong>In Eniwa (11:15 AM):</strong> 1) <strong>Restaurant Rakuda-ken at Ecorin Village (らくだ軒 えこりん村, 10 AM – 3 PM)</strong> (Run by the Hokkaido team behind Bikkuri Donkey—stone-oven Hokkaido pizzas, homemade fresh <em>Nama-Pasta</em> with Ecorin tomato sauce, cheese fondue &amp; kids plates); 2) <strong>Milk no Atelier at Murakami Farm (みるくのアトリエ / むらかみ牧場, 10 mins away)</strong> (Farm-made mozzarella pizza &amp; award-winning rich milk gelato); 3) <strong>Roadside Station Hana Road Eniwa (道と川の駅 花ロードえにわ)</strong> (Famous Eniwa vegetable curries &amp; fresh bakery bread).",
      dinner: "<strong>Final Night in Sapporo (5:00 PM):</strong> 1) <strong>Hyosetsu no Mon (氷雪の門) or Kani Shogun (かに将軍)</strong> (Private-room King Crab banquet if you want crab tonight!); 2) <strong>Kaitenzushi Toriton (回転寿し トリトン)</strong> or <strong>Nemuro Hanamaru Sushi (JR Stellar Place 6F)</strong>; 3) <strong>Garden Grill / Kessel Hall at Sapporo Beer Garden</strong> or <strong>Soup Curry GARAKU / Suage+</strong> (whichever you didn't do on Monday!).",
      kidSafeOrder: "<strong>For Kayden &amp; Maria:</strong> At <em>Rakuda-ken</em> in Eniwa, order the fresh stone-oven Margherita/cheese pizza, mild tomato/cream fresh pasta, and Hokkaido raw-milk soft serve (100% pasteurized &amp; cooked!)."
    },
    weatherStrategy: "☀️ 0% Rain Probability (0.0 mm All 24 Hours in Both Sapporo &amp; Eniwa): Tuesday is 100% dry from morning to night (56°F / 13°C)—crisp, sunny autumn weather for seeing the sheep pastures in Eniwa! Dress in your 3-layer system (Heattech + Fleece + Packable Down) as open farm pastures feel a few degrees breezier than downtown Sapporo.",
    transit: "🚕 <strong>Tap-and-Show Taxi Card at Eniwa Station (or from Hotel):</strong> Show the driver: <strong>「えこりん村のウェルカムセンターまでお願いします」</strong> (<em>'Ecorin-mura no Werukamu Sentā made onegai shimasu'</em> — Please take us to the Ecorin Village Welcome Center). It is a 23-min JR Rapid Airport train ride from Sapporo Station to Eniwa Station + an 8-min taxi!",
    pregnancyTip: "🧳 No 2-Day Duffle Needed! Because you fly into Osaka Itami (ITM) tomorrow and take the direct Osaka–Kyoto Airport Limousine Bus, you keep all your suitcases with you tonight and check them for FREE on JAL Flight JL 2008 tomorrow!",
    additionalOptions: "🐄 <strong>Bonus Eniwa Dairy Farm (10 Mins from Ecorin Village) — Murakami Farm (むらかみ牧場):</strong> Located at 209-1 Toiso, Eniwa (Open 9:00 AM – 5:00 PM, Phone: <code>0123-32-5093</code>). If Kumi &amp; Kayden want up-close animal viewing (sheep 'You-chan', calves &amp; goats) plus Hokkaido's famous farm-fresh milk soft serve at <em>Gelateria Mirukuru</em>, it's a quick 10-min taxi hop in Eniwa!"
  },
  {
    day: 6,
    date: "Wednesday, Oct 21, 2026",
    location: "Sapporo ➔ CTS Airport Wonderland ➔ Osaka ➔ Kyoto",
    weather: "🌦️ 18°C (65°F) Sapporo ➔ 28°C (83°F) Osaka/Kyoto",
    morning: "<strong>9:45 AM – 10:45 AM (100% Indoor Checkout &amp; Early Train to CTS Airport Wonderland!):</strong><br>• Check out of JR Tower Hotel Nikko and take the direct indoor elevator into Sapporo Station (bypassing Sapporo's morning drizzle 100% indoors!).<br>• Board the <strong>JR Rapid Airport Express</strong> (37 mins to New Chitose Airport B1F; reserve Car 4 'u-seat' for luggage racks &amp; guaranteed seats).<br>• <strong>10:45 AM Step 1 at CTS (Domestic 2F — Drop Bags &amp; Pack Heavy Jackets Away!):</strong> Before dropping your suitcases at the <strong>JAL 2F Check-In / Self-Baggage Drop</strong> (free 20 kg / 44 lbs per person!), <strong>stuff your heavy Hokkaido down jackets inside your checked bags</strong> (Osaka is a warm 75°F–82°F!). Grab a free airport stroller right at the 2F counter!<br><br><strong>🍜 11:00 AM – 12:15 PM (Step 2 — Beat the Noon Lunch Rush on 3F Gourmet World):</strong><br>• Eat right at 11:00 AM with zero wait at <strong>Kantaro Sushi (函太郎 3F)</strong> or the <strong>3F Panoramic Food Court</strong> (huge glass windows where Kayden can watch JAL/ANA jets &amp; baggage trucks on the runway!), OR hit <strong>Hokkaido Ramen Dojo (北海道ラーメン道場 3F)</strong> for Ebisoba Ichigen / Keyaki miso ramen!",
    afternoon: "<strong>🍫 12:15 PM – 2:20 PM (Step 3 — Kumi's CTS 'Airport Theme Park' Loop for Kayden on 3F &amp; 2F!):</strong><br><em>(Note: The old Doraemon &amp; Hello Kitty paid zones closed for terminal renovation, so head straight to these 5 open family hits!)</em><br>• <strong>1) Royce' Chocolate World &amp; Bakery (3F Smile Road — Free!):</strong> Watch robotic machines mold hollow chocolate bears through giant glass windows + buy warm chocolate-filled melon bread at Royce' Bakery!<br>• <strong>2) Ozora Aviation Museum (大空ミュージアム 3F — Free!):</strong> Toddlers can sit inside a giant jet tire, play at the flight simulator cockpit &amp; wear mini pilot uniforms!<br>• <strong>3) Steiff Nature Walk (3F) &amp; Gundam Base Annex (3F):</strong> Walk past life-sized plush polar bears &amp; teddy bears on 3F Smile Road.<br>• <strong>4) Pokémon Store (Domestic 2F):</strong> Grab the CTS-exclusive <strong>'Pilot Pikachu' &amp; 'Cabin Crew Pikachu'</strong> plushies!<br>• <strong>5) Calbee+ Hot 'Poteriko' &amp; Kinotoya Soft-Serve (Domestic 2F):</strong> Order freshly fried, hot <em>Poteriko</em> potato sticks (¥340—toddler heaven!), Kinotoya's towering milk soft-serve, and LeTAO/Royce' gifts!<br><br><strong>✈️ 2:20 PM Security ➔ 3:10 PM Flight JL 2008 (CTS ➔ Osaka Itami ITM):</strong> Breeze through 2F JAL Domestic Security at 2:20 PM (liquids/toddler milk allowed through domestic security!). Land at Osaka Itami at 5:05 PM (warm 75°F–82°F!) and walk 50 feet outside to <strong>Airport Limousine Bus Stop #15</strong> (55-min direct coach to Kyoto Station!).",
    evening: "6:15 PM: Osaka Airport Limousine Bus drops you right at Kyoto Station Hachijo Exit (South Side). Because an evening rain shower passes over Kyoto between 6:00 PM and 10:00 PM (1.0–1.4 mm/hr, stopping by 10:30 PM), either grab dinner/bento right inside Kyoto Station when you step off the bus OR pop compact umbrellas (or a ¥600 2-min taxi) for the 4-minute flat walk (350m) into KotoStay 京粋庵 2BR Private Suite (Conf: HMRQJQQTC3)!",
    dining: {
      breakfast: "<strong>Sapporo Station Bakery (Little Mermaid or Sandria)</strong> + grab extra Hokkaido milk & snacks for the airport train.",
      lunch: "<strong>New Chitose Airport (CTS Domestic 3F — World-Class Dining):</strong> 1) <strong>Hokkaido Ramen Dojo (北海道ラーメン道場)</strong> (10 famous ramen shops including Ebisoba Ichigen & Keyaki butter-corn miso ramen with open family tables); 2) <strong>Drive-In Yoshimi (ドライブインいとう)</strong> (Sweet-soy roasted pork bowls & kids plates with zero line); 3) <strong>Kantaro Gourmet Kaitenzushi (函太郎 3F)</strong> (Booth seating overlooking the runway—Kayden can watch jets take off while eating!).",
      dinner: "<strong>Kyoto Station (4-Min Flat Walk from KotoStay — Pro-Tip: Eat or Grab Bento at 6:15 PM to Beat the 6–10 PM Shower!):</strong> 1) <strong>Katsukura Tonkatsu (名代とんかつ かつくら The Cube 11F)</strong> (Tender pork/shrimp cutlets & barley rice; kids get a mini mortar & pestle to grind sesame seeds!); 2) <strong>Kyoto Ramen Koji (京都拉麺小路 10F)</strong> (9 famous regional ramen shops on one stroller-friendly floor); 3) <strong>Tagoto or Matsubaya (Kyoto Porta B1F)</strong> (Soothing warm Kyoto yuba/duck udon & tempura bowls); 4) <strong>Isetan B1F / Hachijo Asty Road Bento Takeout</strong> (Grab Wagyu bento boxes, dashimaki egg rolls & strawberries right when your bus arrives at 6:15 PM so once you walk into KotoStay, you stay cozy indoors all night!).",
      kidSafeOrder: "<strong>For Kayden & Maria:</strong> Grab warm <em>551 Horai Butaman</em> (Osaka's famous steamed pork buns right inside Osaka Itami arrival terminal!) for the bus ride, then at Katsukura in Kyoto order the <em>Hire-katsu</em> (ultra-tender lean pork tenderloin), miso soup, and barley rice."
    },
    weatherStrategy: "🌡️ +17°F Temp Jump + 6:00–10:00 PM Kyoto Shower Strategy: Sapporo's morning drizzle (0.7–1.2 mm/hr) is bypassed 100% indoors via your hotel elevator to the airport train! When you land at Osaka Itami at 5:05 PM, it is a warm 75°F (after an 82°F afternoon high). In Kyoto, an evening rain band (1.0–1.4 mm/hr) falls from 6:00 PM to 10:00 PM before clearing 100% dry for Thursday & Friday. Keep compact umbrellas at the top of your carry-on bag (or grab dinner/bento inside Kyoto Station right off the bus at 6:15 PM!).",
    transit: "🧳 Why Osaka Itami (ITM) + Limousine Bus Eliminates the '2-Day Duffle' Hassle: JAL flies your suitcases to Osaka for FREE, and the Osaka Itami Limousine Bus (Stop #15, ¥1,340/adult, every 20 mins) loads all large suitcases and strollers under the bus and drops you on the exact same side of Kyoto Station as your Airbnb!"
  },
  {
    day: 7,
    date: "Thursday, Oct 22, 2026",
    location: "Early Arashiyama Bamboo ➔ Kinkaku-ji (Golden Temple) & Flex",
    weather: "☀️ 21° / 15°C (70° / 59°F) • 0% Rain (0.0 mm All Day)!",
    morning: "<strong>🎋 6:00 AM – 8:45 AM (Early-Bird Arashiyama Bamboo Forest &amp; 8:00 AM Farmhouse Breakfast — Zero Crowds!):</strong><br>• <strong>How to Go Right Now (2 Easy Options):</strong><br>&nbsp;&nbsp;1) <strong>By Uber (20 mins door-to-door):</strong> Paste <code>35.01755, 135.67465</code> into Uber (drops you right at the paved entrance to <strong>Arashiyama Bamboo Grove / 竹林の小径</strong> by Nonomiya Shrine!). Show driver: <strong>「嵐山の竹林の小径（野宮神社の近く）までお願いします」</strong>.<br>&nbsp;&nbsp;2) <strong>By JR Train (16 mins, ¥240):</strong> Walk 4 mins to Kyoto Station (Platform 32/33) and ride the <strong>JR Sagano/San-in Line</strong> (departures at 5:52, 6:09, 6:23, 6:37 AM) to <strong>Saga-Arashiyama Station</strong> (10-min flat walk to the bamboo grove).<br>• <strong>6:15 AM – 8:00 AM:</strong> Stroll the <strong>100% flat, paved Arashiyama Bamboo Grove</strong> with zero crowds, then walk down to scenic <strong>Togetsukyo Bridge (渡月橋)</strong> along the Katsura River!<br>• <strong>☕ 8:00 AM – 8:45 AM Breakfast (Opens 8:00 AM Sharp!):</strong> Walk 3 mins from the bamboo grove into <strong>Bread, Espresso &amp; Arashiyama Garden (パンとエスプレッソと嵐山庭園)</strong>—a 200-year-old thatched-roof farmhouse serving warm iron-skillet French toast, fluffy <em>Mou</em> butter bread, bacon/egg paninis &amp; lattes!<br><br><strong>🏯 8:45 AM – 10:30 AM (15-Min Taxi to Kinkaku-ji / 金閣寺 — The Golden Pavilion by the Mirror Lake!):</strong><br>• Because <strong>Kinkaku-ji</strong> is also in Northwest Kyoto (just a <strong>15-minute taxi, ~¥2,200</strong> from Arashiyama) and <strong>opens at 9:00 AM sharp</strong>, hop in an Uber/taxi at 8:45 AM to coordinates <code>35.03915, 135.72995</code> (Show driver: <strong>「金閣寺までお願いします」</strong>).<br>• Arrive right at 9:00 AM opening (¥500) to see the <strong>Golden Pavilion shimmering across the Mirror Pond (鏡湖池)</strong> in the morning sun before tour buses arrive! <em>(Stroller Tip: The entire viewing path around the Golden Pavilion &amp; lake is flat gravel; two adults can briefly lift the stroller up the short exit steps at the end).</em>",
    afternoon: "<strong>🦌 11:00 AM – 3:30 PM (Midday Choice — Lunch + Afternoon Bed Nap OR Nara Deer Park):</strong><br>• <strong>Option A (Relaxed Pacing — Save Nara for Tomorrow):</strong> Grab an early 11:00 AM lunch near Kinkaku-ji or back at <strong>Kyoto Station 11F</strong>, then take a luxury <strong>12:30 PM – 3:00 PM bed nap at KotoStay</strong> after waking up at 5:00 AM! <em>(Anyone awake at 2:00 PM can watch the <strong>Jidai Matsuri Samurai Parade</strong> arrive at Heian Shrine!).</em><br>• <strong>Option B (High-Energy — Do Nara Deer Park Today!):</strong> Take a taxi back to Kyoto Station and board the <strong>35-minute Kintetsu Limited Express 'Nap Train'</strong> to <strong>Kintetsu-Nara Station (Exit 1 Elevator)</strong> to feed the bowing deer on the flat lawn at Noborioji Park!",
    evening: "4:30 PM: Stroll the lantern-lit Gion Shirakawa Canal or enjoy an early family dinner in Gion / Kyoto Station before James heads out for the once-a-year <strong>6:00 PM Kurama Fire Festival</strong>!",
    dining: {
      breakfast: "<strong>8:00 AM in Arashiyama:</strong> 1) <strong>Bread, Espresso &amp; Arashiyama Garden (パンとエスプレッソと嵐山庭園, opens 8:00 AM)</strong> (Warm French toast, fluffy <em>Mou</em> cube bread, egg/ham paninis &amp; coffee in a 200-year-old farmhouse courtyard); 2) <strong>% Arabica Kyoto Arashiyama (opens 9:00 AM by Togetsukyo Bridge)</strong>.",
      lunch: "<strong>After Kinkaku-ji (11:00 AM):</strong> 1) <strong>Itadaki (いただき, 3 mins walk from Kinkaku-ji)</strong> (Cozy, family-friendly Kyoto hamburger steak, crispy shrimp fry, rice &amp; miso soup sets); 2) <strong>Kinkaku-ji Itcho (金閣寺 一丁) or Omen Nippon</strong> (Warm soothing Kyoto udon noodles &amp; tempura); 3) <strong>Return to Kyoto Station 11F (Katsukura Tonkatsu / Ramen Koji 10F)</strong> right before your KotoStay nap!",
      dinner: "1) <strong>Gion Tanto (祇園たんと) or Donguri (どんぐり)</strong> (Savory Kyoto okonomiyaki pancakes, yakisoba noodles &amp; teppanyaki beef/corn); 2) <strong>Gion Karyo (祇園かりょう)</strong> (Seasonal Kyoto Kaiseki with private table rooms); 3) <strong>Kyoto Station 11F Restaurant Floor</strong> (4 mins from KotoStay—super easy before James leaves for Kurama!).",
      kidSafeOrder: "<strong>For Kayden &amp; Maria:</strong> Warm fluffy <em>Mou</em> butter bread &amp; French toast at <em>Bread, Espresso &amp;</em> (8 AM); gold-leaf vanilla soft-serve outside Kinkaku-ji; and warm udon or <em>Hire-katsu</em> pork tenderloin at lunch!"
    },
    weatherStrategy: "☀️ Clear Sunny 70°F (21.2°C) &amp; 0.0 mm Rain All 24 Hours (0% Rain Probability): Today is 100% dry from midnight to midnight (60°F at 6 AM ➔ 67°F at 9 AM ➔ 70°F at 12–3 PM ➔ 64°F at 6 PM)—10/10 sunshine to make the Golden Pavilion (Kinkaku-ji) sparkle over the Mirror Pond at 9:00 AM! 🎉 Traffic Note: Oike &amp; Kawaramachi streets in central Kyoto close 11:30 AM – 3:00 PM for Jidai Matsuri, so heading back to Kyoto Station / KotoStay around 10:45–11:15 AM beats the parade closures!",
    additionalOptions: "⚔️ <strong>Jidai Matsuri Samurai Parade (2:00 PM – 2:30 PM at Heian Shrine):</strong> Watch 2,000 participants dressed as samurai warriors, shoguns on horseback, and Heian nobles arrive at Heian Shrine!<br>🔥 <strong>James's Solo Night Quest — Kurama Fire Festival (Kurama-no-Hi Matsuri, 6:00 PM – 9:30 PM):</strong> Held once a year on Oct 22 up in the mountain village of Kurama (30-min Eizan Railway ride from Demachiyanagi Station). Locals carry massive 100-kg flaming pine torches through narrow village streets! <em>(Tip for James: Kurama drops to ~50°F tonight—pack your fleece/down layer!)</em>",
    pregnancyTip: "Pairing Arashiyama Bamboo Forest (6:15 AM) with Kinkaku-ji Golden Pavilion (9:00 AM) saves hours of cross-city transit because both sit in Northwest Kyoto just 15 minutes apart by taxi!"
  },
  {
    day: 8,
    date: "Friday, Oct 23, 2026",
    location: "Early Kiyomizu-dera ➔ Nara Deer Park & Fushimi Inari",
    weather: "🌤️ 21° / 12°C (70° / 53°F) • 0.0 mm Dry 6 AM – 9:30 PM!",
    morning: "<strong>🌅 6:15 AM – 9:30 AM (Early-Bird Sunrise Kiyomizu-dera, Sannenzaka/Ninenzaka &amp; 8:00 AM Breakfast!):</strong><br>• <strong>Uber Coordinates (Before 8:00 AM — Top of Chawan-zaka, 60m from Stroller Ramp):</strong> Paste <code>34.99455, 135.78215</code> into Uber (or backup 24/7 upper drop-off: <code>34.99585, 135.78135</code>). Show driver: <strong>「茶碗坂の一番上（清水寺の入り口のすぐ下）までお願いします」</strong>.<br>• <strong>6:15 AM – 7:30 AM:</strong> Enter <strong>Kiyomizu-dera</strong> (opens 6:00 AM sharp, ¥500) via the paved ramp on the right side of the orange gate—enjoy the wooden stage with zero crowds!<br>• <strong>7:30 AM – 8:00 AM:</strong> Walk gently downhill along empty <strong>Sannenzaka &amp; Ninenzaka</strong> for family photos in front of <strong>Yasaka Pagoda (法観寺)</strong>.<br>• <strong>☕ 8:00 AM – 9:15 AM Sit-Down Breakfast (0-Min Wait at 8 AM Opening!):</strong> Walk right into <strong>Maeda Coffee Kōdai-ji (前田珈琲 高台寺店, opens 8 AM)</strong> for hot scrambled eggs, thick butter toast, bacon &amp; coffee, OR the 100-year-old tatami townhouse <strong>Starbucks Kyoto Nineizaka Yasaka Chaya (opens 8 AM)</strong>!",
    afternoon: "<strong>🦌 10:00 AM – 3:30 PM (Nara Deer Park via 35-Min Kintetsu 'Nap Train' + Fushimi Inari on the Way Back!):</strong><br>• <strong>10:00 AM Train from Kyoto Station:</strong> Board the <strong>Kintetsu Limited Express (近鉄特急)</strong> to <strong>Kintetsu-Nara Station (近鉄奈良駅)</strong> (<strong>35 mins non-stop</strong>, ¥1,280/adult, 100% reserved cushioned seats—Kayden naps on the train!). Take the <strong>Exit 1 Elevator</strong>—the calm bowing deer are waiting on the flat grass at <strong>Noborioji Park</strong> just 200m away!<br>• <strong>4 Toddler Deer Rules for Kayden:</strong> 1) Feed the <strong>calm deer lying on the grass at Noborioji Park</strong> (not the pushy cart deer); 2) <strong>Hide the ¥200 cracker stack in a zippered bag immediately</strong> and hand out 1 cracker at a time; 3) Feed the first deer from the stroller or held in your arms; 4) Show <strong>both empty open palms ('All Gone!')</strong> when done!<br>• <strong>⛩️ 3:00 PM Stop on the Return — Fushimi Inari Taisha (伏見稲荷大社):</strong> On the way back toward Kyoto Station, stop at <strong>Fushimi Inari</strong> to walk the flat, paved lower <em>Senbon Torii</em> (Thousand Red Gates) loop (15–20 mins)!",
    evening: "5:30 PM – 6:00 PM: Celebrate your final night in Kyoto with A5 Kuroge Wagyu Sukiyaki at <strong>Moritaya JR Kyoto Isetan 11F</strong> (4-min walk from KotoStay) OR visit <strong>Kōdai-ji Temple's Opening Night Autumn Illumination</strong>!",
    dining: {
      breakfast: "<strong>8:00 AM in Higashiyama (After Sunrise Kiyomizu-dera):</strong> 1) <strong>Maeda Coffee Kōdai-ji (前田珈琲 高台寺店, opens 8:00 AM)</strong> (Hot scrambled eggs, thick toast, ham, salad &amp; coffee); 2) <strong>Starbucks Kyoto Nineizaka Yasaka Chaya (opens 8:00 AM)</strong> (Tatami rooms in a 100-year-old townhouse); 3) <strong>Inoda Coffee Kiyomizu Branch (opens 9:00 AM on Sannenzaka)</strong>.",
      lunch: "<strong>In Nara (Right by Kintetsu-Nara Station / Higashimuki Arcade):</strong> 1) <strong>Mentsu-an (麺闘庵) or Kamaiki Udon</strong> (Warm soothing udon noodles—Mentsu-an serves udon in a sweet tofu pouch stamped with a cute deer print!); 2) <strong>Tonkatsu Ganko Nara (とんかつ がんこ 奈良店)</strong> (Spacious booths right on Higashimuki Arcade—crispy pork/shrimp cutlets &amp; rice); 3) <strong>Mahoroba Daibutsu Pudding (まほろば大仏プリン, inside Kintetsu-Nara Station)</strong> (Silky custard pudding in cute Buddha jars!).",
      dinner: "1) <strong>Moritaya JR Kyoto Isetan 11F (モリタ屋)</strong> (150-year-old Kuroge Wagyu sukiyaki &amp; shabu-shabu overlooking Kyoto Tower; Phone: +81 75-365-7788); 2) <strong>Nishiki Warai (錦わらい Kyoto Station 11F)</strong> (Casual spacious booths right next door on 11F—Kyoto okonomiyaki, yakisoba &amp; teppanyaki); 3) <strong>Wakana / Kyoto Isetan 10F–11F Dining Floor</strong> (20+ spacious restaurants on the same floor with high chairs &amp; baby lounge).",
      kidSafeOrder: "<strong>For Kayden &amp; Maria:</strong> Warm udon + <em>Daibutsu Custard Pudding</em> at lunch in Nara; in Moritaya's sweet soy-mirin sukiyaki pot at dinner, simmer the thick wheat udon noodles, tofu, carrots, and tender Wagyu slices (skip the raw egg dip for Maria &amp; Kayden!)."
    },
    weatherStrategy: "☀️ 0.0 mm Rain All Morning, Afternoon &amp; Evening (0% Rain Chance Until 9:30 PM, 70°F / 21°C): Crisp 53°F early morning warming to a sunny 70°F afternoon—100% dry all day for sunrise Kiyomizu-dera, Nara Deer Park, Fushimi Inari, and Kōdai-ji's Opening Night Illumination! (A brief 1.4 mm shower doesn't arrive until 10:00 PM at night).",
    transit: "Take the Kintetsu Limited Express (近鉄特急) from Kyoto Station to Kintetsu-Nara Station (35 mins, all seats reserved). For Fushimi Inari, JR Inari Station is 5 mins (2 stops) from Kyoto Station on the JR Nara Line.",
    additionalOptions: "✨ <strong>Opening Night — Kōdai-ji Temple Autumn Night Illumination (5:00 PM – 9:30 PM, ¥800):</strong> Friday Oct 23 is the official 2026 season opening night! Features a glowing bamboo forest, 3D Zen rock garden light projection, and crimson maples reflected like glass in the mirror-still <em>Garyō-ike</em> pond.<br>🚂 <strong>Toddler Bonus — Kyoto Railway Museum &amp; SL Steam Train (Umekoji Park):</strong> Just 1 train stop (or 5-min taxi) from your Kyoto Airbnb—Kayden can ride a real puffing coal-fired Steam Locomotive (¥300, 10-min loop) and climb inside retired Shinkansen bullet trains!"
  },
  {
    day: 9,
    date: "Saturday, Oct 24, 2026",
    location: "Kyoto ➔ Kamakura Arrival",
    weather: "🌧️ 20°C (67°F) Kyoto ➔ 18°C (64°F) Kamakura • Rain on Train Day",
    morning: "9:45 AM (Rain-Free Checkout Hack!): Because morning rain falls in Kyoto (1.3–2.3 mm/hr from 6–9 AM, easing to 0.3–0.7 mm/hr at 10–11 AM), call a 2-minute Uber / GO Taxi (~¥600 / $4) right from KotoStay's front door to Kyoto Station Hachijo Taxi Drop-Off so your suitcases & stroller stay 100% dry! Pick up gourmet Ekiben bento boxes inside the station and board <strong>Shinkansen Nozomi #116 at 11:05 AM</strong> to Shin-Yokohama (arrives 1:15 PM).",
    afternoon: "Transfer indoors at Shin-Yokohama via station elevators to JR Yokohama Line (12 mins to Yokohama) ➔ JR Yokosuka Line (25 mins to Kamakura). In Kamakura, the heavy morning rain eases to light rain (1.3 mm/hr at 3 PM, 0.3–0.6 mm/hr from 5 PM onward) right as you arrive! Exit Kamakura Station West Exit (Onari Exit) and pop umbrellas for the 60-second (100m) flat walk into KAMAKURA HOTEL!",
    evening: "4:00 PM: Relax dry indoors in the hotel's complimentary green-tea lounge! Enjoy a cozy dinner right next door at Garden House (2-min walk), Kamakura Akimoto (inside the station square), or a 3-min door-to-door taxi to Matsubara-an.",
    dining: {
      breakfast: "<strong>Heat Pastries / Eggs in Your KotoStay Kitchen</strong> OR <strong>Kyoto Station Hachijo Exit Cafes (Hoshino Coffee or Manneken Belgian Waffles)</strong> inside the dry station concourse.",
      lunch: "<strong>Gourmet Shinkansen Ekiben Feast (Buy inside Kyoto Station 'Ekiben Nigiwai' before boarding):</strong> 1) <strong>Shinkansen Bullet Train Ceramic Bento</strong> (Shaped like a real bullet train—Kayden keeps the ceramic train box!); 2) <strong>Kobe/Kyoto Wagyu Sukiyaki Bento</strong> (Pull the string to self-heat the beef & rice steaming hot at your seat!); 3) <strong>Kyoto Dashimaki Egg & Chicken Bento</strong>.",
      dinner: "1) <strong>Garden House Kamakura (ガーデンハウス鎌倉)</strong> (Literally 2 mins from your hotel! Cozy indoor booths serving wood-fired pizza, roast chicken, fries & craft beer); 2) <strong>Kamakura Akimoto (鎌倉 秋本)</strong> (Right at Kamakura Station Square—elevator access, wide tables, crispy tempura & cooked Shirasu bowls); 3) <strong>Kamakura Matsubara-an (鎌倉 松原庵)</strong> (70-year-old seaside wooden villa serving handmade duck soba, fluffy rolled omelet & crispy tempura; take a 3-min taxi door-to-door, Phone: +81 467-61-3838).",
      kidSafeOrder: "<strong>For Kayden & Maria:</strong> At Garden House, order Margherita pizza & fries; at Matsubara-an, order <em>Dashimaki Tamago</em> (warm rolled egg) and <em>Tempura Seiro</em> (shrimp & sweet vegetable tempura with soba)."
    },
    weatherStrategy: "☔ Smart Rain-Day Timing: Saturday's heaviest rain in Kamakura (3–4 mm/hr) falls between 8:00 AM and 2:00 PM while you are riding the Shinkansen, tapering to light mist (0.3–0.6 mm/hr) by 5:00 PM! Use a quick ¥600 Uber/GO Taxi from KotoStay to Kyoto Station at 9:45 AM to skip the Kyoto morning rain.",
    transit: "At KAMAKURA HOTEL check-in, present both consecutive booking confirmations (Oct 24–25 & Oct 25–27, Conf: 1032548490) so the front desk links your rooms for all 3 nights."
  },
  {
    day: 10,
    date: "Sunday, Oct 25, 2026",
    location: "Great Buddha, Beach & Shonan Candles",
    weather: "🌤️➔🌦️ 23° / 17°C (73° / 62°F) • 0.0 mm Dry 4 AM – 3:30 PM!",
    morning: "9:30 AM (100% Dry & Warm 73°F Morning & Afternoon!): Step across the square to ride the vintage green Enoden tram from Kamakura Station to Hase Station (6 mins). Visit <strong>Kōtoku-in (The Great Bronze Buddha—100% flat courtyard)</strong> and <strong>Hase-dera's</strong> lower koi ponds & ocean-view terrace (plus stroll Komachi-dori while the sun is out!).",
    afternoon: "1:30 PM – 3:30 PM: Wheel the stroller along the smooth paved <strong>Yuigahama Beach</strong> boardwalk while warm 73°F ocean breezes rock Kayden to sleep. Maria relaxes on the oceanfront terrace at Amalfi Caffè.",
    evening: "4:30 PM – 7:00 PM (Check Sky at 4:00 PM for Shonan Candle Illumination!): Because a light passing coastal shower (0.8–1.3 mm/hr, ~26% chance) may brush past after 4:00 PM, carry compact umbrellas for your evening ride on the Enoden tram to Enoshima and dinner at <strong>Bills Shichirigahama</strong>!",
    dining: {
      breakfast: "<strong>KAMAKURA HOTEL Hot Breakfast Onigiri Set</strong> (Warm miso soup & freshly made rice balls) OR <strong>Garden House Kamakura (2 mins walk)</strong> for buttermilk pancakes, eggs & coffee.",
      lunch: "1) <strong>Kaikoan (海光庵 inside Hase-dera)</strong> (Panoramic ocean-view temple cafe serving mild temple curry, udon noodles & sweet sesame団子 dango); 2) <strong>Woof Curry (ウーフカレー Hase)</strong> (Cozy 2-story house near the Great Buddha serving slow-simmered beef/pork/veggie curry & kids mild plates); 3) <strong>Cafe Luonto or Daisy's Cafe (Hase)</strong> (Casual sandwiches, pancakes & pasta steps from the Buddha).",
      dinner: "1) <strong>Bills Shichirigahama (ビルズ 七里ヶ浜)</strong> (Iconic oceanfront terrace & booths—world-famous fluffy ricotta hotcakes with banana & honeycomb butter, Wagyu burgers, fish & chips, and pasta); 2) <strong>Amalfi Della Sera (アマルフィイ デラセーラ)</strong> (Cliffside coastal Italian serving brick-oven pizza & fresh Shonan pasta); 3) <strong>Pacific DRIVE-IN</strong> (Casual Hawaiian-Japanese plates, garlic shrimp, loco moco & fries right on the beach).",
      kidSafeOrder: "<strong>For Kayden & Maria:</strong> Bills' fluffy <em>Ricotta Hotcakes</em>, kids Wagyu cheeseburger with fries, or creamy chicken/mushroom pasta—guaranteed toddler crowd-pleasers!"
    },
    weatherStrategy: "☀️ 0.0 mm Rain from 4:00 AM to 3:30 PM & Warm 73°F (22.9°C): After a brief 1:00–3:00 AM overnight shower while you sleep, Sunday is 100% dry all morning and early afternoon! Pack compact umbrellas in the stroller basket just in case a light passing shower (0.8–1.3 mm/hr) rolls through after 4:00 PM.",
    additionalOptions: "🕯️ <strong>Shonan Candle 2026 at Enoshima Sea Candle (5:00 PM – 9:00 PM):</strong> Over 10,000 hand-lit candles illuminate the oceanfront Samuel Cocking Botanical Garden at the end of the Enoden tram line (¥500 entry; note: outdoor candles operate in fair/light mist weather—check at 4:00 PM!). <strong>Stair-Free Escalator Hack:</strong> Skip the island stairs by taking the <strong>Enoshima Escar (江の島エスカー, ¥360)</strong>—4 covered outdoor escalators that carry you straight up the cliff!",
    pregnancyTip: "If visiting Enoshima for the candle illumination, always use the Enoshima Escar outdoor escalators so Maria never climbs the cliff steps."
  },
  {
    day: 11,
    date: "Monday, Oct 26, 2026",
    location: "Bamboo Forest, Shrines & Indoor Aquarium Flex",
    weather: "⛅➔🌦️ 21° / 19°C (70° / 65°F) • Dry Morning (to 12:30 PM) ➔ PM Drizzle",
    morning: "9:00 AM – 12:30 PM (Upgraded Dry Morning Window!): Good news—Monday's morning forecast improved! It is 0.0 mm dry until 9:30 AM and only trace mist (0.1 mm) through 12:30 PM. Take a 7-minute taxi at 9:00 AM to <strong>Hokokuji Temple</strong> (walk its tranquil grove of 2,000 Moso bamboo stalks and sip matcha under the covered wooden teahouse roof!), then stroll the raised <strong>Dankazura</strong> path & <strong>Tsurugaoka Hachimangu Shrine</strong>.",
    afternoon: "1:00 PM – 4:00 PM (Rain-Proof Afternoon Flex): As light coastal drizzle (0.6–0.7 mm/hr) moves in after 1:00 PM, ride the Enoden tram to the <strong>100% indoor Shin-Enoshima Aquarium (新江ノ島水族館)</strong> (giant 2-story Pacific Ocean tank, glowing jellyfish dome, penguins & covered dolphin stadium!) OR relax in covered Onarimachi cafes while Kayden naps.",
    evening: "4:30 PM: Pick up Toshimaya Hato Sablé dove shortbread cookies near Kamakura Station, enjoy a warm neighborhood dinner 2–3 minutes from your hotel, and pack main suitcases so Tuesday morning is effortless.",
    dining: {
      breakfast: "<strong>Kibiyabakery (キビヤベーカリー Onarimachi)</strong> OR <strong>Chabakka Tea Parks / Verve Coffee Roasters Kamakura</strong> (1–2 mins from hotel; waffles, avocado toast & decaf lattes).",
      lunch: "1) <strong>Dankazura Kosuzu (段葛 こ寿々)</strong> (Historic timber shop serving handmade soba noodles, udon & famous brown-sugar <em>Warabi Mochi</em>); 2) <strong>Oxymoron Onari (オクシモロン オナリ)</strong> (1 min from your hotel—mild Japanese keema curry, sweet custard pudding & toddler-friendly booths); 3) <strong>Ocean Deck Cafe inside Shin-Enoshima Aquarium / Enoshima Island Spa Dining</strong>.",
      dinner: "1) <strong>IL BIRRAIO Kamakura (イル・ビッライオ)</strong> (Warm neighborhood Italian trattoria 3 mins from your hotel—fresh handmade Shonan pasta, braised meats & tiramisu); 2) <strong>Garden House Kamakura</strong> (Spacious indoor booths 2 mins from hotel—wood-fired pizza, roast chicken & salads); 3) <strong>AWkitchen Garden Kamakura</strong> (Right on Onarimachi—farm-to-table pasta, pizza & kids plates watching the green Enoden tram roll right past the window!).",
      kidSafeOrder: "<strong>For Kayden & Maria:</strong> AWkitchen's fresh tomato/bolognese pasta (watching the Enoden train pass right outside!) or IL BIRRAIO's handmade gnocchi & bread."
    },
    weatherStrategy: "🌤️➔🌦️ Improved Monday Forecast (9.0 mm Total vs. 25.8 mm Yesterday!): Monday is warm (70°F / 21°C) and dry/trace-mist until 12:30 PM, followed by light afternoon drizzle (0.6–0.7 mm/hr from 1–6 PM). Knocking out Hokokuji Bamboo Forest & Tsurugaoka Hachimangu at 9:00 AM keeps your outdoor sightseeing dry, with the 100% indoor Shin-Enoshima Aquarium ready for the afternoon!",
    additionalOptions: "🐬 <strong>100% Indoor Rain-Proof Gem — Shin-Enoshima Aquarium (新江ノ島水族館):</strong> Right on the Enoden line—features a massive 2-story Sagami Bay shark/ray tank, glowing jellyfish dome, penguins, and a covered stadium dolphin show!"
  },
  {
    day: 12,
    date: "Tuesday, Oct 27, 2026",
    location: "Kamakura ➔ Haneda Edo Koji ➔ SFO",
    weather: "⛅➔🌦️ 25° / 17°C (77° / 63°F) • Dry 10 AM–1 PM Checkout Window!",
    morning: "9:30 AM: Unhurried final morning in Kamakura. Walk 2 minutes to <strong>Cafe Vivement Dimanche</strong> for fresh-baked waffles & decaf coffee (or enjoy hot breakfast at KAMAKURA HOTEL). Check out at 11:00 AM during a warm, 100% dry window!",
    afternoon: "12:00 PM – 1:00 PM (100% Dry Checkout + Indoor Airport Transfer!): Kamakura is 0.0 mm dry and warm (72°F–76°F) from 10:00 AM to 1:00 PM right when you walk 60 seconds (100m) from KAMAKURA HOTEL into Kamakura Station West Exit! Ride the JR Yokosuka Line to Yokohama Station (25 mins) ➔ take the 100% indoor station elevator into YCAT (Yokohama City Air Terminal) and board the Keikyu Airport Limousine Bus direct to Haneda Terminal 3 (arrives ~2:00–2:30 PM before light afternoon drizzle starts). Check suitcases early and enjoy <strong>Haneda Terminal 3's 100% indoor 4F 'Edo Koji' samurai town & 5F indoor Flight Simulator / Observation zone</strong>!",
    evening: "6:25 PM: ANA Flight NH 7010 / UA 876 departs Haneda for SFO (lands at 12:15 PM same calendar day, Tue Oct 27!). Kumi & James connect to Southwest Flight WN 2791 (SFO 3:50 PM ➔ LAX 5:15 PM).",
    dining: {
      breakfast: "<strong>Cafe Vivement Dimanche (カフェ・ヴィヴモン・ディモンシュ)</strong> (2 mins from hotel—famous crispy fresh-baked waffles with whipped butter/caramel & decaf coffee).",
      lunch: "1) <strong>Kua'Aina Kamakura (クア・アイナ)</strong> (Right by Kamakura Station—juicy avocado cheddar burgers, crispy shoestring fries & kids sets); 2) <strong>Yokohama Porta Indoor Dining (At Yokohama Station YCAT Transfer)</strong> (100% underground/indoor restaurant plaza right beneath the YCAT bus terminal!); 3) <strong>Early Lunch/Dinner at Haneda T3 Edo Koji (4F)</strong>.",
      dinner: "<strong>Haneda Terminal 3 'Edo Koji' (4F Pre-Security Indoor Dining Promenade — Wide Stroller Aisles):</strong> 1) <strong>Tsurutontan Udon (つるとんたん)</strong> (Famous giant wooden bowls of gourmet udon noodles—toddler heaven before the 11h flight!); 2) <strong>Katsusen Tonkatsu (かつ仙)</strong> (Crispy pork tenderloin cutlets & rice); 3) <strong>Setagaya Ramen or Mos Burger</strong> + International In-Flight Dinner Service.",
      kidSafeOrder: "<strong>For Kayden & Maria:</strong> Stop at <em>Tsurutontan</em> on Haneda T3 4F around 3:45–4:15 PM so Kayden has a full belly of warm udon noodles right before boarding—he will fall asleep much faster after takeoff!"
    },
    weatherStrategy: "☀️➔🌦️ Warm 77°F & Dry 10:00 AM – 1:00 PM Checkout Window: Early morning mist ends by 9:30 AM, giving you a 100% dry (0.0 mm), warm 72°F–76°F window from 10:00 AM to 1:00 PM to walk to Kamakura Station and ride to Yokohama YCAT! Afternoon drizzle (0.4–1.2 mm/hr after 1:30 PM) only arrives once you are already inside the YCAT bus terminal and Haneda Terminal 3!",
    pregnancyTip: "Put Maria's compression socks on before leaving Kamakura, and ensure all power banks are in your under-seat personal bags (not checked bags or overhead bins) before checking suitcases at Haneda."
  }
];

// Initialize DOM
document.addEventListener("DOMContentLoaded", () => {
  renderItinerary("all");
  setupCollapseControls();
  setupTabs();
  setupDayFilters();
  setupChecklistPersistence();
  setupPWA();
});

const DAY_COLLAPSE_STORAGE_KEY = "japan-trip-day-open-v1";

// Calculate current trip day number (1 = Oct 16 ... 12 = Oct 27) in Japan Time (JST)
function getCurrentTripDayJST() {
  try {
    const jstDateStr = new Intl.DateTimeFormat("en-CA", {
      timeZone: "Asia/Tokyo",
      year: "numeric",
      month: "2-digit",
      day: "2-digit"
    }).format(new Date()); // YYYY-MM-DD
    const start = new Date("2026-10-16T00:00:00+09:00");
    const current = new Date(jstDateStr + "T00:00:00+09:00");
    const diffDays = Math.round((current - start) / (1000 * 60 * 60 * 24)) + 1;
    return Math.max(1, Math.min(13, diffDays));
  } catch (e) {
    return 4;
  }
}

function getSavedDayOpenState() {
  try {
    const raw = localStorage.getItem(DAY_COLLAPSE_STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch (e) {
    return {};
  }
}

function saveDayOpenState(dayNum, isOpen) {
  try {
    const state = getSavedDayOpenState();
    state[dayNum] = isOpen;
    localStorage.setItem(DAY_COLLAPSE_STORAGE_KEY, JSON.stringify(state));
  } catch (e) {
    // Ignore storage errors in private browsing
  }
}

// Render Itinerary Cards (Collapsible with .is-collapsed + aria-expanded)
function renderItinerary(filterDay) {
  const container = document.getElementById("itinerary-container");
  if (!container) return;
  container.innerHTML = "";

  const savedState = getSavedDayOpenState();
  const isSingleDay = filterDay !== "all";
  const currentTripDay = getCurrentTripDayJST();

  const filtered = isSingleDay
    ? itineraryData.filter(d => d.day === parseInt(filterDay, 10))
    : itineraryData;

  filtered.forEach(d => {
    const card = document.createElement("div");
    card.dataset.day = d.day;
    const isPastDay = d.day < currentTripDay;

    // Determine initial open state:
    // - If viewing a single filtered day, always open it
    // - Otherwise use saved state if user has toggled it before
    // - Default: past days (d.day < currentTripDay) start collapsed, today & upcoming start open
    const shouldBeOpen = isSingleDay
      ? true
      : (typeof savedState[d.day] === "boolean" ? savedState[d.day] : !isPastDay);

    card.className = "day-card"
      + (isPastDay ? " day-card-completed" : "")
      + (shouldBeOpen ? "" : " is-collapsed");

    card.innerHTML = `
      <div class="day-card-header" role="button" tabindex="0" aria-expanded="${shouldBeOpen}">
        <div class="day-title-group">
          <div class="day-title-row">
            <span class="day-badge-num">Day ${d.day}</span>
            <h3>${d.date}</h3>
          </div>
        </div>
        <div class="day-header-right">
          <div class="day-header-badges">
            ${d.weather ? `<span class="weather-Inline-pill">${d.weather}</span>` : ""}
            <span class="location-tag">${d.location}</span>
          </div>
          <span class="day-collapse-icon" aria-hidden="true" title="Tap to collapse or expand">▾</span>
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

    const header = card.querySelector(".day-card-header");
    if (header) {
      const toggleCard = () => {
        const nowCollapsed = card.classList.toggle("is-collapsed");
        const isOpen = !nowCollapsed;
        header.setAttribute("aria-expanded", String(isOpen));
        if (!isSingleDay) {
          saveDayOpenState(d.day, isOpen);
        }
      };

      header.addEventListener("click", toggleCard);
      header.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          toggleCard();
        }
      });
    }

    container.appendChild(card);
  });
}

// Expand All / Collapse All Controls
function setupCollapseControls() {
  const expandAllBtn = document.getElementById("expand-all-days-btn");
  const collapseAllBtn = document.getElementById("collapse-all-days-btn");

  if (expandAllBtn) {
    expandAllBtn.addEventListener("click", () => {
      document.querySelectorAll("#itinerary-container .day-card").forEach(card => {
        card.classList.remove("is-collapsed");
        card.open = true;
        const header = card.querySelector(".day-card-header");
        if (header) header.setAttribute("aria-expanded", "true");
        if (card.dataset.day) saveDayOpenState(card.dataset.day, true);
      });
    });
  }

  if (collapseAllBtn) {
    collapseAllBtn.addEventListener("click", () => {
      document.querySelectorAll("#itinerary-container .day-card").forEach(card => {
        card.classList.add("is-collapsed");
        card.open = false;
        const header = card.querySelector(".day-card-header");
        if (header) header.setAttribute("aria-expanded", "false");
        if (card.dataset.day) saveDayOpenState(card.dataset.day, false);
      });
    });
  }
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
