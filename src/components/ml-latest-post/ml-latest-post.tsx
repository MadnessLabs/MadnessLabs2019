import { Component, h} from '@stencil/core';

@Component({
    tag: 'ml-latest-post',
    styleUrl: 'ml-latest-post.css'
})
export class MlLatestPost{

    componentDidMount(){
        this.fetchData();
    }

    fetchData = () => {
   

       let promise =  fetch('https://madnesslabs.net/api/v1/feed', {mode: 'no-cors'});
        promise.then((res)=>{
                return res.json();
        }).then((json)=>{
            console.log(json)
        });
}
    

    render() {
        return (
            <div>
                <ion-item>
                <ion-button
          onClick={() =>
            this.fetchData()
          }        
        >
          Get post
        </ion-button>
                </ion-item>
            </div>
        );
    }


    
}