// Split
export function runSplit(el) {
  // text splitting code
  let typeSplit;
  function runSplitType() {
    typeSplit = new SplitType(el, {
      types: 'words',
      tagName: 'span',
    });
  }
  runSplitType();

  // run the code when window width changes
  let windowWidth = window.innerWidth;
  window.addEventListener('resize', function () {
    if (windowWidth !== window.innerWidth) {
      windowWidth = window.innerWidth;
      typeSplit.revert();
      runSplitType();
    }
  });
}
