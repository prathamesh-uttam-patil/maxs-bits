import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Package } from "lucide-react";
import {
  getComponent,
  getComponentSource,
  getComponentsByCategory,
  getAllComponents,
} from "@/lib/registry";
import { PreviewPane } from "@/components/preview/preview-pane";
import { CodeViewer } from "@/components/preview/code-viewer";
import { PropsTable } from "@/components/preview/props-table";
import { InstallCommand } from "@/components/preview/install-command";
import { ComponentCard } from "@/components/site/component-card";
import { ComponentDetailClient } from "./client";
import type { Metadata } from "next";

interface Props {
  params: Promise<{ category: string; slug: string }>;
}

export async function generateStaticParams() {
  const allComponents = getAllComponents();
  return allComponents.map((c) => ({
    category: c.category,
    slug: c.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category, slug } = await params;
  const component = getComponent(category, slug);
  if (!component) return { title: "Not Found" };
  return {
    title: component.name,
    description: component.description,
  };
}

export default async function ComponentDetailPage({ params }: Props) {
  const { category, slug } = await params;
  const component = getComponent(category, slug);

  if (!component) {
    notFound();
  }

  const sourceCode = getComponentSource(category, slug);
  const relatedComponents = getComponentsByCategory(category)
    .filter((c) => c.slug !== slug)
    .slice(0, 3);

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      {/* Breadcrumb */}
      <Link
        href={`/components/${category}`}
        className="inline-flex items-center gap-2 text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors mb-8"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to {category.charAt(0).toUpperCase() + category.slice(1)}
      </Link>

      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-3">
          <h1 className="text-3xl md:text-4xl font-bold">{component.name}</h1>
          {component.isNew && (
            <span className="inline-flex items-center rounded-md bg-[var(--primary)]/10 text-[var(--primary)] px-2.5 py-1 text-xs font-semibold">
              NEW
            </span>
          )}
        </div>
        <p className="text-lg text-[var(--muted-foreground)]">
          {component.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-4">
          {component.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-md bg-[var(--secondary)] text-[var(--muted-foreground)] px-2.5 py-1 text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Live Preview */}
      <ComponentDetailClient category={category} slug={slug} />

      {/* Source Code */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Source Code</h2>
        <CodeViewer code={sourceCode} filename={`${slug}/component.tsx`} />
      </div>

      {/* Install Command */}
      <div className="mt-8">
        <InstallCommand slug={slug} />
      </div>

      {/* Dependencies */}
      {component.dependencies.length > 0 && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Dependencies</h2>
          <div className="flex flex-wrap gap-2">
            {component.dependencies.map((dep) => (
              <span
                key={dep}
                className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--border)] bg-[var(--card)] px-3 py-1.5 text-sm"
              >
                <Package className="w-3.5 h-3.5 text-[var(--muted-foreground)]" />
                {dep}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Props Table */}
      {component.props.length > 0 && (
        <div className="mt-8">
          <PropsTable props={component.props} />
        </div>
      )}

      {/* Related Components */}
      {relatedComponents.length > 0 && (
        <div className="mt-16">
          <h2 className="text-xl font-semibold mb-6">More {category.charAt(0).toUpperCase() + category.slice(1)}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedComponents.map((comp) => (
              <ComponentCard key={comp.slug} component={comp} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
