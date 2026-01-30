#!/usr/bin/env bun

import { join } from 'node:path'
import { spawn } from 'bun'

async function main() {
  console.log('Generating layer documentation for all sources...\n')

  const scriptPath = join(import.meta.dir, 'discover-layers.ts')

  const proc = spawn(['bun', 'run', scriptPath, '--all'], {
    stdout: 'inherit',
    stderr: 'inherit',
  })

  await proc.exited

  if (proc.exitCode === 0) {
    console.log('\n✓ All layer documentation generated successfully')
  } else {
    console.error('\n✗ Some errors occurred during generation')
    process.exit(proc.exitCode || 1)
  }
}

main().catch(console.error)
