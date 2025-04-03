// Marvel Heroes Deck (50 cards)
const heroesDeck = [
  { name: "Iron Man", strength: 85, resilience: 80, speed: 70, magic: 60, intelligence: 100, image: "https://i.postimg.cc/8zQ3Zz7r/ironman.jpg" },
  { name: "Captain America", strength: 80, resilience: 90, speed: 50, magic: 30, intelligence: 70, image: "https://i.postimg.cc/8zQ3Zz7r/captainamerica.jpg" },
  { name: "Thor", strength: 95, resilience: 90, speed: 80, magic: 90, intelligence: 70, image: "https://i.postimg.cc/8zQ3Zz7r/thor.jpg" },
  { name: "Hulk", strength: 100, resilience: 95, speed: 60, magic: 10, intelligence: 50, image: "https://i.postimg.cc/8zQ3Zz7r/hulk.jpg" },
  { name: "Black Widow", strength: 70, resilience: 75, speed: 85, magic: 20, intelligence: 90, image: "https://i.postimg.cc/8zQ3Zz7r/blackwidow.jpg" },
  { name: "Hawkeye", strength: 65, resilience: 70, speed: 75, magic: 15, intelligence: 80, image: "https://i.postimg.cc/8zQ3Zz7r/hawkeye.jpg" },
  { name: "Spider-Man", strength: 80, resilience: 85, speed: 90, magic: 40, intelligence: 85, image: "https://i.postimg.cc/8zQ3Zz7r/spiderman.jpg" },
  { name: "Black Panther", strength: 85, resilience: 85, speed: 85, magic: 50, intelligence: 95, image: "https://i.postimg.cc/8zQ3Zz7r/blackpanther.jpg" },
  { name: "Doctor Strange", strength: 70, resilience: 75, speed: 60, magic: 100, intelligence: 95, image: "https://i.postimg.cc/8zQ3Zz7r/doctorstrange.jpg" },
  { name: "Scarlet Witch", strength: 75, resilience: 80, speed: 65, magic: 95, intelligence: 85, image: "https://i.postimg.cc/8zQ3Zz7r/scarletwitch.jpg" },
  { name: "Ant-Man", strength: 60, resilience: 65, speed: 70, magic: 55, intelligence: 85, image: "https://i.postimg.cc/8zQ3Zz7r/antman.jpg" },
  { name: "Wasp", strength: 55, resilience: 60, speed: 80, magic: 45, intelligence: 80, image: "https://i.postimg.cc/8zQ3Zz7r/wasp.jpg" },
  { name: "Falcon", strength: 70, resilience: 75, speed: 85, magic: 20, intelligence: 75, image: "https://i.postimg.cc/8zQ3Zz7r/falcon.jpg" },
  { name: "Winter Soldier", strength: 85, resilience: 85, speed: 70, magic: 30, intelligence: 75, image: "https://i.postimg.cc/8zQ3Zz7r/wintersoldier.jpg" },
  { name: "Vision", strength: 90, resilience: 95, speed: 75, magic: 80, intelligence: 90, image: "https://i.postimg.cc/8zQ3Zz7r/vision.jpg" },
  { name: "War Machine", strength: 80, resilience: 85, speed: 65, magic: 40, intelligence: 80, image: "https://i.postimg.cc/8zQ3Zz7r/warmachine.jpg" },
  { name: "Star-Lord", strength: 70, resilience: 75, speed: 75, magic: 60, intelligence: 80, image: "https://i.postimg.cc/8zQ3Zz7r/starlord.jpg" },
  { name: "Gamora", strength: 85, resilience: 80, speed: 90, magic: 50, intelligence: 85, image: "https://i.postimg.cc/8zQ3Zz7r/gamora.jpg" },
  { name: "Drax", strength: 90, resilience: 90, speed: 65, magic: 20, intelligence: 60, image: "https://i.postimg.cc/8zQ3Zz7r/drax.jpg" },
  { name: "Rocket Raccoon", strength: 40, resilience: 50, speed: 70, magic: 30, intelligence: 95, image: "https://i.postimg.cc/8zQ3Zz7r/rocket.jpg" },
  { name: "Groot", strength: 85, resilience: 90, speed: 50, magic: 70, intelligence: 60, image: "https://i.postimg.cc/8zQ3Zz7r/groot.jpg" },
  { name: "Mantis", strength: 50, resilience: 60, speed: 65, magic: 85, intelligence: 70, image: "https://i.postimg.cc/8zQ3Zz7r/mantis.jpg" },
  { name: "Nebula", strength: 80, resilience: 85, speed: 85, magic: 40, intelligence: 85, image: "https://i.postimg.cc/8zQ3Zz7r/nebula.jpg" },
  { name: "Captain Marvel", strength: 95, resilience: 95, speed: 90, magic: 85, intelligence: 80, image: "https://i.postimg.cc/8zQ3Zz7r/captainmarvel.jpg" },
  { name: "Shang-Chi", strength: 85, resilience: 80, speed: 90, magic: 60, intelligence: 80, image: "https://i.postimg.cc/8zQ3Zz7r/shangchi.jpg" },
  { name: "She-Hulk", strength: 90, resilience: 85, speed: 70, magic: 20, intelligence: 85, image: "https://i.postimg.cc/8zQ3Zz7r/shehulk.jpg" },
  { name: "Moon Knight", strength: 80, resilience: 85, speed: 75, magic: 70, intelligence: 75, image: "https://i.postimg.cc/8zQ3Zz7r/moonknight.jpg" },
  { name: "Ms. Marvel", strength: 70, resilience: 75, speed: 65, magic: 80, intelligence: 75, image: "https://i.postimg.cc/8zQ3Zz7r/msmarvel.jpg" },
  { name: "Photon", strength: 75, resilience: 80, speed: 85, magic: 70, intelligence: 80, image: "https://i.postimg.cc/8zQ3Zz7r/photon.jpg" },
  { name: "America Chavez", strength: 85, resilience: 85, speed: 90, magic: 75, intelligence: 70, image: "https://i.postimg.cc/8zQ3Zz7r/americachavez.jpg" },
  { name: "Doctor Voodoo", strength: 70, resilience: 75, speed: 60, magic: 90, intelligence: 85, image: "https://i.postimg.cc/8zQ3Zz7r/doctorvoodoo.jpg" },
  { name: "Ghost Rider", strength: 85, resilience: 90, speed: 75, magic: 90, intelligence: 70, image: "https://i.postimg.cc/8zQ3Zz7r/ghostrider.jpg" },
  { name: "Blade", strength: 80, resilience: 85, speed: 85, magic: 60, intelligence: 80, image: "https://i.postimg.cc/8zQ3Zz7r/blade.jpg" },
  { name: "Sersi", strength: 70, resilience: 75, speed: 65, magic: 90, intelligence: 85, image: "https://i.postimg.cc/8zQ3Zz7r/sersi.jpg" },
  { name: "Kingo", strength: 75, resilience: 80, speed: 80, magic: 50, intelligence: 75, image: "https://i.postimg.cc/8zQ3Zz7r/kingo.jpg" },
  { name: "Thena", strength: 90, resilience: 85, speed: 85, magic: 70, intelligence: 80, image: "https://i.postimg.cc/8zQ3Zz7r/thena.jpg" },
  { name: "Ikaris", strength: 95, resilience: 90, speed: 90, magic: 60, intelligence: 75, image: "https://i.postimg.cc/8zQ3Zz7r/ikaris.jpg" },
  { name: "Makkari", strength: 80, resilience: 75, speed: 100, magic: 40, intelligence: 80, image: "https://i.postimg.cc/8zQ3Zz7r/makkari.jpg" },
  { name: "Daredevil", strength: 75, resilience: 80, speed: 85, magic: 30, intelligence: 85, image: "https://i.postimg.cc/8zQ3Zz7r/daredevil.jpg" },
  { name: "Jessica Jones", strength: 80, resilience: 85, speed: 60, magic: 20, intelligence: 80, image: "https://i.postimg.cc/8zQ3Zz7r/jessicajones.jpg" },
  { name: "Luke Cage", strength: 90, resilience: 95, speed: 50, magic: 10, intelligence: 75, image: "https://i.postimg.cc/8zQ3Zz7r/lukecage.jpg" },
  { name: "Iron Fist", strength: 85, resilience: 80, speed: 85, magic: 70, intelligence: 75, image: "https://i.postimg.cc/8zQ3Zz7r/ironfist.jpg" },
  { name: "Punisher", strength: 75, resilience: 80, speed: 70, magic: 10, intelligence: 85, image: "https://i.postimg.cc/8zQ3Zz7r/punisher.jpg" },
  { name: "Elektra", strength: 75, resilience: 75, speed: 85, magic: 30, intelligence: 80, image: "https://i.postimg.cc/8zQ3Zz7r/elektra.jpg" },
  { name: "Colossus", strength: 95, resilience: 100, speed: 50, magic: 30, intelligence: 70, image: "https://i.postimg.cc/8zQ3Zz7r/colossus.jpg" },
  { name: "Deadpool", strength: 80, resilience: 90, speed: 75, magic: 40, intelligence: 85, image: "https://i.postimg.cc/8zQ3Zz7r/deadpool.jpg" },
  { name: "Cable", strength: 85, resilience: 85, speed: 70, magic: 80, intelligence: 90, image: "https://i.postimg.cc/8zQ3Zz7r/cable.jpg" },
  { name: "Domino", strength: 70, resilience: 75, speed: 80, magic: 60, intelligence: 80, image: "https://i.postimg.cc/8zQ3Zz7r/domino.jpg" },
  { name: "Psylocke", strength: 75, resilience: 75, speed: 85, magic: 80, intelligence: 80, image: "https://i.postimg.cc/8zQ3Zz7r/psylocke.jpg" },
  { name: "Wolverine", strength: 85, resilience: 95, speed: 80, magic: 30, intelligence: 75, image: "https://i.postimg.cc/8zQ3Zz7r/wolverine.jpg" }
];

