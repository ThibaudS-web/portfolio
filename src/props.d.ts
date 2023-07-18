import { ReactElement, ReactNode } from "react";

export type TextVariantUnionT = Array<string | ReactNode>

export default interface AnimatedHeadProps {
    textVariants: TextVariantUnion,
    avatarPaths: string[]
}