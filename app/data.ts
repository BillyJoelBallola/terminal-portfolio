export const WELCOME_MESSAGE = `
██████╗ ██╗██╗     ██╗  ██╗   ██╗
██╔══██╗██║██║     ██║  ╚██╗ ██╔╝
██████╔╝██║██║     ██║   ╚████╔╝
██╔══██╗██║██║     ██║    ╚██╔╝
██████╔╝██║███████╗███████╗██║
╚═════╝ ╚═╝╚══════╝╚══════╝╚═╝

Welcome to Billy's Portfolio OS v1.0.0 (Stable)
System status: ONLINE
Type "help" to see available commands.
`;

export const commands = [
  "help",
  "clear",
  "about",
  "projects",
  "skills",
  "contact",
  "neofetch",
];

export const outputs = {
  neofetch: `
   /|_/|        billyjoel@portfolio-cli
  ( o.o )       ───────────────────────
   > ^ <        OS: PortfolioOS v1.0.0
  /     |       Kernel: x86_64 Next.js
 |       |      Uptime: Just booted up
 /███████/      Shell: portfolio-sh
                Role: Front-end Developer
                Location: Laguna, Philippines
                Stack: Next.js · TypeScript · Prisma
`,
  help: `
🤖 Supported Commands:
────────────────────────────────────────────────────────────
  about       →  Get to know who Billy is
  projects    →  View featured full-stack applications
  skills      →  Check out my technical stack & tools
  contact     →  Find out how to get in touch
  neofetch    →  Display system specs and configuration
  clear       →  Flush the terminal screen buffer

[Tip] Use ↑ / ↓ keys for history. Tab completion coming soon.
`,
  about: `
👤 ABOUT ME
────────────────────────────────────────────────────────────
Name        │ Billy Joel P. Ballola
Location    │ Magdalena, Laguna, Philippines
Education   │ BS Information Technology
            │ Laguna State Polytechnic University (2024)
Cert        │ TESDA Computer Systems Servicing NC II

Summary ───
IT graduate passionate about building modern web applications 
with a strong focus on clean UI, scalable architecture, and 
great user experience.

Background ───
Previously worked as a Trust & Safety Associate at Accenture, 
where I developed strong analytical and problem-solving skills 
before transitioning into full-stack web development.
`,
  projects: `
📂 FEATURED PROJECTS
────────────────────────────────────────────────────────────
⚡ 01. TRAKR ───
  Description │ Expense & Income Tracker
  Features    │ Wallet management • Analytics dashboard • Live updates
  Stack       │ Next.js · Prisma · PostgreSQL · TailwindCSS

⚡ 02. INVIO ───
  Description │ Invoice Generator SaaS
  Features    │ PDF generation • Email delivery • Revenue analytics
  Stack       │ Next.js · Prisma · Resend · TailwindCSS

⚡ 03. RESUMIQ ───
  Description │ AI Resume Reviewer
  Features    │ Resume scoring • ATS keyword analysis • AI insights
  Stack       │ Next.js · Gemini AI · Prisma

⚡ 04. TRAKBORD ───
  Description │ Real-time Project Management
  Features    │ Kanban boards • Team collaboration • Drag & Drop
  Stack       │ Next.js · Prisma · Pusher · dnd-kit

[Link] Explore more projects at: https://github.com/BillyJoelBallola
`,
  skills: `
🛠️ TECH STACK
────────────────────────────────────────────────────────────
[Languages]       TypeScript, JavaScript, PHP, HTML, CSS
[Frontend]        Next.js, React.js, TailwindCSS, shadcn/ui
[Backend]         Node.js, Prisma ORM, REST APIs, JWT, Bcrypt
[Databases]       PostgreSQL, MySql, Neon (Serverless)
[Learning]        Docker, AWS Cloud Practitioner
`,
  contact: `
📬 CONTACT & AVAILABILITY
────────────────────────────────────────────────────────────
📧 Email          │ billyjoelballola27@gmail.com
🐙 GitHub         | github.com/BillyJoelBallola
🌐 Portfolio      │ billyjoel.vercel.app
📱 Phone          │ +63 955-670-8336

AVAILABILITY STATUS ────────────────────────────────────
[✔] Open to full-time engineering opportunities
[✔] Available for freelance / contract systems
[✔] Open-source collaborations welcome

Thanks for stopping by! 
`,
};
