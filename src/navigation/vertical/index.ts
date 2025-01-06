// ** Type import
import { VerticalNavItemsType } from 'src/@core/layouts/types'

const navigation = (): VerticalNavItemsType => {
  return [
    {
      title: 'Dashboard',
      path: '/dashboard',
      icon: 'mdi:home-outline'
    },
    {
      sectionTitle: 'Menu Management'
    },
    {
      title: 'Laboratorium',
      path: '/laboratorium',
      icon: 'mdi:home-outline'
    },
    {
      title: 'Shift',
      path: '/shift',
      icon: 'mdi:home-outline'
    },
    {
      title: 'Jadwal',
      path: '/jadwal',
      icon: 'mdi:home-outline'
    },
    {
      title: 'Absensi',
      path: '/absensi',
      icon: 'mdi:home-outline'
    },
    {
      title: 'Pendaftaran Asisten',
      path: '/pendaftaran-asisten',
      icon: 'mdi:home-outline'
    },
    {
      title: 'Penerimaan Asisten',
      path: '/penerimaan-asisten',
      icon: 'mdi:home-outline'
    },
    {
      sectionTitle: 'Others'
    },
    {
      title: 'User Managemen',
      path: '/user-managemen',
      icon: 'mdi:home-outline'
    },
    {
      title: 'ACL',
      path: '/access-control-list',
      icon: 'mdi:home-outline'
    }
  ]
}

export default navigation
