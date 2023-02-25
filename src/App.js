import { Footer, Main, MobileNavbar, Navbar } from "laylouts";
import Router from "routes";
import 'assets/scss/style.scss';


function App() {
  return (
    <div className="app">
      <Navbar />
      <MobileNavbar/>
      <Main>
        <Router />
      </Main>
      <Footer />
    </div>
  );
}

export default App;
