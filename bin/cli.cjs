#!/usr/bin/env node

const { execSync } = require('child_process')
const runCommand = (command) => {
  try {
    execSync(command, { stdio: 'inherit' })
  } catch (error) {
    console.error(`Failed to execute: ${command}`)
    return false
  }
  return true
}

const repoName = process.argv[2]
const gitCheckoutCommand = `git clone --depth 1 https://github.com/xqsit94/vite-react-ts-starter ${repoName}`
const installCommand = `cd ${repoName} && npm install`

console.log(`Creating ${repoName}...`)

const checkOut = runCommand(gitCheckoutCommand)
if (!checkOut) {
  process.exit(-1)
}

console.log(`Installing dependencies for ${repoName}...`)
const install = runCommand(installCommand)

if (!install) {
  process.exit(-1)
}

console.log(`Successfully created ${repoName}!`)
console.log(`cd ${repoName} && npm run dev`)
