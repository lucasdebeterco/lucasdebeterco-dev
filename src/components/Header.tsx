import { useState } from 'react';

export function Header() {
    const [state, setState] = useState(false)
    console.log(state)

    return (
        <>
            <nav>Header</nav>
            <button onClick={() => setState((prevState) => !prevState)}>
                Use State
            </button>
        </>

    )
}