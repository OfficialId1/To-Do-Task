import {useState} from 'react';

export default function useFormState() {
    const [state, setState] = useState();

    function handleChange (e) {
        setState({
            ...state,
            [e.target.name] : e.target.value
        })
    }

  return (
    state,
    handleChange
  )
}
