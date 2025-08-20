// Simple Business Idea Generator

class SimpleBusinessGenerator {
    constructor() {
        // Modern AI/Startup focused business ideas
        this.businessTypes = [
            // AI Tools & Platforms
            'AI Prompt Library Manager with Version Control',
            'RAG Pipeline Builder with Document Chunking Visualizer',
            'AI Agent Marketplace with Performance Metrics',
            'LLM Response Evaluator with A/B Testing Dashboard',
            'Vector Database Query Optimizer with Embedding Viewer',
            'AI Model Fine-tuning Progress Tracker',
            'Prompt Engineering Playground with Cost Calculator',
            'AI Chatbot Training Data Annotation Platform',
            'Multi-Agent Workflow Designer with Execution Monitor',
            'AI API Usage Dashboard with Budget Alerts',
            'Synthetic Data Generator for ML Training',
            'AI Model Registry with Deployment Pipeline',
            'Prompt Template Marketplace for ChatGPT/Claude',
            'AI Content Detector and Humanization Tool',
            'LLM Chain Builder with Debug Console',
            
            // Modern SaaS & Startups
            'No-Code API Builder with Rate Limiting Dashboard',
            'Webhook Manager with Event Log Viewer',
            'SaaS Metrics Dashboard with MRR Tracking',
            'Customer Onboarding Flow Builder',
            'API Documentation Generator with Interactive Playground',
            'Subscription Billing Manager with Dunning Control',
            'Product Launch Checklist with Team Coordination',
            'Customer Feedback Loop Manager with AI Sentiment Analysis',
            'Growth Experiment Tracker with Statistical Significance',
            'User Behavior Analytics with Cohort Analysis',
            'Feature Flag Manager with Rollout Controls',
            'Microservices Health Monitor with Dependency Map',
            'Cloud Cost Optimizer with Recommendation Engine',
            'DevOps Pipeline Visualizer with Deployment History',
            'Error Tracking Dashboard with AI Root Cause Analysis',
            
            // Creator Economy & Content
            'AI Content Calendar with Auto-Generation Queue',
            'Newsletter A/B Testing Platform with AI Subject Lines',
            'Course Creation Platform with AI Module Generator',
            'Podcast Episode Planner with AI Show Notes',
            'YouTube Video Idea Generator with Trend Analysis',
            'Social Media Post Scheduler with AI Caption Writer',
            'Digital Product Launch Dashboard',
            'Creator Analytics Aggregator Across Platforms',
            'AI Thumbnail Generator with A/B Testing',
            'Content Repurposing Workflow Manager',
            
            // Data & Analytics
            'Real-time Data Pipeline Monitor with Anomaly Detection',
            'SQL Query Builder with AI Optimization Suggestions',
            'Data Quality Monitor with Automated Alerts',
            'ETL Job Scheduler with Dependency Visualization',
            'Business Intelligence Dashboard Builder',
            'Log Analysis Platform with Pattern Recognition',
            'Database Migration Tool with Rollback Manager',
            'Data Catalog with Lineage Tracking',
            
            // Remote Work & Productivity
            'Async Standup Manager with AI Summaries',
            'Remote Team Time Zone Coordinator',
            'Virtual Office Space with Spatial Audio',
            'Meeting Recording Analyzer with Action Items',
            'Documentation Hub with AI Search',
            'Code Review Dashboard with AI Suggestions',
            'Sprint Planning Tool with Velocity Tracking',
            'Knowledge Base Builder with AI Auto-Tagging'
        ];

        // Remove markets since business types are now specific enough
        // We don't need target markets anymore

        // Relevant features for business apps
        this.features = [
            'real-time status updates',
            'customer database',
            'appointment calendar',
            'payment processing',
            'SMS/email notifications',
            'photo uploads',
            'map view',
            'inventory tracking',
            'staff scheduling',
            'customer reviews',
            'order history',
            'analytics dashboard',
            'quick search',
            'mobile responsive',
            'export reports',
            'recurring bookings',
            'waitlist management',
            'customer notes',
            'service history',
            'pricing calculator'
        ];
    }

    getRandomItem(array) {
        return array[Math.floor(Math.random() * array.length)];
    }

    getRandomItems(array, count) {
        const shuffled = [...array].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    }

    generateColorScheme() {
        const schemes = [
            // Modern gradients
            'background: linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            'background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
            'background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
            'background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
            'background: linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
            'background: linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
            'background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
            'background: linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%)',
            'background: linear-gradient(135deg, #fecfef 0%, #fecfef 100%)',
            'background: linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)',
            'background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
            'background: linear-gradient(135deg, #ff6e7f 0%, #bfe9ff 100%)',
            'background: linear-gradient(135deg, #e0c3fc 0%, #8ec5fc 100%)',
            'background: linear-gradient(135deg, #f43b47 0%, #453a94 100%)',
            'background: linear-gradient(135deg, #0250c5 0%, #d43f8d 100%)',
            'background: linear-gradient(135deg, #88d3ce 0%, #6e45e2 100%)',
            'background: linear-gradient(135deg, #d299c2 0%, #fef9d7 100%)',
            'background: linear-gradient(135deg, #ebc0fd 0%, #d9ded8 100%)',
            'background: linear-gradient(135deg, #96fbc4 0%, #f9f586 100%)',
            // Dark themes
            'dark theme with neon accents (#0a0a0a background, #00ff88 and #ff00ff accents)',
            'cyberpunk theme with glowing edges (#1a0033 background, #ff006e and #ffdd00 accents)',
            'deep space theme (#000814 background, #001d3d and #ffd60a accents)',
            // Light themes
            'soft pastel theme (#faf3f0 background, #e1bbb4 and #c89f9c accents)',
            'minimalist white (#ffffff background, #000000 text, single #ff6b6b accent)',
            'newspaper theme (#f7f3e9 background, #2f3e46 text, #e76f51 accents)'
        ];
        
        return this.getRandomItem(schemes);
    }

