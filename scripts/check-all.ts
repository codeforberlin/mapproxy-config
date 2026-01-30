#!/usr/bin/env bun

import { join } from 'node:path'
import * as p from '@clack/prompts'
import { spawn } from 'bun'

async function runScript(scriptPath: string, args: string[] = []): Promise<boolean> {
  const proc = spawn(['bun', 'run', scriptPath, ...args], {
    stdout: 'inherit',
    stderr: 'inherit',
  })

  await proc.exited
  return proc.exitCode === 0
}

async function main() {
  p.intro('Checking All Configurations')

  const scriptsDir = join(import.meta.dir)

  const step1 = p.spinner()
  step1.start('Generating layer documentation for all sources...')
  p.log.info('This will update all layer_docs/*.md files with discovered layers')
  const docsSuccess = await runScript(join(scriptsDir, 'discover-layers.ts'), ['--all'])
  if (docsSuccess) {
    step1.stop('✓ Layer documentation generated')
    p.log.success('Layer docs updated in layer_docs/')
  } else {
    step1.stop('✗ Failed to generate layer documentation')
    p.log.error('Layer documentation generation failed')
  }

  const step2 = p.spinner()
  step2.start('Checking all WMS URLs...')
  p.log.info('This will validate all WMS URLs and update *_comments.yml files with check results')
  const checkSuccess = await runScript(join(scriptsDir, 'check-urls.ts'))
  if (checkSuccess) {
    step2.stop('✓ URL checks completed')
    p.log.success('URL checks completed - see url-check-report.md for details')
  } else {
    step2.stop('✗ Some URL checks failed')
    p.log.warn('Some URLs may have issues - check url-check-report.md')
  }

  const step3 = p.spinner()
  step3.start('Updating demo links README...')
  p.log.info('This will regenerate demo_links/README.md with all layers and URL check results')
  const demoSuccess = await runScript(join(scriptsDir, 'create_readme.ts'))
  if (demoSuccess) {
    step3.stop('✓ Demo links updated')
    p.log.success('Demo links README updated at demo_links/README.md')
  } else {
    step3.stop('✗ Failed to update demo links')
    p.log.error('Demo links update failed')
  }

  p.log.info('')
  if (docsSuccess && checkSuccess && demoSuccess) {
    p.outro('All checks completed successfully!')
  } else {
    const issues = []
    if (!docsSuccess) issues.push('layer docs')
    if (!checkSuccess) issues.push('URL checks')
    if (!demoSuccess) issues.push('demo links')
    p.outro(`Completed with issues in: ${issues.join(', ')}`)
  }
}

main().catch((error) => {
  p.log.error(`Unexpected error: ${error.message}`)
  process.exit(1)
})
