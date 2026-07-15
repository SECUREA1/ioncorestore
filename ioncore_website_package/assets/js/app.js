
const PRODUCTS = [{"id": "performance-cap", "title": "IONCORE Performance Cap", "category": "Apparel", "price": 39, "tag": "Everyday performance headwear", "desc": "Breathable, quick-dry, adjustable cap built for work, training, travel, and daily wear.", "features": ["Breathable mesh comfort", "Quick-dry fabric", "Sun protection", "Adjustable fit"], "contents": ["1 adjustable IONCORE performance cap", "Moisture-wicking sweatband", "Ventilated mesh crown", "Care and fit card"]}, {"id": "energy-drink", "title": "IONCORE Energy Drink 12 Pack", "category": "Energy", "price": 36, "tag": "Clean energy. Sharp focus.", "desc": "Zero-sugar energy drink concept with caffeine, taurine, B vitamins, electrolytes, and bold flavors.", "features": ["12 pack cans", "Zero sugar concept", "Enhanced focus", "Low calorie"], "contents": ["12 assorted IONCORE energy cans", "Flavor and caffeine information card", "Recyclable branded tray", "Crew-ready serving notes"]}, {"id": "bar-glasses-set", "title": "IONCORE Bar Glasses Set", "category": "Home", "price": 89, "tag": "Pour with power", "desc": "Premium 8-piece branded bar glass set for home bars, gifting, events, and brand activations.", "features": ["8-piece set", "Gift box", "Crystal-style glass", "Dishwasher safe concept"], "contents": ["8 branded bar glasses", "Protective gift box", "Coaster and garnish guide", "Care instructions"]}, {"id": "drone-development", "title": "IONCORE X1 Drone Development", "category": "Tech", "price": 899, "tag": "Built for hunters. Built for survival.", "desc": "Tactical exploration drone concept with smart controller, carry case, modular payload system, and long-range mission design.", "features": ["4K UHD camera concept", "Foldable body", "Smart controller", "Mission carry case"], "contents": ["Foldable X1 drone concept body", "Smart controller", "Mission carry case", "Modular payload rail and setup guide"]}, {"id": "mag-inertia-power-tools", "title": "IONCORE Mag-Inertia Power Tools", "category": "Tools", "price": 1299, "tag": "Cordless performance. Unstoppable power.", "desc": "Full tool kit concept built around a branded magnetic inertia generator power core system.", "features": ["Drill driver", "Impact driver", "Circular saw", "Rugged field case"], "contents": ["Drill driver", "Impact driver", "Circular saw", "Mag-inertia power core and rugged field case"]}, {"id": "camping-lamps", "title": "IONCORE Camping Lamps", "category": "Outdoor", "price": 59, "tag": "Light up the night", "desc": "Outdoor lamp lineup including lanterns, hang lights, solar lanterns, magnetic base work lights, and clip lights.", "features": ["Rechargeable", "Weather resistant", "Magnetic mount options", "Long runtime"], "contents": ["Rechargeable lantern", "Hanging camp light", "Magnetic work light", "Charging cable and quick-start guide"]}, {"id": "summer-gear-swag", "title": "IONCORE Summer Gear & Swag", "category": "Apparel", "price": 149, "tag": "Stay cool. Stay sharp.", "desc": "Seasonal apparel and accessories collection with hats, sunglasses, towels, drinkware, bags, patches, and beach gear.", "features": ["Apparel", "Headwear", "Eyewear", "Accessories"], "contents": ["IONCORE summer tee", "Performance cap", "Sunglasses and towel", "Drinkware, patches, bag, and beach accessories"]}, {"id": "magstride-bootlock", "title": "IONCORE MagStride BootLock", "category": "Outdoor", "price": 249, "tag": "Spring forward with control", "desc": "Mobility-assist boot attachment concept for steel-toed boots with magnetic lock points and controlled rebound settings.", "features": ["Steel toe compatible concept", "Mode selector", "Replaceable parts", "Anti-slip wide base"], "contents": ["Pair of MagStride BootLock attachments", "Replaceable rebound pads", "Mode selector hardware", "Fit and safety setup guide"]}, {"id": "cargo-tent", "title": "IONCORE Instant Cargo Tent", "category": "Outdoor", "price": 399, "tag": "Set up. Load up. Adventure on.", "desc": "Instant pop-up cargo tent concept with separate shelter and cargo space for camping, overlanding, basecamp, and events.", "features": ["Instant pop-up", "Cargo bay", "Weather resistant", "Compact carry bag"], "contents": ["Instant pop-up shelter", "Integrated cargo bay", "Stakes and guy lines", "Compact carry bag"]}, {"id": "sleeping-roll", "title": "IONCORE Compact Sleeping Roll", "category": "Outdoor", "price": 129, "tag": "Roll. Pack. Rest.", "desc": "Compact sleeping roll concept designed for camping, hiking, backpacking, road trips, festivals, and emergency kits.", "features": ["Compact roll design", "Water resistant", "Premium insulation", "Compression straps"], "contents": ["Compact insulated sleeping roll", "Compression straps", "Water-resistant stuff sack", "Field care card"]}, {"id": "mobile-cooking-stack", "title": "IONCORE Mobile Stack Cooking System", "category": "Outdoor", "price": 119, "tag": "Cook. Stack. Go.", "desc": "All-in-one portable cooking system concept with pot, pan, steamer, strainer, lid plate, and locking stack design.", "features": ["Poach, fry, boil, steam", "Stackable design", "Foldable handle", "Carry bag"], "contents": ["Stacking pot and pan", "Steamer and strainer inserts", "Lid plate and foldable handle", "Carry bag"]}, {"id": "home-collection", "title": "IONCORE Home Collection", "category": "Home", "price": 199, "tag": "Energy starts at home", "desc": "Branded home collection with mugs, tumblers, water bottles, shaker bottle, candle, coasters, notebook, blanket, wall art, and keychain.", "features": ["Drinkware", "Home goods", "Giftable collection", "Modern black and green style"], "contents": ["Mug, tumbler, and water bottle", "Shaker bottle and coasters", "Candle, notebook, blanket, and wall art", "Keychain and gift-ready packaging"]}, {"id": "survival-tableware", "title": "IONCORE Survival Tableware Set", "category": "Outdoor", "price": 49, "tag": "Built for survival. Made to go.", "desc": "Collapsible outdoor tableware set with cup, bowl, plate, spork, carabiner, and mesh storage pouch.", "features": ["Food grade silicone concept", "Collapsible", "Heat resistant", "Packs flat"], "contents": ["Collapsible cup, bowl, and plate", "Spork utensil", "Carabiner clip", "Mesh storage pouch"]}, {"id": "radio-lamp-system", "title": "IONCORE Radio & Lamp System", "category": "Tech", "price": 129, "tag": "Power. Sound. Light.", "desc": "Rugged radio and lamp collection concept with Bluetooth, FM/AM radio, portable lantern modes, and rechargeable lighting.", "features": ["Bluetooth concept", "FM/AM radio", "Desk lamp mode", "Portable lantern mode"], "contents": ["Bluetooth/FM/AM radio unit", "Desk lamp module", "Portable lantern attachment", "Recharge cable and operation guide"]}, {"id": "apparel-collections", "title": "IONCORE Apparel Collections", "category": "Apparel", "price": 99, "tag": "Core, street, premium, mascot", "desc": "Apparel market page with logo tees, tech hoodie, founder bomber, trucker hat, tech backpack, and mascot hoodie.", "features": ["Logo tee", "Tech hoodie", "Bomber jacket", "Backpack"], "contents": ["Logo tee", "Tech hoodie", "Founder bomber jacket", "Trucker hat, backpack, and mascot hoodie options"]}, {"id": "cargo-gear-6-pack", "title": "IONCORE Cargo Gear 6-Pack", "category": "Bundles", "price": 189, "tag": "6 premium items. 1 mission.", "desc": "Bundle concept with cargo cap, shaker bottle, energy drink, performance tee, performance socks, and tactical pouch.", "features": ["Limited edition box", "Travel ready", "Gym approved", "Outdoor essential"], "contents": ["Cargo cap", "Shaker bottle and energy drink", "Performance tee and socks", "Tactical pouch in a limited-edition box"]}, {"id": "military-operational-kit", "title": "IONCORE Operational Gear Kit", "category": "Bundles", "price": 499, "tag": "Military grade. Mission ready.", "desc": "12-piece rugged operational kit concept with jacket, pants, base layer, tactical belt, socks, gloves, water cleaner pack, cap, neck gaiter, multi-tool, carabiner, and mission patch.", "features": ["12 essentials", "All-weather ready", "Tactical design", "Boxed gear kit"], "contents": ["Jacket, pants, and base layer", "Tactical belt, socks, and gloves", "Water cleaner pack, cap, and neck gaiter", "Multi-tool, carabiner, and mission patch"]}, {"id": "ionized-water-filter-system", "title": "IONCORE Ionized Water Filter System", "category": "Hydration", "price": 149, "tag": "Pure hydration. Powered by IONCORE.", "desc": "Portable water filter system concept with ionizer bottle, filter straw, cartridges, electrolyte packets, pouch, cleaning kit, and guide.", "features": ["Filter bottle concept", "Filter straw", "Cartridges", "Carry pouch"], "contents": ["Ionizer bottle", "Filter straw and replacement cartridges", "Electrolyte packets", "Carry pouch, cleaning kit, and guide"]}, {"id": "ionized-water-display", "title": "IONCORE Ionized Water Display Kit", "category": "Hydration", "price": 249, "tag": "1 mission. 1 system.", "desc": "Retail display variation for the ionized water concept with bottle, cleaner pack, cartridges, pouch, cleaning kit, and straw filter.", "features": ["Retail display layout", "Lab tested concept", "Global water ready concept", "Lifetime support concept"], "contents": ["Retail display tray", "Ionized bottle and cleaner pack", "Cartridges and straw filter", "Pouch, cleaning kit, and demo signage"]}, {"id": "rapper-gear-collection", "title": "IONCORE Rapper Gear Collection", "category": "Apparel", "price": 299, "tag": "Built different. Made to stand out.", "desc": "Premium streetwear collection concept with hoodie, tee, snapback, cargo pants, chain, socks, and side bag.", "features": ["Oversized hoodie", "Statement chain", "Cargo pants", "Side bag"], "contents": ["Oversized hoodie and tee", "Snapback and socks", "Cargo pants and side bag", "Statement chain accessory"]}, {"id": "jacket", "title": "IONCORE Mission Jacket", "category": "Apparel", "price": 179, "tag": "All-weather IONCORE outerwear", "desc": "Rugged branded jacket built for field work, travel, training, and everyday cold-weather missions.", "features": ["Weather-resistant shell", "Insulated comfort lining", "Utility pockets", "Adjustable hood and cuffs"], "image": "products/jacket.png", "contents": ["Mission jacket shell", "Insulated liner", "Utility pocket layout", "Fit and care card"]}, {"id": "blanket", "title": "IONCORE Core Blanket", "category": "Home", "price": 79, "tag": "Warmth for basecamp and home", "desc": "Premium branded blanket for couches, cabins, campsites, emergency kits, and road-trip comfort.", "features": ["Soft plush feel", "Oversized comfort", "Machine-washable concept", "Home or outdoor use"], "image": "products/blanket.png", "contents": ["Oversized IONCORE blanket", "Storage strap", "Home/basecamp care card", "Gift-ready wrap"]}, {"id": "shower", "title": "IONCORE Portable Shower System", "category": "Outdoor", "price": 139, "tag": "Clean up anywhere", "desc": "Portable camp shower concept for overlanding, hunting, emergency prep, beach days, and off-grid basecamps.", "features": ["Portable rinse kit", "Rechargeable pump concept", "Compact hose and sprayer", "Field-ready carry setup"], "image": "products/shower.png", "contents": ["Rechargeable pump concept", "Hose and sprayer", "Portable water bag", "Carry setup and rinse guide"]}, {"id": "coveralls", "title": "IONCORE Field Coveralls", "category": "Apparel", "price": 229, "tag": "Full-body protection. Mission ready.", "desc": "Rugged branded coveralls built for shop work, field operations, cold-weather layering, and high-visibility IONCORE crews.", "features": ["Reinforced knees and elbows", "Two-way front zipper", "Utility chest and cargo pockets", "Adjustable cuffs and waist"], "image": "products/coverall.png", "contents": ["Field coveralls", "Reinforced knee and elbow panels", "Utility pocket layout", "Fit and care card"]}, {"id": "meal-package-variety", "title": "IONCORE Meal Package Variety Kit", "category": "Meals", "price": 129, "tag": "Shelf-stable mission meals", "desc": "30-day IONCORE meal kit in a rugged carry case with hearty meal tins, premium meats, comfort meals, classic sides, nuts, performance gum, comics, and puck-heating compatibility.", "features": ["Breakfast, mains, sides, salads, and juices", "Bulk-ready pack format", "Shelf-stable meal planning concept", "Great for crews and families"], "image": "../mealpack.png", "contents": ["Breakfast packs, main courses, hot sides, and cold salads", "Juice pouches, candy, nuts, and JailSnax add-ons", "Comfort meals including burrito, shepherd’s pie, and stargaze pie concepts", "Rugged 30-day carry case with puck-heating compatibility notes"]}, {"id": "breakfast-meal-pack", "title": "IONCORE Breakfast Meal Pack", "category": "Meals", "price": 39, "tag": "Start the mission fueled", "desc": "Breakfast meal pack graphic with shelf-stable morning entrees, hot sides, fruit and juice add-ons, ready-to-heat packaging, and field-friendly serving details for crew or camp use.", "features": ["Morning meal bundle", "Grab-and-go portions", "Field and home ready", "Pairs with juice packs"], "image": "../breakfast.png", "contents": ["Shelf-stable breakfast entrees", "Fruit and juice add-ons", "Ready-to-heat packaging", "Utensils and serving notes"]}, {"id": "cold-salad-meal-pack", "title": "IONCORE Cold Salad Meal Pack", "category": "Meals", "price": 34, "tag": "Clean cold meals to go", "desc": "Cold salad meal pack graphic showing cooler-ready salad bowls, fresh vegetable toppings, dressing packets, utensils, and portable lunch packaging for travel, events, and field meals.", "features": ["Cold lunch concept", "Fresh-service presentation", "Cooler-friendly packaging", "Fast serving workflow"], "image": "../coldsalad.png", "contents": ["Cooler-ready salad bowls", "Fresh vegetable topping packs", "Dressing packets", "Utensils and portable lunch packaging"]}, {"id": "hot-sides-meal-pack", "title": "IONCORE Hot Sides Meal Pack", "category": "Meals", "price": 44, "tag": "Warm sides for any setup", "desc": "Hot sides meal pack graphic with heated side dishes such as potatoes, rice, beans, vegetables, sauces, and stackable serving containers for pairing with main courses.", "features": ["Hot side assortment", "Pairs with main courses", "Crew service friendly", "Comfort-food positioning"], "image": "../hotsides.png", "contents": ["Potato, rice, bean, and vegetable sides", "Sauce packets", "Stackable heating containers", "Crew service pairing notes"]}, {"id": "juice-pack-assortment", "title": "IONCORE Juice Pack Assortment", "category": "Meals", "price": 29, "tag": "Hydration with flavor", "desc": "Juice pack assortment graphic showing assorted IONCORE fruit drink pouches and boxed multipacks arranged for meal bundles, event coolers, and branded refreshment stations.", "features": ["Assorted juice flavors", "Meal bundle add-on", "Cooler-ready pack", "Family and event friendly"], "image": "../juices.png", "contents": ["Assorted fruit drink pouches", "Boxed multipack packaging", "Cooler-ready serving plan", "Meal bundle pairing card"]}, {"id": "mens-apparel-pack", "title": "IONCORE Men's Apparel Pack", "category": "Apparel", "price": 159, "tag": "Core gear for men", "desc": "Men's apparel graphic showing coordinated IONCORE shirts, outerwear, pants, hat, socks, and accessories presented as a branded performance and streetwear pack.", "features": ["Coordinated men's set", "Performance and streetwear mix", "Layer-ready essentials", "Size notes supported at checkout"], "image": "../mensapparel.png", "contents": ["Performance shirt and outerwear layer", "Pants and cap", "Socks and accessories", "Sizing note card"]}, {"id": "womens-apparel-pack", "title": "IONCORE Women's Apparel Pack", "category": "Apparel", "price": 159, "tag": "Performance style for women", "desc": "Women's apparel graphic showing coordinated IONCORE tops, layers, bottoms, cap, socks, and lifestyle accessories arranged as an active travel-ready apparel pack.", "features": ["Coordinated women's set", "Comfort-focused layers", "Active lifestyle styling", "Size notes supported at checkout"], "image": "../womansapparel.png", "contents": ["Active tops and layering pieces", "Bottoms and cap", "Socks and lifestyle accessories", "Sizing note card"]}, {"id": "kits-apparel-bundle", "title": "IONCORE Kits Apparel Bundle", "category": "Apparel", "price": 189, "tag": "Apparel built into a kit", "desc": "Kits apparel graphic showing a boxed IONCORE clothing bundle with shirts, hoodie or jacket layers, pants, cap, socks, patches, and accessories for crews and event drops.", "features": ["Multi-piece apparel kit", "Crew and team friendly", "Event-ready presentation", "Custom bundle notes supported"], "image": "../kitsapparel.png", "contents": ["Boxed shirts and hoodie or jacket layer", "Pants, cap, and socks", "Patches and accessories", "Crew/event customization note card"]}, {"id": "wildcraft-kit", "title": "IONCORE Wildcraft Kit", "category": "Outdoor", "price": 169, "tag": "Survival craft in one rugged kit", "desc": "Wildcraft outdoor bundle with a rugged carry case, survival-craft tools, emergency setup notes, and black-and-green field organization.", "features": ["Rugged carry case", "Survival-craft tools", "Field organization", "Camp-ready layout"], "image": "../wildcraftkit.png", "contents": ["Wildcraft carry case", "Survival craft tool set", "Emergency field cards", "Accessory organizer panels"]}, {"id": "firestarter-kit", "title": "IONCORE Firestarter Kit", "category": "Outdoor", "price": 49, "tag": "Emergency ignition for camp and survival", "desc": "Firestarter graphic product with emergency fire-starting tools, rugged packaging, and camp or survival accessory details.", "features": ["Emergency starter tools", "Weather-ready packaging", "Camp accessory fit", "Compact carry format"], "image": "../firestarter.png", "contents": ["Firestarter tool set", "Weather-safe storage pack", "Tinder and striker concept", "Camp safety card"]}, {"id": "magforce-bow-and-arrow", "title": "IONCORE MagForce Bow and Arrow", "category": "Outdoor", "price": 349, "tag": "Field archery with magnetic-force styling", "desc": "Tactical bow-and-arrow concept with arrow components, field/hunting callouts, and IONCORE mission-ready presentation.", "features": ["Tactical bow concept", "Arrow component layout", "Field carry setup", "Hunting-inspired design"], "image": "../magforcebowandarrow.png", "contents": ["MagForce bow concept", "Arrow component set", "Field carry notes", "Setup and safety card"]}, {"id": "copper-lamp", "title": "IONCORE Copper Lamp", "category": "Home", "price": 89, "tag": "Warm metallic light for camp or home", "desc": "Copper lamp product with warm metallic styling, IONCORE green accents, and lighting-use details for camp setups or home spaces.", "features": ["Copper-style finish", "Warm lamp glow", "Camp or home use", "IONCORE accent styling"], "image": "../copperlamp.png", "contents": ["Copper lamp concept", "Power and placement guide", "Camp/home use card", "Protective pack insert"]}, {"id": "fishing-merch-kit", "title": "IONCORE Fishing Merch Kit", "category": "Outdoor", "price": 119, "tag": "Fishing-ready branded gear drop", "desc": "Fishing merch graphic organized as a branded angler kit for outdoor trips, events, shoreline crews, and IONCORE field merchandising.", "features": ["Angler merch bundle", "Outdoor trip ready", "Event-friendly layout", "Accessory assortment"], "image": "../fishingmerch.png", "contents": ["Fishing apparel/accessory mix", "Tackle-style organizer concept", "Trip checklist card", "Event merch notes"]}, {"id": "water-filter-bucket", "title": "IONCORE Water Filter Bucket", "category": "Hydration", "price": 99, "tag": "Bulk water cleaning for basecamp", "desc": "Bucket-style water filter concept for camp, emergency prep, crews, and hydration stations needing visible filter hardware and carry-ready organization.", "features": ["Bucket filter format", "Basecamp hydration", "Emergency prep use", "Portable station concept"], "image": "../waterfilterbucket.png", "contents": ["Filter bucket concept", "Filter hardware layout", "Hydration station notes", "Cleaning and setup card"]}, {"id": "ioncore-security-program", "title": "IONCORE Security Program", "category": "Tech", "price": 599, "tag": "Operational security planning package", "desc": "Security program product graphic positioned as a tactical planning, monitoring, and operational readiness package for IONCORE crews and partners.", "features": ["Security planning concept", "Operational readiness", "Crew workflow notes", "Monitoring-oriented layout"], "image": "../ioncoresecurityprogram.png", "contents": ["Security program package", "Readiness checklist", "Crew workflow guide", "Monitoring concept cards"]}, {"id": "meal-kit", "title": "IONCORE Meal Kit", "category": "Meals", "price": 89, "tag": "Organized meals for field menus", "desc": "Meal kit product organized for field-ready menus, crew serving, family packs, and emergency food planning with branded IONCORE presentation.", "features": ["Meal-kit organization", "Field menu ready", "Crew or family service", "Emergency food planning"], "image": "../mealkit.png", "contents": ["Assorted meal kit components", "Serving and heating notes", "Menu planning card", "Branded packaging layout"]}, {"id": "burrito-meal-kit", "title": "IONCORE Burrito Meal Kit", "category": "Meals", "price": 42, "tag": "Wrapped comfort for mission menus", "desc": "Burrito and fajita kit with meal tins, tortillas, proteins, rice, beans, peppers, sauces, toppings, and puck-heating details.", "features": ["Burrito/fajita concept", "Protein and sides", "Heat-and-serve notes", "Crew menu fit"], "image": "../buriito.png", "contents": ["Tortillas and protein packs", "Rice, beans, and peppers", "Sauces and toppings", "Heating and serving card"]}, {"id": "main-course-meal", "title": "IONCORE Main Course Meal", "category": "Meals", "price": 46, "tag": "Shelf-stable entree service", "desc": "Main course meal product with entree portions, side components, heating steps, shelf-stable packaging, and field-service meal details.", "features": ["Main entree portions", "Side components", "Shelf-stable concept", "Field heating steps"], "image": "../maincourse.png", "contents": ["Entree meal components", "Side dish packs", "Heating instructions", "Field-service utensils"]}, {"id": "shepherds-pie-meal", "title": "IONCORE Shepherd's Pie Meal", "category": "Meals", "price": 44, "tag": "Comfort-food mission meal", "desc": "Shepherd’s pie comfort-food meal with prepared filling, sides, shelf-stable package details, and heat-and-serve positioning.", "features": ["Comfort-food entree", "Prepared filling concept", "Heat-and-serve format", "Shelf-stable pack"], "image": "../sheppardspie.png", "contents": ["Shepherd's pie entree", "Side and garnish packs", "Heating notes", "Serving card"]}, {"id": "stargaze-pie-meal", "title": "IONCORE Stargaze Pie Meal", "category": "Meals", "price": 44, "tag": "Specialty pie-style meal", "desc": "Stargaze pie specialty meal concept with prepared serving visuals, package details, and meal-kit presentation.", "features": ["Specialty pie meal", "Prepared serving concept", "Meal-kit packaging", "Comfort menu add-on"], "image": "../stargazepie.png", "contents": ["Stargaze pie meal pack", "Serving components", "Heating notes", "Menu pairing card"]}, {"id": "candy-snack-pack", "title": "IONCORE Candy Snack Pack", "category": "Meals", "price": 19, "tag": "Sweet add-on for meal kits", "desc": "Candy snack product with branded candy packs, assorted sweets, and add-on snack merchandising for meal kits and market displays.", "features": ["Assorted sweets", "Meal add-on", "Display-ready pack", "Grab-and-go snack"], "image": "../candy.png", "contents": ["Assorted candy packs", "Snack merch tray concept", "Meal-kit pairing card", "Display notes"]}, {"id": "jailsnax-pack", "title": "IONCORE JailSnax Pack", "category": "Meals", "price": 24, "tag": "Compact snack-pack product", "desc": "JailSnax compact snack-pack with individually packaged portions and grab-and-go ordering details for meal kits and market displays.", "features": ["Individual portions", "Compact snack pack", "Grab-and-go format", "Meal-kit add-on"], "image": "../jailsnax.png", "contents": ["Individual snack packs", "Compact display carton", "Ordering note card", "Meal bundle pairing notes"]}, {"id": "mystery-field-drop", "title": "IONCORE Mystery Field Drop", "category": "Bundles", "price": 149, "tag": "Limited uploaded concept bundle", "desc": "Limited field-drop product page created from the uploaded IONCORE PNG asset and organized as a bundle-ready mystery product concept.", "features": ["Limited concept drop", "Bundle-ready product", "Uploaded PNG integrated", "Market display page"], "image": "../6df65ae3-4150-4e04-af97-33d4f93d0c76.png", "contents": ["Mystery field-drop pack", "Bundle insert card", "Display-ready product notes", "IONCORE packaging concept"]}, {"id": "camera-security-system", "title": "IONCORE Camera Security System", "category": "Tech", "price": 799, "tag": "Live vision. Smarter response.", "desc": "Connected camera system concept with indoor/outdoor cameras, NVR hub, mobile monitoring software, motion alerts, and encrypted event storage.", "features": ["4K camera coverage", "NVR hub concept", "Mobile app software", "Motion alerts"], "image": "assets/images/camera-security-system.svg", "contents": ["Four 4K camera nodes", "NVR command hub", "Mobile monitoring software concept", "Mounting kit and quick-start guide"]}, {"id": "outdoor-trail-camera-system", "title": "IONCORE Outdoor Trail Camera System", "category": "Outdoor", "price": 349, "tag": "Field visibility for camp and property.", "desc": "Weather-ready trail and perimeter camera system for campsites, hunting lanes, overlanding bases, and remote property checks.", "features": ["Weather-sealed cameras", "Night vision concept", "Solar-ready mounts", "Field alert software"], "image": "assets/images/outdoor-trail-camera-system.svg", "contents": ["Two weather-sealed trail cameras", "Solar-ready mount hardware", "Field alert software concept", "Camouflage straps and setup card"]}, {"id": "home-camera-command-kit", "title": "IONCORE Home Camera Command Kit", "category": "Home", "price": 429, "tag": "Smart monitoring for every room.", "desc": "Home-ready camera and software package with door, room, garage, and porch monitoring tiles for household awareness.", "features": ["Indoor/outdoor coverage", "Door and room views", "App dashboard concept", "Privacy mode"], "image": "assets/images/home-camera-command-kit.svg", "contents": ["Door camera concept", "Two room camera nodes", "Porch/garage camera node", "Home dashboard software and privacy card"]}, {"id": "camera-operations-bundle", "title": "IONCORE Camera Operations Bundle", "category": "Bundles", "price": 1199, "tag": "Cameras, software, and field control in one kit.", "desc": "Mission-ready camera bundle combining security cameras, outdoor trail coverage, software dashboards, mounting gear, and operational setup cards.", "features": ["Camera fleet bundle", "Software dashboard", "Indoor/outdoor mounts", "Operations cards"], "image": "assets/images/camera-operations-bundle.svg", "contents": ["Camera Security System core", "Outdoor Trail Camera System add-on", "Home Camera Command software dashboard", "Mounting hardware, labels, and operations cards"]}];
let cart = JSON.parse(localStorage.getItem('ioncore_cart') || '{}');
const money = n => '$' + Number(n).toFixed(2);
const img = id => { const p = PRODUCTS.find(x => x.id === id); return `${window.IONCORE_ASSET_PREFIX || ''}${p?.image || `assets/images/${id}.jpeg`}`; };
function saveCart(){ localStorage.setItem('ioncore_cart', JSON.stringify(cart)); updateCartCount(); }
function updateCartCount(){ const el=document.querySelector('#cartCount'); if(el) el.textContent=Object.values(cart).reduce((a,b)=>a+b,0); }
function card(p){
  return `<article class="card" data-category="${p.category}" id="${p.id}">
    <div class="pic"><img src="${img(p.id)}" alt="${p.title}"></div>
    <div class="card-body"><span class="badge">${p.category}</span><h3>${p.title}</h3><div class="green">${p.tag}</div><p>${p.desc}</p>
    <h4>Package includes</h4><ul>${(p.contents || p.features).map(f=>`<li>${f}</li>`).join('')}</ul><div class="price">${money(p.price)}</div>
    <div class="card-actions"><button class="btn" type="button" onclick="openProduct('${p.id}')">AR Pop</button><a class="btn" href="${window.IONCORE_ASSET_PREFIX || ''}products/${p.id}.html">Page</a><button class="btn solid" onclick="addToCart('${p.id}')">Add</button></div></div>
  </article>`;
}
function renderProducts(list){ const root=document.querySelector('#productGrid'); if(root){ const initial=root.dataset.category; const categories=root.dataset.categories?.split(',').map(x=>x.trim()).filter(Boolean); const items=list || (categories?.length ? PRODUCTS.filter(p=>categories.includes(p.category)) : (initial ? PRODUCTS.filter(p=>p.category===initial) : PRODUCTS)); root.innerHTML=items.map(card).join(''); } }
function setupProductLines(){ const side=document.querySelector('.sidebar'); if(!side || !window.location.pathname.includes('/products/')) return; side.innerHTML='<h3>Product Lines</h3>'+PRODUCTS.map(p=>`<a href="${p.id}.html">${p.title}</a>`).join(''); }
function addToCart(id){ cart[id]=(cart[id]||0)+1; saveCart(); renderCart(); }
function removeFromCart(id){ delete cart[id]; saveCart(); renderCart(); }
function changeQty(id,delta){ cart[id]=(cart[id]||0)+delta; if(cart[id]<=0) delete cart[id]; saveCart(); renderCart(); }
function openProduct(id){
 const p=PRODUCTS.find(x=>x.id===id); if(!p) return;
 document.querySelector('#modalInner').innerHTML = `<div class="modal-content"><img src="${img(p.id)}" alt="${p.title}">
 <div class="modal-info"><button class="close" onclick="closeModal()">×</button><span class="badge">${p.category}</span><h2>${p.title}</h2>
 <p class="lead">${p.desc}</p><h3 class="green">${money(p.price)}</h3><h3>Package includes</h3><ul>${(p.contents || p.features).map(f=>`<li>${f}</li>`).join('')}</ul>
 <p class="notice">Static demo checkout: connect Stripe, Shopify Buy Button, Snipcart, WooCommerce, or a backend API when ready to process real orders.</p>
 <div class="card-actions"><button class="btn solid" onclick="addToCart('${p.id}')">Add to cart</button><a class="btn" href="${window.IONCORE_ASSET_PREFIX || ''}products/${p.id}.html">View Page</a></div></div></div>`;
 document.querySelector('#productModal').classList.add('open');
}
function closeModal(){ document.querySelector('#productModal').classList.remove('open'); }
function openCart(){ document.querySelector('#cartModal').classList.add('open'); renderCart(); }
function closeCart(){ document.querySelector('#cartModal').classList.remove('open'); }
function renderCart(){
 const root=document.querySelector('#cartItems'); if(!root) return; const ids=Object.keys(cart);
 if(!ids.length){ root.innerHTML='<p class="notice">Your cart is empty. Add IONCORE products from any market page.</p>'; document.querySelector('#cartTotal').textContent=money(0); return; }
 let total=0; root.innerHTML=ids.map(id=>{ const p=PRODUCTS.find(x=>x.id===id); const q=cart[id]; const line=p.price*q; total+=line;
 return `<div class="cart-row"><div><b>${p.title}</b><br><small>${money(p.price)} each</small></div><div class="qty"><button onclick="changeQty('${id}',-1)">−</button><b>${q}</b><button onclick="changeQty('${id}',1)">+</button></div><div><b>${money(line)}</b><br><button class="filter" onclick="removeFromCart('${id}')">Remove</button></div></div>`; }).join('');
 document.querySelector('#cartTotal').textContent=money(total);
}
function fakeCheckout(e){
 e.preventDefault(); const ids=Object.keys(cart); if(!ids.length){ alert('Your cart is empty.'); return; }
 const order = ids.map(id=>{ const p=PRODUCTS.find(x=>x.id===id); return `${cart[id]} x ${p.title}`; }).join('\n');
 const name=document.querySelector('#name')?.value || 'Customer';
 alert(`IONCORE demo order received for ${name}:\n\n${order}\n\nConnect a payment/backend service to turn this demo into live checkout.`);
 cart={}; saveCart(); renderCart(); e.target.reset();
}

