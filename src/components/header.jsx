import HeaderVideo from '../videos/apex-hero-medium-video-legend-octane.webm'

function Header() {
  return (
    <header>
        <video src={HeaderVideo} autoPlay muted loop></video>
    </header>
  );
}

export default Header;