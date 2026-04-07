const Footer = () => {
  return (
    <footer className="relative z-10 py-10 px-6 md:px-16 lg:px-28 border-t border-border/30">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-muted-foreground text-sm">
          © 2026 Iqra Hassan. All rights reserved.
        </p>
        <p className="text-muted-foreground text-sm">
          Built with React & Tailwind CSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;
