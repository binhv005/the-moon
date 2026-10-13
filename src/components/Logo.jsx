import logo from '../assets/logo.png';

// Logo chính thức của The Moon Muine Homestay (từ thư mục khách cung cấp).
export default function Logo({ height = 44 }) {
  return <img src={logo} alt="The Moon Muine Homestay" width={Math.round((height * 900) / 522)} height={height} className="logo" />;
}