const villainsDeck = [
  { name: "Thanos", strength: 100, resilience: 95, speed: 60, magic: 90, intelligence: 90, image: "https://i.postimg.cc/8zQ3Zz7r/thanos.jpg" },
  { name: "Loki", strength: 60, resilience: 70, speed: 65, magic: 85, intelligence: 90, image: "https://i.postimg.cc/8zQ3Zz7r/loki.jpg" },
  { name: "Green Goblin", strength: 75, resilience: 70, speed: 60, magic: 50, intelligence: 80, image: "https://i.postimg.cc/8zQ3Zz7r/greengoblin.jpg" },
  { name: "Doctor Doom", strength: 80, resilience: 85, speed: 65, magic: 95, intelligence: 100, image: "https://i.postimg.cc/8zQ3Zz7r/doctordoom.jpg" },
  { name: "Magneto", strength: 75, resilience: 80, speed: 70, magic: 90, intelligence: 95, image: "https://i.postimg.cc/8zQ3Zz7r/magneto.jpg" },
  { name: "Ultron", strength: 90, resilience: 95, speed: 75, magic: 80, intelligence: 95, image: "https://i.postimg.cc/8zQ3Zz7r/ultron.jpg" },
  { name: "Red Skull", strength: 70, resilience: 75, speed: 60, magic: 40, intelligence: 85, image: "https://i.postimg.cc/8zQ3Zz7r/redskull.jpg" },
  { name: "Venom", strength: 85, resilience: 90, speed: 75, magic: 40, intelligence: 70, image: "https://i.postimg.cc/8zQ3Zz7r/venom.jpg" },
  { name: "Galactus", strength: 100, resilience: 100, speed: 70, magic: 95, intelligence: 90, image: "https://i.postimg.cc/8zQ3Zz7r/galactus.jpg" },
  { name: "Kang", strength: 80, resilience: 85, speed: 75, magic: 85, intelligence: 95, image: "https://i.postimg.cc/8zQ3Zz7r/kang.jpg" },
  { name: "Baron Zemo", strength: 70, resilience: 75, speed: 70, magic: 30, intelligence: 90, image: "https://i.postimg.cc/8zQ3Zz7r/zemo.jpg" },
  { name: "Hela", strength: 90, resilience: 90, speed: 75, magic: 95, intelligence: 85, image: "https://i.postimg.cc/8zQ3Zz7r/hela.jpg" },
  { name: "Abomination", strength: 95, resilience: 90, speed: 60, magic: 20, intelligence: 60, image: "https://i.postimg.cc/8zQ3Zz7r/abomination.jpg" },
  { name: "Ronan", strength: 85, resilience: 90, speed: 65, magic: 80, intelligence: 85, image: "https://i.postimg.cc/8zQ3Zz7r/ronan.jpg" },
  { name: "Ego", strength: 90, resilience: 95, speed: 50, magic: 95, intelligence: 90, image: "https://i.postimg.cc/8zQ3Zz7r/ego.jpg" },
  { name: "Yon-Rogg", strength: 80, resilience: 85, speed: 75, magic: 40, intelligence: 85, image: "https://i.postimg.cc/8zQ3Zz7r/yonrogg.jpg" },
  { name: "Mysterio", strength: 60, resilience: 65, speed: 65, magic: 85, intelligence: 90, image: "https://i.postimg.cc/8zQ3Zz7r/mysterio.jpg" },
  { name: "Vulture", strength: 70, resilience: 75, speed: 85, magic: 30, intelligence: 80, image: "https://i.postimg.cc/8zQ3Zz7r/vulture.jpg" },
  { name: "Shocker", strength: 75, resilience: 80, speed: 70, magic: 40, intelligence: 70, image: "https://i.postimg.cc/8zQ3Zz7r/shocker.jpg" },
  { name: "Scorpion", strength: 80, resilience: 85, speed: 70, magic: 30, intelligence: 65, image: "https://i.postimg.cc/8zQ3Zz7r/scorpion.jpg" },
  { name: "Electro", strength: 70, resilience: 75, speed: 80, magic: 85, intelligence: 75, image: "https://i.postimg.cc/8zQ3Zz7r/electro.jpg" },
  { name: "Sandman", strength: 85, resilience: 90, speed: 60, magic: 70, intelligence: 70, image: "https://i.postimg.cc/8zQ3Zz7r/sandman.jpg" },
  { name: "Rhino", strength: 90, resilience: 95, speed: 50, magic: 20, intelligence: 50, image: "https://i.postimg.cc/8zQ3Zz7r/rhino.jpg" },
  { name: "Kingpin", strength: 80, resilience: 85, speed: 50, magic: 20, intelligence: 90, image: "https://i.postimg.cc/8zQ3Zz7r/kingpin.jpg" },
  { name: "Bullseye", strength: 70, resilience: 75, speed: 80, magic: 20, intelligence: 80, image: "https://i.postimg.cc/8zQ3Zz7r/bullseye.jpg" },
  { name: "Taskmaster", strength: 80, resilience: 85, speed: 85, magic: 30, intelligence: 85, image: "https://i.postimg.cc/8zQ3Zz7r/taskmaster.jpg" },
  { name: "Baron Mordo", strength: 75, resilience: 80, speed: 70, magic: 85, intelligence: 85, image: "https://i.postimg.cc/8zQ3Zz7r/mordo.jpg" },
  { name: "Dormammu", strength: 95, resilience: 95, speed: 70, magic: 100, intelligence: 90, image: "https://i.postimg.cc/8zQ3Zz7r/dormammu.jpg" },
  { name: "Kaecilius", strength: 80, resilience: 85, speed: 75, magic: 85, intelligence: 80, image: "https://i.postimg.cc/8zQ3Zz7r/kaecilius.jpg" },
  { name: "Malekith", strength: 85, resilience: 85, speed: 80, magic: 90, intelligence: 85, image: "https://i.postimg.cc/8zQ3Zz7r/malekith.jpg" },
  { name: "Killmonger", strength: 85, resilience: 80, speed: 85, magic: 40, intelligence: 90, image: "https://i.postimg.cc/8zQ3Zz7r/killmonger.jpg" },
  { name: "Klaw", strength: 75, resilience: 80, speed: 70, magic: 60, intelligence: 80, image: "https://i.postimg.cc/8zQ3Zz7r/klaw.jpg" },
  { name: "Ghost", strength: 70, resilience: 75, speed: 85, magic: 65, intelligence: 85, image: "https://i.postimg.cc/8zQ3Zz7r/ghost.jpg" },
  { name: "A.I.M. Leader", strength: 60, resilience: 65, speed: 60, magic: 70, intelligence: 95, image: "https://i.postimg.cc/8zQ3Zz7r/aimleader.jpg" },
  { name: "Titania", strength: 85, resilience: 85, speed: 70, magic: 30, intelligence: 70, image: "https://i.postimg.cc/8zQ3Zz7r/titania.jpg" },
  { name: "Absorbing Man", strength: 85, resilience: 90, speed: 60, magic: 70, intelligence: 65, image: "https://i.postimg.cc/8zQ3Zz7r/absorbingman.jpg" },
  { name: "Whiplash", strength: 75, resilience: 80, speed: 75, magic: 40, intelligence: 85, image: "https://i.postimg.cc/8zQ3Zz7r/whiplash.jpg" },
  { name: "Justin Hammer", strength: 60, resilience: 65, speed: 60, magic: 20, intelligence: 85, image: "https://i.postimg.cc/8zQ3Zz7r/hammer.jpg" },
  { name: "Crossbones", strength: 80, resilience: 85, speed: 70, magic: 20, intelligence: 75, image: "https://i.postimg.cc/8zQ3Zz7r/crossbones.jpg" },
  { name: "Zola", strength: 50, resilience: 60, speed: 50, magic: 70, intelligence: 95, image: "https://i.postimg.cc/8zQ3Zz7r/zola.jpg" },
  { name: "Kurse", strength: 95, resilience: 95, speed: 70, magic: 60, intelligence: 70, image: "https://i.postimg.cc/8zQ3Zz7r/kurse.jpg" },
  { name: "Surtur", strength: 100, resilience: 100, speed: 60, magic: 95, intelligence: 80, image: "https://i.postimg.cc/8zQ3Zz7r/surtur.jpg" },
  { name: "Hela's Wolf", strength: 90, resilience: 90, speed: 85, magic: 50, intelligence: 50, image: "https://i.postimg.cc/8zQ3Zz7r/fenris.jpg" },
  { name: "Enchantress", strength: 70, resilience: 75, speed: 70, magic: 90, intelligence: 85, image: "https://i.postimg.cc/8zQ3Zz7r/enchantress.jpg" },
  { name: "Executioner", strength: 85, resilience: 85, speed: 70, magic: 60, intelligence: 70, image: "https://i.postimg.cc/8zQ3Zz7r/executioner.jpg" },
  { name: "Corvus Glaive", strength: 85, resilience: 85, speed: 80, magic: 60, intelligence: 85, image: "https://i.postimg.cc/8zQ3Zz7r/corvus.jpg" },
  { name: "Proxima Midnight", strength: 80, resilience: 80, speed: 85, magic: 60, intelligence: 85, image: "https://i.postimg.cc/8zQ3Zz7r/proxima.jpg" },
  { name: "Ebony Maw", strength: 60, resilience: 65, speed: 70, magic: 95, intelligence: 95, image: "https://i.postimg.cc/8zQ3Zz7r/ebonymaw.jpg" },
  { name: "Cull Obsidian", strength: 95, resilience: 95, speed: 60, magic: 40, intelligence: 70, image: "https://i.postimg.cc/8zQ3Zz7r/cull.jpg" },
  { name: "High Evolutionary", strength: 70, resilience: 75, speed: 65, magic: 90, intelligence: 100, image: "https://i.postimg.cc/8zQ3Zz7r/highevo.jpg" },
  { name: "The Collector", strength: 60, resilience: 65, speed: 60, magic: 80, intelligence: 90, image: "https://i.postimg.cc/8zQ3Zz7r/collector.jpg" },
  { name: "Grandmaster", strength: 65, resilience: 70, speed: 65, magic: 85, intelligence: 95, image: "https://i.postimg.cc/8zQ3Zz7r/grandmaster.jpg" }
];
// Game state
let playerHand = [];
let computerHand = [];
let playerScore = 0;
let computerScore = 0;
let selectedCard = null;
let currentRound = 0;
const totalRounds = 7;

