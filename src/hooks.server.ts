import type { Handle } from '@sveltejs/kit';
import { sequence } from '@sveltejs/kit/hooks';
import fs from 'fs';
import path from 'path';

// Handle static files
const handleStatic: Handle = async ({ event, resolve }) => {
    const { pathname } = event.url;
    
    // List of file extensions to handle as static
    const staticExtensions = ['.txt', '.png', '.jpg', '.jpeg', '.heic', '.pdf'];
    
    if (staticExtensions.some(ext => pathname.toLowerCase().endsWith(ext))) {
        // Check if file exists in static directory
        const filePath = path.join('static', pathname);
        
        try {
            if (fs.existsSync(filePath)) {
                const file = fs.readFileSync(filePath);
                const ext = path.extname(pathname).toLowerCase();
                
                // Set appropriate content type
                const contentTypes: Record<string, string> = {
                    '.txt': 'text/plain',
                    '.png': 'image/png',
                    '.jpg': 'image/jpeg',
                    '.jpeg': 'image/jpeg',
                    '.heic': 'image/heic',
                    '.pdf': 'application/pdf'
                };
                
                return new Response(file, {
                    headers: {
                        'content-type': contentTypes[ext] || 'application/octet-stream',
                        'cache-control': 'public, max-age=31536000'
                    }
                });
            }
        } catch (error) {
            console.error('Error serving static file:', error);
        }
    }
    
    return resolve(event);
};

// Combine with any existing hooks
export const handle = sequence(handleStatic);