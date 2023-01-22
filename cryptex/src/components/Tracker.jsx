import React from 'react'
import { motion } from 'framer-motion'

const Tracker = () => {
  return (
    <motion.div className='bg-white px-20 py-16 text-black space-y-20'
    initial={{width: 0}}
    animate={{width: '100%'}}
    exit={{x: window.innerWidth, transition: {duration: 0.1}}}
    >
        <div className='space-y-5'>
            <h2 className='font-bold text-2xl lg:text-4xl'>
                Track Ethereum transactions: How to do it?
            </h2>
            <p className='text-base text-gray-500'>
                If you want to navigate the Ethereum network, it is important to learn the basics like knowing how to track Ethereum transactions. So, if you know how to send and receive transactions it is great, but monitoring them will save you a lot of headaches and even save you money. Do you want to know how to do it? Keep reading! 
            </p>
        </div>

        <div className='space-y-5'>
            <h2 className='font-bold text-2xl lg:text-4xl'>
                Eth Blockchain explorers: What can you check?
            </h2>
            <p>
                First, it must be known that different blockchain explorers have the same function as Google: allow users to have access to valuable information. But, they are only focused on data about cryptocurrencies and blockchain. For instance, users using Ethereum blockchain explorers can get the:
            </p>
            <ul className='list-disc space-y-2'>
                <li>Detailed information about a specific wallet address.</li>
                <li>Status of the transaction.</li>
                <li>Destination of the funds.</li>
                <li>Maximum amount of gas that is involved in the transactions (gas limit).</li>
                <li>Amount of blocks mined since the transaction is confirmed.</li>
                <li>The lowest fee required to be allowed to interact with the Ethereum blockchain (base fee).</li>
                <li>The price of ETH.</li>
            </ul>
        </div>

        <div className='space-y-5'>
            <h2 className='font-bold text-2xl lg:text-4xl'>
                Popular Ethereum Blockchain Explorer
            </h2>
            <p>
                Some of the most popular blockchain explorers to track transactions are the following:
            </p>
            <ul className='list-decimal space-y-2'>
                <li>
                    Etherscan: This is the most popular of all when it comes to the Ethereum blockchain network. It allows users to have access to a wide range of data, from wallet balances to smart contracts, and more.

                </li>
                <li>
                    Blockchain.org: It is a well-known blockchain explorer of Bitcoin. It lets people access transactions, addresses, and blocks in the Bitcoin blockchain.
                </li>
                <li>
                    Tokenview: This is a blockchain explorer based in China. It is known for allowing its users to search ETH addresses on multiple blockchains. Specifically, more than 20 blockchains.
                </li>
                <li>
                    Blockchain: Similarly to Tokenview, this blockchain explorer also allows people to monitor transactions in multiple chains such as Ethereum and Bitcoin. Users can get data about the mempool size, the nodes, and the mining difficulty, among others.
                </li>

            </ul>
        </div>

        <div className='space-y-5'>
            <h2 className='font-bold text-2xl lg:text-4xl'>
                Why check crypto transactions?
            </h2>
            <p>
                Track your Ethereum transactions and activities is a must. On the one hand, it allows you to check if the transaction you made is pending or successfully completed. It will also show you the total number of blocks created since the transaction was introduced to the blockchain.
            </p>
            <p>
                On the other hand, it helps you to know the cost of the transaction. You must take into account that the amount you will need to pay to process each transaction depends on the demand. In other words, the number of participants executing transactions at a specific time. Higher the demand, the higher the cost. Therefore, tracking your Ethereum transaction will help you to also track the costs involved and determine if your gas fee is enough to trigger the confirmation process.
            </p>
        </div>
        <div className='space-y-5'>
            <h2 className='font-bold text-2xl lg:text-4xl'>
                 How to track Ethereum transactions?
            </h2>
            <p>
                Whatever blockchain explorer you use, you will always be asked to have your public address or the unique identifier of the transaction you wish to track. Once you have this information in hand, you can use any blockchain explorer and follow the next steps:
            </p>
            <ul className='list-decimal space-y-2'>
                <li>
                    On the search bar write down the transaction ID or public address and click ‘’search’’. 

                </li>

                <li>
                    If you entered using your ETH address, you will be taken to all the wallet activities. Here, you will have to navigate through these activities and choose the transaction history. Choose the transaction ID you wish to consult and have access to the details. 
                </li>
                <li>
                    If you use the transaction ID, you will be directed to a page with all the information and an overview of the transaction entered on the search bar.

                </li>

            </ul>

        </div>

        <div className='space-y-5'>
            <h2 className='font-bold text-2xl lg:text-4xl'>
                What happens if the ETH transaction fails?
            </h2>
            <p>
                A transaction may fail for various reasons, from network congestion to entering incorrect information. There are various things you can do depending on the situation:
            </p>
            <ul className='list-disc space-y-2'>
                <li>
                    The transaction fails because of an error it occurred on your behalf: the fastest and easy solution is to try again.


                </li>

                <li>
                    There is a failure due to the congestion of the network: you will need to be patient and wait hours (or even days) until the Ethereum network is less congested.
                </li>
                <li>
                    There is an error in the transaction itself: the best you can do is get in contact with the exchange and get guidance from them about how to fix and better approach this situation.

                </li>
                <li>
                    If the transaction is not successful due to low gas fees, you can resend the transaction: Transactions will remain pending if the gas fees remain below the base fee required to interact with the Ethereum blockchain. This is why it is important to confirm the gas fee reaches the minimum before making the resubmitted transaction. There will be a duplicated pending transaction, but, validators will prioritize the most recent transaction. Therefore, the resubmitted transaction will most likely be included in the blockchain. 

                </li>

            </ul>
        </div>

    </motion.div>
  )
}

export default Tracker