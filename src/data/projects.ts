export interface Project {
  id: string;
  title: string;
  description: string;
  url: string;
  stack: string[];
  featured?: boolean;
  accent: string;
  accent2: string;
  category: string;
  year: string;
}

export const projects: Project[] = [
  {
    id: 'collabroom',
    title: 'CollabRoom',
    description: 'A real-time collaborative room where users can draw, play games, watch YouTube, leave notes, and interact together on a shared canvas. Built for genuine human connection through shared digital spaces. (Currently under development)',
    url: 'https://collabroom-psi.vercel.app',
    stack: ['React', 'JavaScript', 'Firebase', 'React Markdown'],
    featured: true,
    accent: '#00f5ff',
    accent2: '#7b2fff',
    category: 'Full Stack · Real-Time',
    year: '2026',
  },
  {
    id: 'bogged',
    title: 'Bogged',
    description: 'A sleek interactive meme site with heavy UI animation and modern design. A showcase of motion design, creative UI engineering, and interactive frontend development.',
    url: 'https://www.bogged.world',
    stack: ['Vite', 'React', 'TypeScript', 'Tailwind', 'Reactbits'],
    featured: false,
    accent: '#ff2d78',
    accent2: '#ff8c00',
    category: 'Frontend · Animation',
    year: '2025',
  },
  {
    id: 'global-gmonads',
    title: 'Global Gmonads',
    description: 'A global community map that lets users place location pins while maintaining optional anonymity. Connecting communities across the world with privacy-first architecture.',
    url: 'https://global-gmonads.vercel.app',
    stack: ['Supabase', 'React', 'TypeScript', 'Vite'],
    featured: false,
    accent: '#00ff88',
    accent2: '#00a8ff',
    category: 'Full Stack · Community',
    year: '2025',
  },
  {
    id: 'nft-display',
    title: 'NFT Display',
    description: 'A dashboard that pulls NFTs from a wallet address and lets users crop images and build custom collages. Bridging blockchain data with a clean, visual interface.',
    url: 'https://nft-display-psi.vercel.app',
    stack: ['React', 'Alchemy API', 'Vite', 'CSS'],
    featured: false,
    accent: '#f5a623',
    accent2: '#d63af9',
    category: 'Frontend · Web3',
    year: '2025',
  },
];

export const skills = [
  { name: 'React', level: 95 },
  { name: 'TypeScript', level: 100 },
  { name: 'JavaScript', level: 90 },
  { name: 'Ai Utilization', level: 100 },
  { name: 'Node.js', level: 80 },
  { name: 'Firebase', level: 85 },
  { name: 'Supabase', level: 82 },
  { name: 'REST APIs', level: 90 },
  { name: 'Git', level: 100 },
  { name: 'API Integration', level: 90 },
  { name: 'UI Design', level: 100 },
  { name: 'User Experience', level: 100 },
  { name: 'TailwindCSS', level: 92 },
  { name: 'Technical Docs', level: 88 },
  { name: 'Python', level: 94 },
];
