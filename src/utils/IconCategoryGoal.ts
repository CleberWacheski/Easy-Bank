type categoryProps = 'Computer' | 'Car' | 'Travel' | 'Game' | 'Leisure' | 'Professional' | 'Personal' | 'Other'

import {MdComputer,MdCardTravel} from 'react-icons/md'
import {AiOutlineCar} from 'react-icons/ai'
import { BiGame } from 'react-icons/bi'
import { FiTrendingUp } from 'react-icons/fi'
import {GiNetworkBars,GiStairsGoal} from 'react-icons/gi'
import {IoBodyOutline} from 'react-icons/io5'



export const IconCategoryGoal = (category : categoryProps) => {
   
    switch (category) {

        case ('Computer') : return MdComputer
        break
        case ('Car') : return AiOutlineCar
        break
        case ('Travel') : return MdCardTravel
        break
        case ('Game') : return BiGame
        break
        case ('Leisure') : return FiTrendingUp
        break
        case ('Professional') : return GiNetworkBars
        break
        case ('Personal') : return IoBodyOutline
        break
        default : return GiStairsGoal
        break
    }

}


