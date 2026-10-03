# Changelog

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
