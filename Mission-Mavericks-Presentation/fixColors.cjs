const fs = require('fs');
let content = fs.readFileSync('src/components/slides/Slide8EvidenceHub.tsx', 'utf8');

// Card 1: Emerald Green (fix base background and adjust emerald colors slightly)
content = content.replace(/rgba\(52,211,153,/g, 'rgba(32,223,137,');
content = content.replace(/#34d399/g, '#20df89');
content = content.replace(/'linear-gradient\\(145deg, #011a0e 0%, #010f08 45%, #011f10 100%\\)'/g, "'rgba(6, 21, 47, 0.4)', backdropFilter: 'blur(20px)'");

// Card 2: Electric Cyan (from sky blue)
content = content.replace(/rgba\(56,189,248,/g, 'rgba(0,217,255,');
content = content.replace(/#38bdf8/g, '#00d9ff');
content = content.replace(/'linear-gradient\\(160deg, #00071a 0%, #000d26 50%, #00071a 100%\\)'/g, "'rgba(6, 21, 47, 0.4)', backdropFilter: 'blur(20px)'");

// Card 3: Electric Blue (from pink)
content = content.replace(/rgba\(244,114,182,/g, 'rgba(23,103,255,');
content = content.replace(/#f472b6/g, '#3b82f6'); // Main blue icon/border
content = content.replace(/#f9a8d4/g, '#93c5fd'); // Text gradient lighter blue
content = content.replace(/text-pink-50/g, 'text-blue-50');
content = content.replace(/'linear-gradient\\(135deg, #130010 0%, #0d0010 45%, #1a0015 100%\\)'/g, "'rgba(6, 21, 47, 0.4)', backdropFilter: 'blur(20px)'");
content = content.replace(/linear-gradient\\(90deg, #ec4899, #f472b6, #f9a8d4, #f472b6, #ec4899\\)/g, 'linear-gradient(90deg, #1d4ed8, #3b82f6, #93c5fd, #3b82f6, #1d4ed8)');
content = content.replace(/rgba\(249,168,212,0.8\)/g, 'rgba(147,197,253,0.8)');

// Summaries (Bottom Strip): Change amber (benefits summary) to Emerald green to match
content = content.replace(/rgba\(251,191,36,/g, 'rgba(32,223,137,');
content = content.replace(/#fbbf24/g, '#20df89');

fs.writeFileSync('src/components/slides/Slide8EvidenceHub.tsx', content);
console.log('Done!');
