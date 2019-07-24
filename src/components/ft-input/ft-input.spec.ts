import { TestWindow } from '@stencil/core/testing';
import { FtInput } from './ft-input';

describe('ft-input', () => {
  it('should build', () => {
    expect(new FtInput()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLFtInputElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [FtInput],
        html: '<ft-input></ft-input>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
