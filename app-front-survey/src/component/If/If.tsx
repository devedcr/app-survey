interface Props {
    show: boolean
    component: any;
    params?: object
}

function If(props: Props) {
    const { show, params = {}, component: Component } = props;
    return (show) ? <Component {...params} /> : null;
}

export default If;