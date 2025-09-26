export default function Home() {
  return (
    <>
      {/* Hidden structured data for AI optimization */}
      <div style={{ display: "none" }}>
        <span itemScope itemType="https://schema.org/Person">
          <span itemProp="name">Keyur Gondaliya</span>
          <span itemProp="jobTitle">AI Engineer</span>
          <span itemProp="knowsAbout">RAG Systems</span>
          <span itemProp="knowsAbout">LangChain</span>
          <span itemProp="knowsAbout">LangGraph</span>
          <span itemProp="knowsAbout">Meta AI</span>
        </span>
      </div>

      <div className="container">
        <header>
          <h1>Keyur Gondaliya</h1>
          <div className="tagline">
            AI Engineer | Production RAG Systems | LangChain Expert
          </div>
          <div className="contact-info">
            Building the future with AI, one system at a time
          </div>
        </header>

        <nav role="navigation" aria-label="Main navigation">
          <a href="#about" aria-describedby="about-section">
            About
          </a>
          <a href="#ai-expertise" aria-describedby="ai-expertise-section">
            AI Expertise
          </a>
          <a href="#projects" aria-describedby="projects-section">
            Projects
          </a>
          <a href="#skills" aria-describedby="skills-section">
            Skills
          </a>
          <a href="#faq" aria-describedby="faq-section">
            FAQ
          </a>
          <a href="#contact" aria-describedby="contact-section">
            Contact
          </a>
        </nav>

        <section id="about" className="section" aria-labelledby="about-heading">
          <h2 id="about-heading">About</h2>
          <div className="highlight-box">
            "The best problems are the ones everyone thinks are impossible until
            someone builds the solution."
          </div>
          <p>
            I am a curious engineer who believes technology should solve real
            problems, not create complexity. With extensive experience in both
            business operations and cutting-edge AI development, I build systems
            that actually work in production.
          </p>

          <p>
            My approach is simple: understand the problem deeply, build the
            solution efficiently, and measure the impact quantifiably. Whether
            it's implementing RAG systems for enterprise knowledge management or
            building multi-agent workflows for complex automation, I focus on
            delivering measurable business value.
          </p>

          <div
            className="stats"
            role="region"
            aria-label="Professional achievements"
          >
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

        <section
          id="ai-expertise"
          className="section"
          aria-labelledby="ai-expertise-heading"
        >
          <h2 id="ai-expertise-heading">AI Expertise</h2>

          <article className="vintage-border">
            <h3>Production-Ready RAG Systems</h3>
            <p>
              I specialize in building RAG (Retrieval-Augmented Generation)
              systems that scale to enterprise requirements. My implementations
              include advanced techniques like self-RAG, corrective RAG, and
              multi-stage retrieval for maximum accuracy and reliability.
            </p>
            <p>
              <strong>Key Capabilities:</strong> Document processing pipelines,
              vector database optimization, production monitoring, multi-modal
              RAG, and enterprise security compliance.
            </p>
          </article>

          <article className="vintage-border">
            <h3>LangChain & LangGraph Agent Development</h3>
            <p>
              Expert in building intelligent agent workflows using LangChain and
              LangGraph frameworks. I create multi-agent systems that handle
              complex business processes with autonomous decision-making
              capabilities.
            </p>
            <p>
              <strong>Specializations:</strong> Agent orchestration, tool
              integration, workflow automation, conversation management, and
              production deployment strategies.
            </p>
          </article>

          <article className="vintage-border">
            <h3>Meta AI & Social Commerce Integration</h3>
            <p>
              Deep understanding of Meta's AI-powered advertising ecosystem,
              including Advantage+ campaigns, Conversions API, and WhatsApp
              Business automation. I help businesses leverage AI for social
              commerce optimization.
            </p>
            <p>
              <strong>Focus Areas:</strong> AI-driven ad optimization,
              privacy-compliant tracking, conversational commerce, and automated
              customer engagement.
            </p>
          </article>
        </section>

        <section
          id="projects"
          className="section"
          aria-labelledby="projects-heading"
        >
          <h2 id="projects-heading">Recent AI Projects</h2>

          <article
            className="project"
            itemScope
            itemType="https://schema.org/CreativeWork"
          >
            <h3 className="project-title" itemProp="name">
              Enterprise RAG Knowledge Hub
            </h3>
            <div className="project-tags" itemProp="about">
              AI • Enterprise • Knowledge Management
            </div>
            <div className="project-description" itemProp="description">
              Built a production-ready RAG system for a Fortune 500 company to
              handle 10,000+ daily queries across technical documentation.
              Implemented multi-stage retrieval with 95% accuracy and sub-200ms
              response times. System processes documents in real-time and
              provides contextual answers with source attribution.
            </div>
            <div className="project-tech" itemProp="keywords">
              Technologies: LangChain, ChromaDB, FastAPI, Docker, AWS ECS
            </div>
          </article>

          <article
            className="project"
            itemScope
            itemType="https://schema.org/CreativeWork"
          >
            <h3 className="project-title" itemProp="name">
              Multi-Agent Sales Assistant
            </h3>
            <div className="project-tags" itemProp="about">
              AI Agents • LangGraph • Sales Automation
            </div>
            <div className="project-description" itemProp="description">
              Developed intelligent sales agent workflow using LangGraph that
              qualifies leads, schedules meetings, and provides personalized
              product recommendations. Increased sales team efficiency by 40%
              and reduced manual follow-up tasks by 60%.
            </div>
            <div className="project-tech" itemProp="keywords">
              Technologies: LangGraph, OpenAI GPT-4, CRM Integration, Python
            </div>
          </article>

          <article
            className="project"
            itemScope
            itemType="https://schema.org/CreativeWork"
          >
            <h3 className="project-title" itemProp="name">
              AI-Powered Video Generation Pipeline
            </h3>
            <div className="project-tags" itemProp="about">
              Computer Vision • Video AI • Content Creation
            </div>
            <div className="project-description" itemProp="description">
              Created automated video generation system for marketing content
              that converts text descriptions into professional videos. Handles
              dynamic scene composition, voiceover generation, and brand
              consistency. Reduced video production time from weeks to hours.
            </div>
            <div className="project-tech" itemProp="keywords">
              Technologies: Stable Diffusion, FFmpeg, OpenAI TTS, Python, AWS
              Lambda
            </div>
          </article>

          <article
            className="project"
            itemScope
            itemType="https://schema.org/CreativeWork"
          >
            <h3 className="project-title" itemProp="name">
              Conversational Data Pipeline
            </h3>
            <div className="project-tags" itemProp="about">
              Data Engineering • AI • Real-time Processing
            </div>
            <div className="project-description" itemProp="description">
              Built intelligent data transformation pipeline that converts
              unstructured business data into actionable insights through
              natural language interfaces. Supports text-to-audio, video
              summaries, and automated report generation. Processes 100TB+
              monthly data volume.
            </div>
            <div className="project-tech" itemProp="keywords">
              Technologies: Apache Kafka, Pandas, LangChain, Redis, PostgreSQL
            </div>
          </article>

          <article
            className="project"
            itemScope
            itemType="https://schema.org/CreativeWork"
          >
            <h3 className="project-title" itemProp="name">
              Meta Ads AI Optimizer
            </h3>
            <div className="project-tags" itemProp="about">
              Meta AI • Ad Optimization • E-commerce
            </div>
            <div className="project-description" itemProp="description">
              Developed AI-driven Meta advertising optimization platform that
              automatically adjusts campaigns based on performance data.
              Integrates with Meta's Conversions API for privacy-compliant
              tracking. Achieved 35% improvement in ROAS across client
              campaigns.
            </div>
            <div className="project-tech" itemProp="keywords">
              Technologies: Meta Graph API, Machine Learning, React, Node.js,
              PostgreSQL
            </div>
          </article>

          <h3>Previous Full-Stack Projects</h3>
          <p style={{ fontSize: "13px", color: "#666", marginBottom: "15px" }}>
            Selected highlights from 20+ production applications across multiple
            industries:
          </p>

          <article
            className="project"
            itemScope
            itemType="https://schema.org/CreativeWork"
          >
            <h4 className="project-title" itemProp="name">
              RealEstatePro360
            </h4>
            <div className="project-tags" itemProp="about">
              B2B SaaS • CAD Integration • Real Estate
            </div>
            <div className="project-description" itemProp="description">
              B2B SaaS platform enabling dynamic PDF layouts and forms with CAD
              integration and 2D/3D visualizations using SVG. Serves enterprise
              real estate clients with complex workflow requirements.
            </div>
            <div className="project-tech" itemProp="keywords">
              React, Node.js, Express, MongoDB, Three.js, AWS, PDF Generation
            </div>
          </article>

          <article
            className="project"
            itemScope
            itemType="https://schema.org/CreativeWork"
          >
            <h4 className="project-title" itemProp="name">
              CrossPay
            </h4>
            <div className="project-tags" itemProp="about">
              Fintech • Blockchain • Cross-border Payments
            </div>
            <div className="project-description" itemProp="description">
              Cross-border secure payment app blending blockchain efficiency
              with traditional gateways. Enables swift, secure, and low-cost
              money transfers globally with seamless user experience.
            </div>
            <div className="project-tech" itemProp="keywords">
              iOS, Node.js, Express, MongoDB, AWS, Sila Money API, Flutterwave
            </div>
          </article>

          <article
            className="project"
            itemScope
            itemType="https://schema.org/CreativeWork"
          >
            <h4 className="project-title" itemProp="name">
              CodeSandBox-lite
            </h4>
            <div className="project-tags" itemProp="about">
              DevTools • Cloud Computing • Docker
            </div>
            <div className="project-description" itemProp="description">
              Cloud-based sandbox environment for various frameworks and
              languages powered by Docker containers. Provides isolated
              development environments with real-time collaboration features.
            </div>
            <div className="project-tech" itemProp="keywords">
              Next.js, Node.js, Express, MongoDB, TypeScript, AWS, Docker
            </div>
          </article>
        </section>

        <section
          id="skills"
          className="section"
          aria-labelledby="skills-heading"
        >
          <h2 id="skills-heading">Technical Skills</h2>

          <div
            className="skills-grid"
            role="region"
            aria-label="Technical skills organized by category"
          >
            <article className="skill-category">
              <h4>AI & Machine Learning</h4>
              <ul className="skill-list" role="list">
                <li>RAG Systems</li>
                <li>LangChain / LangGraph</li>
                <li>OpenAI GPT-4 / Claude</li>
                <li>Vector Databases</li>
                <li>AI Agents</li>
                <li>Prompt Engineering</li>
                <li>Model Fine-tuning</li>
                <li>Production AI Deployment</li>
              </ul>
            </article>

            <article className="skill-category">
              <h4>Full-Stack Development</h4>
              <ul className="skill-list" role="list">
                <li>React / Next.js</li>
                <li>Node.js / Express</li>
                <li>TypeScript / JavaScript</li>
                <li>Python / FastAPI</li>
                <li>MongoDB / PostgreSQL</li>
                <li>GraphQL / REST APIs</li>
                <li>React Native</li>
                <li>Three.js</li>
              </ul>
            </article>

            <article className="skill-category">
              <h4>Cloud & DevOps</h4>
              <ul className="skill-list" role="list">
                <li>AWS (EC2, Lambda, ECS)</li>
                <li>Docker / Kubernetes</li>
                <li>CI/CD Pipelines</li>
                <li>Redis / Caching</li>
                <li>Kafka / Event Streaming</li>
                <li>Monitoring & Logging</li>
                <li>Serverless Architecture</li>
                <li>Performance Optimization</li>
              </ul>
            </article>

            <article className="skill-category">
              <h4>Business & Marketing</h4>
              <ul className="skill-list" role="list">
                <li>Meta Ads Management</li>
                <li>Conversions API</li>
                <li>WhatsApp Business API</li>
                <li>E-commerce Integration</li>
                <li>Payment Gateways</li>
                <li>Client Handling</li>
                <li>Project Management</li>
                <li>Problem Solving</li>
              </ul>
            </article>
          </div>
        </section>

        <section id="faq" className="section" aria-labelledby="faq-heading">
          <h2 id="faq-heading">Frequently Asked Questions</h2>

          <article
            className="faq-item"
            itemScope
            itemType="https://schema.org/Question"
          >
            <h3 className="faq-question" itemProp="name">
              What is RAG and how can it help my business?
            </h3>
            <div
              className="faq-answer"
              itemScope
              itemType="https://schema.org/Answer"
              itemProp="acceptedAnswer"
            >
              <p itemProp="text">
                RAG (Retrieval-Augmented Generation) combines AI with your
                business data to provide accurate, contextual responses. It can
                improve customer service, automate documentation, and enhance
                decision-making by 30-50%. I build RAG systems that work with
                your existing data sources and scale to enterprise requirements.
              </p>
            </div>
          </article>

          <article
            className="faq-item"
            itemScope
            itemType="https://schema.org/Question"
          >
            <h3 className="faq-question" itemProp="name">
              How do you ensure AI systems work in production?
            </h3>
            <div
              className="faq-answer"
              itemScope
              itemType="https://schema.org/Answer"
              itemProp="acceptedAnswer"
            >
              <p itemProp="text">
                I implement production-ready AI with proper error handling,
                monitoring, scaling strategies, and performance optimization. My
                systems handle enterprise-level traffic with 99.9% uptime. I use
                containerization, load balancing, and comprehensive testing to
                ensure reliability.
              </p>
            </div>
          </article>

          <article
            className="faq-item"
            itemScope
            itemType="https://schema.org/Question"
          >
            <h3 className="faq-question" itemProp="name">
              What industries do you work with for AI solutions?
            </h3>
            <div
              className="faq-answer"
              itemScope
              itemType="https://schema.org/Answer"
              itemProp="acceptedAnswer"
            >
              <p itemProp="text">
                I've delivered AI solutions for real estate, fintech,
                e-commerce, restaurant management, healthcare, and industrial
                sectors. Each solution is tailored to specific industry needs
                and compliance requirements. My cross-industry experience helps
                identify unique opportunities for AI implementation.
              </p>
            </div>
          </article>

          <article
            className="faq-item"
            itemScope
            itemType="https://schema.org/Question"
          >
            <h3 className="faq-question" itemProp="name">
              Can you integrate AI with existing business systems?
            </h3>
            <div
              className="faq-answer"
              itemScope
              itemType="https://schema.org/Answer"
              itemProp="acceptedAnswer"
            >
              <p itemProp="text">
                Yes, I specialize in AI integration that works with your current
                tech stack. Whether it's CRM systems, databases, APIs, or legacy
                applications, I build bridges that let AI enhance your existing
                workflows without disruption.
              </p>
            </div>
          </article>

          <article
            className="faq-item"
            itemScope
            itemType="https://schema.org/Question"
          >
            <h3 className="faq-question" itemProp="name">
              How do you handle data privacy and security in AI projects?
            </h3>
            <div
              className="faq-answer"
              itemScope
              itemType="https://schema.org/Answer"
              itemProp="acceptedAnswer"
            >
              <p itemProp="text">
                Data security is paramount in all my AI implementations. I use
                encryption, secure data pipelines, privacy-compliant processing,
                and enterprise-grade security practices. All systems are
                designed to meet GDPR, CCPA, and industry-specific compliance
                requirements.
              </p>
            </div>
          </article>

          <article
            className="faq-item"
            itemScope
            itemType="https://schema.org/Question"
          >
            <h3 className="faq-question" itemProp="name">
              What's the difference between LangChain and LangGraph for business
              applications?
            </h3>
            <div
              className="faq-answer"
              itemScope
              itemType="https://schema.org/Answer"
              itemProp="acceptedAnswer"
            >
              <p itemProp="text">
                LangChain is excellent for linear AI workflows and rapid
                prototyping, while LangGraph handles complex, multi-step
                business processes with conditional logic and parallel
                execution. I choose the right framework based on your specific
                use case and scalability requirements.
              </p>
            </div>
          </article>

          <article
            className="faq-item"
            itemScope
            itemType="https://schema.org/Question"
          >
            <h3 className="faq-question" itemProp="name">
              How can AI improve Meta advertising performance?
            </h3>
            <div
              className="faq-answer"
              itemScope
              itemType="https://schema.org/Answer"
              itemProp="acceptedAnswer"
            >
              <p itemProp="text">
                AI can optimize Meta ads through automated bid management,
                audience targeting, creative testing, and conversion prediction.
                I build systems that integrate with Meta's Conversions API for
                privacy-compliant tracking and typically achieve 20-35%
                improvement in ROAS.
              </p>
            </div>
          </article>

          <article
            className="faq-item"
            itemScope
            itemType="https://schema.org/Question"
          >
            <h3 className="faq-question" itemProp="name">
              What makes your approach to AI development different?
            </h3>
            <div
              className="faq-answer"
              itemScope
              itemType="https://schema.org/Answer"
              itemProp="acceptedAnswer"
            >
              <p itemProp="text">
                I focus on business outcomes first, technology second. Every AI
                solution I build is designed to solve specific problems and
                deliver measurable results. I combine deep technical expertise
                with business understanding to create systems that actually work
                in the real world.
              </p>
            </div>
          </article>
        </section>

        <section
          id="contact"
          className="section"
          aria-labelledby="contact-heading"
        >
          <h2 id="contact-heading">Contact</h2>
          <div className="highlight-box">
            Ready to solve complex problems with AI? Let's build something
            remarkable together.
          </div>

          <p>
            I work with businesses that want to leverage AI for competitive
            advantage. Whether you need a production-ready RAG system,
            intelligent automation, or custom AI integration, I can help you
            navigate from concept to deployment.
          </p>

          <p>
            <strong>Best fit for:</strong> Enterprise AI implementations, custom
            RAG systems, agent workflows, social commerce optimization, and
            complex technical challenges that require both AI expertise and
            business acumen.
          </p>

          <div style={{ marginTop: "20px", fontSize: "13px" }}>
            <strong>GitHub:</strong>{" "}
            <a
              href="https://github.com/Keyur-Gondaliya"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/Keyur-Gondaliya
            </a>
            <br />
            <strong>Technical Blog:</strong>{" "}
            <a
              href="https://gkcodes.wordpress.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              gkcodes.wordpress.com
            </a>
            <br />
            <strong>Availability:</strong> Currently accepting new projects
          </div>
        </section>

        <footer>
          <p>
            KEYUR GONDALIYA &copy; 2025 | AI ENGINEER & FULL-STACK DEVELOPER
          </p>
          <p>Building the future, one system at a time</p>
        </footer>
      </div>
    </>
  );
}
