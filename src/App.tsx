import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import { RootLayout } from "@/layout/index"
import { Home,Careers,Company,ContactUs,OurWork,PrivacyPolicy,Service,Services,NotFound  } from "@/pages/index"


const App = () => {


  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/company" element={<Company />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/our-work" element={<OurWork/>} />
        <Route path="/privacy-policy" element={<PrivacyPolicy/>} />
        <Route path="/service/:slug" element={<Service/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="*" element={<NotFound/>} />
      </Route>
    )
  );



  return (
    <RouterProvider router={router} />
  )
}

export default App