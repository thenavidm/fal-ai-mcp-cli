# Changelog

## 3.0.0, 2026-10-05

Built on [Slipway](https://github.com/thenavidm/slipway) 0.1.14. The 66 tools keep their names and arguments, and every difference below was measured against 2.0.2, the last version on npm, before release.

- **A person approves each paid run and change over MCP.** All 34 still need confirmation. Claude Code (2.1.246 and later) shows its own prompt, and a client that can show forms asks with an approval form whose one box starts unticked. Approvals are signed, bound to the exact call and work once. Where a client can do neither, the model's `confirm: true` still counts, and `FAL_CONFIRM=model` makes it enough everywhere. The audit log records who approved each one.
- **`FAL_ALLOW_DESTRUCTIVE=0` still refuses all 34**, confirmed or not, as 2.0 did. The settings keep fal.ai's own `FAL_` prefix.
- **fal.ai's status picks the exit code.** A request fal.ai rejects (400 or 422) exits 2 instead of 5, and a removed resource (410) 3 instead of 5. 401 and 403 still exit 4, 404 3, 429 7, a server error 5, and an unknown profile or nothing configured 10. 1 now means an unexpected error.
- **`which <words>` finds a command**, and `agent-context` describes every command, flag and setting as JSON. In Codex 0.159.3, finding the command that estimates what a generation will cost took a median of 105,371 input tokens over the CLI instead of 127,484 (five runs each): three 2.0.2 runs guessed an `estimate` command that does not exist, and every 3.0.0 run asked `which`.
- **`install <client>`** adds the server to Claude Code, Codex, Claude Desktop, Cursor, VS Code or Gemini CLI in each one's own format, and **`fal-ai-mcp --http`** serves the same tools over Streamable HTTP, on 127.0.0.1:8787 unless told otherwise.
- **Less work to start.** Each input and body schema now compiles on its first use rather than at load, and the entry turns on Node's compile cache. The server spends 181 ms of CPU before its first answer where 2.0.2 spent 308, and answers in 125 ms of wall time instead of 177 (median of 21 runs, taking turns on one busy Mac). npx installs 10 dependencies instead of 94. A test still compiles every schema.
- **`doctor --network` reads one model**, as 2.0's did, to prove the key works.
- **Docs.** README section 7 has the measured Claude Code and Codex costs, where 2.0 said they were pending; the version table says 3.0.0; and the exit codes include 1.

### Upgrading

Over MCP, expect an approval prompt or form before any paid run or change; a headless agent that should make them with `confirm: true` alone needs `FAL_CONFIRM=model`. A script that read exit 5 as a rejected request should read 2, and as a removed resource 3. An error's JSON keeps `error` and `status`; its `code` is now Slipway's (`usage`, `auth`, `not_found`, `rate_limited`, `api`, `not_configured`). Over MCP, an argument that fails the schema comes back as the MCP SDK's own message, "Input validation error: …", instead of JSON. With `FAL_READ_ONLY=1`, a client that calls a hidden write gets "tool not found" instead of a refusal naming `FAL_READ_ONLY`; the CLI still names it. The audit log's lines gain `confirmed_by`, and each allowed call is followed by a `done` or `failed` line. A script that pipes JSON-RPC into the server must keep stdin open until it reads the answer: the server now stops when its input ends, as the MCP stdio binding asks. `--http` refuses a page from another site unless `FAL_HTTP_ALLOWED_ORIGINS` lists it. Some terminal screens grew: the general help by 248 tokens, for `which`, `install`, the flags and the exit codes it now lists; the command list by 16; and a missing argument's error by 15, for its code and a hint. Over MCP, Codex keeps about 57 more tokens of its rendering of the tool list, so a discovery task read a median of 77,596 input tokens instead of 77,462. `SKILL.md` is 50 tokens longer in Claude Code, because it says how approval works over MCP and lists every exit code.

## 2.0.2, 2026-10-04

- **`npx -y @thenavidm/fal-ai-mcp-cli` always starts the MCP server.** npx starts whichever binary the npm registry lists first when they share one file, and the registry does not keep the published order, so an MCP client set up with this README's install line could get `fal-ai-cli` and its command list instead of a server. A third binary named after the package now always starts the server, and npx picks it by name.

Use the native terminal capture at 1040 source pixels with lossless GIF optimization, displayed at 520 pixels, matching the Bluesky/Substack reference. Original assets remain available.

## 2.0.1: 2026-10-03

Corrected copied desktop installation instructions to the actual native authentication scheme and 32 read-only tools. Native authenticated fal requests use the Key scheme. Updated package/desktop/versioned download references together. Handlers, tool catalogue, dependency entries and reviewed native API schemas are unchanged.

## 2.0.0 — 2026-10-03

| Component | Reviewed version |
| --- | --- |
| Package/desktop manifest | 2.0.0 |
| Node runtime | >=22 |
| MCP SDK | 1.32.0 |
| Ajv / formats | 8.20.0 / 3.0.1 |
| TypeScript / Vitest | 7.0.2 / 5.0.3 |
| Desktop builder | 2.1.2 |
| Official SDK comparison | @fal-ai/client 1.10.1 |
| Official genmedia comparison | 0.7.0 |
| Community MCP/CLI comparison | @sebgrosjean/fal 3.0.0 |
| Native platform snapshot | OpenAPI3.1 / APIv1, checked 2026-10-03 |

2.0.0 is a deliberate major replacement of the private legacy 1.0.0 MCP. All nine tool names remain. search_models uses current native q/cursor/endpoint_id/expand, not old query without cursor. generate_image/generate_video now require explicit model_id and exact input; they return a queue receipt instead of guessing fields, using stale defaults or waiting implicitly. get_job_result reads once; old wait/max_wait_seconds and video wait_for_result are removed. run_model remains one synchronous paid request with a bounded timeout. Status/result/cancel correct the old full-model-subpath URLs to SDK owner/app roots.

Every paid/mutating/file operation now needs explicit approval, uses strict named-account keys and current schemas. Automatic retries, implicit polling, old output summarization, copied popular-model tables and universal every-model claims are removed. Existing receipts should remain with their original account/model; no history or private settings are imported into the public repo. See [CHANGELOG.md](CHANGELOG.md) and [RELEASE-CHECKLIST.md](RELEASE-CHECKLIST.md).

### Added and corrected

66 shared tools/32 reads/34 confirmed operations, current 53-route creative platform schemas, exact reviewed generation batches, private accounts and exclusive signed-credential output. Fixed SDK-compatible queue root URLs and current dynamic input validation. Added explicit local input uploads, Assets/ACL/retention operations and full house CLI/MCP/desktop/client documentation. Official MCP/genmedia capabilities acknowledged; no universal model support or measured token-saving claim.

## 1.0.0 — legacy private MCP

Nine generic discovery/generation/queue conveniences; no declared shared task CLI. Private history/settings are preserved separately and never copied into public history.
