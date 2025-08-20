// Claude API Client for Portfolio Generator

class ClaudeAPIClient {
    constructor() {
        // Hardcoded API key
        this.apiKey = 'YOUR_CLAUDE_API_KEY_HERE'; // This file is not used anymore
        this.baseURL = 'https://api.anthropic.com/v1/messages';
        this.model = 'claude-opus-4-1-20250805'; // Using Claude 4.1 Opus
    }

    // Get API key (now returns hardcoded key)
    getApiKey() {
        return this.apiKey;
    }

    // Test API connection
    async testConnection() {
        try {
            const response = await fetch(this.baseURL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': this.apiKey,
                    'anthropic-version': '2023-06-01'
                },
                body: JSON.stringify({
                    model: this.model,
                    messages: [{
                        role: 'user',
                        content: 'Test connection. Reply with "OK" only.'
                    }],
                    max_tokens: 10
                })
            });

            if (response.ok) {
                return true;
            } else if (response.status === 401) {
                throw new Error('Invalid API key');
            } else {
                throw new Error(`Connection failed: ${response.status}`);
            }
        } catch (error) {
            throw error;
        }
    }

    // Send prompt to Claude via local proxy
    async generatePortfolio(prompt, temperature = 0.5) {
        try {
            // Use local proxy server
            const response = await fetch('http://localhost:3000/api/generate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    prompt: prompt,
                    temperature: temperature
                })
            });

            const data = await response.json();
            
            console.log('Response status:', response.status);
            console.log('Response success:', data.success);
            
            if (!response.ok || !data.success) {
                console.error('Error from server:', data.error);
                if (data.debug) {
                    console.error('Debug info:', data.debug);
                }
                throw new Error(data.error || `Server error: ${response.status}`);
            }
            
            // Extract HTML from the response
            if (data.html) {
                const htmlContent = data.html;
                console.log('Received HTML, length:', htmlContent.length);
                
                // Don't validate too strictly here, let validateHTML handle it
                return htmlContent;
            } else {
                console.error('No HTML in response:', data);
                throw new Error('No HTML content in response');
            }
        } catch (error) {
            console.error('API Error:', error);
            throw error;
        }
    }

    // Parse and validate HTML response
    validateHTML(htmlString) {
        console.log('Validating HTML, length:', htmlString.length);
        console.log('First 100 chars:', htmlString.substring(0, 100));
        
        // More flexible validation
        const hasDoctype = htmlString.toLowerCase().includes('<!doctype html');
        const hasHtmlTag = htmlString.includes('<html') && htmlString.includes('</html>');
        const hasBasicTags = htmlString.includes('<') && htmlString.includes('>');
        
        // Check for common HTML elements even if structure isn't perfect
        const hasHtmlElements = hasBasicTags && (
            htmlString.includes('<div') || 
            htmlString.includes('<body') || 
            htmlString.includes('<head') ||
            htmlString.includes('<style') ||
            htmlString.includes('<script')
        );
        
        const isValid = (hasDoctype && hasHtmlTag) || hasHtmlElements;
        
        if (!isValid) {
            console.log('Validation failed - hasDoctype:', hasDoctype, 'hasHtmlTag:', hasHtmlTag, 'hasHtmlElements:', hasHtmlElements);
        }
        
        return isValid;
    }

    // Create a Blob from HTML content for download
    createHTMLBlob(htmlContent) {
        return new Blob([htmlContent], { type: 'text/html' });
    }

    // Generate a filename for the download
    generateFilename(projectName) {
        const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, -5);
        const cleanName = projectName ? projectName.replace(/[^a-z0-9]/gi, '_').toLowerCase() : 'portfolio';
        return `${cleanName}_${timestamp}.html`;
    }

    // Download HTML file
    downloadHTML(htmlContent, projectName) {
        const blob = this.createHTMLBlob(htmlContent);
        const url = URL.createObjectURL(blob);
        const filename = this.generateFilename(projectName);
        
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        
        // Clean up the URL
        setTimeout(() => URL.revokeObjectURL(url), 100);
        
        return filename;
    }

    // Display HTML in iframe
    displayInIframe(htmlContent, iframeId) {
        const iframe = document.getElementById(iframeId);
        if (!iframe) {
            throw new Error(`Iframe with id '${iframeId}' not found`);
        }
        
        // Create a blob URL for the HTML content
        const blob = this.createHTMLBlob(htmlContent);
        const url = URL.createObjectURL(blob);
        
        // Set the iframe source
        iframe.src = url;
        
        // Clean up the URL after loading
        iframe.onload = () => {
            setTimeout(() => URL.revokeObjectURL(url), 100);
        };
        
        return true;
    }

    // Format error messages for display
    formatError(error) {
        if (error.message.includes('API key')) {
            return 'API Key Error: ' + error.message;
        } else if (error.message.includes('Rate limit')) {
            return 'Rate Limit: Please wait a moment before trying again.';
        } else if (error.message.includes('Network')) {
            return 'Network Error: Please check your internet connection.';
        } else {
            return 'Error: ' + error.message;
        }
    }
}

// Export for use in other scripts
window.ClaudeAPIClient = ClaudeAPIClient;