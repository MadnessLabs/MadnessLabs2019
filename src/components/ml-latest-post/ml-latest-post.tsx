import { Component, h} from '@stencil/core';

@Component({
    tag: 'ml-latest-post',
    styleUrl: 'ml-latest-post.css'
})
export class MlLatestPost{

    componentDidMount(){
        this.fetchData();
    }

    fetchData(){

        // const getPosts = () =>{
        //     return fetch('https://madnesslabs.net/api/v1/feed')
        //     .then(res => res.json())
        //     .then(posts => console.log(posts))
        // }


            const post ={
                title: 'WordPress Posting for Maximum Reach',
                body: 'WordPress Posting is Easy if you have the right tools and know-how. Luckily, if you are a customer of Madness Labs&#8217; SAAS you have all of the tools you need to be a pro at SEO with WordPress. In this video I show how to craft a post on your blog, how to optimize your &#8230; <a href=\"https:\/\/blog.madnesslabs.net\/wordpress-posting-for-maximum-reach\/\">Continued<\/a>',
                userid: 1

            }

        const newPost = posts =>{
                const options ={
                    method: 'POST',
                    body: JSON.stringify(posts),
                    headers: new Headers({
                        'content-type' : 'application/json'
                    })
                }
            return fetch('https://madnesslabs.net/api/v1/feed', options)
            .then(res => res.json())
            .then(res => console.log(res))
           

        }

        newPost(post);

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