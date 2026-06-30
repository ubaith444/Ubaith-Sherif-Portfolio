import { spawn } from "node:child_process";

const port = process.argv[2] ?? process.env.PORT ?? "3002";
const isWindows = process.platform === "win32";
if (!/^\d+$/.test(port)) {
  process.stderr.write(`Invalid port: ${port}\n`);
  process.exit(1);
}

const command = isWindows ? (process.env.ComSpec ?? "cmd.exe") : "npm";
const args = isWindows
  ? ["/d", "/s", "/c", `npm.cmd run start -- -p ${port}`]
  : ["run", "start", "--", "-p", port];

const child = spawn(command, args, {
  stdio: "inherit",
  shell: false
});

child.on("exit", (code, signal) => {
  if (signal) {
    process.kill(process.pid, signal);
  }
  process.exit(code ?? 0);
});

for (const signal of ["SIGINT", "SIGTERM"]) {
  process.on(signal, () => {
    child.kill(signal);
  });
}
