const adjectives = [
  '2/5',
  '6/8',
  '6/8, 7/8',
  'accelerando',
  'aggressive',
  'anthemic',
  'atonal',
  'calm',
  'chaotic',
  'cheerful',
  'complex',
  'confused',
  'dark',
  'dense',
  'detuned',
  'disco',
  'distorted',
  'dreamy',
  'dubby',
  'duophonic',
  'energetic',
  'faded',
  'gentle',
  'glitchy',
  'gothy',
  'gothy',
  'gothy',
  'gritty',
  'gritty',
  'jazzy',
  'legato',
  'looping',
  'metallic',
  'minimalist',
  'monophonic',
  'morose',
  'new wave',
  'noisy',
  'organic',
  'polyphonic',
  'random',
  'Ritardando',
  'simple',
  'stocato',
  'stoner',
  'sweet',
  'syncoppated',
  'trippy',
  'wandering',
  'wandering'  
]

const low = 
[
"low drone",
"kick + snare",
"drum and bass beat",
"d-beat",
"samples",
"bass sequence",
"4-step sequence",
"5-step sequence",
"long sequence",
"short sequence",
"chord progression",
"percussion",
'walking bass',
'rhythm',
'beat',
'bass groove'
]


const high= [
"mid drone",
"high drone",
"rhythmic drone",
"fast chords",
"slow chords",
"lead",
"counterpoint",
"coalescing parts",
"diverging parts",
"chord progression",
"4-step sequence",
"5-step sequence",
"long sequence",
"short sequence",
"chord progression",
"solo",
'crescendo',
'decrescendo',
'arpeggio',
'sequence',
'refrain',
'melody',
'harmony',
'duet',
'call and response',
]

const getIdea = () => {
  const _lowAdj = adjectives[Math.floor(Math.random()*adjectives.length)]
  const _highAdj = adjectives[Math.floor(Math.random()*adjectives.length)]

  // 30% chance of two adjectives
  const lowAdj = (Math.random() > .7) ? _lowAdj + ' ' + adjectives[Math.floor(Math.random()*adjectives.length)] : _lowAdj
  const highAdj = (Math.random() > .7) ? _highAdj + ' ' + adjectives[Math.floor(Math.random()*adjectives.length)] : _highAdj

  const lowEl = low[Math.floor(Math.random()*low.length)]
  const highEl = high[Math.floor(Math.random()*high.length)]

  console.log(`* PART A: ${lowAdj} ${lowEl}`)
  console.log(`* PART B: ${highAdj} ${highEl}`)

}

getIdea()
