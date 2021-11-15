import React, { Component } from "react";
import Button from "@restart/ui/esm/Button";
import { Card, ListGroup } from "react-bootstrap";
import { filter } from 'lodash';
import { render } from "react-dom";

class Square extends Component{    

    render(){
        return(
            <ListGroup.Item className="mx-1 p-0 mt-1  border border-dark" variant="light">
                
              <Card style={{height: '5rem', width: '4rem', fontSize: '4rem'}} className="text-dark rounded justify-content-center text-center border border-dark">
             
              {this.props.value}    
                
              </Card>
            </ListGroup.Item>
        )
    }
}

export default Square;