function setupProductLinesToggle(){
 const layout=document.querySelector('.market-layout');
 const sidebar=layout?.querySelector('.sidebar');
 if(!layout || !sidebar || !window.location.pathname.includes('/products/')) return;
 const btn=document.createElement('button');
 btn.className='btn product-lines-toggle';
 btn.type='button';
 btn.setAttribute('aria-controls','productLines');
 btn.setAttribute('aria-expanded','false');
 sidebar.id=sidebar.id || 'productLines';
 btn.textContent='Open Product Lines';
 btn.addEventListener('click',()=>{
  const open=layout.classList.toggle('product-lines-open');
  btn.setAttribute('aria-expanded', String(open));
  btn.textContent=open?'Hide Product Lines':'Open Product Lines';
 });
 layout.insertBefore(btn, sidebar);
}

function setupFilters(){ document.querySelectorAll('[data-filter]').forEach(btn=>btn.addEventListener('click',()=>{ document.querySelectorAll('[data-filter]').forEach(b=>b.classList.remove('active')); btn.classList.add('active'); const f=btn.dataset.filter; renderProducts(f==='All'?PRODUCTS:PRODUCTS.filter(p=>p.category===f)); })); }
document.addEventListener('DOMContentLoaded',()=>{setupProductLines(); setupProductLinesToggle(); renderProducts(); setupFilters(); updateCartCount(); renderCart();});

