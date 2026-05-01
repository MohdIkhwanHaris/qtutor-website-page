const Footer = () => {
  return (
    <footer className="border-t border-border py-8">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xl font-heading font-extrabold text-gradient">QTutor</span>
            <span className="text-sm text-muted-foreground">Math Excellence Center</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} QTutor. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
