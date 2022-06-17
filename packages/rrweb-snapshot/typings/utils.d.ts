import { INode, MaskInputFn, MaskInputOptions } from './types';
export declare function isElement(n: Node | INode): n is Element;
export declare function isShadowRoot(n: Node): n is ShadowRoot;
export declare function maskInputValue({ maskInputOptions, tagName, type, value, maskInputFn, forceMasking }: {
    maskInputOptions: MaskInputOptions;
    tagName: string;
    type: string | number | boolean | null;
    value: string | null;
    maskInputFn?: MaskInputFn;
    forceMasking: boolean;
}): string;
export declare function is2DCanvasBlank(canvas: HTMLCanvasElement): boolean;