function openImageLightbox(source){
 const src=source?.currentSrc || source?.src; if(!src) return;
 let box=document.querySelector('#imageLightbox');
 if(!box){
  box=document.createElement('div'); box.id='imageLightbox'; box.className='image-lightbox';
  box.innerHTML='<button class="close" type="button" aria-label="Close full product image" onclick="closeImageLightbox()">×</button><img alt="Expanded product image">';
  box.addEventListener('click',e=>{ if(e.target===box) closeImageLightbox(); });
  document.body.appendChild(box);
 }
 const imgEl=box.querySelector('img'); imgEl.src=src; imgEl.alt=source.alt || 'Expanded product image'; box.classList.add('open');
}
function closeImageLightbox(){ document.querySelector('#imageLightbox')?.classList.remove('open'); }
document.addEventListener('keydown',e=>{ if(e.key==='Escape') closeImageLightbox(); });

function setupHouseExplorer(){
 const canvas=document.querySelector('#houseExplorer'); if(!canvas) return;
 const ctx=canvas.getContext('2d');
 const shell=canvas.closest('.tour-shell');
 const video=document.querySelector('#handVideo');
 const state={x:0,y:1.65,z:2.8,yaw:Math.PI,pitch:-0.03,fov:520,avatar:false,keys:{},drag:false,lastX:0,lastY:0,hand:false,model:'all',spin:0};
 const walls=[
  {name:'floor',c:'#1b2419',p:[[-5,0,-5],[5,0,-5],[5,0,5],[-5,0,5]]},{name:'ceiling',c:'#10180f',p:[[-5,3,-5],[-5,3,5],[5,3,5],[5,3,-5]]},
  {name:'back wall',c:'#22331d',p:[[-5,0,-5],[-5,3,-5],[5,3,-5],[5,0,-5]]},{name:'left wall',c:'#172415',p:[[-5,0,-5],[-5,0,5],[-5,3,5],[-5,3,-5]]},
  {name:'right wall',c:'#182815',p:[[5,0,-5],[5,3,-5],[5,3,5],[5,0,5]]},{name:'entry wall',c:'#132012',p:[[-5,0,5],[5,0,5],[5,3,5],[-5,3,5]]},
  {name:'hall partition',c:'#263a20',p:[[-1.25,0,-5],[-1.25,2.5,-5],[-1.25,2.5,.8],[-1.25,0,.8]]},{name:'room partition',c:'#20341c',p:[[1.6,0,-1.2],[5,0,-1.2],[5,2.6,-1.2],[1.6,2.6,-1.2]]}
 ];
 const edges=[[[-4.8,.05,-4.8],[4.8,.05,-4.8]],[[4.8,.05,-4.8],[4.8,.05,4.8]],[[4.8,.05,4.8],[-4.8,.05,4.8]],[[-4.8,.05,4.8],[-4.8,.05,-4.8]],[[-4.6,1.1,-5],[-2.6,1.1,-5]],[[-4.6,2.2,-5],[-2.6,2.2,-5]],[[2.3,.4,-5],[4.2,.4,-5]],[[2.3,1.8,-5],[4.2,1.8,-5]],[[0,0,-.6],[.9,0,-.6]],[[.9,0,-.6],[.9,1.1,-.6]],[[.9,1.1,-.6],[0,1.1,-.6]],[[0,1.1,-.6],[0,0,-.6]]];
 const avatar=[[-.35,0,-2],[-.2,1.1,-2],[.2,1.1,-2],[.35,0,-2],[0,1.55,-2]];
 const displays=[
  {id:'drone',label:'X1 Drone',pos:[-3.15,.85,-3.3],color:'#7ed321'},
  {id:'toolcore',label:'Tool Core',pos:[3.05,.72,-3.25],color:'#a8ff2a'},
  {id:'hydration',label:'Hydration Tower',pos:[-3.25,.72,.85],color:'#45d7ff'},
  {id:'lamp',label:'Field Lamp',pos:[2.85,.78,1.25],color:'#ffd45a'}
 ];
 function size(){const r=canvas.getBoundingClientRect(),d=window.devicePixelRatio||1;canvas.width=r.width*d;canvas.height=r.height*d;ctx.setTransform(d,0,0,d,0,0)}
 function project(pt){let [x,y,z]=pt; x-=state.x; y-=state.y; z-=state.z; const cy=Math.cos(state.yaw),sy=Math.sin(state.yaw),cp=Math.cos(state.pitch),sp=Math.sin(state.pitch); let dx=cy*x-sy*z, dz=sy*x+cy*z, dy=cp*y-sp*dz; dz=sp*y+cp*dz; if(dz<.08)return null; const w=canvas.clientWidth,h=canvas.clientHeight,s=state.fov/dz; return {x:w/2+dx*s,y:h/2-dy*s,z:dz};}
 function poly(poly,color){const pts=poly.map(project); if(pts.some(p=>!p))return; ctx.beginPath(); pts.forEach((p,i)=>i?ctx.lineTo(p.x,p.y):ctx.moveTo(p.x,p.y)); ctx.closePath(); ctx.fillStyle=color; ctx.fill(); ctx.strokeStyle='rgba(126,211,33,.28)'; ctx.stroke();}
 function line(a,b,color='rgba(168,255,42,.8)',wide=2){const A=project(a),B=project(b); if(!A||!B)return; ctx.strokeStyle=color; ctx.lineWidth=wide; ctx.beginPath(); ctx.moveTo(A.x,A.y); ctx.lineTo(B.x,B.y); ctx.stroke();}
 function label(text,pt,color){const p=project(pt); if(!p)return; ctx.fillStyle='rgba(0,0,0,.72)';ctx.strokeStyle=color;ctx.lineWidth=1;ctx.font='700 12px Arial';const m=ctx.measureText(text).width+16;ctx.fillRect(p.x-m/2,p.y-30,m,24);ctx.strokeRect(p.x-m/2,p.y-30,m,24);ctx.fillStyle='#f3f5f2';ctx.textAlign='center';ctx.fillText(text,p.x,p.y-14);ctx.textAlign='start'}
 function cube(cx,cy,cz,w,h,d,color){const x=w/2,y=h/2,z=d/2,pts=[[cx-x,cy-y,cz-z],[cx+x,cy-y,cz-z],[cx+x,cy+y,cz-z],[cx-x,cy+y,cz-z],[cx-x,cy-y,cz+z],[cx+x,cy-y,cz+z],[cx+x,cy+y,cz+z],[cx-x,cy+y,cz+z]],ed=[[0,1],[1,2],[2,3],[3,0],[4,5],[5,6],[6,7],[7,4],[0,4],[1,5],[2,6],[3,7]];ed.forEach(e=>line(pts[e[0]],pts[e[1]],color,2.5))}
 function drawModel(o){if(state.model!=='all'&&state.model!==o.id)return; const [x,y,z]=o.pos,glow=o.color,t=state.spin; line([x-.55,.03,z-.55],[x+.55,.03,z-.55],'rgba(126,211,33,.45)',2);line([x+.55,.03,z-.55],[x+.55,.03,z+.55],'rgba(126,211,33,.45)',2);line([x+.55,.03,z+.55],[x-.55,.03,z+.55],'rgba(126,211,33,.45)',2);line([x-.55,.03,z+.55],[x-.55,.03,z-.55],'rgba(126,211,33,.45)',2); if(o.id==='drone'){cube(x,y,z,.7,.12,.42,glow); [[-.55,-.38],[.55,-.38],[-.55,.38],[.55,.38]].forEach(r=>{line([x,y,z],[x+r[0],y,z+r[1]],glow,3); cube(x+r[0],y,z+r[1],.22,.04,.22,glow)})} if(o.id==='toolcore'){cube(x,y,z,.28,.9,.28,glow);cube(x+.38,y+.18,z,.5,.18,.22,glow);line([x-.15,y+.55,z],[x+.6,y+.55,z],glow,4)} if(o.id==='hydration'){cube(x,y,z,.32,1.05,.32,glow);line([x-.32,y+.55,z],[x+.32,y+.55,z],glow,3);line([x,y-.52,z],[x,y+.72,z],glow,3)} if(o.id==='lamp'){line([x,y-.58,z],[x,y+.42,z],glow,4);cube(x,y+.55,z,.55,.25,.55,glow);line([x-.45,y-.58,z-.45],[x+.45,y-.58,z+.45],glow,2);line([x+.45,y-.58,z-.45],[x-.45,y-.58,z+.45],glow,2)} label(o.label,[x,y+1,z],glow)}
 function draw(){const w=canvas.clientWidth,h=canvas.clientHeight;ctx.clearRect(0,0,w,h);ctx.fillStyle='#050805';ctx.fillRect(0,0,w,h); walls.slice().sort((a,b)=>avg(b.p)-avg(a.p)).forEach(o=>poly(o.p,o.c)); edges.forEach(e=>line(e[0],e[1])); displays.forEach(drawModel); if(state.avatar){line(avatar[0],avatar[1],'#7ed321',4);line(avatar[3],avatar[2],'#7ed321',4);line(avatar[1],avatar[2],'#7ed321',4);line(avatar[1],avatar[4],'#a8ff2a',4);line(avatar[2],avatar[4],'#a8ff2a',4);} ctx.fillStyle='rgba(126,211,33,.9)';ctx.fillRect(w/2-9,h/2-1,18,2);ctx.fillRect(w/2-1,h/2-9,2,18);}
 function avg(p){return p.reduce((s,q)=>s+(Math.sin(state.yaw)*(q[0]-state.x)+Math.cos(state.yaw)*(q[2]-state.z)),0)/p.length}
 function tick(){state.spin+=.025; const k=state.keys,spd=.055,fx=Math.sin(state.yaw),fz=Math.cos(state.yaw),rx=Math.cos(state.yaw),rz=-Math.sin(state.yaw); if(k.w||k.ArrowUp){state.x+=fx*spd;state.z+=fz*spd} if(k.s||k.ArrowDown){state.x-=fx*spd;state.z-=fz*spd} if(k.a||k.ArrowLeft){state.x-=rx*spd;state.z-=rz*spd} if(k.d||k.ArrowRight){state.x+=rx*spd;state.z+=rz*spd} if(k.q)state.y=Math.max(.8,state.y-.035); if(k.e)state.y=Math.min(2.5,state.y+.035); state.x=Math.max(-4.4,Math.min(4.4,state.x));state.z=Math.max(-4.4,Math.min(4.4,state.z)); draw(); requestAnimationFrame(tick)}
 canvas.addEventListener('pointerdown',e=>{state.drag=true;state.lastX=e.clientX;state.lastY=e.clientY;canvas.setPointerCapture(e.pointerId)}); canvas.addEventListener('pointerup',()=>state.drag=false); canvas.addEventListener('pointermove',e=>{if(!state.drag)return; state.yaw-=(e.clientX-state.lastX)*.006; state.pitch=Math.max(-1.1,Math.min(1.1,state.pitch+(e.clientY-state.lastY)*.004)); state.lastX=e.clientX;state.lastY=e.clientY}); canvas.addEventListener('wheel',e=>{e.preventDefault();state.fov=Math.max(260,Math.min(900,state.fov-e.deltaY*.45))},{passive:false});
 document.addEventListener('keydown',e=>state.keys[e.key.length===1?e.key.toLowerCase():e.key]=true); document.addEventListener('keyup',e=>state.keys[e.key.length===1?e.key.toLowerCase():e.key]=false);
 document.querySelector('#addAvatarBtn')?.addEventListener('click',()=>{state.avatar=!state.avatar}); document.querySelector('#resetTourBtn')?.addEventListener('click',()=>Object.assign(state,{x:0,y:1.65,z:2.8,yaw:Math.PI,pitch:-0.03,fov:520,model:'all'})); document.querySelectorAll('[data-model]').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('[data-model]').forEach(b=>b.classList.remove('active'));btn.classList.add('active');state.model=btn.dataset.model;}));
 document.querySelector('#handControlBtn')?.addEventListener('click',async()=>{try{const stream=await navigator.mediaDevices.getUserMedia({video:true});video.srcObject=stream;await video.play();shell.classList.add('hand-active');state.hand=true;if(window.Hands){const hands=new Hands({locateFile:f=>`https://cdn.jsdelivr.net/npm/@mediapipe/hands/${f}`});hands.setOptions({maxNumHands:1,modelComplexity:0,minDetectionConfidence:.6,minTrackingConfidence:.6});hands.onResults(r=>{const p=r.multiHandLandmarks?.[0]?.[8]; if(p){state.yaw+=(p.x-.5)*.05;state.pitch=Math.max(-1.1,Math.min(1.1,state.pitch+(p.y-.5)*.035));}});setInterval(()=>state.hand&&hands.send({image:video}),90)}}catch(err){alert('Camera hand control is unavailable in this browser/session. Mouse and keyboard controls still work.')}});
 window.addEventListener('resize',size); size(); tick();
}
document.addEventListener('DOMContentLoaded',setupHouseExplorer);

