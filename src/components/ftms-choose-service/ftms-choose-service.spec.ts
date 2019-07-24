import { TestWindow } from '@stencil/core/testing';
import { FtmsChooseService } from './ftms-choose-service';

describe('ftms-choose-service', () => {
  it('should build', () => {
    expect(new FtmsChooseService()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLFtmsChooseServiceElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [FtmsChooseService],
        html: '<ftms-choose-service></ftms-choose-service>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
