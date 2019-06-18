import { TestWindow } from '@stencil/core/testing';
import { AppCommunity } from './app-community';

describe('app-community', () => {
  it('should build', () => {
    expect(new AppCommunity()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLAppCommunityElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [AppCommunity],
        html: '<app-community></app-community>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
