let fps = 1000/30;
//window.scrollTo(0,0);
/*
window.onbeforunload=function(){
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}*/
let ideTexts = [
    '<tspan fill="#c678dd">private void</tspan>',
    '<tspan x="13.51" y="0"> </tspan>',
    '<tspan x="14.636" y="0" fill="#61afef">Load32bitOptionalHeaders</tspan>',
    '<tspan x="41.657" y="0" fill="#ccc">(</tspan>',
    '<tspan x="42.783" y="0" fill="#e5c07b" letter-spacing="0em">BinaryReader</tspan>',
    '<tspan x="56.292" y="0"> </tspan>',
    '<tspan x="57.418" y="0" fill="#ccc">reader)</tspan>',
    '<tspan fill="#ccc" x="0" y="3.071">{</tspan>',
    '<tspan x="0" y="6.144"> </tspan>',    //xml:space="preserve"
    '<tspan x="4.503" y="6.144" fill="#e06c75">_ntHeaders</tspan>',
    '<tspan x="15.762" y="6.144" fill="#ccc" letter-spacing="0em">.</tspan>',
    '<tspan x="16.888" y="6.144" fill="#e06c75">OptionalHeader32</tspan>',
    '<tspan x="34.901" y="6.144"> </tspan>',
    '<tspan x="36.027" y="6.144" fill="#c678dd">=</tspan>',
    '<tspan x="37.153" y="6.144" letter-spacing="0em"> </tspan>',
    '<tspan x="38.279" y="6.144" fill="#61afef">MarshalBytesTo</tspan>',
    '<tspan x="54.041" y="6.144" fill="#ccc">&lt;</tspan>',
    '<tspan x="55.167" y="6.144" fill="#e5c07b" letter-spacing="0em">IMAGE_OPTIONAL_HEADER32</tspan>',
    '<tspan x="81.062" y="6.144" fill="#ccc">&gt;(</tspan>',
    '<tspan x="83.313" y="6.144" fill="#e06c75">reader</tspan>',
    '<tspan x="90.068" y="6.144" fill="#ccc">);</tspan>',
    '<tspan x="0" y="12.286"> </tspan>', //xml:space="preserve"
    '<tspan x="4.503" y="12.286" fill="#5c6370" font-family="Consolas-Italic,Consolas" font-style="italic">// Should have 0x10 data directories</tspan>',
    '<tspan x="0" y="15.358"> </tspan>',/* xml:space="preserve"*/
    '<tspan x="4.503" y="15.358" fill="#c678dd">if</tspan>',
    '<tspan x="6.755" y="15.358" letter-spacing="0em"> </tspan>',
    '<tspan x="7.881" y="15.358" fill="#ccc">(</tspan>',
    '<tspan x="9.007" y="15.358" fill="#e06c75">_ntHeaders</tspan>',
    '<tspan x="20.265" y="15.358" fill="#ccc">.</tspan>',
    '<tspan x="21.391" y="15.358" fill="#e06c75">OptionalHeader32</tspan>',
    '<tspan x="39.405" y="15.358" fill="#ccc">.</tspan>',
    '<tspan x="40.531" y="15.358" fill="#e06c75">NumberOfRvaAndSizes</tspan>',
    '<tspan x="61.922" y="15.358"> </tspan>',
    '<tspan x="63.048" y="15.358" fill="#c678dd">!=</tspan>',
    '<tspan x="65.299" y="15.358"> </tspan>',
    '<tspan x="66.425" y="15.358" fill="#d19a66">0x10</tspan>',
    '<tspan x="70.929" y="15.358" fill="#ccc">)</tspan>',
    '<tspan x="0" y="18.43"> </tspan>',/* xml:space="preserve"*/
    '<tspan x="4.503" y="18.43" fill="#ccc">{</tspan>',
    '<tspan x="0" y="21.501"> </tspan>',/*xml:space="preserve"*/
    '<tspan x="9.007" y="21.501" fill="#c678dd">throw new</tspan>',
    '<tspan x="19.14" y="21.501" letter-spacing="0em"> </tspan>',
    '<tspan x="20.265" y="21.501" fill="#e5c07b">InvalidOperationException</tspan>',
    '<tspan x="48.412" y="21.501" fill="#ccc">(</tspan>',
    '<tspan x="49.538" y="21.501" fill="#98c379">&quot;Invalid number of data directories in NT header&quot;</tspan>',
    '<tspan x="104.705" y="21.501" fill="#ccc">);</tspan>',
    '<tspan x="0" y="24.573"> </tspan>',/* xml:space="preserve"*/
    '<tspan x="4.503" y="24.573" fill="#ccc">}</tspan>',
    '<tspan x="0" y="27.645"> </tspan>',/* xml:space="preserve"*/
    '<tspan x="4.503" y="27.645" fill="#5c6370">// Get sections first before directories</tspan>',
    '<tspan x="0" y="33.788"> </tspan>',/* xml:space="preserve"*/
    '<tspan x="4.503" y="33.788" fill="#c678dd">for</tspan>',
    '<tspan x="7.881" y="33.788" fill="#ccc">(</tspan>',
    '<tspan x="9.007" y="33.788" fill="#c678dd">int</tspan>',
    '<tspan x="12.384" y="33.788"> </tspan>',
    '<tspan x="13.51" y="33.788" fill="#e06c75">i</tspan>',
    '<tspan x="14.636" y="33.788"> </tspan>',
    '<tspan x="15.762" y="33.788" fill="#c678dd" letter-spacing="0em">=</tspan>',
    '<tspan x="16.888" y="33.788"> </tspan>',
    '<tspan x="18.014" y="33.788" fill="#f7931e">0</tspan>',
    '<tspan x="19.14" y="33.788" fill="#ccc" letter-spacing="0em">;</tspan>',
    '<tspan x="20.265" y="33.788"> </tspan>',
    '<tspan x="21.391" y="33.788" fill="#e06c75">i</tspan>',
    '<tspan x="22.517" y="33.788" fill="#c678dd">&lt;</tspan>',
    '<tspan x="23.643" y="33.788"> </tspan>',
    '<tspan x="24.769" y="33.788" fill="#e06c75" letter-spacing="0em">_ntHeaders</tspan>',
    '<tspan x="36.027" y="33.788" fill="#ccc">.</tspan>',
    '<tspan x="37.153" y="33.788" fill="#e06c75" letter-spacing="0em">FileHeader</tspan>',
    '<tspan x="48.412" y="33.788" fill="#ccc">.</tspan>',
    '<tspan x="49.538" y="33.788" fill="#e06c75">NumberOfSections</tspan>',
    '<tspan x="67.551" y="33.788" fill="#ccc">;</tspan>',
    '<tspan x="68.677" y="33.788"> </tspan>',
    '<tspan x="69.803" y="33.788" fill="#e06c75" letter-spacing="0em">i</tspan>',
    '<tspan x="70.929" y="33.788" fill="#c678dd">++</tspan>',
    '<tspan x="73.181" y="33.788" fill="#ccc" letter-spacing="0em">)</tspan>',
    '<tspan x="0" y="36.859"> </tspan>',/* xml:space="preserve"*/
    '<tspan x="4.503" y="36.859" fill="#ccc">{</tspan>',
    '<tspan x="0" y="39.931"> </tspan>',/* xml:space="preserve"*/
    '<tspan x="4.503" y="39.931" fill="#e5c07b">IMAGE_SECTION_HEADER</tspan>',
    '<tspan x="27.021" y="39.931"> </tspan>',
    '<tspan x="28.146" y="39.931" fill="#e06c75" letter-spacing="0em">curSection</tspan>',
    '<tspan x="39.405" y="39.931"> </tspan>',
    '<tspan x="40.531" y="39.931" fill="#c678dd">=</tspan>',
    '<tspan x="41.657" y="39.931"> </tspan>',
    '<tspan x="42.783" y="39.931" fill="#61afef" letter-spacing="0em">MarshalBytesTo</tspan>',
    '<tspan x="58.544" y="39.931" fill="#ccc">&lt;</tspan>',
    '<tspan x="59.67" y="39.931" fill="#e5c07b">IMAGE_SECTION_HEADER</tspan>',
    '<tspan x="82.188" y="39.931" fill="#ccc" letter-spacing="0em">&gt;(</tspan>',
    '<tspan x="84.439" y="39.931" fill="#e06c75">reader</tspan>',
    '<tspan x="91.194" y="39.931" fill="#ccc" letter-spacing="0em">);</tspan>',
    '<tspan x="0" y="43.003"> </tspan>',/* xml:space="preserve"*/
    '<tspan x="4.503" y="43.003" fill="#e06c75">_sectionHeaders</tspan>',
    '<tspan x="21.391" y="43.003" fill="#ccc">.</tspan>',
    '<tspan x="22.517" y="43.003" fill="#61afef">Add</tspan>',
    '<tspan x="25.895" y="43.003" fill="#ccc">(</tspan>',
    '<tspan x="27.021" y="43.003" fill="#e06c75">curSection</tspan>',
    '<tspan x="38.279" y="43.003" fill="#ccc">);</tspan>',
    '<tspan x="0" y="46.074"> </tspan>',/* xml:space="preserve"*/
    '<tspan x="4.503" y="46.074" fill="#c678dd">long</tspan>',
    '<tspan x="9.007" y="46.074"> </tspan>',
    '<tspan x="10.133" y="46.074" fill="#e06c75" letter-spacing="0em">returnAddr</tspan>',
    '<tspan x="21.391" y="46.074"> </tspan>',
    '<tspan x="22.517" y="46.074" fill="#c678dd">=</tspan>',
    '<tspan x="23.643" y="46.074"> </tspan>',
    '<tspan x="24.769" y="46.074" fill="#e06c75" letter-spacing="0em">reader</tspan>',
    '<tspan x="31.524" y="46.074" fill="#ccc">.</tspan>',
    '<tspan x="32.65" y="46.074" fill="#e06c75">BaseStream</tspan>',
    '<tspan x="43.908" y="46.074" fill="#ccc">.</tspan>',
    '<tspan x="45.034" y="46.074" fill="#e06c75">Position</tspan>',
    '<tspan x="54.041" y="46.074" fill="#ccc">;</tspan>',
    '<tspan x="0" y="49.146"> </tspan>',/* xml:space="preserve"*/
    '<tspan x="4.503" y="49.146" fill="#c678dd">if</tspan>',
    '<tspan x="6.755" y="49.146" letter-spacing="0em"> </tspan>',
    '<tspan x="7.881" y="49.146" fill="#ccc">(</tspan>',
    '<tspan x="9.007" y="49.146" fill="#e06c75">curSection.Name</tspan>',
    '<tspan x="25.895" y="49.146"> </tspan>',
    '<tspan x="27.021" y="49.146" fill="#c678dd">==</tspan>',
    '<tspan x="29.272" y="49.146"> </tspan>',
    '<tspan x="30.398" y="49.146" fill="#98c379">&quot;.text&quot;</tspan>',
    '<tspan x="38.279" y="49.146" fill="#ccc">)</tspan>',
    '<tspan x="0" y="52.218"> </tspan>',/* xml:space="preserve"*/
    '<tspan x="4.503" y="52.218" fill="#ccc">{</tspan>',
    '<tspan x="0" y="55.289"> </tspan>',/* xml:space="preserve"*/
    '<tspan x="9.007" y="55.289" fill="#e06c75">Console</tspan>',
    '<tspan x="16.888" y="55.289" fill="#ccc">.</tspan>',
    '<tspan x="18.014" y="55.289" fill="#61afef">WriteLine</tspan>',
    '<tspan x="28.146" y="55.289" fill="#ccc" letter-spacing="0em">(</tspan>',
    '<tspan x="29.272" y="55.289" fill="#98c379">&quot;Processing .text...&quot;</tspan>',
    '<tspan x="52.915" y="55.289" fill="#ccc">);</tspan>',
    '<tspan x="0" y="58.36"> </tspan>',/* xml:space="preserve"*/
    '<tspan x="9.007" y="58.36" fill="#61afef">loadText</tspan>',
    '<tspan x="18.014" y="58.36" fill="#ccc">(</tspan>',
    '<tspan x="19.14" y="58.36" fill="#e06c75" letter-spacing="0em">curSection</tspan>',
    '<tspan x="30.398" y="58.36" fill="#ccc">,</tspan>',
    '<tspan x="31.524" y="58.36" fill="#e06c75"> reader</tspan>',/* xml:space="preserve"*/
    '<tspan x="39.405" y="58.36" fill="#ccc">,</tspan>',
    '<tspan x="40.531" y="58.36" fill="#e06c75"> returnAddr</tspan>',/* xml:space="preserve"*/
    '<tspan x="52.915" y="58.36" fill="#ccc">);</tspan>',
    '<tspan x="0" y="61.433"> </tspan>',/* xml:space="preserve"*/
    '<tspan x="4.503" y="61.433" fill="#ccc">}</tspan>',
    '<tspan x="0" y="64.504" fill="#ccc">}</tspan>',
    '<tspan x="1.126" y="64.504" letter-spacing="0em"> </tspan>'
]

