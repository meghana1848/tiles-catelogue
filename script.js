const tiles = [
    {
        name: "Imperial Statuario White",
        price: "₹450 / sq.ft",
        imgUrl: "https://images.unsplash.com/photo-1600607675763-336368473f01?auto=format&fit=crop&w=800&q=80",
        category: "Flooring",
        type: "Ultra Luxury",
        description: "Our flagship Italian marble. Featuring deep grey veining against a crisp white background, this tile is perfect for grand living rooms."
    },
    {
        name: "Midnight Onyx Black",
        price: "₹620 / sq.ft",
        imgUrl: "https://images.unsplash.com/photo-1504148626136-394993115835?auto=format&fit=crop&w=800&q=80",
        category: "Bedroom",
        type: "Modern Elite",
        description: "A bold statement of power and luxury. The Midnight Onyx offers a deep, saturated black tone. Ideal for executive offices."
    },
    {
        name: "Royal Gold Travertine",
        price: "₹380 / sq.ft",
        imgUrl: "https://images.unsplash.com/photo-1615529151163-dc757da73765?auto=format&fit=crop&w=800&q=80",
        category: "Bathroom",
        type: "Classic",
        description: "Inspired by ancient Roman architecture, providing a warm, earthy glow. Perfect for spa-like bathrooms."
    },
    {
        name: "Azure Glass Mosaic",
        price: "₹850 / sq.ft",
        imgUrl: "https://images.unsplash.com/photo-1523413557013-d5C677969d41?auto=format&fit=crop&w=800&q=80",
        category: "Bathroom",
        type: "Premium",
        description: "Hand-cut iridescent glass tiles that capture and reflect light like water. Primarily used for luxury bathrooms."
    },
    {
        name: "Vintage Terracotta Clay",
        price: "₹210 / sq.ft",
        imgUrl: "https://images.unsplash.com/photo-1590060356732-9733699d4189?auto=format&fit=crop&w=800&q=80",
        category: "Flooring",
        type: "Heritage",
        description: "Traditional Indian architecture brought to life. Breathable tiles that keep the room cool during harsh summers."
    },
    {
        name: "Sleek Grey Slate",
        price: "₹310 / sq.ft",
        imgUrl: "https://images.unsplash.com/photo-1584622666680-27551237efc3?auto=format&fit=crop&w=800&q=80",
        category: "Walls",
        type: "Contemporary",
        description: "A minimalist's dream. Non-slip surface that blends seamlessly into modern industrial designs. Perfect for accent walls."
    }
];

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
    if (tileList.length === 0) {
        grid.innerHTML = `<p class="text-center col-span-full text-stone-500 italic py-20">Coming soon to our luxury collection...</p>`;
        return;
    }

    grid.innerHTML = tileList.map((tile, index) => `
        <div class="tile-card group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-stone-100 relative">
            <div class="h-80 overflow-hidden relative">
                <img src="${tile.imgUrl}" alt="${tile.name}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700">
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
