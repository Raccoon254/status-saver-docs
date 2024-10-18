import { json } from '@sveltejs/kit';

export function GET() {
  const content = "google.com, pub-4843196762316516, DIRECT, f08c47fec0942fa0"
  return json(content);
}