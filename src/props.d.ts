import { ReactElement, ReactNode } from "react";

export type TextVariant = Array<ReactNode>

export default interface AnimatedHeadProps {
    textVariants: TextVariant,
    avatarPaths: Array<String>
}