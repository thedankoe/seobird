import styled, { css } from 'styled-components'
import {
  TiChartLineOutline,
  TiLocationArrowOutline,
  TiZoomOutline,
  TiPencil,
  TiRadarOutline,
  TiUserOutline,
  TiChevronRightOutline,
  TiArrowSortedDown,
  TiArrowSortedUp,
  TiSocialFacebookCircular,
} from 'react-icons/ti'
import { MdDone, MdReorder, MdEmail } from 'react-icons/md'

const iconStyles = css`
  fill: ${props => props.theme.secondaryLight};
  font-size: 3rem;
`

const ChartIcon = styled(TiChartLineOutline)`
  ${iconStyles}
`

const ArrowIcon = styled(TiLocationArrowOutline)`
  ${iconStyles}
`

const ZoomIcon = styled(TiZoomOutline)`
  ${iconStyles}
`

const PencilIcon = styled(TiPencil)`
  ${iconStyles}
`

const TargetIcon = styled(TiRadarOutline)`
  ${iconStyles}
`

const SocialIcon = styled(TiUserOutline)`
  ${iconStyles}
`

const RightIcon = styled(TiChevronRightOutline)`
  margin-left: 0.5rem;
  font-size: 1.8rem;
`

const DownIcon = styled(TiArrowSortedDown)`
  fill: #fff;
  margin-left: 0.5rem;
  font-size: 1.8rem;
`

const UpIcon = styled(TiArrowSortedUp)`
  fill: #fff;
  margin-left: 0.5rem;
  font-size: 1.8rem;
`

const CheckMark = styled(MdDone)`
  fill: ${props => props.theme.secondaryLight};
  font-size: 1.8rem;
  margin-right: 0.5rem;
`

const ToggleIcon = styled(MdReorder)`
  fill: ${props => props.theme.lightGrey};
  font-size: 3rem;
`

const EmailIcon = styled(MdEmail)`
  fill: #fff;
  font-size: 3rem;
`

const FBIcon = styled(TiSocialFacebookCircular)`
  fill: #fff;
  font-size: 3rem;
  margin-left: 0.5rem;
`

export {
  ChartIcon,
  ArrowIcon,
  ZoomIcon,
  PencilIcon,
  TargetIcon,
  SocialIcon,
  RightIcon,
  DownIcon,
  UpIcon,
  CheckMark,
  ToggleIcon,
  EmailIcon,
  FBIcon,
}
