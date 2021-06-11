/* import 'raf/polyfill'; */import './css/index.css'; import './scss/index.scss'; import './modules/js/game.engine'
import { WordEngine } from './modules/js/word.engine'
import { Game } from './modules/js/game.engine';
import './modules/js/polyfills'


const $words = document.querySelector('.words')

const dividedWords = `about|above|add|after|again|air|all|almost|along|also|always|America|an|and|animal|another|answer|any|are|around|as|ask|at|away|back|be|because|been|before|began|begin|being|below|between|big|book|both|boy|but|by|call|came|can|car|carry|change|children|city|close|come|could|country|cut|day|did|different|do|does|don't|down|each|earth|eat|end|enough|even|every|example|eye|face|family|far|father|few|find|first|follow|food|for|form|found|four|from|get|girl|give|go|good|got|great|group|grow|had|hand|hard|has|have|he|head|hear|help|her|here|high|him|his|home|house|how|idea|if|important|in|Indian|into|is|it|its|it's|just|keep|kind|know|land|large|last|later|learn|leave|left|let|letter|life|light|like|line|list|little|live|long|look|made|make|man|many|may|me|mean|men|might|mile|miss|more|most|mother|mountain|move|much|must|my|name|near|need|never|new|next|night|no|not|now|number|of|off|often|oil|old|on|once|one|only|open|or|other|our|out|over|own|page|paper|part|people|picture|place|plant|play|point|put|question|quick|quickly|quite|read|really|right|river|run|said|same|saw|say|school|sea|second|see|seem|sentence|set|she|should|show|side|small|so|some|something|sometimes|song|soon|sound|spell|start|state|still|stop|story|study|such|take|talk|tell|than|that|the|their|them|then|there|these|they|thing|think|this|those|thought|three|through|time|to|together|too|took|tree|try|turn|two|under|until|up|us|use|very|walk|want|was|watch|water|way|we|well|went|were|what|when|where|which|while|white|who|why|will|with|without|word|work|world|would|write|year|you|young|your`

const wordengine = new WordEngine(dividedWords, $words)
wordengine.displayWords()
// function restart() {
//   game.reset()
//   isGameStarted = false
//   $input.addEventListener('input', StartOnType)
// }

const game = new Game(dividedWords)
game.init()
// $btnRestart.addEventListener('click', restart)


// let isGameStarted = false



// function StartOnType() {
//   game.start()
//   game.check()
//   $input.addEventListener('input', () => game.check())
//   $input.removeEventListener('input', StartOnType)
//   isGameStarted = true
// }

// if (!isGameStarted) {
//   $input.addEventListener('input', StartOnType)
// }





