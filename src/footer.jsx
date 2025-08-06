import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="py-8 bg-background text-center border-t border-muted">
      <div className="flex justify-center gap-6 mb-4">
        <a href="#" className="gradient-button p-3 rounded-full"><FaGithub /></a>
        <a href="#" className="gradient-button p-3 rounded-full"><FaLinkedin /></a>
        <a href="#" className="gradient-button p-3 rounded-full"><FaYoutube /></a>
      </div>
      <p className="text-muted-foreground text-sm">
        © {new Date().getFullYear()} Nishant Kumar. All rights reserved.
      </p>
    </footer>
  );
}