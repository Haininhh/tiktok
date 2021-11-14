import { useContext } from 'react';
import Context from "./Context";

export const useStore = () => {
    const [state, dispatch] = useContext<any>(Context)

    return [state, dispatch]
}