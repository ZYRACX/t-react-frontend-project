import React from 'react'

import {UserAuth} from "../../context/AuthContext"
import api from "../../utils/axois"
export default function SectorSelector() {
    const {profile, session} = UserAuth()
    console.log(profile)
    console.log(session)
    api.get(`/users/${profile.id}`)


  return (
    <div>SectorSelector</div>   
  )
}