const AR_POP_HEIGHT_FEET = 6;
const AR_POP_HEIGHT_METERS = 1.8288;
let arPopCameraStream = null;
let arXrSession = null;

function currentPageSnapshot(){
 const title=document.querySelector('h1')?.textContent?.trim() || document.title.replace(/\s*\|\s*IONCORE\s*$/,'') || 'IONCORE Page';
 const desc=document.querySelector('.lead')?.textContent?.trim() || document.querySelector('meta[name="description"]')?.content || 'View this IONCORE page as a six-foot augmented-reality popout.';
 const hero=document.querySelector('.hero-card img, .pic img, main img, article img, img:not(.logo)');
 return {title,desc,img:hero?.currentSrc || hero?.src || `${window.IONCORE_ASSET_PREFIX || ''}assets/brand/ioncore-logo.svg`,url:location.href};
}

function ensureArPopout(){
 let pop=document.querySelector('#arPopout');
 if(pop) return pop;
 pop=document.createElement('div');
 pop.id='arPopout';
 pop.className='ar-popout';
 pop.setAttribute('role','dialog');
 pop.setAttribute('aria-modal','true');
 pop.setAttribute('aria-label','Six-foot augmented reality page popout');
 pop.innerHTML=`<div class="ar-stage">
  <video class="ar-camera" playsinline muted></video>
  <div class="ar-world" aria-hidden="true">
   <div class="ar-floor-grid"></div>
   <div class="ar-scale-person"><span>6 ft</span></div>
   <article class="ar-page-panel">
    <div class="ar-panel-top"><span class="badge">AR Pop</span><strong>6 ft / 1.83 m</strong></div>
    <img class="ar-panel-image" alt="">
    <div class="ar-panel-body"><h2></h2><p></p><div class="ar-url"></div></div>
   </article>
  </div>
  <div class="ar-toolbar"><button class="btn solid" type="button" id="tryWebXrBtn">Place In Room</button><button class="btn" type="button" id="startArCameraBtn">Camera Preview</button><button class="btn" type="button" id="closeArPopBtn">Close</button></div>
  <p class="ar-note">Tap Place In Room on Android Chrome/WebXR to put this picture into your room. Camera Preview remains available for browsers without WebXR.</p>
 </div>`;
 document.body.appendChild(pop);
 pop.querySelector('#closeArPopBtn').addEventListener('click',closeArPopout);
 pop.querySelector('#startArCameraBtn').addEventListener('click',async()=>{
  const accepted=window.confirm(`Start camera AR and show this page ${AR_POP_HEIGHT_FEET} feet tall in person?`);
  if(accepted) await startArCamera();
 });
 pop.querySelector('#tryWebXrBtn').addEventListener('click',tryWebXrAr);
 pop.addEventListener('click',e=>{ if(e.target===pop) closeArPopout(); });
 return pop;
}

