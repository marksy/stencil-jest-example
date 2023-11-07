import { Component, Host, h } from '@stencil/core';

@Component({
    tag: 'example-component',
    styleUrl: 'example-component.css',
    shadow: true,
})
export class ExampleComponent {
    render() {
        return (
            <Host>
                <p>Example component</p>
                <slot></slot>
            </Host>
        );
    }
}
