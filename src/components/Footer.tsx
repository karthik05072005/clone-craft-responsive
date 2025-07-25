const Footer = () => {
  return (
    <footer id="contact" className="py-8 bg-foreground text-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="text-2xl font-bold mb-2">
              Bacck<span className="text-accent">see</span>
            </div>
            <p className="text-background/80">
              Professional parcel return services across Canada
            </p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-background/80 mb-2">
              Ready to schedule a pickup?
            </p>
            <p className="text-background">
              Contact us to get started with hassle-free returns
            </p>
          </div>
        </div>
        
        <div className="border-t border-background/20 mt-8 pt-8 text-center">
          <p className="text-background/60">
            © 2024 Baccksee. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;