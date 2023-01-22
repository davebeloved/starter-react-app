import React from 'react'
import chart1 from '../assets/img/chart1.png'
import chart2 from '../assets/img/chart2.png'
import chart from '../assets/img/chart.png'
import chart3 from '../assets/img/chart3.png'
import chart4 from '../assets/img/chart4.png'
import chart5 from '../assets/img/chart5.png'
import chart6 from '../assets/img/chart6.png'
import chart7 from '../assets/img/chart7.png'
import chart8 from '../assets/img/chart8.png'
import chart9 from '../assets/img/chart9.png'
import chart10 from '../assets/img/chart10.png'
import { motion } from 'framer-motion'

const Statistics = () => {
  return (
    <motion.div className='bg-white px-20 py-20 text-black space-y-20'
    initial={{width: 0}}
    animate={{width: '100%'}}
    exit={{x: window.innerWidth, transition: {duration: 0.1}}}
    >
        <div className='space-y-5'>
            <h2 className='font-bold text-3xl'>
                 How many Ethereum transactions are there?
            </h2>
            <p>
            The total number of transactions in Q1 2022 was 105.58 million. Compared to the 116.16 million transactions in Q4 2021, that represents a decrease of 9.1%. 
            </p>
            <img src={chart1} alt="" />
        </div>
        <div className='space-y-5'>
            <h2 className='font-bold text-3xl'>
                How many Ethereum smart contracts are there?
            </h2>
            <p>
                 The total number of smart contracts created in Q1 2022 was 1.45 million smart contracts.

                This is a 24.7% increase in comparison to the total smart contracts created in the fourth quarter of 2021, which was 1.16 million.
            </p>
            <img src={chart2} alt="" />
            <p>
                The crypto market cap in Q1 2022 was down compared to Q4 2021, but the number of smart contracts that were created during this period points to an increase in development activity despite less transaction volume.
            </p>
        </div>
        <div className='space-y-5'>
            <h2 className='font-bold text-3xl'>
                 How much is the average daily Ethereum gas fee?
            </h2>
            <p>
                The average transaction fee in Q1 2022 was 0.0079 ETH, or $16.75. Compared to a Q4 2021 transaction fee of 0.0090 ETH, or $19.10, this represents a 12.2% net decrease.
                <br />
                With much of Q1 spent in a down market, one reason why the average gas price is down is that there is less on-chain activity occurring in Q1, which influences the cost to send a transaction.
            </p>
        </div>

        <div className='space-y-5'>
            <h2 className='font-bold text-3xl'>
                 How many daily active Ethereum addresses are there?
            </h2>
            <p>
                The number of average daily active addresses in Q1 2022 was 329,900. Compared to 400,040 in Q4 2021, that’s a 17.5% decrease. There was a noticeable increase in activity towards the end of the quarter in late February and March.
            </p>
            <img src={chart} alt="" />
            <p>
                When markets correct, it is typical that the total number of wallets actively trading crypto, NFTs, and participating in the blockchain gaming sector decreases to reflect changing sentiments.
            </p>
        </div>

        <div className='space-y-5'>
            <h2 className='font-bold text-3xl'>
                How much is the total value locked (TVL) for Ethereum DeFi?
            </h2>
            <img src={chart3} alt="" />
            <p>
                The DeFi TVL was $89.5 billion in Q1 2022. Compared to $154.2 billion in Q4 2021, that’s an approximate decrease in volume of 42%. 
                <br /> 
                This significant decrease in TVL is likely a response to a market-wide correction, or selloff, where prices have dipped. Typically this leads people to unlock their assets so they can have more flexibility during uncertain market conditions.
            </p>
        </div>

        <div className='space-y-5'>
            <h2 className='font-bold text-3xl'>
                How much is Ethereum’s revenue?
            </h2>
            <p>

                The Ethereum network’s revenue in Q1 2022 was 834,874 ETH or around 1.679 billion dollars. Compared to 2.105 billion dollars in Q4 2021, that’s around a 20.2% decrease. This means there was a decrease in revenue for miners, who earn the vast majority of ETH Network revenue.
            </p>
            <img src={chart4} alt="" />
        </div>

        <div className='space-y-5'>
            <h2 className='font-bold text-3xl'>
                How much ETH was burned?
            </h2>
            <p>
                A total of 728,729 ETH or around 1.671 billion dollars was burned in Q1 2022. This means that all of these tokens were permanently moved from circulation, reducing the overall supply.
            </p>
            <img src={chart5} alt="" />
        </div>
        <div className='space-y-5'>
            <h2 className='font-bold text-3xl'>
                How much ETH is mined?
            </h2>
            <p>
            A total of 404,657 ETH or around 928 million dollars were mined in Q1 2022.
            </p>
            <img src={chart6} alt="" />
        </div>

        <div className='space-y-5'>
            <h2 className='font-bold text-3xl'>
                What percentage of Ethereum transactions are EIP-1559?
            </h2>
            <p>
                ‍Around 77.2% of all Ethereum transactions in Q1 2022 were EIP-1559 transactions (Type 2 transactions) compared to Type 0 transactions which use the original gas fee structure.
            </p>
            <img src={chart7} alt="" />
        </div>
        <div className='space-y-5'>
            <h2 className='font-bold text-3xl'>
                How many Beacon chain validators are there on Ethereum?
            </h2>
            <p>
                There were 341,123 validators in Q1 2022. Compared to 275,830 validators in Q4 2021, this represents a 23.7% increase in the total number of Ethereum Beacon Chain validators.
            <br />
                With the Ethereum Proof-of-Stake merge approaching later in 2022, we are seeing an increased number of validators joining the Ethereum Beacon chain to help secure the new PoS network
            </p>
            <img src={chart8} alt="" />
        </div>
        <div className='space-y-5'>
            <h2 className='font-bold text-3xl'>
                How much do Beacon chain validators earn?
            </h2>
            <p>
                The average daily income across all validators in Q1 2022 was around 1.5k ETH. Compared to 1.4k ETH last quarter, that’s around a 7.1% increase. With more Beacon chain validators joining the network, the total income each validator earns is decreasing.
            </p>
            <img src={chart9} alt="" />
        </div>
        <div className='space-y-5'>
            <h2 className='font-bold text-3xl'>
                What are the top Ethereum projects by total transactions?
            </h2>
            <p>
                The top Ethereum projects by total number of transactions last quarter were OpenSea, Uniswap, Coinbase, 0x, StrongNode, Polygon, and LooksRare. All of these top Ethereum projects saw over 1 million transactions with OpenSea topping the list with 7,840,000 million transactions in Q1 2022.
            </p>
            <img src={chart10} alt="" />
        </div>
        <div className='space-y-5'>
            <h2 className='font-bold text-3xl'>
                NFT Marketplaces and DEXs See Continued Growth
            </h2>
            <p>
                Compared to 4.85 million in Q4 2022, Opensea, the leading NFT marketplace, demonstrated a 61.6% increase in the total number of transactions, a signal for increasing interest in NFTs (non-fungible tokens), which were one of the largest trends in Q1 2022.
                <br />
                This increase in NFT activity is corroborated by the sudden rise of Looksrare, a new NFT marketplace, which jumped to the top 10 of NFT marketplaces this quarter, with over one million transactions.
                <br />
                Another notable trend was an increase in volume in decentralized exchanges (DEXs) like Uniswap v3, which went from 2.73 million transactions in Q4 2021 to 3.92 million in Q1 2022, a 43.6% increase.
            </p>
            <img src={chart10} alt="" />
        </div>
    </motion.div>
  )
}

export default Statistics
