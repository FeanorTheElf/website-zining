import React from "react";
import Head from 'next/head'
import { AuthorName, Link, Navigation } from "./page_base";

interface PageFullProps {
    children: React.ReactNode,
    title: string,
    dark: boolean,
    links: Link[],
}

export class PageFull extends React.PureComponent<PageFullProps> {

    public get containerClassName() {
        if (this.props.dark) {
            return "container-fluid overflow-hidden bg-dark text-light text-font";
        } else {
            return "container-fluid overflow-hidden bg-light test-dark text-font";
        }
    }

    public render() {
        return <div className={this.containerClassName}>
            <Head>
                <title>{this.props.title}</title>
            </Head>
            <div className="row vh-sm-100 overflow-auto">
                <div className="col-12 col-sm-3 col-xl-2 d-flex position-fixed vh-sm-100 foreground">
                    <div className="d-flex flex-sm-column flex-row flex-grow-1 px-3 pt-3">
                        <AuthorName dark={this.props.dark}/>
                        <Navigation dark={this.props.dark} targets={this.props.links}/>
                    </div>
                </div>
                {this.props.children}
            </div>
        </div>;
    }

}