// src/routes/app-ads.txt/+server.ts
import { json } from '@sveltejs/kit';
import { readFile } from 'fs/promises';

export async function GET() {
  const content = await readFile('static/app-ads.txt', 'utf8');
  return new Response(content, {
    headers: { 'Content-Type': 'text/plain' }
  });
}