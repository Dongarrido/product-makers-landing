'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { ChatBubbleOvalLeftIcon } from '@heroicons/react/24/outline'
import { Button } from './ui/button'
import { AppFilters } from './ui/app-filters'
import { Tag } from './ui/tag'

// Types
type TimeFilter = 'daily' | 'weekly' | 'all-time'

interface Product {
  id: number
  title: string
  description: string
  image: string
  votes: number
  comments: number
  tags: string[]
  hasVoted: boolean
}

interface ForumThread {
  id: number
  title: string
  author: string
  votes: number
  comments: number
  hasVoted: boolean
}

interface PricingPlan {
  name: string
  price: number
  description: string
  features: string[]
}

interface Testimonial {
  name: string
  role: string
  image: string
  content: string
}

interface FAQ {
  question: string
  answer: string
}

// Data
const productList: Product[] = [
  {
    id: 1,
    title: "AI Writing Assistant",
    description: "Boost your writing productivity with AI-powered suggestions and editing.",
    image: "https://picsum.photos/seed/product1/200",
    votes: 128,
    comments: 32,
    tags: ["AI", "Productivity", "Writing"],
    hasVoted: false
  },
  {
    id: 2,
    title: "Design System Generator",
    description: "Create consistent design systems for your projects in minutes.",
    image: "https://picsum.photos/seed/product2/200",
    votes: 95,
    comments: 28,
    tags: ["Design", "Tools", "Development"],
    hasVoted: false
  },
  {
    id: 3,
    title: "Social Media Scheduler",
    description: "Schedule and analyze your social media content across platforms.",
    image: "https://picsum.photos/seed/product3/200",
    votes: 76,
    comments: 24,
    tags: ["Social Media", "Marketing"],
    hasVoted: false
  }
]

const threadList: ForumThread[] = [
  {
    id: 1,
    title: "How did you get your first 100 users?",
    author: "Sarah Miller",
    votes: 45,
    comments: 23,
    hasVoted: false
  },
  {
    id: 2,
    title: "Best stack for a solo founder in 2024?",
    author: "John Chen",
    votes: 38,
    comments: 42,
    hasVoted: false
  },
  {
    id: 3,
    title: "Share your landing page conversion tips",
    author: "Alex Thompson",
    votes: 32,
    comments: 18,
    hasVoted: false
  }
]

const pricingPlans: PricingPlan[] = [
  {
    name: "Free",
    price: 0,
    description: "Perfect for side projects and early-stage products",
    features: [
      "Up to 5 products",
      "Basic analytics",
      "Community access",
      "Email support"
    ]
  },
  {
    name: "Pro",
    price: 29,
    description: "Everything you need to grow your product",
    features: [
      "Unlimited products",
      "Advanced analytics",
      "Priority support",
      "Custom domain",
      "Remove branding",
      "API access"
    ]
  },
  {
    name: "Enterprise",
    price: 99,
    description: "For teams and businesses scaling up",
    features: [
      "Everything in Pro",
      "Custom integrations",
      "Dedicated support",
      "Team collaboration",
      "SLA guarantee",
      "Custom contracts"
    ]
  }
]

const testimonials: Testimonial[] = [
  {
    name: "Emma Watson",
    role: "Product Manager",
    image: "https://picsum.photos/seed/emma/200",
    content: "The quality of feedback and support from the community is outstanding. It's like having a team of advisors."
  },
  {
    name: "David Kim",
    role: "Indie Maker",
    image: "https://picsum.photos/seed/david/200",
    content: "This platform helped me validate my idea and find my first paying customers. Invaluable for indie makers."
  },
  {
    name: "Maria Garcia",
    role: "Startup Founder",
    image: "https://picsum.photos/seed/maria/200",
    content: "The exposure and connections I've made here have been crucial for my startup's growth."
  }
]

const faqs: FAQ[] = [
  {
    question: "¿Qué incluye el plan gratuito?",
    answer: "El plan gratuito incluye acceso a todas las funcionalidades básicas, incluyendo la creación de hasta 5 productos, análisis básicos y acceso a la comunidad."
  },
  {
    question: "¿Puedo cambiar de plan en cualquier momento?",
    answer: "Sí, puedes actualizar o cambiar tu plan en cualquier momento. Los cambios se aplicarán inmediatamente y se ajustará el cobro de manera prorrateada."
  },
  {
    question: "¿Ofrecen descuentos para startups?",
    answer: "Sí, ofrecemos descuentos especiales para startups early-stage. Contáctanos para más información sobre nuestro programa de startups."
  },
  {
    question: "¿Cómo funciona el soporte prioritario?",
    answer: "Los usuarios del plan Pro y Enterprise tienen acceso a soporte prioritario con tiempos de respuesta garantizados de menos de 4 horas en días hábiles."
  },
  {
    question: "¿Puedo cancelar mi suscripción en cualquier momento?",
    answer: "Sí, puedes cancelar tu suscripción en cualquier momento sin compromisos a largo plazo. No hay cargos por cancelación."
  }
]

