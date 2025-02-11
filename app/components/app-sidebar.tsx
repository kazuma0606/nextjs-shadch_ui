"use client"

import type * as React from "react"
import {
    AudioWaveform,
    Blocks,
    Calendar,
    Command,
    Home,
    Inbox,
    MessageCircleQuestion,
    Search,
    Settings2,
    Sparkles,
    Trash2,
} from "lucide-react"

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarRail,
} from "@/components/ui/sidebar"

// This is sample data.
const data = {
    teams: [
        {
            name: "Acme Inc",
            logo: Command,
            plan: "Enterprise",
        },
        {
            name: "Acme Corp.",
            logo: AudioWaveform,
            plan: "Startup",
        },
    ],
    navMain: [
        {
            title: "Search",
            url: "#",
            icon: Search,
        },
        {
            title: "Ask AI",
            url: "#",
            icon: Sparkles,
        },
        {
            title: "Home",
            url: "#",
            icon: Home,
            isActive: true,
        },
        {
            title: "Inbox",
            url: "#",
            icon: Inbox,
            badge: "10",
        },
    ],
    navSecondary: [
        {
            title: "Calendar",
            url: "#",
            icon: Calendar,
        },
        {
            title: "Settings",
            url: "#",
            icon: Settings2,
        },
        {
            title: "Templates",
            url: "#",
            icon: Blocks,
        },
        {
            title: "Trash",
            url: "#",
            icon: Trash2,
        },
        {
            title: "Help",
            url: "#",
            icon: MessageCircleQuestion,
        },
    ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar className="border-r-0" {...props}>
            <SidebarHeader>
                <SidebarMenu>
                    {data.teams.map((team) => (
                        <SidebarMenuItem key={team.name}>
                            <SidebarMenuButton size="lg" asChild>
                                <a href="#">
                                    <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                                        <team.logo className="size-4" />
                                    </div>
                                    <div className="flex flex-col gap-0.5 leading-none">
                                        <span className="font-semibold">{team.name}</span>
                                        <span className="">{team.plan}</span>
                                    </div>
                                </a>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    ))}
                </SidebarMenu>
                <SidebarMenu>
                    {data.navMain.map((item) => (
                        <SidebarMenuItem key={item.title}>
                            <SidebarMenuButton asChild isActive={item.isActive}>
                                <a href={item.url}>
                                    <item.icon />
                                    <span>{item.title}</span>
                                </a>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    ))}
                </SidebarMenu>
            </SidebarHeader>
            <SidebarContent>{/* Add your sidebar content here */}</SidebarContent>
            <SidebarFooter>
                <SidebarMenu>
                    {data.navSecondary.map((item) => (
                        <SidebarMenuItem key={item.title}>
                            <SidebarMenuButton asChild>
                                <a href={item.url}>
                                    <item.icon />
                                    <span>{item.title}</span>
                                </a>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    ))}
                </SidebarMenu>
            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
    )
}

