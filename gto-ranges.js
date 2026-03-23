// GTO Preflop Opening Ranges for 6-max
// Based on standard GTO solver outputs
// Format: hand notation → action
//   R = Raise (open or 3-bet)
//   C = Call
//   F = Fold
// Hands: "AKs" = suited, "AKo" = offsuit, "AA" = pair
// Positions: UTG, MP (HJ), CO, BTN, SB, BB

const GTO_RANGES = {
  // === UTG (Under the Gun) - Tightest ===
  UTG: {
    open: new Set([
      // Pairs
      'AA','KK','QQ','JJ','TT','99','88','77','66',
      // Suited
      'AKs','AQs','AJs','ATs','A9s','A8s','A7s','A6s','A5s','A4s','A3s','A2s',
      'KQs','KJs','KTs','K9s',
      'QJs','QTs',
      'JTs','J9s',
      'T9s',
      '98s','87s','76s',
      // Offsuit
      'AKo','AQo','AJo',
    ]),
    call3bet: new Set([
      'AA','KK','QQ','JJ','TT','99',
      'AKs','AQs','AJs','ATs',
      'KQs',
      'AKo',
    ]),
  },

  // === MP (Middle Position / HJ) ===
  MP: {
    open: new Set([
      'AA','KK','QQ','JJ','TT','99','88','77','66','55',
      'AKs','AQs','AJs','ATs','A9s','A8s','A7s','A6s','A5s','A4s','A3s','A2s',
      'KQs','KJs','KTs','K9s','K8s',
      'QJs','QTs','Q9s',
      'JTs','J9s',
      'T9s','T8s',
      '98s','87s','76s','65s',
      'AKo','AQo','AJo','ATo',
      'KQo',
    ]),
    call3bet: new Set([
      'AA','KK','QQ','JJ','TT','99','88',
      'AKs','AQs','AJs','ATs','A9s',
      'KQs','KJs',
      'QJs',
      'AKo','AQo',
    ]),
  },

  // === CO (Cutoff) ===
  CO: {
    open: new Set([
      'AA','KK','QQ','JJ','TT','99','88','77','66','55','44','33','22',
      'AKs','AQs','AJs','ATs','A9s','A8s','A7s','A6s','A5s','A4s','A3s','A2s',
      'KQs','KJs','KTs','K9s','K8s','K7s','K6s','K5s',
      'QJs','QTs','Q9s','Q8s',
      'JTs','J9s','J8s',
      'T9s','T8s',
      '98s','97s',
      '87s','86s',
      '76s','75s',
      '65s','64s',
      '54s',
      'AKo','AQo','AJo','ATo','A9o',
      'KQo','KJo','KTo',
      'QJo','QTo',
      'JTo',
    ]),
    call3bet: new Set([
      'AA','KK','QQ','JJ','TT','99','88','77',
      'AKs','AQs','AJs','ATs','A9s','A8s','A5s',
      'KQs','KJs','KTs',
      'QJs','QTs',
      'JTs',
      'T9s',
      '98s',
      'AKo','AQo','AJo',
    ]),
  },

  // === BTN (Button) - Widest open ===
  BTN: {
    open: new Set([
      'AA','KK','QQ','JJ','TT','99','88','77','66','55','44','33','22',
      'AKs','AQs','AJs','ATs','A9s','A8s','A7s','A6s','A5s','A4s','A3s','A2s',
      'KQs','KJs','KTs','K9s','K8s','K7s','K6s','K5s','K4s','K3s','K2s',
      'QJs','QTs','Q9s','Q8s','Q7s','Q6s','Q5s',
      'JTs','J9s','J8s','J7s','J6s',
      'T9s','T8s','T7s','T6s',
      '98s','97s','96s',
      '87s','86s','85s',
      '76s','75s','74s',
      '65s','64s','63s',
      '54s','53s',
      '43s',
      'AKo','AQo','AJo','ATo','A9o','A8o','A7o','A6o','A5o','A4o','A3o','A2o',
      'KQo','KJo','KTo','K9o','K8o',
      'QJo','QTo','Q9o',
      'JTo','J9o',
      'T9o','T8o',
      '98o','97o',
      '87o',
      '76o',
    ]),
    call3bet: new Set([
      'AA','KK','QQ','JJ','TT','99','88','77','66',
      'AKs','AQs','AJs','ATs','A9s','A8s','A7s','A5s','A4s',
      'KQs','KJs','KTs','K9s',
      'QJs','QTs','Q9s',
      'JTs','J9s',
      'T9s','T8s',
      '98s','97s',
      '87s','86s',
      '76s','75s',
      '65s',
      '54s',
      'AKo','AQo','AJo','ATo',
      'KQo','KJo',
    ]),
  },

  // === SB (Small Blind) ===
  SB: {
    open: new Set([
      'AA','KK','QQ','JJ','TT','99','88','77','66','55','44','33','22',
      'AKs','AQs','AJs','ATs','A9s','A8s','A7s','A6s','A5s','A4s','A3s','A2s',
      'KQs','KJs','KTs','K9s','K8s','K7s','K6s','K5s','K4s',
      'QJs','QTs','Q9s','Q8s','Q7s','Q6s',
      'JTs','J9s','J8s','J7s',
      'T9s','T8s','T7s',
      '98s','97s','96s',
      '87s','86s',
      '76s','75s',
      '65s','64s',
      '54s','53s',
      '43s',
      'AKo','AQo','AJo','ATo','A9o','A8o','A7o','A6o','A5o','A4o','A3o',
      'KQo','KJo','KTo','K9o',
      'QJo','QTo','Q9o',
      'JTo','J9o',
      'T9o',
      '98o',
      '87o',
    ]),
    call3bet: new Set([
      'AA','KK','QQ','JJ','TT','99','88','77',
      'AKs','AQs','AJs','ATs','A9s','A8s','A5s','A4s',
      'KQs','KJs','KTs',
      'QJs','QTs',
      'JTs','J9s',
      'T9s',
      '98s',
      '87s',
      '76s',
      'AKo','AQo','AJo',
    ]),
  },

  // === BB (Big Blind) - Defend vs raise ===
  BB: {
    // BB doesn't open (already has blind posted), defends vs raises
    defend: new Set([
      'AA','KK','QQ','JJ','TT','99','88','77','66','55','44','33','22',
      'AKs','AQs','AJs','ATs','A9s','A8s','A7s','A6s','A5s','A4s','A3s','A2s',
      'KQs','KJs','KTs','K9s','K8s','K7s','K6s','K5s','K4s','K3s','K2s',
      'QJs','QTs','Q9s','Q8s','Q7s','Q6s','Q5s','Q4s','Q3s',
      'JTs','J9s','J8s','J7s','J6s','J5s',
      'T9s','T8s','T7s','T6s','T5s',
      '98s','97s','96s','95s',
      '87s','86s','85s',
      '76s','75s','74s',
      '65s','64s','63s',
      '54s','53s','52s',
      '43s','42s',
      '32s',
      'AKo','AQo','AJo','ATo','A9o','A8o','A7o','A6o','A5o','A4o','A3o','A2o',
      'KQo','KJo','KTo','K9o','K8o','K7o','K6o',
      'QJo','QTo','Q9o','Q8o','Q7o',
      'JTo','J9o','J8o','J7o',
      'T9o','T8o','T7o',
      '98o','97o','96o',
      '87o','86o',
      '76o','75o',
      '65o','64o',
      '54o',
    ]),
    threebet: new Set([
      'AA','KK','QQ','JJ','TT',
      'AKs','AQs','AJs','A5s','A4s',
      'KQs',
      'AKo','AQo',
    ]),
  },
};

