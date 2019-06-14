import { TestWindow } from '@stencil/core/testing';
import { MlApps } from './ml-apps';

describe('ml-apps', () => {
  it('should build', () => {
    expect(new MlApps()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLMlAppsElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [MlApps],
        html: '<ml-apps></ml-apps>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
