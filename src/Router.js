import {createBrowserRouter} from 'react-router-dom'
import LayoutPage from './Pages/LayoutPage/LayoutPage'
import CartPage from './Pages/CartPage/CartPage'
import Mcontainer from './Pages/ManinContent/Mcontainer'
import Product from './Pages/Product/Product'


export const router = createBrowserRouter([{
    path:"/",
    element:<LayoutPage/>,
    children:[{
        path:"cart",
        element:<CartPage/>
    },
{path:"/content",
element:<Mcontainer/>},{
    path:"/product/:id",
    element:<Product/>
}]
}])