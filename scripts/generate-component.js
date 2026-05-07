import fs from "fs"
import path from "path"
// import { fileURLToPath } from "url"

// const __filename = fileURLToPath(import.meta.url)
// const __dirname = path.dirname(__filename);

const args = process.argv.slice(2)
const name = args[0]
const isShared = args.includes("--shared")
const featureName = args.includes("--feature")
  ? args[args.indexOf("--feature") + 1]
  : null

if (!name) {
  console.log("\x1b[31m%s\x1b[0m", "Error: Component name is required.")
  console.log(
    "Usage: node scripts/generate-component.js <ComponentName> [--shared | --feature <featureName>]"
  )
  process.exit(1)
}

// Convert PascalCase to kebab-case for file name
const kebabName = name.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()

let targetDir
if (isShared) {
  targetDir = path.join(process.cwd(), "src", "components", "shared")
} else if (featureName) {
  targetDir = path.join(
    process.cwd(),
    "src",
    "features",
    featureName,
    "components"
  )
} else {
  console.log("\x1b[31m%s\x1b[0m", "Error: Destination must be specified.")
  console.log("Use --shared or --feature <name>")
  process.exit(1)
}

const targetFile = path.join(targetDir, `${kebabName}.tsx`)

if (fs.existsSync(targetFile)) {
  console.log(
    "\x1b[33m%s\x1b[0m",
    `Warning: File already exists at ${targetFile}`
  )
  process.exit(1)
}

if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true })
}

const template = `import { cn } from "@/lib/utils"

interface ${name}Props {
  className?: string
}

const ${name} = ({ className }: ${name}Props) => {
  return (
    <div className={cn("", className)}>
      ${name} Component
    </div>
  )
}

export { ${name} }
`

fs.writeFileSync(targetFile, template)
console.log("\x1b[32m%s\x1b[0m", `Successfully generated: ${targetFile}`)
