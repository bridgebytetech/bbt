'use client';

import {
  SiReact,
  SiNodedotjs,
  SiPython,
  SiDocker,
  SiGraphql,
  SiTypescript,
  SiMongodb,
  SiRedis,
  SiKubernetes,
  SiTensorflow,
  SiPostgresql,
  SiNextdotjs,
  SiTailwindcss,
  SiGit,
  SiGithub,
  SiVercel,
  SiFirebase,
  SiSupabase,
  SiPrisma,
  SiNginx,
  SiJenkins,
  SiTerraform,
  SiPrometheus,
  SiGrafana,
  SiFlutter,
  SiSwift,
  SiKotlin,
  SiAndroid,
  SiApple,
  SiAngular,
  SiDjango,
  SiFlask,
  SiFastapi,
  SiSpringboot,
  SiExpress,
  SiNestjs,
  SiMysql,
  SiSqlite,
  SiRust,
  SiGo,
  SiDart,
  SiPhp,
  SiLaravel,
  SiWordpress,
  SiStripe,
  SiAuth0,
  SiDatadog,
  SiSentry,
  SiJira,
  SiSlack,
  SiDiscord,
  SiFigma,
  SiNetlify,
  SiCloudflare,
  SiDigitalocean,
  SiHeroku,
  SiOpenai,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiSass,
  SiBootstrap,
  SiLinux,
  SiUbuntu,
  SiNumpy,
  SiPandas,
  SiJupyter,
  SiVite,
  SiWebpack,
  SiYarn,
  SiPnpm,
  SiNpm,
  SiGitlab,
} from 'react-icons/si';

import {
  Code2,
  Database,
  Cloud,
  Shield,
  Server,
  Globe,
  Cpu,
  HardDrive,
  Activity,
  Lock,
  Terminal,
  GitBranch,
  Braces,
  Layers,
  Package,
  Zap,
  Box,
  CircuitBoard,
  Binary,
  CloudCog,
  ShieldCheck,
  MonitorSmartphone,
  Workflow,
  Network,
} from 'lucide-react';

// AWS icon component (custom)
const AwsIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M7.64 10.38c0 .177.014.324.04.438a2.647 2.647 0 00.12.388.224.224 0 01.03.103.163.163 0 01-.073.132l-.243.161a.183.183 0 01-.103.035.168.168 0 01-.132-.066 1.34 1.34 0 01-.157-.204 4.262 4.262 0 01-.132-.249 2.046 2.046 0 01-1.57.62 1.452 1.452 0 01-1.058-.381 1.376 1.376 0 01-.388-1.043c0-.462.165-.837.493-1.12.33-.284.768-.426 1.318-.426.183 0 .371.014.567.038.196.025.398.062.61.105v-.35c0-.364-.076-.619-.226-.764-.151-.145-.408-.218-.77-.218-.183 0-.371.022-.563.066a3.876 3.876 0 00-.563.17.934.934 0 01-.183.066.16.16 0 01-.073.014c-.132 0-.196-.095-.196-.286v-.454c0-.143.018-.249.055-.314.036-.066.103-.132.204-.196.183-.11.402-.204.657-.28.255-.08.528-.118.818-.118.624 0 1.08.141 1.37.424.286.283.432.712.432 1.29v1.697h.002zm-2.175.814c.171 0 .35-.03.537-.092a1.16 1.16 0 00.489-.332.765.765 0 00.183-.31c.033-.103.051-.228.051-.376v-.218a4.174 4.174 0 00-.433-.077 3.515 3.515 0 00-.444-.03c-.314 0-.545.062-.697.19a.637.637 0 00-.226.507c0 .204.055.357.17.462.11.107.272.157.488.157l.001.119zm3.353.563a.248.248 0 01-.161-.044.412.412 0 01-.103-.175L6.83 6.495a.914.914 0 01-.044-.175.157.157 0 01.03-.117.165.165 0 01.131-.066h.718c.066 0 .117.014.151.044.037.03.066.088.088.175l1.235 4.865 1.148-4.865c.022-.088.047-.145.08-.175a.244.244 0 01.161-.044h.586c.066 0 .117.014.154.044.036.03.066.088.084.175l1.161 4.93 1.273-4.93c.022-.088.051-.145.088-.175a.236.236 0 01.15-.044h.682c.055 0 .103.022.132.066a.157.157 0 01.03.117c0 .022 0 .047-.007.08a.616.616 0 01-.037.095l-1.78 5.031c-.022.088-.051.145-.103.175a.248.248 0 01-.161.044h-.631c-.066 0-.114-.014-.15-.044-.037-.033-.066-.088-.085-.175l-1.143-4.754-1.14 4.746c-.018.088-.047.145-.084.175a.244.244 0 01-.15.044h-.632l.001.007zM16.4 11.932c-.388 0-.777-.047-1.158-.14a2.698 2.698 0 01-.902-.38c-.132-.084-.223-.175-.264-.264a.668.668 0 01-.059-.271v-.472c0-.19.07-.286.205-.286a.18.18 0 01.095.014c.03.011.073.033.125.055.171.073.357.135.557.183.204.048.404.07.604.07.32 0 .567-.055.74-.17a.55.55 0 00.264-.484.492.492 0 00-.135-.354c-.092-.095-.26-.183-.507-.26l-.73-.226c-.367-.114-.638-.283-.807-.507a1.255 1.255 0 01-.255-.792c0-.231.051-.433.15-.61.103-.175.238-.327.408-.45.17-.125.367-.218.593-.28.227-.062.468-.092.72-.092.124 0 .255.007.383.022.132.014.255.036.376.062.114.022.223.051.325.08.103.03.183.059.243.085a.894.894 0 01.204.117.374.374 0 01.117.145c.022.055.036.124.036.21v.438c0 .19-.07.283-.204.283a.502.502 0 01-.257-.084 2.157 2.157 0 00-.858-.16c-.29 0-.52.044-.682.14a.455.455 0 00-.249.42c0 .143.051.264.151.36.103.095.29.19.563.279l.718.223c.361.114.622.272.777.476.154.204.231.438.231.704 0 .235-.047.45-.143.635a1.374 1.374 0 01-.402.48 1.875 1.875 0 01-.604.301 2.73 2.73 0 01-.763.103l.007.002z"/>
    <path d="M5.925 16.384c-1.708 1.26-4.186 1.93-6.318 1.93-2.987 0-5.678-.955-7.714-2.543-.16-.125-.018-.295.175-.196 2.198 1.106 4.914 1.773 7.719 1.773 1.892 0 3.97-.34 5.883-1.043.29-.107.531.164.255.407v-.328zm.71-.647c-.218-.199-1.442-.096-1.993-.048-.168.015-.194-.11-.044-.202.976-.594 2.576-.423 2.763-.223.187.202-.051 1.596-.966 2.262-.14.103-.275.048-.212-.087.206-.445.67-1.444.451-1.643v-.059z"/>
  </svg>
);

