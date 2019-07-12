import { TestWindow } from '@stencil/core/testing';
import { MlDivider } from './ml-divider';

describe('ml-divider', () => {
  it('should build', () => {
    expect(new MlDivider()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLMlDividerElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [MlDivider],
        html: '<ml-divider></ml-divider>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
