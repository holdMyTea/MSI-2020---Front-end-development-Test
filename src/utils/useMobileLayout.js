import { useState, useEffect } from 'react'

/**
 * @typedef useMobileLayoutReturn
 * @property {boolean} isTablet - if screen width matches tablet layout requirement
 * @property {boolean} isMobile - if screen width matches mobile layout requirement
 */

/**
 * React Hook that watches window's innerWidth and matches it against
 * layout width requirement to determine which layout should be displayed.
 * @returns {useMobileLayoutReturn}
 */
const useMobileLayout = () => {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth)

  const handleResize = () => setViewportWidth(window.innerWidth)

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  })

  return {
    isMobile: viewportWidth <= 500,
    isTablet: 500 < viewportWidth && viewportWidth <= 1300
  }
}

export {
  useMobileLayout
}
