// Enhanced AI Readiness Quiz Application with Assessment Scope and Industry Features
class AIReadinessQuiz {
    constructor() {
        console.log('🚀 Initializing Enhanced AI Readiness Quiz');
        this.currentScreen = 'welcome';
        this.currentQuestionIndex = 0;
        this.currentPillar = 'audience';
        this.userInfo = {};
        this.responses = {};
        this.scores = {
            audience: 0,
            creator: 0,
            developer: 0
        };
        this.selectedScope = 'complete';
        this.selectedPillars = ['audience', 'creator', 'developer'];
        
        // Load data from the provided JSON
        this.loadQuizData();
        this.loadIndustryData();
        
        this.init();
    }
    
    loadQuizData() {
        // Assessment options from provided data
        this.assessmentOptions = {
            "complete": {
                "id": "complete",
                "title": "Complete Quiz",
                "subtitle": "All 3 Experiences",
                "description": "Full check across Audience, Creator, and Developer experiences",
                "questions": 27,
                "time": "15-20 minutes",
                "pillars": ["audience", "creator", "developer"]
            },
            "audience_only": {
                "id": "audience_only", 
                "title": "Audience Experience",
                "subtitle": "Focus Area",
                "description": "AI tools for user engagement and personalization",
                "questions": 9,
                "time": "5-7 minutes",
                "pillars": ["audience"]
            },
            "creator_only": {
                "id": "creator_only",
                "title": "Creator Experience",
                "subtitle": "Focus Area", 
                "description": "AI tools for content creation and workflows",
                "questions": 9,
                "time": "5-7 minutes",
                "pillars": ["creator"]
            },
            "developer_only": {
                "id": "developer_only",
                "title": "Developer Experience",
                "subtitle": "Focus Area",
                "description": "AI tools for development and deployment",
                "questions": 9, 
                "time": "5-7 minutes",
                "pillars": ["developer"]
            }
        };

        // Quiz pillars and questions
        this.quizData = {
            "pillars": [
                {
                    "id": "audience",
                    "title": "Audience Experience", 
                    "weight": 35,
                    "color": "#fe1132",
                    "icon": "👥",
                    "description": "AI-powered search, personalization, and user engagement tools that enhance visitor experiences and drive conversions.",
                    "questions": [
                        {
                            "id": 1,
                            "text": "How do people search on your site?",
                            "options": [
                                {"text": "Simple keyword search only", "score": 0},
                                {"text": "Search with basic filters", "score": 1}, 
                                {"text": "Smart search that understands meaning", "score": 2},
                                {"text": "Search changes based on the person", "score": 3},
                                {"text": "Very advanced search tuned by data", "score": 4}
                            ]
                        },
                        {
                            "id": 2,
                            "text": "What percentage of your site searches return zero results?",
                            "options": [
                                {"text": "Don't track this metric", "score": 0},
                                {"text": "More than 20%", "score": 1},
                                {"text": "10-20%", "score": 2}, 
                                {"text": "5-10%", "score": 3},
                                {"text": "Less than 5%", "score": 4}
                            ]
                        },
                        {
                            "id": 3,
                            "text": "How do you decide what shows first in search?",
                            "options": [
                                {"text": "We use the default order", "score": 0},
                                {"text": "We tag and sort things by hand", "score": 1},
                                {"text": "We use data to improve order", "score": 2},
                                {"text": "AI reorders results based on clicks", "score": 3},
                                {"text": "We use models that update in real time", "score": 4}
                            ]
                        },
                        {
                            "id": 4,
                            "text": "Do people see content tailored to them?",
                            "options": [
                                {"text": "No, everyone sees the same", "score": 0},
                                {"text": "Only by simple roles (like member vs guest)", "score": 1},
                                {"text": "Some suggestions by topic", "score": 2},
                                {"text": "AI suggests based on what people do", "score": 3},
                                {"text": "Advanced, tested personalization", "score": 4}
                            ]
                        },
                        {
                            "id": 5,
                            "text": "How do you check if suggestions work well?",
                            "options": [
                                {"text": "We don’t measure this", "score": 0},
                                {"text": "We check clicks", "score": 1},
                                {"text": "We check signups or buys", "score": 2},
                                {"text": "We track money gained from suggestions", "score": 3},
                                {"text": "We use deep analytics and improve automatically", "score": 4}
                            ]
                        },
                        {
                            "id": 6,
                            "text": "What data sources power your personalization engines?",
                            "options": [
                                {"text": "No data integration for personalization", "score": 0},
                                {"text": "Basic user profile data only", "score": 1},
                                {"text": "Browsing history and purchase/interaction data", "score": 2},
                                {"text": "Multi-channel data (web, mobile, email, social)", "score": 3},
                                {"text": "Real-time behavioral data with external enrichment", "score": 4}
                            ]
                        },
                        {
                            "id": 7,
                            "text": "What level of AI-powered customer support do you provide?",
                            "options": [
                                {"text": "No automated customer support", "score": 0},
                                {"text": "Basic FAQ or knowledge base", "score": 1},
                                {"text": "Rule-based chatbot with predefined responses", "score": 2},
                                {"text": "AI chatbot with natural language processing (Intercom Fin)", "score": 3},
                                {"text": "Advanced AI assistant with contextual understanding", "score": 4}
                            ]
                        },
                        {
                            "id": 8,
                            "text": "How do you measure chatbot and support effectiveness?",
                            "options": [
                                {"text": "No measurement in place", "score": 0},
                                {"text": "Basic usage statistics and logs", "score": 1},
                                {"text": "Resolution rate and user satisfaction scores", "score": 2},
                                {"text": "Ticket deflection rates and cost savings metrics", "score": 3},
                                {"text": "Advanced analytics with sentiment analysis and learning", "score": 4}
                            ]
                        },
                        {
                            "id": 9,
                            "text": "How do you validate and optimize user experiences?",
                            "options": [
                                {"text": "No systematic user experience validation", "score": 0},
                                {"text": "Basic web analytics (Google Analytics)", "score": 1},
                                {"text": "User session recordings and heatmaps", "score": 2},
                                {"text": "A/B testing with behavioral insights (Hotjar, FullStory)", "score": 3},
                                {"text": "AI-powered optimization with synthetic user testing", "score": 4}
                            ]
                        }
                    ]
                },
                {
                    "id": "creator",
                    "title": "Creator Experience",
                    "weight": 30, 
                    "color": "#6B7280",
                    "icon": "✍️",
                    "description": "AI-powered tools that streamline content creation, improve quality assurance, and automate editorial workflows.",
                    "questions": [
                        {
                            "id": 10,
                            "text": "How do you approach content planning and ideation?",
                            "options": [
                                {"text": "Manual brainstorming and ad-hoc planning", "score": 0},
                                {"text": "Editorial calendar with basic keyword research", "score": 1},
                                {"text": "Content planning with audience persona insights", "score": 2},
                                {"text": "AI-assisted topic research (Ndevr ContentSeer, MarketMuse)", "score": 3},
                                {"text": "Integrated AI content strategy with performance prediction", "score": 4}
                            ]
                        },
                        {
                            "id": 11,
                            "text": "What content optimization tools do you use?",
                            "options": [
                                {"text": "No content optimization tools", "score": 0},
                                {"text": "Basic SEO plugins (Yoast, RankMath)", "score": 1},
                                {"text": "Keyword research tools (SEMrush, Ahrefs)", "score": 2},
                                {"text": "AI-powered content optimization (Clearscope, Frase)", "score": 3},
                                {"text": "Integrated content intelligence with real-time optimization", "score": 4}
                            ]
                        },
                        {
                            "id": 12,
                            "text": "How do you measure content performance and ROI?",
                            "options": [
                                {"text": "No systematic content performance measurement", "score": 0},
                                {"text": "Basic pageviews and engagement metrics", "score": 1},
                                {"text": "Conversion tracking and lead attribution", "score": 2},
                                {"text": "Content scoring with AI-driven insights", "score": 3},
                                {"text": "Predictive content performance with automated optimization", "score": 4}
                            ]
                        },
                        {
                            "id": 13,
                            "text": "How do you ensure content quality and authenticity?",
                            "options": [
                                {"text": "Manual review and editing only", "score": 0},
                                {"text": "Basic spell check and grammar tools", "score": 1},
                                {"text": "Multi-stage editorial workflow with reviews", "score": 2},
                                {"text": "AI-powered quality checks and plagiarism detection", "score": 3},
                                {"text": "Comprehensive AI content detection (Originality.ai, GPTZero)", "score": 4}
                            ]
                        },
                        {
                            "id": 14,
                            "text": "What's your approach to AI-generated content detection?",
                            "options": [
                                {"text": "No AI content detection in place", "score": 0},
                                {"text": "Manual review for AI-generated content", "score": 1},
                                {"text": "Basic AI detection tools in editorial process", "score": 2},
                                {"text": "Automated AI detection integrated into CMS workflow", "score": 3},
                                {"text": "Advanced AI detection with authenticity scoring and governance", "score": 4}
                            ]
                        },
                        {
                            "id": 15,
                            "text": "How do you handle content governance and brand consistency?",
                            "options": [
                                {"text": "No formal content governance process", "score": 0},
                                {"text": "Basic style guides and manual review", "score": 1},
                                {"text": "Content templates and approval workflows", "score": 2},
                                {"text": "AI-powered brand voice analysis and consistency checking", "score": 3},
                                {"text": "Intelligent content governance with automated compliance", "score": 4}
                            ]
                        },
                        {
                            "id": 16,
                            "text": "How automated are your editorial workflows?",
                            "options": [
                                {"text": "Completely manual editorial processes", "score": 0},
                                {"text": "Basic email notifications for content updates", "score": 1},
                                {"text": "Automated publishing schedules and basic workflows", "score": 2},
                                {"text": "AI-powered workflow automation (Uncanny Automator, Make.com)", "score": 3},
                                {"text": "Fully integrated content lifecycle automation with optimization", "score": 4}
                            ]
                        },
                        {
                            "id": 17,
                            "text": "How do you handle content distribution and syndication?",
                            "options": [
                                {"text": "Manual posting to individual channels", "score": 0},
                                {"text": "Basic social media scheduling tools", "score": 1},
                                {"text": "Multi-channel publishing with manual optimization", "score": 2},
                                {"text": "Automated content syndication with platform optimization", "score": 3},
                                {"text": "AI-driven content distribution with performance optimization", "score": 4}
                            ]
                        },
                        {
                            "id": 18,
                            "text": "How do you track and optimize editorial efficiency?",
                            "options": [
                                {"text": "No editorial performance tracking", "score": 0},
                                {"text": "Basic time tracking and deadline management", "score": 1},
                                {"text": "Editorial KPIs and productivity metrics", "score": 2},
                                {"text": "AI-powered editorial analytics with bottleneck identification", "score": 3},
                                {"text": "Predictive editorial optimization with resource allocation insights", "score": 4}
                            ]
                        }
                    ]
                },
                {
                    "id": "developer",
                    "title": "Developer Experience",
                    "weight": 35,
                    "color": "#000000",
                    "icon": "🛠️",
                    "description": "AI-powered development tools, automated testing, deployment pipelines, and monitoring systems that accelerate development cycles.",
                    "questions": [
                        {
                            "id": 19,
                            "text": "What AI-powered development tools does your team use?",
                            "options": [
                                {"text": "No AI development tools", "score": 0},
                                {"text": "Basic code completion in IDE", "score": 1},
                                {"text": "AI-powered code suggestions (GitHub Copilot, Tabnine)", "score": 2},
                                {"text": "Advanced AI assistants with context awareness (JetBrains AI)", "score": 3},
                                {"text": "Fully integrated AI development environment with code generation", "score": 4}
                            ]
                        },
                        {
                            "id": 20,
                            "text": "How do you measure AI tool impact on development productivity?",
                            "options": [
                                {"text": "No measurement of AI tool impact", "score": 0},
                                {"text": "Subjective feedback from developers", "score": 1},
                                {"text": "Basic metrics like commit frequency or lines of code", "score": 2},
                                {"text": "Productivity metrics with before/after AI adoption analysis", "score": 3},
                                {"text": "Comprehensive AI impact analysis with ROI calculation", "score": 4}
                            ]
                        },
                        {
                            "id": 21,
                            "text": "How does your team handle AI-generated code quality and review?",
                            "options": [
                                {"text": "No specific process for AI-generated code", "score": 0},
                                {"text": "Manual review of all AI suggestions", "score": 1},
                                {"text": "Code review process with AI-awareness", "score": 2},
                                {"text": "Automated quality checks for AI-generated code", "score": 3},
                                {"text": "AI-powered code quality analysis with security and performance optimization", "score": 4}
                            ]
                        },
                        {
                            "id": 22,
                            "text": "What level of automated code quality checking do you have?",
                            "options": [
                                {"text": "No automated quality checks", "score": 0},
                                {"text": "Basic linting and code formatting", "score": 1},
                                {"text": "Static code analysis tools", "score": 2},
                                {"text": "Comprehensive quality checks with SonarQube or similar", "score": 3},
                                {"text": "AI-powered code analysis with predictive quality scoring", "score": 4}
                            ]
                        },
                        {
                            "id": 23,
                            "text": "How do you handle security vulnerability detection?",
                            "options": [
                                {"text": "Manual security reviews only", "score": 0},
                                {"text": "Basic dependency vulnerability scanning", "score": 1},
                                {"text": "SAST (Static Application Security Testing) tools", "score": 2},
                                {"text": "Comprehensive security automation (Snyk, Veracode)", "score": 3},
                                {"text": "AI-powered security analysis with predictive threat detection", "score": 4}
                            ]
                        },
                        {
                            "id": 24,
                            "text": "What is your approach to automated testing?",
                            "options": [
                                {"text": "Minimal or no automated testing", "score": 0},
                                {"text": "Basic unit tests", "score": 1},
                                {"text": "Unit and integration testing coverage", "score": 2},
                                {"text": "Comprehensive testing with E2E automation (Playwright, Cypress)", "score": 3},
                                {"text": "AI-powered test generation and intelligent test optimization", "score": 4}
                            ]
                        },
                        {
                            "id": 25,
                            "text": "How automated is your deployment process?",
                            "options": [
                                {"text": "Manual deployment processes", "score": 0},
                                {"text": "Basic FTP or manual file uploads", "score": 1},
                                {"text": "Automated deployment scripts", "score": 2},
                                {"text": "CI/CD pipelines with automated deployments (GitHub Actions, GitLab CI)", "score": 3},
                                {"text": "Advanced CI/CD with AI-powered deployment optimization and rollback", "score": 4}
                            ]
                        },
                        {
                            "id": 26,
                            "text": "What level of infrastructure automation do you have?",
                            "options": [
                                {"text": "Manual server management", "score": 0},
                                {"text": "Basic server provisioning", "score": 1},
                                {"text": "Infrastructure as Code (Terraform, Ansible)", "score": 2},
                                {"text": "Container orchestration with automated scaling", "score": 3},
                                {"text": "AI-powered infrastructure optimization with predictive scaling", "score": 4}
                            ]
                        },
                        {
                            "id": 27,
                            "text": "How comprehensive is your application monitoring and observability?",
                            "options": [
                                {"text": "No systematic monitoring", "score": 0},
                                {"text": "Basic uptime monitoring", "score": 1},
                                {"text": "Application performance monitoring (APM)", "score": 2},
                                {"text": "Full observability stack with logs, metrics, and traces (New Relic, Datadog)", "score": 3},
                                {"text": "AI-powered monitoring with predictive issue detection and auto-remediation", "score": 4}
                            ]
                        }
                    ]
                }
            ],
            "maturity_levels": [
                {"min": 0, "max": 25, "level": "Beginner", "color": "#6B7280", "description": "Limited AI integration, foundational gaps"},
                {"min": 26, "max": 50, "level": "Developing", "color": "#fe1132", "description": "Early-stage AI adoption, some tools in use"},
                {"min": 51, "max": 75, "level": "Proficient", "color": "#000000", "description": "Systematic AI implementation, measurable ROI"}, 
                {"min": 76, "max": 100, "level": "Advanced", "color": "#fe1132", "description": "AI-native organization, competitive advantage"}
            ]
        };
    }
    
