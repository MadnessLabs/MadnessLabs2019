import { Component, h } from '@stencil/core';


@Component({
    tag: 'ml-divider',
    styleUrl: 'ml-divider.css',
    scoped: true
})
export class MlDivider {

    render() {
        return (
            <div class="wrapper">
                                    <img src="/assets/icon/ml-logo-bold-1.png"></img>
                <div class="line">


                </div>
                <div class="line2"></div>
            </div>
        );
    }
}
