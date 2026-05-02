const Footer = () => {
  return (
    <footer className="border-t border-border py-8">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <img 
  src={`${import.meta.env.BASE_URL}QTutorLogo.png`} 
  alt="QTutor Logo" 
  className="mix-blend-multiply h-10 w-auto" // <-- Add mix-blend-multiply here
/>
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