async function requestArPopout(productId){
 const accepted=window.confirm(`AR Pop will open the room placement controls for a ${AR_POP_HEIGHT_FEET}-foot-tall picture panel. Continue?`);
 if(!accepted) return;
 return openArPopout(productId);
}

function openArPopout(productId){
 const product=productId ? PRODUCTS.find(p=>p.id===productId) : null;
 const page=currentPageSnapshot();
 const productUrl=product ? new URL(`${window.IONCORE_ASSET_PREFIX || ''}products/${product.id}.html`, location.href).href : page.url;
 const data=product ? {title:product.title,desc:product.desc,img:img(product.id),url:productUrl} : page;
 const pop=ensureArPopout();
 pop.querySelector('.ar-panel-image').src=data.img;
 pop.querySelector('.ar-panel-image').alt=data.title;
 pop.querySelector('.ar-page-panel h2').textContent=data.title;
 pop.querySelector('.ar-page-panel p').textContent=data.desc;
 pop.querySelector('.ar-url').textContent=data.url;
 pop.classList.add('open');
 document.body.classList.add('ar-popout-open');
 return pop;
}

async function startArCamera(){
 const pop=ensureArPopout();
 const video=pop.querySelector('.ar-camera');
 try{
  if(!arPopCameraStream){arPopCameraStream=await navigator.mediaDevices.getUserMedia({video:{facingMode:{ideal:'environment'}},audio:false});}
  video.srcObject=arPopCameraStream;
  await video.play();
  pop.classList.add('camera-on');
 }catch(err){
  alert('Camera AR is unavailable in this browser/session. The six-foot popout preview still works on screen.');
 }
}

