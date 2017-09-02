import { LibraryManagementSystemPage } from './app.po';

describe('library-management-system App', () => {
  let page: LibraryManagementSystemPage;

  beforeEach(() => {
    page = new LibraryManagementSystemPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
