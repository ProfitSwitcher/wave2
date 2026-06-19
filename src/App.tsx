import { Route, Switch } from "wouter"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import Home from "@/pages/Home"
import Offers from "@/pages/Offers"
import YardSign from "@/pages/YardSign"
import Services from "@/pages/Services"
import ServiceHub from "@/pages/ServiceHub"
import ServiceDetail from "@/pages/ServiceDetail"
import About from "@/pages/About"
import Contact from "@/pages/Contact"
import NotFound from "@/pages/NotFound"
import Placeholder from "@/pages/Placeholder"
import Financing from "@/pages/Financing"
import MaintenancePlans from "@/pages/MaintenancePlans"
import FilterSaverClub from "@/pages/FilterSaverClub"
import Reviews from "@/pages/Reviews"
import ServiceArea from "@/pages/ServiceArea"
import Blog from "@/pages/Blog"
import Privacy from "@/pages/Privacy"
import Terms from "@/pages/Terms"
import CityHub from "@/pages/CityHub"
import CityService from "@/pages/CityService"

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/offers" component={Offers} />
          <Route path="/yard-sign-program" component={YardSign} />
          <Route path="/services" component={Services} />
          <Route path="/services/:hubSlug" component={ServiceHub} />
          <Route path="/services/:hubSlug/:serviceSlug" component={ServiceDetail} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/service-area" component={ServiceArea} />
          <Route path="/reviews" component={Reviews} />
          <Route path="/blog" component={Blog} />
          <Route path="/careers" component={Placeholder} />
          <Route path="/financing" component={Financing} />
          <Route path="/maintenance-plans" component={MaintenancePlans} />
          <Route path="/filter-saver-club" component={FilterSaverClub} />
          <Route path="/privacy" component={Privacy} />
          <Route path="/terms" component={Terms} />
          <Route path="/sitemap" component={Placeholder} />
          <Route path="/city/:citySlug" component={CityHub} />
          <Route path="/city/:citySlug/:hubSlug/:serviceSlug" component={CityService} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  )
}

export default App
