import { Route, Switch } from "wouter";
import { Home } from "./pages/Home";
import { Menu } from "./pages/Menu";
import { Gallery } from "./pages/Gallery";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { MapPin, Coffee, ArrowRight } from "lucide-react";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar currentPage="/" />
      {children}
      <Footer />
    </>
  );
}

function NotFound() {
  return (
    <div className="max-w-2xl mx-auto px-4 md:px-8 py-24 text-center">
      <div className="w-20 h-20 bg-brand-green/10 rounded-2xl flex items-center justify-center mx-auto mb-8">
        <Coffee className="w-10 h-10 text-brand-green" aria-hidden="true" />
      </div>
      <h1 className="font-display text-display-2xl font-bold text-brand-brown mb-4">
        Even The Cow Can't Find This Page
      </h1>
      <p className="font-body text-brand-brown/60 text-lg mb-10 max-w-md mx-auto">
        But she knows where to find great coffee, ice cream, and Montana souvenirs.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a href="/" className="btn-primary inline-flex">
          <ArrowRight className="w-4 h-4 mr-2" />
          Go Home
        </a>
        <a href="/contact" className="btn-outline border-brand-brown/20 text-brand-brown">
          <MapPin className="w-4 h-4 mr-2" />
          Get Directions
        </a>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-brand-cream">
      <Switch>
        <Route path="/">
          <Layout>
            <Home />
          </Layout>
        </Route>
        <Route path="/menu">
          <Layout>
            <Menu />
          </Layout>
        </Route>
        <Route path="/gallery">
          <Layout>
            <Gallery />
          </Layout>
        </Route>
        <Route path="/about">
          <Layout>
            <About />
          </Layout>
        </Route>
        <Route path="/contact">
          <Layout>
            <Contact />
          </Layout>
        </Route>
        <Route>
          <Layout>
            <NotFound />
          </Layout>
        </Route>
      </Switch>
    </div>
  );
}
