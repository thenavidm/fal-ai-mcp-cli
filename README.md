<img src="https://cdn.navid.me/tools/fal-ai-icon.jpg" alt="fal.ai" width="88">

# fal.ai MCP Server & CLI

[![npm](https://img.shields.io/npm/v/@thenavidm/fal-ai-mcp-cli?color=orange&label=npm)](https://www.npmjs.com/package/@thenavidm/fal-ai-mcp-cli)
[![CI](https://github.com/thenavidm/fal-ai-mcp-cli/actions/workflows/ci.yml/badge.svg)](https://github.com/thenavidm/fal-ai-mcp-cli/actions/workflows/ci.yml)
[![License](https://img.shields.io/badge/License-AGPL--3.0-green)](./LICENSE)
[![YouTube](https://img.shields.io/badge/YouTube-@thenavidm-red?logo=youtube&logoColor=white)](https://youtube.com/@thenavidm?sub_confirmation=1)
[![X](https://img.shields.io/badge/X-@thenavidm-black?logo=x)](https://x.com/thenavidm)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-thenavidm-0A66C2?logo=linkedin&logoColor=white)](https://linkedin.com/in/thenavidm)

fal.ai MCP server and CLI for Codex and AI agents. 66 shared tools for current models, queue receipts, Assets and storage controls, private account profiles and exact reviewed generation batches.

One package provides a task CLI, local stdio MCP and versioned desktop bundle. Built and maintained by [Navid Moazzez](https://navid.me?utm_source=github&utm_medium=referral&utm_campaign=fal-ai-mcp-cli&utm_content=readme). Complete setup: [navid.me](https://navid.me/mcp-servers/fal-ai?utm_source=github&utm_medium=referral&utm_campaign=fal-ai-mcp-cli&utm_content=guide).

<img src="https://cdn.navid.me/repos/fal-ai-mcp-cli.gif?v=2.0.0" alt="Illustrated fal.ai workflow using the shared navid.me terminal" width="520">

The terminal illustrates actual commands, not a recorded provider account session. Node 22+ is required for manual installs; private account access, model eligibility and generation credits remain separate.

## Two ways to use it

### Command line

A terminal or shell agent calls only the requested task.

```bash
npx -y --package @thenavidm/fal-ai-mcp-cli@latest fal-ai-cli search-models --limit 1 --agent
```

### MCP server, for your AI app

Register the local stdio package with private credentials; Codex setup comes first.

```bash
codex mcp add fal-ai --env FAL_TOKEN_FILE=/absolute/private/fal.txt -- npx -y @thenavidm/fal-ai-mcp-cli@latest
```

### Which one

Use the CLI for task-specific shell discovery/compact selected output, or MCP for an AI client supporting local tools. Both enforce the same handlers, validation and approval policy.

## Features

- Current dynamic model/schema discovery, receipt-based queue operations and full native creative platform arguments.
- Shared local confirmation/read-only policy and isolated account API keys.
- Exact current-schema/unit-quote batch review and stop-on-failure receipts.
- Native Assets, collection, tag, character and CDN ACL/retention controls.
- Complete Codex/client/OS/desktop setup, current comparisons, version history and accordion FAQs.

## Contents

| Section | What it covers |
| --- | --- |
| [1. What you can ask it](#1-what-you-can-ask-it) | What you can ask it |
| [2. Quick install](#2-quick-install) | Quick install |
| [3. Set up fal.ai access](#3-set-up-falai-access) | Set up fal.ai access |
| [4. Connect your client](#4-connect-your-client) | Connect your client |
| [5. Check it works](#5-check-it-works) | Check it works |
| [6. Output, flags and exit codes](#6-output-flags-and-exit-codes) | Output, flags and exit codes |
| [7. MCP or CLI and token cost](#7-mcp-or-cli-and-token-cost) | MCP or CLI and token cost |
| [8. Every tool and argument](#8-every-tool-and-argument) | Every tool and argument |
| [9. Model and asset workflows](#9-model-and-asset-workflows) | Model and asset workflows |
| [10. Exact reviewed batches and pagination](#10-exact-reviewed-batches-and-pagination) | Exact reviewed batches and pagination |
| [11. Several private accounts](#11-several-private-accounts) | Several private accounts |
| [12. Writing safely](#12-writing-safely) | Writing safely |
| [13. How the two surfaces work](#13-how-the-two-surfaces-work) | How the two surfaces work |
| [14. Your data](#14-your-data) | Your data |
| [15. Environment variables](#15-environment-variables) | Environment variables |
| [16. Updates and removal](#16-updates-and-removal) | Updates and removal |
| [17. Troubleshooting](#17-troubleshooting) | Troubleshooting |
| [18. API coverage and comparisons](#18-api-coverage-and-comparisons) | API coverage and comparisons |
| [19. Versions and migration](#19-versions-and-migration) | Versions and migration |
| [20. FAQ](#20-faq) | FAQ |

## 1. What you can ask it

- Find exact current image, video, audio or 3D endpoint IDs and inspect their native schemas.
- Read unit pricing, estimate quantities deliberately and inspect the intended account's billable usage.
- Submit only the approved native model payload, keep its request ID and read progress/results once.
- Review several ordered generations against current schemas and prices, then submit only that matching approved batch.
- Browse and manage requested Assets, collections, tags and characters using native fields.
- Read or explicitly change CDN ACL/retention settings and save a signed access URL privately.

Actual shared discovery exposes **66 tools: 32 reads and 34 confirmed operations**. It wraps 53 selected current native platform operations plus 13 creative/account/batch helpers. All nine legacy tool names remain, with deliberate 2.0 breaking argument/behavior corrections documented below. Generic model support is conditional on discoverable/compilable current JSON schemas, credentials and model access; it is not a guarantee that every current/future endpoint works.

## 2. Quick install

```bash
npm install -g @thenavidm/fal-ai-mcp-cli@latest
fal-ai-cli --version
fal-ai-cli tools
fal-ai-cli schema submit-job
fal-ai-cli login
```

Node 22+ for manual CLI/local MCP. [INSTALL.md](INSTALL.md) covers every declared client/OS and the versioned [desktop bundle](https://github.com/thenavidm/fal-ai-mcp-cli/releases/download/v2.0.1/fal-ai-2.0.1.mcpb). Official genmedia and Python fal are separate binaries; ours is fal-ai-cli.

## 3. Set up fal.ai access

### Private account access

1. Sign into the intended [fal account](https://fal.ai/dashboard/keys). Confirm which personal/team account owns the credits and key before creating or copying it.
2. Use only the provider permissions needed for the requested work. Model execution, Assets, billing and organization reads have different requirements. A working model read does not prove asset/admin permissions.
3. Store FAL_KEY in private user/client environment settings or FAL_TOKEN_FILE as an absolute token-only file outside Git. On macOS/Linux use an owner-private directory and regular non-symlink 0600 file, at most 64 KiB. On Windows restrict ACLs to yourself; POSIX mode does not prove Windows ACLs.
4. Run fal-ai-cli doctor for local settings; doctor --network deliberately reads one model with limit=1. It reports count only, does not spend credits and does not prove the authenticated owner. Public model discovery can work without a key.
5. Inspect the exact current model schema and unit pricing before approving generation. Use a queue receipt to read progress/results; never submit again to check progress. Do not generate paid media, create keys or delete assets just to test installation.

FAL_ACCOUNTS is a private JSON array of unique {name,api_key,token_file} profiles; FAL_DEFAULT_ACCOUNT selects an exact label. A selected token file overrides only that profile's key. Explicit profiles never inherit FAL_KEY or another profile after missing credentials or a 401/403. Labels are not verified fal owners. Tokens cache until process restart; rotate/revoke at fal and restart clients.

This wrapper uses API keys with Authorization: Key on fixed api.fal.ai, queue.fal.run, fal.run and the SDK-pinned rest.fal.ai upload-initiation origin. No credential goes on the CDN upload PUT. No hosted OAuth, .env loading, SDK key-ID/secret environment inheritance, official genmedia config import, session cookie import, telemetry or automatic background update exists. login prints setup instructions and does not save credentials or start sign-in.

### Official account connections

The current [model-generation MCP](https://fal.ai/docs/documentation/setting-up/mcp) uses OAuth at https://mcp.fal.ai/mcp-relay. Its Active MCP account setting routes new uploads/generations; old jobs remain with their original account, and failed selected-account access does not fall back to personal credits. This is already an official isolation feature. API-key clients, including this package and genmedia, use the key's owning account separately.

The separate [Platform MCP](https://fal.ai/docs/documentation/setting-up/platform-mcp) at https://api.fal.ai/v1/mcp/platform uses API keys and is read-only account/serverless tooling. Documentation MCP at https://fal.ai/docs/mcp searches public docs without model execution. The old March launch article/key-based endpoint and its nine tools are historical evidence, not the current OAuth setup or tool count.

### Costs and permissions

The AGPL wrapper is free; fal generation credits, endpoint pricing, output quantities, model eligibility and concurrency limits apply. [Unit pricing](https://fal.ai/docs/platform-apis/v1/models/pricing) and [cost estimates](https://fal.ai/docs/platform-apis/v1/models/pricing/estimate) are different from completed billable usage. Unit quotes can scale with resolution, duration, output count or GPU time; a batch of ten requests is not a ten-output or ten-dollar limit. No local budget guarantee or credit reservation is promised.

No requests automatically retry, including reads, 429, failed uploads, timeouts or 5xx. Respect current provider throttling guidance before deliberately repeating a read. A timeout after a paid POST may have spent credits without returning a request ID: inspect fal history before another submission. Responses cap at 5 MiB and JSON requests at 1 MiB. One native list page is returned with its real cursor; there is no invented all-pages backup.

### Data and file controls

Generated and uploaded CDN media may be public under account defaults. The local generation default sends X-Fal-Store-IO:0 to disable provider JSON input/output storage; CDN media access and expiration are separate. Explicit store_io:true allows native payload storage. Native lifecycle JSON can specify expiration_duration_seconds and initial_acl with default allow/forbid/hide and nickname rules. Unknown nicknames may be silently dropped by fal; an ACL request is not proof of actual external visibility.

Local upload sends only the selected regular file, 1 byte–20 MiB, through upload initiation and one restricted fal.media PUT. Larger/multipart/remote-URL upload conveniences belong to the official clients; no retry or automatic generation occurs here. Sign-file URL credentials are saved only into an exclusive new private JSON file. Existing files are never overwritten. Keep parent directory and Windows ACLs private; a signature is access authority even if its field says URL.

### Rotation and revocation

Revoke the exact key at fal, replace private settings/files and restart every process. Revoke official OAuth connections separately. Removing the package/client registration does not cancel jobs, undo asset mutations, delete provider payloads/CDN files, revoke credentials or refund generation credits. Inspect receipts and provider state before explicitly requested cleanup.


## 4. Connect your client

Codex setup comes first in [INSTALL.md](INSTALL.md), followed by Claude Code, Claude Desktop extension/manual stdio, Cursor, VS Code/Copilot, Windsurf, Zed, Gemini CLI, Cline, Docker and other local stdio clients on macOS/Windows/Linux. Use private key settings available to the actual local/remote runtime. GUI apps may not inherit terminal environment; restart after changing settings.

This package provides local stdio. Remote-only clients use the provider-hosted OAuth relay. Skills are optional agent guidance; installing npm does not register SKILL.md automatically. No Claude Code installation is needed for Codex.

```bash
codex mcp add fal-ai --env FAL_TOKEN_FILE=/absolute/private/fal.txt -- npx -y @thenavidm/fal-ai-mcp-cli@latest
```

## 5. Check it works

```bash
fal-ai-cli --version
fal-ai-cli tools
fal-ai-cli list-accounts --agent
fal-ai-cli doctor
fal-ai-cli doctor --network
fal-ai-cli search-models --limit 1 --agent
fal-ai-cli get-model-info --model-id fal-ai/flux/dev --agent
```

Public model discovery/schema reads have been verified without credentials or generation credits. Private doctor --network reads one model with count only; model metadata can be public, so that result is not an account-owner or all-permissions test. Model runs, authenticated Assets and real queue outcomes require separate live-account verification. Never use a paid or destructive call as an install smoke test.

## 6. Output, flags and exit codes

Both surfaces return provider JSON through the same handlers. Queue submission returns request_id receipts with completed:false. get_job_status and get_job_result read once; cancel receipts do not prove stopped processing/refunds. Synchronous run timeouts can leave an unknown paid outcome. No returned media is downloaded or embedded automatically. Signed access credentials go only to a new exclusive private file; console responses contain saved-file metadata.

Use the actual task schema. Repeated primitive array flags pass one value each; repeated --tasks values are individual JSON task objects. Complete native body unions use --payload JSON or a private --payload-file, mutually exclusive with flat body flags. Native query/header/body names remain visible in the schema; kebab-case flags come from the shared house bridge.

```bash
fal-ai-cli search-models --limit 5 --agent --select models,next_cursor
fal-ai-cli submit-job --help
fal-ai-cli schema estimate-pricing
```

| Flag | Behavior |
| --- | --- |
| --agent | Compact JSON, no input/color; never confirmation |
| --confirm | Explicit approval for exactly the requested operation |
| --account LABEL | Exact private API-key profile |
| --select a,b.c | Local output field selection |
| --payload / --payload-file | Native body, mutually exclusive with other body routes |
| --tasks JSON | Repeat an individual ordered generation object |
| --review-sha256 HASH | Exact preview hash before batch submission |
| --output-file PATH | New private signed-URL credential file |

| Exit | Meaning |
| --- | --- |
| 0 | Handler success/receipt; submission does not mean completed generation |
| 2 | Invalid input or refused policy operation |
| 3 | Not found |
| 4 | Provider authentication/permissions |
| 5 | Provider/network/unknown outcome |
| 7 | Rate limit |
| 10 | Missing or invalid local account credentials/configuration |


## 7. MCP or CLI and token cost

The tools, schemas, handlers and write guard are shared. MCP clients discover local tools; shell agents can inspect command help/schema only when needed and select smaller result fields. Context cost depends on client tool discovery, loaded descriptions/schemas, prompts and output size.

No fresh matched successful Codex task/token comparison is measured for this release. Tool-list bytes or characters divided by four are not API usage. Actual schemas/receipts and refusal fixtures establish local behavior, not cost efficiency or universal superiority. Measure the same successful task and result coverage in the intended client before publishing a saving percentage. Historical Claude numbers from other packages do not apply here.

## 8. Every tool and argument

#### `search_models`

Unified endpoint for discovering model endpoints. Supports three usage modes:  **1. List Mode** (no parameters): Paginated list of all available model endpoints with minimal metadata.  **2. Find Mode** (`endpoint_id` parameter): Retrieve specific model endpoint(s) by ID. Supports single or multiple IDs.  **3. Search Mode** (search parameters): Filter models by free-text query, category, or status.  **Expansion:** Use `expand` to include additional data in each model object: - `openapi-3.0` :  full OpenAPI 3.0 schema in the `openapi` field - `enterprise_status` :  enterprise readiness status (`ready` or `pending`) in the `enterprise_status` field  **Examples of `endpoint_id` values:** - `fal-ai/flux/dev` - `fal-ai/wan/v2.2-a14b/text-to-video` - `fal-ai/minimax/video-01/image-to-video` - `fal-ai/hunyuan3d-v21`  See [fal.ai Model APIs](https://fal.ai/docs/documentation/model-apis/overview) for more details.  **Authentication:** Optional. Providing an API key grants higher rate limits.  **Common Use Cases:** - Browse available models for integration - Retrieve metadata for specific endpoints - Search for models by category or keywords - Get OpenAPI schemas for code generation - Build model selection interfaces

Policy: Read/helper; no explicit mutation approval.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `limit` | No; body/guard requirements still apply | integer | Maximum number of items to return. Actual maximum depends on query type and expansion parameters. minimum: `1`. |
| `cursor` | No; body/guard requirements still apply | string | Pagination cursor from previous response. Encodes the page number. |
| `endpoint_id` | No; body/guard requirements still apply | JSON | Endpoint ID(s) to retrieve (e.g., 'fal-ai/flux/dev'). Can be a single value or multiple values (1-50 models). When combined with search params, narrows results to these IDs. Use array syntax: ?endpoint_id=model1&endpoint_id=model2 |
| `q` | No; body/guard requirements still apply | string | Free-text search query to filter models by name, description, or category |
| `category` | No; body/guard requirements still apply | string | Filter by category (e.g., 'text-to-image', 'image-to-video', 'training') |
| `status` | No; body/guard requirements still apply | string | Filter models by status - omit to include all statuses enum: `["active", "deprecated"]`. |
| `expand` | No; body/guard requirements still apply | JSON | Fields to expand in the response. Supported values: 'openapi-3.0' (includes full OpenAPI 3.0 schema in 'openapi' field), 'enterprise_status' (includes enterprise readiness status) |
| `account` | No; body/guard requirements still apply | string | Exact private account key profile label, not an authenticated provider owner ID. |

**input.endpoint_id**


**input.endpoint_id anyOf branch 1**

Native JSON value; inspect the full schema for validation.

**input.endpoint_id anyOf branch 2**


**input.endpoint_id.anyOf2[]**

Native JSON value; inspect the full schema for validation.

**input.expand**


**input.expand anyOf branch 1**

Native JSON value; inspect the full schema for validation.

**input.expand anyOf branch 2**


**input.expand.anyOf2[]**

Native JSON value; inspect the full schema for validation.

#### `get_pricing`

Returns unit pricing for requested endpoint IDs. Most models use **output-based** pricing (e.g., per image/video with proportional adjustments for resolution/length). Some models use **GPU-based** pricing depending on architecture. Values are expressed per model's billing unit in a given currency.  **Authentication:** Required. Users must provide a valid API key.  Custom pricing or discounts may be applied based on account status.  **Common Use Cases:** - Display pricing in user interfaces - Compare pricing across different models - Build cost estimation tools - Check current billing rates  See [fal.ai pricing](https://fal.ai/pricing) for more details.

Policy: Read/helper; no explicit mutation approval.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `endpoint_id` | Yes | JSON | Filter by specific endpoint ID(s). Accepts 1-50 endpoint IDs. Supports comma-separated values: ?endpoint_id=model1,model2 or array syntax: ?endpoint_id=model1&endpoint_id=model2 |
| `account` | No; body/guard requirements still apply | string | Exact private account key profile label, not an authenticated provider owner ID. |

**input.endpoint_id**


**input.endpoint_id anyOf branch 1**

Native JSON value; inspect the full schema for validation.

**input.endpoint_id anyOf branch 2**


**input.endpoint_id.anyOf2[]**

Native JSON value; inspect the full schema for validation.

#### `estimate_pricing`

Computes cost estimates using one of two methods:  **1. Historical API Price** (`historical_api_price`): - Based on historical pricing per API call from past usage patterns - Takes `call_quantity` (number of API calls) per endpoint - Useful for estimating based on actual historical usage patterns - Example: "How much will 100 calls to flux/dev cost?"  **2. Unit Price** (`unit_price`): - Based on unit price × expected billing units from pricing service - Takes `unit_quantity` (number of billing units like images/videos) per endpoint - Useful when you know the expected output quantity - Example: "How much will 50 images from flux/dev cost?"  **Authentication:** Required. Users must provide a valid API key. Custom pricing or discounts may be applied based on account status.  **Common Use Cases:** - Pre-calculate costs for batch operations - Display cost estimates in user interfaces - Budget planning and cost optimization  See [fal.ai pricing](https://fal.ai/pricing) for more details.

Policy: Read/helper; no explicit mutation approval.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `account` | No; body/guard requirements still apply | string | Exact private account key profile label, not an authenticated provider owner ID. |
| `payload` | No; body/guard requirements still apply | JSON | Complete native JSON body, mutually exclusive with flat body flags and payload_file. Use schema for union bodies. |
| `payload_file` | No; body/guard requirements still apply | string | Absolute regular non-symlink private JSON file, at most 1 MiB. Cannot mix with other body inputs. minLength: `1`. |

**input.payload**


**input.payload oneOf branch 1**

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `estimate_type` | Yes | string | Estimate type: historical API pricing based on past usage patterns enum: `["historical_api_price"]`. |
| `endpoints` | Yes | object | Map of endpoint IDs to call quantities |

**input.payload.oneOf1.endpoints**


**input.payload.oneOf1.endpoints.{key}**

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `call_quantity` | Yes | integer | Number of API calls to estimate (regardless of units per call) minimum: `1`. |

**input.payload oneOf branch 2**

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `estimate_type` | Yes | string | Estimate type: unit price calculation based on billing units enum: `["unit_price"]`. |
| `endpoints` | Yes | object | Map of endpoint IDs to unit quantities |

**input.payload.oneOf2.endpoints**


**input.payload.oneOf2.endpoints.{key}**

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `unit_quantity` | Yes | number | Number of billing units expected (e.g., number of images, videos, etc.) minimum: `1e-06`. |

#### `get_usage`

Returns paginated usage records for your workspace with filters for endpoint, user, date range, and auth method. Each item includes the billed unit quantity, the pre-discount unit price and cost_subtotal, any percentage discount applied, and the final cost_total (cost_subtotal − cost_discount).  **Key Features:** - Usage data for all endpoints or filtered by specific endpoint(s) - Flexible date range filtering - User-specific usage tracking - Detailed usage line items with unit quantity, price, and discount breakdown - Paginated results for large datasets  **Common Use Cases:** - Generate usage reports for all endpoints or specific models - Track usage patterns - Monitor endpoint usage across different auth methods - Build usage dashboards and visualizations  See [fal.ai docs](https://fal.ai/docs/documentation/model-apis/faq) for more details.

Policy: Read/helper; no explicit mutation approval.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `limit` | No; body/guard requirements still apply | integer | Maximum number of items to return. Actual maximum depends on query type and expansion parameters. minimum: `1`. |
| `cursor` | No; body/guard requirements still apply | string | Pagination cursor from previous response. Encodes the page number. |
| `start` | No; body/guard requirements still apply | JSON | Start date in ISO8601 format (e.g., '2025-01-01T00:00:00Z' or '2025-01-01'). Defaults to 24 hours ago. |
| `end` | No; body/guard requirements still apply | JSON | End date in ISO8601 format, exclusive (e.g., '2025-02-01T00:00:00Z' or '2025-02-01'). Data up to but not including this timestamp is returned. Defaults to current time. |
| `timezone` | No; body/guard requirements still apply | string | Timezone for date aggregation and boundaries. All timestamps in responses are in UTC, but this controls how dates are bucketed. default: `"UTC"`. |
| `timeframe` | No; body/guard requirements still apply | string | Aggregation timeframe for timeseries data (auto-detected from date range if not specified). Auto-detection uses: minute (<2h), hour (<2d), day (<64d), week (<183d), month (>=183d). enum: `["minute", "hour", "day", "week", "month"]`. |
| `bound_to_timeframe` | No; body/guard requirements still apply | string | Whether to adjust start/end dates to align with timeframe boundaries and use exclusive end. Defaults to true. When true, dates are aligned to the start of the timeframe period (e.g., start of day) and end is made exclusive (e.g., start of next day). When false, uses exact dates provided. enum: `["true", "false"]`. default: `"true"`. |
| `endpoint_id` | No; body/guard requirements still apply | JSON | Filter by specific endpoint ID(s). Accepts 1-50 endpoint IDs. Supports comma-separated values: ?endpoint_id=model1,model2 or array syntax: ?endpoint_id=model1&endpoint_id=model2 |
| `api_key_id` | No; body/guard requirements still apply | JSON | Filter by specific API key ID(s). Accepts 1-50 key IDs. Supports comma-separated values: ?api_key_id=key1,key2 or array syntax: ?api_key_id=key1&api_key_id=key2 |
| `login_username` | No; body/guard requirements still apply | JSON | Filter by team member login username(s) (nickname). Accepts 1-50 usernames. Supports comma-separated values: ?login_username=alice,bob or array syntax: ?login_username=alice&login_username=bob |
| `expand` | No; body/guard requirements still apply | JSON | Data to include in the response. Use 'time_series' for time-bucketed data, 'summary' for aggregate statistics, 'auth_method' to include a formatted authentication method label, and 'auth_method_structured' to include a machine-readable auth method object (detail, api_key_id, login_username). At least one of 'time_series' or 'summary' is required. default: `["time_series"]`. |
| `account` | No; body/guard requirements still apply | string | Exact private account key profile label, not an authenticated provider owner ID. |

**input.start**


**input.start anyOf branch 1**

Native JSON value; inspect the full schema for validation.

**input.start anyOf branch 2**

Native JSON value; inspect the full schema for validation.

**input.end**


**input.end anyOf branch 1**

Native JSON value; inspect the full schema for validation.

**input.end anyOf branch 2**

Native JSON value; inspect the full schema for validation.

**input.endpoint_id**


**input.endpoint_id anyOf branch 1**

Native JSON value; inspect the full schema for validation.

**input.endpoint_id anyOf branch 2**


**input.endpoint_id.anyOf2[]**

Native JSON value; inspect the full schema for validation.

**input.api_key_id**


**input.api_key_id anyOf branch 1**

Native JSON value; inspect the full schema for validation.

**input.api_key_id anyOf branch 2**


**input.api_key_id.anyOf2[]**

Native JSON value; inspect the full schema for validation.

**input.login_username**


**input.login_username anyOf branch 1**

Native JSON value; inspect the full schema for validation.

**input.login_username anyOf branch 2**


**input.login_username.anyOf2[]**

Native JSON value; inspect the full schema for validation.

**input.expand**


**input.expand anyOf branch 1**

Native JSON value; inspect the full schema for validation.

**input.expand anyOf branch 2**


**input.expand.anyOf2[]**

Native JSON value; inspect the full schema for validation.

#### `get_analytics`

Time-bucketed metrics per model endpoint, including request counts, success/error rates, and latency percentiles. `prepare_duration` reflects queue/prepare time before execution; `duration` is request execution time. Use with the Queue/Webhooks flow to monitor SLAs.  **Metric Selection:** You must specify which metrics to include using the `expand` query parameter. Only requested metrics will be populated in the response, allowing you to optimize query performance and data transfer.  **Available Metrics:**  The `expand` parameter accepts these values, grouped by category:  *Volume* - `request_count`: Total number of requests in the time bucket - `success_count`: Successful requests (2xx responses) - `user_error_count`: User errors (4xx responses) - `error_count`: Server errors (5xx responses)  *Error type breakdown* - `startup_error_count`: Startup errors (startup timeout, scheduling failure) - `connection_error_count`: Connection errors (timeout, disconnected, refused) - `timeout_error_count`: Request timeout errors - `runtime_error_count`: Runtime errors (internal error, server error)  *Queue / prepare latency* - `p50_prepare_duration`, `p75_prepare_duration`, `p90_prepare_duration`, `p95_prepare_duration`, `p99_prepare_duration`: Time from request submission until execution starts  *Request execution latency* - `p25_duration`, `p50_duration`, `p75_duration`, `p90_duration`, `p95_duration`, `p99_duration`: Time spent processing the request  *Cold boot* - `cold_boot_count`: Requests with cold boot (startup > 1s) - `p50_cold_boot_duration`, `p75_cold_boot_duration`, `p90_cold_boot_duration`: Cold boot duration percentiles  *Billing* - `total_billable_duration`: Aggregate billed execution time  **Key Features:** - Selective metric inclusion via expand parameter - Performance metrics (latency percentiles, duration stats) - Reliability metrics (success/error rates, request counts) - Error type breakdown (startup, connection, timeout, runtime) - Cold boot metrics (count, latency percentiles) - Billing duration tracking - Time-bucketed data for trend analysis - Single or multi-model analytics - Flexible date range and timeframe options  **Common Use Cases:** - Monitor model performance and reliability - Generate performance dashboards - Analyze latency trends and patterns - Track error rates and success metrics  See [Queue API docs](https://fal.ai/docs/documentation/model-apis/inference/queue) for more details.

Policy: Read/helper; no explicit mutation approval.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `limit` | No; body/guard requirements still apply | integer | Maximum number of items to return. Actual maximum depends on query type and expansion parameters. minimum: `1`. |
| `cursor` | No; body/guard requirements still apply | string | Pagination cursor from previous response. Encodes the page number. |
| `start` | No; body/guard requirements still apply | JSON | Start date in ISO8601 format (e.g., '2025-01-01T00:00:00Z' or '2025-01-01'). Defaults to 24 hours ago. |
| `end` | No; body/guard requirements still apply | JSON | End date in ISO8601 format, exclusive (e.g., '2025-02-01T00:00:00Z' or '2025-02-01'). Data up to but not including this timestamp is returned. Defaults to current time. |
| `timezone` | No; body/guard requirements still apply | string | Timezone for date aggregation and boundaries. All timestamps in responses are in UTC, but this controls how dates are bucketed. default: `"UTC"`. |
| `timeframe` | No; body/guard requirements still apply | string | Aggregation timeframe for timeseries data (auto-detected from date range if not specified). Auto-detection uses: minute (<2h), hour (<2d), day (<64d), week (<183d), month (>=183d). enum: `["minute", "hour", "day", "week", "month"]`. |
| `bound_to_timeframe` | No; body/guard requirements still apply | string | Whether to adjust start/end dates to align with timeframe boundaries and use exclusive end. Defaults to true. When true, dates are aligned to the start of the timeframe period (e.g., start of day) and end is made exclusive (e.g., start of next day). When false, uses exact dates provided. enum: `["true", "false"]`. default: `"true"`. |
| `endpoint_id` | Yes | JSON | Filter by specific endpoint ID(s). Accepts 1-50 endpoint IDs. Supports comma-separated values: ?endpoint_id=model1,model2 or array syntax: ?endpoint_id=model1&endpoint_id=model2 |
| `expand` | No; body/guard requirements still apply | JSON | Data and metrics to include in the response. Use 'time_series' for time-bucketed data, metric names for specific metrics in time series, and 'summary' for aggregate statistics. At least one of 'time_series' or 'summary' and at least one metric are required. default: `["time_series", "request_count"]`. |
| `account` | No; body/guard requirements still apply | string | Exact private account key profile label, not an authenticated provider owner ID. |

**input.start**


**input.start anyOf branch 1**

Native JSON value; inspect the full schema for validation.

**input.start anyOf branch 2**

Native JSON value; inspect the full schema for validation.

**input.end**


**input.end anyOf branch 1**

Native JSON value; inspect the full schema for validation.

**input.end anyOf branch 2**

Native JSON value; inspect the full schema for validation.

**input.endpoint_id**


**input.endpoint_id anyOf branch 1**

Native JSON value; inspect the full schema for validation.

**input.endpoint_id anyOf branch 2**


**input.endpoint_id.anyOf2[]**

Native JSON value; inspect the full schema for validation.

**input.expand**


**input.expand anyOf branch 1**

Native JSON value; inspect the full schema for validation.

**input.expand anyOf branch 2**


**input.expand.anyOf2[]**

Native JSON value; inspect the full schema for validation.

#### `get_billing_events`

Returns paginated individual billing event records with filters for endpoint and date range. Each record includes the request ID, timestamp, endpoint, output units billed, and a cost breakdown in USD (cost_subtotal, cost_discount, cost_total; cost_estimate_nano_usd carries cost_total in nano USD).  **Key Features:** - Individual billing event records for each API request - Per-request cost breakdown before and after discounts - Flexible date range filtering - Optional endpoint filtering - Cursor-based pagination for efficient large dataset queries - Limited to 10000 records per page for performance - Date range capped at 90 days per request  **Common Use Cases:** - Audit individual billing events - Track request patterns and volumes - Debug specific requests by ID - Monitor billing unit consumption per request  See [fal.ai docs](https://fal.ai/docs/documentation/model-apis/faq) for more details.

Policy: Read/helper; no explicit mutation approval.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `limit` | No; body/guard requirements still apply | integer | Maximum number of items to return. Actual maximum depends on query type and expansion parameters. minimum: `1`. |
| `cursor` | No; body/guard requirements still apply | string | Pagination cursor from previous response. Encodes the page number. |
| `start` | No; body/guard requirements still apply | JSON | Start date in ISO8601 format (e.g., '2025-01-01T00:00:00Z' or '2025-01-01'). Defaults to 24 hours ago. |
| `end` | No; body/guard requirements still apply | JSON | End date in ISO8601 format, exclusive (e.g., '2025-02-01T00:00:00Z' or '2025-02-01'). Data up to but not including this timestamp is returned. Defaults to current time. |
| `endpoint_id` | No; body/guard requirements still apply | JSON | Filter by specific endpoint ID(s). Accepts 1-50 endpoint IDs. Supports comma-separated values: ?endpoint_id=model1,model2 or array syntax: ?endpoint_id=model1&endpoint_id=model2 |
| `request_id` | No; body/guard requirements still apply | JSON | Filter by specific request ID(s). Accepts 1-50 request IDs. Supports comma-separated values: ?request_id=req1,req2 or array syntax: ?request_id=req1&request_id=req2 |
| `api_key_id` | No; body/guard requirements still apply | JSON | Filter by specific API key ID(s). Accepts 1-50 key IDs. Supports comma-separated values: ?api_key_id=key1,key2 or array syntax: ?api_key_id=key1&api_key_id=key2 |
| `login_username` | No; body/guard requirements still apply | JSON | Filter by team member login username(s) (nickname). Accepts 1-50 usernames. Supports comma-separated values: ?login_username=alice,bob or array syntax: ?login_username=alice&login_username=bob |
| `expand` | No; body/guard requirements still apply | JSON | Data to include in the response. Use 'auth_method' for a formatted authentication method label, and 'auth_method_structured' for a machine-readable auth method object (detail, api_key_id, login_username). |
| `account` | No; body/guard requirements still apply | string | Exact private account key profile label, not an authenticated provider owner ID. |

**input.start**


**input.start anyOf branch 1**

Native JSON value; inspect the full schema for validation.

**input.start anyOf branch 2**

Native JSON value; inspect the full schema for validation.

**input.end**


**input.end anyOf branch 1**

Native JSON value; inspect the full schema for validation.

**input.end anyOf branch 2**

Native JSON value; inspect the full schema for validation.

**input.endpoint_id**


**input.endpoint_id anyOf branch 1**

Native JSON value; inspect the full schema for validation.

**input.endpoint_id anyOf branch 2**


**input.endpoint_id.anyOf2[]**

Native JSON value; inspect the full schema for validation.

**input.request_id**


**input.request_id anyOf branch 1**

Native JSON value; inspect the full schema for validation.

**input.request_id anyOf branch 2**


**input.request_id.anyOf2[]**

Native JSON value; inspect the full schema for validation.

**input.api_key_id**


**input.api_key_id anyOf branch 1**

Native JSON value; inspect the full schema for validation.

**input.api_key_id anyOf branch 2**


**input.api_key_id.anyOf2[]**

Native JSON value; inspect the full schema for validation.

**input.login_username**


**input.login_username anyOf branch 1**

Native JSON value; inspect the full schema for validation.

**input.login_username anyOf branch 2**


**input.login_username.anyOf2[]**

Native JSON value; inspect the full schema for validation.

**input.expand**


**input.expand anyOf branch 1**

Native JSON value; inspect the full schema for validation.

**input.expand anyOf branch 2**


**input.expand.anyOf2[]**

Native JSON value; inspect the full schema for validation.

#### `delete_request_payloads`

Deletes the IO payloads and associated CDN output files for a specific request.  **Important:** - Only **output** CDN files are deleted (input files may be used by other requests) - This action is irreversible - Requires authentication with an admin API key  **What gets deleted:** - Request input/output payload data - CDN-hosted output files (images, videos, etc.)  **What is NOT deleted:** - Input CDN files (may be referenced by other requests)  **Response:** - Returns deletion status for each CDN file - Each result includes the file link and any error that occurred  **Idempotency:** - Optional Idempotency-Key header prevents duplicate deletions on retries - Responses cached for 10 minutes per unique key  See [fal.ai docs](https://fal.ai/docs/platform-apis/v1/models/requests/payloads) for more details about request payloads.

Policy: Confirmed operation; read-only hides and directly refuses it.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `request_id` | Yes | string | Unique identifier for the request (UUID format) format: `"uuid"`. |
| `Idempotency_Key` | No; body/guard requirements still apply | string | Optional idempotency key for safe request retries |
| `account` | No; body/guard requirements still apply | string | Exact private account key profile label, not an authenticated provider owner ID. |
| `confirm` | No; body/guard requirements still apply | boolean | Must be true for the requested mutation, paid work or private output file. |

#### `list_requests_by_endpoint`

Lists requests for one or more endpoints (same `endpoint_id` style as usage/explore: comma-separated or repeated query params, up to 50 IDs).  **Authentication:** Requires API key (user or enterprise).  **Filters:** - Time range via start / end. If `start` is omitted, defaults to the last 24 hours :  unless `request_id` is provided, in which case the default start bound is widened to 90 days. - Status (success, error, user_error) - Request ID - Pagination via cursor/limit (limit defaults to 50, max 100)  **Sorting:** - By end time (default) or duration  **Expansions:** - Include payloads by adding expand=payloads

Policy: Read/helper; no explicit mutation approval.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `limit` | No; body/guard requirements still apply | integer | Number of items to return per page (max 100) minimum: `1`. maximum: `100`. default: `50`. |
| `cursor` | No; body/guard requirements still apply | string | Pagination cursor encoding the page number |
| `endpoint_id` | Yes | JSON | Filter by specific endpoint ID(s). Accepts 1-50 endpoint IDs. Supports comma-separated values: ?endpoint_id=model1,model2 or array syntax: ?endpoint_id=model1&endpoint_id=model2 |
| `start` | No; body/guard requirements still apply | JSON | Start date in ISO8601 format (e.g., '2025-01-01T00:00:00Z' or '2025-01-01'). Defaults to 24 hours ago. |
| `end` | No; body/guard requirements still apply | JSON | End date in ISO8601 format, exclusive (e.g., '2025-02-01T00:00:00Z' or '2025-02-01'). Data up to but not including this timestamp is returned. Defaults to current time. |
| `status` | No; body/guard requirements still apply | string | Filter by request status enum: `["success", "error", "user_error"]`. |
| `request_id` | No; body/guard requirements still apply | string | Filter by specific request ID format: `"uuid"`. |
| `expand` | No; body/guard requirements still apply | JSON | Fields to expand in the response. Use payloads to include input and output payloads. |
| `sort_by` | No; body/guard requirements still apply | string | Sort results by end time or duration enum: `["ended_at", "duration"]`. default: `"ended_at"`. |
| `account` | No; body/guard requirements still apply | string | Exact private account key profile label, not an authenticated provider owner ID. |

**input.endpoint_id**


**input.endpoint_id anyOf branch 1**

Native JSON value; inspect the full schema for validation.

**input.endpoint_id anyOf branch 2**


**input.endpoint_id.anyOf2[]**

Native JSON value; inspect the full schema for validation.

**input.start**


**input.start anyOf branch 1**

Native JSON value; inspect the full schema for validation.

**input.start anyOf branch 2**

Native JSON value; inspect the full schema for validation.

**input.end**


**input.end anyOf branch 1**

Native JSON value; inspect the full schema for validation.

**input.end anyOf branch 2**

Native JSON value; inspect the full schema for validation.

**input.expand**


**input.expand anyOf branch 1**

Native JSON value; inspect the full schema for validation.

**input.expand anyOf branch 2**


**input.expand.anyOf2[]**

Native JSON value; inspect the full schema for validation.

#### `search_requests`

Search, filter, and browse your request history. Supports three modes:  **1. Semantic Search** (`query`, `image_url`, or `video_url` parameter): Find visually or conceptually similar results using AI embeddings. Provide a text query for text-to-image search, an image URL for image-to-image similarity search, or a video URL for video-to-image similarity search.  **2. Filtered Browse** (no `query`, `image_url`, or `video_url`): Browse request history with hard filters. Returns results ordered by creation date (newest first).  **3. Semantic + Filters** (search params AND filter params): Combine semantic search with hard filters. Filters narrow the candidate set before ranking by similarity.  **Filter Options:** - `endpoint_id`: Filter by one or more fal endpoints (comma-separated or repeated, up to 50 IDs) - `exclude_api_requests` / `only_api_requests`: Filter by request source  **Examples:** - Semantic text search: `?query=sunset+landscape` - Image similarity: `?image_url=https://...&min_similarity=0.5` - Filtered search: `?query=portrait&endpoint_id=fal-ai/flux/dev` - Browse across multiple endpoints: `?endpoint_id=fal-ai/flux/dev,fal-ai/flux/schnell`

Policy: Read/helper; no explicit mutation approval.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `limit` | No; body/guard requirements still apply | integer | Maximum number of items to return. Actual maximum depends on query type and expansion parameters. minimum: `1`. |
| `cursor` | No; body/guard requirements still apply | string | Pagination cursor from previous response. Encodes the page number. |
| `query` | No; body/guard requirements still apply | string | Text search query for semantic search. Mutually exclusive with image_url and video_url. |
| `image_url` | No; body/guard requirements still apply | string | Image URL for similarity search. Mutually exclusive with query and video_url. |
| `video_url` | No; body/guard requirements still apply | string | Video URL for similarity search. Mutually exclusive with query and image_url. |
| `endpoint_id` | No; body/guard requirements still apply | JSON | Filter by one or more fal endpoints to scope request history. Accepts comma-separated or repeated values (1-50 IDs). |
| `endpoint` | No; body/guard requirements still apply | string | Deprecated: use `endpoint_id`. Single-endpoint filter retained for backward compatibility. If both are provided, `endpoint_id` wins. Deprecated native compatibility field. |
| `exclude_api_requests` | No; body/guard requirements still apply | boolean | Exclude requests made via API keys (only show playground/UI requests). Mutually exclusive with only_api_requests. |
| `only_api_requests` | No; body/guard requirements still apply | boolean | Only include requests made via API keys. Mutually exclusive with exclude_api_requests. |
| `min_similarity` | No; body/guard requirements still apply | ['number', 'null'] | Minimum similarity score (0-1) for semantic search results. Only applies when query or image_url is provided. minimum: `0`. maximum: `1`. |
| `account` | No; body/guard requirements still apply | string | Exact private account key profile label, not an authenticated provider owner ID. |

**input.endpoint_id**


**input.endpoint_id anyOf branch 1**

Native JSON value; inspect the full schema for validation.

**input.endpoint_id anyOf branch 2**


**input.endpoint_id.anyOf2[]**

Native JSON value; inspect the full schema for validation.

#### `list_workflows`

List workflows for the authenticated user with optional search and filtering.  **Features:** - Paginated results with cursor-based pagination - Search by workflow name or title - Filter by model endpoints used in the workflow  **Authentication:** Required. Returns only workflows owned by the authenticated user.  **Common Use Cases:** - Display user's workflow library - Search for specific workflows - Find workflows using particular models

Policy: Read/helper; no explicit mutation approval.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `limit` | No; body/guard requirements still apply | integer | Maximum number of items to return. Actual maximum depends on query type and expansion parameters. minimum: `1`. |
| `cursor` | No; body/guard requirements still apply | string | Pagination cursor from previous response. Encodes the page number. |
| `search` | No; body/guard requirements still apply | string | Search by workflow name or title |
| `used_endpoint_ids` | No; body/guard requirements still apply | JSON | Filter by model endpoint IDs used in the workflow. Can be a single value or comma-separated values. |
| `account` | No; body/guard requirements still apply | string | Exact private account key profile label, not an authenticated provider owner ID. |

**input.used_endpoint_ids**


**input.used_endpoint_ids anyOf branch 1**

Native JSON value; inspect the full schema for validation.

**input.used_endpoint_ids anyOf branch 2**


**input.used_endpoint_ids.anyOf2[]**

Native JSON value; inspect the full schema for validation.

#### `create_workflow`

Create a new workflow owned by the authenticated user.  **Authentication:** Required.  **Common Use Cases:** - Save a newly built workflow - Programmatically provision workflows  **Note:** Workflow names must be unique within your namespace. Creating a workflow with a name you already use returns a 400 validation error.

Policy: Confirmed operation; read-only hides and directly refuses it.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `name` | No; body/guard requirements still apply | string | Unique workflow name/slug within the user's namespace maxLength: `128`. pattern: `"^[a-zA-Z0-9_-]+$"`. |
| `title` | No; body/guard requirements still apply | string | Human-readable workflow title minLength: `1`. maxLength: `256`. |
| `contents` | No; body/guard requirements still apply | object | The workflow definition/configuration object |
| `is_public` | No; body/guard requirements still apply | boolean | Whether the workflow is publicly visible default: `false`. |
| `account` | No; body/guard requirements still apply | string | Exact private account key profile label, not an authenticated provider owner ID. |
| `confirm` | No; body/guard requirements still apply | boolean | Must be true for the requested mutation, paid work or private output file. |
| `payload` | No; body/guard requirements still apply | object | Complete native JSON body, mutually exclusive with flat body flags and payload_file. Use schema for union bodies. |
| `payload_file` | No; body/guard requirements still apply | string | Absolute regular non-symlink private JSON file, at most 1 MiB. Cannot mix with other body inputs. minLength: `1`. |

**input.contents**

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `name` | Yes | string | Internal name of the workflow definition |
| `version` | Yes | string | Workflow definition format version |
| `nodes` | Yes | object | Workflow nodes keyed by node id |
| `output` | Yes | object | Output field mappings keyed by output name |
| `schema` | Yes | object | Input/output schema for the workflow |
| `metadata` | No; body/guard requirements still apply | object | Optional workflow metadata |

**input.contents.nodes**


**input.contents.nodes.{key}**


**input.contents.nodes.{key}.{key}**

Native JSON value; inspect the full schema for validation.

**input.contents.output**


**input.contents.output.{key}**

Native JSON value; inspect the full schema for validation.

**input.contents.schema**

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `input` | Yes | object | Input fields schema |
| `output` | Yes | object | Output fields schema |

**input.contents.schema.input**


**input.contents.schema.input.{key}**

Native JSON value; inspect the full schema for validation.

**input.contents.schema.output**


**input.contents.schema.output.{key}**

Native JSON value; inspect the full schema for validation.

**input.contents.metadata**


**input.contents.metadata.{key}**

Native JSON value; inspect the full schema for validation.

**input.payload**

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `name` | Yes | string | Unique workflow name/slug within the user's namespace maxLength: `128`. pattern: `"^[a-zA-Z0-9_-]+$"`. |
| `title` | Yes | string | Human-readable workflow title minLength: `1`. maxLength: `256`. |
| `contents` | Yes | object | The workflow definition/configuration object |
| `is_public` | No; body/guard requirements still apply | boolean | Whether the workflow is publicly visible default: `false`. |

**input.payload.contents**

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `name` | Yes | string | Internal name of the workflow definition |
| `version` | Yes | string | Workflow definition format version |
| `nodes` | Yes | object | Workflow nodes keyed by node id |
| `output` | Yes | object | Output field mappings keyed by output name |
| `schema` | Yes | object | Input/output schema for the workflow |
| `metadata` | No; body/guard requirements still apply | object | Optional workflow metadata |

**input.payload.contents.nodes**


**input.payload.contents.nodes.{key}**


**input.payload.contents.nodes.{key}.{key}**

Native JSON value; inspect the full schema for validation.

**input.payload.contents.output**


**input.payload.contents.output.{key}**

Native JSON value; inspect the full schema for validation.

**input.payload.contents.schema**

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `input` | Yes | object | Input fields schema |
| `output` | Yes | object | Output fields schema |

**input.payload.contents.schema.input**


**input.payload.contents.schema.input.{key}**

Native JSON value; inspect the full schema for validation.

**input.payload.contents.schema.output**


**input.payload.contents.schema.output.{key}**

Native JSON value; inspect the full schema for validation.

**input.payload.contents.metadata**


**input.payload.contents.metadata.{key}**

Native JSON value; inspect the full schema for validation.

#### `get_workflow`

Get detailed information about a specific workflow, including its full contents/definition.  **Authentication:** Required.  **Common Use Cases:** - Load a workflow for editing - View workflow configuration - Export workflow definition

Policy: Read/helper; no explicit mutation approval.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `username` | Yes | string | The username of the workflow owner maxLength: `128`. pattern: `"^[a-zA-Z0-9_-]+$"`. |
| `workflow_name` | Yes | string | The workflow name/slug maxLength: `128`. pattern: `"^[a-zA-Z0-9_-]+$"`. |
| `account` | No; body/guard requirements still apply | string | Exact private account key profile label, not an authenticated provider owner ID. |

#### `list_assets`

Browse and semantically search fal Assets across all media, uploads, favorites, collections, tags, and character references.

Policy: Read/helper; no explicit mutation approval.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `limit` | No; body/guard requirements still apply | integer | Maximum number of items to return. Actual maximum depends on query type and expansion parameters. minimum: `1`. |
| `cursor` | No; body/guard requirements still apply | string | Pagination cursor from previous response. Encodes the page number. |
| `q` | No; body/guard requirements still apply | string | Text query for hybrid semantic search |
| `search_image_url` | No; body/guard requirements still apply | string | fal-hosted image URL to use for semantic image search format: `"uri"`. |
| `search_video_url` | No; body/guard requirements still apply | string | fal-hosted video URL to use for semantic video search format: `"uri"`. |
| `media_type` | No; body/guard requirements still apply | ['array', 'null'] | Filter by one or more media types default: `[]`. |
| `source` | No; body/guard requirements still apply | ['array', 'null'] | Filter by one or more indexed sources default: `[]`. |
| `section` | No; body/guard requirements still apply | string | Asset library section to browse enum: `["all-media", "uploads", "favorites", "generated"]`. default: `"all-media"`. |
| `collection_id` | No; body/guard requirements still apply | string | Collection scope to browse |
| `character_identifier` | No; body/guard requirements still apply | ['array', 'null'] | Character identifiers to use as @mention semantic filters default: `[]`. |
| `tag_id` | No; body/guard requirements still apply | ['array', 'null'] | Tag IDs to filter by default: `[]`. |
| `tag_mode` | No; body/guard requirements still apply | string | Whether tag filters match any tag or all tags enum: `["any", "all"]`. default: `"any"`. |
| `account` | No; body/guard requirements still apply | string | Exact private account key profile label, not an authenticated provider owner ID. |

**input.media_type**


**input.media_type[]**

Asset media type

**input.source**


**input.source[]**

Indexed asset source

**input.character_identifier**


**input.character_identifier[]**

Native JSON value; inspect the full schema for validation.

**input.tag_id**


**input.tag_id[]**

Native JSON value; inspect the full schema for validation.

#### `list_asset_collections`

List asset collections for the authenticated user's fal Assets library.

Policy: Read/helper; no explicit mutation approval.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `limit` | No; body/guard requirements still apply | integer | Maximum number of collections to return minimum: `1`. maximum: `100`. default: `50`. |
| `offset` | No; body/guard requirements still apply | ['integer', 'null'] | Number of collections to skip minimum: `0`. default: `0`. |
| `account` | No; body/guard requirements still apply | string | Exact private account key profile label, not an authenticated provider owner ID. |

#### `create_asset_collection`

Create asset collection for the authenticated user's fal Assets library.

Policy: Confirmed operation; read-only hides and directly refuses it.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `Idempotency_Key` | No; body/guard requirements still apply | string | Optional idempotency key for safe request retries |
| `name` | No; body/guard requirements still apply | string | Collection display name minLength: `1`. maxLength: `255`. |
| `description` | No; body/guard requirements still apply | ['string', 'null'] | Optional collection description |
| `icon` | No; body/guard requirements still apply | ['string', 'null'] | Optional collection icon |
| `color` | No; body/guard requirements still apply | ['string', 'null'] | Optional collection color |
| `cover_image_url` | No; body/guard requirements still apply | ['string', 'null'] | Optional fal-hosted cover image URL for the collection format: `"uri"`. |
| `parent_collection_id` | No; body/guard requirements still apply | ['string', 'null'] | Optional parent collection ID to nest this collection under (manual collections only). Omit or null to create a top-level collection. minLength: `1`. |
| `filters` | No; body/guard requirements still apply | JSON | Assets filter DSL |
| `account` | No; body/guard requirements still apply | string | Exact private account key profile label, not an authenticated provider owner ID. |
| `confirm` | No; body/guard requirements still apply | boolean | Must be true for the requested mutation, paid work or private output file. |
| `payload` | No; body/guard requirements still apply | object | Complete native JSON body, mutually exclusive with flat body flags and payload_file. Use schema for union bodies. |
| `payload_file` | No; body/guard requirements still apply | string | Absolute regular non-symlink private JSON file, at most 1 MiB. Cannot mix with other body inputs. minLength: `1`. |

**input.payload**

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `name` | Yes | string | Collection display name minLength: `1`. maxLength: `255`. |
| `description` | No; body/guard requirements still apply | ['string', 'null'] | Optional collection description |
| `icon` | No; body/guard requirements still apply | ['string', 'null'] | Optional collection icon |
| `color` | No; body/guard requirements still apply | ['string', 'null'] | Optional collection color |
| `cover_image_url` | No; body/guard requirements still apply | ['string', 'null'] | Optional fal-hosted cover image URL for the collection format: `"uri"`. |
| `parent_collection_id` | No; body/guard requirements still apply | ['string', 'null'] | Optional parent collection ID to nest this collection under (manual collections only). Omit or null to create a top-level collection. minLength: `1`. |
| `filters` | No; body/guard requirements still apply | JSON | Assets filter DSL |

#### `get_asset_collection`

Get asset collection for the authenticated user's fal Assets library.

Policy: Read/helper; no explicit mutation approval.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `collection_id` | Yes | string | Collection ID minLength: `1`. |
| `account` | No; body/guard requirements still apply | string | Exact private account key profile label, not an authenticated provider owner ID. |

#### `update_asset_collection`

Update asset collection for the authenticated user's fal Assets library.

Policy: Confirmed operation; read-only hides and directly refuses it.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `collection_id` | Yes | string | Collection ID minLength: `1`. |
| `Idempotency_Key` | No; body/guard requirements still apply | string | Optional idempotency key for safe request retries |
| `name` | No; body/guard requirements still apply | string | Collection display name minLength: `1`. maxLength: `255`. |
| `description` | No; body/guard requirements still apply | ['string', 'null'] | Optional collection description |
| `icon` | No; body/guard requirements still apply | ['string', 'null'] | Optional collection icon |
| `color` | No; body/guard requirements still apply | ['string', 'null'] | Optional collection color |
| `cover_image_url` | No; body/guard requirements still apply | ['string', 'null'] | Optional fal-hosted cover image URL for the collection format: `"uri"`. |
| `filters` | No; body/guard requirements still apply | JSON | Assets filter DSL |
| `account` | No; body/guard requirements still apply | string | Exact private account key profile label, not an authenticated provider owner ID. |
| `confirm` | No; body/guard requirements still apply | boolean | Must be true for the requested mutation, paid work or private output file. |
| `payload` | No; body/guard requirements still apply | object | Complete native JSON body, mutually exclusive with flat body flags and payload_file. Use schema for union bodies. |
| `payload_file` | No; body/guard requirements still apply | string | Absolute regular non-symlink private JSON file, at most 1 MiB. Cannot mix with other body inputs. minLength: `1`. |

**input.payload**

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `name` | No; body/guard requirements still apply | string | Collection display name minLength: `1`. maxLength: `255`. |
| `description` | No; body/guard requirements still apply | ['string', 'null'] | Optional collection description |
| `icon` | No; body/guard requirements still apply | ['string', 'null'] | Optional collection icon |
| `color` | No; body/guard requirements still apply | ['string', 'null'] | Optional collection color |
| `cover_image_url` | No; body/guard requirements still apply | ['string', 'null'] | Optional fal-hosted cover image URL for the collection format: `"uri"`. |
| `filters` | No; body/guard requirements still apply | JSON | Assets filter DSL |

#### `delete_asset_collection`

Delete asset collection for the authenticated user's fal Assets library.

Policy: Confirmed operation; read-only hides and directly refuses it.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `collection_id` | Yes | string | Collection ID minLength: `1`. |
| `Idempotency_Key` | No; body/guard requirements still apply | string | Optional idempotency key for safe request retries |
| `account` | No; body/guard requirements still apply | string | Exact private account key profile label, not an authenticated provider owner ID. |
| `confirm` | No; body/guard requirements still apply | boolean | Must be true for the requested mutation, paid work or private output file. |

#### `get_asset_collection_hierarchy`

Get the nested subtree rooted at an asset collection, plus its ancestor collections ordered from the top level down to its direct parent.

Policy: Read/helper; no explicit mutation approval.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `collection_id` | Yes | string | Collection ID minLength: `1`. |
| `account` | No; body/guard requirements still apply | string | Exact private account key profile label, not an authenticated provider owner ID. |

#### `favorite_asset_collection`

Favorite an asset collection for the authenticated user's fal Assets library.

Policy: Confirmed operation; read-only hides and directly refuses it.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `collection_id` | Yes | string | Collection ID minLength: `1`. |
| `Idempotency_Key` | No; body/guard requirements still apply | string | Optional idempotency key for safe request retries |
| `account` | No; body/guard requirements still apply | string | Exact private account key profile label, not an authenticated provider owner ID. |
| `confirm` | No; body/guard requirements still apply | boolean | Must be true for the requested mutation, paid work or private output file. |

#### `unfavorite_asset_collection`

Unfavorite an asset collection for the authenticated user's fal Assets library.

Policy: Confirmed operation; read-only hides and directly refuses it.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `collection_id` | Yes | string | Collection ID minLength: `1`. |
| `Idempotency_Key` | No; body/guard requirements still apply | string | Optional idempotency key for safe request retries |
| `account` | No; body/guard requirements still apply | string | Exact private account key profile label, not an authenticated provider owner ID. |
| `confirm` | No; body/guard requirements still apply | boolean | Must be true for the requested mutation, paid work or private output file. |

#### `move_asset_collection`

Move a manual asset collection under another collection, or to the top level. Only manual collections can be moved or act as folders; nesting is limited to 5 levels deep and cannot create a cycle.

Policy: Confirmed operation; read-only hides and directly refuses it.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `collection_id` | Yes | string | Collection ID minLength: `1`. |
| `Idempotency_Key` | No; body/guard requirements still apply | string | Optional idempotency key for safe request retries |
| `parent_collection_id` | No; body/guard requirements still apply | ['string', 'null'] | Parent collection ID to move this collection under, or null to move it to the top level. Must be a manual collection; nesting is limited to 5 levels and cannot create a cycle. minLength: `1`. |
| `account` | No; body/guard requirements still apply | string | Exact private account key profile label, not an authenticated provider owner ID. |
| `confirm` | No; body/guard requirements still apply | boolean | Must be true for the requested mutation, paid work or private output file. |
| `payload` | No; body/guard requirements still apply | object | Complete native JSON body, mutually exclusive with flat body flags and payload_file. Use schema for union bodies. |
| `payload_file` | No; body/guard requirements still apply | string | Absolute regular non-symlink private JSON file, at most 1 MiB. Cannot mix with other body inputs. minLength: `1`. |

**input.payload**

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `parent_collection_id` | Yes | ['string', 'null'] | Parent collection ID to move this collection under, or null to move it to the top level. Must be a manual collection; nesting is limited to 5 levels and cannot create a cycle. minLength: `1`. |

#### `list_asset_collection_assets`

Browse assets in a collection for the authenticated user's fal Assets library.

Policy: Read/helper; no explicit mutation approval.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `collection_id` | Yes | string | Collection ID minLength: `1`. |
| `limit` | No; body/guard requirements still apply | integer | Maximum number of items to return. Actual maximum depends on query type and expansion parameters. minimum: `1`. |
| `cursor` | No; body/guard requirements still apply | string | Pagination cursor from previous response. Encodes the page number. |
| `q` | No; body/guard requirements still apply | string | Text query for hybrid semantic search |
| `search_image_url` | No; body/guard requirements still apply | string | fal-hosted image URL to use for semantic image search format: `"uri"`. |
| `search_video_url` | No; body/guard requirements still apply | string | fal-hosted video URL to use for semantic video search format: `"uri"`. |
| `media_type` | No; body/guard requirements still apply | ['array', 'null'] | Filter by one or more media types default: `[]`. |
| `source` | No; body/guard requirements still apply | ['array', 'null'] | Filter by one or more indexed sources default: `[]`. |
| `section` | No; body/guard requirements still apply | string | Asset library section to browse enum: `["all-media", "uploads", "favorites", "generated"]`. default: `"all-media"`. |
| `character_identifier` | No; body/guard requirements still apply | ['array', 'null'] | Character identifiers to use as @mention semantic filters default: `[]`. |
| `tag_id` | No; body/guard requirements still apply | ['array', 'null'] | Tag IDs to filter by default: `[]`. |
| `tag_mode` | No; body/guard requirements still apply | string | Whether tag filters match any tag or all tags enum: `["any", "all"]`. default: `"any"`. |
| `account` | No; body/guard requirements still apply | string | Exact private account key profile label, not an authenticated provider owner ID. |

**input.media_type**


**input.media_type[]**

Asset media type

**input.source**


**input.source[]**

Indexed asset source

**input.character_identifier**


**input.character_identifier[]**

Native JSON value; inspect the full schema for validation.

**input.tag_id**


**input.tag_id[]**

Native JSON value; inspect the full schema for validation.

#### `add_asset_to_collection`

Add an asset to a manual or character collection. Provide a request ID or vector ID; unresolved references are materialized before local collection state is added. For character collections, the asset is added by applying the character tag.

Policy: Confirmed operation; read-only hides and directly refuses it.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `collection_id` | Yes | string | Collection ID minLength: `1`. |
| `Idempotency_Key` | No; body/guard requirements still apply | string | Optional idempotency key for safe request retries |
| `request_id` | No; body/guard requirements still apply | string | Request ID to save as an asset before mutating minLength: `1`. |
| `vector_id` | No; body/guard requirements still apply | string | Vector ID to save as an asset before mutating minLength: `1`. |
| `account` | No; body/guard requirements still apply | string | Exact private account key profile label, not an authenticated provider owner ID. |
| `confirm` | No; body/guard requirements still apply | boolean | Must be true for the requested mutation, paid work or private output file. |
| `payload` | No; body/guard requirements still apply | object | Complete native JSON body, mutually exclusive with flat body flags and payload_file. Use schema for union bodies. |
| `payload_file` | No; body/guard requirements still apply | string | Absolute regular non-symlink private JSON file, at most 1 MiB. Cannot mix with other body inputs. minLength: `1`. |

**input.payload**

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `request_id` | No; body/guard requirements still apply | string | Request ID to save as an asset before mutating minLength: `1`. |
| `vector_id` | No; body/guard requirements still apply | string | Vector ID to save as an asset before mutating minLength: `1`. |

#### `remove_asset_from_collection`

Remove an asset from a manual or character collection by request ID or vector ID.

Policy: Confirmed operation; read-only hides and directly refuses it.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `collection_id` | Yes | string | Collection ID minLength: `1`. |
| `Idempotency_Key` | No; body/guard requirements still apply | string | Optional idempotency key for safe request retries |
| `request_id` | No; body/guard requirements still apply | string | Request ID to save as an asset before mutating minLength: `1`. |
| `vector_id` | No; body/guard requirements still apply | string | Vector ID to save as an asset before mutating minLength: `1`. |
| `account` | No; body/guard requirements still apply | string | Exact private account key profile label, not an authenticated provider owner ID. |
| `confirm` | No; body/guard requirements still apply | boolean | Must be true for the requested mutation, paid work or private output file. |
| `payload` | No; body/guard requirements still apply | object | Complete native JSON body, mutually exclusive with flat body flags and payload_file. Use schema for union bodies. |
| `payload_file` | No; body/guard requirements still apply | string | Absolute regular non-symlink private JSON file, at most 1 MiB. Cannot mix with other body inputs. minLength: `1`. |

**input.payload**

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `request_id` | No; body/guard requirements still apply | string | Request ID to save as an asset before mutating minLength: `1`. |
| `vector_id` | No; body/guard requirements still apply | string | Vector ID to save as an asset before mutating minLength: `1`. |

#### `list_asset_characters`

List asset characters for the authenticated user's fal Assets library.

Policy: Read/helper; no explicit mutation approval.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `limit` | No; body/guard requirements still apply | integer | Maximum number of collections to return minimum: `1`. maximum: `100`. default: `50`. |
| `offset` | No; body/guard requirements still apply | ['integer', 'null'] | Number of collections to skip minimum: `0`. default: `0`. |
| `account` | No; body/guard requirements still apply | string | Exact private account key profile label, not an authenticated provider owner ID. |

#### `create_asset_character`

Create an asset character for the authenticated user's fal Assets library. Prefer vector IDs or request IDs in reference_images for existing fal-generated assets; use fal-hosted image URLs only for standalone images. Unresolved ID references are materialized before character state is added.

Policy: Confirmed operation; read-only hides and directly refuses it.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `Idempotency_Key` | No; body/guard requirements still apply | string | Optional idempotency key for safe request retries |
| `name` | No; body/guard requirements still apply | string | Character display name minLength: `1`. maxLength: `255`. |
| `identifier` | No; body/guard requirements still apply | ['string', 'null'] | Optional @mention identifier for the character maxLength: `64`. |
| `description` | No; body/guard requirements still apply | string | Text description used for character semantic matching minLength: `1`. maxLength: `2000`. |
| `reference_images` | No; body/guard requirements still apply | array | Reference images for the character. Prefer vector IDs or request IDs for existing fal-generated assets. Use fal-hosted image URLs only for standalone images. minItems: `1`. maxItems: `20`. |
| `cover_image_url` | No; body/guard requirements still apply | ['string', 'null'] | Optional fal-hosted cover image URL for the character format: `"uri"`. |
| `account` | No; body/guard requirements still apply | string | Exact private account key profile label, not an authenticated provider owner ID. |
| `confirm` | No; body/guard requirements still apply | boolean | Must be true for the requested mutation, paid work or private output file. |
| `payload` | No; body/guard requirements still apply | object | Complete native JSON body, mutually exclusive with flat body flags and payload_file. Use schema for union bodies. |
| `payload_file` | No; body/guard requirements still apply | string | Absolute regular non-symlink private JSON file, at most 1 MiB. Cannot mix with other body inputs. minLength: `1`. |

**input.reference_images**


**input.reference_images[]**

Native JSON value; inspect the full schema for validation.

**input.payload**

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `name` | Yes | string | Character display name minLength: `1`. maxLength: `255`. |
| `identifier` | No; body/guard requirements still apply | ['string', 'null'] | Optional @mention identifier for the character maxLength: `64`. |
| `description` | Yes | string | Text description used for character semantic matching minLength: `1`. maxLength: `2000`. |
| `reference_images` | Yes | array | Reference images for the character. Prefer vector IDs or request IDs for existing fal-generated assets. Use fal-hosted image URLs only for standalone images. minItems: `1`. maxItems: `20`. |
| `cover_image_url` | No; body/guard requirements still apply | ['string', 'null'] | Optional fal-hosted cover image URL for the character format: `"uri"`. |

**input.payload.reference_images**


**input.payload.reference_images[]**

Native JSON value; inspect the full schema for validation.

#### `update_asset_character`

Update an asset character for the authenticated user's fal Assets library. Prefer vector IDs or request IDs in reference_images for existing fal-generated assets; use fal-hosted image URLs only for standalone images. Unresolved ID references are materialized before character state is added.

Policy: Confirmed operation; read-only hides and directly refuses it.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `character_id` | Yes | string | Character collection ID minLength: `1`. |
| `Idempotency_Key` | No; body/guard requirements still apply | string | Optional idempotency key for safe request retries |
| `name` | No; body/guard requirements still apply | string | Character display name minLength: `1`. maxLength: `255`. |
| `description` | No; body/guard requirements still apply | string | Text description used for character semantic matching minLength: `1`. maxLength: `2000`. |
| `reference_images` | No; body/guard requirements still apply | array | Reference images for the character. Prefer vector IDs or request IDs for existing fal-generated assets. Use fal-hosted image URLs only for standalone images. minItems: `1`. maxItems: `20`. |
| `cover_image_url` | No; body/guard requirements still apply | ['string', 'null'] | Optional fal-hosted cover image URL for the character format: `"uri"`. |
| `account` | No; body/guard requirements still apply | string | Exact private account key profile label, not an authenticated provider owner ID. |
| `confirm` | No; body/guard requirements still apply | boolean | Must be true for the requested mutation, paid work or private output file. |
| `payload` | No; body/guard requirements still apply | object | Complete native JSON body, mutually exclusive with flat body flags and payload_file. Use schema for union bodies. |
| `payload_file` | No; body/guard requirements still apply | string | Absolute regular non-symlink private JSON file, at most 1 MiB. Cannot mix with other body inputs. minLength: `1`. |

**input.reference_images**


**input.reference_images[]**

Native JSON value; inspect the full schema for validation.

**input.payload**

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `name` | No; body/guard requirements still apply | string | Character display name minLength: `1`. maxLength: `255`. |
| `description` | No; body/guard requirements still apply | string | Text description used for character semantic matching minLength: `1`. maxLength: `2000`. |
| `reference_images` | No; body/guard requirements still apply | array | Reference images for the character. Prefer vector IDs or request IDs for existing fal-generated assets. Use fal-hosted image URLs only for standalone images. minItems: `1`. maxItems: `20`. |
| `cover_image_url` | No; body/guard requirements still apply | ['string', 'null'] | Optional fal-hosted cover image URL for the character format: `"uri"`. |

**input.payload.reference_images**


**input.payload.reference_images[]**

Native JSON value; inspect the full schema for validation.

#### `get_asset_character`

Get asset character for the authenticated user's fal Assets library.

Policy: Read/helper; no explicit mutation approval.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `character_id` | Yes | string | Character collection ID minLength: `1`. |
| `account` | No; body/guard requirements still apply | string | Exact private account key profile label, not an authenticated provider owner ID. |

#### `delete_asset_character`

Delete asset character for the authenticated user's fal Assets library.

Policy: Confirmed operation; read-only hides and directly refuses it.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `character_id` | Yes | string | Character collection ID minLength: `1`. |
| `Idempotency_Key` | No; body/guard requirements still apply | string | Optional idempotency key for safe request retries |
| `account` | No; body/guard requirements still apply | string | Exact private account key profile label, not an authenticated provider owner ID. |
| `confirm` | No; body/guard requirements still apply | boolean | Must be true for the requested mutation, paid work or private output file. |

#### `favorite_asset_character`

Favorite an asset character for the authenticated user's fal Assets library.

Policy: Confirmed operation; read-only hides and directly refuses it.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `character_id` | Yes | string | Character collection ID minLength: `1`. |
| `Idempotency_Key` | No; body/guard requirements still apply | string | Optional idempotency key for safe request retries |
| `account` | No; body/guard requirements still apply | string | Exact private account key profile label, not an authenticated provider owner ID. |
| `confirm` | No; body/guard requirements still apply | boolean | Must be true for the requested mutation, paid work or private output file. |

#### `unfavorite_asset_character`

Unfavorite an asset character for the authenticated user's fal Assets library.

Policy: Confirmed operation; read-only hides and directly refuses it.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `character_id` | Yes | string | Character collection ID minLength: `1`. |
| `Idempotency_Key` | No; body/guard requirements still apply | string | Optional idempotency key for safe request retries |
| `account` | No; body/guard requirements still apply | string | Exact private account key profile label, not an authenticated provider owner ID. |
| `confirm` | No; body/guard requirements still apply | boolean | Must be true for the requested mutation, paid work or private output file. |

#### `list_asset_tags`

List asset tags for the authenticated user's fal Assets library.

Policy: Read/helper; no explicit mutation approval.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `account` | No; body/guard requirements still apply | string | Exact private account key profile label, not an authenticated provider owner ID. |

#### `create_asset_tag`

Create asset tag for the authenticated user's fal Assets library.

Policy: Confirmed operation; read-only hides and directly refuses it.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `Idempotency_Key` | No; body/guard requirements still apply | string | Optional idempotency key for safe request retries |
| `name` | No; body/guard requirements still apply | string | Tag name minLength: `1`. maxLength: `50`. |
| `account` | No; body/guard requirements still apply | string | Exact private account key profile label, not an authenticated provider owner ID. |
| `confirm` | No; body/guard requirements still apply | boolean | Must be true for the requested mutation, paid work or private output file. |
| `payload` | No; body/guard requirements still apply | object | Complete native JSON body, mutually exclusive with flat body flags and payload_file. Use schema for union bodies. |
| `payload_file` | No; body/guard requirements still apply | string | Absolute regular non-symlink private JSON file, at most 1 MiB. Cannot mix with other body inputs. minLength: `1`. |

**input.payload**

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `name` | Yes | string | Tag name minLength: `1`. maxLength: `50`. |

#### `set_asset_tags_for_asset`

Set tags for an asset. Provide a request ID or vector ID; unresolved references are materialized before tag state is added.

Policy: Confirmed operation; read-only hides and directly refuses it.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `Idempotency_Key` | No; body/guard requirements still apply | string | Optional idempotency key for safe request retries |
| `request_id` | No; body/guard requirements still apply | string | Request ID to save as an asset before mutating minLength: `1`. |
| `vector_id` | No; body/guard requirements still apply | string | Vector ID to save as an asset before mutating minLength: `1`. |
| `tag_ids` | No; body/guard requirements still apply | array | Full replacement set of tag IDs |
| `account` | No; body/guard requirements still apply | string | Exact private account key profile label, not an authenticated provider owner ID. |
| `confirm` | No; body/guard requirements still apply | boolean | Must be true for the requested mutation, paid work or private output file. |
| `payload` | No; body/guard requirements still apply | object | Complete native JSON body, mutually exclusive with flat body flags and payload_file. Use schema for union bodies. |
| `payload_file` | No; body/guard requirements still apply | string | Absolute regular non-symlink private JSON file, at most 1 MiB. Cannot mix with other body inputs. minLength: `1`. |

**input.tag_ids**


**input.tag_ids[]**

Native JSON value; inspect the full schema for validation.

**input.payload**

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `request_id` | No; body/guard requirements still apply | string | Request ID to save as an asset before mutating minLength: `1`. |
| `vector_id` | No; body/guard requirements still apply | string | Vector ID to save as an asset before mutating minLength: `1`. |
| `tag_ids` | Yes | array | Full replacement set of tag IDs |

**input.payload.tag_ids**


**input.payload.tag_ids[]**

Native JSON value; inspect the full schema for validation.

#### `update_asset_tag`

Update asset tag for the authenticated user's fal Assets library.

Policy: Confirmed operation; read-only hides and directly refuses it.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `tag_id` | Yes | string | Tag ID minLength: `1`. |
| `Idempotency_Key` | No; body/guard requirements still apply | string | Optional idempotency key for safe request retries |
| `name` | No; body/guard requirements still apply | string | Tag name minLength: `1`. maxLength: `50`. |
| `account` | No; body/guard requirements still apply | string | Exact private account key profile label, not an authenticated provider owner ID. |
| `confirm` | No; body/guard requirements still apply | boolean | Must be true for the requested mutation, paid work or private output file. |
| `payload` | No; body/guard requirements still apply | object | Complete native JSON body, mutually exclusive with flat body flags and payload_file. Use schema for union bodies. |
| `payload_file` | No; body/guard requirements still apply | string | Absolute regular non-symlink private JSON file, at most 1 MiB. Cannot mix with other body inputs. minLength: `1`. |

**input.payload**

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `name` | No; body/guard requirements still apply | string | Tag name minLength: `1`. maxLength: `50`. |

#### `delete_asset_tag`

Delete asset tag for the authenticated user's fal Assets library.

Policy: Confirmed operation; read-only hides and directly refuses it.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `tag_id` | Yes | string | Tag ID minLength: `1`. |
| `Idempotency_Key` | No; body/guard requirements still apply | string | Optional idempotency key for safe request retries |
| `account` | No; body/guard requirements still apply | string | Exact private account key profile label, not an authenticated provider owner ID. |
| `confirm` | No; body/guard requirements still apply | boolean | Must be true for the requested mutation, paid work or private output file. |

#### `upload_asset`

Upload asset for the authenticated user's fal Assets library.

Policy: Confirmed operation; read-only hides and directly refuses it.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `Idempotency_Key` | No; body/guard requirements still apply | string | Optional idempotency key for safe request retries |
| `url` | No; body/guard requirements still apply | string | fal-hosted media URL to ingest into the asset library format: `"uri"`. |
| `type` | No; body/guard requirements still apply | string | Media type for the uploaded asset enum: `["image", "video", "audio", "3d"]`. |
| `prompt` | No; body/guard requirements still apply | ['string', 'null'] | Optional caller-provided caption or description to index with the uploaded asset minLength: `1`. maxLength: `2000`. |
| `collection_id` | No; body/guard requirements still apply | ['string', 'null'] | Optional manual collection ID to add the uploaded asset to |
| `favorite` | No; body/guard requirements still apply | boolean | Whether to favorite the uploaded asset immediately default: `false`. |
| `tag_ids` | No; body/guard requirements still apply | array | Tag IDs to assign to the uploaded asset default: `[]`. |
| `account` | No; body/guard requirements still apply | string | Exact private account key profile label, not an authenticated provider owner ID. |
| `confirm` | No; body/guard requirements still apply | boolean | Must be true for the requested mutation, paid work or private output file. |
| `payload` | No; body/guard requirements still apply | object | Complete native JSON body, mutually exclusive with flat body flags and payload_file. Use schema for union bodies. |
| `payload_file` | No; body/guard requirements still apply | string | Absolute regular non-symlink private JSON file, at most 1 MiB. Cannot mix with other body inputs. minLength: `1`. |

**input.tag_ids**


**input.tag_ids[]**

Native JSON value; inspect the full schema for validation.

**input.payload**

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `url` | Yes | string | fal-hosted media URL to ingest into the asset library format: `"uri"`. |
| `type` | Yes | string | Media type for the uploaded asset enum: `["image", "video", "audio", "3d"]`. |
| `prompt` | No; body/guard requirements still apply | ['string', 'null'] | Optional caller-provided caption or description to index with the uploaded asset minLength: `1`. maxLength: `2000`. |
| `collection_id` | No; body/guard requirements still apply | ['string', 'null'] | Optional manual collection ID to add the uploaded asset to |
| `favorite` | No; body/guard requirements still apply | boolean | Whether to favorite the uploaded asset immediately default: `false`. |
| `tag_ids` | No; body/guard requirements still apply | array | Tag IDs to assign to the uploaded asset default: `[]`. |

**input.payload.tag_ids**


**input.payload.tag_ids[]**

Native JSON value; inspect the full schema for validation.

#### `get_asset`

Get an asset document by vector ID from the authenticated user's fal Assets library. The vector may exist only in Turbopuffer; in that case the response returns the Turbopuffer document with empty local state.

Policy: Read/helper; no explicit mutation approval.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `vector_id` | Yes | string | Vector ID minLength: `1`. |
| `account` | No; body/guard requirements still apply | string | Exact private account key profile label, not an authenticated provider owner ID. |

#### `get_asset_lineage`

Get the derivation lineage of an asset by asset ID: the inputs it was generated from, the generation requests along the way, and any referenced characters, traversed recursively up to `depth` levels. Deleted or expired ancestors stay in the graph flagged as tombstones; inputs that were never captured appear as external inputs.

Policy: Read/helper; no explicit mutation approval.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `asset_id` | Yes | string | Asset ID minLength: `1`. |
| `depth` | No; body/guard requirements still apply | integer | Maximum traversal depth (levels of derivation edges) minimum: `1`. maximum: `5`. default: `5`. |
| `account` | No; body/guard requirements still apply | string | Exact private account key profile label, not an authenticated provider owner ID. |

#### `favorite_asset`

Favorite an asset. Provide a request ID or vector ID; unresolved references are materialized before favorite state is added.

Policy: Confirmed operation; read-only hides and directly refuses it.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `Idempotency_Key` | No; body/guard requirements still apply | string | Optional idempotency key for safe request retries |
| `request_id` | No; body/guard requirements still apply | string | Request ID to save as an asset before mutating minLength: `1`. |
| `vector_id` | No; body/guard requirements still apply | string | Vector ID to save as an asset before mutating minLength: `1`. |
| `account` | No; body/guard requirements still apply | string | Exact private account key profile label, not an authenticated provider owner ID. |
| `confirm` | No; body/guard requirements still apply | boolean | Must be true for the requested mutation, paid work or private output file. |
| `payload` | No; body/guard requirements still apply | object | Complete native JSON body, mutually exclusive with flat body flags and payload_file. Use schema for union bodies. |
| `payload_file` | No; body/guard requirements still apply | string | Absolute regular non-symlink private JSON file, at most 1 MiB. Cannot mix with other body inputs. minLength: `1`. |

**input.payload**

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `request_id` | No; body/guard requirements still apply | string | Request ID to save as an asset before mutating minLength: `1`. |
| `vector_id` | No; body/guard requirements still apply | string | Vector ID to save as an asset before mutating minLength: `1`. |

#### `unfavorite_asset`

Unfavorite an asset by request ID or vector ID.

Policy: Confirmed operation; read-only hides and directly refuses it.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `Idempotency_Key` | No; body/guard requirements still apply | string | Optional idempotency key for safe request retries |
| `request_id` | No; body/guard requirements still apply | string | Request ID to save as an asset before mutating minLength: `1`. |
| `vector_id` | No; body/guard requirements still apply | string | Vector ID to save as an asset before mutating minLength: `1`. |
| `account` | No; body/guard requirements still apply | string | Exact private account key profile label, not an authenticated provider owner ID. |
| `confirm` | No; body/guard requirements still apply | boolean | Must be true for the requested mutation, paid work or private output file. |
| `payload` | No; body/guard requirements still apply | object | Complete native JSON body, mutually exclusive with flat body flags and payload_file. Use schema for union bodies. |
| `payload_file` | No; body/guard requirements still apply | string | Absolute regular non-symlink private JSON file, at most 1 MiB. Cannot mix with other body inputs. minLength: `1`. |

**input.payload**

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `request_id` | No; body/guard requirements still apply | string | Request ID to save as an asset before mutating minLength: `1`. |
| `vector_id` | No; body/guard requirements still apply | string | Vector ID to save as an asset before mutating minLength: `1`. |

#### `list_asset_tags_for_asset`

List tags for an asset by vector ID. Vectors that have not been saved as assets return an empty tag list.

Policy: Read/helper; no explicit mutation approval.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `vector_id` | Yes | string | Vector ID minLength: `1`. |
| `account` | No; body/guard requirements still apply | string | Exact private account key profile label, not an authenticated provider owner ID. |

#### `assign_asset_tag`

Assign a tag to an asset. Provide a request ID or vector ID; unresolved references are materialized before tag state is added.

Policy: Confirmed operation; read-only hides and directly refuses it.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `tag_id` | Yes | string | Tag ID minLength: `1`. |
| `Idempotency_Key` | No; body/guard requirements still apply | string | Optional idempotency key for safe request retries |
| `request_id` | No; body/guard requirements still apply | string | Request ID to save as an asset before mutating minLength: `1`. |
| `vector_id` | No; body/guard requirements still apply | string | Vector ID to save as an asset before mutating minLength: `1`. |
| `account` | No; body/guard requirements still apply | string | Exact private account key profile label, not an authenticated provider owner ID. |
| `confirm` | No; body/guard requirements still apply | boolean | Must be true for the requested mutation, paid work or private output file. |
| `payload` | No; body/guard requirements still apply | object | Complete native JSON body, mutually exclusive with flat body flags and payload_file. Use schema for union bodies. |
| `payload_file` | No; body/guard requirements still apply | string | Absolute regular non-symlink private JSON file, at most 1 MiB. Cannot mix with other body inputs. minLength: `1`. |

**input.payload**

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `request_id` | No; body/guard requirements still apply | string | Request ID to save as an asset before mutating minLength: `1`. |
| `vector_id` | No; body/guard requirements still apply | string | Vector ID to save as an asset before mutating minLength: `1`. |

#### `unassign_asset_tag`

Unassign a tag from an asset by request ID or vector ID.

Policy: Confirmed operation; read-only hides and directly refuses it.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `tag_id` | Yes | string | Tag ID minLength: `1`. |
| `Idempotency_Key` | No; body/guard requirements still apply | string | Optional idempotency key for safe request retries |
| `request_id` | No; body/guard requirements still apply | string | Request ID to save as an asset before mutating minLength: `1`. |
| `vector_id` | No; body/guard requirements still apply | string | Vector ID to save as an asset before mutating minLength: `1`. |
| `account` | No; body/guard requirements still apply | string | Exact private account key profile label, not an authenticated provider owner ID. |
| `confirm` | No; body/guard requirements still apply | boolean | Must be true for the requested mutation, paid work or private output file. |
| `payload` | No; body/guard requirements still apply | object | Complete native JSON body, mutually exclusive with flat body flags and payload_file. Use schema for union bodies. |
| `payload_file` | No; body/guard requirements still apply | string | Absolute regular non-symlink private JSON file, at most 1 MiB. Cannot mix with other body inputs. minLength: `1`. |

**input.payload**

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `request_id` | No; body/guard requirements still apply | string | Request ID to save as an asset before mutating minLength: `1`. |
| `vector_id` | No; body/guard requirements still apply | string | Vector ID to save as an asset before mutating minLength: `1`. |

#### `get_storage_file_acl`

Returns the Access Control List currently applied to a fal CDN file.  The ACL consists of a default decision (`allow`, `forbid`, or `hide`) plus optional per-user rules that override the default. Rule users are returned as nicknames where possible.  **Authentication:** Required. The API key must have the `assets:read` permission.

Policy: Read/helper; no explicit mutation approval.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `url` | Yes | string | Full URL of the fal CDN file, as returned by the upload APIs (https://v3.fal.media/files/b/<id>/<filename>). Must not contain query parameters. format: `"uri"`. |
| `account` | No; body/guard requirements still apply | string | Exact private account key profile label, not an authenticated provider owner ID. |

#### `set_storage_file_acl`

Replaces the Access Control List of a fal CDN file.  The ACL consists of a default decision (`allow`, `forbid`, or `hide`) plus optional per-user rules that override the default. Rule users may be specified by nickname or user ID. Setting `default` to `allow` with no rules makes the file public; `forbid` or `hide` restricts it to the rules you provide.  Rules referencing users that do not exist are dropped. The response reflects the ACL actually applied, so verify it contains the rules you sent.  **Authentication:** Required. The API key must have the `assets:write` permission.

Policy: Confirmed operation; read-only hides and directly refuses it.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `url` | Yes | string | Full URL of the fal CDN file, as returned by the upload APIs (https://v3.fal.media/files/b/<id>/<filename>). Must not contain query parameters. format: `"uri"`. |
| `default` | No; body/guard requirements still apply | string | Fallback decision when no user-specific rule matches enum: `["allow", "forbid", "hide"]`. |
| `rules` | No; body/guard requirements still apply | array | User-specific overrides to the default decision default: `[]`. |
| `account` | No; body/guard requirements still apply | string | Exact private account key profile label, not an authenticated provider owner ID. |
| `confirm` | No; body/guard requirements still apply | boolean | Must be true for the requested mutation, paid work or private output file. |
| `payload` | No; body/guard requirements still apply | object | Complete native JSON body, mutually exclusive with flat body flags and payload_file. Use schema for union bodies. |
| `payload_file` | No; body/guard requirements still apply | string | Absolute regular non-symlink private JSON file, at most 1 MiB. Cannot mix with other body inputs. minLength: `1`. |

**input.rules**


**input.rules[]**

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `user` | Yes | string | User nickname or user ID the rule applies to minLength: `1`. |
| `decision` | Yes | string | Access decision applied to this user enum: `["allow", "forbid", "hide"]`. |

**input.payload**

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `default` | Yes | string | Fallback decision when no user-specific rule matches enum: `["allow", "forbid", "hide"]`. |
| `rules` | No; body/guard requirements still apply | array | User-specific overrides to the default decision default: `[]`. |

**input.payload.rules**


**input.payload.rules[]**

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `user` | Yes | string | User nickname or user ID the rule applies to minLength: `1`. |
| `decision` | Yes | string | Access decision applied to this user enum: `["allow", "forbid", "hide"]`. |

#### `sign_storage_file_url`

Creates a signed URL that grants temporary access to a fal CDN file, regardless of its ACL. Useful for sharing access-restricted files.  The signature is valid for `expiration_seconds` (up to 7 days).  **Authentication:** Required. The API key must have the `assets:read` permission.

Policy: Confirmed operation; read-only hides and directly refuses it.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `url` | Yes | string | Full URL of the fal CDN file, as returned by the upload APIs (https://v3.fal.media/files/b/<id>/<filename>). Must not contain query parameters. format: `"uri"`. |
| `expiration_seconds` | No; body/guard requirements still apply | integer | How long the signed URL stays valid, in seconds (max 7 days) minimum: `1`. maximum: `604800`. |
| `account` | No; body/guard requirements still apply | string | Exact private account key profile label, not an authenticated provider owner ID. |
| `confirm` | No; body/guard requirements still apply | boolean | Must be true for the requested mutation, paid work or private output file. |
| `payload` | No; body/guard requirements still apply | object | Complete native JSON body, mutually exclusive with flat body flags and payload_file. Use schema for union bodies. |
| `payload_file` | No; body/guard requirements still apply | string | Absolute regular non-symlink private JSON file, at most 1 MiB. Cannot mix with other body inputs. minLength: `1`. |
| `output_file` | Yes | string | Required absolute new owner-private file; signed credential URL is never echoed. minLength: `1`. |

**input.payload**

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `expiration_seconds` | Yes | integer | How long the signed URL stays valid, in seconds (max 7 days) minimum: `1`. maximum: `604800`. |

#### `get_storage_settings`

Returns the account-level storage lifecycle settings applied to newly uploaded fal CDN files:  - `expiration_duration_seconds`: how long files live before being   automatically deleted (null disables auto-expiration). - `initial_acl`: the default ACL applied to new uploads (null means the   system default, which is public).  Both fields are null when the account has never saved settings.  **Authentication:** Required. The API key must have the `account:settings:read` permission.

Policy: Read/helper; no explicit mutation approval.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `account` | No; body/guard requirements still apply | string | Exact private account key profile label, not an authenticated provider owner ID. |

#### `update_storage_settings`

Replaces the account-level storage lifecycle settings applied to newly uploaded fal CDN files. Omitted or null fields are cleared (reset to the system default), so always send the full desired configuration.  ACL rules referencing users that do not exist are dropped. The response reflects the settings actually saved, so verify it contains the rules you sent.  These are the same settings that the per-request `X-Fal-Object-Lifecycle-Preference` header overrides on individual requests.  **Authentication:** Required. The API key must have the `account:settings:write` permission.

Policy: Confirmed operation; read-only hides and directly refuses it.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `expiration_duration_seconds` | No; body/guard requirements still apply | ['integer', 'null'] | Seconds after which newly uploaded files automatically expire and are deleted. Null disables auto-expiration. minimum: `1`. |
| `initial_acl` | No; body/guard requirements still apply | ['object', 'null'] | Default ACL applied to newly uploaded files. Null uses the system default (public). |
| `account` | No; body/guard requirements still apply | string | Exact private account key profile label, not an authenticated provider owner ID. |
| `confirm` | No; body/guard requirements still apply | boolean | Must be true for the requested mutation, paid work or private output file. |
| `payload` | No; body/guard requirements still apply | object | Complete native JSON body, mutually exclusive with flat body flags and payload_file. Use schema for union bodies. |
| `payload_file` | No; body/guard requirements still apply | string | Absolute regular non-symlink private JSON file, at most 1 MiB. Cannot mix with other body inputs. minLength: `1`. |

**input.initial_acl**

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `default` | Yes | string | Fallback decision when no user-specific rule matches enum: `["allow", "forbid", "hide"]`. |
| `rules` | No; body/guard requirements still apply | array | User-specific overrides to the default decision default: `[]`. |

**input.initial_acl.rules**


**input.initial_acl.rules[]**

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `user` | Yes | string | User nickname or user ID the rule applies to minLength: `1`. |
| `decision` | Yes | string | Access decision applied to this user enum: `["allow", "forbid", "hide"]`. |

**input.payload**

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `expiration_duration_seconds` | No; body/guard requirements still apply | ['integer', 'null'] | Seconds after which newly uploaded files automatically expire and are deleted. Null disables auto-expiration. minimum: `1`. |
| `initial_acl` | No; body/guard requirements still apply | ['object', 'null'] | Default ACL applied to newly uploaded files. Null uses the system default (public). |

**input.payload.initial_acl**

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `default` | Yes | string | Fallback decision when no user-specific rule matches enum: `["allow", "forbid", "hide"]`. |
| `rules` | No; body/guard requirements still apply | array | User-specific overrides to the default decision default: `[]`. |

**input.payload.initial_acl.rules**


**input.payload.initial_acl.rules[]**

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `user` | Yes | string | User nickname or user ID the rule applies to minLength: `1`. |
| `decision` | Yes | string | Access decision applied to this user enum: `["allow", "forbid", "hide"]`. |

#### `get_account_billing`

Returns billing information for the authenticated account. Use the `expand` parameter to include additional details.  **Expandable Fields:** - `credits` :  Current credit balance and currency  **Common Use Cases:** - Monitor available credit balance programmatically - Display balance in custom dashboards

Policy: Read/helper; no explicit mutation approval.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `expand` | No; body/guard requirements still apply | JSON | Data to include in the response. Use 'credits' to include current credit balance. |
| `account` | No; body/guard requirements still apply | string | Exact private account key profile label, not an authenticated provider owner ID. |

**input.expand**


**input.expand anyOf branch 1**

Native JSON value; inspect the full schema for validation.

**input.expand anyOf branch 2**


**input.expand.anyOf2[]**

Native JSON value; inspect the full schema for validation.

#### `get_organization_teams`

Returns the list of teams in your organization with their details.  > **Availability:** This endpoint is available to enterprise customers with organizations enabled. Contact your account team or support@fal.ai to request access.  Must be called with an admin API key on the organization's root team.  **Key Features:** - List all teams within the organization - Identify the organization's root team via `is_org_root` - View team usernames and display names  See [fal.ai docs](https://fal.ai/docs/documentation) for more details.

Policy: Read/helper; no explicit mutation approval.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `account` | No; body/guard requirements still apply | string | Exact private account key profile label, not an authenticated provider owner ID. |

#### `get_organization_usage`

Returns paginated usage records across all teams and product lines in your organization, with each record attributed to a specific team via the `username` field and a product line via the `product` field.  Covers all three fal product lines: - `model_apis` :  model API endpoint calls (e.g. `fal-ai/flux/dev`) - `serverless` :  fal Serverless SDK billing - `compute` :  fal Compute (raw instance time)  > **Availability:** This endpoint is available to enterprise customers with organizations enabled. Contact your account team or support@fal.ai to request access.  Must be called with an admin API key on the organization's root team.  **Key Features:** - Organization-wide usage data across all teams and products - Filter by team(s) (`team_username`), product line (`product`), endpoint, API key (`api_key_id`), date range, and auth method - Per-team and per-product attribution on every usage record - Paginated time series and aggregate summary views  See [fal.ai docs](https://fal.ai/docs/documentation) for more details.

Policy: Read/helper; no explicit mutation approval.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `limit` | No; body/guard requirements still apply | integer | Maximum number of items to return. Actual maximum depends on query type and expansion parameters. minimum: `1`. |
| `cursor` | No; body/guard requirements still apply | string | Pagination cursor from previous response. Encodes the page number. |
| `start` | No; body/guard requirements still apply | JSON | Start date in ISO8601 format (e.g., '2025-01-01T00:00:00Z' or '2025-01-01'). Defaults to 24 hours ago. |
| `end` | No; body/guard requirements still apply | JSON | End date in ISO8601 format, exclusive (e.g., '2025-02-01T00:00:00Z' or '2025-02-01'). Data up to but not including this timestamp is returned. Defaults to current time. |
| `timezone` | No; body/guard requirements still apply | string | Timezone for date aggregation and boundaries. All timestamps in responses are in UTC, but this controls how dates are bucketed. default: `"UTC"`. |
| `timeframe` | No; body/guard requirements still apply | string | Aggregation timeframe for timeseries data (auto-detected from date range if not specified). Auto-detection uses: minute (<2h), hour (<2d), day (<64d), week (<183d), month (>=183d). enum: `["minute", "hour", "day", "week", "month"]`. |
| `bound_to_timeframe` | No; body/guard requirements still apply | string | Whether to adjust start/end dates to align with timeframe boundaries and use exclusive end. Defaults to true. When true, dates are aligned to the start of the timeframe period (e.g., start of day) and end is made exclusive (e.g., start of next day). When false, uses exact dates provided. enum: `["true", "false"]`. default: `"true"`. |
| `endpoint_id` | No; body/guard requirements still apply | JSON | Filter by specific endpoint ID(s). Accepts 1-50 endpoint IDs. Supports comma-separated values: ?endpoint_id=model1,model2 or array syntax: ?endpoint_id=model1&endpoint_id=model2 |
| `api_key_id` | No; body/guard requirements still apply | JSON | Filter by specific API key ID(s). Accepts 1-50 key IDs. Supports comma-separated values: ?api_key_id=key1,key2 or array syntax: ?api_key_id=key1&api_key_id=key2 |
| `team_username` | No; body/guard requirements still apply | JSON | Filter by one or more team usernames within the organization. Accepts a comma-separated list or repeated parameter. If not provided, returns usage across all teams. |
| `product` | No; body/guard requirements still apply | JSON | Restrict results to one or more product lines. Accepts a comma-separated list or repeated parameter. Defaults to all three (model_apis, serverless, compute). |
| `expand` | No; body/guard requirements still apply | JSON | Data to include in the response. Use 'time_series' for time-bucketed data, 'summary' for aggregate statistics, 'auth_method' for a resolved authentication method label, and 'auth_method_structured' for a machine-readable auth method object (detail, api_key_id, login_username). At least one of 'time_series' or 'summary' is required. default: `["time_series"]`. |
| `account` | No; body/guard requirements still apply | string | Exact private account key profile label, not an authenticated provider owner ID. |

**input.start**


**input.start anyOf branch 1**

Native JSON value; inspect the full schema for validation.

**input.start anyOf branch 2**

Native JSON value; inspect the full schema for validation.

**input.end**


**input.end anyOf branch 1**

Native JSON value; inspect the full schema for validation.

**input.end anyOf branch 2**

Native JSON value; inspect the full schema for validation.

**input.endpoint_id**


**input.endpoint_id anyOf branch 1**

Native JSON value; inspect the full schema for validation.

**input.endpoint_id anyOf branch 2**


**input.endpoint_id.anyOf2[]**

Native JSON value; inspect the full schema for validation.

**input.api_key_id**


**input.api_key_id anyOf branch 1**

Native JSON value; inspect the full schema for validation.

**input.api_key_id anyOf branch 2**


**input.api_key_id.anyOf2[]**

Native JSON value; inspect the full schema for validation.

**input.team_username**


**input.team_username anyOf branch 1**

Native JSON value; inspect the full schema for validation.

**input.team_username anyOf branch 2**


**input.team_username.anyOf2[]**

Native JSON value; inspect the full schema for validation.

**input.product**


**input.product anyOf branch 1**

Native JSON value; inspect the full schema for validation.

**input.product anyOf branch 2**


**input.product.anyOf2[]**

Native JSON value; inspect the full schema for validation.

**input.expand**


**input.expand anyOf branch 1**

Native JSON value; inspect the full schema for validation.

**input.expand anyOf branch 2**


**input.expand.anyOf2[]**

Native JSON value; inspect the full schema for validation.

#### `get_model_info`

Exact current catalog lookup with OpenAPI expansion. No generation or inferred model defaults. Schema may be unavailable; inspect actual native fields.

Policy: Read/helper; no explicit mutation approval.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `model_id` | Yes | string | Exact current catalog endpoint ID. Never guess model names or parameter mappings. minLength: `3`. maxLength: `240`. |
| `account` | No; body/guard requirements still apply | string | Exact configured isolated API-key profile label. |

#### `run_model`

Confirmed paid model request after current native input-schema validation. Exact model_id/input required; image/video commands do not invent fields or choose a default. Queue submissions return receipt only; synchronous timeout may leave an unknown paid outcome. No retry or polling.

Policy: Confirmed operation; read-only hides and directly refuses it.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `model_id` | Yes | string | Exact current catalog endpoint ID. Never guess model names or parameter mappings. minLength: `3`. maxLength: `240`. |
| `input` | Yes | object | Exact native model inputs. Fetched current model JSON schema validates these before a paid request; no guessed prompt/image/duration adapters. |
| `lifecycle` | No; body/guard requirements still apply | object | Native CDN expiry/ACL preference. Omit to use account defaults. null expiration means no expiry; default CDN access may be public. Unknown nicknames may be dropped by provider. |
| `store_io` | No; body/guard requirements still apply | boolean | Local default false sends X-Fal-Store-IO:0. true allows provider JSON payload storage; CDN media retention/ACL is separate. default: `false`. |
| `account` | No; body/guard requirements still apply | string | Exact configured isolated API-key profile label. |
| `confirm` | No; body/guard requirements still apply | boolean | Explicit approval for the requested paid work, mutation, upload or private file. |

**input.lifecycle**

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `expiration_duration_seconds` | No; body/guard requirements still apply | ['integer', 'null'] | Native field; use the reviewed provider reference. minimum: `1`. |
| `initial_acl` | No; body/guard requirements still apply | object | Native field; use the reviewed provider reference. |

**input.lifecycle.initial_acl**

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `default` | Yes | string | Native field; use the reviewed provider reference. enum: `["allow", "forbid", "hide"]`. |
| `rules` | No; body/guard requirements still apply | array | Native field; use the reviewed provider reference. maxItems: `100`. |

**input.lifecycle.initial_acl.rules**


**input.lifecycle.initial_acl.rules[]**

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `user` | Yes | string | Native field; use the reviewed provider reference. minLength: `1`. |
| `decision` | Yes | string | Native field; use the reviewed provider reference. enum: `["allow", "forbid", "hide"]`. |

#### `submit_job`

Confirmed paid model request after current native input-schema validation. Exact model_id/input required; image/video commands do not invent fields or choose a default. Queue submissions return receipt only; synchronous timeout may leave an unknown paid outcome. No retry or polling.

Policy: Confirmed operation; read-only hides and directly refuses it.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `model_id` | Yes | string | Exact current catalog endpoint ID. Never guess model names or parameter mappings. minLength: `3`. maxLength: `240`. |
| `input` | Yes | object | Exact native model inputs. Fetched current model JSON schema validates these before a paid request; no guessed prompt/image/duration adapters. |
| `lifecycle` | No; body/guard requirements still apply | object | Native CDN expiry/ACL preference. Omit to use account defaults. null expiration means no expiry; default CDN access may be public. Unknown nicknames may be dropped by provider. |
| `store_io` | No; body/guard requirements still apply | boolean | Local default false sends X-Fal-Store-IO:0. true allows provider JSON payload storage; CDN media retention/ACL is separate. default: `false`. |
| `account` | No; body/guard requirements still apply | string | Exact configured isolated API-key profile label. |
| `confirm` | No; body/guard requirements still apply | boolean | Explicit approval for the requested paid work, mutation, upload or private file. |

**input.lifecycle**

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `expiration_duration_seconds` | No; body/guard requirements still apply | ['integer', 'null'] | Native field; use the reviewed provider reference. minimum: `1`. |
| `initial_acl` | No; body/guard requirements still apply | object | Native field; use the reviewed provider reference. |

**input.lifecycle.initial_acl**

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `default` | Yes | string | Native field; use the reviewed provider reference. enum: `["allow", "forbid", "hide"]`. |
| `rules` | No; body/guard requirements still apply | array | Native field; use the reviewed provider reference. maxItems: `100`. |

**input.lifecycle.initial_acl.rules**


**input.lifecycle.initial_acl.rules[]**

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `user` | Yes | string | Native field; use the reviewed provider reference. minLength: `1`. |
| `decision` | Yes | string | Native field; use the reviewed provider reference. enum: `["allow", "forbid", "hide"]`. |

#### `generate_image`

Confirmed paid model request after current native input-schema validation. Exact model_id/input required; image/video commands do not invent fields or choose a default. Queue submissions return receipt only; synchronous timeout may leave an unknown paid outcome. No retry or polling.

Policy: Confirmed operation; read-only hides and directly refuses it.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `model_id` | Yes | string | Exact current catalog endpoint ID. Never guess model names or parameter mappings. minLength: `3`. maxLength: `240`. |
| `input` | Yes | object | Exact native model inputs. Fetched current model JSON schema validates these before a paid request; no guessed prompt/image/duration adapters. |
| `lifecycle` | No; body/guard requirements still apply | object | Native CDN expiry/ACL preference. Omit to use account defaults. null expiration means no expiry; default CDN access may be public. Unknown nicknames may be dropped by provider. |
| `store_io` | No; body/guard requirements still apply | boolean | Local default false sends X-Fal-Store-IO:0. true allows provider JSON payload storage; CDN media retention/ACL is separate. default: `false`. |
| `account` | No; body/guard requirements still apply | string | Exact configured isolated API-key profile label. |
| `confirm` | No; body/guard requirements still apply | boolean | Explicit approval for the requested paid work, mutation, upload or private file. |

**input.lifecycle**

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `expiration_duration_seconds` | No; body/guard requirements still apply | ['integer', 'null'] | Native field; use the reviewed provider reference. minimum: `1`. |
| `initial_acl` | No; body/guard requirements still apply | object | Native field; use the reviewed provider reference. |

**input.lifecycle.initial_acl**

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `default` | Yes | string | Native field; use the reviewed provider reference. enum: `["allow", "forbid", "hide"]`. |
| `rules` | No; body/guard requirements still apply | array | Native field; use the reviewed provider reference. maxItems: `100`. |

**input.lifecycle.initial_acl.rules**


**input.lifecycle.initial_acl.rules[]**

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `user` | Yes | string | Native field; use the reviewed provider reference. minLength: `1`. |
| `decision` | Yes | string | Native field; use the reviewed provider reference. enum: `["allow", "forbid", "hide"]`. |

#### `generate_video`

Confirmed paid model request after current native input-schema validation. Exact model_id/input required; image/video commands do not invent fields or choose a default. Queue submissions return receipt only; synchronous timeout may leave an unknown paid outcome. No retry or polling.

Policy: Confirmed operation; read-only hides and directly refuses it.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `model_id` | Yes | string | Exact current catalog endpoint ID. Never guess model names or parameter mappings. minLength: `3`. maxLength: `240`. |
| `input` | Yes | object | Exact native model inputs. Fetched current model JSON schema validates these before a paid request; no guessed prompt/image/duration adapters. |
| `lifecycle` | No; body/guard requirements still apply | object | Native CDN expiry/ACL preference. Omit to use account defaults. null expiration means no expiry; default CDN access may be public. Unknown nicknames may be dropped by provider. |
| `store_io` | No; body/guard requirements still apply | boolean | Local default false sends X-Fal-Store-IO:0. true allows provider JSON payload storage; CDN media retention/ACL is separate. default: `false`. |
| `account` | No; body/guard requirements still apply | string | Exact configured isolated API-key profile label. |
| `confirm` | No; body/guard requirements still apply | boolean | Explicit approval for the requested paid work, mutation, upload or private file. |

**input.lifecycle**

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `expiration_duration_seconds` | No; body/guard requirements still apply | ['integer', 'null'] | Native field; use the reviewed provider reference. minimum: `1`. |
| `initial_acl` | No; body/guard requirements still apply | object | Native field; use the reviewed provider reference. |

**input.lifecycle.initial_acl**

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `default` | Yes | string | Native field; use the reviewed provider reference. enum: `["allow", "forbid", "hide"]`. |
| `rules` | No; body/guard requirements still apply | array | Native field; use the reviewed provider reference. maxItems: `100`. |

**input.lifecycle.initial_acl.rules**


**input.lifecycle.initial_acl.rules[]**

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `user` | Yes | string | Native field; use the reviewed provider reference. minLength: `1`. |
| `decision` | Yes | string | Native field; use the reviewed provider reference. enum: `["allow", "forbid", "hide"]`. |

#### `get_job_status`

One read using the SDK-compatible owner/app root, not the full model subpath. No auto-polling, paid re-submission or arbitrary status URL.

Policy: Read/helper; no explicit mutation approval.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `model_id` | Yes | string | Exact current catalog endpoint ID. Never guess model names or parameter mappings. minLength: `3`. maxLength: `240`. |
| `request_id` | Yes | string | Exact queue receipt ID; status/result/cancel use its owner/app root, without inference subpaths. pattern: `"^[A-Za-z0-9_-]{1,128}$"`. |
| `logs` | No; body/guard requirements still apply | boolean | Include native provider logs only when requested. default: `false`. |
| `account` | No; body/guard requirements still apply | string | Exact configured isolated API-key profile label. |

#### `get_job_result`

One result read using the receipt/model root. No wait loop, media download, re-submission or auto-upload. Signed credential URLs are redacted; ordinary output media URLs remain account data.

Policy: Read/helper; no explicit mutation approval.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `model_id` | Yes | string | Exact current catalog endpoint ID. Never guess model names or parameter mappings. minLength: `3`. maxLength: `240`. |
| `request_id` | Yes | string | Exact queue receipt ID; status/result/cancel use its owner/app root, without inference subpaths. pattern: `"^[A-Za-z0-9_-]{1,128}$"`. |
| `account` | No; body/guard requirements still apply | string | Exact configured isolated API-key profile label. |

#### `cancel_job`

Confirmed native cancellation request. Cancellation receipt is not proof processing stopped or credits were refunded; current provider state controls eligibility. No retry.

Policy: Confirmed operation; read-only hides and directly refuses it.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `model_id` | Yes | string | Exact current catalog endpoint ID. Never guess model names or parameter mappings. minLength: `3`. maxLength: `240`. |
| `request_id` | Yes | string | Exact queue receipt ID; status/result/cancel use its owner/app root, without inference subpaths. pattern: `"^[A-Za-z0-9_-]{1,128}$"`. |
| `account` | No; body/guard requirements still apply | string | Exact configured isolated API-key profile label. |
| `confirm` | No; body/guard requirements still apply | boolean | Explicit approval for the requested paid work, mutation, upload or private file. |

#### `upload_file`

Confirmed selected absolute regular non-symlink local file, 1 byte–20 MiB. Uses pinned SDK upload-initiation protocol then a credential-free HTTPS fal.media PUT with redirects refused. No remote URL ingestion, base64 model output, multipart retries or automatic generation.

Policy: Confirmed operation; read-only hides and directly refuses it.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `file_path` | Yes | string | Absolute selected local media file, regular/non-symlink, 1 byte–20 MiB. minLength: `1`. |
| `content_type` | Yes | string | Plain MIME type matching the selected media. pattern: `"^[a-zA-Z0-9.+-]+/[a-zA-Z0-9.+-]+$"`. |
| `lifecycle` | No; body/guard requirements still apply | object | Native CDN expiry/ACL preference. Omit to use account defaults. null expiration means no expiry; default CDN access may be public. Unknown nicknames may be dropped by provider. |
| `account` | No; body/guard requirements still apply | string | Exact configured isolated API-key profile label. |
| `confirm` | No; body/guard requirements still apply | boolean | Explicit approval for the requested paid work, mutation, upload or private file. |

**input.lifecycle**

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `expiration_duration_seconds` | No; body/guard requirements still apply | ['integer', 'null'] | Native field; use the reviewed provider reference. minimum: `1`. |
| `initial_acl` | No; body/guard requirements still apply | object | Native field; use the reviewed provider reference. |

**input.lifecycle.initial_acl**

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `default` | Yes | string | Native field; use the reviewed provider reference. enum: `["allow", "forbid", "hide"]`. |
| `rules` | No; body/guard requirements still apply | array | Native field; use the reviewed provider reference. maxItems: `100`. |

**input.lifecycle.initial_acl.rules**


**input.lifecycle.initial_acl.rules[]**

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `user` | Yes | string | Native field; use the reviewed provider reference. minLength: `1`. |
| `decision` | Yes | string | Native field; use the reviewed provider reference. enum: `["allow", "forbid", "hide"]`. |

#### `list_accounts`

Local labels/default/auth method only. No keys, token paths, real provider identities or network request.

Policy: Read/helper; no explicit mutation approval.

Native JSON value; inspect the full schema for validation.

#### `get_operation_schema`

Local current native method/path/query/header/body schema and exact provenance. No credential or provider request.

Policy: Read/helper; no explicit mutation approval.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `operation` | Yes | string | Native field; use the reviewed provider reference. enum: `["search_models", "get_pricing", "estimate_pricing", "get_usage", "get_analytics", "get_billing_events", "delete_request_payloads", "list_requests_by_endpoint", "search_requests", "list_workflows", "create_workflow", "get_workflow", "list_assets", "list_asset_collections", "create_asset_collection", "get_asset_collection", "update_asset_collection", "delete_asset_collection", "get_asset_collection_hierarchy", "favorite_asset_collection", "unfavorite_asset_collection", "move_asset_collection", "list_asset_collection_assets", "add_asset_to_collection", "remove_asset_from_collection", "list_asset_characters", "create_asset_character", "update_asset_character", "get_asset_character", "delete_asset_character", "favorite_asset_character", "unfavorite_asset_character", "list_asset_tags", "create_asset_tag", "set_asset_tags_for_asset", "update_asset_tag", "delete_asset_tag", "upload_asset", "get_asset", "get_asset_lineage", "favorite_asset", "unfavorite_asset", "list_asset_tags_for_asset", "assign_asset_tag", "unassign_asset_tag", "get_storage_file_acl", "set_storage_file_acl", "sign_storage_file_url", "get_storage_settings", "update_storage_settings", "get_account_billing", "get_organization_teams", "get_organization_usage"]`. |

#### `preview_generation_batch`

Read-only current schema validation and native unit-pricing lookup for all requested async jobs. Hash binds ordered exact inputs/lifecycle/store-IO/profile label/current schemas/unit quotes. Unit pricing is not final cost or a spending cap. No generation, file write or key ownership validation.

Policy: Read/helper; no explicit mutation approval.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `tasks` | Yes | array | One to ten ordered async generation payloads. CLI repeats --tasks individual JSON objects. One job can produce several outputs; this is not a cost or output-count budget. minItems: `1`. maxItems: `10`. |
| `account` | No; body/guard requirements still apply | string | Exact configured isolated API-key profile label. |

**input.tasks**


**input.tasks[]**

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `model_id` | Yes | string | Exact current catalog endpoint ID. Never guess model names or parameter mappings. minLength: `3`. maxLength: `240`. |
| `input` | Yes | object | Exact native model inputs. Fetched current model JSON schema validates these before a paid request; no guessed prompt/image/duration adapters. |
| `lifecycle` | No; body/guard requirements still apply | object | Native CDN expiry/ACL preference. Omit to use account defaults. null expiration means no expiry; default CDN access may be public. Unknown nicknames may be dropped by provider. |
| `store_io` | No; body/guard requirements still apply | boolean | Local default false sends X-Fal-Store-IO:0. true allows provider JSON payload storage; CDN media retention/ACL is separate. default: `false`. |

**input.tasks[].lifecycle**

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `expiration_duration_seconds` | No; body/guard requirements still apply | ['integer', 'null'] | Native field; use the reviewed provider reference. minimum: `1`. |
| `initial_acl` | No; body/guard requirements still apply | object | Native field; use the reviewed provider reference. |

**input.tasks[].lifecycle.initial_acl**

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `default` | Yes | string | Native field; use the reviewed provider reference. enum: `["allow", "forbid", "hide"]`. |
| `rules` | No; body/guard requirements still apply | array | Native field; use the reviewed provider reference. maxItems: `100`. |

**input.tasks[].lifecycle.initial_acl.rules**


**input.tasks[].lifecycle.initial_acl.rules[]**

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `user` | Yes | string | Native field; use the reviewed provider reference. minLength: `1`. |
| `decision` | Yes | string | Native field; use the reviewed provider reference. enum: `["allow", "forbid", "hide"]`. |

#### `submit_generation_batch`

Confirmed one-to-ten async jobs. Refetch all current schemas/unit quotes and validate all before first paid submission; refuse changed hash. Submit sequentially, stop on first failure, report known request IDs/failed and unattempted indices. No polling, retries, rollback, continuation or budget guarantee.

Policy: Confirmed operation; read-only hides and directly refuses it.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `tasks` | Yes | array | One to ten ordered async generation payloads. CLI repeats --tasks individual JSON objects. One job can produce several outputs; this is not a cost or output-count budget. minItems: `1`. maxItems: `10`. |
| `account` | No; body/guard requirements still apply | string | Exact configured isolated API-key profile label. |
| `confirm` | No; body/guard requirements still apply | boolean | Explicit approval for the requested paid work, mutation, upload or private file. |
| `review_sha256` | Yes | string | Native field; use the reviewed provider reference. pattern: `"^[a-f0-9]{64}$"`. |

**input.tasks**


**input.tasks[]**

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `model_id` | Yes | string | Exact current catalog endpoint ID. Never guess model names or parameter mappings. minLength: `3`. maxLength: `240`. |
| `input` | Yes | object | Exact native model inputs. Fetched current model JSON schema validates these before a paid request; no guessed prompt/image/duration adapters. |
| `lifecycle` | No; body/guard requirements still apply | object | Native CDN expiry/ACL preference. Omit to use account defaults. null expiration means no expiry; default CDN access may be public. Unknown nicknames may be dropped by provider. |
| `store_io` | No; body/guard requirements still apply | boolean | Local default false sends X-Fal-Store-IO:0. true allows provider JSON payload storage; CDN media retention/ACL is separate. default: `false`. |

**input.tasks[].lifecycle**

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `expiration_duration_seconds` | No; body/guard requirements still apply | ['integer', 'null'] | Native field; use the reviewed provider reference. minimum: `1`. |
| `initial_acl` | No; body/guard requirements still apply | object | Native field; use the reviewed provider reference. |

**input.tasks[].lifecycle.initial_acl**

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `default` | Yes | string | Native field; use the reviewed provider reference. enum: `["allow", "forbid", "hide"]`. |
| `rules` | No; body/guard requirements still apply | array | Native field; use the reviewed provider reference. maxItems: `100`. |

**input.tasks[].lifecycle.initial_acl.rules**


**input.tasks[].lifecycle.initial_acl.rules[]**

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `user` | Yes | string | Native field; use the reviewed provider reference. minLength: `1`. |
| `decision` | Yes | string | Native field; use the reviewed provider reference. enum: `["allow", "forbid", "hide"]`. |

##### Native `search_models`: GET /models

Unified endpoint for discovering model endpoints. Supports three usage modes:  **1. List Mode** (no parameters): Paginated list of all available model endpoints with minimal metadata.  **2. Find Mode** (`endpoint_id` parameter): Retrieve specific model endpoint(s) by ID. Supports single or multiple IDs.  **3. Search Mode** (search parameters): Filter models by free-text query, category, or status.  **Expansion:** Use `expand` to include additional data in each model object: - `openapi-3.0` :  full OpenAPI 3.0 schema in the `openapi` field - `enterprise_status` :  enterprise readiness status (`ready` or `pending`) in the `enterprise_status` field  **Examples of `endpoint_id` values:** - `fal-ai/flux/dev` - `fal-ai/wan/v2.2-a14b/text-to-video` - `fal-ai/minimax/video-01/image-to-video` - `fal-ai/hunyuan3d-v21`  See [fal.ai Model APIs](https://fal.ai/docs/documentation/model-apis/overview) for more details.  **Authentication:** Optional. Providing an API key grants higher rate limits.  **Common Use Cases:** - Browse available models for integration - Retrieve metadata for specific endpoints - Search for models by category or keywords - Get OpenAPI schemas for code generation - Build model selection interfaces

| Location | Parameter | Required | Native shape |
| --- | --- | --- | --- |
| query | `limit` | False | {"type": "integer", "minimum": 1, "description": "Maximum number of items to return. Actual maximum depends on query type and expansion parameters."} |
| query | `cursor` | False | {"type": "string", "description": "Pagination cursor from previous response. Encodes the page number."} |
| query | `endpoint_id` | False | {"anyOf": [{"type": "string"}, {"type": "array", "items": {"type": "string"}}], "description": "Endpoint ID(s) to retrieve (e.g., 'fal-ai/flux/dev'). Can be a single value or multiple values (1-50 models). When combined with search params, narrows results to these IDs. Use array syntax: ?endpoint_id=model1&endpoint_id=model2"} |
| query | `q` | False | {"type": "string", "description": "Free-text search query to filter models by name, description, or category"} |
| query | `category` | False | {"type": "string", "description": "Filter by category (e.g., 'text-to-image', 'image-to-video', 'training')"} |
| query | `status` | False | {"type": "string", "enum": ["active", "deprecated"], "description": "Filter models by status - omit to include all statuses"} |
| query | `expand` | False | {"anyOf": [{"type": "string"}, {"type": "array", "items": {"type": "string"}}], "description": "Fields to expand in the response. Supported values: 'openapi-3.0' (includes full OpenAPI 3.0 schema in 'openapi' field), 'enterprise_status' (includes enterprise readiness status)"} |

##### Native `get_pricing`: GET /models/pricing

Returns unit pricing for requested endpoint IDs. Most models use **output-based** pricing (e.g., per image/video with proportional adjustments for resolution/length). Some models use **GPU-based** pricing depending on architecture. Values are expressed per model's billing unit in a given currency.  **Authentication:** Required. Users must provide a valid API key.  Custom pricing or discounts may be applied based on account status.  **Common Use Cases:** - Display pricing in user interfaces - Compare pricing across different models - Build cost estimation tools - Check current billing rates  See [fal.ai pricing](https://fal.ai/pricing) for more details.

| Location | Parameter | Required | Native shape |
| --- | --- | --- | --- |
| query | `endpoint_id` | True | {"anyOf": [{"type": "string"}, {"type": "array", "items": {"type": "string"}}], "description": "Filter by specific endpoint ID(s). Accepts 1-50 endpoint IDs. Supports comma-separated values: ?endpoint_id=model1,model2 or array syntax: ?endpoint_id=model1&endpoint_id=model2"} |

##### Native `estimate_pricing`: POST /models/pricing/estimate

Computes cost estimates using one of two methods:  **1. Historical API Price** (`historical_api_price`): - Based on historical pricing per API call from past usage patterns - Takes `call_quantity` (number of API calls) per endpoint - Useful for estimating based on actual historical usage patterns - Example: "How much will 100 calls to flux/dev cost?"  **2. Unit Price** (`unit_price`): - Based on unit price × expected billing units from pricing service - Takes `unit_quantity` (number of billing units like images/videos) per endpoint - Useful when you know the expected output quantity - Example: "How much will 50 images from flux/dev cost?"  **Authentication:** Required. Users must provide a valid API key. Custom pricing or discounts may be applied based on account status.  **Common Use Cases:** - Pre-calculate costs for batch operations - Display cost estimates in user interfaces - Budget planning and cost optimization  See [fal.ai pricing](https://fal.ai/pricing) for more details.

| Location | Parameter | Required | Native shape |
| --- | --- | --- | --- |
| Native request | No path/query/header arguments | No | See required body below |

Native body required: False. Complete body sources cannot mix.


**body oneOf branch 1**

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `estimate_type` | Yes | string | Estimate type: historical API pricing based on past usage patterns enum: `["historical_api_price"]`. |
| `endpoints` | Yes | object | Map of endpoint IDs to call quantities |

**body.oneOf1.endpoints**


**body.oneOf1.endpoints.{key}**

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `call_quantity` | Yes | integer | Number of API calls to estimate (regardless of units per call) minimum: `1`. |

**body oneOf branch 2**

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `estimate_type` | Yes | string | Estimate type: unit price calculation based on billing units enum: `["unit_price"]`. |
| `endpoints` | Yes | object | Map of endpoint IDs to unit quantities |

**body.oneOf2.endpoints**


**body.oneOf2.endpoints.{key}**

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `unit_quantity` | Yes | number | Number of billing units expected (e.g., number of images, videos, etc.) minimum: `1e-06`. |

##### Native `get_usage`: GET /models/usage

Returns paginated usage records for your workspace with filters for endpoint, user, date range, and auth method. Each item includes the billed unit quantity, the pre-discount unit price and cost_subtotal, any percentage discount applied, and the final cost_total (cost_subtotal − cost_discount).  **Key Features:** - Usage data for all endpoints or filtered by specific endpoint(s) - Flexible date range filtering - User-specific usage tracking - Detailed usage line items with unit quantity, price, and discount breakdown - Paginated results for large datasets  **Common Use Cases:** - Generate usage reports for all endpoints or specific models - Track usage patterns - Monitor endpoint usage across different auth methods - Build usage dashboards and visualizations  See [fal.ai docs](https://fal.ai/docs/documentation/model-apis/faq) for more details.

| Location | Parameter | Required | Native shape |
| --- | --- | --- | --- |
| query | `limit` | False | {"type": "integer", "minimum": 1, "description": "Maximum number of items to return. Actual maximum depends on query type and expansion parameters."} |
| query | `cursor` | False | {"type": "string", "description": "Pagination cursor from previous response. Encodes the page number."} |
| query | `start` | False | {"anyOf": [{"type": "string", "format": "date-time"}, {"type": "string", "pattern": "^\\d{4}-\\d{2}-\\d{2}$"}], "description": "Start date in ISO8601 format (e.g., '2025-01-01T00:00:00Z' or '2025-01-01'). Defaults to 24 hours ago."} |
| query | `end` | False | {"anyOf": [{"type": "string", "format": "date-time"}, {"type": "string", "pattern": "^\\d{4}-\\d{2}-\\d{2}$"}], "description": "End date in ISO8601 format, exclusive (e.g., '2025-02-01T00:00:00Z' or '2025-02-01'). Data up to but not including this timestamp is returned. Defaults to current time."} |
| query | `timezone` | False | {"type": "string", "default": "UTC", "description": "Timezone for date aggregation and boundaries. All timestamps in responses are in UTC, but this controls how dates are bucketed."} |
| query | `timeframe` | False | {"type": "string", "enum": ["minute", "hour", "day", "week", "month"], "description": "Aggregation timeframe for timeseries data (auto-detected from date range if not specified). Auto-detection uses: minute (<2h), hour (<2d), day (<64d), week (<183d), month (>=183d)."} |
| query | `bound_to_timeframe` | False | {"type": "string", "enum": ["true", "false"], "default": "true", "description": "Whether to adjust start/end dates to align with timeframe boundaries and use exclusive end. Defaults to true. When true, dates are aligned to the start of the timeframe period (e.g., start of day) and end is made exclusive (e.g., start of next day). When false, uses exact dates provided."} |
| query | `endpoint_id` | False | {"anyOf": [{"type": "string"}, {"type": "array", "items": {"type": "string"}}], "description": "Filter by specific endpoint ID(s). Accepts 1-50 endpoint IDs. Supports comma-separated values: ?endpoint_id=model1,model2 or array syntax: ?endpoint_id=model1&endpoint_id=model2"} |
| query | `api_key_id` | False | {"anyOf": [{"type": "string"}, {"type": "array", "items": {"type": "string"}}], "description": "Filter by specific API key ID(s). Accepts 1-50 key IDs. Supports comma-separated values: ?api_key_id=key1,key2 or array syntax: ?api_key_id=key1&api_key_id=key2"} |
| query | `login_username` | False | {"anyOf": [{"type": "string"}, {"type": "array", "items": {"type": "string"}}], "description": "Filter by team member login username(s) (nickname). Accepts 1-50 usernames. Supports comma-separated values: ?login_username=alice,bob or array syntax: ?login_username=alice&login_username=bob"} |
| query | `expand` | False | {"anyOf": [{"type": "string"}, {"type": "array", "items": {"type": "string"}}], "default": ["time_series"], "description": "Data to include in the response. Use 'time_series' for time-bucketed data, 'summary' for aggregate statistics, 'auth_method' to include a formatted authentication method label, and 'auth_method_structured' to include a machine-readable auth method object (detail, api_key_id, login_username). At least one of 'time_series' or 'summary' is required."} |

##### Native `get_analytics`: GET /models/analytics

Time-bucketed metrics per model endpoint, including request counts, success/error rates, and latency percentiles. `prepare_duration` reflects queue/prepare time before execution; `duration` is request execution time. Use with the Queue/Webhooks flow to monitor SLAs.  **Metric Selection:** You must specify which metrics to include using the `expand` query parameter. Only requested metrics will be populated in the response, allowing you to optimize query performance and data transfer.  **Available Metrics:**  The `expand` parameter accepts these values, grouped by category:  *Volume* - `request_count`: Total number of requests in the time bucket - `success_count`: Successful requests (2xx responses) - `user_error_count`: User errors (4xx responses) - `error_count`: Server errors (5xx responses)  *Error type breakdown* - `startup_error_count`: Startup errors (startup timeout, scheduling failure) - `connection_error_count`: Connection errors (timeout, disconnected, refused) - `timeout_error_count`: Request timeout errors - `runtime_error_count`: Runtime errors (internal error, server error)  *Queue / prepare latency* - `p50_prepare_duration`, `p75_prepare_duration`, `p90_prepare_duration`, `p95_prepare_duration`, `p99_prepare_duration`: Time from request submission until execution starts  *Request execution latency* - `p25_duration`, `p50_duration`, `p75_duration`, `p90_duration`, `p95_duration`, `p99_duration`: Time spent processing the request  *Cold boot* - `cold_boot_count`: Requests with cold boot (startup > 1s) - `p50_cold_boot_duration`, `p75_cold_boot_duration`, `p90_cold_boot_duration`: Cold boot duration percentiles  *Billing* - `total_billable_duration`: Aggregate billed execution time  **Key Features:** - Selective metric inclusion via expand parameter - Performance metrics (latency percentiles, duration stats) - Reliability metrics (success/error rates, request counts) - Error type breakdown (startup, connection, timeout, runtime) - Cold boot metrics (count, latency percentiles) - Billing duration tracking - Time-bucketed data for trend analysis - Single or multi-model analytics - Flexible date range and timeframe options  **Common Use Cases:** - Monitor model performance and reliability - Generate performance dashboards - Analyze latency trends and patterns - Track error rates and success metrics  See [Queue API docs](https://fal.ai/docs/documentation/model-apis/inference/queue) for more details.

| Location | Parameter | Required | Native shape |
| --- | --- | --- | --- |
| query | `limit` | False | {"type": "integer", "minimum": 1, "description": "Maximum number of items to return. Actual maximum depends on query type and expansion parameters."} |
| query | `cursor` | False | {"type": "string", "description": "Pagination cursor from previous response. Encodes the page number."} |
| query | `start` | False | {"anyOf": [{"type": "string", "format": "date-time"}, {"type": "string", "pattern": "^\\d{4}-\\d{2}-\\d{2}$"}], "description": "Start date in ISO8601 format (e.g., '2025-01-01T00:00:00Z' or '2025-01-01'). Defaults to 24 hours ago."} |
| query | `end` | False | {"anyOf": [{"type": "string", "format": "date-time"}, {"type": "string", "pattern": "^\\d{4}-\\d{2}-\\d{2}$"}], "description": "End date in ISO8601 format, exclusive (e.g., '2025-02-01T00:00:00Z' or '2025-02-01'). Data up to but not including this timestamp is returned. Defaults to current time."} |
| query | `timezone` | False | {"type": "string", "default": "UTC", "description": "Timezone for date aggregation and boundaries. All timestamps in responses are in UTC, but this controls how dates are bucketed."} |
| query | `timeframe` | False | {"type": "string", "enum": ["minute", "hour", "day", "week", "month"], "description": "Aggregation timeframe for timeseries data (auto-detected from date range if not specified). Auto-detection uses: minute (<2h), hour (<2d), day (<64d), week (<183d), month (>=183d)."} |
| query | `bound_to_timeframe` | False | {"type": "string", "enum": ["true", "false"], "default": "true", "description": "Whether to adjust start/end dates to align with timeframe boundaries and use exclusive end. Defaults to true. When true, dates are aligned to the start of the timeframe period (e.g., start of day) and end is made exclusive (e.g., start of next day). When false, uses exact dates provided."} |
| query | `endpoint_id` | True | {"anyOf": [{"type": "string"}, {"type": "array", "items": {"type": "string"}}], "description": "Filter by specific endpoint ID(s). Accepts 1-50 endpoint IDs. Supports comma-separated values: ?endpoint_id=model1,model2 or array syntax: ?endpoint_id=model1&endpoint_id=model2"} |
| query | `expand` | False | {"anyOf": [{"type": "string"}, {"type": "array", "items": {"type": "string"}}], "default": ["time_series", "request_count"], "description": "Data and metrics to include in the response. Use 'time_series' for time-bucketed data, metric names for specific metrics in time series, and 'summary' for aggregate statistics. At least one of 'time_series' or 'summary' and at least one metric are required."} |

##### Native `get_billing_events`: GET /models/billing-events

Returns paginated individual billing event records with filters for endpoint and date range. Each record includes the request ID, timestamp, endpoint, output units billed, and a cost breakdown in USD (cost_subtotal, cost_discount, cost_total; cost_estimate_nano_usd carries cost_total in nano USD).  **Key Features:** - Individual billing event records for each API request - Per-request cost breakdown before and after discounts - Flexible date range filtering - Optional endpoint filtering - Cursor-based pagination for efficient large dataset queries - Limited to 10000 records per page for performance - Date range capped at 90 days per request  **Common Use Cases:** - Audit individual billing events - Track request patterns and volumes - Debug specific requests by ID - Monitor billing unit consumption per request  See [fal.ai docs](https://fal.ai/docs/documentation/model-apis/faq) for more details.

| Location | Parameter | Required | Native shape |
| --- | --- | --- | --- |
| query | `limit` | False | {"type": "integer", "minimum": 1, "description": "Maximum number of items to return. Actual maximum depends on query type and expansion parameters."} |
| query | `cursor` | False | {"type": "string", "description": "Pagination cursor from previous response. Encodes the page number."} |
| query | `start` | False | {"anyOf": [{"type": "string", "format": "date-time"}, {"type": "string", "pattern": "^\\d{4}-\\d{2}-\\d{2}$"}], "description": "Start date in ISO8601 format (e.g., '2025-01-01T00:00:00Z' or '2025-01-01'). Defaults to 24 hours ago."} |
| query | `end` | False | {"anyOf": [{"type": "string", "format": "date-time"}, {"type": "string", "pattern": "^\\d{4}-\\d{2}-\\d{2}$"}], "description": "End date in ISO8601 format, exclusive (e.g., '2025-02-01T00:00:00Z' or '2025-02-01'). Data up to but not including this timestamp is returned. Defaults to current time."} |
| query | `endpoint_id` | False | {"anyOf": [{"type": "string"}, {"type": "array", "items": {"type": "string"}}], "description": "Filter by specific endpoint ID(s). Accepts 1-50 endpoint IDs. Supports comma-separated values: ?endpoint_id=model1,model2 or array syntax: ?endpoint_id=model1&endpoint_id=model2"} |
| query | `request_id` | False | {"anyOf": [{"type": "string"}, {"type": "array", "items": {"type": "string"}}], "description": "Filter by specific request ID(s). Accepts 1-50 request IDs. Supports comma-separated values: ?request_id=req1,req2 or array syntax: ?request_id=req1&request_id=req2"} |
| query | `api_key_id` | False | {"anyOf": [{"type": "string"}, {"type": "array", "items": {"type": "string"}}], "description": "Filter by specific API key ID(s). Accepts 1-50 key IDs. Supports comma-separated values: ?api_key_id=key1,key2 or array syntax: ?api_key_id=key1&api_key_id=key2"} |
| query | `login_username` | False | {"anyOf": [{"type": "string"}, {"type": "array", "items": {"type": "string"}}], "description": "Filter by team member login username(s) (nickname). Accepts 1-50 usernames. Supports comma-separated values: ?login_username=alice,bob or array syntax: ?login_username=alice&login_username=bob"} |
| query | `expand` | False | {"anyOf": [{"type": "string"}, {"type": "array", "items": {"type": "string"}}], "description": "Data to include in the response. Use 'auth_method' for a formatted authentication method label, and 'auth_method_structured' for a machine-readable auth method object (detail, api_key_id, login_username)."} |

##### Native `delete_request_payloads`: DELETE /models/requests/{request_id}/payloads

Deletes the IO payloads and associated CDN output files for a specific request.  **Important:** - Only **output** CDN files are deleted (input files may be used by other requests) - This action is irreversible - Requires authentication with an admin API key  **What gets deleted:** - Request input/output payload data - CDN-hosted output files (images, videos, etc.)  **What is NOT deleted:** - Input CDN files (may be referenced by other requests)  **Response:** - Returns deletion status for each CDN file - Each result includes the file link and any error that occurred  **Idempotency:** - Optional Idempotency-Key header prevents duplicate deletions on retries - Responses cached for 10 minutes per unique key  See [fal.ai docs](https://fal.ai/docs/platform-apis/v1/models/requests/payloads) for more details about request payloads.

| Location | Parameter | Required | Native shape |
| --- | --- | --- | --- |
| path | `request_id` | True | {"type": "string", "format": "uuid", "description": "Unique identifier for the request (UUID format)"} |
| header | `Idempotency-Key` | False | {"type": "string", "description": "Optional idempotency key for safe request retries"} |

##### Native `list_requests_by_endpoint`: GET /models/requests/by-endpoint

Lists requests for one or more endpoints (same `endpoint_id` style as usage/explore: comma-separated or repeated query params, up to 50 IDs).  **Authentication:** Requires API key (user or enterprise).  **Filters:** - Time range via start / end. If `start` is omitted, defaults to the last 24 hours :  unless `request_id` is provided, in which case the default start bound is widened to 90 days. - Status (success, error, user_error) - Request ID - Pagination via cursor/limit (limit defaults to 50, max 100)  **Sorting:** - By end time (default) or duration  **Expansions:** - Include payloads by adding expand=payloads

| Location | Parameter | Required | Native shape |
| --- | --- | --- | --- |
| query | `limit` | False | {"type": "integer", "minimum": 1, "maximum": 100, "default": 50, "description": "Number of items to return per page (max 100)"} |
| query | `cursor` | False | {"type": "string", "description": "Pagination cursor encoding the page number"} |
| query | `endpoint_id` | True | {"anyOf": [{"type": "string"}, {"type": "array", "items": {"type": "string"}}], "description": "Filter by specific endpoint ID(s). Accepts 1-50 endpoint IDs. Supports comma-separated values: ?endpoint_id=model1,model2 or array syntax: ?endpoint_id=model1&endpoint_id=model2"} |
| query | `start` | False | {"anyOf": [{"type": "string", "format": "date-time"}, {"type": "string", "pattern": "^\\d{4}-\\d{2}-\\d{2}$"}], "description": "Start date in ISO8601 format (e.g., '2025-01-01T00:00:00Z' or '2025-01-01'). Defaults to 24 hours ago."} |
| query | `end` | False | {"anyOf": [{"type": "string", "format": "date-time"}, {"type": "string", "pattern": "^\\d{4}-\\d{2}-\\d{2}$"}], "description": "End date in ISO8601 format, exclusive (e.g., '2025-02-01T00:00:00Z' or '2025-02-01'). Data up to but not including this timestamp is returned. Defaults to current time."} |
| query | `status` | False | {"type": "string", "enum": ["success", "error", "user_error"], "description": "Filter by request status"} |
| query | `request_id` | False | {"type": "string", "format": "uuid", "description": "Filter by specific request ID"} |
| query | `expand` | False | {"anyOf": [{"type": "string"}, {"type": "array", "items": {"type": "string"}}], "description": "Fields to expand in the response. Use payloads to include input and output payloads."} |
| query | `sort_by` | False | {"type": "string", "enum": ["ended_at", "duration"], "default": "ended_at", "description": "Sort results by end time or duration"} |

##### Native `search_requests`: GET /models/requests/search

Search, filter, and browse your request history. Supports three modes:  **1. Semantic Search** (`query`, `image_url`, or `video_url` parameter): Find visually or conceptually similar results using AI embeddings. Provide a text query for text-to-image search, an image URL for image-to-image similarity search, or a video URL for video-to-image similarity search.  **2. Filtered Browse** (no `query`, `image_url`, or `video_url`): Browse request history with hard filters. Returns results ordered by creation date (newest first).  **3. Semantic + Filters** (search params AND filter params): Combine semantic search with hard filters. Filters narrow the candidate set before ranking by similarity.  **Filter Options:** - `endpoint_id`: Filter by one or more fal endpoints (comma-separated or repeated, up to 50 IDs) - `exclude_api_requests` / `only_api_requests`: Filter by request source  **Examples:** - Semantic text search: `?query=sunset+landscape` - Image similarity: `?image_url=https://...&min_similarity=0.5` - Filtered search: `?query=portrait&endpoint_id=fal-ai/flux/dev` - Browse across multiple endpoints: `?endpoint_id=fal-ai/flux/dev,fal-ai/flux/schnell`

| Location | Parameter | Required | Native shape |
| --- | --- | --- | --- |
| query | `limit` | False | {"type": "integer", "minimum": 1, "description": "Maximum number of items to return. Actual maximum depends on query type and expansion parameters."} |
| query | `cursor` | False | {"type": "string", "description": "Pagination cursor from previous response. Encodes the page number."} |
| query | `query` | False | {"type": "string", "description": "Text search query for semantic search. Mutually exclusive with image_url and video_url."} |
| query | `image_url` | False | {"type": "string", "description": "Image URL for similarity search. Mutually exclusive with query and video_url."} |
| query | `video_url` | False | {"type": "string", "description": "Video URL for similarity search. Mutually exclusive with query and image_url."} |
| query | `endpoint_id` | False | {"anyOf": [{"type": "string"}, {"type": "array", "items": {"type": "string"}}], "description": "Filter by one or more fal endpoints to scope request history. Accepts comma-separated or repeated values (1-50 IDs)."} |
| query | `endpoint` | False | {"type": "string", "description": "Deprecated: use `endpoint_id`. Single-endpoint filter retained for backward compatibility. If both are provided, `endpoint_id` wins.", "deprecated": true} |
| query | `exclude_api_requests` | False | {"type": "boolean", "description": "Exclude requests made via API keys (only show playground/UI requests). Mutually exclusive with only_api_requests."} |
| query | `only_api_requests` | False | {"type": "boolean", "description": "Only include requests made via API keys. Mutually exclusive with exclude_api_requests."} |
| query | `min_similarity` | False | {"type": ["number", "null"], "minimum": 0, "maximum": 1, "description": "Minimum similarity score (0-1) for semantic search results. Only applies when query or image_url is provided."} |

##### Native `list_workflows`: GET /workflows

List workflows for the authenticated user with optional search and filtering.  **Features:** - Paginated results with cursor-based pagination - Search by workflow name or title - Filter by model endpoints used in the workflow  **Authentication:** Required. Returns only workflows owned by the authenticated user.  **Common Use Cases:** - Display user's workflow library - Search for specific workflows - Find workflows using particular models

| Location | Parameter | Required | Native shape |
| --- | --- | --- | --- |
| query | `limit` | False | {"type": "integer", "minimum": 1, "description": "Maximum number of items to return. Actual maximum depends on query type and expansion parameters."} |
| query | `cursor` | False | {"type": "string", "description": "Pagination cursor from previous response. Encodes the page number."} |
| query | `search` | False | {"type": "string", "description": "Search by workflow name or title"} |
| query | `used_endpoint_ids` | False | {"anyOf": [{"type": "string"}, {"type": "array", "items": {"type": "string"}}], "description": "Filter by model endpoint IDs used in the workflow. Can be a single value or comma-separated values."} |

##### Native `create_workflow`: POST /workflows

Create a new workflow owned by the authenticated user.  **Authentication:** Required.  **Common Use Cases:** - Save a newly built workflow - Programmatically provision workflows  **Note:** Workflow names must be unique within your namespace. Creating a workflow with a name you already use returns a 400 validation error.

| Location | Parameter | Required | Native shape |
| --- | --- | --- | --- |
| Native request | No path/query/header arguments | No | See required body below |

Native body required: True. Complete body sources cannot mix.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `name` | Yes | string | Unique workflow name/slug within the user's namespace maxLength: `128`. pattern: `"^[a-zA-Z0-9_-]+$"`. |
| `title` | Yes | string | Human-readable workflow title minLength: `1`. maxLength: `256`. |
| `contents` | Yes | object | The workflow definition/configuration object |
| `is_public` | No; body/guard requirements still apply | boolean | Whether the workflow is publicly visible default: `false`. |

**body.contents**

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `name` | Yes | string | Internal name of the workflow definition |
| `version` | Yes | string | Workflow definition format version |
| `nodes` | Yes | object | Workflow nodes keyed by node id |
| `output` | Yes | object | Output field mappings keyed by output name |
| `schema` | Yes | object | Input/output schema for the workflow |
| `metadata` | No; body/guard requirements still apply | object | Optional workflow metadata |

**body.contents.nodes**


**body.contents.nodes.{key}**


**body.contents.nodes.{key}.{key}**

Native JSON value; inspect the full schema for validation.

**body.contents.output**


**body.contents.output.{key}**

Native JSON value; inspect the full schema for validation.

**body.contents.schema**

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `input` | Yes | object | Input fields schema |
| `output` | Yes | object | Output fields schema |

**body.contents.schema.input**


**body.contents.schema.input.{key}**

Native JSON value; inspect the full schema for validation.

**body.contents.schema.output**


**body.contents.schema.output.{key}**

Native JSON value; inspect the full schema for validation.

**body.contents.metadata**


**body.contents.metadata.{key}**

Native JSON value; inspect the full schema for validation.

##### Native `get_workflow`: GET /workflows/{username}/{workflow_name}

Get detailed information about a specific workflow, including its full contents/definition.  **Authentication:** Required.  **Common Use Cases:** - Load a workflow for editing - View workflow configuration - Export workflow definition

| Location | Parameter | Required | Native shape |
| --- | --- | --- | --- |
| path | `username` | True | {"type": "string", "maxLength": 128, "pattern": "^[a-zA-Z0-9_-]+$", "description": "The username of the workflow owner"} |
| path | `workflow_name` | True | {"type": "string", "maxLength": 128, "pattern": "^[a-zA-Z0-9_-]+$", "description": "The workflow name/slug"} |

##### Native `list_assets`: GET /assets

Browse and semantically search fal Assets across all media, uploads, favorites, collections, tags, and character references.

| Location | Parameter | Required | Native shape |
| --- | --- | --- | --- |
| query | `limit` | False | {"type": "integer", "minimum": 1, "description": "Maximum number of items to return. Actual maximum depends on query type and expansion parameters."} |
| query | `cursor` | False | {"type": "string", "description": "Pagination cursor from previous response. Encodes the page number."} |
| query | `q` | False | {"type": "string", "description": "Text query for hybrid semantic search"} |
| query | `search_image_url` | False | {"type": "string", "format": "uri", "description": "fal-hosted image URL to use for semantic image search"} |
| query | `search_video_url` | False | {"type": "string", "format": "uri", "description": "fal-hosted video URL to use for semantic video search"} |
| query | `media_type` | False | {"type": ["array", "null"], "items": {"type": "string", "enum": ["image", "video", "audio", "3d"], "description": "Asset media type"}, "default": [], "description": "Filter by one or more media types"} |
| query | `source` | False | {"type": ["array", "null"], "items": {"type": "string", "enum": ["upload", "response", "request"], "description": "Indexed asset source"}, "default": [], "description": "Filter by one or more indexed sources"} |
| query | `section` | False | {"type": "string", "enum": ["all-media", "uploads", "favorites", "generated"], "default": "all-media", "description": "Asset library section to browse"} |
| query | `collection_id` | False | {"type": "string", "description": "Collection scope to browse"} |
| query | `character_identifier` | False | {"type": ["array", "null"], "items": {"type": "string"}, "default": [], "description": "Character identifiers to use as @mention semantic filters"} |
| query | `tag_id` | False | {"type": ["array", "null"], "items": {"type": "string"}, "default": [], "description": "Tag IDs to filter by"} |
| query | `tag_mode` | False | {"type": "string", "enum": ["any", "all"], "default": "any", "description": "Whether tag filters match any tag or all tags"} |

##### Native `list_asset_collections`: GET /assets/collections

List asset collections for the authenticated user's fal Assets library.

| Location | Parameter | Required | Native shape |
| --- | --- | --- | --- |
| query | `limit` | False | {"type": "integer", "minimum": 1, "maximum": 100, "default": 50, "description": "Maximum number of collections to return"} |
| query | `offset` | False | {"type": ["integer", "null"], "minimum": 0, "default": 0, "description": "Number of collections to skip"} |

##### Native `create_asset_collection`: POST /assets/collections

Create asset collection for the authenticated user's fal Assets library.

| Location | Parameter | Required | Native shape |
| --- | --- | --- | --- |
| header | `Idempotency-Key` | False | {"type": "string", "description": "Optional idempotency key for safe request retries"} |

Native body required: True. Complete body sources cannot mix.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `name` | Yes | string | Collection display name minLength: `1`. maxLength: `255`. |
| `description` | No; body/guard requirements still apply | ['string', 'null'] | Optional collection description |
| `icon` | No; body/guard requirements still apply | ['string', 'null'] | Optional collection icon |
| `color` | No; body/guard requirements still apply | ['string', 'null'] | Optional collection color |
| `cover_image_url` | No; body/guard requirements still apply | ['string', 'null'] | Optional fal-hosted cover image URL for the collection format: `"uri"`. |
| `parent_collection_id` | No; body/guard requirements still apply | ['string', 'null'] | Optional parent collection ID to nest this collection under (manual collections only). Omit or null to create a top-level collection. minLength: `1`. |
| `filters` | No; body/guard requirements still apply | JSON | Assets filter DSL |

##### Native `get_asset_collection`: GET /assets/collections/{collection_id}

Get asset collection for the authenticated user's fal Assets library.

| Location | Parameter | Required | Native shape |
| --- | --- | --- | --- |
| path | `collection_id` | True | {"type": "string", "minLength": 1, "description": "Collection ID"} |

##### Native `update_asset_collection`: PATCH /assets/collections/{collection_id}

Update asset collection for the authenticated user's fal Assets library.

| Location | Parameter | Required | Native shape |
| --- | --- | --- | --- |
| path | `collection_id` | True | {"type": "string", "minLength": 1, "description": "Collection ID"} |
| header | `Idempotency-Key` | False | {"type": "string", "description": "Optional idempotency key for safe request retries"} |

Native body required: True. Complete body sources cannot mix.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `name` | No; body/guard requirements still apply | string | Collection display name minLength: `1`. maxLength: `255`. |
| `description` | No; body/guard requirements still apply | ['string', 'null'] | Optional collection description |
| `icon` | No; body/guard requirements still apply | ['string', 'null'] | Optional collection icon |
| `color` | No; body/guard requirements still apply | ['string', 'null'] | Optional collection color |
| `cover_image_url` | No; body/guard requirements still apply | ['string', 'null'] | Optional fal-hosted cover image URL for the collection format: `"uri"`. |
| `filters` | No; body/guard requirements still apply | JSON | Assets filter DSL |

##### Native `delete_asset_collection`: DELETE /assets/collections/{collection_id}

Delete asset collection for the authenticated user's fal Assets library.

| Location | Parameter | Required | Native shape |
| --- | --- | --- | --- |
| path | `collection_id` | True | {"type": "string", "minLength": 1, "description": "Collection ID"} |
| header | `Idempotency-Key` | False | {"type": "string", "description": "Optional idempotency key for safe request retries"} |

##### Native `get_asset_collection_hierarchy`: GET /assets/collections/{collection_id}/hierarchy

Get the nested subtree rooted at an asset collection, plus its ancestor collections ordered from the top level down to its direct parent.

| Location | Parameter | Required | Native shape |
| --- | --- | --- | --- |
| path | `collection_id` | True | {"type": "string", "minLength": 1, "description": "Collection ID"} |

##### Native `favorite_asset_collection`: POST /assets/collections/{collection_id}/favorite

Favorite an asset collection for the authenticated user's fal Assets library.

| Location | Parameter | Required | Native shape |
| --- | --- | --- | --- |
| path | `collection_id` | True | {"type": "string", "minLength": 1, "description": "Collection ID"} |
| header | `Idempotency-Key` | False | {"type": "string", "description": "Optional idempotency key for safe request retries"} |

##### Native `unfavorite_asset_collection`: POST /assets/collections/{collection_id}/unfavorite

Unfavorite an asset collection for the authenticated user's fal Assets library.

| Location | Parameter | Required | Native shape |
| --- | --- | --- | --- |
| path | `collection_id` | True | {"type": "string", "minLength": 1, "description": "Collection ID"} |
| header | `Idempotency-Key` | False | {"type": "string", "description": "Optional idempotency key for safe request retries"} |

##### Native `move_asset_collection`: POST /assets/collections/{collection_id}/move

Move a manual asset collection under another collection, or to the top level. Only manual collections can be moved or act as folders; nesting is limited to 5 levels deep and cannot create a cycle.

| Location | Parameter | Required | Native shape |
| --- | --- | --- | --- |
| path | `collection_id` | True | {"type": "string", "minLength": 1, "description": "Collection ID"} |
| header | `Idempotency-Key` | False | {"type": "string", "description": "Optional idempotency key for safe request retries"} |

Native body required: True. Complete body sources cannot mix.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `parent_collection_id` | Yes | ['string', 'null'] | Parent collection ID to move this collection under, or null to move it to the top level. Must be a manual collection; nesting is limited to 5 levels and cannot create a cycle. minLength: `1`. |

##### Native `list_asset_collection_assets`: GET /assets/collections/{collection_id}/assets

Browse assets in a collection for the authenticated user's fal Assets library.

| Location | Parameter | Required | Native shape |
| --- | --- | --- | --- |
| path | `collection_id` | True | {"type": "string", "minLength": 1, "description": "Collection ID"} |
| query | `limit` | False | {"type": "integer", "minimum": 1, "description": "Maximum number of items to return. Actual maximum depends on query type and expansion parameters."} |
| query | `cursor` | False | {"type": "string", "description": "Pagination cursor from previous response. Encodes the page number."} |
| query | `q` | False | {"type": "string", "description": "Text query for hybrid semantic search"} |
| query | `search_image_url` | False | {"type": "string", "format": "uri", "description": "fal-hosted image URL to use for semantic image search"} |
| query | `search_video_url` | False | {"type": "string", "format": "uri", "description": "fal-hosted video URL to use for semantic video search"} |
| query | `media_type` | False | {"type": ["array", "null"], "items": {"type": "string", "enum": ["image", "video", "audio", "3d"], "description": "Asset media type"}, "default": [], "description": "Filter by one or more media types"} |
| query | `source` | False | {"type": ["array", "null"], "items": {"type": "string", "enum": ["upload", "response", "request"], "description": "Indexed asset source"}, "default": [], "description": "Filter by one or more indexed sources"} |
| query | `section` | False | {"type": "string", "enum": ["all-media", "uploads", "favorites", "generated"], "default": "all-media", "description": "Asset library section to browse"} |
| query | `character_identifier` | False | {"type": ["array", "null"], "items": {"type": "string"}, "default": [], "description": "Character identifiers to use as @mention semantic filters"} |
| query | `tag_id` | False | {"type": ["array", "null"], "items": {"type": "string"}, "default": [], "description": "Tag IDs to filter by"} |
| query | `tag_mode` | False | {"type": "string", "enum": ["any", "all"], "default": "any", "description": "Whether tag filters match any tag or all tags"} |

##### Native `add_asset_to_collection`: POST /assets/collections/{collection_id}/assets

Add an asset to a manual or character collection. Provide a request ID or vector ID; unresolved references are materialized before local collection state is added. For character collections, the asset is added by applying the character tag.

| Location | Parameter | Required | Native shape |
| --- | --- | --- | --- |
| path | `collection_id` | True | {"type": "string", "minLength": 1, "description": "Collection ID"} |
| header | `Idempotency-Key` | False | {"type": "string", "description": "Optional idempotency key for safe request retries"} |

Native body required: True. Complete body sources cannot mix.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `request_id` | No; body/guard requirements still apply | string | Request ID to save as an asset before mutating minLength: `1`. |
| `vector_id` | No; body/guard requirements still apply | string | Vector ID to save as an asset before mutating minLength: `1`. |

##### Native `remove_asset_from_collection`: DELETE /assets/collections/{collection_id}/assets

Remove an asset from a manual or character collection by request ID or vector ID.

| Location | Parameter | Required | Native shape |
| --- | --- | --- | --- |
| path | `collection_id` | True | {"type": "string", "minLength": 1, "description": "Collection ID"} |
| header | `Idempotency-Key` | False | {"type": "string", "description": "Optional idempotency key for safe request retries"} |

Native body required: True. Complete body sources cannot mix.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `request_id` | No; body/guard requirements still apply | string | Request ID to save as an asset before mutating minLength: `1`. |
| `vector_id` | No; body/guard requirements still apply | string | Vector ID to save as an asset before mutating minLength: `1`. |

##### Native `list_asset_characters`: GET /assets/characters

List asset characters for the authenticated user's fal Assets library.

| Location | Parameter | Required | Native shape |
| --- | --- | --- | --- |
| query | `limit` | False | {"type": "integer", "minimum": 1, "maximum": 100, "default": 50, "description": "Maximum number of collections to return"} |
| query | `offset` | False | {"type": ["integer", "null"], "minimum": 0, "default": 0, "description": "Number of collections to skip"} |

##### Native `create_asset_character`: POST /assets/characters

Create an asset character for the authenticated user's fal Assets library. Prefer vector IDs or request IDs in reference_images for existing fal-generated assets; use fal-hosted image URLs only for standalone images. Unresolved ID references are materialized before character state is added.

| Location | Parameter | Required | Native shape |
| --- | --- | --- | --- |
| header | `Idempotency-Key` | False | {"type": "string", "description": "Optional idempotency key for safe request retries"} |

Native body required: True. Complete body sources cannot mix.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `name` | Yes | string | Character display name minLength: `1`. maxLength: `255`. |
| `identifier` | No; body/guard requirements still apply | ['string', 'null'] | Optional @mention identifier for the character maxLength: `64`. |
| `description` | Yes | string | Text description used for character semantic matching minLength: `1`. maxLength: `2000`. |
| `reference_images` | Yes | array | Reference images for the character. Prefer vector IDs or request IDs for existing fal-generated assets. Use fal-hosted image URLs only for standalone images. minItems: `1`. maxItems: `20`. |
| `cover_image_url` | No; body/guard requirements still apply | ['string', 'null'] | Optional fal-hosted cover image URL for the character format: `"uri"`. |

**body.reference_images**


**body.reference_images[]**

Native JSON value; inspect the full schema for validation.

##### Native `update_asset_character`: PATCH /assets/characters/{character_id}

Update an asset character for the authenticated user's fal Assets library. Prefer vector IDs or request IDs in reference_images for existing fal-generated assets; use fal-hosted image URLs only for standalone images. Unresolved ID references are materialized before character state is added.

| Location | Parameter | Required | Native shape |
| --- | --- | --- | --- |
| path | `character_id` | True | {"type": "string", "minLength": 1, "description": "Character collection ID"} |
| header | `Idempotency-Key` | False | {"type": "string", "description": "Optional idempotency key for safe request retries"} |

Native body required: True. Complete body sources cannot mix.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `name` | No; body/guard requirements still apply | string | Character display name minLength: `1`. maxLength: `255`. |
| `description` | No; body/guard requirements still apply | string | Text description used for character semantic matching minLength: `1`. maxLength: `2000`. |
| `reference_images` | No; body/guard requirements still apply | array | Reference images for the character. Prefer vector IDs or request IDs for existing fal-generated assets. Use fal-hosted image URLs only for standalone images. minItems: `1`. maxItems: `20`. |
| `cover_image_url` | No; body/guard requirements still apply | ['string', 'null'] | Optional fal-hosted cover image URL for the character format: `"uri"`. |

**body.reference_images**


**body.reference_images[]**

Native JSON value; inspect the full schema for validation.

##### Native `get_asset_character`: GET /assets/characters/{character_id}

Get asset character for the authenticated user's fal Assets library.

| Location | Parameter | Required | Native shape |
| --- | --- | --- | --- |
| path | `character_id` | True | {"type": "string", "minLength": 1, "description": "Character collection ID"} |

##### Native `delete_asset_character`: DELETE /assets/characters/{character_id}

Delete asset character for the authenticated user's fal Assets library.

| Location | Parameter | Required | Native shape |
| --- | --- | --- | --- |
| path | `character_id` | True | {"type": "string", "minLength": 1, "description": "Character collection ID"} |
| header | `Idempotency-Key` | False | {"type": "string", "description": "Optional idempotency key for safe request retries"} |

##### Native `favorite_asset_character`: POST /assets/characters/{character_id}/favorite

Favorite an asset character for the authenticated user's fal Assets library.

| Location | Parameter | Required | Native shape |
| --- | --- | --- | --- |
| path | `character_id` | True | {"type": "string", "minLength": 1, "description": "Character collection ID"} |
| header | `Idempotency-Key` | False | {"type": "string", "description": "Optional idempotency key for safe request retries"} |

##### Native `unfavorite_asset_character`: POST /assets/characters/{character_id}/unfavorite

Unfavorite an asset character for the authenticated user's fal Assets library.

| Location | Parameter | Required | Native shape |
| --- | --- | --- | --- |
| path | `character_id` | True | {"type": "string", "minLength": 1, "description": "Character collection ID"} |
| header | `Idempotency-Key` | False | {"type": "string", "description": "Optional idempotency key for safe request retries"} |

##### Native `list_asset_tags`: GET /assets/tags

List asset tags for the authenticated user's fal Assets library.

| Location | Parameter | Required | Native shape |
| --- | --- | --- | --- |
| Native request | No path/query/header arguments | No | See required body below |

##### Native `create_asset_tag`: POST /assets/tags

Create asset tag for the authenticated user's fal Assets library.

| Location | Parameter | Required | Native shape |
| --- | --- | --- | --- |
| header | `Idempotency-Key` | False | {"type": "string", "description": "Optional idempotency key for safe request retries"} |

Native body required: True. Complete body sources cannot mix.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `name` | Yes | string | Tag name minLength: `1`. maxLength: `50`. |

##### Native `set_asset_tags_for_asset`: PUT /assets/tags

Set tags for an asset. Provide a request ID or vector ID; unresolved references are materialized before tag state is added.

| Location | Parameter | Required | Native shape |
| --- | --- | --- | --- |
| header | `Idempotency-Key` | False | {"type": "string", "description": "Optional idempotency key for safe request retries"} |

Native body required: True. Complete body sources cannot mix.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `request_id` | No; body/guard requirements still apply | string | Request ID to save as an asset before mutating minLength: `1`. |
| `vector_id` | No; body/guard requirements still apply | string | Vector ID to save as an asset before mutating minLength: `1`. |
| `tag_ids` | Yes | array | Full replacement set of tag IDs |

**body.tag_ids**


**body.tag_ids[]**

Native JSON value; inspect the full schema for validation.

##### Native `update_asset_tag`: PATCH /assets/tags/{tag_id}

Update asset tag for the authenticated user's fal Assets library.

| Location | Parameter | Required | Native shape |
| --- | --- | --- | --- |
| path | `tag_id` | True | {"type": "string", "minLength": 1, "description": "Tag ID"} |
| header | `Idempotency-Key` | False | {"type": "string", "description": "Optional idempotency key for safe request retries"} |

Native body required: True. Complete body sources cannot mix.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `name` | No; body/guard requirements still apply | string | Tag name minLength: `1`. maxLength: `50`. |

##### Native `delete_asset_tag`: DELETE /assets/tags/{tag_id}

Delete asset tag for the authenticated user's fal Assets library.

| Location | Parameter | Required | Native shape |
| --- | --- | --- | --- |
| path | `tag_id` | True | {"type": "string", "minLength": 1, "description": "Tag ID"} |
| header | `Idempotency-Key` | False | {"type": "string", "description": "Optional idempotency key for safe request retries"} |

##### Native `upload_asset`: POST /assets/uploads

Upload asset for the authenticated user's fal Assets library.

| Location | Parameter | Required | Native shape |
| --- | --- | --- | --- |
| header | `Idempotency-Key` | False | {"type": "string", "description": "Optional idempotency key for safe request retries"} |

Native body required: True. Complete body sources cannot mix.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `url` | Yes | string | fal-hosted media URL to ingest into the asset library format: `"uri"`. |
| `type` | Yes | string | Media type for the uploaded asset enum: `["image", "video", "audio", "3d"]`. |
| `prompt` | No; body/guard requirements still apply | ['string', 'null'] | Optional caller-provided caption or description to index with the uploaded asset minLength: `1`. maxLength: `2000`. |
| `collection_id` | No; body/guard requirements still apply | ['string', 'null'] | Optional manual collection ID to add the uploaded asset to |
| `favorite` | No; body/guard requirements still apply | boolean | Whether to favorite the uploaded asset immediately default: `false`. |
| `tag_ids` | No; body/guard requirements still apply | array | Tag IDs to assign to the uploaded asset default: `[]`. |

**body.tag_ids**


**body.tag_ids[]**

Native JSON value; inspect the full schema for validation.

##### Native `get_asset`: GET /assets/{vector_id}

Get an asset document by vector ID from the authenticated user's fal Assets library. The vector may exist only in Turbopuffer; in that case the response returns the Turbopuffer document with empty local state.

| Location | Parameter | Required | Native shape |
| --- | --- | --- | --- |
| path | `vector_id` | True | {"type": "string", "minLength": 1, "description": "Vector ID"} |

##### Native `get_asset_lineage`: GET /assets/{asset_id}/lineage

Get the derivation lineage of an asset by asset ID: the inputs it was generated from, the generation requests along the way, and any referenced characters, traversed recursively up to `depth` levels. Deleted or expired ancestors stay in the graph flagged as tombstones; inputs that were never captured appear as external inputs.

| Location | Parameter | Required | Native shape |
| --- | --- | --- | --- |
| path | `asset_id` | True | {"type": "string", "minLength": 1, "description": "Asset ID"} |
| query | `depth` | False | {"type": "integer", "minimum": 1, "maximum": 5, "default": 5, "description": "Maximum traversal depth (levels of derivation edges)"} |

##### Native `favorite_asset`: POST /assets/favorite

Favorite an asset. Provide a request ID or vector ID; unresolved references are materialized before favorite state is added.

| Location | Parameter | Required | Native shape |
| --- | --- | --- | --- |
| header | `Idempotency-Key` | False | {"type": "string", "description": "Optional idempotency key for safe request retries"} |

Native body required: True. Complete body sources cannot mix.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `request_id` | No; body/guard requirements still apply | string | Request ID to save as an asset before mutating minLength: `1`. |
| `vector_id` | No; body/guard requirements still apply | string | Vector ID to save as an asset before mutating minLength: `1`. |

##### Native `unfavorite_asset`: POST /assets/unfavorite

Unfavorite an asset by request ID or vector ID.

| Location | Parameter | Required | Native shape |
| --- | --- | --- | --- |
| header | `Idempotency-Key` | False | {"type": "string", "description": "Optional idempotency key for safe request retries"} |

Native body required: True. Complete body sources cannot mix.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `request_id` | No; body/guard requirements still apply | string | Request ID to save as an asset before mutating minLength: `1`. |
| `vector_id` | No; body/guard requirements still apply | string | Vector ID to save as an asset before mutating minLength: `1`. |

##### Native `list_asset_tags_for_asset`: GET /assets/{vector_id}/tags

List tags for an asset by vector ID. Vectors that have not been saved as assets return an empty tag list.

| Location | Parameter | Required | Native shape |
| --- | --- | --- | --- |
| path | `vector_id` | True | {"type": "string", "minLength": 1, "description": "Vector ID"} |

##### Native `assign_asset_tag`: POST /assets/tags/{tag_id}/assign

Assign a tag to an asset. Provide a request ID or vector ID; unresolved references are materialized before tag state is added.

| Location | Parameter | Required | Native shape |
| --- | --- | --- | --- |
| path | `tag_id` | True | {"type": "string", "minLength": 1, "description": "Tag ID"} |
| header | `Idempotency-Key` | False | {"type": "string", "description": "Optional idempotency key for safe request retries"} |

Native body required: True. Complete body sources cannot mix.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `request_id` | No; body/guard requirements still apply | string | Request ID to save as an asset before mutating minLength: `1`. |
| `vector_id` | No; body/guard requirements still apply | string | Vector ID to save as an asset before mutating minLength: `1`. |

##### Native `unassign_asset_tag`: DELETE /assets/tags/{tag_id}/assign

Unassign a tag from an asset by request ID or vector ID.

| Location | Parameter | Required | Native shape |
| --- | --- | --- | --- |
| path | `tag_id` | True | {"type": "string", "minLength": 1, "description": "Tag ID"} |
| header | `Idempotency-Key` | False | {"type": "string", "description": "Optional idempotency key for safe request retries"} |

Native body required: True. Complete body sources cannot mix.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `request_id` | No; body/guard requirements still apply | string | Request ID to save as an asset before mutating minLength: `1`. |
| `vector_id` | No; body/guard requirements still apply | string | Vector ID to save as an asset before mutating minLength: `1`. |

##### Native `get_storage_file_acl`: GET /storage/files/acl

Returns the Access Control List currently applied to a fal CDN file.  The ACL consists of a default decision (`allow`, `forbid`, or `hide`) plus optional per-user rules that override the default. Rule users are returned as nicknames where possible.  **Authentication:** Required. The API key must have the `assets:read` permission.

| Location | Parameter | Required | Native shape |
| --- | --- | --- | --- |
| query | `url` | True | {"type": "string", "format": "uri", "description": "Full URL of the fal CDN file, as returned by the upload APIs (https://v3.fal.media/files/b/<id>/<filename>). Must not contain query parameters."} |

##### Native `set_storage_file_acl`: PUT /storage/files/acl

Replaces the Access Control List of a fal CDN file.  The ACL consists of a default decision (`allow`, `forbid`, or `hide`) plus optional per-user rules that override the default. Rule users may be specified by nickname or user ID. Setting `default` to `allow` with no rules makes the file public; `forbid` or `hide` restricts it to the rules you provide.  Rules referencing users that do not exist are dropped. The response reflects the ACL actually applied, so verify it contains the rules you sent.  **Authentication:** Required. The API key must have the `assets:write` permission.

| Location | Parameter | Required | Native shape |
| --- | --- | --- | --- |
| query | `url` | True | {"type": "string", "format": "uri", "description": "Full URL of the fal CDN file, as returned by the upload APIs (https://v3.fal.media/files/b/<id>/<filename>). Must not contain query parameters."} |

Native body required: True. Complete body sources cannot mix.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `default` | Yes | string | Fallback decision when no user-specific rule matches enum: `["allow", "forbid", "hide"]`. |
| `rules` | No; body/guard requirements still apply | array | User-specific overrides to the default decision default: `[]`. |

**body.rules**


**body.rules[]**

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `user` | Yes | string | User nickname or user ID the rule applies to minLength: `1`. |
| `decision` | Yes | string | Access decision applied to this user enum: `["allow", "forbid", "hide"]`. |

##### Native `sign_storage_file_url`: POST /storage/files/sign

Creates a signed URL that grants temporary access to a fal CDN file, regardless of its ACL. Useful for sharing access-restricted files.  The signature is valid for `expiration_seconds` (up to 7 days).  **Authentication:** Required. The API key must have the `assets:read` permission.

| Location | Parameter | Required | Native shape |
| --- | --- | --- | --- |
| query | `url` | True | {"type": "string", "format": "uri", "description": "Full URL of the fal CDN file, as returned by the upload APIs (https://v3.fal.media/files/b/<id>/<filename>). Must not contain query parameters."} |

Native body required: True. Complete body sources cannot mix.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `expiration_seconds` | Yes | integer | How long the signed URL stays valid, in seconds (max 7 days) minimum: `1`. maximum: `604800`. |

##### Native `get_storage_settings`: GET /storage/settings

Returns the account-level storage lifecycle settings applied to newly uploaded fal CDN files:  - `expiration_duration_seconds`: how long files live before being   automatically deleted (null disables auto-expiration). - `initial_acl`: the default ACL applied to new uploads (null means the   system default, which is public).  Both fields are null when the account has never saved settings.  **Authentication:** Required. The API key must have the `account:settings:read` permission.

| Location | Parameter | Required | Native shape |
| --- | --- | --- | --- |
| Native request | No path/query/header arguments | No | See required body below |

##### Native `update_storage_settings`: PUT /storage/settings

Replaces the account-level storage lifecycle settings applied to newly uploaded fal CDN files. Omitted or null fields are cleared (reset to the system default), so always send the full desired configuration.  ACL rules referencing users that do not exist are dropped. The response reflects the settings actually saved, so verify it contains the rules you sent.  These are the same settings that the per-request `X-Fal-Object-Lifecycle-Preference` header overrides on individual requests.  **Authentication:** Required. The API key must have the `account:settings:write` permission.

| Location | Parameter | Required | Native shape |
| --- | --- | --- | --- |
| Native request | No path/query/header arguments | No | See required body below |

Native body required: True. Complete body sources cannot mix.

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `expiration_duration_seconds` | No; body/guard requirements still apply | ['integer', 'null'] | Seconds after which newly uploaded files automatically expire and are deleted. Null disables auto-expiration. minimum: `1`. |
| `initial_acl` | No; body/guard requirements still apply | ['object', 'null'] | Default ACL applied to newly uploaded files. Null uses the system default (public). |

**body.initial_acl**

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `default` | Yes | string | Fallback decision when no user-specific rule matches enum: `["allow", "forbid", "hide"]`. |
| `rules` | No; body/guard requirements still apply | array | User-specific overrides to the default decision default: `[]`. |

**body.initial_acl.rules**


**body.initial_acl.rules[]**

| Argument | Required | Type | Details |
| --- | --- | --- | --- |
| `user` | Yes | string | User nickname or user ID the rule applies to minLength: `1`. |
| `decision` | Yes | string | Access decision applied to this user enum: `["allow", "forbid", "hide"]`. |

##### Native `get_account_billing`: GET /account/billing

Returns billing information for the authenticated account. Use the `expand` parameter to include additional details.  **Expandable Fields:** - `credits` :  Current credit balance and currency  **Common Use Cases:** - Monitor available credit balance programmatically - Display balance in custom dashboards

| Location | Parameter | Required | Native shape |
| --- | --- | --- | --- |
| query | `expand` | False | {"anyOf": [{"type": "string"}, {"type": "array", "items": {"type": "string"}}], "description": "Data to include in the response. Use 'credits' to include current credit balance."} |

##### Native `get_organization_teams`: GET /organization/teams

Returns the list of teams in your organization with their details.  > **Availability:** This endpoint is available to enterprise customers with organizations enabled. Contact your account team or support@fal.ai to request access.  Must be called with an admin API key on the organization's root team.  **Key Features:** - List all teams within the organization - Identify the organization's root team via `is_org_root` - View team usernames and display names  See [fal.ai docs](https://fal.ai/docs/documentation) for more details.

| Location | Parameter | Required | Native shape |
| --- | --- | --- | --- |
| Native request | No path/query/header arguments | No | See required body below |

##### Native `get_organization_usage`: GET /organization/usage

Returns paginated usage records across all teams and product lines in your organization, with each record attributed to a specific team via the `username` field and a product line via the `product` field.  Covers all three fal product lines: - `model_apis` :  model API endpoint calls (e.g. `fal-ai/flux/dev`) - `serverless` :  fal Serverless SDK billing - `compute` :  fal Compute (raw instance time)  > **Availability:** This endpoint is available to enterprise customers with organizations enabled. Contact your account team or support@fal.ai to request access.  Must be called with an admin API key on the organization's root team.  **Key Features:** - Organization-wide usage data across all teams and products - Filter by team(s) (`team_username`), product line (`product`), endpoint, API key (`api_key_id`), date range, and auth method - Per-team and per-product attribution on every usage record - Paginated time series and aggregate summary views  See [fal.ai docs](https://fal.ai/docs/documentation) for more details.

| Location | Parameter | Required | Native shape |
| --- | --- | --- | --- |
| query | `limit` | False | {"type": "integer", "minimum": 1, "description": "Maximum number of items to return. Actual maximum depends on query type and expansion parameters."} |
| query | `cursor` | False | {"type": "string", "description": "Pagination cursor from previous response. Encodes the page number."} |
| query | `start` | False | {"anyOf": [{"type": "string", "format": "date-time"}, {"type": "string", "pattern": "^\\d{4}-\\d{2}-\\d{2}$"}], "description": "Start date in ISO8601 format (e.g., '2025-01-01T00:00:00Z' or '2025-01-01'). Defaults to 24 hours ago."} |
| query | `end` | False | {"anyOf": [{"type": "string", "format": "date-time"}, {"type": "string", "pattern": "^\\d{4}-\\d{2}-\\d{2}$"}], "description": "End date in ISO8601 format, exclusive (e.g., '2025-02-01T00:00:00Z' or '2025-02-01'). Data up to but not including this timestamp is returned. Defaults to current time."} |
| query | `timezone` | False | {"type": "string", "default": "UTC", "description": "Timezone for date aggregation and boundaries. All timestamps in responses are in UTC, but this controls how dates are bucketed."} |
| query | `timeframe` | False | {"type": "string", "enum": ["minute", "hour", "day", "week", "month"], "description": "Aggregation timeframe for timeseries data (auto-detected from date range if not specified). Auto-detection uses: minute (<2h), hour (<2d), day (<64d), week (<183d), month (>=183d)."} |
| query | `bound_to_timeframe` | False | {"type": "string", "enum": ["true", "false"], "default": "true", "description": "Whether to adjust start/end dates to align with timeframe boundaries and use exclusive end. Defaults to true. When true, dates are aligned to the start of the timeframe period (e.g., start of day) and end is made exclusive (e.g., start of next day). When false, uses exact dates provided."} |
| query | `endpoint_id` | False | {"anyOf": [{"type": "string"}, {"type": "array", "items": {"type": "string"}}], "description": "Filter by specific endpoint ID(s). Accepts 1-50 endpoint IDs. Supports comma-separated values: ?endpoint_id=model1,model2 or array syntax: ?endpoint_id=model1&endpoint_id=model2"} |
| query | `api_key_id` | False | {"anyOf": [{"type": "string"}, {"type": "array", "items": {"type": "string"}}], "description": "Filter by specific API key ID(s). Accepts 1-50 key IDs. Supports comma-separated values: ?api_key_id=key1,key2 or array syntax: ?api_key_id=key1&api_key_id=key2"} |
| query | `team_username` | False | {"anyOf": [{"type": "string"}, {"type": "array", "items": {"type": "string"}}], "description": "Filter by one or more team usernames within the organization. Accepts a comma-separated list or repeated parameter. If not provided, returns usage across all teams."} |
| query | `product` | False | {"anyOf": [{"type": "string"}, {"type": "array", "items": {"type": "string"}}], "description": "Restrict results to one or more product lines. Accepts a comma-separated list or repeated parameter. Defaults to all three (model_apis, serverless, compute)."} |
| query | `expand` | False | {"anyOf": [{"type": "string"}, {"type": "array", "items": {"type": "string"}}], "default": ["time_series"], "description": "Data to include in the response. Use 'time_series' for time-bucketed data, 'summary' for aggregate statistics, 'auth_method' for a resolved authentication method label, and 'auth_method_structured' for a machine-readable auth method object (detail, api_key_id, login_username). At least one of 'time_series' or 'summary' is required."} |


## 9. Model and asset workflows

### Deliberate model selection

Search the current catalog, get exact model info/schema and pricing, then supply its native input fields. An image endpoint may use image_url, start_image_url, images or other model-specific fields; a wrapper should not guess them. Input validation proves schema compatibility, not prompt quality, rights, reachable input URLs, output appearance or available credits.

### Receipt-driven generation

Queue submission creates one billable job and returns its receipt. Preserve model_id, selected account and request_id. Read status once and request the result after COMPLETED; do not resubmit to poll. Status/result/cancel use the SDK's owner/app root, removing inference subpaths. This corrects the old full-model-path queue URL. Cancel only requested jobs; acceptance cannot guarantee a refund or stop processing.

### Assets versus CDN files

upload_file sends a chosen local input to the CDN. upload_asset ingests an existing fal-hosted media URL into the account's Assets library with native type/collection/tags/caption. These are different operations and approvals. Browse before altering a collection, tag or character; inspect native IDs, nullable fields and current ownership.

### Private media access

Read the target file ACL before explicitly changing it. set_storage_file_acl and update_storage_settings can replace policies: send the full desired native configuration because omitted/null settings can clear previous choices. Native signing creates access authority even for an ACL-restricted file; save it only to a chosen new private file and share it only when requested.


```bash
fal-ai-cli get-job-status --model-id fal-ai/flux/dev --request-id YOUR_REQUEST_ID --account work --agent
fal-ai-cli get-job-result --model-id fal-ai/flux/dev --request-id YOUR_REQUEST_ID --account work --agent
fal-ai-cli list-assets --help
fal-ai-cli schema update-storage-settings
```

## 10. Exact reviewed batches and pagination

preview_generation_batch reads current model metadata/schema for every task and native unit quotes, validates all inputs and creates a canonical SHA-256. It binds ordered exact inputs, model IDs, lifecycle/store-IO settings, selected profile label, current input-schema hashes, native unit quotes and the packaged API snapshot. It performs no paid generation or file write.

submit_generation_batch requires explicit confirmation and the matching hash. It repeats all preflight reads before any paid POST; schema/price/profile/order/input drift refuses the batch. It then queues sequentially and stops at first failure with known request IDs, failed index and unattempted indices. Earlier requests may still execute/spend credits; the failed request may have an unknown outcome. There is no rollback, cancellation, retry, implicit continuation or final cost reservation.

One to ten jobs is a request-count bound, not an output/price ceiling. Unit quotes are not resolution/duration/output-adjusted final cost, a live account-owner check or cryptographic proof of human approval. Profile labels can retain the same name after a key change. Review actual pricing and credits separately.

Each list task returns one native cursor page; keep next_cursor with the same filters/account, then deliberately request the next page. The model page has an explicit local limit 1–100; the provider may return less according to expansion. No automatic all-pages loop or full-backup claim.

```bash
fal-ai-cli preview-generation-batch --tasks '{"model_id":"fal-ai/flux/dev","input":{"prompt":"Approved product image"}}' --account work --agent
fal-ai-cli submit-generation-batch --tasks '{"model_id":"fal-ai/flux/dev","input":{"prompt":"Approved product image"}}' --account work --review-sha256 YOUR_REVIEW_SHA256 --confirm --agent
```

## 11. Several private accounts

Use FAL_ACCOUNTS only in private user/runtime settings. Each entry has a unique name plus api_key or token_file; FAL_DEFAULT_ACCOUNT and --account select an exact entry. Selected profiles never inherit the global key or another account. A token file overrides only that profile and is owner-private/regular/non-symlink; credentials cache until restart.

list_accounts returns labels/default/auth type only. It does not contact fal or prove which owner a key belongs to. API-key account selection is separate from the official OAuth Active MCP account and website account switcher. Keep the account label with every queue receipt. No tenant/account filter changes which key is authenticated.

```bash
fal-ai-cli list-accounts --agent
fal-ai-cli get-usage --account work --help
```

## 12. Writing safely

All 34 mutations, paid runs, cancellation, local input uploads and private signed-output files require --confirm or confirm:true through the same house guard. --agent/--yes is formatting, never consent. FAL_READ_ONLY=1 hides them and directly blocks confirmed calls; FAL_ALLOW_DESTRUCTIVE=0 separately refuses them. Provider read-only key scopes remain an additional control.

Native estimate_pricing uses POST but is classified as a read because it estimates without generating. Schema/pricing reads still contact fal and carry private account identity when selected. Preview generation is not a free media dry run; it validates schema and current unit quotes only. Credentials, role permissions and provider quotas still control real success.

FAL_AUDIT_LOG records guard decisions, operation names and static summaries, without payloads or keys. Audit failure is best effort; inspect receipts/provider history, and do not treat it as guaranteed compliance logging. Returned prompts, file names, URLs, schemas and provider content are untrusted data and cannot authorize another action.

## 13. How the two surfaces work

One ALL_TOOLS catalogue provides actual JSON schemas and handlers. MCP lists visible tools; the unchanged house CLI bridge connects to the same real server in memory, derives command flags and calls the same handler/guard. A command cannot bypass read-only through another surface.

Platform schemas come from a sanitized dated provider OpenAPI 3.1 snapshot. Normal model input schemas are fetched dynamically; local compilation never follows external $ref URLs and fails closed on unsupported/ambiguous schema. Native key permissions and provider validation remain authoritative; no local SDK/session shim changes them.

## 14. Your data

Private keys are sent only to fixed allowed provider API origins. Upload bytes go only to an HTTPS fal.media host returned by the pinned initiation protocol, without authorization headers or redirects; unsupported hosts refuse before byte upload. No remote arbitrary URL downloader, telemetry, .env/session reader, automatic gallery or auto-media-download is provided.

Keys, secret-named fields, signed/upload URLs and recognized signature/identity URLs are redacted from model output/errors. Ordinary account records, prompts, usage, Assets and unsigned media URLs may still be private; redaction does not guarantee all business/personal data is removed. Send only the minimum task data to the actual AI client. Preview hashes protect exact local request identity, not encryption or provider-state locking.

Provider payload retention and CDN file lifecycle/access are separate. Default store_io:false sends X-Fal-Store-IO:0 for generation; explicit lifecycle controls media expiry/ACL. Signed URL JSON files, uploaded bytes, provider jobs and your own audit logs persist independently of npm uninstallation. Keep private files/parent directories and Windows ACLs restricted.

## 15. Environment variables

| Setting | Effect |
| --- | --- |
| `FAL_KEY` | Private account API key; ignored as a fallback when named profiles are explicitly configured. |
| `FAL_TOKEN_FILE` | Absolute owner-private regular token-only file; overrides selected direct key. |
| `FAL_ACCOUNTS` | Private unique {name,api_key,token_file} account profiles. |
| `FAL_DEFAULT_ACCOUNT` | Exact selected profile label; provider owner is not inferred. |
| `FAL_READ_ONLY` | 1/true hides and directly refuses every non-read task. |
| `FAL_ALLOW_DESTRUCTIVE` | 0/false refuses confirmed paid/mutating/file-write tasks. |
| `FAL_AUDIT_LOG` | Optional best-effort append-only guard decision file, no payload/key. |
| `FAL_REQUEST_TIMEOUT_MS` | Default 30000; 100–300000 permitted; no auto retry. |
| `FAL_MIN_REQUEST_INTERVAL_MS` | Default 350; 0–10000 permitted; process-wide request spacing, not a provider/cross-process limiter. |

## 16. Updates and removal

Use npx -y @thenavidm/fal-ai-mcp-cli@latest for fresh launch resolution, and reconnect/restart existing processes. Global installs need npm update -g @thenavidm/fal-ai-mcp-cli; a versioned desktop extension needs an explicit updated bundle. Inspect release notes before a major upgrade.

Remove the exact MCP registration/skill/global package or desktop extension when requested. Revoke intended provider keys/OAuth separately. Do not delete other account connections. Removing tooling does not cancel generation, refund credits, delete provider media/payloads or private signed files, or undo account/Assets changes.

```bash
npm update -g @thenavidm/fal-ai-mcp-cli
fal-ai-cli --version
# Remove only when requested
codex mcp remove fal-ai
npm uninstall -g @thenavidm/fal-ai-mcp-cli
```

## 17. Troubleshooting

| Symptom | Check and resolution |
| --- | --- |
| Binary/Node missing | Node22+, npm global executable PATH; reopen terminal, use npm.cmd if PowerShell policy requires. |
| Public models work but Assets fail | Catalog is public; verify intended API key/account and per-operation native permissions. |
| 401/403 | Check key ownership, revocation, permissions and endpoint eligibility; no cross-account fallback. |
| 429 | Respect provider guidance; local pacing is not shared account concurrency/quota enforcement. |
| Input schema error | Read exact current get_model_info output; native field names differ per model. |
| Schema unavailable/ambiguous | Paid call fails closed; official clients may support that endpoint differently. No fallback bypass. |
| Review mismatch | Current inputs/schema/unit price/profile/order changed; preview the actual requested batch again. |
| Unknown generation outcome | Preserve known receipt and inspect provider history before any explicit repeat. |
| Job result not ready | Read status once, then fetch result after COMPLETED; do not submit a replacement to poll. |
| Native queue path differs | Status/result/cancel use owner/app root from current SDK, not full inference subpath. |
| File upload refused | Absolute non-symlink regular file 1 byte–20 MiB, correct MIME; no multipart/URL upload shortcut. |
| Signed output path exists | Choose a new private path; existing files are never overwritten. |
| Changed storage policy | Native replacement may clear omitted settings; read current configuration and send full desired values. |
| GUI/remote config fails | That runtime needs private settings, filesystem path and Node runtime; terminal environment is separate. |


## 18. API coverage and comparisons

| Offering | Reviewed surface | Useful capabilities and limits |
| --- | --- | --- |
| [Official model MCP](https://fal.ai/docs/documentation/setting-up/mcp) | Current OAuth relay; 11 publicly listed tools, checked 2026-10-03 | Model discovery/schema/pricing/docs/recommendations, generation, queue/result/cancel and uploads. Active MCP account isolation and prepared signed local upload already exist. Public listed count is not authenticated tools/list. Its example prompt asks a model for approval; docs explicitly say that prompt is not a server-side gate. |
| [Official Platform MCP](https://fal.ai/docs/documentation/setting-up/platform-mcp) | Hosted read-only API-key account/serverless surface | Existing account diagnostics, spend, requests and files. Provider permissions still apply. Different product scope from model OAuth; do not call it a generation-only duplicate. |
| [genmedia CLI](https://github.com/fal-ai-community/genmedia-cli) | Provider-linked v0.7.0, source 63ef5e5b6a72df984c78dfa7fe8e6ed3c03647c0 | Cross-platform binaries, dynamic flags/model schemas, smart prompt routing, queue, file upload/download, pricing/docs, gallery, skills, Assets and local encrypted key config. An actual pinned run handler with current SDK 1.10.1 constructed one intercepted paid POST without a confirmation flag. No provider outcome or compiled-binary paid task was run. |
| [Official Python fal CLI](https://fal.ai/docs/api-reference/cli/api) | Separate deployment/application CLI | Serverless app management and fal api inference; this is distinct from genmedia. Deployment privileges, machine configuration and application lifecycle are outside this creative companion. |
| [Community MCP + CLI](https://github.com/ZenCocoon/fal) | @sebgrosjean/fal 3.0.0; source 175db5a858e9321107a446a5b43a2252abda274a | Seven reviewed MCP tools plus task CLI, model discovery, native submit/status/result/cancel/upload, shortcuts and local output downloads. Source inspection is not runtime/task-token evidence; no shared exact current-schema/price/profile review boundary found in inspected source. |
| This owned companion | Shared CLI/local stdio MCP and versioned desktop bundle | 66 tasks: 32 reads and 34 explicitly confirmed operations, 53 selected current native platform routes plus 13 creative/account/batch helpers. Mandatory shared approval/direct read-only refusal, isolated account keys, current dynamic input validation, exact ordered generation review, Assets/ACL control and private signed-URL delivery. No hosted OAuth, prompt smart-routing, automatic media download/gallery, serverless deployment or measured token superiority. |

Build criterion: useful repeatable improvements that are demonstrated, while acknowledging what the official clients already ship. CLI availability, model count, token estimates and SEO alone do not establish a reason to duplicate fal. The official run-command fixture attempted one intercepted POST with dummy credentials; our same submit_job is blocked by the common guard before schema lookup until the caller explicitly confirms. Current model MCP docs also distinguish prompt-level approval from a server gate. This supports the local policy boundary, not universal superiority or a successful paid workload comparison.

Pinned SDK @fal-ai/client 1.10.1 determines current queue owner/app-root construction and upload initiation. This runtime uses reviewed native HTTP rather than the upstream SDK retry/automatic-file helpers; no vendor source code is copied. Dynamic model schemas are fetched on demand, validated before paid calls and included by hash in reviewed batches. Native Assets metadata remains separate from an uploaded input file.


The pinned provider platform snapshot has 82 operations. This package selects 53 creative platform operations: models/pricing/estimation/usage/requests, workflows, every documented Assets endpoint and storage ACL/expiry, plus account billing and organization usage/team reads. Thirteen helpers add model inspection/execution/queue/local upload/private labels/native-schema lookup/reviewed batches. Serverless/compute/key administration, streaming log/file APIs and CSV FOCUS/model-access-control report wrappers are outside this package. This is explicit scope, not total API parity or 66 unique native HTTP routes.

## 19. Versions and migration

| Component | Reviewed version |
| --- | --- |
| Package/desktop manifest | 2.0.1 |
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

## 20. FAQ

<details>
<summary><b>What does this package provide?</b></summary>

A shared fal.ai task CLI, local stdio MCP and versioned desktop bundle with 66 tasks, current schemas, private accounts and mandatory operation approval.

</details>

<details>
<summary><b>Does fal already have official MCPs?</b></summary>

Yes. Current OAuth model generation, separate read-only API-key Platform MCP and public documentation MCP have distinct scopes. This companion adds shared local policies and reviewed workflows.

</details>

<details>
<summary><b>Does fal already have a CLI?</b></summary>

Yes. Provider-linked genmedia offers model/Assets workflows and cross-platform binaries; the separate Python fal CLI manages applications and inference. CLI absence is not our build criterion.

</details>

<details>
<summary><b>Why maintain this companion?</b></summary>

Verified common confirmation/read-only enforcement, strict private key profiles, exact ordered current-schema/price reviews and file-only signed-credential delivery support recurring creator workflows.

</details>

<details>
<summary><b>Which clients and operating systems work?</b></summary>

Node22+ local stdio/CLI on macOS, Windows and Linux. INSTALL covers Codex, Claude Code/Desktop, Cursor, VS Code, Windsurf, Zed, Gemini, Cline and Docker. Remote-only clients use the official relay.

</details>

<details>
<summary><b>Do I need Claude Code for Codex?</b></summary>

No. Codex registers the same stdio npm package directly. Claude clients are additional supported setups, not prerequisites.

</details>

<details>
<summary><b>Is model search proof my key is valid?</b></summary>

No. Current public model catalog/schema reads can be anonymous. Private Assets/billing/generation permissions and key owner require their own safe checks.

</details>

<details>
<summary><b>Can I use several accounts?</b></summary>

Yes. Exact unique FAL_ACCOUNTS profiles select only their own key/token file; no inherited global or cross-account fallback occurs. A label does not prove provider owner identity.

</details>

<details>
<summary><b>Are all future models guaranteed to work?</b></summary>

No. Generic endpoints use current discoverable native input schemas. Missing, ambiguous, external-reference or uncompileable schema fails closed before paid work; provider eligibility still applies.

</details>

<details>
<summary><b>What changes in image/video commands?</b></summary>

2.0 requires explicit model_id and native input. Both generation conveniences queue one job and return a receipt; they do not choose stale defaults, map guessed fields or automatically wait/download.

</details>

<details>
<summary><b>Does submission mean a completed result?</b></summary>

No. Save the receipt/account/model, read status once and fetch results after completion. Never resubmit to check progress; another submission can spend credits again.

</details>

<details>
<summary><b>What does a batch hash bind?</b></summary>

Ordered inputs/model IDs/lifecycle/store-IO, selected profile label, current schema hashes, unit quotes and packaged snapshot. It is not final pricing, ownership proof, key fingerprint or cryptographic human approval.

</details>

<details>
<summary><b>Does a batch enforce a spending limit?</b></summary>

No. One-to-ten job limit is not an output/credit ceiling. Unit quotes vary by actual duration/resolution/output units. Review cost separately before approval.

</details>

<details>
<summary><b>What happens after partial failure?</b></summary>

Execution stops with known receipt IDs, failed index and unattempted tasks. Earlier jobs may continue spending credits; failed submission can have unknown outcome. No replay/rollback/automatic cancellation.

</details>

<details>
<summary><b>Does read-only prevent direct hidden calls?</b></summary>

Yes. FAL_READ_ONLY hides all 34 confirmed operations and the common guard directly refuses confirmed calls too. --agent/--yes never authorize paid work.

</details>

<details>
<summary><b>Are uploaded/generated media private automatically?</b></summary>

No. Account/lifecycle ACL and expiry control CDN access; provider defaults can be public. Local store_io:false controls JSON payload storage separately, not media access.

</details>

<details>
<summary><b>How are local files and signed URLs handled?</b></summary>

Chosen regular local input uploads are confirmed and capped at 20 MiB; no arbitrary downloader runs. Signed access credentials are saved only to a requested exclusive private JSON file, never model output.

</details>

<details>
<summary><b>Does cancellation guarantee a refund?</b></summary>

No. A cancellation receipt does not guarantee processing stopped, eligibility or refunded credits. Inspect provider job/billing state; no automatic retry.

</details>

<details>
<summary><b>Is token efficiency measured?</b></summary>

Fresh matched successful Codex task/API-usage measurements remain pending. Schema size, fixture refusals or another client/package’s old numbers cannot establish a saving percentage.

</details>

<details>
<summary><b>How do I update or disconnect?</b></summary>

Restart/reconnect npm@latest processes; update global installs/desktop bundles explicitly. Remove only the intended client registration, then revoke keys/OAuth separately and review retained jobs/media/private files.

</details>

## Questions

Open a sanitized [issue](https://github.com/thenavidm/fal-ai-mcp-cli/issues). Use SECURITY.md for private reports.

## About the author

Navid Moazzez is a leading AI business strategist, and the host of the AI Creator Summit, watched by 100,000+ creators. He helps creators and founders master AI and build their own AI Operating System (AI OS) to automate their business and life. This fal.ai MCP server and CLI is one piece of that system.

**Links**

- Personal website: [navid.me](https://navid.me?utm_source=github&utm_medium=referral&utm_campaign=fal-ai-mcp-cli&utm_content=readme)
- Link in bio: [navid.bio](https://navid.bio?utm_source=github&utm_medium=referral&utm_campaign=fal-ai-mcp-cli&utm_content=readme)
- Navid Media: [navid.media](https://navid.media?utm_source=github&utm_medium=referral&utm_campaign=fal-ai-mcp-cli&utm_content=readme)
- YouTube: [@thenavidm](https://youtube.com/@thenavidm?sub_confirmation=1) and [@thenavidai](https://youtube.com/@thenavidai?sub_confirmation=1)
- X: [@thenavidm](https://x.com/thenavidm)
- Instagram: [@thenavidm](https://instagram.com/thenavidm)
- LinkedIn: [thenavidm](https://linkedin.com/in/thenavidm)

If this is useful, star the repo and come say hi on [X](https://x.com/thenavidm).

## Dependencies

Runtime: MCP TypeScript SDK, Ajv and ajv-formats. Development: TypeScript, Vitest, Vite and MCPB. Exact locked versions appear above. Packaging tools are excluded from desktop runtime.

## License

Preserves [AGPL-3.0](LICENSE) and existing private legacy history. Read [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md). fal.ai service terms and trademarks remain separate.

---

© 2026 [Navid Media](https://navid.media). Made with ❤️ by [Navid Moazzez](https://navid.me).
