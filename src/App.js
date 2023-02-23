import { Footer, Main, Navbar } from "laylouts";
import Router from "routes";
import 'assets/scss/style.scss';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main>
        <Router />
      </Main>
      <Footer />
    </div>
  );
}

export default App;
