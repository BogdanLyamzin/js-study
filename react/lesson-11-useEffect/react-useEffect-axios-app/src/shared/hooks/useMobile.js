import useWindowWidth from "./useWindowWidth";

const useMobile = ()=> {
    const width = useWindowWidth();
    return width < 724;
}

export default useMobile;