import { Outlet } from "react-router-dom"
import * as Com from '@/components/index'

const RootLayout = () => {
    return (
        <body className={`scroll-smooth`}>
            <Com.Header />
            <Outlet />
            <Com.SuccessSnippets />
            <Com.Form />
            <Com.Accordion />
            <Com.Footer />
        </body>
    )
}

export default RootLayout