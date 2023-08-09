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