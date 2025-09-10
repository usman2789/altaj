import Image from "next/image";
import Header from "../components/section/header";
import Footer from "../components/section/footer";

export default function Home() {
  return (
   <div>
    <Header />
    <div style={{ minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <h1>This is al taj site</h1>
    </div>
    <Footer/>
   </div>
  );
}
