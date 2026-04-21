#!/usr/bin/env node

import readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const DEFAULT_BOARD_ID = '69790c5ce0c8d1b6a07c0cfd';
const TARGET_LISTS = [
  'Inbox',
  'This Week',
  'Doing',
  'Waiting on Phil',
  'Waiting on Client',
  'Ready to Publish / Deploy',
  'Live',
  'Parked',
];

async function promptForMissing(name, rl) {
  if (process.env[name]?.trim()) return process.env[name].trim();
  const value = await rl.question(`${name}: `);
  return value.trim();
}

async function trello(path, { method = 'GET', key, token, body } = {}) {
  const url = new URL(`https://api.trello.com/1${path}`);
  url.searchParams.set('key', key);
  url.searchParams.set('token', token);

  const response = await fetch(url, {
    method,
    headers: body ? { 'Content-Type': 'application/json' } : undefined,
    body: body ? JSON.stringify(body) : undefined,
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(`${method} ${path} failed (${response.status}): ${text}`);
  }

  const text = await response.text();
  return text ? JSON.parse(text) : null;
}

async function main() {
  const rl = readline.createInterface({ input, output });

  try {
    const key = await promptForMissing('TRELLO_KEY', rl);
    const token = await promptForMissing('TRELLO_TOKEN', rl);
    const boardId = process.env.TRELLO_BOARD_ID?.trim() || DEFAULT_BOARD_ID;

    const board = await trello(`/boards/${boardId}`, { key, token });
    console.log(`Connected to board: ${board.name} (${board.id})`);

    const existingLists = await trello(`/boards/${boardId}/lists`, { key, token });
    const existingNames = new Set(existingLists.map(list => list.name));

    console.log('\nExisting lists:');
    existingLists.forEach((list, index) => {
      console.log(`${index + 1}. ${list.name}`);
    });

    const missing = TARGET_LISTS.filter(name => !existingNames.has(name));

    if (missing.length === 0) {
      console.log('\nAll target lists already exist.');
      return;
    }

    console.log('\nCreating missing lists:');
    for (const name of missing) {
      const created = await trello(`/boards/${boardId}/lists`, {
        method: 'POST',
        key,
        token,
        body: { name, pos: 'bottom' },
      });
      console.log(`+ ${created.name}`);
    }

    const finalLists = await trello(`/boards/${boardId}/lists`, { key, token });
    console.log('\nFinal list order:');
    finalLists.forEach((list, index) => {
      console.log(`${index + 1}. ${list.name}`);
    });
  } finally {
    rl.close();
  }
}

main().catch(error => {
  console.error('\nTrello setup failed.');
  console.error(error.message);
  process.exit(1);
});
