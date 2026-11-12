import { profile, projects, skills } from "./data.js";

function Project({ p }) {
  return (
    <article className="proj">
      <div className="shot">
        <img src={p.img} alt={p.alt} loading="lazy" />
      </div>
      <div>
        <div className="tag">{p.tag}</div>
        <h3>{p.title}</h3>
        <p>{p.text}</p>
        <div className="tools">
          {p.tools && <>Tools: {p.tools}</>}
          {p.link && (
            <>
              Live site:{" "}
              <a href={p.link.href} target="_blank" rel="noopener noreferrer">
                {p.link.label}
              </a>
            </>
          )}
        </div>
      </div>
    </article>
  );
}

export default function App() {
  return (
    <>
      <nav>
        <div className="wrap">
          <b>M. F. Orca</b>
          <div>
            <a href="#work">Work</a>
            <a href="#skills">Skills</a>
            <a href="#contact" className="keep">Contact</a>
          </div>
        </div>
      </nav>

      <header>
        <div className="wrap">
          <div>
            <h1>{profile.name}</h1>
            <p className="role">{profile.role}</p>
            <p className="lead">{profile.about}</p>
            <div className="btns">
              <a className="btn" href="#work">View my work</a>
              <a className="btn o" href="#contact">Get in touch</a>
            </div>
          </div>
          <dl className="facts">
            {profile.facts.map(([k, v]) => (
              <div key={k}>
                <dt>{k}</dt>
                <dd>{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </header>

      <section id="work">
        <div className="wrap">
          <h2>Selected work</h2>
          <p className="sub">Seven projects from coursework, group productions, and personal practice.</p>
          {projects.map((p) => (
            <Project key={p.title} p={p} />
          ))}
        </div>
      </section>

      <section id="skills">
        <div className="wrap">
          <h2>Skills</h2>
          <p className="sub">What I use to design and build.</p>
          <div className="skills">
            {skills.map((s) => (
              <div key={s.title}>
                <h3>{s.title}</h3>
                <ul>
                  {s.items.map((i) => (
                    <li key={i}>{i}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="wrap">
          <h2>Contact</h2>
          <p className="sub">Open to internships and collaborations.</p>
        </div>
      </section>

      <footer>
        <div className="wrap">
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          
        </div>
      </footer>
    </>
  );
}