// Convert hole cards to hand notation
function cardsToHandNotation(cards) {
  if (cards.length !== 2) return null;
  const RANK_ORDER = {'A':14,'K':13,'Q':12,'J':11,'T':10,'10':10,'9':9,'8':8,'7':7,'6':6,'5':5,'4':4,'3':3,'2':2};
  const RANK_CHAR = {14:'A',13:'K',12:'Q',11:'J',10:'T',9:'9',8:'8',7:'7',6:'6',5:'5',4:'4',3:'3',2:'2'};

  let r1 = RANK_ORDER[cards[0].rank] || 0;
  let r2 = RANK_ORDER[cards[1].rank] || 0;
  const suited = cards[0].suit === cards[1].suit;

  // Higher rank first
  if (r2 > r1) { const t = r1; r1 = r2; r2 = t; }

  const c1 = RANK_CHAR[r1];
  const c2 = RANK_CHAR[r2];

  if (r1 === r2) return c1 + c2; // Pair: "AA"
  return c1 + c2 + (suited ? 's' : 'o'); // "AKs" or "AKo"
}

// Get GTO recommendation for preflop
// Returns: { action: 'raise'|'call'|'fold', reason: string, inRange: bool }
function getGTOPreflop(cards, positionName, facingRaise) {
  const hand = cardsToHandNotation(cards);
  if (!hand) return null;

  // Map position name to range key
  let posKey = null;
  if (positionName.includes('BTN') || positionName.includes('庄位')) posKey = 'BTN';
  else if (positionName.includes('SB') || positionName.includes('小盲')) posKey = 'SB';
  else if (positionName.includes('BB') || positionName.includes('大盲')) posKey = 'BB';
  else if (positionName.includes('EP') || positionName.includes('早位')) posKey = 'UTG';
  else if (positionName.includes('MP') || positionName.includes('中位')) posKey = 'MP';
  else if (positionName.includes('CO') || positionName.includes('晚位')) posKey = 'CO';
  else posKey = 'MP'; // default

  const range = GTO_RANGES[posKey];
  if (!range) return null;

  if (posKey === 'BB') {
    if (!facingRaise) {
      return { action: 'check', reason: `GTO: 大盲位无人加注，过牌 [${hand}]`, inRange: true };
    }
    if (range.threebet.has(hand)) {
      return { action: 'raise', reason: `GTO: ${hand} 在大盲位属于3-bet范围`, inRange: true };
    }
    if (range.defend.has(hand)) {
      return { action: 'call', reason: `GTO: ${hand} 在大盲位属于防守跟注范围`, inRange: true };
    }
    return { action: 'fold', reason: `GTO: ${hand} 不在大盲位防守范围内`, inRange: false };
  }

  if (!facingRaise) {
    // Open raise situation
    if (range.open && range.open.has(hand)) {
      return { action: 'raise', reason: `GTO: ${hand} 在${posKey}属于open raise范围`, inRange: true };
    }
    return { action: 'fold', reason: `GTO: ${hand} 不在${posKey}的open范围内`, inRange: false };
  } else {
    // Facing a raise - 3-bet or call or fold
    if (range.call3bet && range.call3bet.has(hand)) {
      // Check if it's a premium hand that should 3-bet
      const premiums = new Set(['AA','KK','QQ','AKs','AKo']);
      if (premiums.has(hand)) {
        return { action: 'raise', reason: `GTO: ${hand} 在${posKey}面对加注应3-bet`, inRange: true };
      }
      return { action: 'call', reason: `GTO: ${hand} 在${posKey}面对加注可跟注`, inRange: true };
    }
    return { action: 'fold', reason: `GTO: ${hand} 在${posKey}面对加注应弃牌`, inRange: false };
  }
}
