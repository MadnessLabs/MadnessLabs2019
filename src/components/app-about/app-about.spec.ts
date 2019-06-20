import { TestWindow } from '@stencil/core/testing';
import { AppAbout } from './app-about';

describe('app-about', () => {
  it('should build', () => {
    expect(new AppAbout()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLAppAboutElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [AppAbout],
        html: '<app-about></app-about>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
