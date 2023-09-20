import { useState } from "react"

export const useForm= (initialForm)=>{
    const [formState, setState] = useState(initialForm);

    const onInputChange= ({target})=>{
        const {name,value} = target;
        setState({
            ...formState,
            [name]: value
        });
    }

    const onResetForm= ()=>{
        setState(initialForm);
    }

    return {
        ...formState,
        onInputChange,
        onResetForm
    }


}