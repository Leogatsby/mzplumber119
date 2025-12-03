import HNB from "./components/1.HNB/HNB";
import MainVideo from "./components/2.MainVideo/MainVideo";
import Services from "./components/3.Service/Services";
import Review from "./components/4.Review/Review";
import Contact from "./components/5.Contact/Contact";
import Footer from "./components/6.Footer/Footer";
import Float from "./components/7.Float/Float";


export default function App() {
  return (
    <div className="min-h-screen">

      <HNB /> {/* 1.HNB */}
      <MainVideo /> {/* 2.MainVideo */}
      <Services/> {/* 3.Services */}
      <Review/> {/* 4.Review */}
      <Contact /> {/* 5.Contact */}
      <Footer /> {/* 6.Footer */}
      <Float /> {/* 7.Float */}
    </div>
  );
}
