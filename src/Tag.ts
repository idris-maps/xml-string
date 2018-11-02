interface Attributes {
  [key: string]: string | number | boolean
}

const stringifyAttributes = (attributes: Attributes): string =>
  Object.keys(attributes)
    .map(key => ` ${key}="${String(attributes[key])}"`)
    .join('')

class Tag {
  tag: string
  constructor(tag: string) {
    this.tag = tag
  }

  private children: Tag[] = []
  public child(tag: string): Tag {
    const child = new Tag(tag)
    this.children.push(child)
    return child
  }
  public c(tag: string): Tag {
    return this.child(tag)
  }

  private attributes: Attributes = {}
  public attr(newAttributes: Attributes): Tag {
    const previousAttributes = this.attributes
    this.attributes = {
      ...previousAttributes,
      ...newAttributes,
    }
    return this
  }
  public a(newAttributes: Attributes): Tag {
    return this.attr(newAttributes)
  }

  private innerText: string = ''
  public data(innerText: string): Tag {
    this.innerText = innerText
    return this
  }

  public d(innerText: string): Tag {
    return this.data(innerText)
  }

  public outer(): string {
    return `<${this.tag}${stringifyAttributes(this.attributes)}>${this.inner()}</${this.tag}>`
  } 

  public inner(): string {
    return this.children.length > 0
      ? this.children
        .map(child => child.outer())
        .join('')
      : this.innerText
  }
}

export default Tag