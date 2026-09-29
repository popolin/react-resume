interface SectionPosition {
  href: string
  top: number
}

export function getActiveSection(
  sections: SectionPosition[],
  viewportHeight: number,
  scrollY: number,
  pageHeight: number,
) {
  const ordered = [...sections].sort((a, b) => a.top - b.top)
  if (!ordered.length) return '#home'
  if (scrollY > 0 && scrollY + viewportHeight >= pageHeight - 2) {
    return ordered[ordered.length - 1].href
  }

  // Follow the section entering the reading area below the fixed navigation.
  const readingLine = Math.max(100, viewportHeight * 0.3)
  return ordered.filter((section) => section.top <= readingLine).at(-1)?.href ?? ordered[0].href
}