// DOM elements
const playerScoreEl = document.getElementById('player-score');
const computerScoreEl = document.getElementById('computer-score');
const phaseMessageEl = document.getElementById('phase-message');
const playerHandEl = document.getElementById('player-hand');
const attributeSelectionEl = document.getElementById('attribute-selection');
const battleDisplayEl = document.getElementById('battle-display');
const battleResultEl = document.getElementById('battle-result');
const nextRoundBtn = document.getElementById('next-round-btn');
const newGameBtn = document.getElementById('new-game-btn');
const restartBtn = document.getElementById('restart-btn');

// Initialize game
function initGame() {
    // Reset game state
    playerHand = [];
    computerHand = [];
    playerScore = 0;
    computerScore = 0;
    selectedCard = null;
    currentRound = 0;
    
    // Update UI
    updateScore();
    phaseMessageEl.textContent = "Escolha uma carta da sua mão";
    phaseMessageEl.className = "phase-message marvel-font";
    battleDisplayEl.style.display = 'none';
    attributeSelectionEl.style.display = 'none';
    nextRoundBtn.style.display = 'none';
    
    // Shuffle and deal cards
    playerHand = shuffleArray([...heroesDeck]).slice(0, 7);
    computerHand = shuffleArray([...villainsDeck]).slice(0, 7);
    
    displayPlayerHand();
}

