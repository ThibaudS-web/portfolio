import { ReactElement, ReactNode } from "react";

export type TextVariant = Array<ReactNode>

export interface AnimatedHeadProps {
    textVariants: TextVariant,
    avatarPaths: Array<String>
} 

export interface ButtonProps {
    link?: string,
    children: Array<ReactNode> | string
    onClick?: () => void
    homeBtn?: boolean
}

export type Projects = Array<Project>

export interface Project {
    id: string, 
    type: string,
    name: string,
    text: string, 
    github: string, 
    technos: Array<string>,
    liveDemo: string,
    imagePath: string
}