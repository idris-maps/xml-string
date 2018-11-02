import Tag from './Tag'

export default {
  create: (tag: string): Tag => new Tag(tag)
}