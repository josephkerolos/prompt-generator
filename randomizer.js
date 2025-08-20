// Comprehensive randomization engine for portfolio prompt generator

class PromptRandomizer {
    constructor() {
        // Realistic Upwork-style project types
        this.projectTypes = [
            { name: 'Hotel PMS Integration Dashboard', keywords: ['FIAS protocol', 'room status sync', 'reservation management'] },
            { name: 'Fire Sprinkler Contractor Management', keywords: ['permit tracking', 'inspection scheduling', 'compliance automation'] },
            { name: 'E-Commerce Virtual Try-On System', keywords: ['AR preview', 'product visualization', 'size recommendation'] },
            { name: 'Crypto Trading Bot Interface', keywords: ['position monitoring', 'strategy backtesting', 'P&L tracking'] },
            { name: 'PowerPoint Recording Integration', keywords: ['GoPro webcam sync', 'slide capture', 'video embedding'] },
            { name: 'Custom Wheel Configurator', keywords: ['3D preview', 'material selection', 'pricing calculator'] },
            { name: 'Google Workspace Migration Tool', keywords: ['email transfer', 'domain switching', 'user provisioning'] },
            { name: 'CSAT Dashboard for Support Teams', keywords: ['ticket analytics', 'response metrics', 'satisfaction tracking'] },
            { name: 'SDK Development Interface', keywords: ['API testing', 'code generation', 'documentation builder'] },
            { name: 'Smart Office Monitoring System', keywords: ['RFID tracking', 'facial recognition', 'occupancy analytics'] },
            { name: 'LMS with AI Tutoring', keywords: ['course builder', 'progress tracking', 'personalized feedback'] },
            { name: 'Invoice & Inventory Manager', keywords: ['product attributes', 'SQL queries', 'billing automation'] },
            { name: 'Shopify Store Animator', keywords: ['product transitions', 'hover effects', 'cart animations'] },
            { name: 'Media File Converter Tool', keywords: ['.media to mp4', 'batch processing', 'format detection'] },
            { name: 'Email Duplicate Resolver', keywords: ['Outlook cleanup', 'merge detection', 'folder organization'] },
            { name: 'SDN Load Balancer Console', keywords: ['traffic distribution', 'Floodlight controller', 'network topology'] },
            { name: 'Subscription Management Fix', keywords: ['Google Play billing', 'payment validation', 'renewal tracking'] },
            { name: 'Internal Workflow Builder', keywords: ['approval chains', 'task routing', 'deadline management'] },
            { name: 'AI Companion Chat Interface', keywords: ['voice calls', 'memory system', 'personality settings'] },
            { name: 'Web3 Gamification Platform', keywords: ['token rewards', 'achievement system', 'leaderboards'] },
            { name: 'Asset Sync for Property Management', keywords: ['room inventory', 'maintenance scheduling', 'vendor coordination'] },
            { name: 'Figma to Code Converter', keywords: ['component mapping', 'style extraction', 'responsive layouts'] },
            { name: 'Java Swing Kiosk UI', keywords: ['touch interface', 'payment processing', 'queue management'] },
            { name: 'Raspberry Pi Vision System', keywords: ['object classification', 'real-time detection', 'GPIO control'] },
            { name: 'PBX Configuration Tool', keywords: ['call routing', 'extension management', 'voicemail setup'] },
            { name: 'SaaS Operational Dashboard', keywords: ['uptime monitoring', 'deployment status', 'incident tracking'] },
            { name: 'Security Compliance Validator', keywords: ['audit checks', 'policy enforcement', 'vulnerability scanning'] },
            { name: 'Content Management for AI Blog', keywords: ['article generation', 'SEO optimization', 'publishing workflow'] },
            { name: 'Offline-First Health Tracker', keywords: ['wearable sync', 'data caching', 'health metrics'] },
            { name: 'Meeting Notes Automation', keywords: ['transcript processing', 'action extraction', 'calendar integration'] },
            { name: 'Developer Hiring Assistant', keywords: ['resume screening', 'skill matching', 'interview scheduling'] },
            { name: 'Manufacturing Quality Control', keywords: ['defect detection', 'production metrics', 'batch tracking'] },
            { name: 'Real Estate Listing Manager', keywords: ['property import', 'photo optimization', 'MLS sync'] },
            { name: 'Restaurant Order Dashboard', keywords: ['kitchen display', 'order tracking', 'delivery coordination'] },
            { name: 'Dental Practice Scheduler', keywords: ['appointment booking', 'treatment planning', 'insurance verification'] },
            { name: 'Gym Member Portal', keywords: ['class booking', 'trainer scheduling', 'payment processing'] },
            { name: 'School Attendance System', keywords: ['check-in kiosk', 'parent notifications', 'absence tracking'] },
            { name: 'Fleet Management Console', keywords: ['vehicle tracking', 'maintenance alerts', 'fuel monitoring'] },
            { name: 'Legal Document Automation', keywords: ['template filling', 'clause library', 'signature collection'] },
            { name: 'Warehouse Picking Optimizer', keywords: ['route planning', 'inventory location', 'order batching'] }
        ];

        // Expanded business domains
        this.businessDomains = [
            'Healthcare & Medical', 'Financial Services', 'E-commerce & Retail', 
            'Education & EdTech', 'Legal & Compliance', 'Real Estate & Property',
            'Manufacturing & Supply Chain', 'Logistics & Transportation', 'Marketing & Advertising',
            'Human Resources', 'Hospitality & Tourism', 'Agriculture & Food Tech',
            'Energy & Utilities', 'Media & Entertainment', 'Non-Profit & NGO',
            'Government & Public Sector', 'Insurance', 'Telecommunications',
            'Pharmaceutical', 'Construction & Engineering', 'Automotive & Mobility',
            'Aerospace & Defense', 'Gaming & Esports', 'Fashion & Apparel',
            'Sports & Fitness', 'Food Service & Restaurants', 'Travel & Airlines',
            'Banking & Investment', 'Cryptocurrency & Blockchain', 'Social Media & Networking',
            'Cybersecurity', 'Biotechnology', 'Clean Energy & Sustainability',
            'Mining & Resources', 'Maritime & Shipping', 'Art & Design',
            'Music & Audio', 'Publishing & Literature', 'Pet Care & Veterinary',
            'Beauty & Cosmetics', 'Home Services', 'Event Management',
            'Consulting & Professional Services', 'Research & Development', 'Space Technology',
            'Quantum Computing', 'Robotics & Automation', 'Mental Health & Wellness',
            'Elder Care', 'Child Care & Development', 'Urban Planning & Smart Cities'
        ];

        // Tech stacks components
        this.aiTechnologies = [
            'GPT-4 Turbo', 'Claude 3 Opus', 'Gemini Pro', 'LLaMA 2', 'Mistral 7B',
            'GPT-5 Preview', 'Claude Sonnet', 'PaLM 2', 'Falcon 40B', 'Anthropic Constitutional AI'
        ];

        this.mlFrameworks = [
            'TensorFlow 2.0', 'PyTorch Lightning', 'JAX', 'Hugging Face Transformers',
            'scikit-learn', 'XGBoost', 'LightGBM', 'ONNX Runtime', 'Apache MXNet'
        ];

        this.vectorDatabases = [
            'Pinecone', 'Weaviate', 'Qdrant', 'Milvus', 'ChromaDB', 'Faiss', 'Vespa'
        ];

        this.cloudPlatforms = [
            'AWS SageMaker', 'Google Cloud Vertex AI', 'Azure ML Studio', 
            'Kubernetes', 'Docker Swarm', 'Apache Airflow', 'Databricks'
        ];

        this.backendTech = [
            'FastAPI', 'Node.js + Express', 'Django REST', 'Spring Boot',
            'Go + Gin', 'Rust + Actix', 'Ruby on Rails', 'Phoenix (Elixir)'
        ];

        // Design styles - more normal, less futuristic
        this.designStyles = [
            { name: 'Clean Business', features: ['professional layout', 'clear typography', 'structured sections'], theme: 'light', layout: 'standard-grid' },
            { name: 'Modern Flat', features: ['flat colors', 'simple icons', 'card-based layout'], theme: 'light', layout: 'card-grid' },
            { name: 'Classic Dashboard', features: ['data tables', 'charts', 'metrics display'], theme: 'light', layout: 'dashboard' },
            { name: 'Minimal Clean', features: ['lots of whitespace', 'simple forms', 'basic navigation'], theme: 'light', layout: 'single-column' },
            { name: 'Material Design', features: ['shadows', 'ripple effects', 'floating buttons'], theme: 'light', layout: 'material-cards' },
            { name: 'Bootstrap Style', features: ['responsive grid', 'standard components', 'familiar patterns'], theme: 'light', layout: 'bootstrap-grid' },
            { name: 'Corporate Professional', features: ['formal layout', 'conservative colors', 'traditional navigation'], theme: 'light', layout: 'header-content-footer' },
            { name: 'SaaS Standard', features: ['sidebar navigation', 'content area', 'action buttons'], theme: 'light', layout: 'sidebar-main' },
            { name: 'Data Entry Form', features: ['form fields', 'validation messages', 'submit buttons'], theme: 'light', layout: 'form-layout' },
            { name: 'E-commerce Layout', features: ['product grid', 'filters sidebar', 'shopping cart'], theme: 'light', layout: 'shop-grid' },
            { name: 'Admin Panel', features: ['navigation menu', 'data tables', 'action buttons'], theme: 'light', layout: 'admin-layout' },
            { name: 'Spreadsheet View', features: ['table layout', 'cell editing', 'toolbar'], theme: 'light', layout: 'spreadsheet' },
            { name: 'Kanban Board', features: ['column layout', 'draggable cards', 'status indicators'], theme: 'light', layout: 'kanban' },
            { name: 'Calendar View', features: ['month/week/day views', 'event blocks', 'date navigation'], theme: 'light', layout: 'calendar' }
        ];

        // Normal, professional color schemes
        this.colorSchemes = [
            { primary: '#007BFF', secondary: '#6C757D', accent: '#28A745', type: 'Standard Blue' },
            { primary: '#4A90E2', secondary: '#7B8B9A', accent: '#5CB85C', type: 'Professional Blue' },
            { primary: '#2C3E50', secondary: '#34495E', accent: '#3498DB', type: 'Corporate Dark' },
            { primary: '#FFFFFF', secondary: '#F5F5F5', accent: '#007BFF', type: 'Clean White' },
            { primary: '#333333', secondary: '#666666', accent: '#0066CC', type: 'Classic Gray' },
            { primary: '#1976D2', secondary: '#424242', accent: '#4CAF50', type: 'Material Blue' },
            { primary: '#24292E', secondary: '#586069', accent: '#0366D6', type: 'GitHub Style' },
            { primary: '#FAFAFA', secondary: '#E0E0E0', accent: '#1976D2', type: 'Light Gray' },
            { primary: '#0056B3', secondary: '#6C757D', accent: '#17A2B8', type: 'Bootstrap Blue' },
            { primary: '#343A40', secondary: '#495057', accent: '#007BFF', type: 'Dark Admin' },
            { primary: '#F8F9FA', secondary: '#DEE2E6', accent: '#DC3545', type: 'Light with Red' },
            { primary: '#212529', secondary: '#343A40', accent: '#FFC107', type: 'Dark with Yellow' },
            { primary: '#FFFFFF', secondary: '#F1F3F4', accent: '#1A73E8', type: 'Google Style' },
            { primary: '#1F1F1F', secondary: '#2D2D30', accent: '#007ACC', type: 'VS Code Dark' }
        ];

        // Practical, normal features
        this.advancedFeatures = [
            'Search and filter options', 
            'Export to Excel/CSV', 
            'Email notifications',
            'File upload and preview', 
            'Calendar scheduling', 
            'User permissions and roles',
            'Print preview', 
            'Bulk actions', 
            'Undo/redo functionality',
            'Keyboard shortcuts', 
            'Mobile responsive view', 
            'Dark mode toggle',
            'Quick actions menu', 
            'Saved filters', 
            'Recent activity log',
            'Data validation', 
            'Auto-save drafts', 
            'Batch import',
            'Custom fields', 
            'Status tracking',
            'Comment threads',
            'File attachments',
            'Quick search',
            'Sort options',
            'Pagination controls'
        ];

        // Metrics and outcomes
        this.metrics = [
            { type: 'efficiency', value: () => `${this.random(25, 85)}% faster processing` },
            { type: 'cost', value: () => `$${this.random(10, 150)}k annual savings` },
            { type: 'accuracy', value: () => `${this.random(92, 99)}.${this.random(0, 9)}% accuracy rate` },
            { type: 'adoption', value: () => `${this.random(500, 5000)} daily active users` },
            { type: 'reduction', value: () => `${this.random(30, 70)}% reduction in manual tasks` },
            { type: 'roi', value: () => `${this.random(150, 400)}% ROI in first year` },
            { type: 'time', value: () => `${this.random(2, 8)} hours saved per week per user` },
            { type: 'throughput', value: () => `${this.random(1000, 10000)} requests per second` },
            { type: 'uptime', value: () => `99.${this.random(95, 99)}% uptime SLA` },
            { type: 'response', value: () => `<${this.random(50, 200)}ms response time` }
        ];

        // Normal, realistic project names
        this.namePatterns = [
            () => `${this.getRandomWord(['Quick', 'Easy', 'Simple', 'Fast', 'Smart', 'Pro', 'Best'])}${this.getRandomWord(['Invoice', 'Track', 'Manage', 'Book', 'Pay', 'Sync', 'File'])}`,
            () => `${this.getRandomWord(['Team', 'Project', 'Task', 'Work', 'Sales', 'Client', 'Order'])}${this.getRandomWord(['Hub', 'Manager', 'Portal', 'Dashboard', 'Central', 'Pro', 'Plus'])}`,
            () => `${this.getRandomWord(['My', 'The', 'Express', 'Instant', 'Direct', 'Swift', 'Rapid'])}${this.getRandomWord(['CRM', 'ERP', 'POS', 'HRM', 'CMS', 'Admin', 'Office'])}`,
            () => `${this.getRandomWord(['Shop', 'Store', 'Market', 'Retail', 'Commerce', 'Trade', 'Merchant'])} ${this.getRandomWord(['Pro', 'Plus', 'Manager', 'System', 'Suite', 'Portal'])}`,
            () => `${this.getRandomWord(['Staff', 'Employee', 'HR', 'Payroll', 'Time', 'Shift', 'Schedule'])}${this.getRandomWord(['Track', 'Manager', 'Portal', 'System', 'Pro', 'Plus'])}`
        ];
    }

