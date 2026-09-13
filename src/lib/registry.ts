import fs from "fs";
import path from "path";

export interface PropDef {
  name: string;
  type: string;
  required: boolean;
  default?: string;
  description: string;
}

export interface ComponentMeta {
  name: string;
  slug: string;
  description: string;
  category: string;
  tags: string[];
  isNew: boolean;
  author: string;
  createdAt: string;
  dependencies: string[];
  props: PropDef[];
}

function getRegistryPath(): string {
  return path.join(process.cwd(), "src", "registry");
}

export function getAllComponents(): ComponentMeta[] {
  const registryPath = getRegistryPath();
  const components: ComponentMeta[] = [];

  if (!fs.existsSync(registryPath)) return components;

  const categories = fs.readdirSync(registryPath).filter((item) => {
    const fullPath = path.join(registryPath, item);
    return fs.statSync(fullPath).isDirectory();
  });

  for (const category of categories) {
    const categoryPath = path.join(registryPath, category);
    const componentDirs = fs.readdirSync(categoryPath).filter((item) => {
      const fullPath = path.join(categoryPath, item);
      return fs.statSync(fullPath).isDirectory();
    });

    for (const componentDir of componentDirs) {
      const metaPath = path.join(categoryPath, componentDir, "meta.json");
      if (fs.existsSync(metaPath)) {
        try {
          const metaContent = fs.readFileSync(metaPath, "utf-8");
          const meta = JSON.parse(metaContent) as ComponentMeta;
          components.push(meta);
        } catch (e) {
          console.warn(`Failed to parse meta.json for ${componentDir}:`, e);
        }
      }
    }
  }

  return components.sort((a, b) => a.name.localeCompare(b.name));
}

export function getCategories(): string[] {
  const components = getAllComponents();
  const categories = [...new Set(components.map((c) => c.category))];
  return categories.sort();
}

export function getComponentsByCategory(category: string): ComponentMeta[] {
  return getAllComponents().filter((c) => c.category === category);
}

export function getComponent(
  category: string,
  slug: string
): ComponentMeta | undefined {
  return getAllComponents().find(
    (c) => c.category === category && c.slug === slug
  );
}

export function searchComponents(query: string): ComponentMeta[] {
  const lowerQuery = query.toLowerCase();
  return getAllComponents().filter(
    (c) =>
      c.name.toLowerCase().includes(lowerQuery) ||
      c.description.toLowerCase().includes(lowerQuery) ||
      c.tags.some((t) => t.toLowerCase().includes(lowerQuery))
  );
}

export function getComponentSource(
  category: string,
  slug: string
): string {
  const registryPath = getRegistryPath();
  const componentPath = path.join(
    registryPath,
    category,
    slug,
    "component.tsx"
  );

  if (!fs.existsSync(componentPath)) {
    return "// Source code not found";
  }

  return fs.readFileSync(componentPath, "utf-8");
}
