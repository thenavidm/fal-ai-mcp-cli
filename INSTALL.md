# Install fal.ai MCP Server & CLI

One npm package includes both binaries and all **66 tools**. Requires Node.js 22 or newer for CLI/manual MCP installs. Discovery works before account authentication. Account operations need intended fal API access; provider account plans, key permissions and API quota apply.

| Route | Program | Use |
| --- | --- | --- |
| Terminal | fal-ai-cli | Scripts and agents with a shell |
| Local MCP | fal-ai-mcp | AI clients supporting stdio |
| Desktop archive | fal-ai-2.0.0.mcpb | Compatible Claude Desktop custom extensions |
| fal.ai-hosted alternative | https://mcp.fal.ai/mcp-relay | Official remote provider-hosted access |

## Contents

[Requirements](#requirements) · [CLI](#cli) · [Private account setup](#private-account-setup) · [Claude Code](#claude-code) · [Codex](#codex) · [Claude Desktop](#claude-desktop) · [Cursor](#cursor) · [VS Code and Copilot](#vs-code-and-copilot) · [Windsurf](#windsurf) · [Zed](#zed) · [Gemini CLI](#gemini-cli) · [Docker](#docker) · [Verify](#verify) · [Multiple accounts](#multiple-accounts) · [Updates and removal](#updates-and-removal) · [Troubleshooting](#troubleshooting) · [Development](#development)

## Requirements

Install Node from [nodejs.org](https://nodejs.org/en/download). Open a new terminal and check `node --version` and `npm --version`. The desktop host needs a compatible Node runtime; dependencies are bundled. A GUI app may not inherit your terminal's environment. Check your account's current API access and quota with fal.ai instead of assuming npm installation provides it.

## CLI

On macOS/Linux, use Terminal. On Windows, use PowerShell or Command Prompt:

```bash
npm install -g @thenavidm/fal-ai-mcp-cli@latest
fal-ai-cli --version
fal-ai-cli
fal-ai-cli search-models --help
fal-ai-cli schema submit-job
fal-ai-cli login
```

If PowerShell blocks npm.ps1, use npm.cmd or Command Prompt according to your policy. If a binary is missing, check `npm prefix -g`, ensure its executable directory is on PATH and open a new terminal. Avoid sudo as a workaround for PATH problems.

For one command without a global install:

```bash
npx -y --package @thenavidm/fal-ai-mcp-cli@latest fal-ai-cli tools
```

Make [SKILL.md](./SKILL.md) available in your agent's supported skill location. The installed file is `<npm root -g>/@thenavidm/fal-ai-mcp-cli/SKILL.md`. npm does not automatically register client skills. Your agent should read the actual schema and use --agent/--select for compact output.

## Private account setup

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


```bash
export FAL_TOKEN_FILE='/absolute/private/fal.txt'
fal-ai-cli doctor --network
```

### Agent-guided installation

> Help me install fal.ai MCP Server & CLI with INSTALL.md. Check Node and the binary, let me configure my account credentials privately, then run discovery and doctor --network. Do not change or mutate accounts during setup.

## Codex

Codex is the current validation priority. Private token paths must exist in the process or remote environment where the server runs.

~~~bash
codex mcp add fal-ai -- npx -y @thenavidm/fal-ai-mcp-cli@latest
codex mcp list
~~~

Account credentials must reach the server through private environment settings. `codex mcp add --env NAME=value` stores values in your local config, so never commit that config or put secrets in a shared command. In TOML, the equivalent server is:

~~~toml
[mcp_servers.fal-ai]
command = "npx"
args = ["-y", "@thenavidm/fal-ai-mcp-cli@latest"]
env_vars = ["FAL_KEY", "FAL_TOKEN_FILE", "FAL_ACCOUNTS", "FAL_DEFAULT_ACCOUNT", "FAL_READ_ONLY", "FAL_ALLOW_DESTRUCTIVE"]
~~~

`env_vars` forwards those names from the environment available to Codex. If that environment does not contain them, configure private env settings locally. Codex can also call the CLI directly with SKILL.md and `--agent` output.

## Claude Code

For a user-scoped connection, after privately configuring credentials:

~~~bash
claude mcp add --scope user fal-ai -- npx -y @thenavidm/fal-ai-mcp-cli@latest
claude mcp list
~~~

Use the client's private local environment settings for the account variable if they are not inherited. Claude's `-e NAME=value` registration option writes values into its config; only use it locally through your secret manager, with no shared command transcript. Never place credentials in a project .mcp.json. Reconnect and ask Claude to verify credentials.

Alternatively install the CLI, make SKILL.md available to Claude, and use shell commands. Registering both surfaces is optional.

## Claude Desktop

### Install the .mcpb extension

1. Download `fal-ai-2.0.0.mcpb` from [GitHub Releases](https://github.com/thenavidm/fal-ai-mcp-cli/releases/latest).
2. In a supported Claude Desktop build, open **Settings > Extensions > Advanced settings > Install Extension…** and select it.
3. Enter a private API key in the sensitive setting, or an absolute private token-file path. Leave the unused credential method empty. Requests use Authorization: Bearer at the fixed fal.ai endpoint. Use the intended account API key; named profiles are configured separately in private client environments.
4. Enable read-only if you want only the 22 read operations. Reconnect and ask for account verification.

The bundle includes production dependencies and no credentials. Use a regular private token-only file if you prefer file-based credentials. The manifest requires Node 22 or newer from a compatible host. Organization policy may restrict custom extensions. Manual bundle updates require installing the new version; no automatic directory updates are promised. GUI installation remains unverified separately from archive/protocol checks.

### Manual config

Open **Settings > Developer > Edit Config**, or use your platform's config file:

| OS | Typical config path |
| --- | --- |
| macOS | `~/Library/Application Support/Claude/claude_desktop_config.json` |
| Windows | `%APPDATA%\Claude\claude_desktop_config.json` |
| Linux | `~/.config/Claude/claude_desktop_config.json`; confirm the location through Edit Config in your installed build |

~~~json
{
  "mcpServers": {
    "fal-ai": {
      "command": "npx",
      "args": ["-y", "@thenavidm/fal-ai-mcp-cli@latest"],
      "env": {
        "FAL_KEY": "YOUR_PRIVATE_API_KEY",
        "FAL_TOKEN_FILE": ""
      }
    }
  }
}
~~~

Replace the placeholders only in your private file. Merge the server entry into an existing mcpServers object instead of replacing other integrations. Fully quit and reopen Claude Desktop. Do not enable an extension and a manual entry with the same name; choose one route.

If a Windows launcher cannot execute npx directly, use `"command": "cmd"` with `"args": ["/c", "npx", "-y", "@thenavidm/fal-ai-mcp-cli@latest"]`. An absolute node executable and installed `dist/index.js` path also avoids launcher/PATH problems.

## Cursor

Use private user settings at `~/.cursor/mcp.json`, or **Settings > Tools & MCP**. [Cursor documents environment interpolation and envFile support](https://cursor.com/docs/mcp).

~~~json
{
  "mcpServers": {
    "fal-ai": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "@thenavidm/fal-ai-mcp-cli@latest"],
      "env": {
        "FAL_KEY": "${env:FAL_KEY}",
        "FAL_TOKEN_FILE": "${env:FAL_TOKEN_FILE}"
      }
    }
  }
}
~~~

The environment values must exist for the Cursor process. If you use envFile, keep that file private and outside version control. A project's .cursor/mcp.json must not contain actual credentials. Reconnect the server after saving.

## VS Code and Copilot

Use **MCP: Open User Configuration**. [VS Code uses servers and secure inputs](https://code.visualstudio.com/docs/agent-customization/mcp-servers), rather than a mcpServers root:

~~~json
{
  "inputs": [
    {"type": "promptString", "id": "fal-ai-api-token", "description": "fal.ai API key (leave empty for a private token file)", "password": true},
    {"type": "promptString", "id": "fal-ai-token-file", "description": "Optional private token-file path (leave empty for API key)"}
  ],
  "servers": {
    "fal-ai": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "@thenavidm/fal-ai-mcp-cli@latest"],
      "env": {
        "FAL_KEY": "${input:fal-ai-api-token}",
        "FAL_TOKEN_FILE": "${input:fal-ai-token-file}"
      }
    }
  }
}
~~~

Start fal.ai through the MCP controls, approve trust if prompted, and enter credentials in the private input prompts. Workspace .vscode/mcp.json may contain this placeholder-only structure, but never resolved secret values. Remote development runs the server in the selected remote environment, so local file paths refer to that environment.

## Windsurf

Open Cascade's MCP settings or edit the private user file `~/.codeium/windsurf/mcp_config.json`. Use the Claude Desktop manual mcpServers block above with your locally configured env values. See [Windsurf's current MCP documentation](https://docs.devin.ai/desktop/cascade/mcp). Restart or reconnect fal.ai in Cascade; project files must not contain secrets.

## Zed

Open **Settings > AI > MCP Servers > Add Server > Add Local Server**, or your user settings file. [Zed uses context_servers](https://zed.dev/docs/ai/mcp):

~~~json
{
  "context_servers": {
    "fal-ai": {
      "command": "npx",
      "args": ["-y", "@thenavidm/fal-ai-mcp-cli@latest"],
      "env": {
        "FAL_KEY": "YOUR_PRIVATE_API_KEY",
        "FAL_TOKEN_FILE": ""
      }
    }
  }
}
~~~

Enter actual values only in private user settings. Check the active-server indicator before prompting. Do not wrap command and args inside a nested command object from older Zed examples.

## Gemini CLI

Merge the Claude Desktop manual mcpServers block into your private `~/.gemini/settings.json`. Configure the private credential values locally, then restart Gemini CLI and inspect `/mcp`. See [Gemini CLI's MCP configuration](https://geminicli.com/docs/tools/mcp-server/). Its project settings must not contain real credentials. You can instead use the CLI from an agent shell.

Other local stdio clients use the same command and arguments, adapted to their config format. A client that only accepts a remote MCP URL cannot connect directly: this package does not ship a public HTTP listener. ChatGPT's remote connector setup is not a substitute for local stdio installation.

## Docker

Build locally from the reviewed source; no prebuilt registry image is claimed:

```bash
git clone https://github.com/thenavidm/fal-ai-mcp-cli.git
cd fal-ai-mcp-cli
docker build -t fal-ai-mcp-cli .
docker run --rm -i -e FAL_KEY fal-ai-mcp-cli
```


## Cline and other local MCP clients

Use the client's **Add MCP server** flow with command `npx`, arguments `-y` and `@thenavidm/fal-ai-mcp-cli@latest`, stdio transport, and private local FAL_KEY or FAL_TOKEN_FILE settings. UI names depend on the installed client. Reconnect and discover tools before an account call. Browser-only clients need a remote HTTPS connector; use fal.ai's official server rather than this local stdio command.

## Verify

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

## Multiple accounts

Use FAL_ACCOUNTS only in private user/runtime settings. Each entry has a unique name plus api_key or token_file; FAL_DEFAULT_ACCOUNT and --account select an exact entry. Selected profiles never inherit the global key or another account. A token file overrides only that profile and is owner-private/regular/non-symlink; credentials cache until restart.

list_accounts returns labels/default/auth type only. It does not contact fal or prove which owner a key belongs to. API-key account selection is separate from the official OAuth Active MCP account and website account switcher. Keep the account label with every queue receipt. No tenant/account filter changes which key is authenticated.

```bash
fal-ai-cli list-accounts --agent
fal-ai-cli get-usage --account work --help
```

## Updates and removal

Use npx -y @thenavidm/fal-ai-mcp-cli@latest for fresh launch resolution, and reconnect/restart existing processes. Global installs need npm update -g @thenavidm/fal-ai-mcp-cli; a versioned desktop extension needs an explicit updated bundle. Inspect release notes before a major upgrade.

Remove the exact MCP registration/skill/global package or desktop extension when requested. Revoke intended provider keys/OAuth separately. Do not delete other account connections. Removing tooling does not cancel generation, refund credits, delete provider media/payloads or private signed files, or undo account/Assets changes.

```bash
npm update -g @thenavidm/fal-ai-mcp-cli
fal-ai-cli --version
# Remove only when requested
codex mcp remove fal-ai
npm uninstall -g @thenavidm/fal-ai-mcp-cli
```

## Troubleshooting

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


## Development

```bash
git clone https://github.com/thenavidm/fal-ai-mcp-cli.git
cd fal-ai-mcp-cli
npm ci
npm run typecheck
npm run build
npm test
npm run check:counts
npm run build:mcpb
```

Source mode: configure private env, then register `node /absolute/path/fal-ai-mcp-cli/dist/index.js` as the MCP command. Build before registration and after source changes. No local credentials are packaged. [CONTRIBUTING.md](./CONTRIBUTING.md), [SECURITY.md](./SECURITY.md) and [THIRD_PARTY_NOTICES.md](./THIRD_PARTY_NOTICES.md) cover contributions, disclosures and licensing.
