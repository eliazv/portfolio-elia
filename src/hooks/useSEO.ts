import { useEffect } from "react";

type StructuredData = Record<string, unknown> | Record<string, unknown>[];

type SEOConfig = {
  title?: string;
  description?: string;
  keywords?: string[];
  canonicalUrl?: string;
  og?: Record<string, string>;
  twitter?: Record<string, string>;
  structuredData?: StructuredData;
};

const ensureTag = (
  selector: string,
  create: () => HTMLElement,
): HTMLElement | null => {
  if (typeof document === "undefined") {
    return null;
  }

  const existing = document.head.querySelector(selector);
  if (existing) {
    return existing as HTMLElement;
  }

  const element = create();
  document.head.appendChild(element);
  return element;
};

const setTagAttribute = (
  selector: string,
  attribute: string,
  value?: string,
  create?: () => HTMLElement,
) => {
  if (typeof document === "undefined") {
    return;
  }

  let element = document.head.querySelector(selector) as HTMLElement | null;

  if (!element && create) {
    element = ensureTag(selector, create);
  }

  if (!element) {
    return;
  }

  if (value === undefined || value === "") {
    element.parentElement?.removeChild(element);
    return;
  }

  element.setAttribute(attribute, value);
};

const createMetaTag = (name: string, prop: "name" | "property" = "name") => {
  const meta = document.createElement("meta");
  meta.setAttribute(prop, name);
  return meta;
};

export const useSEO = ({
  title,
  description,
  keywords,
  canonicalUrl,
  og,
  twitter,
  structuredData,
}: SEOConfig) => {
  useEffect(() => {
    if (typeof document === "undefined") {
      return;
    }

    if (title) {
      document.title = title;
    }

    if (description) {
      setTagAttribute(
        'meta[name="description"]',
        "content",
        description,
        () => createMetaTag("description"),
      );
    }

    if (keywords && keywords.length > 0) {
      setTagAttribute(
        'meta[name="keywords"]',
        "content",
        keywords.join(", "),
        () => createMetaTag("keywords"),
      );
    }

    if (canonicalUrl) {
      setTagAttribute(
        'link[rel="canonical"]',
        "href",
        canonicalUrl,
        () => {
          const link = document.createElement("link");
          link.setAttribute("rel", "canonical");
          return link;
        },
      );
    }

    if (og) {
      Object.entries(og).forEach(([key, value]) => {
        const property = key.startsWith("og:") ? key : `og:${key}`;
        setTagAttribute(
          `meta[property="${property}"]`,
          "content",
          value,
          () => createMetaTag(property, "property"),
        );
      });
    }

    if (twitter) {
      Object.entries(twitter).forEach(([key, value]) => {
        const name = key.startsWith("twitter:")
          ? key
          : `twitter:${key}`;
        setTagAttribute(
          `meta[name="${name}"]`,
          "content",
          value,
          () => createMetaTag(name),
        );
      });
    }

    const existingScript = document.getElementById("seo-structured-data");

    if (!structuredData) {
      existingScript?.parentElement?.removeChild(existingScript);
      return;
    }

    const script =
      (existingScript as HTMLScriptElement | null) ??
      (() => {
        const created = document.createElement("script");
        created.type = "application/ld+json";
        created.id = "seo-structured-data";
        document.head.appendChild(created);
        return created;
      })();

    script.textContent = JSON.stringify(structuredData, null, 2);
  }, [
    canonicalUrl,
    description,
    keywords,
    og,
    structuredData,
    title,
    twitter,
  ]);
};

export default useSEO;
