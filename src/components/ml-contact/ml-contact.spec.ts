import { TestWindow } from '@stencil/core/testing';
import { MlContact } from './ml-contact';

describe('ml-contact', () => {
  it('should build', () => {
    expect(new MlContact()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLMlContactElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [MlContact],
        html: '<ml-contact></ml-contact>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
