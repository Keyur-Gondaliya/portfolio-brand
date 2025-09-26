export default function Home() {
  return (
    <>
      <div className="container">
        <header>
          <h1>Keyur Gondaliya</h1>
          <div className="tagline">AI Engineer | Production RAG Systems | LangChain Expert</div>
          <div className="contact-info">
            Building the future with AI, one system at a time
          </div>
        </header>

        <nav>
          <a href="#about">About</a>
          <a href="#ai-expertise">AI Expertise</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <a href="#faq">FAQ</a>
          <a href="#contact">Contact</a>
        </nav>

        <section id="about" className="section">
          <h2>About</h2>
          <div className="highlight-box">
            "The best problems are the ones everyone thinks are impossible until someone builds the solution."
          </div>
          <p>I am a curious engineer who believes technology should solve real problems, not create complexity. With extensive experience in both business operations and cutting-edge AI development, I build systems that actually work in production.</p>

          <p>My approach is simple: understand the problem deeply, build the solution efficiently, and measure the impact quantifiably. Whether it's implementing RAG systems for enterprise knowledge management or building multi-agent workflows for complex automation, I focus on delivering measurable business value.</p>

          <div className="stats">
            <div className="stat-item">
              <span className="stat-number">50+</span>
              <span className="stat-label">AI Projects Delivered</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">99.9%</span>
              <span className="stat-label">Production Uptime</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">10+</span>
              <span className="stat-label">Industries Served</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">30%</span>
              <span className="stat-label">Avg. Performance Improvement</span>
            </div>
          </div>
        </section>

        <section id="ai-expertise" className="section">
          <h2>AI Expertise</h2>

          <div className="vintage-border">
            <h3>Production-Ready RAG Systems</h3>
            <p>I specialize in building RAG (Retrieval-Augmented Generation) systems that scale to enterprise requirements. My implementations include advanced techniques like self-RAG, corrective RAG, and multi-stage retrieval for maximum accuracy and reliability.</p>
            <p><strong>Key Capabilities:</strong> Document processing pipelines, vector database optimization, production monitoring, multi-modal RAG, and enterprise security compliance.</p>
          </div>

          <div className="vintage-border">
            <h3>LangChain & LangGraph Agent Development</h3>
            <p>Expert in building intelligent agent workflows using LangChain and LangGraph frameworks. I create multi-agent systems that handle complex business processes with autonomous decision-making capabilities.</p>
            <p><strong>Specializations:</strong> Agent orchestration, tool integration, workflow automation, conversation management, and production deployment strategies.</p>
          </div>

          <div className="vintage-border">
            <h3>Meta AI & Social Commerce Integration</h3>
            <p>Deep understanding of Meta's AI-powered advertising ecosystem, including Advantage+ campaigns, Conversions API, and WhatsApp Business automation. I help businesses leverage AI for social commerce optimization.</p>
            <p><strong>Focus Areas:</strong> AI-driven ad optimization, privacy-compliant tracking, conversational commerce, and automated customer engagement.</p>
          </div>
        </section>

        <section id="projects" className="section">
          <h2>Recent AI Projects</h2>

          <div className="project">
            <div className="project-title">Enterprise RAG Knowledge Hub</div>
            <div className="project-tags">AI • Enterprise • Knowledge Management</div>
            <div className="project-description">
              Built a production-ready RAG system for a Fortune 500 company to handle 10,000+ daily queries across technical documentation. Implemented multi-stage retrieval with 95% accuracy and sub-200ms response times. System processes documents in real-time and provides contextual answers with source attribution.
            </div>
            <div className="project-tech">Technologies: LangChain, ChromaDB, FastAPI, Docker, AWS ECS</div>
          </div>

          <div className="project">
            <div className="project-title">Multi-Agent Sales Assistant</div>
            <div className="project-tags">AI Agents • LangGraph • Sales Automation</div>
            <div className="project-description">
              Developed intelligent sales agent workflow using LangGraph that qualifies leads, schedules meetings, and provides personalized product recommendations. Increased sales team efficiency by 40% and reduced manual follow-up tasks by 60%.
            </div>
            <div className="project-tech">Technologies: LangGraph, OpenAI GPT-4, CRM Integration, Python</div>
          </div>

          <div className="project">
            <div className="project-title">AI-Powered Video Generation Pipeline</div>
            <div className="project-tags">Computer Vision • Video AI • Content Creation</div>
            <div className="project-description">
              Created automated video generation system for marketing content that converts text descriptions into professional videos. Handles dynamic scene composition, voiceover generation, and brand consistency. Reduced video production time from weeks to hours.
            </div>
            <div className="project-tech">Technologies: Stable Diffusion, FFmpeg, OpenAI TTS, Python, AWS Lambda</div>
          </div>

          <div className="project">
            <div className="project-title">Conversational Data Pipeline</div>
            <div className="project-tags">Data Engineering • AI • Real-time Processing</div>
            <div className="project-description">
              Built intelligent data transformation pipeline that converts unstructured business data into actionable insights through natural language interfaces. Supports text-to-audio, video summaries, and automated report generation. Processes 100TB+ monthly data volume.
            </div>
            <div className="project-tech">Technologies: Apache Kafka, Pandas, LangChain, Redis, PostgreSQL</div>
          </div>

          <div className="project">
            <div className="project-title">Meta Ads AI Optimizer</div>
            <div className="project-tags">Meta AI • Ad Optimization • E-commerce</div>
            <div className="project-description">
              Developed AI-driven Meta advertising optimization platform that automatically adjusts campaigns based on performance data. Integrates with Meta's Conversions API for privacy-compliant tracking. Achieved 35% improvement in ROAS across client campaigns.
            </div>
            <div className="project-tech">Technologies: Meta Graph API, Machine Learning, React, Node.js, PostgreSQL</div>
          </div>

          <h3>Previous Full-Stack Projects</h3>
          <p style={{fontSize: '13px', color: '#666', marginBottom: '15px'}}>Selected highlights from 20+ production applications across multiple industries:</p>

          <div className="project">
            <div className="project-title">RealEstatePro360</div>
            <div className="project-tags">B2B SaaS • CAD Integration • Real Estate</div>
            <div className="project-description">
              B2B SaaS platform enabling dynamic PDF layouts and forms with CAD integration and 2D/3D visualizations using SVG. Serves enterprise real estate clients with complex workflow requirements.
            </div>
            <div className="project-tech">React, Node.js, Express, MongoDB, Three.js, AWS, PDF Generation</div>
          </div>

          <div className="project">
            <div className="project-title">CrossPay</div>
            <div className="project-tags">Fintech • Blockchain • Cross-border Payments</div>
            <div className="project-description">
              Cross-border secure payment app blending blockchain efficiency with traditional gateways. Enables swift, secure, and low-cost money transfers globally with seamless user experience.
            </div>
            <div className="project-tech">iOS, Node.js, Express, MongoDB, AWS, Sila Money API, Flutterwave</div>
          </div>

          <div className="project">
            <div className="project-title">CodeSandBox-lite</div>
            <div className="project-tags">DevTools • Cloud Computing • Docker</div>
            <div className="project-description">
              Cloud-based sandbox environment for various frameworks and languages powered by Docker containers. Provides isolated development environments with real-time collaboration features.
            </div>
            <div className="project-tech">Next.js, Node.js, Express, MongoDB, TypeScript, AWS, Docker</div>
          </div>
        </section>

        <section id="skills" className="section">
          <h2>Technical Skills</h2>

          <div className="skills-grid">
            <div className="skill-category">
              <h4>AI & Machine Learning</h4>
              <ul className="skill-list">
                <li>RAG Systems</li>
                <li>LangChain / LangGraph</li>
                <li>OpenAI GPT-4 / Claude</li>
                <li>Vector Databases</li>
                <li>AI Agents</li>
                <li>Prompt Engineering</li>
                <li>Model Fine-tuning</li>
                <li>Production AI Deployment</li>
              </ul>
            </div>

            <div className="skill-category">
              <h4>Full-Stack Development</h4>
              <ul className="skill-list">
                <li>React / Next.js</li>
                <li>Node.js / Express</li>
                <li>TypeScript / JavaScript</li>
                <li>Python / FastAPI</li>
                <li>MongoDB / PostgreSQL</li>
                <li>GraphQL / REST APIs</li>
                <li>React Native</li>
                <li>Three.js</li>
              </ul>
            </div>

            <div className="skill-category">
              <h4>Cloud & DevOps</h4>
              <ul className="skill-list">
                <li>AWS (EC2, Lambda, ECS)</li>
                <li>Docker / Kubernetes</li>
                <li>CI/CD Pipelines</li>
                <li>Redis / Caching</li>
                <li>Kafka / Event Streaming</li>
                <li>Monitoring & Logging</li>
                <li>Serverless Architecture</li>
                <li>Performance Optimization</li>
              </ul>
            </div>

            <div className="skill-category">
              <h4>Business & Marketing</h4>
              <ul className="skill-list">
                <li>Meta Ads Management</li>
                <li>Conversions API</li>
                <li>WhatsApp Business API</li>
                <li>E-commerce Integration</li>
                <li>Payment Gateways</li>
                <li>Client Handling</li>
                <li>Project Management</li>
                <li>Problem Solving</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="faq" className="section">
          <h2>Frequently Asked Questions</h2>

          <div className="faq-item">
            <div className="faq-question">What is RAG and how can it help my business?</div>
            <div className="faq-answer">RAG (Retrieval-Augmented Generation) combines AI with your business data to provide accurate, contextual responses. It can improve customer service, automate documentation, and enhance decision-making by 30-50%. I build RAG systems that work with your existing data sources and scale to enterprise requirements.</div>
          </div>

          <div className="faq-item">
            <div className="faq-question">How do you ensure AI systems work in production?</div>
            <div className="faq-answer">I implement production-ready AI with proper error handling, monitoring, scaling strategies, and performance optimization. My systems handle enterprise-level traffic with 99.9% uptime. I use containerization, load balancing, and comprehensive testing to ensure reliability.</div>
          </div>

          <div className="faq-item">
            <div className="faq-question">What industries do you work with for AI solutions?</div>
            <div className="faq-answer">I've delivered AI solutions for real estate, fintech, e-commerce, restaurant management, healthcare, and industrial sectors. Each solution is tailored to specific industry needs and compliance requirements. My cross-industry experience helps identify unique opportunities for AI implementation.</div>
          </div>

          <div className="faq-item">
            <div className="faq-question">Can you integrate AI with existing business systems?</div>
            <div className="faq-answer">Yes, I specialize in AI integration that works with your current tech stack. Whether it's CRM systems, databases, APIs, or legacy applications, I build bridges that let AI enhance your existing workflows without disruption.</div>
          </div>

          <div className="faq-item">
            <div className="faq-question">How do you handle data privacy and security in AI projects?</div>
            <div className="faq-answer">Data security is paramount in all my AI implementations. I use encryption, secure data pipelines, privacy-compliant processing, and enterprise-grade security practices. All systems are designed to meet GDPR, CCPA, and industry-specific compliance requirements.</div>
          </div>

          <div className="faq-item">
            <div className="faq-question">What's the difference between LangChain and LangGraph for business applications?</div>
            <div className="faq-answer">LangChain is excellent for linear AI workflows and rapid prototyping, while LangGraph handles complex, multi-step business processes with conditional logic and parallel execution. I choose the right framework based on your specific use case and scalability requirements.</div>
          </div>

          <div className="faq-item">
            <div className="faq-question">How can AI improve Meta advertising performance?</div>
            <div className="faq-answer">AI can optimize Meta ads through automated bid management, audience targeting, creative testing, and conversion prediction. I build systems that integrate with Meta's Conversions API for privacy-compliant tracking and typically achieve 20-35% improvement in ROAS.</div>
          </div>

          <div className="faq-item">
            <div className="faq-question">What makes your approach to AI development different?</div>
            <div className="faq-answer">I focus on business outcomes first, technology second. Every AI solution I build is designed to solve specific problems and deliver measurable results. I combine deep technical expertise with business understanding to create systems that actually work in the real world.</div>
          </div>
        </section>

        <section id="contact" className="section">
          <h2>Contact</h2>
          <div className="highlight-box">
            Ready to solve complex problems with AI? Let's build something remarkable together.
          </div>

          <p>I work with businesses that want to leverage AI for competitive advantage. Whether you need a production-ready RAG system, intelligent automation, or custom AI integration, I can help you navigate from concept to deployment.</p>

          <p><strong>Best fit for:</strong> Enterprise AI implementations, custom RAG systems, agent workflows, social commerce optimization, and complex technical challenges that require both AI expertise and business acumen.</p>

          <div style={{marginTop: '20px', fontSize: '13px'}}>
            <strong>GitHub:</strong> github.com/Keyur-Gondaliya<br/>
            <strong>Technical Blog:</strong> gkcodes.wordpress.com<br/>
            <strong>Availability:</strong> Currently accepting new projects
          </div>
        </section>

        <footer>
          <p>KEYUR GONDALIYA &copy; 2025 | AI ENGINEER & FULL-STACK DEVELOPER</p>
          <p>Building the future, one system at a time</p>
        </footer>
      </div>
    </>
  );
}