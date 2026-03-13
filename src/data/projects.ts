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
    description: 'Hang out. (Currently under development)',
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
    description: 'Meme website.',
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
    description: 'Global community map.',
    url: 'https://global-gmonads.vercel.app',
    stack: ['Supabase', 'React', 'TypeScript', 'Vite'],
    featured: false,
    accent: '#00ff88',
    accent2: '#00a8ff',
    category: 'Full Stack · Community',
    year: '2025',
  },
  {
    id: 'the-gallery',
    title: 'The Gallery',
    description: 'Pull NFT data from Monad testnet.',
    url: 'https://nft-display-psi.vercel.app',
    stack: ['React', 'Alchemy API', 'Vite', 'CSS'],
    featured: false,
    accent: '#f5a623',
    accent2: '#d63af9',
    category: 'Full Stack · Web3',
    year: '2025',
  },
];

export const skills = [
  { name: 'React', level: 95 },
  { name: 'TypeScript', level: 100 },
  { name: 'JavaScript', level: 90 },
  { name: 'AI-Assisted Development', level: 100 },
  { name: 'Node.js', level: 80 },
  { name: 'Firebase', level: 85 },
  { name: 'Supabase', level: 82 },
  { name: 'REST APIs', level: 90 },
  { name: 'Git', level: 100 },
  { name: 'API Integration', level: 90 },
  { name: 'UI Design', level: 100 },
  { name: 'User Experience', level: 100 },
  { name: 'TailwindCSS', level: 92 },
  { name: 'Technical Documentation', level: 88 },
  { name: 'Python', level: 94 },
];
