import React from "react";
import Head from 'next/head'
import { Link, Navigation, AuthorName } from "./page_base";

interface PageFullProps {
    children: React.ReactNode,
    title: string,
    dark: boolean,
    links: Link[],
    sidebarUncollapsed?: boolean
}

export class PageDivided extends React.PureComponent<PageFullProps> {

    private get backgroundClassName() {
        if (this.props.dark) {
            return "position-absolute w-100 nopadding bg-black text-light text-font";
        } else {
            return "position-absolute w-100 nopadding bg-white text-black text-font";
        }
    }

    private get collapseButtonClassName() {
        let collapsed = "";
        if (!!this.props.sidebarUncollapsed) {
            collapsed = "hide-sm ";
        }
        let color = "";
        if (this.props.dark) {
            color = "text-white ";
        } else {
            color = "text-dark ";
        }
        return "btn primary-outline position-fixed foreforeground " + collapsed + color;
    }

    private get sidebarClassName() {
        if (!this.props.sidebarUncollapsed) {
            return "collapse multi-collapse";
        } else {
            return "collapse multi-collapse dont-collapse-sm";
        }
    }

    private get sidebarSpacerClassName() {
        if (!this.props.sidebarUncollapsed) {
            return "col-6 col-sm-4 col-md-3 col-xl-2 collapse multi-collapse display-sm";
        } else {
            return "col-6 col-sm-4 col-md-3 col-xl-2 collapse multi-collapse dont-collapse-sm display-sm";
        }
    }

    public render() {
        return <div className={this.backgroundClassName}>
            <button className={this.collapseButtonClassName} type="button" data-bs-toggle="collapse" data-bs-target=".multi-collapse" aria-expanded="false" aria-controls="sidebar sidebar-spacer">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                </svg>
            </button>
            <div id="sidebar" className={this.sidebarClassName}>
                <Head>
                    <title>{this.props.title}</title>
                </Head>
                <div id="sidebar-content" className="col-6 col-sm-4 col-md-3 col-xl-2 d-flex position-absolute foreground">
                    <div className="px-3 pt-3">
                        <AuthorName dark={this.props.dark}/>
                        <Navigation dark={this.props.dark} targets={this.props.links}/>
                    </div>
                </div>
            </div>
            <div className="row w-100">
                <div id="sidebar-spacer" className={this.sidebarSpacerClassName}></div>
                <div className="col">
                    {this.props.children}
                </div>
            </div>
        </div>;
    }

}