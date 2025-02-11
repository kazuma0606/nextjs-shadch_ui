"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { AppSidebar } from "./app-sidebar"
import { SidebarProvider, SidebarInset, SidebarTrigger } from "@/components/ui/sidebar"

export default function MyComponents() {
    const [isScrolled, setIsScrolled] = useState(false)
    const { theme, setTheme } = useTheme()

    if (typeof window !== "undefined") {
        window.addEventListener("scroll", () => {
            setIsScrolled(window.scrollY > 20)
        })
    }

    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
                <div className="min-h-screen bg-background font-sans antialiased">
                    {/* Header with Menu and Dark Mode Toggle */}
                    <header
                        className={`sticky top-0 z-40 w-full ${isScrolled ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60" : ""
                            }`}
                    >
                        <div className="container flex h-16 items-center justify-between">
                            <SidebarTrigger />
                            {/* Dark Mode Toggle */}
                            <Button
                                variant="ghost"
                                size="icon"
                                aria-label="Toggle theme"
                                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                            >
                                <Sun className="h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                                <Moon className="absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                                <span className="sr-only">Toggle theme</span>
                            </Button>
                        </div>
                    </header>

                    {/* Hero Section */}
                    <section className="relative h-[500px] overflow-hidden">
                        <div className="relative h-full w-full">
                            <Image
                                src="/blogimg.jpg"
                                alt="Tech background"
                                fill
                                className="object-cover"
                                priority
                            />
                            <div className="absolute inset-0 bg-black/50">
                                <div className="container h-full flex items-center">
                                    <div className="max-w-2xl text-white">
                                        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">よっしーのブログ</h1>
                                        <p className="text-xl mb-6">技術と創造性の融合</p>
                                        <Button variant="secondary">記事を読む</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Latest Posts Section */}
                    <section className="py-12">
                        <div className="container">
                            <h2 className="text-3xl font-bold mb-8">最新記事</h2>
                            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                                {[1, 2, 3].map((i) => (
                                    <Card key={i}>
                                        <CardHeader>
                                            <CardTitle>記事タイトル {i}</CardTitle>
                                            <CardDescription>2024/01/{i}</CardDescription>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-muted-foreground">記事の説明文がここに入ります。</p>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Footer */}
                    <footer className="border-t py-6 md:py-0">
                        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
                            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                                Built with Next.js and shadcn/ui
                            </p>
                        </div>
                    </footer>
                </div>
            </SidebarInset>
        </SidebarProvider>
    )
}

