import { TestWindow } from '@stencil/core/testing';
import { MlVideos } from './ml-videos';

describe('ml-videos', () => {
  it('should build', () => {
    expect(new MlVideos()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLMlVideosElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [MlVideos],
        html: '<ml-videos></ml-videos>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