async function tryWebXrAr(){
 if(!navigator.xr){alert('WebXR AR is not available in this browser. Use Camera Preview instead.');return;}
 try{
  const supported=await navigator.xr.isSessionSupported('immersive-ar');
  if(!supported){alert('This device/browser does not report immersive AR support. Use Camera Preview instead.');return;}
  await startRoomArSession();
 }catch(err){
  alert('Unable to start room AR here. Make sure you are using Android Chrome over HTTPS, then use Camera Preview if AR is still unavailable.');
 }
}

function makeArTextureCanvas(){
 const pop=ensureArPopout();
 const title=pop.querySelector('.ar-page-panel h2')?.textContent || document.title;
 const desc=pop.querySelector('.ar-page-panel p')?.textContent || '';
 const image=pop.querySelector('.ar-panel-image');
 const canvas=document.createElement('canvas'); canvas.width=768; canvas.height=1280;
 const ctx=canvas.getContext('2d');
 ctx.fillStyle='#071007'; ctx.fillRect(0,0,canvas.width,canvas.height);
 ctx.strokeStyle='#7ed321'; ctx.lineWidth=18; ctx.strokeRect(9,9,canvas.width-18,canvas.height-18);
 if(image?.complete && image.naturalWidth){
  const h=520, ratio=Math.max(canvas.width/image.naturalWidth,h/image.naturalHeight), w=image.naturalWidth*ratio, ih=image.naturalHeight*ratio;
  ctx.drawImage(image,(canvas.width-w)/2,80+(h-ih)/2,w,ih);
 }
 ctx.fillStyle='rgba(0,0,0,.72)'; ctx.fillRect(0,600,canvas.width,680);
 ctx.fillStyle='#a8ff2a'; ctx.font='800 56px Arial'; wrapCanvasText(ctx,title.toUpperCase(),48,690,canvas.width-96,64,3);
 ctx.fillStyle='#eaffdf'; ctx.font='32px Arial'; wrapCanvasText(ctx,desc,48,910,canvas.width-96,44,6);
 ctx.fillStyle='#7ed321'; ctx.font='700 28px Arial'; ctx.fillText('IONCORE AR • 6 FT ROOM POP',48,1190);
 return canvas;
}
function wrapCanvasText(ctx,text,x,y,maxWidth,lineHeight,maxLines){
 const words=String(text).split(/\s+/); let line='', lines=0;
 words.forEach(word=>{const test=line?line+' '+word:word; if(ctx.measureText(test).width>maxWidth && line){ctx.fillText(line,x,y); y+=lineHeight; line=word; lines++;}else line=test;});
 if(line && lines<maxLines) ctx.fillText(line,x,y);
}
function mat4Multiply(a,b){const o=new Float32Array(16);for(let r=0;r<4;r++)for(let c=0;c<4;c++)o[c+r*4]=a[r*4]*b[c]+a[r*4+1]*b[c+4]+a[r*4+2]*b[c+8]+a[r*4+3]*b[c+12];return o;}
function mat4Scale(m,x,y,z){const s=new Float32Array([x,0,0,0,0,y,0,0,0,0,z,0,0,0,0,1]);return mat4Multiply(m,s);}
async function startRoomArSession(){
 const session=await navigator.xr.requestSession('immersive-ar',{requiredFeatures:['local'],optionalFeatures:['hit-test','dom-overlay'],domOverlay:{root:document.body}});
 arXrSession=session;
 const canvas=document.createElement('canvas'); canvas.className='ar-xr-canvas'; document.body.appendChild(canvas);
 const gl=canvas.getContext('webgl',{xrCompatible:true,alpha:true});
 const program=createArProgram(gl), pos=gl.getAttribLocation(program,'aPos'), uv=gl.getAttribLocation(program,'aUv'), mvpLoc=gl.getUniformLocation(program,'uMvp');
 const buf=gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER,buf); gl.bufferData(gl.ARRAY_BUFFER,new Float32Array([-0.5,0,0,0,1, .5,0,0,1,1, -.5,1,0,0,0, .5,1,0,1,0]),gl.STATIC_DRAW);
 const tex=gl.createTexture(); gl.bindTexture(gl.TEXTURE_2D,tex); gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,gl.LINEAR); gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_S,gl.CLAMP_TO_EDGE); gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_T,gl.CLAMP_TO_EDGE); gl.texImage2D(gl.TEXTURE_2D,0,gl.RGBA,gl.RGBA,gl.UNSIGNED_BYTE,makeArTextureCanvas());
 await gl.makeXRCompatible(); session.updateRenderState({baseLayer:new XRWebGLLayer(session,gl)});
 const ref=await session.requestReferenceSpace('local'); let hitSource=null, model=null;
 try{const viewer=await session.requestReferenceSpace('viewer'); hitSource=await session.requestHitTestSource({space:viewer});}catch(e){}
 session.addEventListener('select',()=>{}); session.addEventListener('end',()=>{canvas.remove(); if(arXrSession===session) arXrSession=null;});
 session.requestAnimationFrame(function frame(t,frame){session.requestAnimationFrame(frame); const pose=frame.getViewerPose(ref); if(!pose)return; if(!model){const hits=hitSource?frame.getHitTestResults(hitSource):[]; model=hits[0]?.getPose(ref)?.transform.matrix || new XRRigidTransform({x:0,y:0,z:-2}).matrix; model=mat4Scale(model,1.1,AR_POP_HEIGHT_METERS,1);} gl.bindFramebuffer(gl.FRAMEBUFFER,session.renderState.baseLayer.framebuffer); gl.clearColor(0,0,0,0); gl.clear(gl.COLOR_BUFFER_BIT|gl.DEPTH_BUFFER_BIT); gl.useProgram(program); gl.bindBuffer(gl.ARRAY_BUFFER,buf); gl.enableVertexAttribArray(pos); gl.vertexAttribPointer(pos,3,gl.FLOAT,false,20,0); gl.enableVertexAttribArray(uv); gl.vertexAttribPointer(uv,2,gl.FLOAT,false,20,12); for(const view of pose.views){const vp=session.renderState.baseLayer.getViewport(view); gl.viewport(vp.x,vp.y,vp.width,vp.height); gl.uniformMatrix4fv(mvpLoc,false,mat4Multiply(view.projectionMatrix,mat4Multiply(view.transform.inverse.matrix,model))); gl.drawArrays(gl.TRIANGLE_STRIP,0,4);}});
}
function createArProgram(gl){
 const vs='attribute vec3 aPos;attribute vec2 aUv;uniform mat4 uMvp;varying vec2 vUv;void main(){vUv=aUv;gl_Position=uMvp*vec4(aPos,1.0);}';
 const fs='precision mediump float;varying vec2 vUv;uniform sampler2D uTex;void main(){gl_FragColor=texture2D(uTex,vUv);}';
 const sh=(t,s)=>{const x=gl.createShader(t);gl.shaderSource(x,s);gl.compileShader(x);return x}; const p=gl.createProgram(); gl.attachShader(p,sh(gl.VERTEX_SHADER,vs)); gl.attachShader(p,sh(gl.FRAGMENT_SHADER,fs)); gl.linkProgram(p); return p;
}

