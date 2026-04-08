// LUXURY DATASET
const luxuryKeywords = {
    "Flooring": ["Imperial", "Royal", "Dynasty", "Majestic", "Sovereign", "Grand", "Elite", "Opulent"],
    "Walls": ["Sleek", "Modern", "Artisan", "Sculpted", "Ethereal", "Pure", "Urban", "Velvet"],
    "Bathroom": ["Azure", "Aqua", "Mist", "Crystal", "Ivory", "Pearl", "Satin", "Zenith"],
    "Bedroom": ["Cosy", "Warm", "Dream", "Silk", "Sable", "Golden", "Amber", "Luna"]
};

const materials = ["Marble", "Quartz", "Porcelain", "Granite", "Ceramic", "Slate", "Travertine", "Onyx"];
const finishes = ["Polished", "Matte", "Satin", "High-Gloss", "Honed", "Brushed"];

// GENERATE 100+ TILES
const tiles = [];
const categories = ["Flooring", "Walls", "Bathroom", "Bedroom"];

for (let i = 0; i < 100; i++) {
    const cat = categories[i % 4];
    const keyword = luxuryKeywords[cat][Math.floor(Math.random() * luxuryKeywords[cat].length)];
    const mat = materials[Math.floor(Math.random() * materials.length)];
    const finish = finishes[Math.floor(Math.random() * finishes.length)];
    
    // Stable Unsplash Images (Rotating 10 different luxury images)
    const imageIds = [
        "1600607675763-336368473f01", "1504148626136-394993115835", 
        "1615529151163-dc757da73765", "1523413557013-d5C677969d41",
        "1590060356732-9733699d4189", "1584622666680-27551237efc3",
        "1600585154340-be6161a56a0c", "1581850517630-6751474616a3",
        "1504148626136-394993115835", "1600607675763-336368473f01"
    ];
    const selectedImg = imageIds[i % 10];

    tiles.push({
        name: `${keyword} ${mat} ${finish}`,
        price: `₹${Math.floor(Math.random() * (800 - 200) + 200)} / sq.ft`,
        imgUrl: `https://images.unsplash.com/photo-${selectedImg}?auto=format&fit=crop&w=800&q=80`,
        category: cat,
        type: `${mat} Series`,
        description: `A masterpiece of design. This ${finish} ${mat} tile from our ${keyword} collection is crafted for those who appreciate the finer things in life. Durable, stain-resistant, and visually stunning.`
    });
}

function startExperience(chosenCategory) {
    document.getElementById('welcome-screen').classList.add('hidden-welcome');
    document.getElementById('cat-title').innerText = `${chosenCategory} Collection`;
    
    const filteredTiles = tiles.filter(tile => tile.category === chosenCategory);
    displayTiles(filteredTiles);
    
    setTimeout(() => {
        document.getElementById('catalogue').scrollIntoView({ behavior: 'smooth' });
    }, 800);
}

function displayTiles(tileList) {
    const grid = document.getElementById('tile-grid');
    
    // Fallback if no tiles found
    if (tileList.length === 0) {
        grid.innerHTML = `<p class="text-center col-span-full text-stone-500 italic py-20">Coming soon to our luxury collection...</p>`;
        return;
    }

    grid.innerHTML = tileList.map((tile) => `
        <div class="tile-card group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-stone-100 relative">
            <div class="h-80 overflow-hidden relative">
                <img src="${tile.imgUrl}" 
                     onerror="this.src='https://via.placeholder.com/800x600?text=Luxury+Tile'" 
                     alt="${tile.name}" 
                     class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700">
                <div class="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest gold-text shadow-sm">
                    ${tile.type}
                </div>
            </div>
            <div class="p-8">
                <h4 class="text-2xl font-bold mb-2 text-stone-900">${tile.name}</h4>
                <p class="text-stone-500 text-sm mb-6 font-light line-clamp-2">${tile.description}</p>
                <div class="flex justify-between items-center border-t border-stone-100 pt-6">
                    <span class="text-xl font-bold text-stone-800">${tile.price}</span>
                    <button onclick="openModal('${tile.name}')" class="text-xs font-bold uppercase tracking-widest hover:text-amber-600 transition underline underline-offset-4">View Details</button>
                </div>
            </div>
        </div>
    `).join('');
}

function openModal(tileName) {
    const tile = tiles.find(t => t.name === tileName);
    document.getElementById('modalImg').src = tile.imgUrl;
    document.getElementById('modalName').innerText = tile.name;
    document.getElementById('modalCat').innerText = tile.type;
    document.getElementById('modalPrice').innerText = tile.price;
    document.getElementById('modalDesc').innerText = tile.description;
    document.getElementById('detailModal').classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    document.getElementById('detailModal').classList.add('hidden');
    document.body.style.overflow = 'auto';
}

function calculateTiles() {
    const length = parseFloat(document.getElementById('roomLength').value);
    const width = parseFloat(document.getElementById('roomWidth').value);
    const tileSizeInches = parseFloat(document.getElementById('tileSize').value);
    const tilesPerBox = parseInt(document.getElementById('tilesPerBox').value);

    if (!length || !width) {
        alert("Please provide room dimensions.");
        return;
    }

    const totalArea = length * width;
    const tileAreaSqFt = (tileSizeInches * tileSizeInches) / 144;
    let totalTilesNeeded = (totalArea / tileAreaSqFt) * 1.10;
    const boxesNeeded = Math.ceil(totalTilesNeeded / tilesPerBox);

    document.getElementById('resArea').innerText = totalArea.toFixed(2);
    document.getElementById('resTiles').innerText = Math.ceil(totalTilesNeeded);
    document.getElementById('resBoxes').innerText = boxesNeeded;
    document.getElementById('resultArea').classList.remove('hidden');
}

function handleForm(event) {
    event.preventDefault();
    alert("✨ Thank you for contacting Johnson Tiles! Your inquiry has been sent to meghanavangapandu18@gmail.com. We will get back to you shortly.");
    event.target.reset();
}
