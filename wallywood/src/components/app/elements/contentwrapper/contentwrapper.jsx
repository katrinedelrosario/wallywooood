const ContentWrapper = props => {

    document.title = props.title

    if(props.description) {
        document.querySelector('meta[name="description"]')
            .setAttribute('content', props.description)
      }

    return (
        <>
            <h1>{props.title}</h1>
            {props.subtitle && (
                <h2>{props.subtitle}</h2>
            )}
            <div>{props.children}</div>
        </>
    )
}

export { ContentWrapper }