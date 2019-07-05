import { Component, Element, h } from "@stencil/core";
// insue importing waypoints
// import Waypoints from "waypoints";

@Component({
  tag: "app-home",
  styleUrl: "app-home.css"
})
export class AppHome {

  @Element()
  homeEl: any;
  Waypionts: any;
  
  componentDidLoad(){
    // const waypoint = new Waypoints
    const ionContent = this.homeEl.querySelector('ion-content');

    // ionContent.addEventListener('ionScrollStart', () => console.log('scroll start'));

    ionContent.addEventListener('ionScroll', () => console.log('scroll start'));

    console.log('wow this is scrolling!');
    

    window.onscroll = () => {
      console.log('this is detecting a scroll');
      
    }

  }

  render() {
    return [
      <ion-content>
        <div class="hp-main-content">
          <aside>
            <ml-latest-post />
          </aside>
          <main>
            <div class="hp-row1">
              <h1>Madness Labs</h1>
            </div>
            <div class="hp-row2">
              <h2>
                <span class="sub-line-text">
                Creativity with
                </span>
                <span class="logo">
                  <img src="/assets/icon/ml-logo-bold-1.png" />
                </span>
              </h2>
              <img src="" alt="" />
            </div>
            {/* <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque porta diam vel felis pharetra gravida. Vestibulum interdum sapien id enim tincidunt auctor. Ut nec mi posuere, laoreet ligula non, dictum nisl. Suspendisse mattis varius sagittis. In hac habitasse platea dictumst. Ut vitae turpis semper, lacinia tortor quis, efficitur lorem. Praesent porta vehicula metus quis posuere. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Quisque molestie orci id justo ornare suscipit vitae eget leo. Nulla facilisi. Integer sollicitudin gravida suscipit. In tincidunt cursus tortor, a imperdiet metus vestibulum hendrerit. Cras vehicula eleifend quam, sit amet dictum nisi sagittis non. Curabitur eget tortor at nisl vestibulum mattis.

Ut vulputate iaculis diam quis placerat. Cras velit ante, dictum et aliquet ac, molestie nec ante. Praesent sit amet urna pharetra, eleifend erat ac, vehicula nisi. Quisque turpis est, sagittis non hendrerit in, efficitur at massa. Fusce non ornare urna, interdum tincidunt enim. Vestibulum vestibulum eros eu nulla faucibus vehicula. Maecenas suscipit vel nulla vel pharetra. Fusce facilisis vulputate congue. Fusce mattis sagittis felis vitae gravida.

Ut ex tellus, vehicula sed velit a, mollis tempor nibh. Fusce sollicitudin quam ac purus commodo posuere. Aliquam mattis dictum lectus, vestibulum euismod magna fringilla sed. Sed dignissim neque nec leo mattis rutrum. Sed volutpat metus non nisi volutpat congue. Donec quis arcu nec felis faucibus feugiat. Cras blandit neque at nulla finibus consectetur. Sed tempus justo a ex placerat pulvinar. Nam in leo facilisis, aliquet turpis a, semper nulla. Praesent fringilla efficitur urna, sed eleifend sem varius ut. Nam non massa non lacus bibendum ultricies.

Integer consequat justo vel urna maximus, in molestie tellus condimentum. Fusce interdum sit amet orci at feugiat. Nam eget enim purus. In et finibus nibh, nec mattis tellus. Nunc vestibulum turpis ante, sed mollis mauris venenatis vel. Nullam id facilisis purus. Donec at lacus ullamcorper, dignissim tellus vel, interdum enim. Morbi fermentum lectus eros, eu cursus diam sagittis quis. Aenean ultrices vel purus ullamcorper facilisis. Morbi feugiat sit amet mauris sit amet ornare. Vivamus sed laoreet nunc, sed pharetra ex. Ut fermentum diam tellus, at sagittis libero ullamcorper in. Nam at rhoncus risus. Nullam vel iaculis dolor, quis sagittis purus. In sapien leo, convallis quis velit id, convallis dictum ante. Vivamus quis mauris vehicula, ultrices tellus a, vestibulum leo.

Mauris sapien augue, hendrerit sed felis eu, vulputate euismod nulla. Nullam ullamcorper quam ante, sed pretium metus maximus in. Vestibulum convallis, lacus eget varius fermentum, ex nibh condimentum magna, in rutrum nibh eros et ex. Curabitur pretium accumsan magna nec consequat. Vestibulum eu est eget odio auctor fermentum. Vestibulum maximus massa mi, placerat laoreet neque luctus a. Vestibulum erat ante, consequat vel neque eu, commodo efficitur leo. Nullam eget condimentum ante. Maecenas in lectus nec urna luctus vehicula eu sodales dolor. Maecenas faucibus, nunc id sollicitudin pellentesque, felis tortor gravida tortor, in tempor dolor nunc a massa. Pellentesque tristique lacus quis dapibus egestas. Nullam urna dui, commodo vel leo ut, ultricies commodo ligula.

Curabitur pharetra felis lorem, sed varius metus facilisis ac. Vestibulum vel nunc consequat tortor tincidunt dapibus ut in nulla. Ut sed urna velit. Quisque in ipsum nibh. Morbi nec placerat lacus. Sed molestie elit finibus, bibendum sem quis, pharetra odio. Donec sollicitudin rhoncus tincidunt. Donec porttitor ullamcorper vulputate. Cras pulvinar metus ac venenatis laoreet. Vivamus molestie, lorem convallis auctor volutpat, nulla dolor vestibulum leo, et fermentum sapien velit non est. Nunc venenatis mattis vestibulum. Aenean sit amet arcu ut elit bibendum placerat.

Mauris quis fermentum nibh. Suspendisse eget leo ac quam viverra condimentum. Curabitur vel sagittis velit. Quisque aliquet metus neque, vel aliquet turpis egestas a. Cras sodales tortor ac leo aliquet consequat. Fusce accumsan ipsum ut sem gravida, lobortis faucibus odio sodales. Vestibulum eu auctor lectus. Aliquam ac leo ipsum. Donec efficitur eu sapien a pretium. In hac habitasse platea dictumst. Nunc interdum gravida erat sed euismod. Praesent non arcu vel enim ultricies porta vitae nec neque. Vestibulum et malesuada nisl. Quisque sodales aliquam urna et laoreet. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.

Maecenas mollis risus eu lacus faucibus, id venenatis libero pellentesque. Vestibulum sodales, lacus in porta varius, metus purus iaculis risus, in tristique dui lacus vitae urna. Curabitur ante velit, ultricies eget justo a, tincidunt varius augue. Suspendisse vehicula ipsum diam, ut maximus purus laoreet eget. Vestibulum ac condimentum nisl. Curabitur gravida a sapien eget varius. Vestibulum pretium enim et lorem feugiat, nec porttitor metus varius. Maecenas gravida bibendum ultrices. Nunc sollicitudin tempus suscipit. Fusce tincidunt cursus ullamcorper. Curabitur porta, diam in vulputate efficitur, lectus magna laoreet velit, et iaculis risus justo sed libero. Nulla venenatis ligula sed purus hendrerit viverra.

Morbi eros turpis, scelerisque sed lorem sit amet, iaculis sagittis nisi. Mauris scelerisque scelerisque fermentum. Sed finibus, tellus sit amet sodales tristique, tellus nisl lacinia felis, eu tristique nisi nulla id ante. Mauris non maximus erat. Nulla id placerat enim. Sed in lacus mauris. Praesent aliquam non orci a dapibus. Cras iaculis ornare nisi vel euismod. Etiam faucibus nibh sem, at ultricies ante fermentum id. Vestibulum luctus, sapien ut tempor efficitur, risus mi luctus eros, vel elementum erat ex sit amet enim. Donec elit arcu, congue ac ipsum in, viverra laoreet quam. Proin vitae elit orci.

Interdum et malesuada fames ac ante ipsum primis in faucibus. Nulla pulvinar euismod urna ut elementum. Phasellus tincidunt sed quam sed ultricies. Pellentesque eleifend in orci non dapibus. Integer facilisis arcu eget libero suscipit, ut interdum arcu lacinia. Pellentesque consequat hendrerit ullamcorper. In ac elit gravida, molestie velit non, iaculis dolor. Etiam velit sapien, imperdiet at quam non, sollicitudin pellentesque nulla.

Fusce eu odio elit. Aliquam id ullamcorper neque. Cras bibendum elementum magna, quis consequat est fermentum sit amet. Duis tincidunt nulla in ipsum posuere, vel molestie urna fringilla. Nulla facilisi. Pellentesque a turpis non lorem cursus elementum ultrices eu sapien. Aenean auctor, ipsum ac ultrices sodales, diam ipsum volutpat eros, in lobortis nisi sapien nec elit.

Morbi malesuada diam nec ultricies sollicitudin. Donec viverra mi ut nulla lobortis, sit amet aliquet felis luctus. Praesent non justo id magna mattis tincidunt. Pellentesque a consectetur diam. Donec vehicula arcu nec porttitor pellentesque. Proin ullamcorper, dui ac congue posuere, metus tortor efficitur leo, eu aliquet metus turpis sed est. Integer a blandit est, ut tincidunt tellus. Quisque massa magna, vestibulum id posuere ac, rutrum a nulla. Aenean commodo at augue non aliquam. Sed sed consequat arcu. Nulla sed quam eu eros ullamcorper fermentum vitae non quam. Suspendisse potenti. Aenean auctor quam sed luctus suscipit. Mauris auctor feugiat augue, sed condimentum justo. Suspendisse pellentesque ultrices risus ac placerat. Etiam varius iaculis suscipit.
        </div> */}
          </main>
        </div>

        <div>
          <p>test content.</p>
        </div>

        <div class="video-container">
          <video autoplay loop width="960" height="540">
            <source src="/assets/videos/starry-ocean.mov" />
            <source src="/assets/videos/starry-ocean.mp4" />
          </video>
        </div>

      </ion-content>
    ];
  }
}
