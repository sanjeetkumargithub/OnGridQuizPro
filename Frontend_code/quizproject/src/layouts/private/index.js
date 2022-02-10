import React from 'react'
import { CustomHeader, CustomFooter } from '../../shared'

import {
    Route,
    BrowserRouter ,
    Routes,
} from 'react-router-dom'
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import { privateRoutes } from '../../navigation/routes';



const PrivateLayout = ({ }) => {
    return (
       <>
            <CustomHeader />
           
                <BrowserRouter>
                    <Routes>
                    
                        {privateRoutes && privateRoutes.map((item, index) => <Route key={index} exact path={item.path} element={item.component} />)}
                      
                    </Routes>
                </BrowserRouter>
           
            <CustomFooter />
            </>
       
    )
}

export default PrivateLayout