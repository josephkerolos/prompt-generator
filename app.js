// Main Application Controller

class PortfolioGeneratorApp {
    constructor() {
        this.randomizer = new PromptRandomizer();
        this.apiClient = new ClaudeAPIClient();
        this.currentPrompt = null;
        this.currentMetadata = null;
        this.currentHTML = null;
        
        this.initializeElements();
        this.attachEventListeners();
        // No need to load API key anymore
    }

    // Initialize DOM elements
    initializeElements() {
        // Generator Controls
        this.generateBtn = document.getElementById('generatePrompt');
        this.includeMetrics = document.getElementById('includeMetrics');
        this.useRealData = document.getElementById('useRealData');
        this.industrySpecific = document.getElementById('industrySpecific');
        this.practicalFeatures = document.getElementById('practicalFeatures');
        this.creativityTemp = document.getElementById('creativityTemp');
        this.tempValue = document.getElementById('tempValue');
        this.tempDescription = document.getElementById('tempDescription');
        
        // Prompt Preview
        this.promptPreview = document.getElementById('promptPreview');
        this.promptText = document.getElementById('promptText');
        this.promptMetadata = document.getElementById('promptMetadata');
        this.copyPromptBtn = document.getElementById('copyPrompt');
        this.regenerateBtn = document.getElementById('regenerate');
        this.sendToClaudeBtn = document.getElementById('sendToClaude');
        
        // Loading State
        this.loadingState = document.getElementById('loadingState');
        
        // Result Section
        this.resultSection = document.getElementById('resultSection');
        this.resultFrame = document.getElementById('resultFrame');
        this.viewFullscreenBtn = document.getElementById('viewFullscreen');
        this.downloadHtmlBtn = document.getElementById('downloadHtml');
        
        // Toast
        this.toast = document.getElementById('toast');
    }

    // Attach event listeners
    attachEventListeners() {
        // Generate Prompt
        this.generateBtn.addEventListener('click', () => this.generatePrompt());
        
        // Temperature Slider
        this.creativityTemp.addEventListener('input', (e) => {
            const temp = parseFloat(e.target.value);
            this.tempValue.textContent = temp.toFixed(1);
            
            // Update description based on temperature
            let description = '';
            if (temp <= 0.3) {
                description = 'Conservative, standard layouts';
            } else if (temp <= 0.5) {
                description = 'Balanced design with moderate creativity';
            } else if (temp <= 0.7) {
                description = 'Creative with unique elements';
            } else {
                description = 'Experimental and distinctive';
            }
            this.tempDescription.textContent = description;
        });
        
        // Prompt Actions
        this.copyPromptBtn.addEventListener('click', () => this.copyPrompt());
        this.regenerateBtn.addEventListener('click', () => this.generatePrompt());
        this.sendToClaudeBtn.addEventListener('click', () => this.sendToClaude());
        
        // Result Actions
        this.viewFullscreenBtn.addEventListener('click', () => this.viewFullscreen());
        this.downloadHtmlBtn.addEventListener('click', () => this.downloadHTML());
    }


