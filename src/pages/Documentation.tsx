import React, { useState, useEffect } from 'react';
import { ArrowRight, BookOpen, Shield, Cpu, BarChart2, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Documentation() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsLoaded(true);

    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-white text-black relative overflow-hidden">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 h-24 z-50">
        <div className="max-w-7xl mx-auto px-6 h-full">
          <div className="grid grid-cols-3 h-full items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img 
                src="/images/logo.png" 
                alt="Verbot Logo" 
                className="w-24 h-24 object-contain transform hover:scale-105 transition-transform duration-300"
              />
            </Link>

            {/* Social Links - Centered */}
            <div className="flex justify-center items-center space-x-8">
              <a 
                href="https://twitter.com/VerbotAi" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center space-x-2 text-gray-600 hover:text-black transition-colors"
              >
                <div className="p-2 rounded-lg group-hover:scale-110 transition-transform">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </div>
                <span className="text-sm font-medium">VerbotAi</span>
              </a>
              <a 
                href="https://t.me/verbotai" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center space-x-2 text-gray-600 hover:text-black transition-colors"
              >
                <div className="p-2 rounded-lg group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <span className="text-sm font-medium">Telegram</span>
              </a>
            </div>

            {/* Empty div for grid balance */}
            <div></div>
          </div>
        </div>
      </div>

      {/* Enhanced Grid Background */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Primary Grid */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(0, 0, 0, 0.05) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0, 0, 0, 0.05) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
            transform: `
              perspective(1000px)
              rotateX(${mousePosition.y * 2}deg)
              rotateY(${mousePosition.x * 2}deg)
              translateZ(0)
              scale(1.1)
            `,
            transformOrigin: 'center center',
            transition: 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
          }}
        />

        {/* Secondary Grid */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(0, 0, 0, 0.08) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0, 0, 0, 0.08) 1px, transparent 1px)
            `,
            backgroundSize: '160px 160px',
            transform: `
              perspective(1000px)
              rotateX(${mousePosition.y * 3}deg)
              rotateY(${mousePosition.x * 3}deg)
              translateZ(0)
              scale(1.2)
            `,
            transformOrigin: 'center center',
            transition: 'transform 1s cubic-bezier(0.4, 0, 0.2, 1)'
          }}
        />

        {/* Grid Highlight */}
        <div 
          className="absolute inset-0"
          style={{
            background: `radial-gradient(
              circle at ${50 + mousePosition.x * 30}% ${50 + mousePosition.y * 30}%,
              rgba(0, 0, 0, 0.03) 0%,
              transparent 60%
            )`,
            transition: 'all 0.5s ease-out'
          }}
        />
      </div>

      <div className="pt-32 pb-20 relative min-h-screen">
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <div className={`mb-16 transition-all duration-1000 delay-500 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Documentation
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Welcome to Verbot, your AI-driven trading companion on Solana and BNB Chain. Designed for seamless interaction, Verbot leverages cutting-edge natural language understanding to help you manage trades, receive personalized advice, and execute orders securely. By combining advanced AI technology with robust security protocols, Verbot offers a streamlined and safe trading experience. Currently, Verbot is in closed Beta, providing limited access while we refine and improve its features.
              </p>
            </div>

            {/* Getting Started Section */}
            <div className="space-y-16">
              <div className="animate-on-scroll opacity-0 translate-y-4">
                <h2 className="text-2xl font-semibold mb-6 text-gray-800">Getting Started</h2>
                <div className="grid gap-4">
                  {[
                    { title: 'Navigate to the Agent', description: 'Begin by clicking on "Launch App" from the Verbot dashboard.', icon: <BookOpen /> },
                    { title: 'Connect Your Wallet', description: 'Link your preferred wallet, such as Solflare, Phantom, or other compatible options.', icon: <Shield /> },
                    { title: 'Authenticate Your Session', description: 'Sign a secure message using your wallet to confirm your identity.', icon: <Shield /> },
                    { title: 'Sign Your Chain Agent', description: 'Approve the Solana or BNB Chain Agent for integration with their respective APIs.', icon: <Cpu /> },
                    { title: 'Start Trading', description: 'Chat with Verbot to execute trades, analyze markets, and manage your portfolio.', icon: <MessageCircle /> }
                  ].map((step, index) => (
                    <div key={index} className="bg-white/50 border border-black/10 rounded-lg p-4 hover:border-blue-400/30 transition-all">
                      <div className="flex items-start space-x-4">
                        <div className="bg-blue-500/10 p-2 rounded-lg">
                          {React.cloneElement(step.icon, { className: "w-5 h-5 text-blue-600" })}
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-800 mb-1">{step.title}</h3>
                          <p className="text-gray-600 text-sm">{step.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Features Section */}
              <div className="animate-on-scroll opacity-0 translate-y-4">
                <h2 className="text-2xl font-semibold mb-6 text-gray-800">Key Features</h2>
                <div className="space-y-8">
                  {/* Portfolio Management */}
                  <div className="bg-white/50 border border-black/10 rounded-lg p-6">
                    <h3 className="text-xl font-medium text-gray-800 mb-4">Portfolio Management</h3>
                    <p className="text-gray-600 mb-4">Verbot empowers you to maintain full control over your portfolio with ease:</p>
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2 text-gray-600">
                        <ArrowRight className="w-4 h-4 text-blue-600" />
                        <span>View Current Positions: Check your open positions across spot and perpetual markets</span>
                      </li>
                      <li className="flex items-center space-x-2 text-gray-600">
                        <ArrowRight className="w-4 h-4 text-blue-600" />
                        <span>View Open Orders (Limit): See all limit orders you have placed</span>
                      </li>
                      <li className="flex items-center space-x-2 text-gray-600">
                        <ArrowRight className="w-4 h-4 text-blue-600" />
                        <span>Cancel Orders (Limit): Effortlessly cancel any open limit orders</span>
                      </li>
                    </ul>
                  </div>

                  {/* Order Execution */}
                  <div className="bg-white/50 border border-black/10 rounded-lg p-6">
                    <h3 className="text-xl font-medium text-gray-800 mb-4">Order Execution</h3>
                    <div className="space-y-6">
                      {/* Spot Trading */}
                      <div>
                        <h4 className="text-lg font-medium text-gray-800 mb-3">Spot Trading</h4>
                        <ul className="space-y-2">
                          <li className="flex items-center space-x-2 text-gray-600">
                            <ArrowRight className="w-4 h-4 text-blue-600" />
                            <span>Market Buy/Sell Orders: Execute instant buy or sell trades at the current market price</span>
                          </li>
                          <li className="flex items-center space-x-2 text-gray-600">
                            <ArrowRight className="w-4 h-4 text-blue-600" />
                            <span>Limit Buy/Sell Orders: Set specific price levels to buy or sell tokens</span>
                          </li>
                          <li className="flex items-center space-x-2 text-gray-600">
                            <ArrowRight className="w-4 h-4 text-blue-600" />
                            <span>Market Close Positions: Quickly close open positions at market price</span>
                          </li>
                        </ul>
                      </div>

                      {/* Perpetual Trading */}
                      <div>
                        <h4 className="text-lg font-medium text-gray-800 mb-3">Perpetual Trading</h4>
                        <ul className="space-y-2">
                          <li className="flex items-center space-x-2 text-gray-600">
                            <ArrowRight className="w-4 h-4 text-blue-600" />
                            <span>Market Long/Short Orders: Open leveraged long or short positions at market price</span>
                          </li>
                          <li className="flex items-center space-x-2 text-gray-600">
                            <ArrowRight className="w-4 h-4 text-blue-600" />
                            <span>Limit Long/Short Orders: Define specific price levels for leveraged positions</span>
                          </li>
                          <li className="flex items-center space-x-2 text-gray-600">
                            <ArrowRight className="w-4 h-4 text-blue-600" />
                            <span>Take Profit/Stop Loss (TP/SL): Set TP/SL conditions for perpetual positions</span>
                          </li>
                          <li className="flex items-center space-x-2 text-gray-600">
                            <ArrowRight className="w-4 h-4 text-blue-600" />
                            <span>Market Close Positions: Instantly close any open perpetual positions</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Market Analysis */}
                  <div className="bg-white/50 border border-black/10 rounded-lg p-6">
                    <h3 className="text-xl font-medium text-gray-800 mb-4">Market Analysis</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center space-x-2 text-gray-600">
                        <ArrowRight className="w-4 h-4 text-blue-600" />
                        <span>Chart Display: View multi-token charts to monitor market trends</span>
                      </li>
                      <li className="flex items-center space-x-2 text-gray-600">
                        <ArrowRight className="w-4 h-4 text-blue-600" />
                        <span>Chart Analysis: Ask our agent to analyze the key levels on a chart</span>
                      </li>
                      <li className="flex items-center space-x-2 text-gray-600">
                        <ArrowRight className="w-4 h-4 text-blue-600" />
                        <span>Get Token Prices: Instantly retrieve current market prices for any token</span>
                      </li>
                      <li className="flex items-center space-x-2 text-gray-600">
                        <ArrowRight className="w-4 h-4 text-blue-600" />
                        <span>Analyze Your Portfolio: Understand your holdings and performance</span>
                      </li>
                      <li className="flex items-center space-x-2 text-gray-600">
                        <ArrowRight className="w-4 h-4 text-blue-600" />
                        <span>Spot Token Data: Access key metrics such as daily market cap, daily volume, and 24-hour price changes</span>
                      </li>
                      <li className="flex items-center space-x-2 text-gray-600">
                        <ArrowRight className="w-4 h-4 text-blue-600" />
                        <span>Perpetual Token Data: Review daily market cap, volume, and 24-hour price changes for perpetual tokens</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Multi-Action Prompts Section */}
              <div className="animate-on-scroll opacity-0 translate-y-4">
                <h2 className="text-2xl font-semibold mb-6 text-gray-800">Multi-Action Prompts</h2>
                <div className="bg-white/50 border border-black/10 rounded-lg p-6">
                  <p className="text-gray-600 mb-4">
                    Combine multiple features and commands into a single prompt to save time and enhance productivity.
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <code className="text-purple-600 font-medium block mb-2">
                      "Split all my USDC to buy the same amount of every AI-related spot token with more than $2M market cap and $500K daily volume."
                    </code>
                  </div>
                </div>
              </div>

              {/* Security Section */}
              <div className="animate-on-scroll opacity-0 translate-y-4">
                <h2 className="text-2xl font-semibold mb-6 text-gray-800">Security</h2>
                <div className="bg-white/50 border border-black/10 rounded-lg p-6">
                  <div className="grid gap-4">
                    {[
                      { title: "Agent Signing", description: "By design, the Solana and BNB Chain Agents cannot withdraw funds. This ensures a safe trading experience." },
                      { title: "Wallet Signature Authentication", description: "Every session requires a wallet signature (no fee) for user authentication. This guarantees no one can impersonate you or access your account without your approval." },
                      { title: "Limited Access", description: "The Agent can only place or cancel orders—it cannot withdraw funds or access your wallet." },
                      { title: "Private Keys", description: "Your private keys remain secure and uncompromised." }
                    ].map((item, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="bg-blue-500/10 p-2 rounded-lg">
                          <Shield className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-800 mb-1">{item.title}</h3>
                          <p className="text-gray-600 text-sm">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Example Usage Section */}
              <div className="animate-on-scroll opacity-0 translate-y-4">
                <h2 className="text-2xl font-semibold mb-6 text-gray-800">Example Usage</h2>
                <div className="space-y-6">
                  {/* Simple Commands */}
                  <div className="bg-white/50 border border-black/10 rounded-lg p-6">
                    <h3 className="text-xl font-medium text-gray-800 mb-4">Simple Commands</h3>
                    <div className="space-y-4">
                      {[
                        { command: 'Buy X USDC of SOL', description: 'Instantly purchase SOL tokens using a specified amount of USDC.' },
                        { command: 'Long SOL x3 with 30 USDC', description: 'Open a 3x leveraged long position on SOL using 30 USDC.' },
                        { command: 'Analyze BTC chart in the last month with 4h candles', description: 'Retrieve a detailed chart analysis of BTC for the specified timeframe.' },
                        { command: "What's current X price?", description: 'Get the latest market price for any token.' },
                        { command: "What spot tokens with less than X$ marketcap have more than X$ volume today?", description: 'Identify and filter spot tokens based on specified criteria.' }
                      ].map((example, index) => (
                        <div key={index} className="bg-gray-50 p-4 rounded-lg">
                          <code className="text-blue-600 font-medium block mb-2">{example.command}</code>
                          <p className="text-gray-600 text-sm">{example.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Complex Commands */}
                  <div className="bg-white/50 border border-black/10 rounded-lg p-6">
                    <h3 className="text-xl font-medium text-gray-800 mb-4">Complex Commands</h3>
                    <p className="text-gray-600 mb-4">
                      These examples showcase multi-prompt interaction, highlighting Verbot's AI memory capabilities. However, each can also be executed as a single prompt for convenience:
                    </p>
                    <div className="space-y-4">
                      {[
                        {
                          command: 'Buy X USDC of SOL > Set a sell limit order for all my SOL at +50% current price',
                          description: 'Purchase SOL and immediately set a limit sell order.'
                        },
                        {
                          command: 'Long BTC x2 with all my USDC > Set a TP on my BTC long at +30% current price and a SL at -20%',
                          description: 'Open a leveraged position and configure take-profit/stop-loss levels.'
                        },
                        {
                          command: 'What spot tokens are AI-related? > Buy X USDC of each of these',
                          description: 'Identify AI-related tokens and purchase them in one action.'
                        },
                        {
                          command: 'Analyze BTC, SUI, and SOL chart > Long the most bullish one with $30 USDC in x2',
                          description: 'Perform multi-chart analysis and act on the insights.'
                        },
                        {
                          command: 'Use all my USDC to buy an equal amount of every AI-related spot token with less than $5M market cap and more than $500K daily volume',
                          description: 'Execute a diversified investment strategy in a single prompt.'
                        }
                      ].map((example, index) => (
                        <div key={index} className="bg-gray-50 p-4 rounded-lg">
                          <code className="text-purple-600 font-medium block mb-2">{example.command}</code>
                          <p className="text-gray-600 text-sm">{example.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Closing Section */}
            <div className="mt-16 text-center">
              <p className="text-lg text-gray-600">
                Verbot is redefining trading with AI-driven solutions, robust security, and unparalleled simplicity. Together, let's create a new standard for seamless and intelligent trading. 🚀
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}