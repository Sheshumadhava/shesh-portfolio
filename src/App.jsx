import React, { useEffect, useState } from 'react'
import {
  ArrowDownRight,
  ArrowUpRight,
  Mail,
  Menu,
  X,
  Code2,
  Database,
  BrainCircuit,
  ChartNoAxesCombined,
  ExternalLink,
  Terminal,
  Sparkles,
  MoveUpRight,
  Search,
  GitBranch,
} from 'lucide-react'

const githubProfile = 'https://github.com/Sheshumadhava'
const linkedinProfile = 'https://www.linkedin.com/in/sheshumadhava-pittala-997580320'
const contactEmail = 'Sheshumadhavapittala2405@gmail.com'

const featuredProjects = [
  {
    number: '01',
    category: 'AI · DATA ANALYTICS',
    title: 'Natural Language Analytics Agent',
    subtitle: 'Context-aware SQL generation & data visualization',
    description:
      'A major project in development exploring how people can ask data questions in plain language and receive useful, visual answers.',
    challenge:
      'Requests such as “show me the top customers” can be ambiguous without a ranking metric or other criteria.',
    approach:
      'The proposed workflow detects ambiguity, asks for clarification, validates generated SQL, retrieves results from PostgreSQL, and prepares charts.',
    tags: ['React', 'Node.js / Express', 'PostgreSQL', 'n8n', 'Recharts'],
    visual: 'visual-ai',
    status: 'Major project · In development',
    repo: null,
    demo: null,
    previewLabel: 'WORKFLOW CONCEPT · NOT A LIVE APP SCREENSHOT',
  },
  {
    number: '02',
    category: 'SEARCH · INFORMATION RETRIEVAL',
    title: 'Mini Google — Smart File Search',
    subtitle: 'Relevant results, faster discovery',
    description:
      'A compact search-engine project focused on improving file discovery with information-retrieval techniques and autocomplete.',
    challenge:
      'Finding a useful file among many documents can be slow when search relies only on exact keyword matching.',
    approach:
      'My contributions to this group project included additional search modes, TF-IDF ranking, Trie autocomplete, interface improvements, and debugging. The repository also documents phrase search, fuzzy matching, highlighted results, and execution-time display.',
    tags: ['JavaScript', 'Inverted Index', 'TF-IDF', 'Trie'],
    visual: 'visual-search',
    status: 'Public repository',
    repo: 'https://github.com/Sheshumadhava/Mini-Google',
    demo: null,
    previewLabel: 'INTERFACE CONCEPT · OPEN REPOSITORY FOR SOURCE',
  },
  {
    number: '03',
    category: 'DATA ANALYTICS',
    title: 'Netflix Content Analysis',
    subtitle: 'Exploring patterns in a streaming catalogue',
    description:
      'An analytics project focused on exploring a Netflix titles dataset and organizing catalogue patterns into useful observations.',
    challenge:
      'A large list of titles is difficult to compare at a glance; structured analysis can help reveal differences across available fields such as type and release information.',
    approach:
      'Use data analysis queries and clear summaries to explore the catalogue. Add exact findings, query examples, and a real screenshot once the project version and outputs are confirmed.',
    tags: ['SQL', 'Data Analysis', 'Data Visualization'],
    visual: 'visual-netflix',
    status: 'Analytics project',
    repo: null,
    demo: null,
    previewLabel: 'ILLUSTRATIVE PREVIEW · NOT REAL DATA OR FINDINGS',
  },
  {
    number: '04',
    category: 'DATA VISUALIZATION · TABLEAU',
    title: 'Sales Dashboard',
    subtitle: 'KPI overview & geographic exploration',
    description:
      'A Tableau dashboard built while practicing data visualization with a sales dataset, using KPI summaries and a map to make the information easier to explore.',
    challenge:
      'A raw sales spreadsheet makes it harder to scan summary metrics and spot geographic patterns quickly.',
    approach:
      'Organizes key KPI views alongside a map to provide a more scannable snapshot of sales data. Confirm the dataset and findings before publishing a final case study.',
    tags: ['Tableau', 'KPI Design', 'Geographic Visualization'],
    visual: 'visual-dashboard',
    status: 'Dashboard work sample',
    repo: null,
    demo: null,
    previewLabel: 'ILLUSTRATIVE DASHBOARD PREVIEW · NOT SOURCE DATA',
  },
]

