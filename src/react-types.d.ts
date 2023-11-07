import { JSX as LocalJSX } from './components';
import { HTMLAttributes, Key, Ref } from 'react';
// Note this file is not compiled or used in the tui / stencil build. It is purely for consumers of the @timely/ui package.
/**
 * Hook up the StencilJS web-component types into the global scope React JSX.
 * This allows React's JSX parser to understand custom elements like <tui-tab> and correctly type all props.
 */
declare global {
    export namespace JSX {
        type StencilToReact<T> = {
            [P in keyof T]?: T[P] &
                Omit<HTMLAttributes<Element>, 'className'> & {
                    class?: string;
                    key?: Key | null;
                    ref?: Ref<T>;
                };
        };
        interface IntrinsicElements extends StencilToReact<LocalJSX.IntrinsicElements> {}
    }
}
