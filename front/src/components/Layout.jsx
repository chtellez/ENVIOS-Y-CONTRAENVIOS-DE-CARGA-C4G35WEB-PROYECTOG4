import React from 'react'
import { Container } from 'react-bootstrap'

const Layout = ({children}) => {
    return(
        <React.Fragment>
            <Container fluid className="bg-image d-flex justify-content-center align-items-center p-0" >
                {children}
            </Container>
        </React.Fragment>
        
        
    )
} 

export default Layout