// Shuffle array
function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

// Display player's hand
function displayPlayerHand() {
    playerHandEl.innerHTML = '';
    
    playerHand.forEach((card, index) => {
        const cardElement = document.createElement('div');
        cardElement.className = 'card';
        cardElement.innerHTML = `
            <img src="${card.image}" alt="${card.name}">
            <h3>${card.name}</h3>
            <div class="attributes">
                <div class="attribute"><span>Força:</span> <span>${card.strength}</span></div>
                <div class="attribute"><span>Resistência:</span> <span>${card.resilience}</span></div>
                <div class="attribute"><span>Velocidade:</span> <span>${card.speed}</span></div>
                <div class="attribute"><span>Magia:</span> <span>${card.magic}</span></div>
                <div class="attribute"><span>Inteligência:</span> <span>${card.intelligence}</span></div>
            </div>
        `;
        
        cardElement.addEventListener('click', () => selectPlayerCard(index));
        playerHandEl.appendChild(cardElement);
    });
}

// Select player card
function selectPlayerCard(index) {
    selectedCard = playerHand[index];
    
    // Highlight selected card
    document.querySelectorAll('.card').forEach(card => card.classList.remove('selected'));
    document.querySelectorAll('.card')[index].classList.add('selected');
    
    // Show attribute selection
    playerHandEl.style.display = 'none';
    attributeSelectionEl.style.display = 'block';
    phaseMessageEl.textContent = "Escolha um atributo para comparar";
    
    // Create attribute buttons
    const buttonsContainer = document.querySelector('.attribute-buttons');
    buttonsContainer.innerHTML = '';
    
    const attributes = ['strength', 'resilience', 'speed', 'magic', 'intelligence'];
    const attributeNames = ['Força', 'Resistência', 'Velocidade', 'Magia', 'Inteligência'];
    
    attributes.forEach((attr, i) => {
        const button = document.createElement('button');
        button.className = 'attribute-btn';
        button.textContent = `${attributeNames[i]}: ${selectedCard[attr]}`;
        button.addEventListener('click', () => compareAttributes(attr));
        buttonsContainer.appendChild(button);
    });
}

