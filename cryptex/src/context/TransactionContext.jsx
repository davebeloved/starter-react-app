
import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';
import { contractABI, contractAddress } from '../utils/constants';


export const TransactionContext = React.createContext();

const {ethereum} = window;

const getEthereumContract = () => {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    const transactionContract = new ethers.Contract(contractAddress, contractABI, signer);

    return transactionContract;
}






// if (accounts.length) 
//     setCurrentAccount(accounts[0]);

export const TransactionProvider = ({children}) => {

    const [currentAccount, setCurrentAccount] = useState('');
    const [formData, setFormData] = useState({addressTo: '', amount: '', keyword: '', message: ''});
    const [isLoading, setIsLoading] = useState(false);
    const [transactionCount, setTransactionCount] = useState(localStorage.getItem('transactionCount'));
    const [transactions, setTransactions] = useState([]);
    const [defaultAccount, setDefaultAccount] = useState(null);
    const [balance, setBalance] = useState(null)

    const handleChange = (e, name) => {
        setFormData((prevState) => ({...prevState, [name]: e.target.value}));
    }

    const getAllTransactions = async() => {
        try {
          
            if (!ethereum) return alert('please install MetaMask');
            const transactionContract = getEthereumContract();
            const availableTransactions = await transactionContract.getAllTransactions();
            const structuredTransactions = await availableTransactions.map((transaction) => ({
                addressTo: transaction.reciever,
                addressFrom: transaction.sender,
                timestamp: new Date(transaction.timestamp.toNumber() * 1000).toLocaleString(),
                message: transaction.message,
                keyword: transaction.keyword,
                amount: parseInt(transaction.amount._hex) / (10 ** 18)
            }))

            setTransactions(structuredTransactions);

            console.log(structuredTransactions);
        } catch (error) {
            console.log(error);
        }
    }

    const checkIfWalletIsConnected = async () => {
        try {
                if (!ethereum) return alert('please install MetaMask');
                const accounts = await ethereum.request({method: 'eth_accounts'});

                if (accounts.length) {
                    setCurrentAccount(accounts[0]);
                    getAllTransactions();
                } else{
                   
                    console.log("No Account found"); 
                }
            

                    const provider = new ethers.providers.Web3Provider(window.ethereum);
                    const address =  '0x75AC2E0Bf32827396dB88C23284eD7c15B34Fc95';
                    provider.getBalance(address).then((balance) => {
                    // convert a currency unit from wei to ether
                    const balanceInEth = ethers.utils.formatEther(balance)
                    console.log(`balance: ${balanceInEth} ETH`)
                    })

        } catch (error) {
            console.log(error);
            throw new Error("No Ethereum object.");
        }
        // console.log(accounts);
      
    }

    const checkIfTransactionExists = async () => {
        try {
            const transactionContract = getEthereumContract();
           const transactionCount = await transactionContract.getTransactionCount();
           window.localStorage.setItem('transactionCount', transactionCount);
        } catch (error) {
            console.log(error);
            throw new Error("No Ethereum object.");
        }
    }

    const connectWallet = async () => {
        try {
            if (!ethereum) return alert('please install MetaMask');
            const accounts = await ethereum.request({method: 'eth_requestAccounts'});
            setCurrentAccount(accounts[0]);
            
    

            window.location.reload();
        } catch (error) {
            window.location.reload();
            console.log(error);
            throw new Error("No Ethereum object.");
        }
    }

    const sendTransaction = async () => {
        try {
            if (!ethereum) return alert('please install MetaMask');
            const { addressTo, amount, keyword, message } = formData;
            const transactionContract = getEthereumContract();
            const parsedAmount = ethers.utils.parseEther(amount);

            await ethereum.request({
            method: 'eth_sendTransaction',
            params: [{
                from: currentAccount,
                to: addressTo,
                gas: '0x5208',
                value: parsedAmount._hex,
            }]
            })

            const transactionHash = await transactionContract.addToBlockchain(addressTo, parsedAmount, message, keyword);
            
            setIsLoading(true);
            console.log(`Loading - ${transactionHash.hash}`);
            await transactionHash.wait();
            setIsLoading(false);
            console.log(`Success - ${transactionHash.hash}`);

            const transactionCount = await transactionContract.getTransactionCount();
            setTransactionCount(transactionCount.toNumber());
            window.location.reload();
            
        } catch (error) {
            console.log(error);
            throw new Error("No Ethereum object.");
        }
    }

    const accountChangeHandler = (newAccount) => {
        setDefaultAccount(newAccount);
    
    }
 

    const chainChangedHandler = () => {
        window.location.reload();
    }

    window.ethereum.on('accountsChanged', connectWallet);
    window.ethereum.on('chainChanged', chainChangedHandler);
    
    
    useEffect( () => {
        checkIfWalletIsConnected();
        checkIfTransactionExists();
    }, []);
    
    return(
        <TransactionContext.Provider value={{ connectWallet, currentAccount, formData, setFormData, sendTransaction, handleChange, transactions }}>
            {children}
        </TransactionContext.Provider>
    );
}