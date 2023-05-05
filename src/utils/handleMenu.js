import layout from '@/layout/index.vue'

const modules = import.meta.glob('@/views/**/*.vue')

export function handleMenu(list) {
  list.map((item) => {
    let obj = {
      title: '',
      icon: '',
    }
    obj.title = item.name
    if (item.children) {
      if (item.parentId) {
        item.path = item.component
        item.component = ''
        // item.path = item.value
        obj.icon = ''
      } else {
        item.component = layout
        item.path = '/' + item.value
        obj.icon = item.icon
      }
      item.children = handleMenu(item.children)
    } else {
      item.component = item.component
      // item.path = item.value
      item.path = '/' + item.component
      item.component = modules['/src/views/' + item.component + '/index.vue']
    }

    // console.log(modules)
    item.meta = obj
    delete item.id
    delete item.value
    return item
  })
  return list
}
