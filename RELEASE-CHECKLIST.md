# Release checklist

- Verify current provider OpenAPI/SDK/genmedia/official MCP/community sources and owned build criterion.
- Build/typecheck/test; actual 66/32 discovery, policy/refusals and real anonymous catalog reads.
- Run the actual house check-blueprint gate and inspect rendered FAQ/assets/footer.
- Check scope/version/changelog/lock/desktop/topics/npm keywords.
- Scan source/history/npm/desktop and production audit; keep private legacy history separate.
- Pass all seven Linux/macOS/Windows Node22/24+desktop CI jobs before annotated default-branch version tag.
- Verify tag CI/release/npm latest, fresh anonymous named/@latest installs, downloaded desktop discovery and scans.
- Publish complete native CMS guide through existing pipeline, preserve publication/indexing fields, read back/revalidate/live verify.
- Measure Claude Code (every tool loaded, tool search, SKILL.md) and Codex (one task over MCP and the CLI, five runs each) against the last npm release, and publish the figures in README section 7. Record provider/GUI/site deployment gaps separately; never call the program complete while any is pending.
