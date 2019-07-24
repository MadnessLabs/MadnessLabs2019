import { Component, h, Event, EventEmitter, Prop } from '@stencil/core';


@Component({
    tag: 'ftms-choose-service',
    styleUrl: 'ftms-choose-service.css'
})
export class FtmsChooseService {

    @Prop() serviceOptions;
    @Event() selectService: EventEmitter;

    render() {
        return (
            <form>
            <div class="choose-services-wrapper">
                {this.serviceOptions.map((service) => (
                  <p
                  >
                    {service.type}
                  </p>
                ))}
            </div>
            </form>

        );
    }
}
