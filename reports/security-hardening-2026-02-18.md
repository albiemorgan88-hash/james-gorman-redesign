# Security Hardening Report — 2026-02-18

## 1. SSH Hardening

- **SSH (sshd) is NOT running** — Remote Login is disabled on this Mac Mini
- No sshd process found, no launchd job active
- **SSH config** (`/etc/ssh/sshd_config`): All defaults (commented out), password auth would be enabled if SSH were turned on
- **SSH keys**: No user keys exist in `~/.ssh/` — only a `known_hosts` file
- **Recommendation**: If SSH is ever enabled, create a hardened config in `/etc/ssh/sshd_config.d/` with:
  - `PasswordAuthentication no`
  - `KbdInteractiveAuthentication no`
  - `PermitRootLogin no`
  - `PubkeyAuthentication yes`

### Action needed: None (SSH is off)

## 2. Tailscale

- **Installed** via Homebrew: `tailscale 1.94.1`
- **NOT started or configured** — PJ needs to authenticate

### PJ setup steps:
1. Start the daemon: `brew services start tailscale`
2. Authenticate: `tailscale up`
3. Follow the URL to log in with your Tailscale account
4. Optionally enable SSH via Tailscale: `tailscale up --ssh` (secure alternative to system SSH)
5. Configure ACLs in the Tailscale admin console

## 3. Security Check Script

- **Created**: `scripts/security-check.sh` (executable)
- Checks: SSH status, open ports, top processes, disk usage, OpenClaw gateway, SearXNG, credential file permissions, Tailscale status
- **PJ needs to**: Set up a cron job to run this on a schedule, e.g.:
  ```
  # Every 6 hours
  0 */6 * * * /Users/philsagent/.openclaw/workspace/scripts/security-check.sh >> /Users/philsagent/.openclaw/workspace/logs/security-check.log 2>&1
  ```

## Summary

| Item | Status |
|------|--------|
| SSH | ✅ Disabled (no action needed) |
| SSH keys | ℹ️ None exist — generate if needed |
| Tailscale | ✅ Installed, awaiting PJ auth |
| Security script | ✅ Created and executable |
| Cron job | ⏳ PJ to configure |
