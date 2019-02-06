const size = {
  mobileS: '20em', // 320px
  mobileL: '26.5em', // 425px
  tabletS: '37.5em', // 600
  tablet: '48em', // 768px
  tabletL: '56.25em', // 900px
  laptop: '64em', // 1024px
  laptopL: '75em', // 1200px
  desktop: '90em', // 1440px
}

export const device = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobileL: `(max-width: ${size.mobileL})`,
  tabletS: `(max-width: ${size.tabletS})`,
  tablet: `(max-width: ${size.tablet})`,
  tabletL: `(max-width: ${size.tabletL})`,
  laptop: `(max-width: ${size.laptop})`,
  laptopL: `(max-width: ${size.laptopL})`,
  desktop: `(max-width: ${size.desktop})`,
}
