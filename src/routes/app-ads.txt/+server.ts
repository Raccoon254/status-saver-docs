import { readFileSync } from 'fs';
import { join } from 'path';
import { text } from '@sveltejs/kit';

export function GET() {
    const filePath = join(process.cwd(), 'static', 'app-ads.txt');
    const content = readFileSync(filePath, 'utf8');
    return text(content);
}