    fillCustomGaps(customDescription) {
        // Add random enhancements to custom prompts
        const enhancements = [
            'with real-time updates',
            'featuring live data visualization',
            'with animated transitions',
            'including interactive charts',
            'with drag-and-drop functionality',
            'featuring keyboard shortcuts',
            'with smart search capabilities',
            'including AI-powered suggestions',
            'with collaborative features',
            'featuring dark/light mode toggle'
        ];
        
        // Randomly decide if we should enhance (30% chance)
        if (Math.random() < 0.3) {
            const enhancement = this.getRandomItem(enhancements);
            return `${customDescription} ${enhancement}`;
        }
        
        return customDescription;
    }

    generateBusinessIdea(customDescription = null) {
        let businessType, businessName, prompt;
        const colorScheme = this.generateColorScheme();
        
        if (customDescription) {
            // Potentially enhance the custom description
            businessType = this.fillCustomGaps(customDescription);
            businessName = this.generateBusinessName();
            const features = this.getRandomItems(this.features, 4);
            
            prompt = `Create a web interface for "${businessName}" - ${businessType}.

CRITICAL: The application name "${businessName}" MUST appear prominently in the interface (e.g., in the header, logo, or title bar).

VISUAL STYLE: Use ${colorScheme}

The interface should include:
- ${features.join('\n- ')}

This is ${businessType} - make it IMMEDIATELY OBVIOUS what this tool does.
Show the actual working application with realistic data that someone would see while using it.
Include specific examples that match the use case perfectly.
Make it visually striking with the specified color scheme.`;

            return {
                prompt: prompt,
                metadata: {
                    type: businessType,
                    features: features,
                    name: businessName,
                    isCustom: true
                }
            };
        } else {
            // Use random from list
            businessType = this.getRandomItem(this.businessTypes);
            const features = this.getRandomItems(this.features, 4);
            businessName = this.generateBusinessName();
            
            const idea = {
                type: businessType,
                features: features,
                name: businessName,
                isCustom: false
            };

            // Create simple, specific prompt
            prompt = `Create a web interface for "${businessName}" - a ${businessType}.

CRITICAL: The application name "${businessName}" MUST appear prominently in the interface (e.g., in the header, logo, or title bar).

VISUAL STYLE: Use ${colorScheme}

The interface should include:
- ${features.join('\n- ')}

This is a ${businessType} - make it IMMEDIATELY OBVIOUS what this tool does.
Show the actual working application with realistic data that someone would see while using it.
Include specific examples that match the use case perfectly.
Make it visually striking with the specified color scheme.`;

            return {
                prompt: prompt,
                metadata: idea
            };
        }
    }

    generateBusinessName() {
        // Different name generation strategies for variety
        const strategies = [
            // Short, punchy names (3-5 chars)
            () => {
                const short = ['Zap', 'Bit', 'Hex', 'Neo', 'Pix', 'Vox', 'Jax', 'Dox', 'Flux', 'Apex', 'Zest', 'Dash', 'Bolt', 'Spark'];
                return this.getRandomItem(short);
            },
            // Abstract tech names
            () => {
                const abstract = ['Nexus', 'Prism', 'Quantum', 'Cipher', 'Vector', 'Matrix', 'Vertex', 'Nebula', 'Cosmos', 'Aurora'];
                return this.getRandomItem(abstract);
            },
            // Literal descriptive names
            () => {
                const descriptive = ['DataFlow', 'CodeBase', 'TaskSync', 'WorkHub', 'TeamLink', 'DocuTrack', 'MetricsPro', 'CloudDesk', 'ApiForge', 'QueryMaster'];
                return this.getRandomItem(descriptive);
            },
            // Compound names (prefix + suffix)
            () => {
                const prefixes = ['Smart', 'Quick', 'Auto', 'Flex', 'Swift', 'Meta', 'Ultra', 'Omni', 'Hyper', 'Super'];
                const suffixes = ['ly', 'ify', 'io', 'hub', 'lab', 'box', 'kit', 'app', 'bot', 'ai'];
                return this.getRandomItem(prefixes) + this.getRandomItem(suffixes);
            },
            // Single memorable words
            () => {
                const single = ['Cascade', 'Horizon', 'Momentum', 'Clarity', 'Fusion', 'Velocity', 'Synergy', 'Elevate', 'Amplify', 'Optimize'];
                return this.getRandomItem(single);
            },
            // Made-up tech names
            () => {
                const madeUp = ['Zapier', 'Vercel', 'Replika', 'Synthex', 'Flowbite', 'Stackly', 'Buildr', 'Shipfast', 'Launchpad', 'Codestream'];
                return this.getRandomItem(madeUp);
            },
            // Acronym-style
            () => {
                const acronyms = ['AIDA', 'FORGE', 'SPARK', 'RADAR', 'SCOPE', 'TRACE', 'PULSE', 'WAVE', 'GRID', 'CORE'];
                return this.getRandomItem(acronyms);
            },
            // Playful names
            () => {
                const playful = ['Boop', 'Zing', 'Whisk', 'Bloom', 'Glide', 'Drift', 'Float', 'Swirl', 'Ripple', 'Bubble'];
                return this.getRandomItem(playful);
            }
        ];
        
        // Pick a random strategy and execute it
        const strategy = this.getRandomItem(strategies);
        return strategy();
    }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SimpleBusinessGenerator;
}