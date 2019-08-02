import { TestWindow } from '@stencil/core/testing';
import { FtmsDisplayConfirmation } from './ftms-display-confirmation';

describe('ftms-display-confirmation', () => {
  it('should build', () => {
    expect(new FtmsDisplayConfirmation()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLFtmsDisplayConfirmationElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [FtmsDisplayConfirmation],
        html: '<ftms-display-confirmation></ftms-display-confirmation>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
