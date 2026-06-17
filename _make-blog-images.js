const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'images', 'blog');
fs.mkdirSync(dir, { recursive: true });

const posts = [
  { file: 'blog-meta.svg', c1: '#7c3aed', c2: '#1e1b4b', icon: '🛤️', title: 'Meta owns the rails' },
  { file: 'blog-breaking.svg', c1: '#06b6d4', c2: '#164e63', icon: '🏆', title: 'Official AI Partners' },
  { file: 'blog-agentic-intro.svg', c1: '#10b981', c2: '#064e3b', icon: '🤖', title: 'Agentic AI Guide' },
  { file: 'blog-fashion.svg', c1: '#f59e0b', c2: '#78350f', icon: '👗', title: 'Africa Fashion Week' },
  { file: 'blog-agents.svg', c1: '#a78bfa', c2: '#4c1d95', icon: '⚡', title: 'AI Agents for Marketing' },
];

function svg({ c1, c2, icon, title }) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="675" viewBox="0 0 1200 675" role="img" aria-label="${title}">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${c1}"/>
      <stop offset="100%" stop-color="${c2}"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="675" fill="url(#bg)"/>
  <circle cx="1050" cy="120" r="180" fill="rgba(255,255,255,0.08)"/>
  <circle cx="120" cy="580" r="220" fill="rgba(255,255,255,0.06)"/>
  <text x="80" y="280" font-size="120">${icon}</text>
  <text x="80" y="390" fill="#f8fafc" font-family="Plus Jakarta Sans, Arial, sans-serif" font-size="52" font-weight="800">${title}</text>
  <text x="80" y="450" fill="rgba(241,245,249,0.75)" font-family="Plus Jakarta Sans, Arial, sans-serif" font-size="28" font-weight="600">AI Academy for Beginners</text>
</svg>`;
}

for (const post of posts) {
  fs.writeFileSync(path.join(dir, post.file), svg(post));
}

// Remove bad HTML files saved as images
for (const name of fs.readdirSync(dir)) {
  if (name.endsWith('.jpg') || name.endsWith('.mp4')) {
    const p = path.join(dir, name);
    const head = fs.readFileSync(p).slice(0, 20).toString('utf8');
    if (head.startsWith('<!') || head.startsWith('<html')) fs.unlinkSync(p);
  }
}

console.log('Created blog SVG thumbnails in images/blog/');
