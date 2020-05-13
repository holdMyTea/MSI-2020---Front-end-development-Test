const useMobileLayout = () => {
  const viewPortWidth = window.innerWidth
  return {
    isMobile: viewPortWidth <= 400,
    isTablet: 400 < viewPortWidth && viewPortWidth <= 850
  }
}

export {
  useMobileLayout
}