const additionalProjects = [
  {
    number: '05',
    category: 'WEB DEVELOPMENT',
    title: 'Django Word Counter',
    description:
      'A Django web application that accepts user text, counts words, and presents processed results on a separate page.',
    tags: ['Python', 'Django', 'HTML', 'CSS'],
    visual: 'visual-code',
    status: 'Live demo',
    repo: 'https://github.com/Sheshumadhava/django-word-counter',
    demo: 'https://sheshumadhavapittala.pythonanywhere.com/',
  },
  {
    number: '06',
    category: 'NLP · TEXT SUMMARIZATION',
    title: 'AI Text Summarizer',
    description:
      'A Python NLP project that condenses longer text into concise sentences using the Sumy library and extractive summarization techniques.',
    tags: ['Python', 'NLP', 'Sumy', 'NLTK'],
    visual: 'visual-nlp',
    status: 'Public repository',
    repo: 'https://github.com/Sheshumadhava/ai-text-summarizer',
    demo: null,
  },
]

const skillGroups = [
  {
    icon: Code2,
    number: '01',
    title: 'Languages',
    items: ['Java', 'Python', 'C', 'JavaScript'],
  },
  {
    icon: Terminal,
    number: '02',
    title: 'Web Development',
    items: ['React', 'Node.js / Express', 'Django', 'HTML & CSS', 'Tailwind CSS'],
  },
  {
    icon: Database,
    number: '03',
    title: 'Databases',
    items: ['SQL', 'PostgreSQL', 'MySQL', 'SQLite'],
  },
  {
    icon: BrainCircuit,
    number: '04',
    title: 'Data & AI',
    items: ['Tableau', 'Excel', 'TF-IDF', 'NLP', 'Text-to-SQL'],
  },
]

function ProjectPreview({ project }) {
  return (
    <div className={`project-visual ${project.visual}`} aria-label={`Illustrative preview for ${project.title}`}>
      <span className="project-index">{project.number} / PROJECT</span>

      {project.visual === 'visual-ai' && (
        <div className="ai-visual-content">
          <div className="flow-node"><span className="node-step">01</span><strong>USER QUESTION</strong><small>Natural language</small></div>
          <div className="flow-connector"><span /></div>
          <div className="flow-node active-node"><span className="node-step">02</span><strong>CLARIFY + VALIDATE</strong><small>Context-aware SQL</small></div>
          <div className="flow-connector"><span /></div>
          <div className="flow-node"><span className="node-step">03</span><strong>INSIGHTS</strong><small>Results + charts</small></div>
        </div>
      )}

      {project.visual === 'visual-search' && (
        <div className="search-visual-content">
          <div className="fake-search"><Search size={13} /><span>Search your files...</span><b>↵</b></div>
          <div className="search-result"><i>PDF</i><span>data_structures.pdf<small>Matched document preview</small></span><b>↗</b></div>
          <div className="search-result"><i>TXT</i><span>project_notes.txt<small>Matched document preview</small></span><b>↗</b></div>
          <div className="search-result"><i>DOC</i><span>research_notes.docx<small>Matched document preview</small></span><b>↗</b></div>
        </div>
      )}

      {project.visual === 'visual-netflix' && (
        <div className="netflix-visual">
          <div className="netflix-visual-heading"><span>CATALOGUE EXPLORER</span><small>ANALYSIS CONCEPT</small></div>
          <div className="netflix-summary-row">
            <div><small>CONTENT TYPE</small><b>Films / Series</b></div>
            <div><small>FIELDS</small><b>Release · Genre</b></div>
          </div>
          <div className="netflix-chart-label">CATALOGUE PATTERNS <span>ILLUSTRATIVE</span></div>
          <div className="netflix-bars" aria-hidden="true">{[42, 68, 49, 80, 61, 91, 55, 73, 46, 65].map((v, i) => <i key={i} style={{ height: `${v}%` }} />)}</div>
          <div className="netflix-chart-footer"><span>CONTENT MIX</span><span>RELEASE PATTERNS</span></div>
        </div>
      )}

      {project.visual === 'visual-dashboard' && (
        <div className="dashboard-visual">
          <div className="dash-head">SALES / OVERVIEW <span>TABLEAU WORK SAMPLE</span></div>
          <div className="dash-kpis">
            <div><small>SALES</small><b>Summary</b><span>Key metric</span></div>
            <div><small>PROFIT</small><b>Summary</b><span>Key metric</span></div>
            <div><small>ORDERS</small><b>Summary</b><span>Key metric</span></div>
          </div>
          <div className="dash-lower">
            <div className="dash-graph" aria-hidden="true">{[27, 42, 35, 58, 47, 66, 55, 74, 61, 82, 70, 91].map((v, i) => <i key={i} style={{ height: `${v}%` }} />)}</div>
            <div className="dash-map" aria-hidden="true"><span /><span /><span /><span /><span /></div>
          </div>
        </div>
      )}

      {project.visual === 'visual-code' && (
        <div className="code-visual">
          <div className="code-top"><span>word_counter.py</span><span>PYTHON</span></div>
          <p><i>01</i> <b>def</b> count_words(text):</p>
          <p><i>02</i> &nbsp; words = text.split()</p>
          <p><i>03</i> &nbsp; <b>return</b> len(words)</p>
          <div className="code-output"><span>FUNCTION</span><b>Text → word count</b></div>
        </div>
      )}

      {project.visual === 'visual-nlp' && (
        <div className="nlp-visual">
          <div className="nlp-title"><Sparkles size={16} /><span>TEXT SUMMARIZATION</span></div>
          <div className="nlp-line long" /><div className="nlp-line" /><div className="nlp-line medium" />
          <div className="nlp-divider">CONDENSED SUMMARY <ArrowDownRight size={14} /></div>
          <div className="nlp-line medium bright" /><div className="nlp-line short bright" />
        </div>
      )}

      <span className="preview-caption">{project.previewLabel || 'PROJECT PREVIEW'}</span>
    </div>
  )
}