//let reText = />([A-Za-z0-9 ()}{.,_\[\]\-"'\/;]+)</m;
let reText = />([^><]+)</m;   //>(\w+|\s+)</;
let reAttr = /tspan (.+?(?=>))/m;
let reEachAttr = /(.+?)(?=\=)="(.+?)(?=\")/m;
let rePunctuation = /[./-_!:;~]/m;
let clientBoxes = {
}
let messages = {
  bokuNoJun:[
    "That's me typing code :)", "My name is Jun Leong, nice to meet you!",
    "What else to add to my arsenal of skills? Oh I know! Design! \\ No matter how well programmed the app, no one will use it if it's UX is terrible",
    "Coding compelled me to understand computers in its entirety. \\Sounds like a modest goal to the uninformed...but oh even I was surprised!",
    "Aw man, this is so frustrating...I hope the people viewing this won't experience too much lag... \\Or worse.. hang the computer :C",
    "That's not a mistake.\\ I do have a mole below my left eye!"
  ],
  fishTank:[
    "My axolotl's dreaming of wriggly delectable blood worms",
    "My axolotl secretly wishes to be a mermaid!",
    "In truth, I have several fish tanks and no axolotls (it's illegal haha)"
  ],
  roly:[
    "Fun fact: this is my teddy bear that I had since 7. It's name is Roly! \\ PS: I hope it doesn't move like this at night...",
    "When I was younger, I wish Roly was alive to be my friend. \\ Especially since I'm the only child\\ (and had no friends....oops~)\\ That's in the past!",
    "Roly is one of the very few items left from my childhood. \\ Good memories too \\ Ahhh...nostalgia feels good~"
  ],
  violin: [
    "My passion for playing the violin and piano was something unsurpassable by anything else. \\ That's until I stumbled across programming and I've been coding and learning about computers everyday!",
    "French composer Claude Debussy said, \"Music is the space between the notes.\" \\ This is a minimalist approach I employ to frame my problems to prevent over-complicating solutions. \\ Definitely came in handy when solving programming challenges! ",
    "I've always been about expressing myself through various ways besides the spoken medium. \\ Music is just one such medium!"
  ],
  poster:[
    "Time is scarce. To 'best myself everyday' is something I must go by. \\ Carpe Diem~",
    "Only perseverance and time could tell if my efforts truly paid off...",
    "The road to good at anything surely never ceases doesn't it?"
  ],
  plants:[
    "Playing my part as an eco-warrior, though it's just four plants ahaha",
    "Can talking to plants really help them grow better? \\....\\ Oh no, I forgot to water them!",
    "Our relationship with plants can be better..\\ People have to eat more greens to age healthily!",
    "Just a passing thought, do plant nurseries hurt the environment more than they benefit?"
  ],
  window:[
    " I hope it rains tonight so that I'll have a good night's sleep..\\*yawns*~",
    "The view tonight sure is beautiful...\\ But computer graphics can make just as or more stunning sceneries. \\ What an amazing (virtual) era we live in~",
    "Sometimes I look outside, contemplating what I would be, \\how the world would evolve, \\where's my place and value yada yada..\\ Only through my efforts to understand and give to this world can I believe that I have a chance to succeed",
    "sometimes there's birds that perch here, though not owls, at least not that I know off"
  ],
  bed:[
    "What's the point of packing the bed when it's gonna get messy when I sleep tonight?",
    "Everytime we lie on the bed, we talk about how soft and comfy it is. Has the bed ever wondered I'm very soft too?",
    "Have you ever wondered how soft and comfy your bed is as you lay on it?\\ Here's my reverse ask,\\ Has your bed ever wondered how soft and comfy you are too?"
  ],
  books:[
    "I wonder when's the last time I touched these, ever since JC ended and started learning CS\\ Everything's just online..."
  ],
  papers:[
    "Ah my scoresheets! I'm only 30 perecnt through. One day I shall play them all!",

  ],
  clock:[
    "Tick...\\Tock...\\Tick...\\Tock...\\Just an ordinary alarm clock, nothing more~",
    "Since smart watches are a thing, why not smart clocks? Oh... smartphones huh."
  ],
  headset:[
    "Nothing beats a well-earned gaming session after achieving my KPI for the day!",
    " A good gaming set-up is incomplete without a good pair of headphones!",
    "My dad used to tell me good sound was only possible the rich. Look at us now, surround sound and strong bass are consumer standards!"
  ],
  metronome:[
    "My music teacher always insisted on me using the metronome to practice. 'Such a drag' was what I thought \\Until I realised that patience and methodical practice improved my musicianship skills. \\Looking forward to the journey itself made much more sense ever since.",

  ],
  sweater:[
    "Trusty sweater that keeps me warm in office without compromising fashion!"
  ],
  tShirt:[
    "Casual tee for casual meets!"
  ],
  racket:[
    "I'm not a sports person at all. Badminton's the only sport I know how to play well\\ But that's because I do not have to run so much like basketball or Tennis. \\ I need exercise ahaha.."
  ],
  bag:[
    "Bags aren't a fashion statement to me\\In my opinion, looks at the front matter are more important than the back, so it's unnecessary to get a good looking backpack\\ More so if you have to pay more for the aesthetics!",
    "I can't go out without a backpack, espcially since I carry with me a large water bottle and laptop with charger most of the time I'm out!"
  ]
}

let prompts = {
  bokuNoJun:"ME",
  fishTank:"FISH TANK",
  roly: "TEDDY",
  violin: "MUSIC",
  clock: "CLOCK",
  poster: "QUOTE",
  plants: "PLANTS",
  window: "WINDOW",
  bed: "BED",
  books: "BOOKS",
  papers:"SCORES",
  headset:"HEADPHONES",
  metronome:"METRONOME",
  sweater: "SWEATER",
  tShirt:"T-SHIRT",
  racket:"BADMINTON",
  bag:"BACKPACK"
}

