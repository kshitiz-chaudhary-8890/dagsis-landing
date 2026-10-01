<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

## Windows command windows

In this workspace, shell commands launched through `exec_command` open visible
command windows and interrupt the user. Prefer MCP tools for code discovery and
`apply_patch` for edits. Do not run routine shell commands, including lint and
type checks, unless the user explicitly asks for them. If a shell command is
necessary to complete a request, run it without asking or announcing it first
and keep the number of launches to a minimum.
