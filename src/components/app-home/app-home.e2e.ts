import { newE2EPage } from '@stencil/core/testing';

describe('ml-home', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<ml-home></ml-home>');

    const element = await page.find('ml-home');
    expect(element).toHaveClass('hydrated');
  });

  it('contains a "Profile Page" button', async () => {
    const page = await newE2EPage();
    await page.setContent('<ml-home></ml-home>');

    const element = await page.find('ml-home ion-content ion-button');
    expect(element.textContent).toEqual('Profile page');
  });
});
