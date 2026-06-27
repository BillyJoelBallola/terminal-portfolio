export const WELCOME_MESSAGE = `██████╗ ██╗██╗     ██╗  ██╗   ██╗
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
  "about",
  "projects",
  "skills",
  "contact",
  "help",
  "clear",
  "neofetch",
];

export const outputs = {
  neofetch: `   /|_/|        billyjoel@portfolio-cli
  ( o.o )       ───────────────────────
   > ^ <        OS: PortfolioOS v1.0.0
  /     |       Kernel: x86_64 Next.js
 |       |      Uptime: Just booted up
 /███████/      Shell: portfolio-sh
                Role: Front-end Developer
                Location: Laguna, Philippines
                Stack: Next.js · TypeScript · Prisma
`,
  help: ` 🤖 Supported Commands:
────────────────────────────────────────────────────────────
  about       →  Get to know who Billy is
  projects    →  View featured projects
  skills      →  Check out his technical stack & tools
  contact     →  Find out how to get in touch
  resume      →  Download his resume
  neofetch    →  Display system specs and configuration
  clear       →  Flush the terminal screen buffer

[Tip] Use ↑ / ↓ keys for history. Tab completion coming soon.
`,
  about: ` 👤 ABOUT ME
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
  projects: ` 📂 FEATURED PROJECTS
────────────────────────────────────────────────────────────
01. trakr
02. invio
03. resumiq
04. trakbord

Type:             Example:
project <name>    project trakr

[Link] Explore more projects at: https://github.com/BillyJoelBallola
`,
  skills: ` 🛠️ TECH STACK
────────────────────────────────────────────────────────────
[Languages]     TypeScript, JavaScript, PHP, HTML, CSS
[Frontend]      Next.js, React.js, TailwindCSS, shadcn/ui
[Backend]       Node.js, Prisma ORM, REST APIs, JWT, Bcrypt
[Databases]     PostgreSQL, MySql, Neon (Serverless)
[Learning]      Docker, Laravel
`,
  contact: ` 📬 CONTACT & AVAILABILITY
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

export const projects = {
  trakr: `⚡ TRAKR ───────────────────────────

Description
  Trakr is a full-stack Progressive Web Application (PWA) designed 
  to help users efficiently monitor and manage their daily expenses.

Features
  ✓ Wallet management
  ✓ Income & expense tracking
  ✓ Analytics dashboard
  ✓ Category management
  ✓ Responsive UI
  ✓ Authentication

Tech Stack
  Frontend   │ Next.js, Tailwind CSS
  Backend    │ Prisma ORM
  Database   │ PostgreSQL
`,
  invio: `⚡ INVIO ───────────────────────────

Description
  A full-stack invoice management SaaS that lets freelancers create, 
  manage, and send professional invoices to clients.

Features 
  ✓ PDF generation
  ✓ Email delivery
  ✓ Client management
  ✓ Status tracking
  ✓ Revenue dashboard
  ✓ Public invoice link
  ✓ Authentication

Tech Stack
  Frontend   │ Next.js, Tailwind CSS, ShadCN
  Backend    │ Prisma ORM
  Database   │ PostgreSQL
`,
  resumiq: `⚡ RESUMIQ ───────────────────────────

Description
  An AI-powered resume reviewer that analyzes your resume and provides
  instant, structured feedback to help you land more interviews.

Features
  ✓ PDF resume upload
  ✓ AI-powered analysis (Google Gemini)
  ✓ Overall score (0-100)
  ✓ Section-by-section feedback
  ✓ Job description matcher
  ✓ Missing keywords detection
  ✓ Strengths & weaknesses breakdown
  ✓ Authentication

Tech Stack
  Frontend   │ Next.js, Tailwind CSS, ShadCN
  Backend    │ Prisma ORM, Google Gemini AI
  Database   │ PostgreSQL
  Security   │ API rate limiting, Zod validation
`,
  trakbord: `⚡ TRAKBORD ───────────────────────────

Description
  A real-time project management tool built for teams. Organize work
  across workspaces, projects, and kanban boards with live updates.

Features
  ✓ Real-time drag & drop kanban board
  ✓ List view with accordion layout
  ✓ Workspace & project management
  ✓ Role-based access control (Owner, Admin, Member, Viewer)
  ✓ Task detail modal with comments
  ✓ Member invitation system
  ✓ Authentication

Tech Stack
  Frontend   │ Next.js, Tailwind CSS, ShadCN, dnd-kit
  Backend    │ Prisma ORM, Pusher WebSockets
  Database   │ PostgreSQL
  Security   │ API rate limiting, Zod validation
`,
};
