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
        return <ul className="nav nav-pills flex-column justify-content-center" id="menu">
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
            return "p-4 text-decoration-none text-light zining-font";
        } else {
            return "p-4 text-decoration-none text-dark zining-font";
        }
    }

    public render() {
        return <a className={this.titleTextClassName} href="./index.html">
            ZINING REN
        </a>;
    }
}