function ProjectLinks({ project }) {
  return (
    <div className="case-links">
      {project.repo ? (
        <a className="case-link-primary" href={project.repo} target="_blank" rel="noreferrer">
          View repository <ExternalLink size={14} />
        </a>
      ) : (
        <span className="case-link-pending"><GitBranch size={14} /> Repository link not published yet</span>
      )}
      {project.demo && (
        <a className="case-link-secondary" href={project.demo} target="_blank" rel="noreferrer">
          Live demo <ArrowUpRight size={14} />
        </a>
      )}
    </div>
  )
}

function ProjectCaseStudy({ project }) {
  return (
    <article className="case-card reveal-on-scroll" id={`project-${project.number}`}>
      <ProjectPreview project={project} />
      <div className="case-body">
        <div className="case-topline"><span>{project.category}</span><span className="case-number">{project.number} / 04</span></div>
        <h3>{project.title}</h3>
        <p className="case-subtitle">{project.subtitle}</p>
        <p className="case-description">{project.description}</p>
        <div className="case-detail-grid">
          <div><span className="detail-label">THE PROBLEM</span><p>{project.challenge}</p></div>
          <div><span className="detail-label">APPROACH</span><p>{project.approach}</p></div>
        </div>
        <div className="case-tech-heading"><span className="detail-label">TECH STACK</span><span className="project-status"><span className="status-dot" />{project.status}</span></div>
        <div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
        <ProjectLinks project={project} />
      </div>
    </article>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  useEffect(() => {
    const elements = document.querySelectorAll('.reveal-on-scroll')
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduceMotion || !('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('is-visible'))
      return undefined
    }

    document.body.classList.add('has-scroll-reveal')
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.12, rootMargin: '0px 0px -35px 0px' })

    elements.forEach((element) => observer.observe(element))
    return () => {
      observer.disconnect()
      document.body.classList.remove('has-scroll-reveal')
    }
  }, [])

  return (
    <div className="min-h-screen overflow-hidden bg-[#0b0c0e] text-[#f2f1ec]">
      <div className="grain" aria-hidden="true" />
      <header className="site-header">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Shesh home">
          <span className="brand-mark">S<span>M.</span></span>
          <span className="brand-name">SHESHUMADHAVA<br /><small>DEVELOPER PORTFOLIO</small></span>
        </a>
        <button className="mobile-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={menuOpen}>
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        <nav className={menuOpen ? 'nav-links nav-open' : 'nav-links'} aria-label="Main navigation">
          <a href="#work" onClick={closeMenu}>Work <span>01</span></a>
          <a href="#about" onClick={closeMenu}>About <span>02</span></a>
          <a href="#skills" onClick={closeMenu}>Skills <span>03</span></a>
          <a className="nav-contact" href="#contact" onClick={closeMenu}>Let's talk <ArrowUpRight size={15} /></a>
        </nav>
      </header>

      <main>
        <section id="home" className="hero section-wrap">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot" /> OPEN TO INTERNSHIPS & OPPORTUNITIES</div>
            <h1>Building useful<br />things with <span className="accent-word">code<span className="period">.</span></span></h1>
            <p className="hero-subtitle">Hey, I'm <strong>Sheshumadhava Pittala</strong> — a Computer Science student exploring the space between software engineering, data analytics, and AI.</p>
            <div className="hero-actions">
              <a className="button-primary" href="#work">Explore my work <ArrowDownRight size={17} /></a>
              <a className="button-quiet" href={githubProfile} target="_blank" rel="noreferrer"><Code2 size={17} /> GitHub profile <ArrowUpRight size={14} /></a>
            </div>
            <div className="hero-meta">
              <div><span className="meta-label">BASED IN</span><span>Hyderabad, India</span></div>
              <div><span className="meta-label">CURRENTLY</span><span>B.Tech CSE · Expected Graduation 2027</span></div>
            </div>
          </div>
          <div className="hero-art" aria-label="Decorative abstract code and data illustration">
            <div className="orbit orbit-one" /><div className="orbit orbit-two" /><div className="orbit orbit-three" />
            <div className="art-core"><span className="core-symbol">&lt;/&gt;</span><span className="core-label">THINK · BUILD · LEARN</span></div>
            <div className="float-card float-top"><span className="float-icon"><Code2 size={16} /></span><div><b>Software</b><small>Build with purpose</small></div><span className="tiny-live" /></div>
            <div className="float-card float-bottom"><span className="float-icon purple"><ChartNoAxesCombined size={16} /></span><div><b>Data + AI</b><small>Turn questions into insight</small></div><span className="tiny-live" /></div>
            <div className="art-coordinate">17° 26' N<br />78° 27' E</div>
            <div className="art-index">FIG. 001 / PORTFOLIO</div>
          </div>
          <a className="scroll-cue" href="#work"><span className="scroll-line" /> SCROLL TO EXPLORE <ArrowDownRight size={13} /></a>
        </section>

        <section className="ticker" aria-label="Areas of interest">
          <div className="ticker-track">
            {['SOFTWARE DEVELOPMENT', 'DATA ANALYTICS', 'ARTIFICIAL INTELLIGENCE', 'FULL-STACK WEB', 'SOFTWARE DEVELOPMENT', 'DATA ANALYTICS', 'ARTIFICIAL INTELLIGENCE', 'FULL-STACK WEB'].map((item, i) => <span key={`${item}-${i}`}>{item}<i>✳</i></span>)}
          </div>
        </section>

        <section id="work" className="section-wrap work-section section-pad">
          <div className="section-heading reveal-on-scroll">
            <div><div className="section-kicker">01 / SELECTED WORK</div><h2>Projects with a<br /><span className="muted-heading">purpose.</span></h2></div>
            <p>Case studies in progress, search, and analytics — including the problem, the approach, and the tools behind each build.</p>
          </div>
          <div className="case-study-grid">
            {featuredProjects.map((project) => <ProjectCaseStudy key={project.number} project={project} />)}
          </div>
          <div className="project-note"><span className="status-dot" /> Previews are illustrative where marked. Repository and demo links are included only where a public URL is available.</div>

          <div className="more-projects-heading reveal-on-scroll">
            <div><div className="section-kicker">MORE BUILDS</div><h3>Other things I've made.</h3></div>
            <a className="inline-link" href={githubProfile} target="_blank" rel="noreferrer">Browse GitHub profile <ArrowUpRight size={15} /></a>
          </div>
          <div className="additional-project-grid">
            {additionalProjects.map((project) => (
              <article className="additional-project-card reveal-on-scroll" key={project.number}>
                <ProjectPreview project={project} />
                <div className="additional-project-body">
                  <div className="project-category">{project.category}</div>
                  <h4>{project.title}</h4>
                  <p>{project.description}</p>
                  <div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                  <div className="additional-links">
                    <a href={project.repo} target="_blank" rel="noreferrer">Repository <ExternalLink size={13} /></a>
                    {project.demo && <a href={project.demo} target="_blank" rel="noreferrer">Live demo <ArrowUpRight size={13} /></a>}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="about" className="about-section section-pad">
          <div className="section-wrap about-layout">
            <div className="reveal-on-scroll"><div className="section-kicker">02 / A LITTLE ABOUT ME</div><h2>Curious by nature.<br /><span className="accent-word">Builder</span> by habit.</h2></div>
            <div className="about-copy reveal-on-scroll">
              <p className="about-lead">I'm a B.Tech Computer Science student at Sreenidhi Institute of Science and Technology, Hyderabad, graduating in 2027.</p>
              <p>I enjoy building practical applications, working with data, and exploring how AI can make everyday workflows smarter. I like understanding a problem first, breaking it into smaller parts, and building something that is clear, useful, and reliable.</p>
              <p>Right now, I'm growing across full-stack development, SQL and analytics, and context-aware AI systems — while preparing for opportunities where I can keep learning and contribute to a team.</p>
              <a className="inline-link" href={linkedinProfile} target="_blank" rel="noreferrer">Connect on LinkedIn <ArrowUpRight size={15} /></a>
            </div>
          </div>
          <div className="section-wrap values-row">
            <div className="reveal-on-scroll"><span>01</span><b>Build thoughtfully</b><p>Useful beats complicated.</p></div>
            <div className="reveal-on-scroll"><span>02</span><b>Stay curious</b><p>Learn, test, iterate.</p></div>
            <div className="reveal-on-scroll"><span>03</span><b>Make it clear</b><p>Good work communicates.</p></div>
          </div>
        </section>

        <section id="skills" className="section-wrap skills-section section-pad">
          <div className="section-heading reveal-on-scroll">
            <div><div className="section-kicker">03 / TOOLKIT</div><h2>Tools I use.<br /><span className="muted-heading">Ideas I explore.</span></h2></div>
            <p>A practical toolkit across programming, web development, databases, analytics, and AI-related projects.</p>
          </div>
          <div className="skills-grid">
            {skillGroups.map(({ icon: Icon, number, title, items }) => (
              <article className="skill-card reveal-on-scroll" key={title}>
                <div className="skill-card-top"><span>{number}</span><Icon size={20} /></div>
                <h3>{title}</h3>
                <div className="skill-chip-list">{items.map((item) => <span key={item}>{item}</span>)}</div>
                <div className="skill-bottom-line" />
              </article>
            ))}
          </div>
          <div className="learning-strip reveal-on-scroll"><span className="learning-icon"><Sparkles size={17} /></span><p><b>Always learning.</b> Focused on improving problem-solving, building complete projects, and making data-driven applications more useful.</p></div>
        </section>

        <section className="education-band">
          <div className="section-wrap education-content">
            <div><div className="section-kicker">EDUCATION</div><h3>B.Tech · Computer Science & Engineering</h3><p>Sreenidhi Institute of Science and Technology · Hyderabad, India</p></div>
            <div className="education-year"><span>EXPECTED GRADUATION</span><b>2027</b></div>
          </div>
        </section>

        <section id="contact" className="section-wrap contact-section section-pad">
          <div className="section-kicker">04 / HAVE A GOOD ONE IN MIND?</div>
          <h2>Let's build<br />something <span className="accent-word">meaningful.</span></h2>
          <div className="contact-bottom">
            <p>Open to software development, data analytics, and AI internship opportunities. Have a role, project, or idea in mind? I'd love to hear from you.</p>
            <a className="button-primary contact-button" href={`mailto:${contactEmail}`}>Get in touch <ArrowUpRight size={17} /></a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <a className="footer-brand" href="#home" aria-label="Back to home">S<span>M.</span></a>
        <span>DESIGNED & BUILT WITH CURIOSITY · © {new Date().getFullYear()} SHESHUMADHAVA PITTALA</span>
        <nav className="footer-text-links" aria-label="Footer links">
          <a href={githubProfile} target="_blank" rel="noreferrer">GitHub ↗</a>
          <a href={linkedinProfile} target="_blank" rel="noreferrer">LinkedIn ↗</a>
          <a href={`mailto:${contactEmail}`}>Email ↗</a>
          <a href="#home">Top ↑</a>
        </nav>
      </footer>
    </div>
  )
}

export default App
