import React from "react";

export interface Link {
    target: string,
    text: string
}

export interface NavigationProps {
    targets: Link[],
    dark: boolean
}

export class Navigation extends React.PureComponent<NavigationProps> {

    public get navItemClassName() {
        if (this.props.dark) {
            return "nav-link link-light menu-font";
        } else {
            return "nav-link link-dark menu-font";
        }
    }

    public render() {
        return <ul className="nav nav-pills flex-sm-column flex-row flex-nowrap flex-shrink-1 flex-sm-grow-0 flex-grow-1 mb-sm-auto mb-0 justify-content-center" id="menu">
            {this.props.targets.map(link => <li key={link.target} className="nav-item">
                <a className={this.navItemClassName} href={link.target}>
                    {link.text}
                </a>
            </li>)}
        </ul>;
    }
}

export interface AuthorNameProps {
    dark: boolean
}

export class AuthorName extends React.PureComponent<AuthorNameProps> {

    public get titleTextClassName() {
        if (this.props.dark) {
            return "pb-sm-3 pb-2 pr-3 text-decoration-none text-light zining-font";
        } else {
            return "pb-sm-3 pb-2 pr-3 text-decoration-none text-dark zining-font";
        }
    }

    public render() {
        return <h2 className={this.titleTextClassName}>
            Zining Ren
        </h2>;
    }
}