// Google Cloud icon component (custom)
const GcpIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.19 2.38a9.344 9.344 0 0 0-9.234 6.893c.053-.02.12-.053.174-.053h3.16c.24 0 .307.133.307.133l.76-2.68s.133-.426.506-.426H11c1.093 0 2.16.413 2.893 1.173l2.16-2.16A9.31 9.31 0 0 0 12.19 2.38z"/>
    <path d="M5.636 10.78H2.478c-.24 0-.427.2-.427.453v4.053c0 .24.187.44.427.44H4.77l1.68-3.04-.813-1.906z"/>
    <path d="M12.19 7.62H8.047s-.32 0-.506.413l-2 3.573 2 3.573c.186.413.506.413.506.413h4.16c.64 0 1.213-.32 1.56-.827l-1.693-1.693a1.93 1.93 0 0 1-.573.093H10.24v-2.88h1.267c.213 0 .413.04.573.093l1.693-1.693c-.347-.52-.92-.84-1.56-.84l-.026-.226z"/>
    <path d="M21.533 9.78h-4.64l.813 1.906h2.36v2.36l1.907.84V10.24c0-.253-.2-.453-.44-.453z"/>
    <path d="M19.76 16.453l-2.667-2.667a3.32 3.32 0 0 0 .093-.786v-.307H14.32l2.693-2.68c.213.28.333.64.333 1v1.28h2.413c.253 0 .453.2.453.453v3.253c0 .253-.2.453-.453.453z"/>
    <path d="M12 21.64a9.28 9.28 0 0 0 7.76-4.187l-2.64-2.64c-.733.76-1.773 1.267-2.88 1.267H11l-3.013.013s-.36 0-.533-.413l-.76-1.36h-.933l-1.6 2.773A9.27 9.27 0 0 0 12 21.64z"/>
  </svg>
);

// Azure icon component (custom)
const AzureIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M5.483 12.94L10.43 1.917a.551.551 0 0 1 .524-.385c.285.007.523.211.567.491l2.895 11.736 3.514-7.76a.555.555 0 0 1 .524-.366h5.324L13.98 22.08c-.082.002-4.016.002-4.064 0L2.223 12.94h3.261zm1.58-.385H1.701l6.326 6.675 13.547.001-2.531-4.392L8.37 12.28l-1.306.275z"/>
  </svg>
);

// CircleCI icon component (custom)
const CircleCiIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <circle cx="12" cy="12" r="2.5" fill="currentColor"/>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c1.19 0 2.34-.21 3.41-.6.3-.11.49-.4.49-.72 0-.43-.35-.78-.78-.78-.17 0-.33.06-.46.11-.86.33-1.75.5-2.66.5-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8c0 .91-.17 1.8-.5 2.66-.05.13-.11.29-.11.46 0 .43.35.78.78.78.32 0 .61-.19.72-.49.39-1.07.6-2.22.6-3.41 0-5.52-4.48-10-10-10z"/>
  </svg>
);

