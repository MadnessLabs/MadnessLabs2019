import { TestWindow } from '@stencil/core/testing';
import { MlLatestPost } from './ml-latest-post';

describe('ml-latest-post', () => {
  it('should build', () => {
    expect(new MlLatestPost()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLMlLatestPostElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [MlLatestPost],
        html: '<ml-latest-post></ml-latest-post>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
