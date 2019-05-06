
interface IRenderPropsProps<T> {
  children: (props: T) => JSX.Element
}

export const makeRenderPropsComponent = <T>() => {
  return (props: T & IRenderPropsProps<T>) => {
    return props.children(props)
  }
}
