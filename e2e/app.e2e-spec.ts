import { FirebaseEmptyDocReproPage } from './app.po';

describe('firebase-empty-doc-repro App', function() {
  let page: FirebaseEmptyDocReproPage;

  beforeEach(() => {
    page = new FirebaseEmptyDocReproPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
