from pathlib import Path
from textwrap import wrap


OUTPUT = Path("public/resume.pdf")
WIDTH = 595
HEIGHT = 842
LEFT = 46
TOP = 794
LINE = 14


def esc(text):
    return text.replace("\\", "\\\\").replace("(", "\\(").replace(")", "\\)")


def text_line(x, y, text, size=10, font="F1", color="0.15 0.15 0.17"):
    return f"BT /{font} {size} Tf {color} rg {x} {y} Td ({esc(text)}) Tj ET"


def wrapped(lines, x, y, text, width=93, size=9, leading=13, prefix=""):
    for index, part in enumerate(wrap(text, width=width)):
        lines.append(text_line(x, y, f"{prefix if index == 0 else '  '}{part}", size=size))
        y -= leading
    return y


def build_content():
    lines = []
    y = TOP
    lines.append(text_line(LEFT, y, "Ubaith Sherif", 25, "F2", "0.04 0.04 0.05"))
    y -= 22
    lines.append(text_line(LEFT, y, "AI Engineer | Generative AI Engineer | LLM Engineer | AI Agent Engineer", 10.5, "F2", "0.10 0.32 0.82"))
    y -= 16
    lines.append(text_line(LEFT, y, "Coimbatore, India | ubaithsherif22@gmail.com | +91 6385946906", 8.6, "F1", "0.32 0.32 0.36"))
    y -= 12
    lines.append(text_line(LEFT, y, "github.com/Ubaith444 | linkedin.com/in/ubaith-sherif-4235a5256", 8.6, "F1", "0.32 0.32 0.36"))
    y -= 26

    sections = [
        (
            "Professional Summary",
            [
                "AI engineer focused on agents, LLM applications, RAG systems, workflow automation, and full-stack product delivery. Builds with production constraints in mind: API contracts, authentication, RBAC, audit logs, human approval loops, webhook security, dashboards, and deployment readiness."
            ],
        ),
        (
            "Selected AI Systems",
            [
                "Multi-Agent Business Automation Platform: LangGraph and FastAPI platform pattern for agent workflows, approvals, audit timelines, RBAC, webhook security, PostgreSQL, Redis, and communication integrations.",
                "FootballIQ AI: real-time football intelligence platform concept covering live analytics, AI predictions, player intelligence, transfer analysis, match reports, LLM summaries, and dashboards.",
                "InsightAI Agent: natural language analytics workflow for schema-aware questions, governed SQL generation, explainable charts, and shareable insight reports.",
                "Production AI Systems Lab: practical implementation work around RAG, agents, tool calling, evaluation, FastAPI service patterns, and Next.js AI product interfaces.",
            ],
        ),
        (
            "Production Engineering Signals",
            [
                "Designs agent systems with explicit state, approval gates, retry paths, and traceable execution logs.",
                "Builds full-stack AI products with Next.js, TypeScript, FastAPI, PostgreSQL, Redis, Docker, and GitHub Actions.",
                "Keeps AI claims grounded with provenance, visible uncertainty, and reviewable model outputs.",
                "Prioritizes recruiter-visible proof: architecture, product UX, security boundaries, performance, SEO, and accessibility.",
            ],
        ),
        (
            "Technical Stack",
            [
                "AI: OpenAI, Claude, Gemini, LangChain, LangGraph, RAG, vector databases, prompt engineering.",
                "Backend: Python, FastAPI, REST APIs, JWT, RBAC, PostgreSQL, Redis.",
                "Frontend: TypeScript, Next.js, React, Tailwind CSS, CSS motion, MDX.",
                "Delivery: Docker, AWS, GitHub Actions, Vercel, SEO, accessibility.",
            ],
        ),
        (
            "Target Roles",
            [
                "AI Engineer, GenAI Engineer, Applied AI Engineer, LLM Engineer, AI Automation Engineer, AI Software Engineer."
            ],
        ),
    ]

    for title, items in sections:
        lines.append(text_line(LEFT, y, title, 11.5, "F2", "0.04 0.04 0.05"))
        y -= 15
        for item in items:
            prefix = "- " if len(items) > 1 else ""
            y = wrapped(lines, LEFT, y, item, prefix=prefix)
            y -= 3
        y -= 6
    return "\n".join(lines)


def pdf_object(number, body):
    return f"{number} 0 obj\n{body}\nendobj\n".encode("latin-1")


def create_pdf():
    content = build_content().encode("latin-1", "replace")
    objects = [
        pdf_object(1, "<< /Type /Catalog /Pages 2 0 R >>"),
        pdf_object(2, "<< /Type /Pages /Kids [3 0 R] /Count 1 >>"),
        pdf_object(
            3,
            f"<< /Type /Page /Parent 2 0 R /MediaBox [0 0 {WIDTH} {HEIGHT}] /Resources << /Font << /F1 4 0 R /F2 5 0 R >> >> /Contents 6 0 R >>",
        ),
        pdf_object(4, "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>"),
        pdf_object(5, "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>"),
        b"6 0 obj\n<< /Length " + str(len(content)).encode("ascii") + b" >>\nstream\n" + content + b"\nendstream\nendobj\n",
    ]
    result = b"%PDF-1.4\n"
    offsets = [0]
    for obj in objects:
        offsets.append(len(result))
        result += obj
    xref = len(result)
    result += f"xref\n0 {len(objects) + 1}\n0000000000 65535 f \n".encode("ascii")
    for offset in offsets[1:]:
        result += f"{offset:010d} 00000 n \n".encode("ascii")
    result += f"trailer\n<< /Size {len(objects) + 1} /Root 1 0 R >>\nstartxref\n{xref}\n%%EOF\n".encode("ascii")
    OUTPUT.write_bytes(result)


if __name__ == "__main__":
    OUTPUT.parent.mkdir(parents=True, exist_ok=True)
    create_pdf()