let bodyPaths = [
  "M1046.115,808.328c-.082,13.227,1.018,27.387,3.583,37.907,4.856,19.921,28.429,33.47,50.562,34.679,26.173,1.429,51.509,6.6,86,12.187,30.383,4.925,52.875,27.944,64.359,42.172,14.63,18.129,23.715,48.423,24.88,76.227a522.33,522.33,0,0,1-2,69h-92s1-15.738,1-29c0-16-3.8-37.566-7-38-2.732-.37-3.469,16.8-2.976,24.852.99,16.139-10.66,41.954-10.66,41.954l-401.168-.051c-8.491-7.728-10.33-17.18-10.7-41.9-.128-8.518-1.508-14.716-2.963-15.418-1.713-.826-3.529,5.966-3.529,25.56,0,19.024,6,32,6,32h-91s-11.056-29.127-12.834-59.834c-1.262-21.8,8.186-48.859,12.834-60.166,6.863-16.692,48-53,70-61,32.812-11.932,78.622-17.157,104.795-18.586,22.133-1.209,43.235-13.051,48.092-32.972,2.564-10.521,5.69-24.985,5.607-38.212",
  "M1046.115,808.328c-.082,13.227,1.018,27.387,3.583,37.907,4.856,19.921,28.429,33.47,50.562,34.679,26.173,1.429,49.478,5.583,83.24,14.586,30,8,55.517,27.771,67,42,14.63,18.128,21.835,46.2,23,74a434.845,434.845,0,0,1-3,69h-92s4-15.738,4-29c0-16-3.8-37.566-7-38-2.732-.37-3.469,16.8-2.976,24.852.99,16.139-10.66,41.954-10.66,41.954l-401.168-.051c-8.491-7.728-10.33-17.18-10.7-41.9-.131-8.689-1.784-14.964-3.5-15.454-1.951-.555-3.988,6.336-3.988,25.6v32h-91s-3.008-30.175-4.786-60.881c-1.263-21.8,7.151-44.238,11.8-55.545,6.863-16.692,44.845-56.4,66.505-61.716,33.908-8.319,82.1-20.015,108.277-21.444,22.133-1.209,43.235-13.051,48.092-32.972,2.564-10.521,5.69-24.985,5.607-38.212",
"M1046.115,808.328c-.082,13.227,1.018,27.387,3.583,37.907,4.856,19.921,28.429,33.47,50.562,34.679,26.173,1.429,50.478,5.583,84.24,14.586,30,8,55.517,27.771,67,42,14.63,18.128,22.835,46.2,24,74a522.33,522.33,0,0,1-2,69h-91s3-15.738,3-29c0-16-6.8-37.566-10-38-2.732-.37-3.469,16.8-2.976,24.852.99,16.139-10.66,41.954-10.66,41.954l-401.168-.051c-8.491-7.728-10.33-17.18-10.7-41.9-.131-8.689-1.784-14.964-3.5-15.454-1.951-.555-3.988,6.336-3.988,25.6,0,19.024,5,32,5,32h-88s-9.222-30.293-11-61c-1.262-21.8,7.352-43.693,12-55,6.863-16.692,51.785-55.12,73-62,33.482-10.858,73.622-20.157,99.795-21.586,22.133-1.209,43.235-13.051,48.092-32.972,2.564-10.521,5.69-24.985,5.607-38.212",
"M1046.115,808.328c-.082,13.227,1.018,27.387,3.583,37.907,4.856,19.921,28.429,33.47,50.562,34.679A402.183,402.183,0,0,1,1186.5,894.5c30,8,55.517,28.771,67,43,14.63,18.128,17.335,42.7,18.5,70.5,1.521,36.31-2.5,72.5-2.5,72.5h-89a272.937,272.937,0,0,0,2-29c0-16-3.8-37.566-7-38-2.732-.37-3.469,16.8-2.976,24.852.99,16.139-10.66,41.954-10.66,41.954l-401.168-.051c-8.491-7.728-10.823-17.037-11.2-41.755-.131-8.689-1.292-15.106-3.012-15.6-1.951-.555-2.988,6.336-2.988,25.6a232.131,232.131,0,0,0,2,32l-90-1s-4.222-29.293-6-60c-1.262-21.8,5.328-46.171,11-57,11-21,62.785-58.12,84-65A342.753,342.753,0,0,1,833.3,880.914c22.133-1.209,43.235-13.051,48.092-32.972,2.564-10.521,5.69-24.985,5.607-38.212",
"M1046.115,808.328c-.082,13.227,1.018,27.387,3.583,37.907,4.856,19.921,28.429,33.47,50.562,34.679,26.173,1.429,63.091,7.536,96.24,18.586,30,10,42.517,23.771,54,38,14.63,18.128,18.835,41.2,20,69,1.521,36.31-5,74-5,74h-92s5-15.738,5-29c0-16,.2-35.566-3-36-2.732-.37-3.469,14.8-2.976,22.852.99,16.139-10.66,41.954-10.66,41.954l-401.168-.051c-8.491-7.728-10.823-17.037-11.2-41.755-.131-8.689-1.28-16.511-3-17-1.951-.555-8,7.74-8,27v32l-93-1s-1-29-1-60c0-21.838,10.328-46.171,16-57,11-21,39-63,81-70,34.72-5.787,65.622-10.157,91.795-11.586,22.133-1.209,43.235-13.051,48.092-32.972,2.564-10.521,5.69-24.985,5.607-38.212",
"M1046.115,808.328c-.082,13.227,1.018,27.387,3.583,37.907,4.856,19.921,28.429,33.47,50.562,34.679,26.173,1.429,51.509,6.6,86,12.187,30.383,4.925,52.875,27.944,64.359,42.172,14.63,18.129,23.715,48.423,24.88,76.227a522.33,522.33,0,0,1-2,69h-92s1-15.738,1-29c0-16-3.8-37.566-7-38-2.732-.37-3.469,16.8-2.976,24.852.99,16.139-10.66,41.954-10.66,41.954l-401.168-.051c-8.491-7.728-10.33-17.18-10.7-41.9-.128-8.518-1.508-14.716-2.963-15.418-1.713-.826-3.529,5.966-3.529,25.56,0,19.024,6,32,6,32h-91s-11.056-29.127-12.834-59.834c-1.262-21.8,8.186-48.859,12.834-60.166,6.863-16.692,44-56,73-64,35.09-9.68,75.622-14.157,101.795-15.586,22.133-1.209,43.235-13.051,48.092-32.972,2.564-10.521,5.69-24.985,5.607-38.212"

];
let mouseMovePaths = [
  ["M1046.115,808.328c-.082,13.227,1.018,27.387,3.583,37.907,4.856,19.921,28.429,33.47,50.562,34.679,26.173,1.429,51.509,6.6,86,12.187,30.383,4.925,52.875,27.944,64.359,42.172,14.63,18.129,23.715,48.423,24.88,76.227a522.33,522.33,0,0,1-2,69h-92s1-15.738,1-29c0-16-3.8-37.566-7-38-2.732-.37-3.469,16.8-2.976,24.852.99,16.139-10.66,41.954-10.66,41.954l-401.168-.051c-8.491-7.728-10.33-17.18-10.7-41.9-.128-8.518-1.508-14.716-2.963-15.418-1.713-.826-3.529,5.966-3.529,25.56,0,19.024,6,32,6,32h-91s-11.056-29.127-12.834-59.834c-1.262-21.8,8.186-48.859,12.834-60.166,6.863-16.692,48-53,70-61,32.812-11.932,78.622-17.157,104.795-18.586,22.133-1.209,43.235-13.051,48.092-32.972,2.564-10.521,5.69-24.985,5.607-38.212",
    "M675,940c-22,40-32,86-4,140l-22.41,1.41s-22.165-53.931-12.808-92.387C646.279,945.881,675,940,675,940Z",
    "M752,1072s-34.282-71.908-26.052-72.439c7.55-.487,10.287,9.5,13.877,15.187s6.771,10.442,10.257,12.714C750.082,1027.462,747.4,1065.709,752,1072Z"
  ],
  ["M1046.115,808.328c-.082,13.227,1.018,27.387,3.583,37.907,4.856,19.921,28.429,33.47,50.562,34.679,26.173,1.429,51.509,6.6,86,12.187,30.383,4.925,52.875,27.944,64.359,42.172,14.63,18.129,23.715,48.423,24.88,76.227a522.33,522.33,0,0,1-2,69h-92s1-15.738,1-29c0-16-3.8-37.566-7-38-2.732-.37-3.469,16.8-2.976,24.852.99,16.139-10.66,41.954-10.66,41.954l-401.168-.051c-8.491-7.728-10.33-17.18-10.7-41.9-.128-8.518-1.508-14.716-2.963-15.418-1.713-.826-6.529,5.966-6.529,25.56,0,19.024,1,32,1,32h-94s-2-29.242-2-60c0-22,8.352-48.693,13-60,6.863-16.692,48-53,70-61,32.812-11.932,78.622-17.157,104.795-18.586,22.133-1.209,43.235-13.051,48.092-32.972,2.564-10.521,5.69-24.985,5.607-38.212",
    "M675,940c-22,40-25,83-14,140l-25-1s-9.575-51.521-.218-89.977C646.279,945.881,675,940,675,940Z",
    "M752,1072s-34.282-71.908-26.052-72.439c7.55-.487,10.287,9.5,13.877,15.187s6.771,10.442,10.257,12.714C750.082,1027.462,747.4,1065.709,752,1072Z"
  ],
  ["M1046.115,808.328c-.082,13.227,1.018,27.387,3.583,37.907,4.856,19.921,28.429,33.47,50.562,34.679,26.173,1.429,51.509,6.6,86,12.187,30.383,4.925,52.875,27.944,64.359,42.172,14.63,18.129,23.715,48.423,24.88,76.227a522.33,522.33,0,0,1-2,69h-92s1-15.738,1-29c0-16-3.8-37.566-7-38-2.732-.37-3.469,16.8-2.976,24.852.99,16.139-10.66,41.954-10.66,41.954l-401.168-.051c-8.491-7.728-10.33-17.18-10.7-41.9-.128-8.518-1.508-14.716-2.963-15.418-1.713-.826-4.473,6.206-7.529,25.56-3,19-6,32-6,32h-95s5.335-31.461,9-62c3-25,12.533-55.066,18-66,9-18,41-45,63-53,32.812-11.932,78.622-17.157,104.795-18.586,22.133-1.209,43.235-13.051,48.092-32.972,2.564-10.521,5.69-24.985,5.607-38.212",
    "M675,940c-22,40-25,80-27,141l-16-1s-5.575-52.521,3.782-90.977C646.279,945.881,675,940,675,940Z",
    "M752,1072s-34.282-71.908-26.052-72.439c7.55-.487,10.287,9.5,13.877,15.187s6.771,10.442,10.257,12.714C750.082,1027.462,747.4,1065.709,752,1072Z"
  ]
]
let bodyPathIndex = 0;
let mouseMoveIndex = 0;
let bodyTypeId;
let mouseMoveId;
//let thenBodyType;
//let thenMouseMoveType;
let now = Date.now();
let then = Date.now();
let frameSkip = 0;
let isTilted = false;

function hasReachedSecondPage(){

  console.log(document.getElementById("svgContainer").getBoundingClientRect().bottom);
  console.log(document.documentElement.scrollTop);
  if(document.getElementById("svgContainer").getBoundingClientRect().bottom <=100 ){//< document.documentElement.scrollTop){
    return true;
  }
  return false;
}


