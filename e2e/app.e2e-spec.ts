import { NgSpotify2Page } from './app.po';

describe('ng-spotify2 App', () => {
  let page: NgSpotify2Page;

  beforeEach(() => {
    page = new NgSpotify2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
