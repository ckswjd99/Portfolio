import { toCareer, toProjects, toWritings, toGallery } from './pageLinkers'

const menus = {
  'Career': toCareer,
  'Projects': toProjects,
  'Writings': toWritings,
  'Gallery': toGallery
}

export default menus