// Compare attributes
function compareAttributes(attribute) {
    // Computer selects random card from its hand
    const computerCardIndex = Math.floor(Math.random() * computerHand.length);
    const computerCard = computerHand[computerCardIndex];
    
    // Display battle
    displayBattle(selectedCard, computerCard, attribute);
    
    // Compare values
    const playerValue = selectedCard[attribute];
    const computerValue = computerCard[attribute];
    
    let resultMessage = "";
    let resultClass = "";
    
    if (playerValue > computerValue) {
        playerScore++;
        resultMessage = `Você venceu! ${playerValue} vs ${computerValue}`;
        resultClass = "win";
    } else if (playerValue < computerValue) {
        computerScore++;
        resultMessage = `Você perdeu! ${computerValue} vs ${playerValue}`;
        resultClass = "lose";
    } else {
        resultMessage = `Empate! Nenhum ponto concedido. ${playerValue} vs ${computerValue}`;
        resultClass = "tie";
    }
    
    // Remove cards regardless of result
    playerHand = playerHand.filter(card => card !== selectedCard);
    computerHand.splice(computerCardIndex, 1);
    currentRound++;
    
    battleResultEl.textContent = resultMessage;
    battleResultEl.className = `battle-result marvel-font ${resultClass}`;
    updateScore();
    
    // Prepare for next round or end game
    nextRoundBtn.style.display = 'block';
    if (currentRound >= totalRounds || playerHand.length === 0 || computerHand.length === 0) {
        endGame();
    }
}

