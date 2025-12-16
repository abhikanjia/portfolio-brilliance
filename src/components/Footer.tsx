import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-background">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Abhi Kanjia. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
