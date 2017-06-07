import { AngularRxjsStorePage } from './app.po';

describe('angular-rxjs-store App', () => {
  let page: AngularRxjsStorePage;

  beforeEach(() => {
    page = new AngularRxjsStorePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
