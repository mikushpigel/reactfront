const Footer = () => {
  return (
    <footer className="text-center border-top py-2 pt-3 bg-dark text-light">
      <span className="mx-2">
        Mika <i className="bi bi-camera-reels-fill"></i> Editing
      </span>
      <span>&copy;</span>
      <span className="mx-2">mika rotem shpigel</span>
      <span>{new Date().getFullYear()}</span>
    </footer>
  );
};

export default Footer;
