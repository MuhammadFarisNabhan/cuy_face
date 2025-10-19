import Camera from "./components/Camera";
import Footer from "./components/Footer";
import Navheader from "./components/Navheader";

export default function Home() {
  return (
    <main className="bg-gray-950 min-h-screen py-8">
      <div className="max-w-4xl space-y-8 px-8 mx-auto">
        <Navheader />
        <Camera />
        <Footer />
      </div>
    </main>
  );
}