// Display battle
function displayBattle(playerCard, computerCard, attribute) {
    playerHandEl.style.display = 'none';
    attributeSelectionEl.style.display = 'none';
    battleDisplayEl.style.display = 'block';
    
    const playerBattleCardEl = document.getElementById('player-battle-card');
    const computerBattleCardEl = document.getElementById('computer-battle-card');
    
    playerBattleCardEl.innerHTML = createCardHTML(playerCard, attribute);
    computerBattleCardEl.innerHTML = createCardHTML(computerCard, attribute);
}

// Create card HTML for battle display
function createCardHTML(card, highlightAttr) {
    const attributes = ['strength', 'resilience', 'speed', 'magic', 'intelligence'];
    const attributeNames = ['Força', 'Resistência', 'Velocidade', 'Magia', 'Inteligência'];
    let attributesHTML = '';
    
    attributes.forEach((attr, i) => {
        const highlightClass = attr === highlightAttr ? 'highlight' : '';
        attributesHTML += `
            <div class="attribute ${highlightClass}">
                <span>${attributeNames[i]}:</span>
                <span>${card[attr]}</span>
            </div>
        `;
    });
    
    return `
        <img src="${card.image}" alt="${card.name}">
        <h3>${card.name}</h3>
        <div class="attributes">
            ${attributesHTML}
        </div>
    `;
}

