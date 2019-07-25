import { TestWindow } from '@stencil/core/testing';
import { FtmsCalendarPicker } from './ftms-calendar-picker';

describe('ftms-calendar-picker', () => {
  it('should build', () => {
    expect(new FtmsCalendarPicker()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLFtmsCalendarPickerElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [FtmsCalendarPicker],
        html: '<ftms-calendar-picker></ftms-calendar-picker>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
