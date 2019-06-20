import { Component, h } from '@stencil/core';


@Component({
    tag: 'ml-latest-post',
    styleUrl: 'ml-latest-post.css'
})
export class MlLatestPost {

    

    render() {
        return (
            <div>
                <h1>Cool post</h1>
                <p>Hello MlLatestPost! Here is what has hapened in the world of web dev!</p>
            </div>
        );
    }
}
