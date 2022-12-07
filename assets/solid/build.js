const { build } = require("esbuild");
const { solidPlugin } = require("esbuild-plugin-solid");

build({
  entryPoints: ["src/index.jsx"],
  bundle: true,
  outfile: "www/main.js",
  minify: true,
  loader: {
    ".svg": "dataurl",
  },
  logLevel: "info",
  plugins: [solidPlugin()],
}).catch(() => process.exit(1));
