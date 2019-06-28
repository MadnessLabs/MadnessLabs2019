import { Component, h} from '@stencil/core';

@Component({
    tag: 'ml-latest-post',
    styleUrl: 'ml-latest-post.css'
})
export class MlLatestPost{



const getPost = () => {
    const fetch = require('node-fetch');

        fetch('https://madnesslabs.net/api/v1/feed').then((res)=>{
                return res.json();
        }).then((json)=>{
            console.log(json)
        });
}
    

    render() {
        return (
            <div>
                <ion-item>
             
                </ion-item>
            </div>
        );
    }


    
}