// Update score display
function updateScore() {
    playerScoreEl.textContent = playerScore;
    computerScoreEl.textContent = computerScore;
}

// Next round
function nextRound() {
    battleDisplayEl.style.display = 'none';
    nextRoundBtn.style.display = 'none';
    
    if (playerHand.length > 0 && computerHand.length > 0 && currentRound < totalRounds) {
        playerHandEl.style.display = 'flex';
        displayPlayerHand();
        phaseMessageEl.textContent = "Escolha uma carta da sua mão";
    } else {
        endGame();
    }
}

// End game
function endGame() {
    let finalMessage = "";
    let resultClass = "";
    
    if (playerScore > computerScore) {
        finalMessage = `Você venceu o jogo! ${playerScore} - ${computerScore}`;
        resultClass = "win";
    } else if (playerScore < computerScore) {
        finalMessage = `Você perdeu o jogo! ${computerScore} - ${playerScore}`;
        resultClass = "lose";
    } else {
        finalMessage = `Empate! ${playerScore} - ${computerScore}`;
        resultClass = "tie";
    }
    
    phaseMessageEl.textContent = "Fim de Jogo";
    phaseMessageEl.className = "phase-message marvel-font game-over";
    battleResultEl.textContent = finalMessage;
    battleResultEl.className = `battle-result marvel-font ${resultClass}`;
    nextRoundBtn.style.display = 'none';
    playerHandEl.style.display = 'none';
    attributeSelectionEl.style.display = 'none';
    battleDisplayEl.style.display = 'block';
}

// Event listeners
nextRoundBtn.addEventListener('click', nextRound);
newGameBtn.addEventListener('click', initGame);
restartBtn.addEventListener('click', initGame);

// Start the game when the page loads
window.addEventListener('DOMContentLoaded', initGame);