// PyTorch icon component (custom)
const PyTorchIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12.005 0L4.952 7.053a9.865 9.865 0 000 13.947 9.866 9.866 0 0013.947 0 9.865 9.865 0 000-13.947L12.005 0zm6.543 7.66s1.65 1.66 1.65 4.38a6.095 6.095 0 01-6.09 6.08 6.095 6.095 0 01-6.09-6.08 6.095 6.095 0 016.09-6.08c1.149 0 2.218.318 3.135.87l-4.986 4.987 1.361 1.36 5.56-5.56-.63.04z"/>
    <circle cx="10" cy="10" r="1.5" fill="currentColor"/>
  </svg>
);

export const techIcons: Record<string, any> = {
  // Frontend
  'React': SiReact,
  'Next.js': SiNextdotjs,
  'TypeScript': SiTypescript,
  'JavaScript': SiJavascript,
  'Vue.js': Braces, // Using Braces as fallback
  'Angular': SiAngular,
  'Tailwind CSS': SiTailwindcss,
  'HTML5': SiHtml5,
  'CSS3': SiCss3,
  'Sass': SiSass,
  'Bootstrap': SiBootstrap,
  'Vite': SiVite,
  'Webpack': SiWebpack,
  
  // Backend
  'Node.js': SiNodedotjs,
  'Python': SiPython,
  'Go': SiGo,
  'Rust': SiRust,
  'Django': SiDjango,
  'Flask': SiFlask,
  'FastAPI': SiFastapi,
  'Spring Boot': SiSpringboot,
  'Express': SiExpress,
  'NestJS': SiNestjs,
  'PHP': SiPhp,
  'Laravel': SiLaravel,
  
  // Database
  'MongoDB': SiMongodb,
  'PostgreSQL': SiPostgresql,
  'Redis': SiRedis,
  'MySQL': SiMysql,
  'SQLite': SiSqlite,
  'Oracle': Database, // Using Lucide icon
  'Elasticsearch': Database, // Using Lucide icon
  'Apache Kafka': Network, // Using Lucide icon
  
  // Cloud & DevOps
  'AWS': AwsIcon, // Custom icon
  'Google Cloud': GcpIcon, // Custom icon
  'Azure': AzureIcon, // Custom icon
  'Docker': SiDocker,
  'Kubernetes': SiKubernetes,
  'Terraform': SiTerraform,
  'Jenkins': SiJenkins,
  'GitHub Actions': Workflow, // Using Lucide icon
  'CircleCI': CircleCiIcon, // Custom icon
  'Nginx': SiNginx,
  'Vercel': SiVercel,
  'Netlify': SiNetlify,
  'Cloudflare': SiCloudflare,
  'DigitalOcean': SiDigitalocean,
  'Heroku': SiHeroku,
  
  // Monitoring
  'Prometheus': SiPrometheus,
  'Grafana': SiGrafana,
  'Datadog': SiDatadog,
  'Sentry': SiSentry,
  
  // AI/ML
  'TensorFlow': SiTensorflow,
  'PyTorch': PyTorchIcon, // Custom icon
  'OpenAI': SiOpenai,
  'NumPy': SiNumpy,
  'Pandas': SiPandas,
  'Scikit-learn': Binary, // Using Lucide icon
  'Jupyter': SiJupyter,
  
  // Mobile
  'Flutter': SiFlutter,
  'React Native': SiReact,
  'Swift': SiSwift,
  'Kotlin': SiKotlin,
  'Android': SiAndroid,
  'iOS': SiApple,
  'Dart': SiDart,
  
  // Tools & Services
  'GraphQL': SiGraphql,
  'Git': SiGit,
  'GitHub': SiGithub,
  'GitLab': SiGitlab,
  'VS Code': Code2, // Using Lucide icon
  'Figma': SiFigma,
  'Firebase': SiFirebase,
  'Supabase': SiSupabase,
  'Prisma': SiPrisma,
  'WordPress': SiWordpress,
  
  // Payment & Auth
  'Stripe': SiStripe,
  'Auth0': SiAuth0,
  'OAuth': Lock,
  'JWT': ShieldCheck,
  'Encryption': Shield,
  
  // Communication
  'Slack': SiSlack,
  'Discord': SiDiscord,
  'Jira': SiJira,
  
  // Package Managers
  'npm': SiNpm,
  'Yarn': SiYarn,
  'pnpm': SiPnpm,
  
  // OS
  'Linux': SiLinux,
  'Ubuntu': SiUbuntu,
  
  // Default icons
  'Backend': Server,
  'Database': Database,
  'Cloud': Cloud,
  'Security': Shield,
  'API': Globe,
  'DevOps': GitBranch,
  'Monitoring': Activity,
  'Terminal': Terminal,
  'Code': Code2,
  'CPU': Cpu,
  'Storage': HardDrive,
  'Mobile': MonitorSmartphone,
  'Package': Package,
  'Performance': Zap,
  'Container': Box,
  'Infrastructure': CloudCog,
  'Microservices': CircuitBoard,
};

interface TechIconProps {
  name: string;
  className?: string;
}

export function TechIcon({ name, className }: TechIconProps) {
  const Icon = techIcons[name] || Code2; // Default fallback
  return <Icon className={className} />;
}