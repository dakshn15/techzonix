import { useEffect } from "react";

const SITE_NAME = "Techzonix";

/**
 * Custom hook to set the document title dynamically per page.
 * @param {string} title - The page-specific title (e.g., "Cart", "Products")
 */
const usePageTitle = (title) => {
  useEffect(() => {
    if (title) {
      document.title = `${title} | ${SITE_NAME}`;
    } else {
      document.title = `${SITE_NAME} — Premium Electronics & Tech Store`;
    }

    return () => {
      document.title = SITE_NAME;
    };
  }, [title]);
};

export default usePageTitle;
