import React from 'react'
import { Container } from 'react-bootstrap'

const Layout = ({children}) => {
    return(
        <React.Fragment>
            <Container fluid className="bg-image d-flex justify-content-center align-items-center px-0 mt-5 pt-2" >
                {children}
            </Container>
        </React.Fragment>
        
        
    )
} 

export default Layout