window.onload = () => {

	/*let sheet = (function() {
		// Create the <style> tag
		var style = document.createElement("style");

		// Add a media (and/or media query) here if you'd like!
		// style.setAttribute("media", "screen")
		// style.setAttribute("media", "only screen and (max-width : 1024px)")

		// WebKit hack :(
		style.appendChild(document.createTextNode(""));

		// Add the <style> element to the page
		document.head.appendChild(style);

		return style.sheet;
	})(); */
	let style = document.createElement("style");

		// Add a media (and/or media query) here if you'd like!
		// style.setAttribute("media", "screen")
		// style.setAttribute("media", "only screen and (max-width : 1024px)")

		// WebKit hack :(
	style.appendChild(document.createTextNode(""));

		// Add the <style> element to the page
	document.head.appendChild(style);



	//clock
	let d = new Date();
	let hour = d.getHours()%12;
	let minutes = d.getMinutes();
	let seconds = d.getSeconds()+2;
	let hourHand = document.getElementById("hourHand");
	let minuteHand = document.getElementById("minuteHand");
	let secondHand = document.getElementById("secondHand");
	secondHand.style.transform = "rotate("+(6*seconds)+"deg)";
	minuteHand.style.transform = "rotate("+(6*(minutes + (seconds/60)))+"deg)";
	hourHand.style.transform = "rotate("+(30 * (hour + (minutes/60)) - 90)+"deg)";
	function runClock(){
		setInterval(function(){
			seconds+=1;
			secondHand.style.transform = "rotate("+(6*seconds)+"deg)";
			minuteHand.style.transform = "rotate("+(6*(minutes + (seconds/60)))+"deg)";
			hourHand.style.transform = "rotate("+(30 * (hour + (minutes/60) + (seconds/3600) )- 90)+"deg)";
			//console.log(hour);
			if(seconds >= 60){
				seconds = 0;
				minutes+=1;
			}
			if(minutes >= 60){
				minutes = 0;
				hour += 1;
			}
			if(hour >= 12){
				hour = 0;
			}
		},1000);
	}

	runClock();




	let attrs;
	let curText;
		/*while ((attrs = reAttr.exec(ideTexts[0])) != null) {
			// This is necessary to avoid infinite loops with zero-width matches
			/*if (attrs.index === reAttr.lastIndex) {
				reAttr.lastIndex++;
			}

			// The result can be accessed through the `m`-variable.
			attrs.forEach((match, groupIndex) => {
				console.log(`Found match, group ${groupIndex}: ${match}`);
			});
		}*/
	let ideContent = document.getElementById("ideText");
	let ideContent1 = document.getElementById("ideText1");
	let i = 0;
	let curX = 0; //to track lines
	let pupil1 = document.getElementById("pupil1");
	let pupil2 = document.getElementById("pupil2");
	let pupilInitPos = [parseFloat(pupil1.getAttributeNS(null, "cx")),parseFloat(pupil2.getAttributeNS(null, "cx")),parseFloat(pupil1.getAttributeNS(null, "cy")),
		parseFloat(pupil2.getAttributeNS(null, "cy"))];


	let wholeHead = document.getElementById("Face");
	let hair = document.getElementById("Hair");
	let chin = document.getElementById("headShape-2");
	let screenFace = document.getElementById("headShadow2");
	let upperFace = document.getElementById("upperFace");
	let leftReflection = document.getElementById("reflectionLeft");
	let rightReflection = document.getElementById("reflectionRight");

	//let greenShirt = document.getElementById("greenShirt");
  let greenShirt = document.querySelectorAll(".greenShirt");
  let rightShadows = document.querySelectorAll(".rightShadow");
	function tiltHead(){
		clearLens();
		pupil1.setAttributeNS(null,"cx",pupilInitPos[0] + 10);
		pupil2.setAttributeNS(null,"cx",pupilInitPos[1] + 10);
		pupil1.setAttributeNS(null,"cy",pupilInitPos[2]);
		pupil2.setAttributeNS(null,"cy",pupilInitPos[3]);
		wholeHead.setAttributeNS(null,"class", "tiltHead");
		hair.setAttributeNS(null,"class", "expandHair");
		chin.setAttributeNS(null,"class", "chinTilt");
		screenFace.setAttributeNS(null,"class", "scaleDownScreenFace");
		upperFace.setAttributeNS(null,"class", "scaleDown");
		leftReflection.setAttributeNS(null,"class", "lensFlare");
		rightReflection.setAttributeNS(null,"class", "lensFlare");
    isTilted = true;
		//greenShirt.setAttributeNS(null,"class", "armMove");

    /*greenShirt.forEach((item, i) => {
      item.setAttributeNS(null,"class", "armMove");
    });*/
    //cancelAnimationFrame(bodyTypeId);
    //mouseMoveId = requestAnimationFrame(mouseMoving);

		setTimeout(function(){
			wholeHead.setAttributeNS(null,"class", "");
			hair.setAttributeNS(null,"class", "");
			chin.setAttributeNS(null,"class", "");
			screenFace.setAttributeNS(null,"class", "");
			upperFace.setAttributeNS(null,"class", "");
			leftReflection.setAttributeNS(null,"class", "");
			rightReflection.setAttributeNS(null,"class", "");
      /*
      greenShirt.forEach((item, i) => {
        item.setAttributeNS(null,"class", "");
      });*/
      //cancelAnimationFrame(mouseMoveId);
      //bodyTypeId = requestAnimationFrame(bodyTyping);
      isTilted = false;
      resett();
		},1600);

	}
	function resett(){
		i = 0;
		curX = 0;
		pupil1.setAttributeNS(null,"cx",pupilInitPos[0]);
		pupil2.setAttributeNS(null,"cx",pupilInitPos[1]);
    rightShadows.forEach((item, i) => {
      item.setAttributeNS(null,"d",mouseMovePaths[0][i+1]);
    });
		eachWord();
		//clearTimeout(timer);
		//timer = setInterval(blinkingEye,3000);
	}
	function clearLens(){
		ideContent.innerHTML="";
		ideContent1.innerHTML="";
		pupil1.setAttributeNS(null,"class","");
		pupil2.setAttributeNS(null,"class","");
	}
  function bodyTyping(){
    now = Date.now();
    elapsed = now - then;
    if(isTilted){
      if(elapsed > fps * 4){
        mouseMoveIndex++;
        if(mouseMoveIndex==mouseMovePaths.length){
          mouseMoveIndex = 0;
        }
        greenShirt.forEach((item, i) => {
          item.setAttributeNS(null,"d",mouseMovePaths[mouseMoveIndex][0]);
        });
        rightShadows.forEach((item, i) => {
          item.setAttributeNS(null,"d",mouseMovePaths[mouseMoveIndex][i+1]);
        });

        then = now - (elapsed % fps);
      }

    } else {
      if(elapsed > fps * 2){
        bodyPathIndex++;
        if(bodyPathIndex == bodyPaths.length){
          bodyPathIndex = 0;
        }
        greenShirt.forEach((item, i) => {
          item.setAttributeNS(null,"d",bodyPaths[bodyPathIndex]);
        });
        then = now - (elapsed % fps);
      }

      //cancelAnimationFrame(bodyTypeId);
      /*setTimeout(function() {
          bodyTypeId = requestAnimationFrame(bodyTyping);
      }, fps*2);*/
    }
    //console.log("bodyTyping fired");
    //console.log(frameSkip);=

    cancelAnimationFrame(bodyTypeId);
    bodyTypeId = requestAnimationFrame(bodyTyping);
  }
  function mouseMoving(){
    if(frameSkip!=4){
      frameSkip++;
    } else {
      mouseMoveIndex++;
      if(mouseMoveIndex==mouseMovePaths.length){
        mouseMoveIndex = 0;
      }
      greenShirt.forEach((item, i) => {
        item.setAttributeNS(null,"d",mouseMovePaths[mouseMoveIndex]);
      });
      /*
      cancelAnimationFrame(mouseMoveId);
      setTimeout(function() {
          mouseMoveId = requestAnimationFrame(mouseMoving);
      }, fps*2);*/

      frameSkip = 0;

    }
    cancelAnimationFrame(mouseMoveId);
    requestAnimationFrame(mouseMoving);
  }
	//pupil1.className = "pupils";
	function eachWord(){
		if(i < ideTexts.length){
			attrs = reAttr.exec(ideTexts[i]);
			//console.log(attrs[1]);
			if(attrs[1].includes(" ")){
				let arr = attrs[1].split(" ");  ///"\s/
				attrs = arr;
			} else {
				attrs = [attrs[1]];
			}
			let curText = reText.exec(ideTexts[i]);
			let txt = curText[1];
			let elem = document.createElementNS('http://www.w3.org/2000/svg', 'tspan');
			let thisX = 0;
			pupil1.setAttributeNS(null,"class","pupils");
			pupil2.setAttributeNS(null,"class","pupils");
			for(let j = 0; j < attrs.length;j++){
				let curAttr = reEachAttr.exec(attrs[j]);
				switch(curAttr[1]){
					case "x":
						curAttr[2] = parseFloat(curAttr[2]);
						thisX = curAttr[2];
						break;
					case "y":
						curAttr[2] = parseFloat(curAttr[2]);
						if(thisX < curX){  //met new line
							pupil1.setAttributeNS(null,"cy",pupilInitPos[2] + curAttr[2]*0.15);
							pupil2.setAttributeNS(null,"cy",pupilInitPos[3] + curAttr[2]*0.15);
							pupil1.setAttributeNS(null,"class","");
							pupil2.setAttributeNS(null,"class","");
						}
						curX = thisX;
						break;
					default:
				}

				elem.setAttributeNS(null,curAttr[1],curAttr[2]);

			}
			let elem1 = elem.cloneNode(true);
			ideContent.appendChild(elem);
			ideContent1.appendChild(elem1);

      txt = txt.replace(/&lt;/g,"<");
      txt = txt.replace(/&gt;/g,">");
      txt = txt.replace(/&quot;/g,"\"");
			let j = 0;
			var speed = 35;
			function typeWriter() {
				if (j < txt.length) {
          let txtNode;
          txtNode = document.createTextNode(txt[j]);
          //console.log(txt[j]);
					elem.appendChild(txtNode);
					elem1.appendChild(txtNode.cloneNode(true));
					j++;
					setTimeout(typeWriter, fps);
				}
			}
			typeWriter();
			i++;
			setTimeout(eachWord, speed * (txt.length));
		} else {
			tiltHead();
		}
	}

	let blinkers = document.getElementsByClassName("blinking");
	//console.log(blinkers.length);

	function blinkingEye(){
		for(let j = 0; j < blinkers.length; j++){
			//console.log(blinkers[j]);
			//console.log("j = " + j);
			blinkers[j].setAttributeNS(null,"class","blinking blinked");
			setTimeout(function(){
					blinkers[j].setAttributeNS(null,"class","blinking");
			},1000);
		}
		//setTimeout(blinkingEye,4000);
	}

	eachWord();
  bodyTypeId = requestAnimationFrame(bodyTyping);

  timer = setInterval(blinkingEye,3000);
	function twinklingStar(star){
		let starChilds = star.children;
		//console.log(starChilds);
		starChilds[0].setAttributeNS(null,"class","star");
		starChilds[1].setAttributeNS(null,"class","starGlow");
		setTimeout(function(){
			starChilds[0].setAttributeNS(null,"class","");
			starChilds[1].setAttributeNS(null,"class","");
		},1000);
	}
	function twinkleTwinkle() {
		let stars = document.querySelectorAll('[data-name = "twinklingStar"]');
		//console.log(stars);
		stars.forEach(function(item, index){
			//starChilds = item.children;
			//console.log(index);
			//console.log(item);
			setTimeout(function(){
        twinklingStar(item);
				setInterval(function(){
					twinklingStar(item);
				},2200);
			},index*300);

		});
	}
	twinkleTwinkle();

	let rolyLeftEye = document.getElementById("rolyLeftEye");
	let rolyRightEye = document.getElementById("rolyRightEye");
	let wink = document.getElementById("wink");
	let rolyTongue = document.getElementById("tongue");
	let tongueBbox = rolyTongue.getBBox();
	rolyTongue.style.transform = "transform-origin:" + (tongueBbox.x +(tongueBbox.width/2)) + " " + (tongueBbox.y +(tongueBbox.height/2));
	//console.log(tongueBbox.x);
	let keyframeNode = document.createTextNode("@keyframes stickOut{0%{transform: translateY(0);}15%{transform: translateY("+ tongueBbox.height +"px);}85%{transform: translateY("+ tongueBbox.height +"px);}100%{transform: translateY(0);}}");
	//style.crete("@keyframes stickOut{0%{transform: translateY(0);}25%{transform: translateY("+ tongueBbox.height +"px);}75%{transform: translateY("+ tongueBbox.height +"px);}100%{transform: translateY(0);}}", sheet.cssRules.length);
	style.appendChild(keyframeNode);
	function creepyRoly(){
		rolyRightEye.setAttributeNS(null,"class","glance");
		//rolyLeftEye.addEventListener("animationend",function(){
		rolyLeftEye.setAttributeNS(null,"class","glance");
		setTimeout(function(){
			rolyLeftEye.setAttributeNS(null,"class","winking1");
			wink.setAttributeNS(null,"class","winking2");
			rolyTongue.setAttributeNS(null , "class","bleh");
		},1000);

		//});

			setTimeout(function(){
				wink.setAttributeNS(null , "class","");
				rolyRightEye.setAttributeNS(null,"class","unglance");
				rolyLeftEye.setAttributeNS(null,"class","unglance");
				rolyTongue.setAttributeNS(null,"class","");
			},3500);
	}
	creepyRoly();
	setInterval(creepyRoly, 10000);


	// fukuro

	let fukuroHead = document.getElementById("fukuroHead");
	let fukuroLeftEar = document.getElementById("leftEar");
	let fukuroRightEar = document.getElementById("rightEar");
	let fukuroHeadBbox = fukuroHead.getBBox();
	fukuroHead.style.transformOrigin =  (fukuroHeadBbox.x +(fukuroHeadBbox.width/2)) + " " + (fukuroHeadBbox.y +(fukuroHeadBbox.height * 3/4));
	//console.log(fukuroHeadBbox.x +(fukuroHeadBbox.width/2));
	keyframeNode = document.createTextNode("#fukuroHead{transform-origin:"+ (fukuroHeadBbox.x +(fukuroHeadBbox.width/2)) +"px "+ (fukuroHeadBbox.y +(fukuroHeadBbox.height * 3/4)) +"px}");
	style.appendChild(keyframeNode);
	let leftWing = document.getElementById("leftWing");
	let rightWing = document.getElementById("rightWing");
	let fukuroMouth = document.getElementById("mouth");
	let mouthBBox = fukuroMouth.getBBox();
	keyframeNode = document.createTextNode("#mouth{transform-origin:"+ (mouthBBox.x +(mouthBBox.width/2)) +"px "+ (mouthBBox.y +(mouthBBox.height/2)) +"px}");
	style.appendChild(keyframeNode);

	let shadowHead = document.getElementById("fukuroHead-2");
	let shadowLeftEar = document.getElementById("leftEar-2");
	let shadowRightEar = document.getElementById("rightEar-2");
	let shadowLeftWing = document.getElementById("leftWing-2");
	let shadowRightWing = document.getElementById("rightWing-2");
	let shadowMouth = document.getElementById("mouth-2");
	let shadowHeadBbox = shadowHead.getBBox();
	let shadowMouthBBox = shadowMouth.getBBox();
	keyframeNode = document.createTextNode("#fukuroHead-2{transform-origin:"+ (shadowHeadBbox.x +(shadowHeadBbox.width/4)) +"px "+ (shadowHeadBbox.y +(shadowHeadBbox.height/2)) +"px}");
	style.appendChild(keyframeNode);
	keyframeNode = document.createTextNode("#mouth-2{transform-origin:"+ (shadowMouthBBox.x +(shadowMouthBBox.width/2)) +"px "+ (shadowMouthBBox.y +(shadowMouthBBox.height/2)) +"px}");
	style.appendChild(keyframeNode);
	function fukuro(){
		fukuroHead.setAttributeNS(null,"class","curiousTilt");
		fukuroLeftEar.setAttributeNS(null,"class","leftEarTilt");
		fukuroRightEar.setAttributeNS(null,"class","rightEarTilt");
		leftWing.setAttributeNS(null,"class","rightEarTilt");
		rightWing.setAttributeNS(null,"class","leftEarTilt");
		fukuroMouth.setAttributeNS(null,"class","fukuroMouth");

		shadowHead.setAttributeNS(null,"class","shadowTilt");
		shadowLeftEar.setAttributeNS(null,"class","leftEarTilt");
		shadowRightEar.setAttributeNS(null,"class","rightEarTilt");
		shadowLeftWing.setAttributeNS(null,"class","rightEarTilt");
		shadowRightWing.setAttributeNS(null,"class","leftEarTilt");
		shadowMouth.setAttributeNS(null,"class","shadowMouth");
		setTimeout(function(){
			fukuroHead.setAttributeNS(null,"class","");
			fukuroLeftEar.setAttributeNS(null,"class","");
			fukuroRightEar.setAttributeNS(null,"class","");
			leftWing.setAttributeNS(null,"class","");
			rightWing.setAttributeNS(null,"class","");
			fukuroMouth.setAttributeNS(null,"class","");

			shadowHead.setAttributeNS(null,"class","");
			shadowLeftEar.setAttributeNS(null,"class","");
			shadowRightEar.setAttributeNS(null,"class","");
			shadowLeftWing.setAttributeNS(null,"class","");
			shadowRightWing.setAttributeNS(null,"class","");
			shadowMouth.setAttributeNS(null,"class","");
		},5100);
	}
	fukuro();
	setInterval(fukuro, 7000);



	//bubbles (save myself the trouble, break each into a dictionary of attributes manually in case regex fails)
	/*let bubbles = ['<g id="Bubble-4" data-name="Bubble"><g opacity="0.49"><circle cx="1727.508" cy="'+ (waterbbox.y + waterbbox.height-2.622) +'" r="2.622" fill="gray"/><path d="M1727.508,619.585a2.64,2.64,0,1,1,2.64-2.64A2.642,2.642,0,0,1,1727.508,619.585Zm0-5.245a2.6,2.6,0,1,0,2.605,2.605A2.608,2.608,0,0,0,1727.508,614.34Z" fill="#3b406b"/></g><g opacity="0.44"><path d="M1726.884,614.954a2.4,2.4,0,0,0,.349,4,2.193,2.193,0,0,1-1.783-2.822C1725.649,615.467,1726.884,614.954,1726.884,614.954Z" fill="#fff"/><path d="M1727.308,618.991l-.079-.015a2.77,2.77,0,0,1-1.657-1.092,2.115,2.115,0,0,1-.138-1.752c.2-.67,1.393-1.173,1.444-1.194l.108-.045-.091.074a2.647,2.647,0,0,0-.923,1.973,2.608,2.608,0,0,0,1.271,2Zm-.521-3.974c-.3.141-1.16.585-1.32,1.125a2.084,2.084,0,0,0,.134,1.724,2.673,2.673,0,0,0,1.551,1.056,2.6,2.6,0,0,1-1.215-1.981A2.675,2.675,0,0,1,1726.787,615.017Z" fill="#3b406b"/></g><g opacity="0.54"><path d="M1725.931,618.567c-.273-.178.582.743,1.175.663C1727.106,619.23,1726.38,618.861,1725.931,618.567Z" fill="#fff"/><path d="M1727.029,619.243a1.921,1.921,0,0,1-1.156-.681c0-.011,0-.018,0-.023s.02,0,.061.021c.444.29,1.167.658,1.174.662l.025.013-.028,0A.511.511,0,0,1,1727.029,619.243Zm-1.14-.689a.944.944,0,0,0,.187.2,1.607,1.607,0,0,0,1,.471c-.133-.068-.753-.39-1.15-.649A.209.209,0,0,0,1725.889,618.554Z" fill="#3b406b"/></g></g>',
	'<g id="Bubble-3" data-name="Bubble"><g opacity="0.49"><circle cx="1723.149" cy="'+ (waterbbox.y + waterbbox.height-8.776) +'" r="8.776" fill="gray"/><path d="M1723.149,613.293a8.834,8.834,0,1,1,8.834-8.834A8.844,8.844,0,0,1,1723.149,613.293Zm0-17.552a8.718,8.718,0,1,0,8.718,8.718A8.728,8.728,0,0,0,1723.149,595.741Z" fill="#3b406b"/></g><g opacity="0.44"><path d="M1721.061,597.793c-2.082,1.706-6.38,8,1.166,13.406,0,0-8.279-1.639-5.966-9.445C1716.926,599.512,1721.061,597.793,1721.061,597.793Z" fill="#fff"/><path d="M1722.478,611.307l-.262-.052c-.038-.007-3.813-.783-5.548-3.654a7.082,7.082,0,0,1-.462-5.863c.664-2.243,4.663-3.927,4.832-4l.363-.151-.3.249a8.867,8.867,0,0,0-3.091,6.6c.08,2.489,1.512,4.747,4.254,6.712Zm-1.744-13.3c-1.007.471-3.881,1.957-4.417,3.767a6.97,6.97,0,0,0,.45,5.77,8.926,8.926,0,0,0,5.191,3.533c-2.62-1.947-3.988-4.176-4.068-6.63A8.957,8.957,0,0,1,1720.734,598Z" fill="#3b406b"/></g><g opacity="0.54"><path d="M1717.871,609.888c-.914-.6,1.946,2.486,3.932,2.216C1721.8,612.1,1719.374,610.871,1717.871,609.888Z" fill="#fff"/><path d="M1721.544,612.15c-1.671,0-3.731-1.978-3.867-2.282-.015-.034-.014-.06.005-.075s.069-.018.2.071c1.484.971,3.9,2.2,3.929,2.215l.082.042-.091.012A1.915,1.915,0,0,1,1721.544,612.15Zm-3.815-2.307a3.131,3.131,0,0,0,.628.667,5.365,5.365,0,0,0,3.346,1.576c-.446-.229-2.52-1.305-3.848-2.174A.633.633,0,0,0,1717.729,609.843Z" fill="#3b406b"/></g></g>',
	'<g id="Bubble-2" data-name="Bubble"><g opacity="0.49"><circle cx="1724.887" cy="'+ (waterbbox.y + waterbbox.height-5.773) +'" r="5.773" fill="gray"/><path d="M1724.887,645.884a5.811,5.811,0,1,1,5.811-5.811A5.818,5.818,0,0,1,1724.887,645.884Zm0-11.546a5.735,5.735,0,1,0,5.735,5.735A5.742,5.742,0,0,0,1724.887,634.338Z" fill="#3b406b"/></g><g opacity="0.44"><path d="M1723.513,635.689c-1.369,1.122-4.2,5.261.767,8.818,0,0-5.445-1.078-3.924-6.213C1720.793,636.819,1723.513,635.689,1723.513,635.689Z" fill="#fff"/><path d="M1724.445,644.578l-.172-.034a6.1,6.1,0,0,1-3.649-2.4,4.657,4.657,0,0,1-.3-3.857c.437-1.475,3.067-2.583,3.179-2.629l.238-.1-.2.164a5.833,5.833,0,0,0-2.033,4.343c.053,1.637.994,3.122,2.8,4.415Zm-1.146-8.751c-.663.31-2.554,1.288-2.906,2.478a4.586,4.586,0,0,0,.3,3.8,5.876,5.876,0,0,0,3.415,2.324,5.72,5.72,0,0,1-2.676-4.362A5.891,5.891,0,0,1,1723.3,635.827Z" fill="#3b406b"/></g><g opacity="0.54"><path d="M1721.415,643.645c-.6-.393,1.28,1.635,2.586,1.458C1724,645.1,1722.4,644.291,1721.415,643.645Z" fill="#fff"/><path d="M1723.831,645.133a4.216,4.216,0,0,1-2.543-1.5c-.01-.023-.009-.04,0-.05s.045-.012.134.047c.977.638,2.569,1.449,2.585,1.457l.054.027-.06.009A1.41,1.41,0,0,1,1723.831,645.133Zm-2.509-1.518a2.07,2.07,0,0,0,.413.439,3.531,3.531,0,0,0,2.2,1.037c-.294-.151-1.658-.859-2.531-1.431A.426.426,0,0,0,1721.322,643.615Z" fill="#3b406b"/></g></g>',
	'<g id="Bubble" data-name="Bubble"><g opacity="0.49"><circle cx="1721.703" cy="'+ (waterbbox.y + waterbbox.height-4.254) +'" r="4.254" fill="gray"/><path d="M1721.7,658.259a4.282,4.282,0,1,1,4.282-4.281A4.285,4.285,0,0,1,1721.7,658.259Zm0-8.507a4.226,4.226,0,1,0,4.226,4.226A4.23,4.23,0,0,0,1721.7,649.752Z" fill="#3b406b"/></g><g opacity="0.44"><path d="M1720.691,650.747c-1.009.827-3.092,3.877.565,6.5,0,0-4.012-.794-2.891-4.577C1718.687,651.58,1720.691,650.747,1720.691,650.747Z" fill="#fff"/><path d="M1721.378,657.3l-.127-.025a4.5,4.5,0,0,1-2.689-1.771,3.432,3.432,0,0,1-.224-2.842c.322-1.087,2.26-1.9,2.342-1.938l.176-.073-.147.121a4.3,4.3,0,0,0-1.5,3.2,4.235,4.235,0,0,0,2.062,3.253Zm-.845-6.448c-.488.229-1.881.949-2.141,1.826a3.378,3.378,0,0,0,.218,2.8,4.328,4.328,0,0,0,2.516,1.712,4.218,4.218,0,0,1-1.972-3.214A4.342,4.342,0,0,1,1720.533,650.849Z" fill="#3b406b"/></g><g opacity="0.54"><path d="M1719.145,656.609c-.443-.289.943,1.2,1.906,1.074C1721.051,657.683,1719.874,657.086,1719.145,656.609Z" fill="#fff"/><path d="M1720.925,657.706a3.11,3.11,0,0,1-1.874-1.106c-.007-.017-.007-.029,0-.037s.034-.009.1.034c.719.471,1.892,1.068,1.9,1.074l.04.02-.045.006A.883.883,0,0,1,1720.925,657.706Zm-1.849-1.119a1.54,1.54,0,0,0,.3.324,2.6,2.6,0,0,0,1.622.763c-.216-.111-1.221-.632-1.865-1.053A.273.273,0,0,0,1719.076,656.587Z" fill="#3b406b"/></g></g>'];
	*/
	let waterBbox = document.getElementById("waterbbox").getBBox();
	//console.log(waterBbox.y);
	//keyframeNode = document.createTextNode(".floatingBubs{transform: translateY("+ -(waterBbox.height) +"px !important)}");



	let bubbles = [
		{
			id:"Bubble-1",
			tag: "g",
			'data-name':"Bubble",
			children:[
				{
					tag: "g",
					opacity:0.49,
					children:[
						{
							tag:"circle",
							cx: 1721.703,
							cy: 653.978,
							r: 4.254,
							fill:"gray"
						},
						{
							tag:"path",
							d: "M1721.7,658.259a4.282,4.282,0,1,1,4.282-4.281A4.285,4.285,0,0,1,1721.7,658.259Zm0-8.507a4.226,4.226,0,1,0,4.226,4.226A4.23,4.23,0,0,0,1721.7,649.752Z",
							fill:"#3b406b"
						}
					]
				},
				{
					tag: "g",
					opacity:0.44,
					children:[
						{
							tag:"path",
							d: "M1720.691,650.747c-1.009.827-3.092,3.877.565,6.5,0,0-4.012-.794-2.891-4.577C1718.687,651.58,1720.691,650.747,1720.691,650.747Z",
							fill:"#fff"
						},
						{
							tag:"path",
							d: "M1721.378,657.3l-.127-.025a4.5,4.5,0,0,1-2.689-1.771,3.432,3.432,0,0,1-.224-2.842c.322-1.087,2.26-1.9,2.342-1.938l.176-.073-.147.121a4.3,4.3,0,0,0-1.5,3.2,4.235,4.235,0,0,0,2.062,3.253Zm-.845-6.448c-.488.229-1.881.949-2.141,1.826a3.378,3.378,0,0,0,.218,2.8,4.328,4.328,0,0,0,2.516,1.712,4.218,4.218,0,0,1-1.972-3.214A4.342,4.342,0,0,1,1720.533,650.849Z",
							fill:"#3b406b"
						}
					]
				},
				{
					tag: "g",
					opacity:0.54,
					children:[
						{
							tag:"path",
							d: "M1719.145,656.609c-.443-.289.943,1.2,1.906,1.074C1721.051,657.683,1719.874,657.086,1719.145,656.609Z",
							fill:"#fff"
						},
						{
							tag:"path",
							d: "M1720.925,657.706a3.11,3.11,0,0,1-1.874-1.106c-.007-.017-.007-.029,0-.037s.034-.009.1.034c.719.471,1.892,1.068,1.9,1.074l.04.02-.045.006A.883.883,0,0,1,1720.925,657.706Zm-1.849-1.119a1.54,1.54,0,0,0,.3.324,2.6,2.6,0,0,0,1.622.763c-.216-.111-1.221-.632-1.865-1.053A.273.273,0,0,0,1719.076,656.587Z",
							fill:"#3b406b"
						}
					]
				}
			]
		},
		{
			id:"Bubble-2",
			tag: "g",
			'data-name':"Bubble",
			children:[
				{
					tag: "g",
					opacity:0.49,
					children:[
						{
							tag:"circle",
							cx: 1724.887,
							cy: 640.073, //from 672.81
							r: 5.773,
							fill:"gray"
						},
						{
							tag:"path",
							d: "M1724.887,645.884a5.811,5.811,0,1,1,5.811-5.811A5.818,5.818,0,0,1,1724.887,645.884Zm0-11.546a5.735,5.735,0,1,0,5.735,5.735A5.742,5.742,0,0,0,1724.887,634.338Z",
							fill:"#3b406b"
						}
					]
				},
				{
					tag: "g",
					opacity:0.44,
					children:[
						{
							tag:"path",
							d: "M1723.513,635.689c-1.369,1.122-4.2,5.261.767,8.818,0,0-5.445-1.078-3.924-6.213C1720.793,636.819,1723.513,635.689,1723.513,635.689Z",
							fill:"#fff"
						},
						{
							tag:"path",
							d: "M1724.445,644.578l-.172-.034a6.1,6.1,0,0,1-3.649-2.4,4.657,4.657,0,0,1-.3-3.857c.437-1.475,3.067-2.583,3.179-2.629l.238-.1-.2.164a5.833,5.833,0,0,0-2.033,4.343c.053,1.637.994,3.122,2.8,4.415Zm-1.146-8.751c-.663.31-2.554,1.288-2.906,2.478a4.586,4.586,0,0,0,.3,3.8,5.876,5.876,0,0,0,3.415,2.324,5.72,5.72,0,0,1-2.676-4.362A5.891,5.891,0,0,1,1723.3,635.827Z",
							fill:"#3b406b"
						}
					]
				},
				{
					tag: "g",
					opacity:0.54,
					children:[
						{
							tag:"path",
							d: "M1721.415,643.645c-.6-.393,1.28,1.635,2.586,1.458C1724,645.1,1722.4,644.291,1721.415,643.645Z",
							fill:"#fff"
						},
						{
							tag:"path",
							d: "M1723.831,645.133a4.216,4.216,0,0,1-2.543-1.5c-.01-.023-.009-.04,0-.05s.045-.012.134.047c.977.638,2.569,1.449,2.585,1.457l.054.027-.06.009A1.41,1.41,0,0,1,1723.831,645.133Zm-2.509-1.518a2.07,2.07,0,0,0,.413.439,3.531,3.531,0,0,0,2.2,1.037c-.294-.151-1.658-.859-2.531-1.431A.426.426,0,0,0,1721.322,643.615Z",
							fill:"#3b406b"
						}
					]
				}
			]
		},
		{
			id:"Bubble-3",
			tag: "g",
			'data-name':"Bubble",
			children:[
				{
					tag: "g",
					opacity:0.49,
					children:[
						{
							tag:"circle",
							cx: 1723.149,
							cy: 604.459,
							r: 8.776,
							fill:"gray"
						},
						{
							tag:"path",
							d: "M1723.149,613.293a8.834,8.834,0,1,1,8.834-8.834A8.844,8.844,0,0,1,1723.149,613.293Zm0-17.552a8.718,8.718,0,1,0,8.718,8.718A8.728,8.728,0,0,0,1723.149,595.741Z",
							fill:"#3b406b"
						}
					]
				},
				{
					tag: "g",
					opacity:0.44,
					children:[
						{
							tag:"path",
							d: "M1721.061,597.793c-2.082,1.706-6.38,8,1.166,13.406,0,0-8.279-1.639-5.966-9.445C1716.926,599.512,1721.061,597.793,1721.061,597.793Z",
							fill:"#fff"
						},
						{
							tag:"path",
							d: "M1722.478,611.307l-.262-.052c-.038-.007-3.813-.783-5.548-3.654a7.082,7.082,0,0,1-.462-5.863c.664-2.243,4.663-3.927,4.832-4l.363-.151-.3.249a8.867,8.867,0,0,0-3.091,6.6c.08,2.489,1.512,4.747,4.254,6.712Zm-1.744-13.3c-1.007.471-3.881,1.957-4.417,3.767a6.97,6.97,0,0,0,.45,5.77,8.926,8.926,0,0,0,5.191,3.533c-2.62-1.947-3.988-4.176-4.068-6.63A8.957,8.957,0,0,1,1720.734,598Z",
							fill:"#3b406b"
						}
					]
				},
				{
					tag: "g",
					opacity:0.54,
					children:[
						{
							tag:"path",
							d: "M1717.871,609.888c-.914-.6,1.946,2.486,3.932,2.216C1721.8,612.1,1719.374,610.871,1717.871,609.888Z",
							fill:"#fff"
						},
						{
							tag:"path",
							d: "M1721.544,612.15c-1.671,0-3.731-1.978-3.867-2.282-.015-.034-.014-.06.005-.075s.069-.018.2.071c1.484.971,3.9,2.2,3.929,2.215l.082.042-.091.012A1.915,1.915,0,0,1,1721.544,612.15Zm-3.815-2.307a3.131,3.131,0,0,0,.628.667,5.365,5.365,0,0,0,3.346,1.576c-.446-.229-2.52-1.305-3.848-2.174A.633.633,0,0,0,1717.729,609.843Z",
							fill:"#3b406b"
						}
					]
				}
			]
		},
		{
			id:"Bubble-4",
			tag: "g",
			'data-name':"Bubble",
			children:[
				{
					tag: "g",
					opacity:0.49,
					children:[
						{
							tag:"circle",
							cx: 1727.508,
							cy: 616.945,
							r: 2.622,
							fill:"gray"
						},
						{
							tag:"path",
							d: "M1727.508,619.585a2.64,2.64,0,1,1,2.64-2.64A2.642,2.642,0,0,1,1727.508,619.585Zm0-5.245a2.6,2.6,0,1,0,2.605,2.605A2.608,2.608,0,0,0,1727.508,614.34Z",
							fill:"#3b406b"
						}
					]
				},
				{
					tag: "g",
					opacity:0.44,
					children:[
						{
							tag:"path",
							d: "M1726.884,614.954a2.4,2.4,0,0,0,.349,4,2.193,2.193,0,0,1-1.783-2.822C1725.649,615.467,1726.884,614.954,1726.884,614.954Z",
							fill:"#fff"
						},
						{
							tag:"path",
							d: "M1727.308,618.991l-.079-.015a2.77,2.77,0,0,1-1.657-1.092,2.115,2.115,0,0,1-.138-1.752c.2-.67,1.393-1.173,1.444-1.194l.108-.045-.091.074a2.647,2.647,0,0,0-.923,1.973,2.608,2.608,0,0,0,1.271,2Zm-.521-3.974c-.3.141-1.16.585-1.32,1.125a2.084,2.084,0,0,0,.134,1.724,2.673,2.673,0,0,0,1.551,1.056,2.6,2.6,0,0,1-1.215-1.981A2.675,2.675,0,0,1,1726.787,615.017Z",
							fill:"#3b406b"
						}
					]
				},
				{
					tag: "g",
					opacity:0.54,
					children:[
						{
							tag:"path",
							d: "M1725.931,618.567c-.273-.178.582.743,1.175.663C1727.106,619.23,1726.38,618.861,1725.931,618.567Z",
							fill:"#fff"
						},
						{
							tag:"path",
							d: "M1727.029,619.243a1.921,1.921,0,0,1-1.156-.681c0-.011,0-.018,0-.023s.02,0,.061.021c.444.29,1.167.658,1.174.662l.025.013-.028,0A.511.511,0,0,1,1727.029,619.243Zm-1.14-.689a.944.944,0,0,0,.187.2,1.607,1.607,0,0,0,1,.471c-.133-.068-.753-.39-1.15-.649A.209.209,0,0,0,1725.889,618.554Z",
							fill:"#3b406b"
						}
					]
				}
			]
		}
	]



	let bubbleTrans = [];
	bubbles.forEach((item, index) => {
		//bubbleTrans.push("translateY(" + (672.81 - item.children[0].children[0].cy + item.children[0].children[0].r) + "px)");
		keyframeNode = document.createTextNode("@keyframes floatFloat"+ (index+1) +"{ 100%{ transform: translateY(" + (672.81 - item.children[0].children[0].cy) + "px) translateY("+ -(672.81-waterBbox.y) +"px); } }");
		style.appendChild(keyframeNode);
		let bubbleNode = document.createTextNode("#" + item.id + "{transform: translateY(" + (672.81 - item.children[0].children[0].cy) + "px);}");
		style.appendChild(bubbleNode);
	});
	//console.log(bubbleTrans);


	let bubbleRegion = document.getElementById("bubbles");

	function bubbleNodeFormer(domVal, nodeToAddTo){
		let bubble = document.createElementNS('http://www.w3.org/2000/svg', domVal.tag);
		let keys = Object.keys(domVal);
		keys.forEach((item,index) => {
			if(item != "children"){
				bubble.setAttributeNS(null,item,domVal[item]);
			} else {
				domVal.children.forEach((item,index)=>{
					bubbleNodeFormer(item, bubble);
				});
			}
		});
		nodeToAddTo.appendChild(bubble);
		return bubble;
	}

	function spawnBubble(bubble,index){
		let curBubble = bubbleNodeFormer(bubble,bubbleRegion);
		let axolotlMouth = document.getElementById("axolotlMouth");
		//console.log(curBubble);
		//const curBubble = document.getElementById("Bubble-" + (index+1));
		axolotlMouth.setAttributeNS(null,"class","sleepingAxolotl");
		curBubble.setAttributeNS(null,"class","float"+(index+1));
		curBubble.addEventListener("animationend", function(){
			this.remove();
		});

		axolotlMouth.addEventListener("animationend", function(){
			axolotlMouth.setAttributeNS(null,"class","");
		});

	}/*
	class spawnBubble{
		constructor(bubble,index){
			this.bubble = bubble;
			this.index = index;
			bubbleNodeFormer(this.bubble,bubbleRegion);
			this.curBubble = document.getElementById("Bubble-" + (index+1));
		}
	}*/
	function pickBubble(){
		let index = Math.floor(Math.random() * 4);
		spawnBubble(bubbles[index],index);
	}
	pickBubble();
	setInterval(pickBubble,1000);


	//building lights
	//toggle on and off based on state(whether #000) for random index in array of windows
	//get all window nodes and store in one array. and corresopnding colours in another.

	let windows =  document.getElementById("windows").children;
	let windows2 = document.getElementById("windows-2").children;
	//windows = [...windows,...(document.getElementById("windows-2").children)];
	//console.log(windows);

	//should be hardcoded so that i won't look like clubbing

	let windowColours = [
		"#fff", "#FF9933", "#BFBFEA","#fff","#FF9933","#FF9933","#FF9933","#f2b3c8","#bfbfea",
		//"#fff", "#FF9933", "#f2b3c8", "#BFBFEA", "#DEDEFF", "#fff", "#fcf", "#f93","#f2b3c8","#bfbfea","f93","#ccf","#f93","#bfbfea"
	]
	let windowColours2 = ["#fff", "#FF9933", "#f2b3c8", "#BFBFEA", "#DEDEFF", "#fff", "#fcf", "#f93","#f2b3c8","#bfbfea","f93","#ccf","#f93","#bfbfea"]
	//#071930]

	function toggleBuildingLights(){
		let index = Math.floor(Math.random() * windows.length);
		//console.log("index: " + index);
		if (windows[index].getAttributeNS(null,"fill") == "#071930"){
			windows[index].setAttributeNS(null,"fill", windowColours[index]);
		} else {
			windows[index].setAttributeNS(null,"fill", "#071930");
		}
		setTimeout(toggleBuildingLights,Math.floor(Math.random() * 2000) + 1000);
	}
	function toggleBuildingLight2(){
		let index2 =  Math.floor(Math.random() * windows2.length);
		if (windows2[index2].getAttributeNS(null,"fill") == "#071930"){
			windows2[index2].setAttributeNS(null,"fill", windowColours2[index2]);
		} else {
			windows2[index2].setAttributeNS(null,"fill", "#071930");
		}
		setTimeout(toggleBuildingLight2,Math.floor(Math.random() * 2000) + 1000);
	}
	toggleBuildingLights();
	toggleBuildingLight2();
	// try each building one by one (means two more arrays)
	//leaves shaking somehow idk which direction but for every leaf need calculate their bbox and rotate about a certain pivot... so cant use bbox  but instead hardcoded points from illustrator.


  //simulate clouds overhead

  let myWindow = document.getElementById("windowPane");
  let moonlight = document.getElementById("moonlight");




  // now for the hover effects for interactivity
  // uses class

  //let myBody = document.getElementsByClassName("bokuNoJun");
  //console.log(document.getElementsByClassName("bokuNoJun"));
  //console.log(document.getElementById("Face").getBoundingClientRect());  //may have to use this..
  //console.log(document.getElementById("Face").getBBox());
  //let me = document.querySelectorAll("[hover='bokuNoJun']");
  /*$("#Face").hover(function(){
    popUp(this);
  },function(){
    document.getElementById("prompt").remove();
  });*/

  for(let prop in prompts){
    let me = document.querySelectorAll("[hover='"+ prop +"']");
    for(var index = 0; index < me.length;index++){
      me[index].style.cursor= "pointer";
      let coords = {
        top:me[index].getBoundingClientRect().top,
          bottom:me[index].getBoundingClientRect().bottom,
            left:me[index].getBoundingClientRect().left,
              right:me[index].getBoundingClientRect().right,
      }
      if(!clientBoxes.hasOwnProperty(prop)){
        clientBoxes[prop]=[coords];
      } else {
        clientBoxes[prop].push(coords);
      }
      clientBoxes[prop][index].top += document.documentElement.scrollTop;
      clientBoxes[prop][index].bottom += document.documentElement.scrollTop;
      //console.log(clientBoxes[prop][index].top);
      me[index].addEventListener("mouseenter",function(e){
        console.log("mouseOvertriggered");
        console.log(this);

        let prompt = document.getElementById("prompt");
        if(document.getElementById("prompt") == null){
            popUp(this);
        } else if(prompt.getAttribute("hover") != this.getAttributeNS(null,"hover")){
          clearInterval(followCursor);
          clearInterval(checkBounds);
          prompt.remove();
          popUp(this);
        }

      })
      me[index].addEventListener("click",function(e){
        //console.log("clicked");
        clearInterval(followCursor);
        clearInterval(checkBounds);
        document.getElementById("prompt").remove();
        showMessage(this);
      });
    //  console.log(clientBoxes[prop]);
      /*me[index].onmouseleave = function(){
        console.log("mouseLeaveTriggered");
        document.getElementById("prompt").remove();
      }*/
    }
  }
//  console.log(clientBoxes);
  let mouseX = 0, mouseY = 0;
  let xp = 0, yp = 0;
  let followCursor,checkBounds;
  let realMouseY = 0;
  document.onmousemove = function(e){
    mouseX = e.clientX;
    realMouseY = e.clientY + document.documentElement.scrollTop;
    //console.log(document.documentElement.scrollTop)
    mouseY = e.pageY-(window.innerHeight/40);
  };
  function popUp(e){
    let prompt = document.createElement("div");
    let classname = e.getAttributeNS(null,"hover");
    prompt.prepend(document.createTextNode(prompts[classname]));
    prompt.setAttribute("id","prompt");
    prompt.setAttribute("hover", classname);
    document.getElementById("svgContainer").appendChild(prompt);
    prompt.style.left = mouseX + "px";
    prompt.style.top = mouseY+ "px";
    //let clientBound = e.getBoundingClientRect();
    //mouseX = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
    //mouseY = e.clientY + document.body.scrollTop + document.documentElement.scrollTop - prompt.getBoundingClientRect().height/2;
    setTimeout(function(){
        prompt.style.minWidth = "5vw";
    },10);

    xp = mouseX;
    yp = mouseY;
  //  let promptBound = prompt.getBoundingClientRect();
    followCursor = setInterval(function(){
      xp += ((mouseX - xp)/4);
      yp += ((mouseY - yp)/4);
      prompt.style.left = xp + "px";
      prompt.style.top = yp+ "px";
      //console.log("prompt loop");
      //doesn't work because once scroll will mess up
    //  console.log(clientBoxes[classname]);

    },fps);
    checkBounds = setInterval(function(){
      let isInside = false;
      for(var index = 0; index < clientBoxes[classname].length;index++){
        if(!(mouseX < clientBoxes[classname][index].left || mouseX > clientBoxes[classname][index].right || realMouseY < clientBoxes[classname][index].top || realMouseY > clientBoxes[classname][index].bottom)){
          isInside = true;
          break;
        }
      }
      if(isInside == false){
        //console.log("removed?");
        //console.log(mouseX,realMouseY);
        prompt.remove();
        clearInterval(followCursor);
        clearInterval(checkBounds);
      }
    },200);
    //document.getElementById(e.id).removeEventListener("mouseover",popUp);
  }


  function showMessage(e){
    //let msgBox = document.createElement("div");
  //  msgBox.setAttribute("id","messagePopup");
    //msgBox.setAttribute("hover", classname);
  //  document.getElementById("messagePopContainer").appendChild(msgBox);
    let msgBox = document.getElementById("messagePopupContents");
    document.getElementById("messagePopup").style.opacity = 0.9;

    let classname = e.getAttributeNS(null,"hover");
    let randomMsg = Math.floor(Math.random() * messages[classname].length);
    let chosenTxt = messages[classname][randomMsg];
    let txtChunks = chosenTxt.split("\\");
    let msgClickBox = document.getElementById("msgClickBox");
    msgClickBox.style.pointerEvents = "auto";
    document.getElementById("messagePopupLabel").innerHTML = prompts[classname]+":";


    let chunkIndex = 0;
    let hasClickedOnce = false;
    let typeWriterTimer;
    let j = 0;
  //  console.log(txtChunks);
    typeWriter(txtChunks[chunkIndex]);
    //get rid of prompt when click, and clicks should be on the entire svg container instead to prevent opening other prompts while reading one

    document.getElementById("msgClickBox").onclick=  function(){

      if(!hasClickedOnce){
        hasClickedOnce = true;
        clearTimeout(typeWriterTimer);
        //while(j < txtChunks[chunkIndex].length){
        msgBox.innerHTML+= txtChunks[chunkIndex].substring(j);
        return;
        //}
      }
      if(chunkIndex < txtChunks.length-1){
        //next part of message\
         //else {
          msgBox.innerHTML="";
          hasClickedOnce = false;
          j = 0;
          chunkIndex++;
          console.log(chunkIndex);
          typeWriter(txtChunks[chunkIndex]);

      } else {
        //animate fade in fade out, so only delete node when fade out completely
        document.getElementById("messagePopup").style.opacity = 0;
        msgBox.innerHTML = "";
        document.getElementById("messagePopupLabel").innerHTML ="";
        hasClickedOnce = false;
        msgClickBox.style.pointerEvents = "none";
      }
      //chunkIndex++;
    }

    function typeWriter(txt) {
      //console.log("txt: " + txt);
      if (j < txt.length) {
        //let txtNode;
        //txtNode = document.createTextNode(txt[j]);
        //msgBox.appendChild(txtNode);
        msgBox.innerHTML+=txt[j];
        if(rePunctuation.test(txt[j]) == true){
          typeWriterTimer= setTimeout(function(){
            typeWriter(txt);
          }, 250);
        } else {
          typeWriterTimer =setTimeout(function(){
            typeWriter(txt);
          }, fps);
        }
        j++;
      } else {
        hasClickedOnce = true;
      }
    }
  }

  /*
  $(window).scroll(function(event){
     var st = $(this).scrollTop();
       console.log(st);
     if (st > lastScrollTop){
       $(window).animate({
           scrollTop: $("#secondPage").offset().top
       }, {
         duration: 1000,
         easing: "easein"
       });
     } else {
       $('html, body').animate({
           scrollTop: $("#svgContainer").offset().top
       }, 1000,"easein"
       );
     }
     lastScrollTop = st;
  });*/
/*
function scrollToTop(scrollDuration) {
  var cosParameter = window.scrollY / 2,
      scrollCount = 0,
      oldTimestamp = performance.now();
  function step (newTimestamp) {
      scrollCount += Math.PI / (scrollDuration / (newTimestamp - oldTimestamp));
      if (scrollCount >= Math.PI) window.scrollTo(0, 0);
      if (window.scrollY === 0) return;
      window.scrollTo(0, Math.round(cosParameter + cosParameter * Math.cos(scrollCount)));
      oldTimestamp = newTimestamp;
      window.requestAnimationFrame(step);
  }
  window.requestAnimationFrame(step);
}*//*
  document.getElementById("about").onclick = function(){
    scrollToTop(2000);
  }
  */
  //let isDropOpen = [false,false,false,false];
  let isDropOpen = {
    misc: false,
    blender: false
  }
  let dropDownFolder = document.querySelectorAll(".dropDownFolder");
  console.log(dropDownFolder[0]);
  for(var j = 0; j < dropDownFolder.length;j++){
    dropDownFolder[j].addEventListener("click",function(e){
      //let category = this.childNodes[1].innerHTML;
      //console.log(category);
      console.log(this.id);
      //console.log(this.querySelector(".dropDownTitle"));
      e.stopPropagation();
      /*switch(category){
        case "Academic award records":
          category = "aar";
          break;
        case "Supporting documents":
            category = "sd";
            break;
          case "Co-curricular activities records":
              category = "cca";
              break;
          case "Certificates and school testimonials":
            category = "cst";
            break;
        default:
          console.log("Exploit?");
          return;
      }*/
      isDropOpen[this.id] = !isDropOpen[this.id];
      let carat = this.querySelector(".dropDownTitle").querySelector(".carat").querySelector("svg");
      //console.log(carat);
      if(isDropOpen[this.id]){
        this.querySelector(".dropDownContent").style.display = "inline-block";
        carat.style.transform = "rotate(0)";
        this.querySelector(".dropDownTitle").style.backgroundColor= "#52304B";
        this.querySelector(".dropDownTitle").style.color= "#CCD1BE";
        carat.querySelector("polygon").style.fill = "#CCD1BE";
      } else {
            //document.getElementById(category).style.display = "none";
            this.querySelector(".dropDownContent").style.display = "none";
            carat.style.transform = "rotate(-90deg)";
            this.querySelector(".dropDownTitle").style.backgroundColor= "#DAB567";
            this.querySelector(".dropDownTitle").style.color= "#335350";
            carat.querySelector("polygon").style.fill = "#335350";
      }
      //console.log(this.querySelector(":scope>"));
      //console.log(this.querySelector(".carat > svg > polygon"));
    })
  }



  let dropDownLinks = document.querySelectorAll(".dropLink");
  let isOverlayOpen = false;
  for(var j = 0; j < dropDownLinks.length; j++){
    dropDownLinks[j].onclick = function(e){
      e.stopPropagation();
      console.log("link clicked");
      //let link;

      let elemToBeAdded;
      switch(this.getAttribute("fileType")){
        case "video":
          elemToBeAdded = document.createElement("video");
          elemToBeAdded.setAttribute("loop","");
          elemToBeAdded.setAttribute("controls","");
          elemToBeAdded.setAttribute("autoplay","");
          elemToBeAdded.setAttribute("src",this.querySelector("div").querySelector("div").getAttribute("ref"));
          break;
        case "image":
          elemToBeAdded = document.createElement("img");
          elemToBeAdded.setAttribute("src",this.querySelector("div").querySelectorAll("div")[1].getAttribute("ref"));
          //elemToBeAdded.style.width = "75%";
          elemToBeAdded.style.height = "75vh";
          elemToBeAdded.style.marginTop = "12.5vh";
          elemToBeAdded.style.marginBottom = "12.5vh";
          break;
        case "hyperlink":
          return;
          break;
        default:
          return;
      }
      //let link = this.querySelector("div").querySelector("div").getAttribute("ref");
      let overlayContent = document.getElementById("overlayContent");
      overlayContent.appendChild(elemToBeAdded);
      document.getElementById("overlay").style.display = "block";
      overlayContent.style.top = "50px";
      //console.log(link);
      document.getElementById("overlayClose").onclick = function(){
        elemToBeAdded.remove();
        document.getElementById("overlay").style.display = "none";
      }
    }
  }

  //animate signature when on secondPage
  if(hasReachedSecondPage()){
    console.log("Reached secondPage");
    document.getElementById("sigPath").setAttributeNS(null,"class","aniSig");
    document.getElementById("sigStrike").setAttributeNS(null,"class","aniSig1");
  } else {
      console.log("Not yet secondPage");
    document.getElementById("sigPath").setAttributeNS(null,"class","");
  document.getElementById("sigStrike").setAttributeNS(null,"class","");
  }
  //console.log(document.getElementById("sigPath").getAttributeNS(null,"class"));
}