    random(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    getRandomItem(array) {
        return array[Math.floor(Math.random() * array.length)];
    }

    getRandomItems(array, count) {
        const shuffled = [...array].sort(() => 0.5 - Math.random());
        return shuffled.slice(0, count);
    }

    getRandomWord(words) {
        return this.getRandomItem(words);
    }

    generateProjectName() {
        const pattern = this.getRandomItem(this.namePatterns);
        return pattern();
    }

    generateTagline(projectType, domain) {
        const actions = ['Transforming', 'Revolutionizing', 'Optimizing', 'Streamlining', 'Enhancing', 'Automating', 'Accelerating', 'Empowering'];
        const outcomes = ['efficiency', 'productivity', 'insights', 'decisions', 'workflows', 'operations', 'performance', 'intelligence'];
        
        return `${this.getRandomItem(actions)} ${domain.toLowerCase()} ${this.getRandomItem(outcomes)} with cutting-edge AI`;
    }

    generateActiveScenario(projectType, domain) {
        // Generate dynamic numbers for more variety
        const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
        
        const scenarios = {
            'Hotel PMS Integration Dashboard': `Currently showing: ${rand(150,300)} rooms synced via FIAS, ${rand(20,50)} check-ins today, ${rand(5,15)} reservations pending, occupancy at ${rand(65,95)}%`,
            'Fire Sprinkler Contractor Management': `Currently showing: ${rand(5,20)} active permits, ${rand(3,8)} inspections scheduled this week, ${rand(10,30)} systems under maintenance, ${rand(2,5)} compliance alerts`,
            'E-Commerce Virtual Try-On System': `Currently showing: ${rand(50,200)} customers trying products, ${rand(5,15)} items in AR preview, ${rand(70,95)}% fit accuracy, ${rand(10,30)} size recommendations generated`,
            'Crypto Trading Bot Interface': `Currently showing: ${rand(5,20)} active positions, P&L: +${rand(100,5000)} USDT today, ${rand(10,50)} signals analyzed, ${rand(3,10)} strategies running`,
            'PowerPoint Recording Integration': `Currently showing: Recording slide ${rand(5,25)} of ${rand(30,50)}, GoPro connected at 1080p, ${rand(2,10)}GB captured, ${rand(15,45)} minutes elapsed`,
            'Custom Wheel Configurator': `Currently showing: Carbon fiber wheel #${rand(1000,9999)}, ${rand(5,15)} customizations applied, price: $${rand(2000,8000)}, ${rand(3,7)} day production time`,
            'Google Workspace Migration Tool': `Currently showing: ${rand(500,2000)} accounts migrating, ${rand(100,500)}GB transferred, ${rand(10,50)} domains configured, ${rand(70,95)}% complete`,
            'CSAT Dashboard for Support Teams': `Currently showing: ${rand(80,95)}% satisfaction rate, ${rand(50,200)} tickets today, avg response: ${rand(2,10)} minutes, ${rand(5,20)} agents online`,
            'SDK Development Interface': `Currently showing: ${rand(10,50)} API endpoints tested, ${rand(100,500)} lines documented, ${rand(5,15)} code samples generated, ${rand(2,8)} languages supported`,
            'Smart Office Monitoring System': `Currently showing: ${rand(50,200)} employees checked in, ${rand(10,30)} zones monitored, ${rand(60,90)}% desk utilization, ${rand(2,10)} visitors registered`,
            'LMS with AI Tutoring': `Currently showing: ${rand(100,500)} students online, ${rand(20,50)} courses active, ${rand(70,95)}% completion rate, ${rand(10,30)} AI feedback sessions`,
            'Invoice & Inventory Manager': `Currently showing: ${rand(50,200)} products tracked, ${rand(10,50)} invoices pending, ${rand(5,20)} low stock alerts, revenue: $${rand(10000,100000)}/month`,
            'Restaurant Order Dashboard': `Currently showing: ${rand(20,50)} active orders, ${rand(5,15)} ready for pickup, avg prep time: ${rand(8,20)} mins, ${rand(3,8)} delivery drivers active`,
            'Fleet Management Console': `Currently showing: ${rand(20,100)} vehicles tracked, ${rand(2,8)} maintenance due, fuel efficiency: ${rand(15,30)} MPG, ${rand(500,2000)} miles today`,
            'Dental Practice Scheduler': `Currently showing: ${rand(15,40)} appointments today, ${rand(3,8)} procedures scheduled, ${rand(5,15)} insurance verifications pending, ${rand(2,5)} chairs occupied`,
            'Warehouse Picking Optimizer': `Currently showing: ${rand(50,200)} orders in queue, ${rand(10,30)} pickers active, ${rand(80,98)}% accuracy rate, avg pick time: ${rand(30,90)} seconds`,
            'default': `Currently showing: Processing ${rand(10,100)} ${domain} items, ${rand(2,8)} active operations, system running at ${rand(70,100)}% capacity`
        };
        
        return scenarios[projectType.name] || scenarios.default;
    }

    generatePrompt() {
        // Core selections
        const projectType = this.getRandomItem(this.projectTypes);
        const domain = this.getRandomItem(this.businessDomains);
        const designStyle = this.getRandomItem(this.designStyles);
        const colorScheme = this.getRandomItem(this.colorSchemes);
        
        // Get active scenario
        const activeScenario = this.generateActiveScenario(projectType, domain);
        
        // Tech stack
        const aiTech = this.getRandomItems(this.aiTechnologies, this.random(1, 3));
        const mlFramework = this.getRandomItems(this.mlFrameworks, this.random(1, 2));
        const vectorDb = this.random(1, 10) > 5 ? this.getRandomItem(this.vectorDatabases) : null;
        const cloudPlatform = this.getRandomItem(this.cloudPlatforms);
        const backend = this.getRandomItem(this.backendTech);
        
        // Features
        const features = this.getRandomItems(this.advancedFeatures, this.random(3, 6));
        const coreFeatures = this.getRandomItems(projectType.keywords, this.random(2, 3));
        
        // Metrics - randomly include or exclude
        const includeMetrics = Math.random() > 0.3;
        const metrics = includeMetrics ? this.getRandomItems(this.metrics, this.random(2, 4)) : [];
        
        // Generate project name
        const projectName = this.generateProjectName();
        const tagline = this.generateTagline(projectType.name, domain);
        
        // Build the prompt - NO PORTFOLIO LANGUAGE
        let prompt = `You are looking at the screen of someone using ${projectName}.\n\n`;
        
        prompt += `This is a ${projectType.name} for ${domain}.\n\n`;
        
        prompt += `CURRENT STATE:\n`;
        prompt += `${activeScenario}\n\n`;
        
        prompt += `The interface shows:\n`;
        prompt += `- ${coreFeatures.join('\n- ')}\n`;
        prompt += `- ${features.slice(0, 3).join('\n- ')}\n\n`;
        
        if (metrics.length > 0) {
            prompt += `Live metrics visible:\n`;
            metrics.forEach(metric => {
                prompt += `- ${metric.value()}\n`;
            });
            prompt += `\n`;
        }
        
        prompt += `Visual style: ${designStyle.name} with ${colorScheme.type} colors\n\n`;
        
        prompt += `CRITICAL: Generate the ACTUAL APPLICATION INTERFACE as if taking a screenshot of someone's screen while they're using it. This is NOT a portfolio piece, NOT a showcase, NOT a demo - it's the real application in use right now. No "powered by" badges, no feature lists, no marketing copy - just the working interface with real data.`;
        
        return {
            prompt,
            metadata: {
                projectName,
                tagline,
                projectType: projectType.name,
                domain,
                designStyle: designStyle.name,
                colorScheme: colorScheme.type,
                techStack: {
                    ai: aiTech,
                    ml: mlFramework,
                    vectorDb,
                    cloud: cloudPlatform,
                    backend
                },
                features: [...coreFeatures, ...features],
                metrics: metrics.map(m => m.value())
            }
        };
    }
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = PromptRandomizer;
}