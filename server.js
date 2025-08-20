// Simple proxy server to handle Claude API requests
const http = require('http');
const https = require('https');
const fs = require('fs');
const path = require('path');
const url = require('url');

const PORT = 3000;
const API_KEY = process.env.CLAUDE_API_KEY || 'YOUR_CLAUDE_API_KEY_HERE';

// Create HTTP server
const server = http.createServer(async (req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const pathname = parsedUrl.pathname;

    // Enable CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // Handle preflight requests
    if (req.method === 'OPTIONS') {
        res.writeHead(200);
        res.end();
        return;
    }

    // Serve static files
    if (req.method === 'GET') {
        let filePath = '.' + pathname;
        if (filePath === './') {
            filePath = './index.html';
        }

        const extname = String(path.extname(filePath)).toLowerCase();
        const mimeTypes = {
            '.html': 'text/html',
            '.js': 'text/javascript',
            '.css': 'text/css',
            '.json': 'application/json',
            '.png': 'image/png',
            '.jpg': 'image/jpg',
            '.gif': 'image/gif',
            '.svg': 'image/svg+xml',
            '.ico': 'image/x-icon'
        };

        const contentType = mimeTypes[extname] || 'application/octet-stream';

        fs.readFile(filePath, (error, content) => {
            if (error) {
                if (error.code === 'ENOENT') {
                    res.writeHead(404);
                    res.end('File not found');
                } else {
                    res.writeHead(500);
                    res.end('Server error: ' + error.code);
                }
            } else {
                res.writeHead(200, { 'Content-Type': contentType });
                res.end(content, 'utf-8');
            }
        });
        return;
    }

    // Handle API proxy requests
    if (pathname === '/api/generate' && req.method === 'POST') {
        let body = '';
        
        req.on('data', chunk => {
            body += chunk.toString();
        });

        req.on('end', () => {
            try {
                const requestData = JSON.parse(body);
                
                // Use temperature from request or default to 0.5
                const temperature = requestData.temperature || 0.5;
                
                // Random layout patterns to force variety
                const layouts = [
                    { 
                        name: 'Bento Box Grid',
                        structure: 'Use CSS Grid with varying cell sizes (1x1, 2x1, 1x2, 2x2). NO sidebars. Main content in large center cell, smaller cells around it.',
                        forbidden: 'No traditional sidebar, no equal-sized cards'
                    },
                    { 
                        name: 'Horizontal Ticker',
                        structure: 'Full-width horizontal scrolling sections. Each section is 100vw wide. Navigation dots at bottom.',
                        forbidden: 'No vertical scrolling, no sidebars, no grid layouts'
                    },
                    { 
                        name: 'Circular Dashboard',
                        structure: 'Central circular display with radial menu items arranged in a circle around it. Use transform: rotate() for positioning.',
                        forbidden: 'No rectangles for main content, no traditional navigation'
                    },
                    { 
                        name: 'Magazine Layout',
                        structure: 'Multi-column text flow with large featured images. Use CSS columns and column-span.',
                        forbidden: 'No sidebars, no card grids, no dashboards'
                    },
                    { 
                        name: 'Floating Islands',
                        structure: 'Draggable floating panels at different z-indexes. Use position: absolute with transform.',
                        forbidden: 'No grids, no fixed layouts, no sidebars'
                    },
                    { 
                        name: 'Split Diagonal',
                        structure: 'Screen split diagonally using clip-path. Two contrasting sections with skewed boundary.',
                        forbidden: 'No horizontal/vertical splits, no sidebars, no cards'
                    },
                    { 
                        name: 'Honeycomb Hexagons',
                        structure: 'Hexagonal tiles arranged in honeycomb pattern. Use clip-path for hex shapes.',
                        forbidden: 'No rectangular elements, no traditional grids'
                    },
                    { 
                        name: 'Vertical Timeline',
                        structure: 'Central vertical line with alternating left/right content blocks. Animated scroll indicators.',
                        forbidden: 'No sidebars, no dashboards, no horizontal layouts'
                    },
                    { 
                        name: 'Overlap Cascade',
                        structure: 'Overlapping cards cascading from top-left to bottom-right. Each offset by 50px.',
                        forbidden: 'No grids, no sidebars, no aligned elements'
                    },
                    { 
                        name: 'Metro Tiles',
                        structure: 'Windows Metro style with live animated tiles of different sizes. Some tiles flip to show backs.',
                        forbidden: 'No sidebars, no uniform sizing, no static content'
                    },
                    { 
                        name: 'Spiral Navigation',
                        structure: 'Content arranged in expanding spiral from center. Scroll to rotate through spiral.',
                        forbidden: 'No linear layouts, no traditional navigation'
                    },
                    { 
                        name: 'Brutalist Blocks',
                        structure: 'Harsh, asymmetric blocks with thick borders and diagonal text. Intentionally unaligned.',
                        forbidden: 'No smooth edges, no centered alignment, no traditional beauty'
                    }
                ];
                
                const selectedLayout = layouts[Math.floor(Math.random() * layouts.length)];
                
                // Log which layout was selected
                console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
                console.log('🎨 SELECTED LAYOUT:', selectedLayout.name);
                console.log('📐 Structure:', selectedLayout.structure);
                console.log('🚫 Forbidden:', selectedLayout.forbidden);
                console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
                
                // Build complete prompt with aggressive layout enforcement
                const completePrompt = `You are generating a SCREENSHOT of an actual application in use.

MANDATORY LAYOUT: ${selectedLayout.name}
${selectedLayout.structure}

FORBIDDEN (WILL REJECT IF FOUND):
${selectedLayout.forbidden}
- NO "Powered by" or "Built with" badges
- NO portfolio/showcase elements
- NO feature lists or marketing copy
- NO "About" or "Features" sections
- NO company taglines or slogans
- NO technology stack badges

THIS IS THE ACTUAL APPLICATION:
${requestData.prompt}

CRITICAL REQUIREMENTS:
1. This is a REAL APPLICATION being used RIGHT NOW
2. Show ONLY the working interface - nothing else
3. Include real, specific data as if someone is actively using it
4. No meta-commentary about the app - just BE the app
5. Follow ${selectedLayout.name} layout EXACTLY
6. Make it look like a natural screenshot of someone's screen

Think of it like this: If someone took a screenshot while using Gmail, they wouldn't see "Powered by Google" or "Features include: spam filtering, labels, etc." - they'd just see their inbox with emails. That's what this should be.

Generate ONLY the HTML for the actual application interface.
Start with <!DOCTYPE html> and end with </html>.`;
                
                // Prepare Claude API request
                const postData = JSON.stringify({
                    model: 'claude-opus-4-1-20250805',
                    messages: [
                        {
                            role: 'user',
                            content: completePrompt
                        }
                    ],
                    max_tokens: 4096,
                    temperature: temperature
                });

                const options = {
                    hostname: 'api.anthropic.com',
                    port: 443,
                    path: '/v1/messages',
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'x-api-key': API_KEY,
                        'anthropic-version': '2023-06-01',
                        'Content-Length': Buffer.byteLength(postData)
                    }
                };

                const apiReq = https.request(options, (apiRes) => {
                    let responseData = '';

                    apiRes.on('data', (chunk) => {
                        responseData += chunk;
                    });

                    apiRes.on('end', () => {
                        try {
                            const apiResponse = JSON.parse(responseData);
                            
                            console.log('API Status Code:', apiRes.statusCode);
                            console.log('API Response Keys:', Object.keys(apiResponse));
                            
                            if (apiRes.statusCode === 200) {
                                // Extract HTML from response
                                if (apiResponse.content && apiResponse.content[0] && apiResponse.content[0].text) {
                                    let rawContent = apiResponse.content[0].text;
                                    console.log('Raw content length:', rawContent.length);
                                    console.log('First 200 chars:', rawContent.substring(0, 200));
                                    
                                    // Extract HTML more robustly
                                    let htmlContent = rawContent;
                                    
                                    // Remove markdown code blocks
                                    htmlContent = htmlContent.replace(/```html\n?/gi, '');
                                    htmlContent = htmlContent.replace(/```\n?/gi, '');
                                    
                                    // Try to extract HTML if it's embedded in text
                                    const htmlMatch = htmlContent.match(/<!DOCTYPE html>[\s\S]*<\/html>/i);
                                    if (htmlMatch) {
                                        htmlContent = htmlMatch[0];
                                        console.log('Extracted HTML via regex');
                                    }
                                    
                                    // Clean up whitespace
                                    htmlContent = htmlContent.trim();
                                    
                                    // Validate that we have HTML-like content
                                    const hasHtmlStructure = htmlContent.includes('<') && htmlContent.includes('>');
                                    
                                    if (hasHtmlStructure) {
                                        console.log('Sending HTML, length:', htmlContent.length);
                                        res.writeHead(200, { 'Content-Type': 'application/json' });
                                        res.end(JSON.stringify({ success: true, html: htmlContent }));
                                    } else {
                                        console.log('No HTML structure found in response');
                                        res.writeHead(500, { 'Content-Type': 'application/json' });
                                        res.end(JSON.stringify({ 
                                            success: false, 
                                            error: 'No HTML content found in response',
                                            debug: rawContent.substring(0, 500)
                                        }));
                                    }
                                } else {
                                    console.log('Invalid response structure:', JSON.stringify(apiResponse).substring(0, 200));
                                    res.writeHead(500, { 'Content-Type': 'application/json' });
                                    res.end(JSON.stringify({ success: false, error: 'Invalid response format' }));
                                }
                            } else {
                                console.log('API error:', apiRes.statusCode, apiResponse.error);
                                res.writeHead(apiRes.statusCode, { 'Content-Type': 'application/json' });
                                res.end(JSON.stringify({ success: false, error: apiResponse.error?.message || 'API error' }));
                            }
                        } catch (error) {
                            console.error('Parse error:', error);
                            res.writeHead(500, { 'Content-Type': 'application/json' });
                            res.end(JSON.stringify({ success: false, error: 'Failed to parse API response: ' + error.message }));
                        }
                    });
                });

                apiReq.on('error', (error) => {
                    res.writeHead(500, { 'Content-Type': 'application/json' });
                    res.end(JSON.stringify({ success: false, error: error.message }));
                });

                apiReq.write(postData);
                apiReq.end();
                
            } catch (error) {
                res.writeHead(400, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ success: false, error: 'Invalid request' }));
            }
        });
    } else {
        res.writeHead(404);
        res.end('Not found');
    }
});

// Start server
server.listen(PORT, () => {
    console.log(`
╔════════════════════════════════════════════════════╗
║                                                    ║
║   🚀 Portfolio Generator Server Running!          ║
║                                                    ║
║   Open your browser to:                           ║
║   http://localhost:${PORT}                            ║
║                                                    ║
║   Press Ctrl+C to stop the server                 ║
║                                                    ║
╚════════════════════════════════════════════════════╝
    `);
});