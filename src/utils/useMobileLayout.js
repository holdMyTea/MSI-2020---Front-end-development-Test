import { useState, useEffect } from 'react'

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
