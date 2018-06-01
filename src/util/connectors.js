import { Connect, SimpleSigner } from 'uport-connect'

// Connect to our new uPort application
export let uport = new Connect('ReactUport Box', {
    clientId: '2oznSt61JGLFqE17uF3BpLXi5qUZa9EJyYa',
    network: 'ropsten',
    signer: SimpleSigner('1b33a30bff18cddb94f71eccff6a69e1337220cca0331ed964d9f668d38d749b')
})

export const web3 = uport.getWeb3()
// export let uport = new Connect('TruffleBox')