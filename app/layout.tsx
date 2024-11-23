// YOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO

import './styles/globals.css'
import '@mantine/core/styles.css';
import React from 'react';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import { AppShell, AppShellHeader, AppShellMain, AppShellFooter } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks';
import SiteHeader from '../components/SiteHeader/SiteHeader'
import SiteFooter from '../components/SiteFooter/SiteFooter'

export const metadata = {
  title: 'Adviser Elite',
  description: 'Adviser Elite',
}


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ColorSchemeScript />
        <link rel="icon" href="icon.ico" />
      </head>
      <body>
        <MantineProvider>
          <AppShell header={{height: 56}}>
            <AppShellHeader>
              <SiteHeader />
            </AppShellHeader>
            <AppShellMain>
              {children}
              <SiteFooter />
            </AppShellMain>
            <AppShellFooter>
            </AppShellFooter>
          </AppShell>
        </MantineProvider>
      </body>
    </html>
  );
}
