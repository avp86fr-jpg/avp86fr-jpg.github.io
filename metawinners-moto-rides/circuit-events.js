// One course description drives the scenery, route preview and real race challenges.
// Distances are metres on the continuous race centreline; nothing changes its geometry.
export const CIRCUIT_DISTRICTS={
 vegas:[
  {id:'neon-mile',name:'NEON MILE',start:0,end:1900,tagline:'Neon portals. Casino towers. Full throttle.'},
  {id:'high-roller',name:'HIGH ROLLER',start:1900,end:3850,tagline:'Golden pyramid and the giant observation wheel.'},
  {id:'after-hours',name:'AFTER HOURS',start:3850,end:5800,tagline:'Backstreet clubs and the last neon sprint.'}
 ],
 casino:[
  {id:'vault-row',name:'VAULT ROW',start:0,end:2000,tagline:'Illuminated vault portals and grand casino fronts.'},
  {id:'blackwater',name:'BLACKWATER DOCKS',start:2000,end:4000,tagline:'Container stacks and towering dock cranes.'},
  {id:'skyline',name:'SKYLINE RUN',start:4000,end:6000,tagline:'Skybridges, glass spires and the city finish.'}
 ],
 miami:[
  {id:'ocean-drive',name:'OCEAN DRIVE',start:0,end:1850,tagline:'Ocean, palms and pastel beach clubs.'},
  {id:'marina',name:'MARINA MILE',start:1850,end:3700,tagline:'Sailboats, piers and a waterfront rush.'},
  {id:'art-deco',name:'ART DECO',start:3700,end:5600,tagline:'Pink hotel crowns and a golden-hour finale.'}
 ],
 desert:[
  {id:'red-canyon',name:'RED CANYON',start:0,end:2100,tagline:'Layered mesas and the open desert highway.'},
  {id:'salt-flats',name:'SALT FLATS',start:2100,end:4200,tagline:'White flats, distant turbines and wide horizons.'},
  {id:'last-chance',name:'LAST CHANCE',start:4200,end:6300,tagline:'Rust, fuel stops and one final outlaw run.'}
 ]
};
export const CIRCUIT_EVENTS={
 vegas:[
  {id:'vegas-redline',name:'NEON REDLINE',start:480,end:1060,kind:'sprint',accent:'#f4bc5e',description:'Build speed and hold a clean line through the neon portals.'},
  {id:'vegas-royal',name:'ROYAL RUMBLE',start:2360,end:3020,kind:'brawl',accent:'#f27cbd',description:'Use the casino straight to land clean attacks.'},
  {id:'vegas-close',name:'CLOSE CALL',start:4280,end:4970,kind:'precision',accent:'#70e8ee',description:'Read the traffic and turn close passes into momentum.'}
 ],
 casino:[
  {id:'casino-vault',name:'VAULT BREAKER',start:520,end:1130,kind:'brawl',accent:'#53e7d2',description:'Fight for space beneath the vault lights.'},
  {id:'casino-dock',name:'DOCKSIDE DRAFT',start:2420,end:3120,kind:'precision',accent:'#f0b960',description:'Thread the dockside traffic and cleanly pass rivals.'},
  {id:'casino-sky',name:'SKYLINE REDLINE',start:4430,end:5090,kind:'sprint',accent:'#74bff5',description:'Carry clean speed toward the skyline finish.'}
 ],
 miami:[
  {id:'miami-coast',name:'COASTLINE REDLINE',start:440,end:1010,kind:'sprint',accent:'#ffaf8e',description:'Hold your line beside the ocean.'},
  {id:'miami-marina',name:'MARINA THREAD',start:2240,end:2900,kind:'precision',accent:'#58ddd0',description:'Make clean passes along the marina.'},
  {id:'miami-deco',name:'SUNSET SHOWDOWN',start:4120,end:4800,kind:'brawl',accent:'#ff79b1',description:'Fight for the final run through the hotel district.'}
 ],
 desert:[
  {id:'desert-canyon',name:'CANYON THREAD',start:560,end:1200,kind:'precision',accent:'#f0b87a',description:'Find clean gaps through the canyon traffic.'},
  {id:'desert-salt',name:'SALT FLAT REDLINE',start:2560,end:3260,kind:'sprint',accent:'#dfdcca',description:'Open the throttle across the white flats.'},
  {id:'desert-last',name:'LAST CHANCE',start:4660,end:5390,kind:'brawl',accent:'#fb8b53',description:'One final fight before the desert finish.'}
 ]
};
export function getCircuitDistrict(distance,circuit='vegas'){
 const districts=CIRCUIT_DISTRICTS[circuit]||CIRCUIT_DISTRICTS.vegas,d=Math.max(0,Number(distance)||0);
 return districts.find(zone=>d<zone.end)||districts[districts.length-1];
}
export function getCircuitEvent(distance,circuit='vegas'){
 const d=Number(distance)||0;
 return (CIRCUIT_EVENTS[circuit]||CIRCUIT_EVENTS.vegas).find(event=>d>=event.start&&d<event.end)||null;
}
