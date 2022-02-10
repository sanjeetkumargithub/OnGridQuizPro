import React from 'react'

import { CustomHeader, CustomFooter } from '../../shared'
import {
    Route,
    BrowserRouter,
    Routes
} from 'react-router-dom'
import { publicRoutes } from '../../navigation/routes';



const PublicLayout = ({ }) => {
    return (
        <>
            <CustomHeader />
          
                <BrowserRouter>
                    <Routes>
                
                        {publicRoutes && publicRoutes.map((item, index) => <Route key={index} exact path={item.path} element={item.component} />)}
                      
                    </Routes>
                </BrowserRouter>
           
            <CustomFooter />
        </>
    )
}

export default PublicLayout