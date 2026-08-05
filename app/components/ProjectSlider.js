"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

function hostLabel(url) {
  return url.replace(/^https?:\/\//, "").replace(/\/$/, "");
}

export default function ProjectSlider({ projects = [] }) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [animKey, setAnimKey] = useState(0);
  const touchX = useRef(null);

  const total = projects.length;
  const project = projects[active];

  const goTo = useCallback(
    (index) => {
      if (!total) return;
      const next = ((index % total) + total) % total;
      setActive(next);
      setAnimKey((k) => k + 1);
    },
    [total]
  );

  const next = useCallback(() => goTo(active + 1), [active, goTo]);
  const prev = useCallback(() => goTo(active - 1), [active, goTo]);

  useEffect(() => {
    if (paused || total < 2) return undefined;
    const id = window.setInterval(() => {
      setActive((current) => {
        const n = (current + 1) % total;
        setAnimKey((k) => k + 1);
        return n;
      });
    }, 5500);
    return () => window.clearInterval(id);
  }, [paused, total]);

  if (!project) return null;

  const onTouchStart = (e) => {
    touchX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e) => {
    if (touchX.current == null) return;
    const delta = e.changedTouches[0].clientX - touchX.current;
    touchX.current = null;
    if (Math.abs(delta) < 45) return;
    if (delta < 0) next();
    else prev();
  };

  return (
    <div
      className="project-slider"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div className="project-slider-stage" key={animKey}>
        <div className="project-slider-visual">
          <div className="project-slider-glow" aria-hidden="true" />
          <div className="project-slider-frame">
            <div className="browser-chrome" aria-hidden="true">
              <span />
              <span />
              <span />
              <em>{hostLabel(project.url || project.title)}</em>
            </div>
            <div className="project-slider-screen">
              <img src={project.image} alt={project.title} />
            </div>
          </div>
          <div className="project-slider-badge">
            <strong>{String(active + 1).padStart(2, "0")}</strong>
            <span>/ {String(total).padStart(2, "0")}</span>
          </div>
        </div>

        <div className="project-slider-copy">
          <span className="project-tag">{project.tag}</span>
          <h3>
            <Link href={`/projects/${project.slug}`}>{project.title}</Link>
          </h3>
          <p>{project.description}</p>
          {project.highlights?.length ? (
            <ul className="project-chips">
              {project.highlights.slice(0, 4).map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          ) : null}
          <div className="project-actions">
            <Link href={`/projects/${project.slug}`} className="theme-btn">
              Case Study <i className="far fa-angle-right" />
            </Link>
            {project.url ? (
              <a href={project.url} target="_blank" rel="noreferrer" className="btn-ghost">
                Live site
              </a>
            ) : null}
          </div>
        </div>
      </div>

      <div className="project-slider-controls">
        <button type="button" className="project-slider-arrow" onClick={prev} aria-label="Previous project">
          <i className="far fa-angle-left" />
        </button>

        <div className="project-slider-thumbs" role="tablist" aria-label="Project slides">
          {projects.map((item, index) => (
            <button
              key={item.slug}
              type="button"
              role="tab"
              aria-selected={index === active}
              className={`project-slider-thumb${index === active ? " is-active" : ""}`}
              onClick={() => goTo(index)}
            >
              <img src={item.image} alt="" />
              <span>{item.title}</span>
            </button>
          ))}
        </div>

        <button type="button" className="project-slider-arrow" onClick={next} aria-label="Next project">
          <i className="far fa-angle-right" />
        </button>
      </div>

      <div className="project-slider-progress" aria-hidden="true">
        <span
          key={`bar-${animKey}-${paused}`}
          className={`project-slider-bar${paused ? " is-paused" : ""}`}
        />
      </div>
    </div>
  );
}