    loadIndustryData() {
        this.industries = {
            "technology": {
                "id": "technology",
                "name": "Technology/Software",
                "benchmarks": {"audience": 72, "creator": 68, "developer": 78, "overall": 73},
                "priorities": ["developer", "creator", "audience"],
                "key_tools": ["GitHub Copilot", "Algolia", "Ndevr ContentSeer"],
                "focus_areas": ["Code quality automation", "Developer productivity", "Technical content optimization"]
            },
            "ecommerce": {
                "id": "ecommerce", 
                "name": "E-commerce/Retail",
                "benchmarks": {"audience": 75, "creator": 65, "developer": 60, "overall": 67},
                "priorities": ["audience", "creator", "developer"],
                "key_tools": ["Nosto", "Algolia", "Intercom Fin"],
                "focus_areas": ["Personalization engines", "Product recommendations", "Customer experience optimization"]
            },
            "healthcare": {
                "id": "healthcare",
                "name": "Healthcare",
                "benchmarks": {"audience": 58, "creator": 62, "developer": 55, "overall": 58},
                "priorities": ["creator", "audience", "developer"],
                "key_tools": ["Clearscope", "FullStory", "SonarQube"],
                "focus_areas": ["Content compliance", "Patient experience", "Security automation"]
            },
            "financial": {
                "id": "financial",
                "name": "Financial Services", 
                "benchmarks": {"audience": 65, "creator": 60, "developer": 70, "overall": 65},
                "priorities": ["developer", "audience", "creator"],
                "key_tools": ["Snyk", "New Relic", "Originality.ai"],
                "focus_areas": ["Security compliance", "Risk management", "Regulatory content"]
            },
            "education": {
                "id": "education",
                "name": "Education",
                "benchmarks": {"audience": 55, "creator": 70, "developer": 50, "overall": 58},
                "priorities": ["creator", "audience", "developer"],
                "key_tools": ["MarketMuse", "Hotjar", "GitHub Actions"],
                "focus_areas": ["Educational content creation", "Student engagement", "Learning analytics"]
            },
            "manufacturing": {
                "id": "manufacturing",
                "name": "Manufacturing",
                "benchmarks": {"audience": 45, "creator": 48, "developer": 52, "overall": 48},
                "priorities": ["developer", "audience", "creator"],
                "key_tools": ["Datadog", "Playwright", "Uncanny Automator"],
                "focus_areas": ["Process automation", "Quality assurance", "Operational efficiency"]
            },
            "media": {
                "id": "media",
                "name": "Media/Publishing",
                "benchmarks": {"audience": 68, "creator": 75, "developer": 58, "overall": 67},
                "priorities": ["creator", "audience", "developer"],
                "key_tools": ["Ndevr ContentSeer", "Originality.ai", "Algolia"],
                "focus_areas": ["Content authenticity", "Editorial workflows", "Audience engagement"]
            },
            "professional": {
                "id": "professional",
                "name": "Professional Services",
                "benchmarks": {"audience": 60, "creator": 65, "developer": 55, "overall": 60},
                "priorities": ["creator", "audience", "developer"], 
                "key_tools": ["MarketMuse", "Intercom Fin", "SonarQube"],
                "focus_areas": ["Thought leadership content", "Client engagement", "Service automation"]
            },
            "government": {
                "id": "government",
                "name": "Government/Non-profit",
                "benchmarks": {"audience": 42, "creator": 45, "developer": 40, "overall": 42},
                "priorities": ["audience", "creator", "developer"],
                "key_tools": ["Coveo", "Clearscope", "New Relic"],
                "focus_areas": ["Public information access", "Compliance documentation", "Service delivery"]
            },
            "other": {
                "id": "other",
                "name": "Other",
                "benchmarks": {"audience": 55, "creator": 58, "developer": 52, "overall": 55},
                "priorities": ["audience", "creator", "developer"],
                "key_tools": ["Algolia", "MarketMuse", "GitHub Copilot"],
                "focus_areas": ["Digital transformation", "Process optimization", "User experience improvement"]
            }
        };
    }
    
