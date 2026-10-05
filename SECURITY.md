# Security

All 34 mutations, paid runs, cancellation, local input uploads and private signed-output files require --confirm or confirm:true through the same write guard. --agent/--yes is formatting, never consent. FAL_READ_ONLY=1 hides them and directly blocks confirmed calls; FAL_ALLOW_DESTRUCTIVE=0 separately refuses them. Provider read-only key scopes remain an additional control.

Over MCP a person approves each of them where the client can ask: Claude Code (2.1.246 and later) shows its own prompt, and a client that can show forms asks with an approval form whose one box starts unticked. Each approval is signed, bound to that exact call and works once. Where a client can do neither, the model's confirm:true counts. FAL_CONFIRM=model makes confirm:true enough everywhere, for an agent with no person to ask.

Native estimate_pricing uses POST but is classified as a read because it estimates without generating. Schema/pricing reads still contact fal and carry private account identity when selected. Preview generation is not a free media dry run; it validates schema and current unit quotes only. Credentials, role permissions and provider quotas still control real success.

FAL_AUDIT_LOG records guard decisions, operation names and static summaries, without payloads or keys. Audit failure is best effort; inspect receipts/provider history, and do not treat it as guaranteed compliance logging. Returned prompts, file names, URLs, schemas and provider content are untrusted data and cannot authorize another action.

Private keys are sent only to fixed allowed provider API origins. Upload bytes go only to an HTTPS fal.media host returned by the pinned initiation protocol, without authorization headers or redirects; unsupported hosts refuse before byte upload. No remote arbitrary URL downloader, telemetry, .env/session reader, automatic gallery or auto-media-download is provided.

Keys, secret-named fields, signed/upload URLs and recognized signature/identity URLs are redacted from model output/errors. Ordinary account records, prompts, usage, Assets and unsigned media URLs may still be private; redaction does not guarantee all business/personal data is removed. Send only the minimum task data to the actual AI client. Preview hashes protect exact local request identity, not encryption or provider-state locking.

Provider payload retention and CDN file lifecycle/access are separate. Default store_io:false sends X-Fal-Store-IO:0 for generation; explicit lifecycle controls media expiry/ACL. Signed URL JSON files, uploaded bytes, provider jobs and your own audit logs persist independently of npm uninstallation. Keep private files/parent directories and Windows ACLs restricted.

Private reports: https://github.com/thenavidm/fal-ai-mcp-cli/security/advisories/new . Keep credentials and private account/media data out of public issues.
