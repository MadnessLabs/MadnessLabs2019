import { TestWindow } from '@stencil/core/testing';
import { MlForm } from './ml-form';

describe('ml-form', () => {
  it('should build', () => {
    expect(new MlForm()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLMlFormElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [MlForm],
        html: '<ml-form></ml-form>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
