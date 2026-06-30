import { expect, test } from "@playwright/test";

const routes = [
  "/",
  "/contact",
  "/projects/multi-agent-business-automation-platform",
  "/projects/footballiq-ai",
  "/projects/insightai-agent",
  "/projects/ai-teacher-robot",
  "/blog/enterprise-rag-architecture",
  "/sitemap.xml",
  "/robots.txt"
];

test.describe("production routes", () => {
  for (const route of routes) {
    test(`${route} responds successfully`, async ({ request }) => {
      const response = await request.get(route);
      expect(response.status(), route).toBeLessThan(400);
    });
  }

  test("resume downloads successfully", async ({ request }) => {
    const response = await request.get("/resume.pdf");
    expect(response.status()).toBe(200);
    expect(response.headers()["content-type"]).toContain("application/pdf");
  });
});

test.describe("homepage SEO, AEO, and navigation", () => {
  test("answers recruiter questions and exposes schemas", async ({ page }) => {
    await page.goto("/");

    await expect(page).toHaveTitle(/Ubaith Sherif.*AI Engineer/i);
    await expect(page.getByRole("heading", { name: /Technical Strengths/i })).toBeVisible();
    await expect(page.getByText("I am Ubaith Sherif, an AI Engineer building production-ready AI agents")).toBeVisible();
    await expect(page.getByText("LangGraph", { exact: true })).toBeVisible();
    await expect(page.getByText("FastAPI", { exact: true })).toBeVisible();
    await expect(page.getByText("Next.js", { exact: true })).toBeVisible();
    await expect(page.getByText("OpenAI", { exact: true })).toBeVisible();
    await expect(page.getByRole("heading", { name: /Quick answers/i })).toBeVisible();

    const schemas = await page.locator('script[type="application/ld+json"]').allTextContents();
    expect(schemas.join("\n")).toContain("ProfilePage");
    expect(schemas.join("\n")).toContain("FAQPage");
    expect(schemas.join("\n")).toContain("WebSite");
  });

  test("skills nav anchor exists and is reachable", async ({ page }) => {
    await page.goto("/#skills");
    await expect(page.locator("#skills")).toBeVisible();
  });

  test("keyboard users can reach skip link and main content", async ({ page, browserName }) => {
    await page.goto("/");
    await page.keyboard.press("Tab");
    if (browserName === "webkit") {
      await page.getByRole("link", { name: /skip to main content/i }).focus();
    }
    await expect(page.getByRole("link", { name: /skip to main content/i })).toBeFocused();
    await page.keyboard.press("Enter");
    await expect(page.locator("#main-content")).toBeVisible();
  });

  test("dark mode toggle changes document theme", async ({ page }) => {
    await page.goto("/");
    const toggle = page.getByRole("button", { name: /toggle color theme/i });
    const wasDark = await page.locator("html").evaluate((node) => node.classList.contains("dark"));
    await toggle.click();
    await expect.poll(() => page.locator("html").evaluate((node) => node.classList.contains("dark"))).toBe(!wasDark);
  });
});

test.describe("project and article machine readability", () => {
  test("project page includes required case study sections and schema", async ({ page }) => {
    await page.goto("/projects/multi-agent-business-automation-platform");

    await expect(page.getByRole("heading", { exact: true, name: "Multi-Agent Business Automation Platform" })).toBeVisible();
    await expect(page.getByText("Problem", { exact: true })).toBeVisible();
    await expect(page.getByText("Solution", { exact: true })).toBeVisible();
    await expect(page.getByText("Tech stack", { exact: true })).toBeVisible();
    await expect(page.getByText("Architecture", { exact: true })).toBeVisible();
    await expect(page.getByText("Project FAQ", { exact: true })).toBeVisible();
    await expect(page.getByText("Related projects", { exact: true })).toBeVisible();

    const schemas = await page.locator('script[type="application/ld+json"]').allTextContents();
    expect(schemas.join("\n")).toContain("SoftwareSourceCode");
    expect(schemas.join("\n")).toContain("BreadcrumbList");
    expect(schemas.join("\n")).toContain("FAQPage");
  });

  test("blog article exposes article schema and readable article structure", async ({ page }) => {
    await page.goto("/blog/enterprise-rag-architecture");
    await expect(page.getByRole("heading", { name: "Enterprise RAG Architecture" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Table of contents" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Key takeaways" })).toBeVisible();

    const schemas = await page.locator('script[type="application/ld+json"]').allTextContents();
    expect(schemas.join("\n")).toContain("Article");
    expect(schemas.join("\n")).toContain("BreadcrumbList");
  });
});

test.describe("responsive layout", () => {
  for (const width of [320, 375, 390, 414, 768, 1024, 1280, 1440, 1920]) {
    test(`homepage has no horizontal overflow at ${width}px`, async ({ page }) => {
      await page.setViewportSize({ width, height: 900 });
      await page.goto("/");
      const metrics = await page.evaluate(() => ({
        clientWidth: document.documentElement.clientWidth,
        scrollWidth: document.documentElement.scrollWidth
      }));
      expect(metrics.scrollWidth).toBeLessThanOrEqual(metrics.clientWidth + 1);
    });
  }
});
