import { useState } from "react";
import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiSubstack } from "react-icons/si";
import { FiCopy, FiCheck } from "react-icons/fi";
import Section from "./Section";
import { profile } from "../data";

const socials = [
  [FaGithub, profile.github, "GitHub"],
  [FaLinkedin, profile.linkedin, "LinkedIn"],
  [FaXTwitter, profile.x, "X"],
  [FaMedium, profile.medium, "Medium"],
  [SiSubstack, profile.substack, "Substack"],
];

function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <Section id="contact" index="05" title="Contact">
      <p className="font-serif text-2xl sm:text-3xl leading-snug max-w-2xl">
        Have a project involving AI pipelines, APIs or cloud deployments? I'd like to hear about it.
      </p>

      <a
        href={`mailto:${profile.email}`}
        className="mt-8 inline-block font-serif text-2xl sm:text-4xl text-accent link break-all"
      >
        {profile.email}
      </a>

      <div className="mt-4">
        <button onClick={copyEmail} className="inline-flex items-center gap-2 text-sm text-muted hover:text-ink">
          {copied ? <FiCheck /> : <FiCopy />} {copied ? "Copied" : "Copy email"}
        </button>
      </div>

      <ul className="mt-12 border-t border-line">
        {socials.map(([Icon, href, label]) => (
          <li key={label}>
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between py-4 border-b border-line hover:text-accent transition-colors"
            >
              <span className="flex items-center gap-3">
                <Icon /> {label}
              </span>
              <span aria-hidden>↗</span>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export default Contact;
