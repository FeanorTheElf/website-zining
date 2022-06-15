import React from "react";

export interface MiddleColumnProps {
    children: React.ReactNode
}

export class MiddleColumn extends React.PureComponent<MiddleColumnProps> {

    public render() {
        return <div className="row w-100">
            <div className="col-0 col-sm-1 col-md-1 col-xl-2"></div>
            <div className="col">
                {this.props.children}
            </div>
            <div className="col-0 col-sm-1 col-md-1 col-xl-2"></div>
        </div>;
    }
}

export class Spacer extends React.PureComponent<{}> {

    public render() {
        return <div className="spacer-div"></div>;
    }
}