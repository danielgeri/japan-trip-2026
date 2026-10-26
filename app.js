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
    location: "Arashiyama Bamboo & Kimono Forest ➔ Kinkaku-ji ➔ Gion Lantern Stroll",
    weather: "☀️ 21° / 15°C (70° / 59°F) • 0% Rain (0.0 mm All Day)!",
    morning: "<strong>✅ 6:00 AM – 10:45 AM (Completed! Early-Bird Arashiyama Bamboo Grove, Park Viewpoint, Kimono Forest &amp; Kinkaku-ji Golden Pavilion):</strong><br>• <strong>6:15 AM – 9:15 AM (Arashiyama):</strong> Strolled the empty <strong>Arashiyama Bamboo Grove (竹林の小径)</strong>, took in the river gorge view from <strong>Arashiyama Park Viewpoint</strong>, walked down to <strong>Togetsukyo Bridge (渡月橋)</strong>, and explored the 600 silk kimono pillars at the <strong>Arashiyama Kimono Forest (キモノフォレスト)</strong>!<br>• <strong>9:30 AM – 10:45 AM (Kinkaku-ji / 金閣寺 — The Golden Pavilion):</strong> Took a 15-minute Uber (<code>35.03915, 135.72995</code>) to see the <strong>Golden Pavilion shimmering across the Mirror Pond (鏡湖池)</strong> in the clear morning sunshine!",
    afternoon: "<strong>✅ 11:15 AM – 3:50 PM (Completed! Kyoto Station Lunch &amp; Afternoon Family Nap at KotoStay):</strong><br>• Headed back to the <strong>Kyoto Station / Kyoto Tower</strong> area for a hearty midday lunch, followed by a refreshing <strong>afternoon bed nap at KotoStay</strong> so everyone is 100% recharged for the evening!",
    evening: "<strong>🏮 4:15 PM – 7:30 PM (Option 1 Active! Golden-Hour &amp; Lantern Stroll in Gion Shirakawa &amp; Yasaka Shrine — 100% Flat &amp; Stroller-Smooth!):</strong><br>• <strong>4:15 PM (10-Min Uber from KotoStay):</strong> Paste <code>35.00550, 135.77125</code> into Uber (drops you right at <strong>Tatsumi Bridge / 辰巳橋 in Gion Shirakawa</strong>). Show driver: <strong>「祇園白川の辰巳橋までお願いします」</strong>.<br>• <strong>4:30 PM – 5:15 PM (Gion Shirakawa Canal / 祇園白川):</strong> Stroll the flat stone lane beside the crystal-clear canal under weeping willow trees and red paper lanterns at golden hour (sunset is 5:16 PM!). Watch for <strong>Geiko &amp; Maiko</strong> heading to evening appointments while Kayden spots the big koi fish and herons in the shallow stream!<br>• <strong>5:15 PM – 6:00 PM (Glowing Lanterns at Yasaka Shrine / 八坂神社):</strong> Walk 5 minutes down flat Shijo Street into <strong>Yasaka Shrine</strong> right as <strong>hundreds of glowing white paper lanterns</strong> light up the central stage at dusk! <em>(Stroller Tip: Roll in via the smooth North/Maruyama Park path on the left side to skip the front steps).</em><br>• <strong>6:15 PM – 7:30 PM (Casual Later Bite in Gion When Hungry):</strong> Share sizzling Kyoto okonomiyaki &amp; yakisoba right on the canal at <strong>Gion Tanto (祇園たんと)</strong>, crispy bite-sized gyoza at <strong>Gyoza Hohei / ChaoChao</strong>, or a famous matcha parfait at <strong>Saryo Tsujiri (茶寮都路里)</strong>! <em>(And if James heads to the <strong>6:00 PM Kurama Fire Festival</strong>, Gion-Shijo Station is right across the bridge—just 2 stops / 4 mins from Demachiyanagi Station!)</em>",
    dining: {
      breakfast: "<strong>Early Morning before Arashiyama:</strong> Enjoyed an early bite before heading out to the Bamboo Grove &amp; Kimono Forest!",
      lunch: "<strong>11:20 AM at Kyoto Station / Kyoto Tower Area:</strong> Midday lunch right by Kyoto Station &amp; Kyoto Tower before heading back to KotoStay for afternoon naps!",
      dinner: "<strong>Casual Later Bite in Gion (6:30 PM – 7:30 PM):</strong> 1) <strong>Gion Tanto (祇園たんと, right on Gion Shirakawa Canal)</strong> (Share sizzling Kyoto okonomiyaki pancakes, sweet-savory yakisoba noodles &amp; teppanyaki corn/beef); 2) <strong>ChaoChao Gyoza Shijo-Kawaramachi or Gyoza Hohei (ぎょうざ歩兵)</strong> (Crispy bite-sized Kyoto gyoza dumplings &amp; rice); 3) <strong>Saryo Tsujiri Gion Honten (茶寮都路里 祇園本店)</strong> (Iconic Kyoto matcha parfaits, ice cream &amp; warm matcha udon/soba sets right on Shijo Street!).",
      kidSafeOrder: "<strong>For Kayden &amp; Maria Tonight:</strong> Sweet-savory <em>Yakisoba</em> noodles &amp; buttered corn at <em>Gion Tanto</em>, crispy pan-fried pork gyoza, and vanilla/matcha soft-serve or parfait on Shijo Street!"
    },
    weatherStrategy: "☀️ Clear Sunny 70°F (21.2°C) &amp; 0.0 mm Rain All 24 Hours (0% Rain Probability): Today is 100% dry from midnight to midnight (60°F at 6 AM ➔ 67°F at 9 AM ➔ 70°F at 12–3 PM ➔ 64°F at 6 PM)—10/10 sunshine to make the Golden Pavilion (Kinkaku-ji) sparkle over the Mirror Pond at 9:00 AM! 🎉 Traffic Note: Oike &amp; Kawaramachi streets in central Kyoto close 11:30 AM – 3:00 PM for Jidai Matsuri, so heading back to Kyoto Station / KotoStay around 10:45–11:15 AM beats the parade closures!",
    additionalOptions: "⚔️ <strong>Jidai Matsuri Samurai Parade (2:00 PM – 2:30 PM at Heian Shrine):</strong> Watch 2,000 participants dressed as samurai warriors, shoguns on horseback, and Heian nobles arrive at Heian Shrine!<br>🔥 <strong>James's Solo Night Quest — Kurama Fire Festival (Kurama-no-Hi Matsuri, 6:00 PM – 9:30 PM):</strong> Held once a year on Oct 22 up in the mountain village of Kurama (30-min Eizan Railway ride from Demachiyanagi Station). Locals carry massive 100-kg flaming pine torches through narrow village streets! <em>(Tip for James: Kurama drops to ~50°F tonight—pack your fleece/down layer!)</em>",
    pregnancyTip: "Pairing Arashiyama Bamboo Forest (6:15 AM) with Kinkaku-ji Golden Pavilion (9:00 AM) saves hours of cross-city transit because both sit in Northwest Kyoto just 15 minutes apart by taxi!"
  },
  {
    day: 8,
    date: "Friday, Oct 23, 2026",
    location: "Early Nara Deer Park & Todai-ji ➔ 11 AM Lunch ➔ Fushimi Inari",
    weather: "🌤️ 21° / 12°C (70° / 54°F) • 0.0 mm Dry 6 AM – 9:30 PM!",
    morning: "<strong>✅ 7:00 AM – 10:15 AM (Completed! Early-Bird Nara Deer Park &amp; Todai-ji Great Buddha Temple — Beat All the Crowds!):</strong><br>• Headed straight to <strong>Nara Park</strong> and <strong>Todai-ji Temple (東大寺)</strong> early in the morning to feed the bowing deer and see the giant bronze Buddha before the midday tour buses arrived!<br>• <strong>10:15 AM – 11:00 AM:</strong> Stroll over to <strong>Yumekaze Plaza (夢風ひろば)</strong> / <strong>Nara Park Bus Terminal Rooftop</strong> or down to <strong>Higashimuki Covered Arcade (東向商店街)</strong> (watch the high-speed mochi pounding at <strong>Nakatanidou / 中谷堂</strong>!) before 11:00 AM lunch.",
    afternoon: "<strong>🍱 11:00 AM Lunch in Nara ➔ ⛩️ 12:30 PM Fushimi Inari (Thousand Red Gates) ➔ Kyoto Return:</strong><br>• <strong>11:00 AM – 12:15 PM (Lunch in Nara):</strong> Eat right at 11:00 AM opening at <strong>Tonkatsu Ganko Nara (とんかつ がんこ 奈良店)</strong> or <strong>Kamaiki / Mentsu-an Udon</strong> in Higashimuki Arcade, OR <strong>Izasa / TEN.TEN.CAFE</strong> at Todai-ji's Yumekaze Plaza!<br>• <strong>12:15 PM – 1:15 PM (2 Easy Ways from Nara to Fushimi Inari / 伏見稲荷大社):</strong><br>&nbsp;&nbsp;1) <strong>Zero-Transfer Direct Train (40 mins):</strong> Take a 4-min taxi (~¥600) to <strong>JR Nara Station (JR奈良駅)</strong> and ride the <strong>JR Miyakoji Rapid (みやこ路快速)</strong> directly to <strong>JR Inari Station (稲荷駅)</strong>—drops you <strong>10 steps from the giant orange Fushimi Inari gate</strong> with zero transfers!<br>&nbsp;&nbsp;2) <strong>Reserved-Seat 'Nap Train' via Kintetsu-Nara:</strong> Ride the 35-min <strong>Kintetsu Limited Express</strong> back to Kyoto Station, then take an 8-min Uber (<code>34.96715, 135.77265</code>) or 5-min JR train (2 stops) to Fushimi Inari!<br>• <strong>♿ Stroller Ramp Hack at Fushimi Inari:</strong> To skip the front stairs up to the <em>Senbon Torii</em> (Thousand Red Gates), follow the paved <strong>barrier-free stroller slope (スロープ)</strong> on the <strong>right (North) side of the Main Hall</strong>—it rolls smoothly right to the entrance of the Thousand Gates!",
    evening: "3:00 PM – 7:30 PM (0.0 mm Dry &amp; 67°F Through 9:30 PM!): Head back to KotoStay for an afternoon rest (or sunset Kiyomizu-dera / Kōdai-ji Illumination if you have energy!), then celebrate your final night in Kyoto in spacious, kid-friendly booths near Kyoto Station (<strong>Moritaya 11F</strong>, <strong>Ganko Kyoto Station 2F</strong>, <strong>Capital Toyotei 11F</strong>, or <strong>Donguri Kyoto Ekimae</strong>)!",
    dining: {
      breakfast: "<strong>8:00 AM in Higashiyama (After Sunrise Kiyomizu-dera):</strong> 1) <strong>Maeda Coffee Kōdai-ji (前田珈琲 高台寺店, opens 8:00 AM)</strong> (Hot scrambled eggs, thick toast, ham, salad &amp; coffee); 2) <strong>Starbucks Kyoto Nineizaka Yasaka Chaya (opens 8:00 AM)</strong> (Tatami rooms in a 100-year-old townhouse); 3) <strong>Inoda Coffee Kiyomizu Branch (opens 9:00 AM on Sannenzaka)</strong>.",
      lunch: "<strong>In Nara (Right by Kintetsu-Nara Station / Higashimuki Arcade):</strong> 1) <strong>Mentsu-an (麺闘庵) or Kamaiki Udon</strong> (Warm soothing udon noodles—Mentsu-an serves udon in a sweet tofu pouch stamped with a cute deer print!); 2) <strong>Tonkatsu Ganko Nara (とんかつ がんこ 奈良店)</strong> (Spacious booths right on Higashimuki Arcade—crispy pork/shrimp cutlets &amp; rice); 3) <strong>Mahoroba Daibutsu Pudding (まほろば大仏プリン, inside Kintetsu-Nara Station)</strong> (Silky custard pudding in cute Buddha jars!).",
      dinner: "<strong>Spacious Kid-Friendly Booths Near KotoStay (Zero Crowded Alleys!):</strong> 1) <strong>Moritaya JR Kyoto Isetan 11F (モリタ屋)</strong> (150-year-old Kuroge Wagyu sukiyaki &amp; shabu-shabu overlooking Kyoto Tower; Phone: +81 75-365-7788); 2) <strong>Sushi &amp; Washoku Ganko Kyoto Station 2F (がんこ 京都駅ビル店, 229 seats)</strong> (Huge booths &amp; private rooms for sushi, tempura, udon &amp; tonkatsu); 3) <strong>Donguri Kyoto Ekimae (どんぐり 京都駅前店) or Capital Toyotei 11F</strong> (Spacious semi-private booths!).",
      kidSafeOrder: "<strong>For Kayden &amp; Maria:</strong> Warm udon + <em>Daibutsu Custard Pudding</em> at lunch in Nara; in Moritaya's sweet soy-mirin sukiyaki pot at dinner, simmer the thick wheat udon noodles, tofu, carrots, and tender Wagyu slices (skip the raw egg dip for Maria &amp; Kayden!)."
    },
    weatherStrategy: "☀️ 0.0 mm Rain All Morning, Afternoon &amp; Evening (0% Rain Chance From 6:00 AM to 6:00 PM in Both Kyoto &amp; Nara, 70°F / 21.1°C): Crisp 55°F at 6:00 AM warming to a sunny 70°F afternoon—100% dry all day for sunrise Kiyomizu-dera, Nara Deer Park, Fushimi Inari, and dinner! (Stays 0.0 mm dry through 9:30 PM; overnight rain doesn't start until 10:00–11:00 PM while you're asleep).",
    transit: "Take the Kintetsu Limited Express (近鉄特急) from Kyoto Station to Kintetsu-Nara Station (35 mins, all seats reserved). For Fushimi Inari, JR Inari Station is 5 mins (2 stops) from Kyoto Station on the JR Nara Line.",
    additionalOptions: "✨ <strong>Opening Night — Kōdai-ji Temple Autumn Night Illumination (5:00 PM – 9:30 PM, ¥800):</strong> Friday Oct 23 is the official 2026 season opening night! Features a glowing bamboo forest, 3D Zen rock garden light projection, and crimson maples reflected like glass in the mirror-still <em>Garyō-ike</em> pond.<br>🚂 <strong>Toddler Bonus — Kyoto Railway Museum &amp; SL Steam Train (Umekoji Park):</strong> Just 1 train stop (or 5-min taxi) from your Kyoto Airbnb—Kayden can ride a real puffing coal-fired Steam Locomotive (¥300, 10-min loop) and climb inside retired Shinkansen bullet trains!"
  },
  {
    day: 9,
    date: "Saturday, Oct 24, 2026",
    location: "Kyoto ➔ Kamakura Arrival & Private Tea Sauna",
    weather: "🌧️➔☁️ 22°C (72°F) Kyoto ➔ 17°C (63°F) Kamakura • Rain Stops by 7 PM!",
    morning: "9:45 AM (Rain-Free Checkout Hack!): Light morning drizzle in Kyoto tapers off by 11:00 AM! Head to Kyoto Station and board <strong>Shinkansen Nozomi #360 at 11:06 AM (Car 5, Front Row 1: Seats 1-A, 1-B, 1-C, 1-D, 1-E)</strong> to Shin-Yokohama (arrives <strong>1:02 PM</strong>).",
    afternoon: "Transfer indoors at Shin-Yokohama via station elevators to JR Yokohama Line (12 mins to Yokohama) ➔ JR Yokosuka Line (25 mins to Kamakura). In Kamakura, rain briefly eases to <strong>1.6 mm at 3:00 PM</strong> right as you arrive—exit Kamakura Station West Exit (Onari Exit) and pop umbrellas for the <strong>60-second (100m) flat walk</strong> into <strong>KAMAKURA HOTEL</strong>!",
    evening: "<strong>🍵 3:30 PM – 8:30 PM (Relax Indoors During the 4–6:30 PM Downpour ➔ Dry 7:00 PM Dinner!):</strong><br>• Today's heaviest rain band in Kamakura passes through between <strong>4:00 PM and 6:30 PM</strong> (4.2–8.0 mm/hr), and then <strong>drops to 0.3 mm mist at 7:00 PM and 0.0 mm completely dry at 8:00 PM</strong>!<br>• <strong>KAMAKURA HOTEL Private Tea Sauna (茶室サウナ, Phone: +81 467-55-5380):</strong> Unwind indoors in the hotel's green-tea lounge or reserve a 90-min Private Tea Sauna slot (<code>15:00–16:30</code>, <code>17:00–18:30</code>, or <code>21:00–22:30</code> after Kayden's bedtime! ¥5,000 for 1–2 adults, +¥2,500 per extra adult up to 4).<br>• Step out around <strong>6:45–7:00 PM</strong> as the rain ends to eat 1–2 mins from the hotel door at <strong>Garden House</strong>, <strong>AWkitchen Garden</strong>, or <strong>Kamakura Akimoto</strong>!",
    dining: {
      breakfast: "<strong>Heat Pastries / Eggs in Your KotoStay Kitchen</strong> OR <strong>Kyoto Station Hachijo Exit Cafes (Hoshino Coffee or Manneken Belgian Waffles)</strong> inside the dry station concourse.",
      lunch: "<strong>Gourmet Shinkansen Ekiben Feast (Buy inside Kyoto Station 'Ekiben Nigiwai' before boarding):</strong> 1) <strong>Shinkansen Bullet Train Ceramic Bento</strong> (Shaped like a real bullet train—Kayden keeps the ceramic train box!); 2) <strong>Kobe/Kyoto Wagyu Sukiyaki Bento</strong> (Pull the string to self-heat the beef &amp; rice steaming hot at your seat!); 3) <strong>Kyoto Dashimaki Egg &amp; Chicken Bento</strong>.",
      dinner: "1) <strong>Garden House Kamakura (ガーデンハウス鎌倉)</strong> (Literally 2 mins from your hotel! Cozy indoor booths serving wood-fired pizza, roast chicken, fries &amp; craft beer); 2) <strong>Kamakura Akimoto (鎌倉 秋本)</strong> (Right at Kamakura Station Square—elevator access, wide tables, crispy tempura &amp; cooked Shirasu bowls); 3) <strong>Kamakura Matsubara-an (鎌倉 松原庵)</strong> (70-year-old seaside wooden villa serving handmade duck soba, fluffy rolled omelet &amp; crispy tempura; take a 3-min taxi door-to-door, Phone: +81 467-61-3838).",
      kidSafeOrder: "<strong>For Kayden &amp; Maria:</strong> At Garden House, order Margherita pizza &amp; fries; at Matsubara-an, order <em>Dashimaki Tamago</em> (warm rolled egg) and <em>Tempura Seiro</em> (shrimp &amp; sweet vegetable tempura with soba)."
    },
    weatherStrategy: "☔➔☁️ Live 1:00 PM Update for Kamakura Tonight: Rain briefly eases to 1.6 mm at 3:00 PM for your hotel arrival, peaks between 4:00 PM and 6:30 PM (4.2–8.0 mm/hr), and then stops by 7:00 PM (0.3 mm at 7 PM ➔ 0.0 mm dry from 8 PM onward)!",
    transit: "At KAMAKURA HOTEL check-in, present both consecutive booking confirmations (Oct 24–25 &amp; Oct 25–27, Conf: 1032548490) so the front desk links your rooms for all 3 nights."
  },
  {
    day: 10,
    date: "Sunday, Oct 25, 2026",
    location: "Starbucks ➔ Seaside Park ➔ Great Buddha ➔ Afternoon Rain & Sauna!",
    weather: "☀️➔🌧️ 25° / 17°C (78° / 62°F) • Dry Until 2:30 PM ➔ 3 PM–6 PM Rain!",
    morning: "<strong>✅ Completed Morning (Starbucks Reserve ➔ Yuigahama Seaside Park ➔ Great Bronze Buddha &amp; Stroller Nap):</strong><br>• Started at <strong>Starbucks Reserve Kamakura Onarimachi (スターバックス 鎌倉御成町店)</strong> right by the hotel (reflecting pool &amp; wisteria garden)!<br>• Walked over to <strong>Yuigahama Seaside Park (鎌倉海浜公園 由比ガ浜地区)</strong> so Kayden could run around and burn off morning energy by the beach!<br>• Headed to the <strong>Great Bronze Buddha (Kōtoku-in / 高徳院)</strong> in Hase, where Kayden fell fast asleep in his stroller—and smartly skipped the rushed commute/stairs at Bills in favor of an easy, roll-right-in stroller lunch!",
    afternoon: "<strong>🌤️➔🌧️ 1:15 PM – 6:30 PM (Live 1:15 PM Radar Update — Dry Window Until 2:30 PM ➔ 3:00 PM Showers ➔ 5:00 PM Downpour):</strong><br>• <strong>1:15 PM – 2:45 PM (76°F–77°F, Final Dry Outdoor Window):</strong> It stays warm (<code>76.5°F</code>) and mostly dry (<code>0.2–0.3 mm</code> trace mist) until <strong>~2:45 PM</strong>! Stroll <strong>Komachi-dori / Tsurugaoka Hachimangu's</strong> flat lower ponds right by Kamakura Station (or let <strong>Kumi &amp; James</strong> hop a 7-min taxi to <strong>Hokokuji Bamboo Temple / 報国寺</strong>, <code>35.32005, 139.56925</code>) and wrap up back at <strong>KAMAKURA HOTEL by 3:00–3:30 PM</strong>!<br>• <strong>3:00 PM – 6:00 PM (Rain Band Timing — Afternoon Nap &amp; Private Tea Sauna):</strong><br>&nbsp;&nbsp;• <strong>3:00 PM:</strong> Light showers begin (<code>1.3 mm/hr</code>, <code>76°F</code>).<br>&nbsp;&nbsp;• <strong>4:00 PM:</strong> Moderate rain picks up (<code>4.6 mm/hr</code>, <code>76°F</code>).<br>&nbsp;&nbsp;• <strong>5:00 PM:</strong> Peak heavy downpour (<code>13.5 mm/hr</code>, <code>71°F</code> — lasts ~1 hour!).<br>&nbsp;&nbsp;• <strong>6:00 PM:</strong> Tapers quickly to moderate/light rain (<code>2.6 mm/hr</code>, <code>69°F</code>)!<br>• Enjoy a cozy afternoon bed nap at <strong>KAMAKURA HOTEL</strong> and your <strong>Private Tea Sauna (茶室サウナ)</strong> while the 4:00–6:00 PM rain passes outside!",
    evening: "<strong>🌂 6:30 PM – 8:30 PM (Rain Eases to Light Drizzle 1.2 mm at 7 PM ➔ 0.4 mm at 8 PM!):</strong><br>• Step out right on Onarimachi (1–2 mins flat walk from your hotel lobby) for a relaxed family dinner at <strong>Garden House Kamakura</strong>, <strong>AWkitchen Garden Kamakura</strong>, or <strong>Kamakura Akimoto</strong>!",
    dining: {
      breakfast: "✅ <strong>Starbucks Reserve Kamakura Onarimachi</strong> (1 min walk from hotel—reflecting pool garden, lattes &amp; warm pastries).",
      lunch: "<strong>Stroller Roll-In Ground-Floor Lunch (Zero Stairs While Kayden Sleeps!):</strong> 1) <strong>Garden House Kamakura (ガーデンハウス鎌倉, 2 mins from hotel)</strong> (100% ground-floor, buttermilk pancakes, wood-fired pizza, burgers &amp; craft beer); 2) <strong>AWkitchen Garden Kamakura (2 mins from hotel)</strong> (Ground-floor ramp, fresh Shonan pasta &amp; wood-fired pizza right beside the Enoden tracks); 3) <strong>Seedless Bar / Hase &amp; Yuigahama Cafes</strong>.",
      dinner: "1) <strong>Garden House Kamakura (ガーデンハウス鎌倉, 2 mins from hotel)</strong> (Spacious ground-floor indoor booths serving wood-fired pizza, roast chicken &amp; fries); 2) <strong>AWkitchen Garden Kamakura (Onarimachi, 2 mins from hotel)</strong> (Farm-to-table pasta &amp; pizza watching the green Enoden train pass right outside the window!); 3) <strong>Kamakura Akimoto (鎌倉 秋本, inside Kamakura Station Square 3F with elevator)</strong>.",
      kidSafeOrder: "<strong>For Kayden &amp; Maria:</strong> Fluffy buttermilk pancakes, Margherita pizza &amp; fries at <em>Garden House</em>, or fresh tomato/bolognese pasta at <em>AWkitchen Garden</em>!"
    },
    weatherStrategy: "🌤️➔🌧️ Live Sunday 1:15 PM Radar Update: Dry &amp; 76°F–77°F until ~2:30–2:45 PM; light showers start at 3:00 PM (1.3 mm), moderate rain at 4:00 PM (4.6 mm), peak downpour at 5:00 PM (13.5 mm), then tapering fast at 6:00 PM (2.6 mm) and 7:00 PM (1.2 mm light drizzle)!",
    additionalOptions: "🎋 <strong>Quick Dry-Window Outing Before 3:00 PM — Hokokuji Bamboo Temple (報国寺) or Tsurugaoka Hachimangu:</strong> Hokokuji (<code>35.32005, 139.56925</code>) is a 7-min taxi from Kamakura Station and has a covered matcha teahouse overlooking 2,000 bamboo stalks!",
    pregnancyTip: "Skip the 40+ cliffside stairs at Hase-dera and the 61 stone stairs at Tsurugaoka Hachimangu's upper hall—the Great Buddha courtyard and Dankazura boulevard are 100% flat and stair-free for Maria!"
  },
  {
    day: 11,
    date: "Monday, Oct 26, 2026",
    location: "100% Indoor Yokohama Day: SOGO / Pokémon / Nissan ➔ CUPNOODLES Museum!",
    weather: "🌦️➔🌧️ 20° / 16°C (68° / 60°F) • 100% Indoor Yokohama Plan Active!",
    morning: "<strong>🛍️🥟 10:15 AM – 12:30 PM (Step 1 &amp; 2 — 100% Inside Yokohama Station Mega-Complex While Kayden Naps + 11:00 AM Lunch!):</strong><br>• <strong>10:15 AM – 11:00 AM (Keep Stroller Open — Zero Rain, Zero Taxis!):</strong><br>&nbsp;&nbsp;• Take the <strong>JR platform elevator</strong> at Yokohama Station to the <strong>Central Concourse (中央通路)</strong> and follow signs toward the <strong>East Exit (東口) / Porta Underground Mall ➔ SOGO Yokohama (そごう横浜店)</strong> (or pop up the elevator into <strong>NEWoMan / Takashimaya</strong> right at the Central Gate).<br>&nbsp;&nbsp;• Grab morning coffees/matcha and browse <strong>SOGO B2F Depachika</strong> (one of Japan's largest gourmet food halls) while Kayden finishes his stroller nap on smooth indoor floors!<br>• <strong>11:00 AM – 12:00 PM (Beat the Noon Rush at SOGO 10F Dining Park / ダイニングパーク横浜):</strong><br>&nbsp;&nbsp;• Ride the SOGO elevator to <strong>10F</strong> right at <strong>11:00 AM opening</strong> (zero wait, wide stroller aisles!). Roll the stroller right beside a spacious booth at <strong>Din Tai Fung (鼎泰豊)</strong> (soup dumplings, shrimp wonton noodles &amp; mild fried rice), tonkatsu, sushi, tempura, or udon!<br>• <strong>12:00 PM – 12:40 PM (Quick Awake Stop — All Connected Under Roof!):</strong><br>&nbsp;&nbsp;• <strong>Option A:</strong> <strong>Pokémon Center Yokohama (ポケモンセンターヨコハマ)</strong> right next door to SOGO inside <strong>Marui City 8F (マルイシティ横浜 8階)</strong>!<br>&nbsp;&nbsp;• <strong>Option B:</strong> Walk 2 mins indoors from <strong>SOGO 2F</strong> into the free <strong>Nissan Global Headquarters Gallery (日産グローバル本社ギャラリー)</strong> (Kayden can climb inside real showroom cars!) which connects via covered pedestrian walkway to the <strong>Yokohama Anpanman Children's Museum 1F Free Zone &amp; Uncle Jam's Bakery</strong>!",
    afternoon: "<strong>🍜🎡 12:40 PM – 3:15 PM (Step 3 — CUPNOODLES Museum Yokohama &amp; Optional Bayfront / Gondola!):</strong><br>• <strong>⚠️ Crucial Ticket Tip for My CUPNOODLES Factory (¥500 Custom Cup):</strong><br>&nbsp;&nbsp;• Open today until <strong>6:00 PM</strong> (last entry 5:00 PM; ¥500/adult, <strong>free for kids</strong>). To design your own custom cup at the <strong>My CUPNOODLES Factory</strong>, grab <strong>same-day timed numbered tickets (整理券 / Seiriken)</strong> at the 1F reception counter—head over around <strong>12:30–1:00 PM</strong> so afternoon slots don't run out!<br>• <strong>Fastest Rain-Free Transfer from SOGO (6-Min Taxi):</strong><br>&nbsp;&nbsp;• Hop a <strong>6-minute taxi (~¥1,000)</strong> from SOGO 1F Taxi Stand (or Uber pin <code>35.45555, 139.63885</code>) straight to the front door!<br>&nbsp;&nbsp;• <strong>Show Driver:</strong> <strong>「カップヌードルミュージアム横浜までお願いします」</strong> (<em>Kappu Nūdoru Myūjiamu Yokohama made onegai shimasu</em>).<br>&nbsp;&nbsp;• <em>(No-Taxi Stroller Option: Ride the indoor Minatomirai Line 3 mins from Yokohama Station to Minatomirai Station and walk 8 mins through Queen's Square!)</em><br>• <strong>Inside CUPNOODLES Museum + Right Next Door:</strong><br>&nbsp;&nbsp;• Decorate your own Cup Noodles &amp; pick 4 toppings (including cute <em>Hiyoko-chan</em> chick fishcakes for Kayden!), see the <strong>3,000+ Instant Ramen History Wall</strong>, and check out the <strong>4F World Noodles Bazaar</strong>!<br>&nbsp;&nbsp;• <strong>Optional Bonus Right Outside:</strong> <strong>Bills Yokohama Red Brick Warehouse (1F ground-floor roll-in!)</strong> is 4 mins away if you want afternoon Ricotta Hotcakes, OR roll the stroller without folding onto the enclosed <strong>YOKOHAMA AIR CABIN glass gondola</strong> (5-min flight over the harbor to Sakuragicho Station, ¥1,000/adult, free for Kayden)!",
    evening: "<strong>🚆🌂 3:30 PM – 7:30 PM (25-Min Direct Train Back to Kamakura ➔ 4:00–5:30 PM Drizzle Lull &amp; Private Tea Sauna!):</strong><br>• Ride the direct <strong>JR Yokosuka Line</strong> (or JR Negishi Line from Sakuragicho ➔ Ofuna ➔ Kamakura) back to <strong>Kamakura Station</strong> (60s walk to KAMAKURA HOTEL).<br>• Rain drops to a light drizzle between <strong>4:00 PM and 5:30 PM (<code>0.9–1.9 mm/hr</code>, 62°F)</strong>—great window to pick up <strong>Toshimaya Hato Sablé</strong> dove cookies, enjoy your <strong>Private Tea Sauna</strong>, and grab an early neighborhood dinner before the 6:00–7:30 PM rain band (<code>3.5 mm/hr</code>)!",
    dining: {
      breakfast: "✅ <strong>Morning Coffee &amp; Pastries Inside Yokohama Station (SOGO B2F Depachika / NEWoMan / Porta)</strong> while Kayden stroller-naps.",
      lunch: "<strong>Inside Yokohama Station (11:00 AM Opening — Zero Wait, 100% Indoors):</strong> 1) <strong>Din Tai Fung (鼎泰豊 — SOGO Yokohama 10F or Takashimaya 8F)</strong> (Famous soup dumplings, shrimp/pork wonton noodles, mild egg fried rice &amp; sweet red-bean buns in wide booths); 2) <strong>SOGO Yokohama 10F Dining Park (ダイニングパーク横浜)</strong> (30+ spacious restaurants on one floor—tonkatsu, sushi, tempura, udon &amp; Italian with luxury baby lounge); 3) <strong>Bills Yokohama Red Brick Warehouse 1F</strong> (Ground-floor stroller roll-in near CupNoodles Museum for Ricotta Hotcakes &amp; Wagyu burgers!).",
      dinner: "<strong>Back in Kamakura (1–2 Mins from KAMAKURA HOTEL):</strong> 1) <strong>AWkitchen Garden Kamakura</strong> (Spacious indoor tables, farm-to-table pasta, pizza &amp; kids plates watching the green Enoden tram roll right past the window!); 2) <strong>Garden House Kamakura (ガーデンハウス鎌倉)</strong> (Wood-fired pizza, roast chicken &amp; fries); 3) <strong>IL BIRRAIO Kamakura</strong> or <strong>Kamakura Akimoto</strong>.",
      kidSafeOrder: "<strong>For Kayden &amp; Maria Today:</strong> At <em>Din Tai Fung</em> (SOGO 10F), order mild egg &amp; shrimp fried rice, chicken soup noodles, and steamed buns; at <em>CUPNOODLES Museum</em>, pick the chick-shaped <em>Hiyoko-chan</em> fishcakes, corn &amp; cheese for Kayden's custom cup!"
    },
    weatherStrategy: "🌧️ 100% Indoor Yokohama Rain Shield (63°F–68°F): Steady midday rain (2.0–4.1 mm/hr from 11:00 AM to 3:30 PM) falls while you are 100% indoors inside Yokohama Station (SOGO / Marui City / Nissan Gallery) and CUPNOODLES Museum! Rain eases to light drizzle (0.9–1.9 mm/hr) from 4:00–5:30 PM when you return to Kamakura.",
    transit: "🚕 <strong>Tap-and-Show Taxi Card from SOGO to CUPNOODLES Museum (6 Mins, ~¥1,000):</strong> Show driver: <strong>「カップヌードルミュージアム横浜までお願いします」</strong> (Uber pin: <code>35.45555, 139.63885</code>).",
    additionalOptions: "🥟 <strong>If Kumi Wants Yokohama Chinatown (横浜中華街) After CupNoodles:</strong> Chinatown is just a <strong>5-minute taxi</strong> from CUPNOODLES Museum (or 4 stops on the Minatomirai Line to <em>Motomachi-Chukagai Station</em>)!"
  },
  {
    day: 12,
    date: "Tuesday, Oct 27, 2026",
    location: "Sunny 74°F Weekday Komachi-dori Stroll ➔ Haneda Edo Koji ➔ SFO",
    weather: "🌦️➔☀️ 23° / 16°C (74° / 60°F) • 0.0 mm Sunny From 9:00 AM – Takeoff!",
    morning: "<strong>☀️ 9:00 AM – 11:00 AM (Upgraded Forecast: 74°F &amp; 100% Dry Sunny Weekday Morning on Komachi-dori!):</strong><br>• Heavy dawn rain (<code>4:00–7:00 AM</code> while you sleep) stops completely at <strong>8:00 AM (<code>0.1 mm</code>)</strong>, giving way to <strong><code>0.0 mm</code> bright sunshine (code 1, 64°F at 9 AM ➔ 69°F at 10 AM ➔ 71°F at 11 AM ➔ 73°F–74°F from 12–4 PM) all the way through your 6:25 PM takeoff</strong>!<br>• <strong>Smart Family Timing:</strong> Because Tuesday is a sunny weekday, strolling <strong>Komachi-dori (小町通り)</strong> between <strong>9:15 AM and 10:45 AM</strong> (after fresh waffles at <strong>Cafe Vivement Dimanche</strong>) lets you browse the cute shops and Studio Ghibli <em>Donguri Republic</em> with your stroller and zero weekend crowds before 11:00 AM checkout!",
    afternoon: "<strong>✈️ 11:15 AM – 2:30 PM (2 Easy Family Ways to Haneda Airport Terminal 3):</strong><br>• <strong>Option 1 (Zero-Transfer Door-to-Door Taxi/Van — Easiest with Suitcases &amp; Stroller):</strong> Ask KAMAKURA HOTEL front desk to call a spacious <strong>Van Taxi (アルファード/ジャンボタクシー, ~50 mins direct to Haneda T3)</strong> or 2 standard taxis so you never lift a suitcase onto a train!<br>• <strong>Option 2 (Train + YCAT Limousine Bus):</strong> Walk 60 seconds into Kamakura Station West Exit, ride the JR Yokosuka Line (25 mins) to Yokohama Station ➔ take the indoor elevator to <strong>YCAT</strong> for the direct Limousine Bus to Haneda Terminal 3!<br>• Check suitcases early and enjoy <strong>Haneda Terminal 3's 100% indoor 4F 'Edo Koji' samurai town &amp; 5F Observation Deck (with clear sunny views!)</strong>!",
    evening: "6:25 PM (Sunny &amp; Dry 71°F Skies for Takeoff!): ANA Flight NH 7010 / UA 876 departs Haneda for SFO (lands at 12:15 PM same calendar day, Tue Oct 27!). Kumi &amp; James connect to Southwest Flight WN 2791 (SFO 3:50 PM ➔ LAX 5:15 PM).",
    dining: {
      breakfast: "<strong>Cafe Vivement Dimanche (カフェ・ヴィヴモン・ディモンシュ)</strong> (2 mins from hotel—famous crispy fresh-baked waffles with whipped butter/caramel &amp; decaf coffee).",
      lunch: "1) <strong>Kua'Aina Kamakura (クア・アイナ)</strong> (Right by Kamakura Station—juicy avocado cheddar burgers, crispy shoestring fries &amp; kids sets); 2) <strong>Yokohama Porta Indoor Dining (At Yokohama Station YCAT Transfer)</strong> (100% underground/indoor restaurant plaza right beneath the YCAT bus terminal!); 3) <strong>Early Lunch/Dinner at Haneda T3 Edo Koji (4F)</strong>.",
      dinner: "<strong>Haneda Terminal 3 'Edo Koji' (4F Pre-Security Indoor Dining Promenade — Wide Stroller Aisles):</strong> 1) <strong>Tsurutontan Udon (つるとんたん)</strong> (Famous giant wooden bowls of gourmet udon noodles—toddler heaven before the 11h flight!); 2) <strong>Katsusen Tonkatsu (かつ仙)</strong> (Crispy pork tenderloin cutlets &amp; rice); 3) <strong>Setagaya Ramen or Mos Burger</strong> + International In-Flight Dinner Service.",
      kidSafeOrder: "<strong>For Kayden &amp; Maria:</strong> Stop at <em>Tsurutontan</em> on Haneda T3 4F around 3:45–4:15 PM so Kayden has a full belly of warm udon noodles right before boarding—he will fall asleep much faster after takeoff!"
    },
    weatherStrategy: "☀️ Upgraded Tuesday Forecast — 0.0 mm Sunny &amp; 74°F (23.0°C) From 9:00 AM Through Takeoff: After dawn rain ends right at 8:00 AM, both Kamakura and Haneda Airport have 0.0 mm rain, bright sunshine (code 1), and warm 69°F–74°F temperatures all day!",
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