// Utilities
const getTagVariant = (index: number): 'blue' | 'green' | 'red' => {
  switch (index % 3) {
    case 0:
      return 'green'
    case 1:
      return 'red'
    default:
      return 'blue'
  }
}

// Component
export function HomeContent() {
  const [currentFilter, setCurrentFilter] = useState<TimeFilter>('daily')
  const [products, setProducts] = useState<Product[]>(productList)
  const [threads, setThreads] = useState<ForumThread[]>(threadList)
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null)

  const handleProductVote = (productId: number) => {
    setProducts(products.map(product => {
      if (product.id === productId) {
        return {
          ...product,
          votes: product.hasVoted ? product.votes - 1 : product.votes + 1,
          hasVoted: !product.hasVoted
        }
      }
      return product
    }))
  }

  const handleThreadVote = (threadId: number) => {
    setThreads(threads.map(thread => {
      if (thread.id === threadId) {
        return {
          ...thread,
          votes: thread.hasVoted ? thread.votes - 1 : thread.votes + 1,
          hasVoted: !thread.hasVoted
        }
      }
      return thread
    }))
  }

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index)
  }

  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <section className="py-20 w-full">
        <div className="max-w-[1440px] w-full mx-auto px-4 md:px-8 lg:px-12 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 mx-auto">
            Empowering the Next<br />Generation of Product<br />Makers
          </h1>
          <p className="text-xl text-gray-500 mb-8 max-w-2xl mx-auto">
            Join our community of creators, innovators, and builders. Share, learn, and grow with the best tools and resources.
          </p>
          <div className="flex items-center justify-center gap-4">
            <Button size="lg">Get Started</Button>
            <Button variant="outline" size="lg">Learn More</Button>
          </div>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">10K+</div>
              <div className="text-sm text-gray-500">Makers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">50K+</div>
              <div className="text-sm text-gray-500">Products</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">100K+</div>
              <div className="text-sm text-gray-500">Monthly Visitors</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="text-sm text-gray-500">Success Stories</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-8 bg-gray-50 w-full">
        <div className="max-w-[1440px] w-full mx-auto px-4 md:px-8 lg:px-12">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Products Column */}
            <div className="flex-1 min-w-0">
              <div className="mb-6">
                <h2 className="text-2xl font-bold mb-4">Popular Products</h2>
                <AppFilters
                  currentFilter={currentFilter}
                  onFilterChange={setCurrentFilter}
                />
              </div>

              <div className="grid gap-6">
                {products.map((product) => (
                  <div
                    key={product.id}
                    className="flex gap-6 p-6 bg-white rounded-lg border hover:shadow-md transition-shadow"
                  >
                    <div className="relative w-[100px] h-[100px] flex-shrink-0">
                      <Image
                        src={product.image}
                        alt={product.title}
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h2 className="text-xl font-semibold">{product.title}</h2>
                        <div className="flex items-center gap-4">
                          <Button
                            variant={product.hasVoted ? "default" : "outline"}
                            size="sm"
                            onClick={() => handleProductVote(product.id)}
                            className="flex items-center gap-2 border hover:border-gray-400"
                          >
                            <span>▲</span>
                            {product.votes}
                          </Button>
                          <Button
                            variant="ghost"
                            size="sm"
                            className="flex items-center gap-1 border hover:border-gray-400"
                          >
                            <ChatBubbleOvalLeftIcon className="w-4 h-4" />
                            {product.comments}
                          </Button>
                        </div>
                      </div>
                      <p className="text-gray-600 mb-3">{product.description}</p>
                      <div className="flex gap-2">
                        {product.tags.map((tag, index) => (
                          <Tag key={index} variant={getTagVariant(index)}>
                            {tag}
                          </Tag>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Forum Threads Column */}
            <div className="lg:w-80 w-full flex-shrink-0">
              <div className="invisible h-8 mb-4">
                <h2 className="text-2xl font-bold">Placeholder</h2>
              </div>
              <h2 className="text-2xl font-bold mb-6">Trending Forum Threads</h2>
              <div className="divide-y divide-gray-200">
                {threads.map((thread) => (
                  <div key={thread.id} className="py-6 first:pt-0 last:pb-0">
                    <div className="space-y-2">
                      <div className="text-sm text-gray-600">{thread.author}</div>
                      <div className="font-medium">
                        {thread.title}
                      </div>
                      <div className="flex items-center gap-4">
                        <Button
                          variant={thread.hasVoted ? "default" : "ghost"}
                          size="sm"
                          onClick={() => handleThreadVote(thread.id)}
                          className="flex items-center gap-1.5 h-auto px-3 py-1.5 text-sm text-gray-600 hover:text-gray-900 border hover:border-gray-400"
                        >
                          <span>▲</span>
                          <span>Upvote</span>
                          <span>({thread.votes})</span>
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="flex items-center gap-1.5 h-auto px-3 py-1.5 text-sm text-gray-600 hover:text-gray-900 border hover:border-gray-400"
                        >
                          <ChatBubbleOvalLeftIcon className="w-4 h-4" />
                          <span>{thread.comments}</span>
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <Button variant="outline" className="w-full">View all</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-white w-full">
        <div className="max-w-[1440px] w-full mx-auto px-4 md:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">
              Choose the perfect plan for your needs. No hidden fees.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div
                key={plan.name}
                className={`relative p-8 rounded-2xl transition-all duration-300 ${
                  index === 1 
                    ? 'bg-primary text-white scale-105 shadow-xl' 
                    : 'bg-white border hover:border-primary hover:shadow-lg'
                }`}
              >
                {index === 1 && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary-foreground text-primary text-sm font-semibold px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                )}
                <h3 className="text-2xl font-semibold mb-2">{plan.name}</h3>
                <div className="flex items-baseline mb-6">
                  <span className="text-5xl font-bold">${plan.price}</span>
                  <span className={`ml-2 ${index === 1 ? 'text-white/80' : 'text-gray-600'}`}>/month</span>
                </div>
                <p className={`mb-8 ${index === 1 ? 'text-white/80' : 'text-gray-600'}`}>{plan.description}</p>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span className={`text-lg ${index === 1 ? 'text-green-300' : 'text-green-500'}`}>✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  variant={index === 1 ? 'default' : 'outline'}
                  className={`w-full ${index === 1 ? 'bg-white text-primary hover:bg-white/90' : ''}`}
                >
                  Get Started
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-[#f9fafb] w-full">
        <div className="max-w-[1440px] w-full mx-auto px-4 md:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What Makers Are Saying</h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">
              Join thousands of satisfied makers who are building the future.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {testimonials.map((testimonial) => (
              <div key={testimonial.name} className="bg-white p-8 rounded-lg border border-gray-100 shadow-sm flex flex-col">
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative w-14 h-14 flex-shrink-0">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-lg">{testimonial.name}</div>
                    <div className="text-gray-500">{testimonial.role}</div>
                  </div>
                </div>
                <p className="text-gray-600 text-base leading-relaxed">{testimonial.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-24 bg-white w-full">
        <div className="max-w-[1440px] w-full mx-auto px-4 md:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Preguntas Frecuentes</h2>
            <p className="text-xl text-gray-500 max-w-2xl mx-auto">
              Encuentra respuestas a las preguntas más comunes sobre nuestros servicios.
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="divide-y border-t border-b border-gray-200">
              {faqs.map((faq, index) => (
                <div key={index} className="py-5">
                  <button 
                    className="flex w-full justify-between items-start text-left focus:outline-none group"
                    onClick={() => toggleFaq(index)}
                    aria-expanded={openFaqIndex === index}
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-xl font-bold text-[#9bca3b] w-[40px]">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <h3 className="text-xl font-semibold group-hover:text-[#9bca3b] transition-colors">
                        {faq.question}
                      </h3>
                    </div>
                    <span className="text-2xl font-bold text-[#9bca3b] ml-4 flex-shrink-0 transition-transform">
                      {openFaqIndex === index ? "−" : "+"}
                    </span>
                  </button>
                  {openFaqIndex === index && (
                    <div className="mt-4 ml-[40px] pl-4 text-gray-600 border-l border-gray-200">
                      <p className="py-2">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 w-full">
        <div className="max-w-[1440px] w-full mx-auto px-4 md:px-8 lg:px-12 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white font-semibold text-lg mb-4">Product Makers</h3>
              <p className="text-gray-400">
                Empowering the next generation of makers to build, launch, and grow.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Community</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Resources</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Licenses</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Product Makers. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
} 