/// <reference types="@wdio/globals/types" />
import type { World } from '@wdio/cucumber-framework'

declare global {
    var browser: WebdriverIO.Browser
    var Given: (pattern: RegExp | string, callback: (this: World, ...args: any[]) => Promise<void> | void) => void
    var When: (pattern: RegExp | string, callback: (this: World, ...args: any[]) => Promise<void> | void) => void
    var Then: (pattern: RegExp | string, callback: (this: World, ...args: any[]) => Promise<void> | void) => void
}

export {}