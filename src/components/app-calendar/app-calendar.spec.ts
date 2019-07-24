import { TestWindow } from '@stencil/core/testing';
import { AppCalendar } from './app-calendar';

describe('app-calendar', () => {
  it('should build', () => {
    expect(new AppCalendar()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLAppCalendarElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [AppCalendar],
        html: '<app-calendar></app-calendar>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
