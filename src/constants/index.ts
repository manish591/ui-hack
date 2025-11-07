import {
  Folder,
  File,
  Settings,
  User,
  Shield,
  Bell,
  Lock,
  Cpu,
  Globe,
  LayoutDashboard,
  Cloud,
  Database,
  CreditCard,
  Rocket,
  MessageSquare,
  Activity,
  LineChart,
  Wrench,
  Key,
  type LucideIcon
} from 'lucide-react';


export type DrawerItem = {
  title: string;
  icon: LucideIcon;
  description: string;
  children?: DrawerItem[];
};

export const drawerData: DrawerItem[] = [
  {
    title: "Dashboard",
    icon: LayoutDashboard,
    description: "Overview of your system activity",
    children: [
      {
        title: "Analytics",
        icon: LineChart,
        description: "Traffic, user stats and reports",
      },
      {
        title: "Performance",
        icon: Activity,
        description: "Track CPU and memory usage",
      },
    ],
  },
  {
    title: "Projects",
    icon: Folder,
    description: "Manage all your projects and teams",
    children: [
      {
        title: "Frontend App",
        icon: File,
        description: "React + TypeScript web project",
        children: [
          {
            title: "Components",
            icon: Folder,
            description: "UI building blocks and widgets",
          },
          {
            title: "Hooks",
            icon: Folder,
            description: "Custom React hooks collection",
          },
        ],
      },
      {
        title: "Backend API",
        icon: Cloud,
        description: "Node.js and Express backend service",
        children: [
          {
            title: "Routes",
            icon: File,
            description: "Endpoints and handlers",
          },
          {
            title: "Database",
            icon: Database,
            description: "Schemas, models and migrations",
          },
        ],
      },
    ],
  },
  {
    title: "Integrations",
    icon: Globe,
    description: "Connect third-party services",
    children: [
      {
        title: "Stripe",
        icon: CreditCard,
        description: "Manage billing and payments",
      },
      {
        title: "Slack",
        icon: MessageSquare,
        description: "Connect team communication",
      },
      {
        title: "Vercel",
        icon: Rocket,
        description: "Deployment and hosting settings",
      },
    ],
  },
  {
    title: "Settings",
    icon: Settings,
    description: "Customize your preferences",
    children: [
      {
        title: "Account",
        icon: User,
        description: "Profile and account preferences",
        children: [
          {
            title: "Security",
            icon: Shield,
            description: "Two-factor auth and login devices",
          },
          {
            title: "Privacy",
            icon: Lock,
            description: "Manage data and visibility",
          },
          {
            title: "API Keys",
            icon: Key,
            description: "Create and manage access tokens",
          },
        ],
      },
      {
        title: "Notifications",
        icon: Bell,
        description: "App and email notification preferences",
      },
      {
        title: "Developer Tools",
        icon: Wrench,
        description: "Environment configs and integrations",
      },
    ],
  },
  {
    title: "System",
    icon: Cpu,
    description: "Low-level configurations and performance",
    children: [
      {
        title: "Network",
        icon: Globe,
        description: "Bandwidth, DNS and latency settings",
      },
      {
        title: "Storage",
        icon: Database,
        description: "View and manage disk space",
      },
    ],
  },
];