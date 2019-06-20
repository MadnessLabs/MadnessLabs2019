import { TestWindow } from '@stencil/core/testing';
import { MlFloatingButton } from './ml-floating-button';

describe('ml-floating-button', () => {
  it('should build', () => {
    expect(new MlFloatingButton()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLMlFloatingButtonElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [MlFloatingButton],
        html: '<ml-floating-button></ml-floating-button>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
