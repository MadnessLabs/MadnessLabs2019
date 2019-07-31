import { TestWindow } from '@stencil/core/testing';
import { FtmsSendUserInfo } from './ftms-send-user-info';

describe('ftms-send-user-info', () => {
  it('should build', () => {
    expect(new FtmsSendUserInfo()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLFtmsSendUserInfoElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [FtmsSendUserInfo],
        html: '<ftms-send-user-info></ftms-send-user-info>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
