import * as C from "@/components/index"
import * as Con from "@/constants/index"
import * as Pages from "@/utils/servicesDetailPage"
import { useParams } from "react-router-dom"




const Jobs = () => {

    const slug:any  = useParams()


    const paths = Con.serviceCards.flatMap(card => (card.services.map(service => service.url)));

    const data = Pages.serviceDetailCard.filter(p => p.page == slug?.slug)


    return (
        <><C.Hero
            heading={`${Con.companyName} Services`}
            text="enterprises growth companies startups"
            url="#contact-form" btn={'tell us about your project'} poster="/banner-1.webp" />

            {
                paths.includes(slug?.slug) && data.length > 0 && data.map((v, i) => <C.ServiceDetailInfo key={i} data={v} />)
            }



        </>
    )
}

export default Jobs

