import React from 'react'
import { TitleTypography } from '../../styles/components/sectionTitleTypo'

interface Props {
  children: React.ReactNode,
}

const SectionTitleTypo: React.FC<Props> = ({ children }) => {
  return (
    <TitleTypography>
      {children}
    </TitleTypography>
  )
}

export default SectionTitleTypo