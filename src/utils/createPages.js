export function createPages(
  pages,
  pagesCount,
  currentPage,
  { MAX_PAGES, BEFORE_PAGES, AFTER_PAGES, CURRENT_MEDIUM_PAGES }
) {
  if (pagesCount > MAX_PAGES) {
    if (currentPage > CURRENT_MEDIUM_PAGES) {
      for (
        let i = currentPage - BEFORE_PAGES;
        i <= currentPage + AFTER_PAGES;
        i++
      ) {
        pages.push(i);
        if (i === pagesCount) break;
      }
    } else {
      for (let i = 1; i <= MAX_PAGES; i++) {
        pages.push(i);
        if (i === pagesCount) break;
      }
    }
  } else {
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }
  }
}
