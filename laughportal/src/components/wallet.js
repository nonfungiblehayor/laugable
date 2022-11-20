import React from 'react'

function Wallet(props) {
    return <div className='wallet'>
        <p>
        This application is currently available on the Etherum
        Rinkeby testnet only.
        </p>
        <button onClick={props.task}>
            Connect wallet
        </button>
    </div>
}

export default Wallet