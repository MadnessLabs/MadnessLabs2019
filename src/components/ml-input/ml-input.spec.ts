import { TestWindow } from '@stencil/core/testing';
import { MlInput } from './ml-input';

describe('ml-input', () => {
  it('should build', () => {
    expect(new MlInput()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLMlInputElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [MlInput],
        html: '<ml-input></ml-input>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
