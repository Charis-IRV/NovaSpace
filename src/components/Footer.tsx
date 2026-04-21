import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="section-padding py-12 border-t border-border">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <img src={logo} alt="NovaSpace" className="h-8 w-auto" />
      <p className="text-sm text-muted-foreground">
        © {new Date().getFullYear()} NovaSpace. Tous droits réservés.
      </p>
    </div>
  </footer>
);

export default Footer;
