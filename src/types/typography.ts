

type Color = "red-error" | "border-color" | "grey" | "light-grey" | "denim" | "orange" | "light-blue" | "purple" | "pink" | "sky-blue" | "white";

type FontSize = "fs-x-lg" | "fs-lg" | "fs-md" | "fs-sm" | "fs-x-sm" | "fs-32" | "fs-24" | "fs-16" | "fs-15" | "fs-14" | "fs-12";

type Weight = "weight-700" | "weight-500" | "weight-400";

type TypographyVariants = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "a" | "label";

type Alignment = "left" | "right" | "center";

export interface TypographyInterface {
    size: FontSize;
    color: Color;
    weight: Weight;
    variant: TypographyVariants;
    align: Alignment;
    [key:string]: unknown
}