    init() {
        console.log('🔧 Initializing enhanced quiz components');
        
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                this.bindEvents();
                this.setupScopeListeners();
                this.showScreen('welcome');
            });
        } else {
            this.bindEvents();
            this.setupScopeListeners();
            this.showScreen('welcome');
        }
        
        this.hideLoading();
    }
    
    setupScopeListeners() {
        // Add listeners for assessment scope selection
        const scopeRadios = document.querySelectorAll('input[name="assessmentScope"]');
        scopeRadios.forEach(radio => {
            radio.addEventListener('change', (e) => {
                this.handleScopeChange(e.target.value);
            });
        });
    }
    
    handleScopeChange(scopeId) {
        console.log(`🎯 Assessment scope changed to: ${scopeId}`);
        this.selectedScope = scopeId;
        
        const option = this.assessmentOptions[scopeId];
        if (option) {
            this.selectedPillars = option.pillars;
            
            // Update time estimate display
            const timeElements = document.querySelectorAll('.scope-time');
            const selectedOption = document.querySelector(`#${scopeId}`).nextElementSibling;
            const timeElement = selectedOption.querySelector('.scope-time');
            
            console.log(`⏰ Updated time estimate: ${option.time} for ${option.questions} questions`);
        }
    }
    
    bindEvents() {
        console.log('🔌 Binding event listeners');
        
        try {
            // User form submission
            const userForm = document.getElementById('ai-ready-quiz-user-form');
            if (userForm) {
                console.log('✅ Found user info form, adding submit listener');
                userForm.addEventListener('submit', (e) => {
                    console.log('📝 Form submit event triggered');
                    e.preventDefault();
                    this.handleUserInfoSubmit(e);
                });
            } else {
                console.error('❌ User info form not found!');
            }
            
            // Quiz navigation buttons
            const prevBtn = document.getElementById('prev-btn');
            const nextBtn = document.getElementById('next-btn');
            
            if (prevBtn) {
                prevBtn.addEventListener('click', () => {
                    console.log('⬅️ Previous button clicked');
                    this.previousQuestion();
                });
            }
            
            if (nextBtn) {
                nextBtn.addEventListener('click', () => {
                    console.log('➡️ Next button clicked');
                    this.nextQuestion();
                });
            }
            
            // Transition continue button
            const continueBtn = document.getElementById('continue-btn');
            if (continueBtn) {
                continueBtn.addEventListener('click', () => {
                    console.log('▶️ Continue button clicked');
                    this.continueToPillar();
                });
            }
            
            // Results actions
            const exportBtn = document.getElementById('export-btn');
            const retakeBtn = document.getElementById('retake-btn');
            
            if (exportBtn) {
                exportBtn.addEventListener('click', () => {
                    console.log('🖨️ Print button clicked');
                    window.print();
                });
            }
            
            if (retakeBtn) {
                retakeBtn.addEventListener('click', () => {
                    console.log('🔄 Retake button clicked');
                    this.userInfo = {};
                    this.selectedScope = 'complete';
                    this.selectedPillars = ['audience', 'creator', 'developer'];
                    this.currentQuestionIndex = 0;
                    this.answers = {};
                    this.showScreen('welcome');
                });
            }
            
            console.log('✅ All event listeners bound successfully');
            
        } catch (error) {
            console.error('❌ Error binding events:', error);
        }
    }
    
    handleUserInfoSubmit(event) {
        console.log('🚀 Starting enhanced form submission process');
        
        try {
            const form = document.getElementById('ai-ready-quiz-user-form');
            if (!form) {
                console.error('❌ Form element not found');
                return;
            }
            
            console.log('📋 Form found, extracting data');
            const formData = new FormData(form);
            
            // Extract form data including scope and industry
            this.userInfo = {
                firstName: formData.get('firstName')?.trim(),
                lastName: formData.get('lastName')?.trim(),
                email: formData.get('email')?.trim(),
                company: formData.get('company')?.trim(),
                role: formData.get('role'),
                industry: formData.get('industry'),
                assessmentScope: formData.get('assessmentScope') || 'complete'
            };
            
            console.log('👤 User info collected:', this.userInfo);
            
            // Update selected scope and pillars
            this.selectedScope = this.userInfo.assessmentScope;
            const option = this.assessmentOptions[this.selectedScope];
            if (option) {
                this.selectedPillars = option.pillars;
                console.log('🎯 Selected pillars:', this.selectedPillars);
            }
            
            // Validate required fields (industry is now required)
            const requiredFields = ['firstName', 'lastName', 'email', 'company', 'role', 'industry'];
            const missingFields = requiredFields.filter(field => !this.userInfo[field]);
            
            if (missingFields.length > 0) {
                console.warn('⚠️ Missing required fields:', missingFields);
                this.showFormError(`Please fill in all required fields: ${missingFields.join(', ')}`);
                return;
            }
            
            // Basic email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(this.userInfo.email)) {
                console.warn('⚠️ Invalid email format');
                this.showFormError('Please enter a valid email address');
                return;
            }
            
            console.log('✅ Form validation passed');
            this.clearFormError();
            
            // Show loading state
            this.setFormLoading(true);
            
            // Small delay to show loading state
            setTimeout(() => {
                console.log('🎯 Transitioning to quiz screen');
                this.setFormLoading(false);
                this.showScreen('quiz');
            }, 500);
            
        } catch (error) {
            console.error('❌ Error in form submission:', error);
            this.showFormError('An error occurred. Please try again.');
            this.setFormLoading(false);
        }
    }
    
    showFormError(message) {
        this.clearFormError();
        
        const form = document.getElementById('ai-ready-quiz-user-form');
        const errorDiv = document.createElement('div');
        errorDiv.className = 'form-error';
        errorDiv.textContent = message;
        
        const submitBtn = form.querySelector('button[type="submit"]');
        form.insertBefore(errorDiv, submitBtn);
    }
    
    clearFormError() {
        const existingError = document.querySelector('.form-error');
        if (existingError) {
            existingError.remove();
        }
    }
    
    setFormLoading(isLoading) {
        const submitBtn = document.querySelector('#ai-ready-quiz-user-form button[type="submit"]');
        if (submitBtn) {
            submitBtn.disabled = isLoading;
            submitBtn.textContent = isLoading ? 'Starting Quiz...' : 'Get Started';
        }
    }
    
    showScreen(screenName) {
        console.log(`🎬 Showing screen: ${screenName}`);
        
        try {
            // Hide all screens
            document.querySelectorAll('.screen').forEach(screen => {
                screen.classList.remove('active');
            });
            
            // Show target screen
            const targetScreen = document.getElementById(`${screenName}-screen`);
            if (targetScreen) {
                targetScreen.classList.add('active');
                this.currentScreen = screenName;
                console.log(`✅ Screen ${screenName} is now active`);
                
                // Initialize screen-specific content
                if (screenName === 'quiz') {
                    this.initQuizScreen();
                } else if (screenName === 'results') {
                    this.initResultsScreen();
                }
            } else {
                console.error(`❌ Screen ${screenName} not found`);
            }
            
        } catch (error) {
            console.error(`❌ Error showing screen ${screenName}:`, error);
        }
    }
    
    initQuizScreen() {
        console.log('🎯 Initializing quiz screen with selected scope');
        this.renderCurrentQuestion();
        this.updateProgress();
    }
    
    initResultsScreen() {
        console.log('📊 Initializing results screen');
        this.showLoading();
        setTimeout(() => {
            this.calculateScores();
            this.renderResults();
            this.hideLoading();
        }, 1500);
    }
    
    getSelectedQuestions() {
        const questions = [];
        this.quizData.pillars.forEach(pillar => {
            if (this.selectedPillars.includes(pillar.id)) {
                questions.push(...pillar.questions);
            }
        });
        return questions;
    }
    
    getCurrentPillar() {
        const selectedQuestions = this.getSelectedQuestions();
        const currentQuestion = selectedQuestions[this.currentQuestionIndex];
        
        // Find which pillar this question belongs to
        for (const pillar of this.quizData.pillars) {
            if (pillar.questions.some(q => q.id === currentQuestion.id)) {
                return pillar;
            }
        }
        
        return this.quizData.pillars[0]; // fallback
    }
    
    renderCurrentQuestion() {
        console.log(`📝 Rendering question ${this.currentQuestionIndex + 1}`);
        
        const selectedQuestions = this.getSelectedQuestions();
        const question = selectedQuestions[this.currentQuestionIndex];
        const currentPillar = this.getCurrentPillar();
        
        if (!question) {
            console.error('❌ Question not found');
            return;
        }
        
        // Update question display
        const questionText = document.getElementById('question-text');
        const optionsContainer = document.getElementById('options-container');
        const pillarBadge = document.getElementById('pillar-badge');
        
        if (questionText) questionText.textContent = question.text;
        if (pillarBadge) {
            pillarBadge.textContent = currentPillar.title;
            pillarBadge.style.backgroundColor = currentPillar.color;
        }
        
        // Render options
        if (optionsContainer) {
            optionsContainer.innerHTML = '';
            
            question.options.forEach((option, index) => {
                const optionElement = document.createElement('div');
                optionElement.className = 'option-item';
                optionElement.innerHTML = `<div class="option-text">${option.text}</div>`;
                
                // Check if this option was previously selected
                if (this.responses[question.id] === index) {
                    optionElement.classList.add('selected');
                }
                
                optionElement.addEventListener('click', () => {
                    console.log(`✅ Option ${index} selected for question ${question.id}`);
                    
                    // Remove previous selection
                    optionsContainer.querySelectorAll('.option-item').forEach(el => 
                        el.classList.remove('selected')
                    );
                    
                    // Mark current selection
                    optionElement.classList.add('selected');
                    this.responses[question.id] = index;
                    
                    // Enable next button
                    this.enableNextButton();
                });
                
                optionsContainer.appendChild(optionElement);
            });
        }
        
        this.updateNavigationButtons();
    }
    
    updateProgress() {
        const selectedQuestions = this.getSelectedQuestions();
        const progress = ((this.currentQuestionIndex + 1) / selectedQuestions.length) * 100;
        
        const progressFill = document.getElementById('progress-fill');
        const currentQuestionEl = document.getElementById('current-question');
        const totalQuestionsEl = document.getElementById('total-questions');
        
        if (progressFill) progressFill.style.width = `${progress}%`;
        if (currentQuestionEl) currentQuestionEl.textContent = this.currentQuestionIndex + 1;
        if (totalQuestionsEl) totalQuestionsEl.textContent = selectedQuestions.length;
    }
    
    updateNavigationButtons() {
        const prevBtn = document.getElementById('prev-btn');
        const nextBtn = document.getElementById('next-btn');
        
        if (prevBtn) {
            prevBtn.disabled = this.currentQuestionIndex === 0;
        }
        
        if (nextBtn) {
            const selectedQuestions = this.getSelectedQuestions();
            const currentQuestion = selectedQuestions[this.currentQuestionIndex];
            const hasResponse = this.responses[currentQuestion.id] !== undefined;
            
            nextBtn.disabled = !hasResponse;
            
            if (this.currentQuestionIndex === selectedQuestions.length - 1) {
                nextBtn.textContent = 'Finish Quiz';
            } else {
                nextBtn.textContent = 'Next';
            }
        }
    }
    
    enableNextButton() {
        const nextBtn = document.getElementById('next-btn');
        if (nextBtn) {
            nextBtn.disabled = false;
        }
    }
    
    previousQuestion() {
        if (this.currentQuestionIndex > 0) {
            this.currentQuestionIndex--;
            this.renderCurrentQuestion();
            this.updateProgress();
        }
    }
    
    nextQuestion() {
        const selectedQuestions = this.getSelectedQuestions();
        
        if (this.currentQuestionIndex < selectedQuestions.length - 1) {
            const oldPillar = this.getCurrentPillar();
            this.currentQuestionIndex++;
            const newPillar = this.getCurrentPillar();
            
            // Check for pillar transition (only if we have multiple pillars)
            if (this.selectedPillars.length > 1 && oldPillar.id !== newPillar.id) {
                this.showPillarTransition(newPillar);
            } else {
                this.renderCurrentQuestion();
                this.updateProgress();
            }
        } else {
            // Quiz complete
            console.log('🎉 Quiz completed, showing results');
            this.showScreen('results');
        }
    }
    
    showPillarTransition(pillar) {
        console.log(`🔄 Transitioning to pillar: ${pillar.title}`);
        
        const transitionIcon = document.getElementById('transition-icon');
        const transitionTitle = document.getElementById('transition-title');
        const transitionDescription = document.getElementById('transition-description');
        
        if (transitionIcon) transitionIcon.textContent = pillar.icon;
        if (transitionTitle) transitionTitle.textContent = pillar.title;
        if (transitionDescription) transitionDescription.textContent = pillar.description;
        
        this.showScreen('transition');
    }
    
    continueToPillar() {
        this.showScreen('quiz');
        this.renderCurrentQuestion();
        this.updateProgress();
    }
    
    calculateScores() {
        console.log('🧮 Calculating scores for selected pillars');
        
        // Reset scores
        this.scores = { audience: 0, creator: 0, developer: 0 };
        
        this.quizData.pillars.forEach(pillar => {
            if (this.selectedPillars.includes(pillar.id)) {
                let pillarScore = 0;
                let answeredQuestions = 0;
                
                pillar.questions.forEach(question => {
                    const responseIndex = this.responses[question.id];
                    if (responseIndex !== undefined) {
                        pillarScore += question.options[responseIndex].score;
                        answeredQuestions++;
                    }
                });
                
                // Convert to percentage (max score of 4 per question)
                const maxPossibleScore = pillar.questions.length * 4;
                this.scores[pillar.id] = Math.round((pillarScore / maxPossibleScore) * 100);
            }
        });
        
        console.log('📊 Final scores:', this.scores);
    }
    
    getOverallScore() {
        // Calculate weighted average based on selected pillars
        const weights = { audience: 0.35, creator: 0.30, developer: 0.35 };
        let totalWeight = 0;
        let weightedSum = 0;
        
        this.selectedPillars.forEach(pillarId => {
            weightedSum += this.scores[pillarId] * weights[pillarId];
            totalWeight += weights[pillarId];
        });
        
        return Math.round(weightedSum / totalWeight);
    }
    
    getMaturityLevel(score) {
        for (const level of this.quizData.maturity_levels) {
            if (score >= level.min && score <= level.max) {
                return {
                    level: level.level,
                    description: level.description,
                    class: level.level.toLowerCase(),
                    color: level.color
                };
            }
        }
        return { level: 'Beginner', description: 'Limited AI integration', class: 'beginner' };
    }
    
    getIndustryData() {
        return this.industries[this.userInfo.industry] || this.industries['other'];
    }
    
    renderResults() {
        console.log('🎨 Rendering enhanced results with industry benchmarks');
        
        const overallScore = this.getOverallScore();
        const maturity = this.getMaturityLevel(overallScore);
        const industryData = this.getIndustryData();
        
        // Update overall score display
        const overallScoreEl = document.getElementById('overall-score');
        const maturityBadge = document.getElementById('maturity-badge');
        const maturityDescription = document.getElementById('maturity-description');
        
        if (overallScoreEl) overallScoreEl.textContent = overallScore;
        if (maturityBadge) {
            maturityBadge.textContent = maturity.level;
            maturityBadge.className = `level-badge ${maturity.class}`;
        }
        if (maturityDescription) maturityDescription.textContent = maturity.description;
        
        // Update industry benchmark
        this.renderIndustryBenchmark(overallScore, industryData);
        
        // Update pillar scores with animation and benchmarks
        this.animatePillarScores(industryData);
        
        // Generate industry-specific recommendations
        this.renderIndustryRecommendations(industryData);
    }
    
    renderIndustryBenchmark(userScore, industryData) {
        const benchmarkSection = document.getElementById('industry-benchmark');
        const yourScoreEl = document.getElementById('benchmark-your-score');
        const industryScoreEl = document.getElementById('benchmark-industry-score');
        const industryLabelEl = document.getElementById('benchmark-industry-label');
        const insightEl = document.getElementById('benchmark-insight');
        
        if (yourScoreEl) yourScoreEl.textContent = `${userScore}%`;
        if (industryScoreEl) industryScoreEl.textContent = `${industryData.benchmarks.overall}%`;
        if (industryLabelEl) industryLabelEl.textContent = `${industryData.name} Average`;
        
        // Generate benchmark insight
        if (insightEl) {
            const difference = userScore - industryData.benchmarks.overall;
            let insightText = '';
            
            if (difference > 10) {
                insightText = `🎉 Excellent! You're ${difference} points above the ${industryData.name} industry average. You're leading in AI adoption within your sector.`;
            } else if (difference > 0) {
                insightText = `👍 Good work! You're ${difference} points above the ${industryData.name} industry average. Continue building on this momentum.`;
            } else if (difference > -10) {
                insightText = `📈 You're ${Math.abs(difference)} points below the ${industryData.name} industry average. There's significant opportunity for improvement.`;
            } else {
                insightText = `🚀 Significant opportunity! You're ${Math.abs(difference)} points below the ${industryData.name} industry average. Focus on the priority areas below.`;
            }
            
            insightEl.innerHTML = `<p>${insightText}</p>`;
        }
    }
    
    animatePillarScores(industryData) {
        const pillars = [
            { id: 'audience', score: this.scores.audience, benchmark: industryData.benchmarks.audience },
            { id: 'creator', score: this.scores.creator, benchmark: industryData.benchmarks.creator },
            { id: 'developer', score: this.scores.developer, benchmark: industryData.benchmarks.developer }
        ];
        
        pillars.forEach((pillar, index) => {
            // Only show pillars that were selected
            const pillarResultEl = document.getElementById(`${pillar.id}-result`);
            if (!this.selectedPillars.includes(pillar.id)) {
                if (pillarResultEl) pillarResultEl.style.display = 'none';
                return;
            }
            
            setTimeout(() => {
                const fillEl = document.getElementById(`${pillar.id}-fill`);
                const scoreEl = document.getElementById(`${pillar.id}-score`);
                const benchmarkEl = document.getElementById(`${pillar.id}-industry-avg`);
                
                if (fillEl) fillEl.style.width = `${pillar.score}%`;
                if (scoreEl) scoreEl.textContent = `${pillar.score}%`;
                if (benchmarkEl) benchmarkEl.textContent = `${pillar.benchmark}%`;
            }, (index + 1) * 300);
        });
    }
    
    renderIndustryRecommendations(industryData) {
        const container = document.getElementById('recommendations-content');
        if (!container) return;
        
        // Priority areas based on industry priorities and lowest scores
        const userPillarScores = this.selectedPillars.map(pillarId => ({
            id: pillarId,
            name: this.quizData.pillars.find(p => p.id === pillarId).title,
            score: this.scores[pillarId],
            benchmark: industryData.benchmarks[pillarId],
            gap: industryData.benchmarks[pillarId] - this.scores[pillarId]
        }));
        
        // Sort by priority for this industry, then by gap
        const displayAreas = userPillarScores
            .sort((a, b) => {
                const aPriority = industryData.priorities.indexOf(a.id);
                const bPriority = industryData.priorities.indexOf(b.id);
                if (aPriority !== bPriority) return aPriority - bPriority;
                return b.gap - a.gap; // Larger gaps first
            });
        // Show all selected areas with recommendations
        
        container.innerHTML = `
            <div class="recommendation-category">
                <h4>Industry Focus: ${industryData.name}</h4>
                <p><strong>Key Focus Areas:</strong> ${industryData.focus_areas.join(', ')}</p>
                <div class="action-plan">
                    <h5>Recommended Tools for Your Industry</h5>
                    <ul>
                        ${industryData.key_tools.map(tool => `<li>${tool}</li>`).join('')}
                    </ul>
                </div>
            </div>
            ${displayAreas.map(area => `
                <div class="recommendation-category">
                    <h4>${area.name} - Priority Focus (${area.score}% vs ${area.benchmark}% industry avg)</h4>
                    <div class="action-plan">
                        <h5>Immediate Actions</h5>
                        <ul>
                            <li>Audit current ${area.name.toLowerCase()} tools and processes</li>
                            <li>Benchmark against ${industryData.name} leaders in this area</li>
                            <li>Create 90-day implementation plan for key improvements</li>
                            <li>Establish KPIs to measure progress toward industry benchmarks</li>
                        </ul>
                        <h5>Industry-Specific Recommendations</h5>
                        <ul>
                            ${this.getIndustrySpecificRecommendations(area.id, industryData).map(rec => `<li>${rec}</li>`).join('')}
                        </ul>
                    </div>
                </div>
            `).join('')}
        `;
    }
    
    getIndustrySpecificRecommendations(pillarId, industryData) {
        const recommendations = {
            audience: {
                technology: ['Implement developer-focused search with code examples', 'AI-powered documentation discovery', 'Technical content personalization'],
                ecommerce: ['Advanced product recommendation engines', 'Visual search capabilities', 'Personalized shopping experiences'],
                healthcare: ['Patient portal AI assistance', 'Symptom-based content recommendations', 'Appointment scheduling automation'],
                financial: ['Risk-based content personalization', 'Compliance-aware search', 'Fraud detection integration'],
                education: ['Adaptive learning content delivery', 'Student progress-based recommendations', 'Course discovery optimization'],
                default: ['Enhanced search functionality', 'User behavior analytics', 'Personalization engines']
            },
            creator: {
                technology: ['Technical documentation automation', 'Code-to-content generation', 'Developer tutorial optimization'],
                ecommerce: ['Product description automation', 'Review-based content generation', 'Seasonal content planning'],
                healthcare: ['Medical content compliance checking', 'Patient education materials', 'Clinical content optimization'],
                financial: ['Regulatory content automation', 'Compliance documentation', 'Risk communication materials'],
                education: ['Curriculum content automation', 'Assessment generation', 'Learning objective optimization'],
                default: ['Content planning automation', 'Quality assurance workflows', 'Editorial efficiency tools']
            },
            developer: {
                technology: ['Advanced CI/CD pipelines', 'AI-powered code review', 'Performance optimization automation'],
                ecommerce: ['Inventory integration automation', 'Payment system optimization', 'Performance monitoring for peak loads'],
                healthcare: ['HIPAA compliance automation', 'Security audit tools', 'Patient data protection systems'],
                financial: ['Security compliance automation', 'Regulatory reporting systems', 'Risk monitoring tools'],
                education: ['Learning platform optimization', 'Student data protection', 'Scalability for enrollment peaks'],
                default: ['Development workflow automation', 'Code quality tools', 'Deployment optimization']
            }
        };
        
        const pillarRecs = recommendations[pillarId];
        const industryRecs = pillarRecs && pillarRecs[industryData.id];
        return industryRecs || pillarRecs.default || ['Implement industry best practices', 'Focus on automation opportunities', 'Measure and optimize performance'];
    }
    
    exportResults() {
        const overallScore = this.getOverallScore();
        const maturity = this.getMaturityLevel(overallScore);
        const industryData = this.getIndustryData();
        
        const exportData = {
            user: this.userInfo,
            assessment_scope: this.selectedScope,
            selected_pillars: this.selectedPillars,
            timestamp: new Date().toISOString(),
            overall_score: overallScore,
            maturity_level: maturity.level,
            pillar_scores: this.scores,
            industry_benchmarks: industryData.benchmarks,
            industry_comparison: {
                your_score: overallScore,
                industry_average: industryData.benchmarks.overall,
                difference: overallScore - industryData.benchmarks.overall
            },
            responses: this.responses
        };
        
        const dataStr = JSON.stringify(exportData, null, 2);
        const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
        
        const exportFileDefaultName = `ai-readiness-assessment-${this.userInfo.firstName}-${this.userInfo.lastName}-${new Date().toISOString().split('T')[0]}.json`;
        
        const linkElement = document.createElement('a');
        linkElement.setAttribute('href', dataUri);
        linkElement.setAttribute('download', exportFileDefaultName);
        linkElement.click();
    }
    
    retakeQuiz() {
        if (confirm('Are you sure you want to start over? This will clear all your current progress.')) {
            this.currentQuestionIndex = 0;
            this.responses = {};
            this.scores = { audience: 0, creator: 0, developer: 0 };
            this.userInfo = {};
            this.selectedScope = 'complete';
            this.selectedPillars = ['audience', 'creator', 'developer'];
            this.showScreen('welcome');
        }
    }
    
    showLoading() {
        const loadingOverlay = document.getElementById('loading-overlay');
        if (loadingOverlay) {
            loadingOverlay.classList.remove('hidden');
        }
    }
    
    hideLoading() {
        const loadingOverlay = document.getElementById('loading-overlay');
        if (loadingOverlay) {
            loadingOverlay.classList.add('hidden');
        }
    }
}

// Initialize the enhanced quiz when the DOM is loaded
console.log('🌟 Enhanced AI Readiness Quiz script loaded');

// Helper: update footer year
function updateFooterYear() {
    var el = document.getElementById('current-year');
    if (el) {
        el.textContent = new Date().getFullYear();
    }
}

// Multiple initialization strategies to ensure it works
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        console.log('🚀 DOM loaded, initializing enhanced quiz');
        new AIReadinessQuiz();
        updateFooterYear();
    });
} else {
    console.log('🚀 DOM already loaded, initializing enhanced quiz immediately');
    new AIReadinessQuiz();
    updateFooterYear();
}

// Fallback initialization
window.addEventListener('load', () => {
    if (!window.aiQuizInitialized) {
        console.log('🔄 Fallback initialization');
        new AIReadinessQuiz();
        window.aiQuizInitialized = true;
    }
    updateFooterYear();
});