import { TestWindow } from '@stencil/core/testing';
import { RafApps } from './raf-apps';

describe('raf-apps', () => {
  it('should build', () => {
    expect(new RafApps()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLRafAppsElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [RafApps],
        html: '<raf-apps></raf-apps>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
