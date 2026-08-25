// Matches the shape of form/docs/nav.json and store/docs/nav.json (hand
// extracted from each repo's old .vitepress/config.ts).

import type * as React from "react";

export interface NavLink {
  text: string;
  link: string;
}

export interface SidebarGroup {
  text: string;
  items: NavLink[];
}

export interface NavConfig {
  title: string;
  description: string;
  nav: NavLink[];
  sidebar: Record<string, SidebarGroup[]>;
  socialLinks: { icon: string; link: string }[];
  editLink: { pattern: string; text: string };
}

export interface HeadTag {
  0: string;
  1: Record<string, string>;
}

export interface DocsFrontmatter {
  title?: string;
  description?: string;
  layout?: "home" | false;
  head?: HeadTag[];
}

export interface DocsModule {
  default: React.ComponentType<{
    // Each override can be a different component with a different prop shape.
    // deno-lint-ignore no-explicit-any
    components?: Record<string, React.ComponentType<any>>;
  }>;
  frontmatter?: DocsFrontmatter;
}
