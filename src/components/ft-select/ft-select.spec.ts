import { TestWindow } from '@stencil/core/testing';
import { FtSelect } from './ft-select';

describe('ft-select', () => {
  it('should build', () => {
    expect(new FtSelect()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLFtSelectElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [FtSelect],
        html: '<ft-select></ft-select>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