function closeArPopout(){
 const pop=document.querySelector('#arPopout');
 pop?.classList.remove('open','camera-on');
 document.body.classList.remove('ar-popout-open');
 if(arPopCameraStream){arPopCameraStream.getTracks().forEach(t=>t.stop()); arPopCameraStream=null;}
 if(arXrSession){const session=arXrSession; arXrSession=null; session.end().catch(()=>{});}
}

function setupArPopButtons(){
 if(document.querySelector('#globalArPopBtn')) return;
 const btn=document.createElement('button');
 btn.id='globalArPopBtn';
 btn.className='btn solid ar-floating-btn';
 btn.type='button';
 btn.textContent='AR Pop 6 ft';
 btn.setAttribute('aria-label','Pop this page out as a six-foot augmented reality panel');
 btn.addEventListener('click',()=>requestArPopout());
 document.body.appendChild(btn);
 document.querySelectorAll('button[onclick^="openProduct("]').forEach(button=>{
  const match=button.getAttribute('onclick')?.match(/openProduct\('([^']+)'\)/);
  if(match){button.textContent='AR Pop';button.removeAttribute('onclick');button.addEventListener('click',()=>requestArPopout(match[1]));}
 });
}

document.addEventListener('DOMContentLoaded',setupArPopButtons);
document.addEventListener('keydown',e=>{ if(e.key==='Escape') closeArPopout(); });
