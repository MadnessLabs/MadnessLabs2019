import { TestWindow } from '@stencil/core/testing';
import { MalMainNav } from './mal-main-nav';

describe('mal-main-nav', () => {
  it('should build', () => {
    expect(new MalMainNav()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLMalMainNavElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [MalMainNav],
        html: '<mal-main-nav></mal-main-nav>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
