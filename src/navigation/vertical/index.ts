// ** Type import
import { VerticalNavItemsType } from 'src/@core/layouts/types'

const navigation = (): VerticalNavItemsType => {
  return [
    {
      sectionTitle: 'List Menu'
    },
    {
      title: 'Dashboard',
      path: '/dashboard',
      icon: 'mdi:home-outline'
    }
  ]
}

export default navigation
