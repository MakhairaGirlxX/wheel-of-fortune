import React, { Component } from "react";
import { Card, ListGroup } from "react-bootstrap";

class Square extends Component{  
 

    render(){
        return(
          
            <ListGroup.Item className="mx-1 p-0 mt-1 text-center d-inline-block border border-dark" variant="light">
         
            <Card style={{height: '5rem', width: '4rem', fontSize: '4rem'}} className="align-items-center text-dark rounded justify-content-center text-center border border-dark">
        
            {this.props.value.toUpperCase()}    
           
            </Card>
            </ListGroup.Item>
            );
    }
}

export default Square;