window.onresize = (e) => {
  console.log(e);
  for(let prop in prompts){
    let me = document.querySelectorAll("[hover='"+ prop +"']");
    for(var index = 0; index < me.length;index++){
      me[index].style.cursor= "pointer";
      let coords = {
        top:me[index].getBoundingClientRect().top,
          bottom:me[index].getBoundingClientRect().bottom,
            left:me[index].getBoundingClientRect().left,
              right:me[index].getBoundingClientRect().right,
      }
      clientBoxes[prop][index] = coords;

      clientBoxes[prop][index].top += document.documentElement.scrollTop;
      clientBoxes[prop][index].bottom += document.documentElement.scrollTop;
    }
  }
  console.log(clientBoxes);
}

window.onscroll = function(){
  if(hasReachedSecondPage()){
    document.getElementById("sigPath").setAttributeNS(null,"class","aniSig");
    document.getElementById("sigStrike").setAttributeNS(null,"class","aniSig1");
  } else {
    document.getElementById("sigPath").setAttributeNS(null,"class","");
    document.getElementById("sigStrike").setAttributeNS(null,"class","");
  }
}

/*
var lastScrollTop = 0;

function directionScroll(){
  var st = $(this).scrollTop();
  window.removeEventListener("scroll",directionScroll);
  //  console.log(st);
  if (st > lastScrollTop){
    console.log("scroll down");
    scrollToY(document.getElementById("secondPage").scrollTop, 500, 'easeInOutQuint');
  } else {
    console.log("scroll up");
     scrollToY(0, 500, 'easeInOutQuint');
  }
  lastScrollTop = st;
}

window.addEventListener("scroll",directionScroll);
window.addEventListener("scroll", function(e){
  e.preventDefault();
}, false);
function scrollToY(scrollTargetY, speed, easing) {
    // scrollTargetY: the target scrollY property of the window
    // speed: time in pixels per second
    // easing: easing equation to use

    var scrollY = window.scrollY || document.documentElement.scrollTop,
        scrollTargetY = scrollTargetY || 0,
        speed = speed || 2000,
        easing = easing || 'easeOutSine',
        currentTime = 0;

    // min time .1, max time .8 seconds
    var time = Math.max(.1, Math.min(Math.abs(scrollY - scrollTargetY) / speed, .8));

    // easing equations from https://github.com/danro/easing-js/blob/master/easing.js
    var easingEquations = {
            easeOutSine: function (pos) {
                return Math.sin(pos * (Math.PI / 2));
            },
            easeInOutSine: function (pos) {
                return (-0.5 * (Math.cos(Math.PI * pos) - 1));
            },
            easeInOutQuint: function (pos) {
                if ((pos /= 0.5) < 1) {
                    return 0.5 * Math.pow(pos, 5);
                }
                return 0.5 * (Math.pow((pos - 2), 5) + 2);
            }
        };

    // add animation loop
    function tick() {
        currentTime += 1 / 60;

        var p = currentTime / time;
        var t = easingEquations[easing](p);

        if (p < 1) {
            requestAnimFrame(tick);

            window.scrollTo(0, scrollY + ((scrollTargetY - scrollY) * t));
        } else {
            console.log('scroll done');
            window.scrollTo(0, scrollTargetY);
            window.addEventListener("scroll",directionScroll);
        }
    }

    // call it once to get started
    tick();
}


window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          function( callback ){
            window.setTimeout(callback, 1000 / 60);
          };
})();
*/
