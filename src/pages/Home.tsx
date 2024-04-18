import * as C from "@/components/index"
import { homePartnership, homePartnership2, serviceCards } from "@/constants/index"

const HomePage = () => <><C.Hero
  heading="Architects of Tomorrow's Digital Frontier"
  text="enterprises growth companies startups"
  url="#contact-form"
  btn={'tell us about your project'}
  poster="/banner-1.webp"
  video="/hero.webm" />


  <C.Journey />


  <C.OurPeople />


  <C.Services bg={true} url="/services" btn="views more"
    description={serviceCards[0].description} heading={serviceCards[0].heading} services={serviceCards[0].services}
  />


  <C.HomePartnership
    heading={homePartnership.heading}
    description={homePartnership.description}
    image={homePartnership.image} />



  <C.Testimonial />


  <C.HomePartnership
    heading={homePartnership2.heading}
    description={homePartnership2.description}
    image={homePartnership2.image}
    className={'flex-row-reverse'}
    url={homePartnership2.url}
    btn={homePartnership2.btn} /></>

export default HomePage