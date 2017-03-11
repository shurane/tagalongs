import { TagalongsPage } from './app.po';

describe('tagalongs App', () => {
  let page: TagalongsPage;

  beforeEach(() => {
    page = new TagalongsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
