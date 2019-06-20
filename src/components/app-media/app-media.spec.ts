import { TestWindow } from '@stencil/core/testing';
import { AppMedia } from './app-media';

describe('app-media', () => {
  it('should build', () => {
    expect(new AppMedia()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLAppMediaElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [AppMedia],
        html: '<app-media></app-media>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
