import React from "react";
import ReactDom from "react-dom";

import { ModalContent } from "./ModalContent";


export class ModalByTicket extends React.Component {
    root = document.createElement("div");
    body = document.querySelector("body");

    componentDidMount(){
        this.body.appendChild(this.root);
    }

    componentWillUnmount() {
        this.body.removeChild(this.root);
    }

    render (){
        return ReactDom.createPortal(
            <ModalContent sessionId={this.props.sessionId} />,
            this.root
        )
    }
}