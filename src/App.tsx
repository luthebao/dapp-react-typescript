import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useAccount, useBalance, useToken } from 'wagmi';
import { ConnectButton } from '@rainbow-me/rainbowkit';

function App() {
    const [token, setToken] = useState("")

    const account = useAccount()

    const getToken = useToken({
        address: token as `0x${string}`
    })

    const tokenBalance = useBalance({
        address: account.address,
        token: getToken.data?.address
    })
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <main>
                    <ConnectButton />
                    <input placeholder='token' value={token} onChange={(e) => setToken(e.target.value)} />
                    {
                        getToken.data && (
                            <div>
                                <div>{getToken.data.name}</div>
                            </div>
                        )
                    }
                    {
                        tokenBalance.data && (
                            <div>
                                {tokenBalance.data.formatted}
                            </div>
                        )
                    }
                </main>

            </header>
        </div>
    );
}

export default App;
