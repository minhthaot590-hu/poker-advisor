// Monte Carlo Web Worker - runs simulation off main thread
const SUITS_W = ['hearts','diamonds','clubs','spades'];
const RANKS_W = ['A','K','Q','J','10','9','8','7','6','5','4','3','2'];
const RV = {'2':2,'3':3,'4':4,'5':5,'6':6,'7':7,'8':8,'9':9,'10':10,'J':11,'Q':12,'K':13,'A':14};

function cid(r,s){return r+s}

function buildDeck(exclude){
  const ex=new Set(exclude.map(c=>c.id));
  const d=[];
  for(const s of SUITS_W) for(const r of RANKS_W){
    const id=cid(r,s);
    if(!ex.has(id)) d.push({rank:r,suit:s,id,value:RV[r]});
  }
  return d;
}

function shuffle(a){
  for(let i=a.length-1;i>0;i--){
    const j=Math.random()*i+1|0;
    [a[i],a[j]]=[a[j],a[i]];
  }
}

function eval5(cards){
  const sorted=[...cards].sort((a,b)=>b.value-a.value);
  const vals=sorted.map(c=>c.value);
  const suits=sorted.map(c=>c.suit);
  const isFlush=new Set(suits).size===1;
  let isStraight=false,sHigh=0,ok=true;
  for(let i=0;i<4;i++)if(vals[i]-vals[i+1]!==1){ok=false;break}
  if(ok){isStraight=true;sHigh=vals[0]}
  if(!isStraight&&vals[0]===14&&vals[1]===5&&vals[2]===4&&vals[3]===3&&vals[4]===2){isStraight=true;sHigh=5}
  const cnt={};
  for(const v of vals)cnt[v]=(cnt[v]||0)+1;
  const g=Object.entries(cnt).map(([v,c])=>({v:+v,c})).sort((a,b)=>b.c-a.c||b.v-a.v);
  const p=g.map(x=>x.c),k=g.map(x=>x.v);
  let rk,rv;
  if(isFlush&&isStraight){rv=sHigh===14?9:8;rk=rv===9?'皇家同花顺':'同花顺'}
  else if(p[0]===4){rv=7;rk='四条'}
  else if(p[0]===3&&p[1]===2){rv=6;rk='葫芦'}
  else if(isFlush){rv=5;rk='同花'}
  else if(isStraight){rv=4;rk='顺子'}
  else if(p[0]===3){rv=3;rk='三条'}
  else if(p[0]===2&&p[1]===2){rv=2;rk='两对'}
  else if(p[0]===2){rv=1;rk='一对'}
  else{rv=0;rk='高牌'}
  let sc=rv*1e6;
  for(let i=0;i<k.length;i++)sc+=k[i]*Math.pow(15,4-i);
  return{rank:rk,rankVal:rv,score:sc}
}

function combos(a,k){
  if(k===0)return[[]];
  if(!a.length)return[];
  const[f,...r]=a;
  return[...combos(r,k-1).map(c=>[f,...c]),...combos(r,k)];
}

function evalBest(cards){
  if(cards.length<5)return{rank:'高牌',rankVal:0,score:0};
  if(cards.length===5)return eval5(cards);
  let best=null;
  for(const c of combos(cards,5)){const e=eval5(c);if(!best||e.score>best.score)best=e}
  return best;
}

function monteCarlo(hole,comm,opp,sims){
  const known=[...hole,...comm];
  const deck=buildDeck(known);
  const need=5-comm.length;
  let wins=0;
  for(let s=0;s<sims;s++){
    shuffle(deck);
    let idx=0;
    const board=[...comm];
    for(let i=0;i<need;i++)board.push(deck[idx++]);
    const hero=evalBest([...hole,...board]).score;
    let w=true,tie=false;
    for(let o=0;o<opp;o++){
      const os=evalBest([deck[idx++],deck[idx++],...board]).score;
      if(os>hero){w=false;tie=false;break}
      else if(os===hero)tie=true;
    }
    if(w)wins+=tie?0.5:1;
  }
  return wins/sims;
}

self.onmessage=function(e){
  const{hole,comm,opp,sims}=e.data;
  const equity=monteCarlo(hole,comm,opp,sims||5000);
  const hand=hole.length+comm.length>=5?evalBest([...hole,...comm]):{rank:'高牌',rankVal:0,score:0};
  self.postMessage({equity,hand:hand.rank});
}
