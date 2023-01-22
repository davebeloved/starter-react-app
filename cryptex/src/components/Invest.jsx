import React from 'react'
import Image1 from '../assets/img/gif.gif';
import { motion } from 'framer-motion';


const Invest = () => {
  return (
    <motion.div className='px-20 text-black py-12 bg-white'
    initial={{width: 0}}
    animate={{width: '100%'}}
    exit={{x: window.innerWidth, transition: {duration: 0.1}}}
    >
        <div>
            <img src={Image1} alt="" className='w-full lg:h-[500px]'/>
        </div>
        <div className=''>
            <h2 className='py-4 text-2xl font-semibold'>
                 What to Know About Investing in Crypto Exchanges
            </h2>
            <h4 className='text-gray-700 font-bold'>
                A conversation with cryptocurrency expert Ethan Vera
            </h4>
            <p>
                With investors more bullish than ever on cryptocurrency, interest in the decentralized virtual currency continues to grow. For those who are relatively new to investing, crypto can seem daunting, even downright scary.

                Cryptocurrency is a decentralized digital or virtual currency, secured by cryptography, making it virtually counterfeit-proof. It is limited in its supply, which helps give crypto value and makes it nearly impossible to counterfeit or double-spend.
            </p>
            <p>
                Today, most buying and selling of cryptocurrency takes place through a cryptocurrency exchange, much like a stock exchange for securities. An exchange is an intermediary between a buyer and a seller of Bitcoin, the most well-known cryptocurrency, or any other type of cryptocurrency.

                To help remove some of the mystery surrounding cryptocurrencies as an investment, Investopedia spoke with Ethan Vera, co-founder of Luxor and Viridi Funds as well as a member of Investopedia’s Financial Review Board. Vera’s expertise in cryptocurrency and crypto mining stems from his immense experience in the space. Investopedia spoke with Vera about crypto in general and how to access cryptocurrency as an investment. Our edited conversation follows.
            </p>
            <h2 className='py-4 text-2xl font-semibold'>
                 Reasons to Invest in Crypto
            </h2>

            <p>
                    Investopedia: First, what makes cryptocurrency a good investment?

                    Vera: Let’s start with an example. In terms of investing, among cryptocurrencies, Bitcoin is the most stable and least volatile digital currency. It should be thought of in a similar manner to a long-term equity investment, not like fixed income. In that respect, Bitcoin is similar to a large-cap stock. Of interest these days, Bitcoin is considered an excellent inflationary hedge. As a commodity, Bitcoin is the most regulated cryptocurrency and the least risky, since Bitcoin’s protocols limit risk.

                    Investopedia: Aside from Bitcoin, what are some other cryptocurrencies, and what makes them worth considering?
                    Vera: The Ethereum blockchain network and its cryptocurrency, Ether, are popular because of the applications being built on top of it. Uniswap and Solana are other exchange and protocols gaining significant volume. Many altcoins, meaning cryptocurrencies other than Bitcoin, function as more of a technology play. Their innovations are really interesting; however, sometimes this is at the expense of decentralized governance.
            </p>
            <h2 className='py-4 text-2xl font-semibold'>
                The Danger of a 51% Attack
            </h2>
            <p>
            
                    Investopedia: What do you mean by disruption?

                    Vera: One type is a hypothetical, for now, disruption known as a 51% attack. A 51% attack is when a group of miners controlling more than 50% of a network’s mining hash rate or computing power could prevent new transactions, reverse transactions, and double-spend coins. While it might not destroy the system, it could cause a lot of damage.

                    Obviously, the best way to prevent a 51% attack is to make sure nobody controls more than 50%. In Bitcoin mining, the cost and difficulty of hardware and energy procurement make this very unlikely. The network is very resilient to this type of attack.
            </p>
            <h2 className='py-4 text-2xl font-semibold'>
                 The Role of an Exchange
            </h2>
            <p>
           
                    Investopedia: Can you give us a short background on the history of how exchanges came into being?

                    Vera: Sure. In the early days, there were no exchanges. The general public didn’t even know about Bitcoin. The only way to obtain Bitcoin was by mining it yourself or through a peer-to-peer transfer with someone else. Then came over-the-counter (OTC) exchanges, at first unregulated, then more and more regulated as time went on. In 2015, the Coinbase exchange was born. Today, Coinbase is among dozens of exchanges operating in the U.S. and globally.
                    Investopedia: What do investors need to know about exchanges?
                    Vera: First of all, the major centralized exchanges, like Coinbase, Kraken, and others, are heavily regulated. The first thing to know before choosing an exchange for investors is to check if it can legally operate in your jurisdiction. Even with well-regulated legal exchanges, don’t put all of your investment in one exchange at the same time. In other words, spread out your investments and hold as much as possible in cold storage. There are many bad actors in crypto, and the best way to avoid them is to deal with well-known regulated exchanges, your own wallets, and trusted custodians.
            </p>
            <h2 className='py-4 text-2xl font-semibold'>
                 Centralized vs. Decentralized
            </h2>
            <p>
           
                    Investopedia: Can you explain the difference between centralized and decentralized crypto exchanges?

                    Vera: Centralized exchanges, like Coinbase, are regulated, easy to use, reliable, and allow trading of digital for fiat currencies (i.e., dollars). However, they require you to trust your counterparty. Decentralized exchanges are controlled by the users, sometimes at the expense of user experience.

                    Newcomers to crypto should start with centralized exchanges, due to the ease of use, and then experiment with decentralized ones. There are plenty of options, including trading actual crypto, ETFs, and investing in mining companies, including mining ETFs. One example is the RIGZ mining ETF from Viridi.
            </p>
            <h2 className='py-4 text-2xl font-semibold'>
                Level of Involvement
            </h2>
            <p>
          
                    Investopedia: What are some questions investors should ask themselves before selecting an exchange?

                    Vera: First, what percent of my portfolio do I want to allocate to cryptocurrency? It should be some but certainly not an overwhelming amount. The best answer is “not more than you can afford to lose.”

                    Many experts suggest that no more than 2%–3% of your portfolio should be allocated to cryptocurrency.

                    In terms of cryptocurrency, remember that Bitcoin is the safest, so I would definitely suggest Bitcoin until you have a deeper understanding of this type of investing. Keep in mind that this part of your portfolio is probably long term, just like other equities, 10, 20, or 30 years. Ask yourself, how involved do I want to be? Casual, moderate, deep dive? That has an impact on the type of investing you want to do. Mining, for example, is more complicated than buying cryptocurrency or an ETF.
            </p>

            <h2 className='py-4 text-2xl font-semibold'>
                Where to Get Help
            </h2>
            <p>
                    Investopedia: What about support and information? Where do investors go to avoid these bad actors?

                    Vera: Most major exchanges offer very good support for investors, including advice. Any reputable exchange has a good support network and can help even the most novice investors. It’s important to do research on your own and not pay for consulting from unknown sources.

                    Information and advice are available for free on the internet. One example is www.lopp.net, run by Jameson Lopp, a self-described “professional cyberpunk” whose primary interest is Bitcoin security and making it easier for people to “take custody of their bitcoin and manage their private keys.”
            </p>
        </div>
    </motion.div>
  )
}

export default Invest