import { PostCodeDetails } from '@/types/Postcode'
import React from 'react'
export interface Props {
  details?: PostCodeDetails
}
export const PostcodeDetails = ({details}:Props) => {
  return (
    <div>
      "postcode": {details?.postcode},
        "quality": {details?.quality},
        "country": {details?.country},
        "nhs_ha": {details?.nhs_ha},
        "longitude": {details?.longitude},
        "latitude": {details?.latitude},
        "region": {details?.region},
        "incode": {details?.incode},
        "outcode": {details?.outcode},
        "parish": {details?.parish},
        "admin_county": {details?.admin_county},
    </div>
  )
}
