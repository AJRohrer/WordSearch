import { WordSearchPage } from './app.po';

describe('word-search App', function() {
  let page: WordSearchPage;

  beforeEach(() => {
    page = new WordSearchPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
