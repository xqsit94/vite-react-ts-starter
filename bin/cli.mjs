#!/usr/bin/env node

import { execSync } from 'child_process'
import inquirer from 'inquirer'
import chalk from 'chalk'

const runCommand = (command) => {
  try {
    execSync(command, { stdio: 'inherit' })
  } catch (error) {
    console.error(chalk.red(`Failed to execute: ${command}`))
    return false
  }
  return true
}

const questions = [
  {
    type: 'list',
    name: 'packageManager',
    message: 'Which package manager do you want to use?',
    choices: ['npm', 'yarn', 'pnpm'],
    filter: function (val) {
      return val.toLowerCase()
    }
  }
]

inquirer.prompt(questions).then((answers) => {
  const repoName = process.argv[2]
  const gitCheckoutCommand = `git clone --depth 1 https://github.com/xqsit94/vite-react-ts-starter ${repoName}`

  console.log(chalk.green(`Creating ${repoName}...`))

  const checkOut = runCommand(gitCheckoutCommand)
  if (!checkOut) {
    process.exit(-1)
  }

  let installCommand
  switch (answers.packageManager) {
    case 'npm':
      installCommand = `cd ${repoName} && rm -f package-lock.json && npm install`
      break
    case 'yarn':
      installCommand = `cd ${repoName} && rm -f package-lock.json && yarn install`
      break
    case 'pnpm':
      installCommand = `cd ${repoName} && rm -f package-lock.json && pnpm install`
      break
  }

  console.log(
    chalk.cyan(
      `Installing dependencies for ${repoName} using ${answers.packageManager}...`
    )
  )
  const install = runCommand(installCommand)

  if (!install) {
    process.exit(-1)
  }

  let cleanupCommand
  switch (answers.packageManager) {
    case 'npm':
      cleanupCommand = `cd ${repoName} && npm uninstall chalk inquirer`
      break
    case 'yarn':
      cleanupCommand = `cd ${repoName} && yarn remove chalk inquirer`
      break
    case 'pnpm':
      cleanupCommand = `cd ${repoName} && pnpm remove chalk inquirer`
      break
  }

  console.log(chalk.magenta('Cleaning up...'))
  runCommand(cleanupCommand)

  console.log(chalk.green(`Successfully created ${repoName}!`))
  console.log(
    chalk.yellow(`cd ${repoName} && ${answers.packageManager} run dev`)
  )
})