    // Generate random prompt
    generatePrompt() {
        // Apply options based on checkboxes
        const options = {
            includeMetrics: this.includeMetrics ? this.includeMetrics.checked : true,
            useRealData: this.useRealData ? this.useRealData.checked : true,
            industrySpecific: this.industrySpecific ? this.industrySpecific.checked : true,
            practicalFeatures: this.practicalFeatures ? this.practicalFeatures.checked : true
        };
        
        // Generate the prompt
        const result = this.randomizer.generatePrompt();
        this.currentPrompt = result.prompt;
        this.currentMetadata = result.metadata;
        
        // Display the prompt
        this.displayPrompt();
        
        // Scroll to preview
        this.promptPreview.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    // Display generated prompt
    displayPrompt() {
        // Show preview section
        this.promptPreview.style.display = 'block';
        
        // Display prompt text
        this.promptText.textContent = this.currentPrompt;
        
        // Display metadata
        this.displayMetadata();
    }

    // Display prompt metadata
    displayMetadata() {
        const metadata = this.currentMetadata;
        
        let metadataHTML = '';
        metadataHTML += `<div class="metadata-item"><strong>Project:</strong> ${metadata.projectName}</div>`;
        metadataHTML += `<div class="metadata-item"><strong>Type:</strong> ${metadata.projectType}</div>`;
        metadataHTML += `<div class="metadata-item"><strong>Industry:</strong> ${metadata.domain}</div>`;
        metadataHTML += `<div class="metadata-item"><strong>Design:</strong> ${metadata.designStyle}</div>`;
        metadataHTML += `<div class="metadata-item"><strong>Colors:</strong> ${metadata.colorScheme}</div>`;
        metadataHTML += `<div class="metadata-item"><strong>AI Tech:</strong> ${metadata.techStack.ai.join(', ')}</div>`;
        
        this.promptMetadata.innerHTML = metadataHTML;
    }

    // Copy prompt to clipboard
    async copyPrompt() {
        try {
            await navigator.clipboard.writeText(this.currentPrompt);
            this.showToast('Prompt copied to clipboard!', 'success');
            
            // Visual feedback
            this.copyPromptBtn.style.background = 'rgba(16, 185, 129, 0.2)';
            setTimeout(() => {
                this.copyPromptBtn.style.background = '';
            }, 1000);
        } catch (error) {
            this.showToast('Failed to copy prompt', 'error');
        }
    }

    // Send prompt to Claude
    async sendToClaude() {
        if (!this.currentPrompt) {
            this.showToast('Please generate a prompt first', 'error');
            return;
        }
        
        try {
            // Show loading state
            this.showLoading();
            
            // Get temperature value
            const temperature = parseFloat(this.creativityTemp.value);
            
            // Send to Claude API with temperature
            const htmlContent = await this.apiClient.generatePortfolio(this.currentPrompt, temperature);
            
            // Validate HTML
            if (!this.apiClient.validateHTML(htmlContent)) {
                throw new Error('Invalid HTML received from API');
            }
            
            // Store the HTML
            this.currentHTML = htmlContent;
            
            // Display the result
            this.displayResult(htmlContent);
            
            // Hide loading state
            this.hideLoading();
            
            // Show success message
            this.showToast('Portfolio generated successfully!', 'success');
            
            // Scroll to result
            this.resultSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            
        } catch (error) {
            this.hideLoading();
            this.showToast(this.apiClient.formatError(error), 'error');
            console.error('Generation error:', error);
        }
    }

    // Show loading state
    showLoading() {
        this.loadingState.style.display = 'block';
        this.promptPreview.style.display = 'none';
        this.resultSection.style.display = 'none';
    }

    // Hide loading state
    hideLoading() {
        this.loadingState.style.display = 'none';
        this.promptPreview.style.display = 'block';
    }

    // Display result in iframe
    displayResult(htmlContent) {
        this.resultSection.style.display = 'block';
        this.apiClient.displayInIframe(htmlContent, 'resultFrame');
    }

    // View result in fullscreen
    viewFullscreen() {
        if (!this.currentHTML) {
            this.showToast('No generated content to view', 'error');
            return;
        }
        
        // Open in new tab
        const blob = this.apiClient.createHTMLBlob(this.currentHTML);
        const url = URL.createObjectURL(blob);
        window.open(url, '_blank');
        
        // Clean up
        setTimeout(() => URL.revokeObjectURL(url), 100);
    }

    // Download generated HTML
    downloadHTML() {
        if (!this.currentHTML) {
            this.showToast('No generated content to download', 'error');
            return;
        }
        
        const filename = this.apiClient.downloadHTML(
            this.currentHTML, 
            this.currentMetadata?.projectName || 'portfolio'
        );
        
        this.showToast(`Downloaded: ${filename}`, 'success');
    }

    // Show toast notification
    showToast(message, type = 'info') {
        this.toast.textContent = message;
        this.toast.className = `toast ${type}`;
        this.toast.classList.add('show');
        
        setTimeout(() => {
            this.toast.classList.remove('show');
        }, 3000);
    }
}

// Initialize the application when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    window.app = new PortfolioGeneratorApp();
});