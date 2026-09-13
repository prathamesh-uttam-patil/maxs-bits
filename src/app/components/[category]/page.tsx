import { notFound } from "next/navigation";
import { getComponentsByCategory, getCategories } from "@/lib/registry";
import { ComponentCard } from "@/components/site/component-card";
import { CategoryPageClient } from "./client";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  const categories = getCategories();
  return categories.map((category) => ({ category }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const capitalized = category.charAt(0).toUpperCase() + category.slice(1);
  return {
    title: `${capitalized} Components`,
    description: `Browse all ${capitalized.toLowerCase()} components in Max's Bits.`,
  };
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  const components = getComponentsByCategory(category);

  if (components.length === 0) {
    notFound();
  }

  const capitalized = category.charAt(0).toUpperCase() + category.slice(1);

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-3 capitalize">{capitalized}</h1>
        <p className="text-[var(--muted-foreground)] text-lg">
          {components.length} component{components.length !== 1 ? "s" : ""} available
        </p>
      </div>

      {/* Client component for search + grid */}
      <CategoryPageClient components={components} />
    </div>
  );
}
