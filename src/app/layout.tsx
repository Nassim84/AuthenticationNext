"use client";

import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/react-query";
import { Toaster } from "sonner";
import "./globals.css";

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="fr" suppressHydrationWarning>
			<body className="min-h-screen bg-background text-foreground">
				<QueryClientProvider client={queryClient}>
					{children}
					<Toaster richColors position="top-right" />
				</QueryClientProvider>
			</body>
		</html>
	);
}
