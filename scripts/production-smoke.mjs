import assert from "node:assert/strict";

const baseURL = process.env.SMOKE_BASE_URL ?? "http://127.0.0.1:3002";

const routes = [
  "/",
  "/contact",
  "/projects/multi-agent-business-automation-platform",
  "/projects/footballiq-ai",
  "/projects/insightai-agent",
  "/projects/ai-teacher-robot",
  "/blog/building-production-ai-agents",
  "/blog/enterprise-rag-architecture",
  "/sitemap.xml",
  "/robots.txt",
  "/resume.pdf"
];

async function get(path) {
  const response = await fetch(`${baseURL}${path}`);
  const text = await response.text();
  return { response, text };
}

for (const route of routes) {
  const { response } = await get(route);
  assert.ok(response.status < 400, `${route} returned ${response.status}`);
}

const { response: homeResponse, text: home } = await get("/");
const requiredHeaders = [
  "content-security-policy",
  "x-content-type-options",
  "x-frame-options",
  "referrer-policy",
  "permissions-policy"
];

for (const header of requiredHeaders) {
  assert.ok(homeResponse.headers.get(header), `Missing security header: ${header}`);
}

const homepageChecks = [
  "Technical Strengths",
  "I am Ubaith Sherif, an AI Engineer building production-ready AI agents",
  "FAQPage",
  "ProfilePage",
  "WebSite",
  "LangGraph",
  "FastAPI",
  "Next.js",
  "OpenAI",
  "Claude",
  "LangChain"
];

for (const item of homepageChecks) {
  assert.ok(home.includes(item), `Homepage missing: ${item}`);
}

const { text: project } = await get("/projects/multi-agent-business-automation-platform");
for (const item of ["SoftwareSourceCode", "BreadcrumbList", "Project FAQ", "Related projects", "Tech stack"]) {
  assert.ok(project.includes(item), `Project page missing: ${item}`);
}

const { text: blog } = await get("/blog/enterprise-rag-architecture");
for (const item of ["Article", "BreadcrumbList", "Table of contents", "Key takeaways"]) {
  assert.ok(blog.includes(item), `Blog page missing: ${item}`);
}

const { text: sitemap } = await get("/sitemap.xml");
assert.ok(sitemap.includes("/projects/multi-agent-business-automation-platform"), "Sitemap missing project route");
assert.ok(sitemap.includes("/blog/enterprise-rag-architecture"), "Sitemap missing blog route");

const { text: robots } = await get("/robots.txt");
assert.ok(robots.includes("sitemap.xml"), "Robots missing sitemap");

process.stdout.write(`Production smoke checks passed for ${baseURL}\n`);
